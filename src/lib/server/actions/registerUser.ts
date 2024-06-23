'use server'

import {ID} from "node-appwrite"
import {login} from "@/lib/server/commands/login"
import {createAdminClient, getLoggedInUser} from "@/lib/server/appwrite";
import {redirect} from "next/navigation";
import {createListForUser} from "@/lib/server/commands/createListForUser";

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

  // log the user in after registering
  await login(email, password)

  const user = await getLoggedInUser()

  // create a default list for the user
  await createListForUser('Default list', user!.$id)

  redirect('/dashboard')
}
