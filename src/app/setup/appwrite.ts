import {Client} from "appwrite";

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.APPWRITE_PROJECT_ID as string);
