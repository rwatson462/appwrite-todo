'use server'

import {redirect} from "next/navigation";
import {login as loginCommand} from "@/lib/server/commands/login";

export async function login(form: FormData) {
  'use server'

  const email = form.get('email') as string
  const password = form.get('password') as string

  await loginCommand(email, password)

  redirect('/dashboard')
}
