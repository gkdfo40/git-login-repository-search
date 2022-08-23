import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

const ProtectedLayout = () => {
  const isLogined = useAppSelector((state) => state.auth.access_token);
  if (!isLogined) return <Navigate to="/login" replace={true} />;
  return <Outlet />;
};
export default ProtectedLayout;
