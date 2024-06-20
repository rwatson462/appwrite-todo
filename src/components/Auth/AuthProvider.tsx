'use client'

import {createContext, PropsWithChildren, useContext} from "react";
import {Models} from "node-appwrite";

interface AuthContextInterface {
  user: Models.User<{}> | null;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as unknown as AuthContextInterface
)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({user, children}: PropsWithChildren<AuthContextInterface>) {
  const value = {
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}