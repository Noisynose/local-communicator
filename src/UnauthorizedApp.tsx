import { useAuthentication } from "./authentication/AuthenticationProvider";

export const UnauthorizedApp = () => {
  const { login } = useAuthentication();

  return (
    <>
        <h2>Error happened</h2>
        <div>
            <button onClick={login} className="login">
                Retry
            </button>
        </div>
    </>
  );
}