import { Navigate } from "solid-start";
import { getToken } from "./token";

export default function ProtectedRoute({ children }) {
  const token = getToken();

  if (!token) {
    return <Navigate href="/sign-in" />;
  }

  return children;
}
