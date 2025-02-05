import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Layout from './layouts/Layout';
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path=":menuCode" element={<MenuDetail/>}/>
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
