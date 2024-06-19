import ProjectFrame from '../components/ProjectFrame';

const ThirdSection = () => {
  const ieltsImages = ['1Cf-CcndALF-BGhwVjczoMOf1dxNZAzzY', '1ZrwO1rTk21W_lwCFIXE_GcLKjG5H0mA4', '1r98bEYYKsWI6DC9OcuhlayTAFYNIuFn3', '1ZjxkbXsID1hR9qb922kfJ4z3yxvTwazg', '1PvbKX4gHcJMCVneAmlWy-HfVCe8ymeKn', '10wTgAfnMzGqhq8c7bCPZ69QJzaXegzUY', '15zCJwY7Dl8N4B2xvX-9mFJbgIY-M0XU7'];
  const milkmanImages = ['18KQr9d_I3qLlsO5JfORe5Jpbrjt_eeRq', '1RnPG-cKhYdieyeWXaCex1sWoUq6A810H', '1j_rqpOj7EfKISd50ERIobx24QzZu0Ubu', '1W55ub9u-FI-GW8XqFmACnTkBmdj9Ghtx', '1ZS1N8BCWITKUP6hHu2b3ZB686YetjtHf'];
  const managerImages = ['17aBCjfA5oLo4vDaZxEVnoqbOHK4Tqotm', '1PPFne6io3x0Y71gZBVoscztYSmnUvmC1', '1vTquWhQLD9A-uPw4My3Jsb2ABOT8Ymc6', '1tIoS5GRl0JfBjOm62lZJeghqQn8UjTdJ', '1_lX2-2QihD3HomNsut85et9w77yuSs97', '1WoxvxENz40dCKpLyb5qIvx56bAii1WZG', '188VzvTgiE9VjV5k48GpZ6GttQv9sWFaz'];
  const urbanCanadaImages = ['1yX5YLyvFjUaTdo3KOHFl-P8cB7X59I9O', '1IsYOUCqCVh6SZmXQMHG-2WghoJjgUuAv', '1Z4RLVgxZYiAFyUtnuH9xnS3TZ_bCYD78', '1mQxVb78Mt2ml-wbNKN2-gX5Pgdos-kKs', '1ysvzWCx0HxaW5zSL4zsBNBnc5kBKJHG1', '1iVLMWMh-7kr__0XZBaY2vtIqCq0YD9ah'];

  return (
    <section className='section-3 flex flex-col items-center'>
      <div className='container mt-40'>
        <ProjectFrame project={{
          title: 'IELTS Organization',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sed accusamus quaerat, dolore totam consequatur assumenda. Quae quidem doloribus et fuga distinctio odio, tempore maxime blanditiis, saepe consectetur pariatur eius!',
          images: ieltsImages,
          github: 'https://github.com/nandKadivar/Web-Application-for-IELTS-Organization',
          youtube: '',
          display: 'type1'
        }} />
        <ProjectFrame project={{
          title: 'Milkman',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sed accusamus quaerat, dolore totam consequatur assumenda. Quae quidem doloribus et fuga distinctio odio, tempore maxime blanditiis, saepe consectetur pariatur eius!',
          images: milkmanImages,
          github: 'https://github.com/nandKadivar/MilkmanReactNativeApp',
          youtube: 'https://www.youtube.com/watch?v=LPpvetSihp8',
          display: 'type2'
        }} />
        <ProjectFrame project={{
          title: 'Mr. Manager',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sed accusamus quaerat, dolore totam consequatur assumenda. Quae quidem doloribus et fuga distinctio odio, tempore maxime blanditiis, saepe consectetur pariatur eius!',
          images: managerImages,
          github: 'https://github.com/MrManager-GitHub',
          youtube: '',
          display: 'type1'
        }} />
        <ProjectFrame project={{
          title: 'Urban Canada',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sed accusamus quaerat, dolore totam consequatur assumenda. Quae quidem doloribus et fuga distinctio odio, tempore maxime blanditiis, saepe consectetur pariatur eius!',
          images: urbanCanadaImages,
          github: 'https://github.com/nandKadivar/Urban-Canada',
          youtube: '',
          display: 'type2'
        }} />
      </div>
    </section>
  );
}

export default ThirdSection;