import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JsIcon from '../icons/js-icon';
import TsIcon from '../icons/ts-icon';
import CypressIcon from '../icons/cypress-icon'
import EmberIcon from '../icons/ember-icon'
import DockerIcon from '../icons/docker-icon'
import NodeIcon from '../icons/node-icon'
import ReactIcon from '../icons/react-icon'
import ReduxIcon from '../icons/redux-icon'
import ExpressIcon from '../icons/express-icon';
import JqueryIcon from '../icons/jquery-icon';
import TailwindIcon from '../icons/tailwind-icon';
import DynamoIcon from '../icons/dynamo-icon';
import MySqlIcon from '../icons/mysql-icon';
import MongoIcon from '../icons/mongo-icon';
import MuiIcon from '../icons/mui-icon';
import FigmaIcon from '../icons/figma-icon';
import PmIcon from '../icons/postman-icon';
import K8Icon from '../icons/k8-icon';
import SkillBucket from '../components/SkillBucket';
import JavaIcon from '../icons/java-icon';
import Terminal from '../components/Terminal';
import Logo from '../icons/logo';
import Navbar from '../components/Navbar';

interface LandingSectionProps {
  bg: string,
  color: string
}

const LandingSection = (props : LandingSectionProps) => {
    return (
      <section className={`shadow-xl min-h-screen flex flex-col items-start bg-${props.bg} p-5`}>
        <Navbar />
        
        <div className='w-full h-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 py-5'>
          <div className='min-h-100'>
            <Terminal />
          </div>
          <div className='p-3 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3'>
            <SkillBucket color={props.color} title='Frontend'>
                <JsIcon />
                <TsIcon />
                <EmberIcon />
                <ReactIcon />
                <ReduxIcon />
                <JqueryIcon />
            </SkillBucket>
            <SkillBucket color={props.color} title='UI/UX'>
              <FigmaIcon />
              <MuiIcon />
              <TailwindIcon />
            </SkillBucket>
            <SkillBucket color={props.color} title='DevOps'>
              <DockerIcon />
              <K8Icon />
            </SkillBucket>
            <SkillBucket color={props.color} title='Backend'>
              <NodeIcon />
              <ExpressIcon />
              <JavaIcon />
            </SkillBucket>
            <SkillBucket color={props.color} title='Database'>
              <MongoIcon />
              <MySqlIcon />
              <DynamoIcon />
            </SkillBucket>
            <SkillBucket color={props.color} title='Testing'>
              <CypressIcon />
              <PmIcon />
            </SkillBucket>
          </div>
        </div>
      </section>
    );
}

export default LandingSection;