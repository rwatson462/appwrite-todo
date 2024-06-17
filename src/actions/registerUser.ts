import {Account, AppwriteException, ID} from "appwrite";
import {client} from "@/app/setup/appwrite";
import {redirect} from "next/navigation";

export async function registerUser(form: FormData) {
  'use server';

  const account = new Account(client)

  const email = form.get('email') as string
  const name = form.get('name') as string
  const password = form.get('password') as string

  try {
    const user = await account.create(
      ID.unique(), email, password, name
    )

    await account.createEmailPasswordSession(
      email,
      password
    );

    redirect('/dashboard')
  } catch(err) {
    console.error((err as AppwriteException).message)
    return
  }
}