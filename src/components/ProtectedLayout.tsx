import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  const [isLogined, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin((prev) => !prev);
  };
  if (!isLogined) return <Navigate to="/login" replace={true} />;
  return <Outlet />;
};
export default ProtectedLayout;
