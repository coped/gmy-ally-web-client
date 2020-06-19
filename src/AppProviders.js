import React from "react";
import { AuthProvider } from "context/auth";
import { UserProvider } from "context/user";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
