import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Carousel from './Carousel';

interface Project {
    title: string,
    description: string,
    images: string[],
    github: string,
    youtube?: string,
    display?: 'type1' | 'type2'
}
const ProjectFrame = ({ project }: { project: Project }) => {
  return (
    <div className='container grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4'>
          <div className={`${project.display === 'type2' && 'md:order-last sm:order-first'} flex p-3 flex-col justify-center items-center`}>
            <span className='text-xl text-gray-bg font-semi font-type1'>{project.title}</span>
            <span className='text-sm text-gray-bg mt-1 text-justify'>{project.description}</span>
            <div className='mt-3'>
              <a href={project.github} className='p-2' target="_blank"><GitHubIcon className='text-gray-bg cursor-pointer' /></a>
              {project.youtube !== '' && 
                <a href={project.youtube} className='p-2' target="_blank"><YouTubeIcon className='text-gray-bg cursor-pointer'  style={{ fontSize: '28px' }}/></a>
              }
            </div>
          </div>
          <div className='flex flex-row items-center p-3'>
            <Carousel images={project.images} />
          </div>
    </div>
  );
}

export default ProjectFrame;