import {PropsWithChildren} from "react";

export function Fieldset({children}: PropsWithChildren) {
  return (
    <fieldset className={'flex space-x-2'}>
      {children}
    </fieldset>
  )
}
