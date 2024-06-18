'use client'

import {logout} from "@/actions/logout";

export function LogoutButton() {
  return (
    <button
      onClick={() => logout()} type={'button'}
      className={'transition-all border-b-2 border-grey-100 hover:border-blue-300 hover:bg-blue-200 px-4 py-2'}
    >Logout</button>
  )
}
