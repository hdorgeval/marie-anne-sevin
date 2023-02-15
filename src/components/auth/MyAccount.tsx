import { FC, useCallback, useContext, useMemo, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
export const CreateAccountBadge: FC = () => {
  const userInfo = useContext(UserContext);
  const handleSignUp = useCallback(() => {
    userInfo.signup();
  }, [userInfo]);

  if (!userInfo.isAuthenticated) {
    return (
      <>
        <span
          className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1 cursor-pointer"
          onClick={handleSignUp}
        >
          Créer un compte
        </span>
      </>
    );
  }
  return null;
};
CreateAccountBadge.displayName = 'CreateAccountBadge';

export const LoginAccountBadge: FC = () => {
  const userInfo = useContext(UserContext);
  const handleSignIn = useCallback(() => {
    userInfo.login();
  }, [userInfo]);

  if (!userInfo.isAuthenticated) {
    return (
      <>
        <span
          className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1 cursor-pointer"
          onClick={handleSignIn}
        >
          Se connecter
        </span>
      </>
    );
  }
  return null;
};
LoginAccountBadge.displayName = 'LoginAccountBadge';

export const LogoutAccountBadge: FC = () => {
  const userInfo = useContext(UserContext);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const handleLogout = useCallback(async () => {
    setIsDisconnecting(true);
    await userInfo.logout();
    setTimeout(() => {
      setIsDisconnecting(false);
    }, 5000);
  }, [userInfo]);

  if (userInfo.isAuthenticated) {
    return (
      <>
        {isDisconnecting ? (
          <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1 cursor-pointer">
            Déconnexion en cours ...
          </span>
        ) : (
          <span
            className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1 cursor-pointer"
            onClick={handleLogout}
          >
            Se déconnecter
          </span>
        )}
      </>
    );
  }
  return null;
};
LogoutAccountBadge.displayName = 'LogoutAccountBadge';

export const AccountFullNameBadge: FC = () => {
  const userInfo = useContext(UserContext);

  const hasFullName = useMemo(() => {
    return userInfo?.user?.user_metadata?.full_name !== undefined;
  }, [userInfo?.user?.user_metadata?.full_name]);

  const fullName = useMemo(() => {
    return userInfo?.user?.user_metadata?.full_name;
  }, [userInfo?.user?.user_metadata?.full_name]);

  if (userInfo.isAuthenticated) {
    return (
      <>
        {hasFullName ? (
          <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
            {fullName}
          </span>
        ) : null}
      </>
    );
  }
  return null;
};
AccountFullNameBadge.displayName = 'AccountFullNameBadge';
