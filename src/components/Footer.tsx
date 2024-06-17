import {PropsWithChildren} from "react";

export function Footer({children}: PropsWithChildren) {
  return (
    <footer className={'flex justify-evenly items-center max-w-[1000px] mx-auto p-4'}>
      {children}
    </footer>
  )
}