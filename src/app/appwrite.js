import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("69092b610000c17eb026"); // PASTE YOUR REAL PROJECT ID HERE

export const account = new Account(client);

// You can add other Appwrite services here, like Databases, Storage, etc.
// For example:
// import { Databases } from 'appwrite';
// export const databases = new Databases(client);