import { Route, Routes } from 'react-router-dom';
import Campers from './Campers/Campers';
import Favorites from './Favorites/Favorites';
import HomePage from './HomePage/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Campers />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
