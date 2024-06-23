'use server'

import {createSessionClient} from "@/lib/server/appwrite";
import {cookies} from "next/headers";
import {SESSION_NAME} from "@/lib/config";
import {redirect} from "next/navigation";

export async function logout() {
  'use server'

  /**
   * We don't really care if this logout action fails here,
   * it's probably because the user is already logged out.
   */
  try {
    const {account} = await createSessionClient()

    await account.deleteSession('current')
  } catch (err) {
    console.log(err)
  }

  cookies().delete(SESSION_NAME)

  redirect('/')
}
