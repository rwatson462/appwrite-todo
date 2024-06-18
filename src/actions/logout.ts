'use server'

import {account} from "@/app/setup/appwrite"

export async function logout() {
  'use server'

  await account.deleteSession('current')
}
