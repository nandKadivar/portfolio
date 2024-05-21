import Logo from "../icons/logo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
    return (
        <div className="w-full flex flex-row justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex flex-row">
            <LinkedInIcon className='mx-1 text-ln-icon' />
            <TwitterIcon className='mx-1 text-tw-icon' />
            <InstagramIcon className='mx-1 text-ig-icon' />
            <FacebookIcon className='mx-1 text-fb-icon' />
          </div>
        </div>
    );
};

export default Navbar;