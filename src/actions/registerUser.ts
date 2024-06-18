'use server'

import {AppwriteException, ID} from "appwrite"
import {login} from "@/actions/login"
import {account} from "@/app/setup/appwrite";

export async function registerUser(form: FormData) {
  'use server'

  const email = form.get('email') as string
  const name = form.get('name') as string
  const password = form.get('password') as string

  try {
    const user = await account.create(
      ID.unique(), email, password, name
    )

    // pass the register form straight through so we can reuse the login form action
    return await login(form)
  } catch(err) {
    console.error((err as AppwriteException).message)
    return
  }
}
