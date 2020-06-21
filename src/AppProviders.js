import React from "react";
import { AuthProvider } from "context/auth";
import { UserProvider } from "context/user";
import { ExercisesProvider } from "context/exercises";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <ExercisesProvider>{children}</ExercisesProvider>
      </UserProvider>
    </AuthProvider>
  );
}
