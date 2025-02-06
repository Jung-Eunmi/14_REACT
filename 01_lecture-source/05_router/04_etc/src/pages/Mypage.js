import {Navigate} from 'react-router-dom';

/*
    컴포넌트 내에서 권한이나 다른 특정한 상황에 의해
    다른 페이지로 보내고 싶을 때 Navigate 라는 컴포넌트를 사용 할 수 있다.
    useNavigate 랑 동일한 역할을 하지만 함수로 작성할 것인지 
    컴포넌트로 작성할 것인지에 따라 선택 할 수 있다.
*/

function Mypage() {

    // 이런식으로 1. 로그인 유무에 따라 페이지를 정할수도있고
    // 2. 권한에 따라 보여줄 페이지를 정할수도있고
    // 3. 상태코드에 따라 에러페이지를 정할 수 있다
    const isLogin = false;

    if(!isLogin) {
        return <Navigate to='/menu'/>;
    }

    return(
        <div>
            <h1>마이페이지!</h1>
        </div>
    );
}

export default Mypage;