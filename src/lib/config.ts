import {Permission, Role} from "node-appwrite";

/**
 * The name of the session cookie.  We use this in several places to makes sense to have that as a reusable value.
 */
export const SESSION_NAME = 'appwrite-session'

/**
 * Handy little helper to return an Appwrite permissions set representing
 * read and write access only for the given user id.
 */
export function myAccessPermissions(userId: string) {
  return [
    Permission.read(Role.user(userId)),
    Permission.write(Role.user(userId)),
  ]
}