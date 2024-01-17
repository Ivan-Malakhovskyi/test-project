import { GlobalStyle } from 'GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog';
import { Favorite } from './pages/Favorite';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
