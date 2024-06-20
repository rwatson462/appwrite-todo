'use client'

import {PropsWithChildren} from "react";
import {useAuth} from "@/components/Auth/AuthProvider";

export function LoggedOutWrapper({children}: PropsWithChildren) {
  const {user} = useAuth()

  if (user !== null) {
    return null
  }

  return children
}
