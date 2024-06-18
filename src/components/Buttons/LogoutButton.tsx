'use client'

import {logout} from "@/actions/logout";

export function LogoutButton() {
  return (
    <button
      onClick={() => logout()} type={'button'}
      className={'transition-all px-4 py-2 rounded-lg border border-grey-200 hover:border-blue-300 hover:underline hover:shadow-lg shadow'}
    >Logout</button>
  )
}
