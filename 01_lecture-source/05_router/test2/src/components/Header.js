import headerStyle from './Header.module.css';


function Header() {
    return(
        <div className={headerStyle.Header}>
            <h1>하이미디어식당</h1>
        </div>
    );
}

export default Header;