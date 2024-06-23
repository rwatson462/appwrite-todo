'use server'

import {createAdminClient} from "@/lib/server/appwrite";
import {cookies} from "next/headers";
import {SESSION_NAME} from "@/lib/config";

export async function login(email: string, password: string) {
  const { account } = await createAdminClient()

  const session = await account.createEmailPasswordSession(email, password)

  cookies().set(SESSION_NAME, session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
}