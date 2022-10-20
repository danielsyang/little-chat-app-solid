import { BACKEND_API_URL } from "../";

export interface Messages {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export async function getMessages() {
  return fetch(`${BACKEND_API_URL}/get-messages`).then((res) => res.json());
}
