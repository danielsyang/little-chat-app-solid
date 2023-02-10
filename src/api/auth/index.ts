import { BACKEND_API_URL } from "../";

type SignInInput = {
  email: string;
  password: string;
};

export async function signIn(signInInput: SignInInput) {
  return fetch(`${BACKEND_API_URL}/sign-in`, {
    method: "POST",
    body: JSON.stringify(signInInput),
  }).then((res) => res.json());
}
