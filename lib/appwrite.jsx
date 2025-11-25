// import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

// const client = new Client();

// // Use environment variable for endpoint if provided (useful for cloud region or self-hosted)
// const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";

// client
//   .setEndpoint(APPWRITE_ENDPOINT) // Appwrite endpoint (cloud or self-hosted)
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // your project ID

// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);
// export { ID, Query };

// export default client;

// lib/appwrite.js

"use client";

import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

export const account = new Account(client);
export { ID };
export default client;
