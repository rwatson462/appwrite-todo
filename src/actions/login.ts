'use server'

import {account} from "@/app/setup/appwrite";

export async function login(form: FormData) {
  'use server'

  const email = form.get('email') as string
  const password = form.get('password') as string

  return await account.createEmailPasswordSession(email, password)
}