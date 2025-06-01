'use server';

import {MongoClient} from "mongodb";

export async function getMongoClient() {
  return new MongoClient(process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27100/');
}

export async function getDatabase() {
  return (await getMongoClient()).db('colabhub');
}