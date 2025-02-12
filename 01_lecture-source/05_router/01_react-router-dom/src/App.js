import {BrowserRouter, Routes, Route} from 'react-router-dom';
// const {useState} = React;
// const useState = React.useState 처럼 import 도 구조분해할당 이라고 보면 됨!
import About from './pages/About';
import Menu from './pages/Menu';
import Main from './pages/Main';

function App() {

  /*
    최초 프로젝트 기본 설정

    - 프로젝트 만들고 싶은 폴더에 오른쪽 마우스 클릭하여 Open in integrated terminal
     1. npx create-react-app ./
    - 이후 기본 셋팅
     2. src 폴더에 App.js, index.js 빼고 지우기!
     3. App.js, index.js 에 불필요한 import 구문, 코드 지우기
     4. npm install react-router-dom@6 으로 의존성 추가 

    - 라우팅이란?
     어떠한 요청을 어디로 안내 및 매핑할 것인지를 정해놓고 진행하는 것이다.
     리액트는 요청에 따라 요청에 매핑 된 컴포넌트를 렌더링한다.
     [ex] /menu/detail => <Detail/> 요청 한 주소와 컴포넌트를 매칭

    - react-router-dom 에서 제공
     1. BrowserRouter
      => 라우팅이 필요한 컴포넌트를 감싸는 컴포넌트이다. 
     2. Routes
      => Route 들을 묶어주는 단위 
     3. Route 
      => url 요청 주소와 컴포넌트를 매핑해주는 단위
  */

  return (
      <>
        <BrowserRouter>
          <Routes>
            {/* index element => 최초의 보여줄 페이지에 씀, path='/' 와 같은말 */}
            {/* <Route index element={<Main/>}/> */}
            <Route path='/' element={<Main/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
