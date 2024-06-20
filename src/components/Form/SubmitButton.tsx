import {PropsWithChildren} from "react";

export function SubmitButton({ children }: PropsWithChildren) {
  return (
    <button type={'submit'} className={'bg-sky-500 rounded px-4 py-1 text-white'}>
      {children}
    </button>
  )
}