import {PropsWithChildren} from "react";

export function Header({children}: PropsWithChildren) {
  return (
    <header className={'flex items-center justify-between max-w-[1000px] mx-auto p-4 space-x-4'}>
      {children}
    </header>
  )
}