import { AuthenticatedApp } from "./AuthenticatedApp";
import { useAuthentication } from "./authentication/AuthenticationProvider";
import { useEffect } from "react";
import { UnauthorizedApp } from "./UnauthorizedApp";
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/theme';


export const App = () => {
  const { user, login } = useAuthentication();

  useEffect(() => {
    login();
  }, []);

  const findAppState = () => {
    switch(user.tag) {
      case 'authenticated':
        return <AuthenticatedApp />;
      case 'unauthorized':
        return <UnauthorizedApp />;
      case 'unauthenticated':
        return <p>Loading...</p>;
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {findAppState()}
    </ChakraProvider>
  );
}
