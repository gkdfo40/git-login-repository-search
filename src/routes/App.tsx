import './App.scss';
import { Route, Routes } from 'react-router-dom';
import ProtectedLayout from 'components/ProtectedLayout';
import SearchPage from 'components/SearchPage/SearchPage';
import LoginPage from 'components/LoginPage/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<SearchPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
