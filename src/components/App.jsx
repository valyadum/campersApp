import { Route, Routes } from 'react-router-dom';
import Campers from './Campers/Campers';
import Favorites from './Favorites/Favorites';
import Features from './Features/Features';
import HomePage from './HomePage/HomePage';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Campers />}>
            <Route path="features" element={<Features/>} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
