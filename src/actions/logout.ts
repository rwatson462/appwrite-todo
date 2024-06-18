'use server'

import {Account} from "appwrite"
import {client} from "@/app/setup/appwrite"

export async function logout() {
  'use server'

  const account = new Account(client)

  await account.deleteSession('current')
}
