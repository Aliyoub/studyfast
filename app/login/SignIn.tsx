import * as React from 'react';
import { AuthProvider, AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
// preview-start
// const providers = [
//   { id: 'google', name: 'Google' },
//   { id: 'facebook', name: 'Facebook' },
// ];

type SupportedAuthProvider = 'google' | 'facebook' | 'github' | 'twitter';


// export interface AuthProvider {
//   id: string;
//   displayName: string;
//   providerType: string;
// }

const providers: AuthProvider[] = [
  { id: 'google', name: 'Google' },
  { id: 'facebook', name: 'Facebook' }
];

// Assuming the structure of AuthProvider is known
// const authProviders: AuthProvider[] = providers.map(provider => ({
//   id: provider.id,
//   displayName: provider.name, // Map name to displayName
//   // providerType: 'oauth' // Or another relevant value for providerType
// }));


const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function SignIn() {
  const theme = useTheme();
  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn}  providers={providers} />
    </AppProvider>
    // preview-end
  );
}
