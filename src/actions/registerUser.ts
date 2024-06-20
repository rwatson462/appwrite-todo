'use server'

import {ID} from "node-appwrite"
import {login} from "@/actions/login"
import {createAdminClient} from "@/lib/server/appwrite";

export async function registerUser(form: FormData) {
  'use server'

  const email = form.get('email') as string
  const name = form.get('name') as string
  const password = form.get('password') as string

  const { account } = await createAdminClient()

  try {
    await account.create(ID.unique(), email, password, name)
  } catch(err) {
    console.error(err)
  }

  // pass the register form straight through so we can reuse the login form action
  await login(form)
}
