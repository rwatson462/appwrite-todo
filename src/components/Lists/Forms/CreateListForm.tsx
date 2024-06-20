'use client'

import {createListForUser} from "@/lib/server/actions/createListForUser";
import {useRef, useState} from "react";
import {SubmitButton} from "@/components/Form/SubmitButton";
import {Fieldset} from "@/components/Form/Fieldset";

/**
 * Because we want to reset the <input> after submitting the form, this component needs to be a client component so we can
 * use the useRef hook.  A fun little problem with the onSubmit handler is that it's called before the formData is sent, so
 * we use setTimeout here to delay resetting until after the formData has been given to the action.
 */

export function CreateListForm() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form action={createListForUser} onSubmit={() => setTimeout(() => inputRef.current!.value = '', 1)}>
      <Fieldset>
        <input name={'name'} id={'name'} placeholder={'List name'} className={'grow rounded border border-gray-300 px-2 py-1'} ref={inputRef}/>
        <SubmitButton>Create list</SubmitButton>
      </Fieldset>
    </form>
  )
}