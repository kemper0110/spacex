import logo from '../../assets/logocorners.png'
import {Nav} from "./Nav.tsx";

const Header = () => (
    <header className={'flex justify-between items-center max-w-[1170px] mx-auto'}>
        <img src={logo} alt={'SpaceX'}/>
        <Nav/>
    </header>
);

export default Header;