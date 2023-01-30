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
  },
  signup: () => {
    netlifyIdentity.open('signup');
    const hamburgerMenuCloseButton: HTMLButtonElement | null = document?.querySelector(
      'button#hamburger-close-button',
    );
    if (hamburgerMenuCloseButton) {
      hamburgerMenuCloseButton.click();
    }
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
