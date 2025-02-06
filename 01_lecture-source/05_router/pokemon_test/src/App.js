import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Poketmon from './pages/Poketmon';
import PoketmonDetail from './pages/PoketmonDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='monsterList'>
            <Route index element={<Poketmon/>}/>
            <Route path=':id' element={<PoketmonDetail/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
