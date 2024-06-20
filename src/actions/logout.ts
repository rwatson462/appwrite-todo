'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {cookies} from "next/headers";
import {SESSION_NAME} from "@/lib/config";
import {redirect} from "next/navigation";

export async function logout() {
  'use server'

  const { account } = await createSessionClient()

  cookies().delete(SESSION_NAME)
  await account.deleteSession('current')

  redirect('/')
}
