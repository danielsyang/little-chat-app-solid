import { BACKEND_API_URL } from "../";

export interface Messages {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface CreateMessage {
  userId: string;
  content: string;
}

export async function getMessages() {
  return fetch(`${BACKEND_API_URL}/get-messages`).then((res) => res.json());
}

export async function createMessage(createMessage: CreateMessage) {
  return fetch(`${BACKEND_API_URL}/create-message`, {
    method: "POST",
    body: JSON.stringify(createMessage),
  }).then((res) => res.json());
}
