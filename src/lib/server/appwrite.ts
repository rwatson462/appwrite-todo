'use server'

import {Client, Account, AppwriteException, Databases} from "node-appwrite";
import {cookies} from "next/headers";
import {SESSION_NAME} from "@/lib/config";

/**
 * Code taken from https://appwrite.io/docs/tutorials/nextjs-ssr-auth/step-3
 * We have 2 clients here:
 * Session Client which is a connection scoped to the user,
 * Admin Client which has access depending on an API key (which you should set to be "session create" only)
 */


// Saves us creating many of these for a single server action request
let sessionClient = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.APPWRITE_PROJECT_ID!)

let adminClient = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_KEY!)

export async function createSessionClient() {
  const session = cookies().get(SESSION_NAME)
  if (!session || !session.value) {
    throw new Error('No session')
  }

  sessionClient.setSession(session.value)

  return {
    get account() {
      return new Account(sessionClient)
    },
    get databases() {
      return new Databases(sessionClient)
    }
  }
}

export async function createAdminClient() {
  return {
    get account() {
      return new Account(adminClient);
    },
  };
}

/**
 * A convenience function to get the currently logged in user, or null if there isn't one.
 * We make sure to not throw an error here, as we don't want to crash the server if the user isn't logged in.
 */
export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient()
    return await account.get()
  } catch (error) {
    return null
  }
}
