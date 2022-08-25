import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { login } from 'store/AuthSlice';
import styles from './loginPage.module.scss';

const LoginPage = () => {
  const isLogined = useAppSelector((state) => state.auth.access_token);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(login());
  };
  if (isLogined) return <Navigate to="/" replace={true} />;

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login with github</h2>
        <button onClick={onClick}>
          <strong>GitHub</strong> 계정으로 로그인
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
