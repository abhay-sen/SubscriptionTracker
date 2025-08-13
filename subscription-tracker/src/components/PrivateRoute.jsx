import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or spinner

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
