import menu from '../data/menu-detail.json';

export function getMenuList() {
    return menu;
}

export function getMenuByCode(menuCode) {
    return menu.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}