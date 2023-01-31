import netlifyIdentity, { currentUser, User } from 'netlify-identity-widget';
import { createContext, useState } from 'react';

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity;
  }
}

export interface UserInfo {
  isAuthenticated: boolean;
  user: User | null;
  login: () => void;
  signup: () => void;
  logout: () => void;
}

export interface NetlifyIdentity {
  init: (options: netlifyIdentity.InitOptions) => void;
  open: (tabName?: 'signup' | 'login') => void;
  logout: () => Promise<void>;
  on: (event: 'login' | 'logout', cb: (user: User) => void | (() => void)) => void;
}

// You must run this once before trying to interact with the widget
netlifyIdentity.init({ locale: 'fr' });

function buildPasswordTogglerFragmentFor(
  inputElement: HTMLInputElement,
  iframeDocument: Document | undefined,
): DocumentFragment | null {
  const fragmentId = 'password-visibility-toggler';

  if (!iframeDocument || iframeDocument.querySelector(`#${fragmentId}`)) {
    return null;
  }

  const fragment = iframeDocument.createDocumentFragment();
  const div = iframeDocument.createElement('div');
  div.setAttribute('id', fragmentId);
  div.style.float = 'right';
  div.style.minWidth = '50px';
  div.style.height = '20px';
  div.style.marginBottom = '12px';

  const link = iframeDocument.createElement('a');
  link.setAttribute('href', '#');
  link.style.textDecoration = 'none';

  const span = iframeDocument.createElement('span');
  span.textContent = 'Afficher le mot de passe';
  link.appendChild(span);
  div.append(link);

  link.addEventListener('click', (event) => {
    event.preventDefault();
    const inputType = inputElement.getAttribute('type');
    if (inputType === 'password') {
      inputElement.setAttribute('type', 'text');
      span.textContent = 'Masquer le mot de passe';
      return;
    }

    inputElement.setAttribute('type', 'password');
    span.textContent = 'Afficher le mot de passe';
    return;
  });

  fragment.appendChild(div);
  return fragment;
}

function addPaswwordVisibilityToggler(): void {
  try {
    const netlifyFrames = Array.from(document.querySelectorAll('iframe#netlify-identity-widget'));
    const iframe: HTMLIFrameElement | null = netlifyFrames.pop() as HTMLIFrameElement;
    const iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document;

    const passwordInput: HTMLInputElement | null = iframeDocument?.querySelector(
      'input[type="password"]',
    ) as HTMLInputElement;
    const inputContainer = passwordInput?.parentElement as HTMLLabelElement;
    const fragment = buildPasswordTogglerFragmentFor(passwordInput, iframeDocument);

    if (inputContainer && fragment) {
      passwordInput.parentElement?.appendChild(fragment);
    }
  } catch (error) {
    // do nothing
  }
}

export const userContextInfo: UserInfo = {
  isAuthenticated: currentUser() !== null,
  user: currentUser(),
  login: () => {
    netlifyIdentity.open('login');
    const hamburgerMenuCloseButton: HTMLButtonElement | null = document?.querySelector(
      'button#hamburger-close-button',
    );
    if (hamburgerMenuCloseButton) {
      hamburgerMenuCloseButton.click();
    }
    window.setTimeout(() => addPaswwordVisibilityToggler(), 3000);
  },
  signup: () => {
    netlifyIdentity.open('signup');
    const hamburgerMenuCloseButton: HTMLButtonElement | null = document?.querySelector(
      'button#hamburger-close-button',
    );
    if (hamburgerMenuCloseButton) {
      hamburgerMenuCloseButton.click();
    }
    window.setTimeout(() => addPaswwordVisibilityToggler(), 3000);
  },
  logout: async () => {
    await netlifyIdentity.logout();
  },
};

netlifyIdentity.on('login', (user) => {
  userContextInfo.isAuthenticated = true;
  userContextInfo.user = user;
  netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
  userContextInfo.isAuthenticated = false;
  userContextInfo.user = null;
  netlifyIdentity.close();
});

export const UserContext = createContext<UserInfo>(userContextInfo);

export function useUserContextInfo() {
  const [userInfo, setUserInfo] = useState(userContextInfo);
  netlifyIdentity.on('login', (user) => {
    netlifyIdentity.close();
    setUserInfo(() => {
      return {
        isAuthenticated: true,
        user,
        login: userContextInfo.login,
        logout: userContextInfo.logout,
        signup: userContextInfo.signup,
      };
    });
  });

  netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    setUserInfo(() => {
      return {
        isAuthenticated: false,
        user: null,
        login: userContextInfo.login,
        logout: userContextInfo.logout,
        signup: userContextInfo.signup,
      };
    });
  });

  return [userInfo];
}

export function usePublicPage() {
  netlifyIdentity.close();
}
