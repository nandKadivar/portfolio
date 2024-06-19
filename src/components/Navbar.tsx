import Logo from "../icons/logo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return (
        <div className="w-full flex flex-row justify-between">
          <a href="">
            <Logo />
          </a>
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/nand-kadivar/" target="_blank"><LinkedInIcon className='mx-1 text-ln-icon' style={{fontSize: '26px'}} /></a>
            <a href="https://github.com/nandKadivar" target="_blank"><GitHubIcon className='mx-1 text-gh-icon' style={{fontSize: '24px'}} /></a>
            <a href="mailto:kadivarnand2101@gmail.com" target="_blank"><AlternateEmailIcon className='mx-1 text-gm-icon' style={{fontSize: '24px'}} /></a>
            <a href="https://www.youtube.com/channel/UCKsEL1bbp3F2lDNOFwoeH-Q" target="_blank"><YouTubeIcon className='mx-1 text-yt-icon' style={{fontSize: '26px'}} /></a>
          </div>
        </div>
    );
};

export default Navbar;