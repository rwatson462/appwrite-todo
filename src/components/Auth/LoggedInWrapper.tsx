'use client'

import {PropsWithChildren} from "react";
import {useAuth} from "@/components/Auth/AuthProvider";

export function LoggedInWrapper({children}: PropsWithChildren) {
  const {user} = useAuth()

  if (user === null) {
    return null
  }

  return children
}
