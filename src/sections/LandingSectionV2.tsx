import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import SkillBucket from '../components/SkillBucket';

const LandingSection = () => {
    return (
      <section className='flex flex-col items-start bg-dark-bg h-screen p-5'>
        <div className="w-full flex flex-row justify-end">
          <LinkedInIcon className='mx-1 text-ln-icon' />
          <TwitterIcon className='mx-1 text-tw-icon' />
          <InstagramIcon className='mx-1 text-ig-icon' />
          <FacebookIcon className='mx-1 text-fb-icon' />
        </div>
        <div className='w-full flex flex-row py-5'>
          <div className='basis-1/2 bg-white m-2'>HI</div>
          <div className='basis-1/2 m-2'>
            <SkillBucket />
          </div>
        </div>
      </section>
    );
}

export default LandingSection;