import menus from '../data/menu-detail.json';

/* menus 라는 이름으로 json 데이터를 사용하겠다. */

// 메뉴 데이터 통채로 return
export function getMenuList() {
    return menus;
}

// 전달 받은 메뉴코드를 기반으로 메뉴 상세 조회
export function getMenuByMenuCode(menuCode) {
    // PathVariable 값은 문자열이기 때문에 정수값이 필요하면 변환 필요!
    // console.log(typeof menuCode);

    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}

export function getSearchMenu(menuName) {
    // match 함수 사용
    // 포함 여부에 따라 인자가 포함되어있으면 반환해준다. 

    return menus.filter(menu => menu.menuName.match(menuName))
}