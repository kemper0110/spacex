import logo from '../../assets/logocorners.png'
import {Nav} from "./Nav.tsx";

const Header = () => (
    <header className={'flex justify-between items-center max-w-[1170px] mx-auto'}>
        <img src={logo} alt={'SpaceX'} className={'sm:w-min w-[200px] h-auto'}/>
        <Nav/>
    </header>
);

export default Header;