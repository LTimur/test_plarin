import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Favorites } from "./components/FavoriteCards";
import { MainLayout } from "./components/MainLayout";
import { Cards } from "./components/Cards";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Cards />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
