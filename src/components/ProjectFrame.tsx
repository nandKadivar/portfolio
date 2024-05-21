import GitHubIcon from '@mui/icons-material/GitHub';
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
          <div className={`${project.display === 'type2' && 'md:order-last sm:order-first'} flex flex-col justify-center items-center`}>
            <span className='text-xl text-gray-bg font-semi font-type1'>{project.title}</span>
            <span className='text-sm text-gray-bg mt-1'>{project.description}</span>
            <span><GitHubIcon className='mt-3 text-gray-bg cursor-pointer' /></span>
          </div>
          <div className='flex flex-row items-center'>
            <Carousel images={project.images} />
          </div>
    </div>
  );
}

export default ProjectFrame;