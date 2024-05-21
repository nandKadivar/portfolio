import Carousel from '../components/Carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectFrame from '../components/ProjectFrame';

const ThirdSection = () => {
  const ieltsImages = ['ielts/1.png', 'ielts/2.png', 'ielts/3.png', 'ielts/4.png', 'ielts/5.png'];

  return (
    <section className='section-3 flex flex-col items-center'>
      <div className='container mt-40'>
        <ProjectFrame project={{
          title: 'IELTS Organization',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sed accusamus quaerat, dolore totam consequatur assumenda. Quae quidem doloribus et fuga distinctio odio, tempore maxime blanditiis, saepe consectetur pariatur eius!',
          images: ieltsImages,
          github: '',
          youtube: '',
          display: 'type1'
        }} />
        <ProjectFrame project={{
          title: 'Shipogle',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sed accusamus quaerat, dolore totam consequatur assumenda. Quae quidem doloribus et fuga distinctio odio, tempore maxime blanditiis, saepe consectetur pariatur eius!',
          images: ieltsImages,
          github: '',
          youtube: '',
          display: 'type2'
        }} />
      </div>
    </section>
  );
}

export default ThirdSection;