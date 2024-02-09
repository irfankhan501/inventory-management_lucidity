import LogoutIcon from '@mui/icons-material/Logout';
import ToggleView from '../toggle-view';
import './header.css'

const Header = (): JSX.Element => {


    return (
        <div className='header'>
           <ToggleView />
           <div className='divider'></div>
           <LogoutIcon />
        </div>
    );
};

export default Header;
