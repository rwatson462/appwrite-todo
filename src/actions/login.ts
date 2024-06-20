'use server'

import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {createAdminClient} from "@/lib/server/appwrite";
import {SESSION_NAME} from "@/lib/config";

export async function login(form: FormData) {
  'use server'

  const { account } = await createAdminClient()

  const email = form.get('email') as string
  const password = form.get('password') as string

  const session = await account.createEmailPasswordSession(email, password)

  console.log(session)

  cookies().set(SESSION_NAME, session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect('/dashboard')
}
