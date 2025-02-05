import menus from '../data/menu-detail.json';

/* menus 라는 이름으로 json 데이터를 사용하겠다. */

// 메뉴 데이터 통채로 return
export function getMenuList() {
    console.log('menus', menus);
    return menus;
}