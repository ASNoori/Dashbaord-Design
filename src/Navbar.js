import WindowIcon from '@mui/icons-material/Window';
import './Navbar.css';
import Searchbar from './Searchbar/Searchbar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Navbar(){
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const iconSize = isSmallScreen ? 'medium' : 'large';
return(
    <div className='nav-container'>
      <WindowIcon fontSize="large" className='window-icon'/>
      <div className='nav-items'>
         <Searchbar/>
         <div className='nav-icon-container'>
          <MailOutlineIcon className='nav-icon' fontSize={iconSize}/>
          <SettingsOutlinedIcon className='nav-icon' fontSize={iconSize}/>
          <span className='notify-icon'>
          <NotificationsNoneOutlinedIcon className='nav-icon' fontSize={iconSize}/>
          <span></span>
          </span>
          <img src="../profilephoto.jpg" alt="profile-photo" className='nav-profile-img'/>
         </div>
      </div>
    </div>
);

}