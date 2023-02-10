const TOKEN_KEY = "TOKEN_KEY";

export function setToken(t: string | null) {
  localStorage.setItem(TOKEN_KEY, t);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
