import {PropsWithChildren} from "react";

export function HeaderNav({children}: PropsWithChildren) {
  return (
    <ul className={'flex space-x-4 items-center'}>
      {children}
    </ul>
  )
}