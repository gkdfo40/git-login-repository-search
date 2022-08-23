import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

const LoginPage = () => {
  const isLogined = useAppSelector((state) => state.auth.access_token);
  if (isLogined) return <Navigate to="/" replace={true} />;

  return <div>loginPage</div>;
};
export default LoginPage;
