import ProjectFrame from '../components/ProjectFrame';

const ThirdSection = () => {
  const ieltsImages = ['1Cf-CcndALF-BGhwVjczoMOf1dxNZAzzY', '1ZrwO1rTk21W_lwCFIXE_GcLKjG5H0mA4', '1r98bEYYKsWI6DC9OcuhlayTAFYNIuFn3', '1ZjxkbXsID1hR9qb922kfJ4z3yxvTwazg', '1PvbKX4gHcJMCVneAmlWy-HfVCe8ymeKn', '10wTgAfnMzGqhq8c7bCPZ69QJzaXegzUY', '15zCJwY7Dl8N4B2xvX-9mFJbgIY-M0XU7'];
  const milkmanImages = ['18KQr9d_I3qLlsO5JfORe5Jpbrjt_eeRq', '1RnPG-cKhYdieyeWXaCex1sWoUq6A810H', '1j_rqpOj7EfKISd50ERIobx24QzZu0Ubu', '1W55ub9u-FI-GW8XqFmACnTkBmdj9Ghtx', '1ZS1N8BCWITKUP6hHu2b3ZB686YetjtHf'];
  const managerImages = ['17aBCjfA5oLo4vDaZxEVnoqbOHK4Tqotm', '1PPFne6io3x0Y71gZBVoscztYSmnUvmC1', '1vTquWhQLD9A-uPw4My3Jsb2ABOT8Ymc6', '1tIoS5GRl0JfBjOm62lZJeghqQn8UjTdJ', '1_lX2-2QihD3HomNsut85et9w77yuSs97', '1WoxvxENz40dCKpLyb5qIvx56bAii1WZG', '188VzvTgiE9VjV5k48GpZ6GttQv9sWFaz'];
  const urbanCanadaImages = ['1yX5YLyvFjUaTdo3KOHFl-P8cB7X59I9O', '1IsYOUCqCVh6SZmXQMHG-2WghoJjgUuAv', '1Z4RLVgxZYiAFyUtnuH9xnS3TZ_bCYD78', '1mQxVb78Mt2ml-wbNKN2-gX5Pgdos-kKs', '1ysvzWCx0HxaW5zSL4zsBNBnc5kBKJHG1', '1iVLMWMh-7kr__0XZBaY2vtIqCq0YD9ah'];
  const invoicerImages = ['1rwvZQcvVNnHIvVcKL2nep83frft5C6su', '15_ntaGw5dAFoCfvYWv2XO-ErsNzH_BIs', '1msDgoey6o5V515KZ6DX9_8qIlZrWgzyL', '1ZmUkUyVlbO47723LL849PavSL81yNR8H', '1VM2MRwhRXR0P1QvOeW2UbNda68Gx6nra', '18jBOzoGW8sJbpOEDSHmffYBf6o6xE1Pm']
  const shahCapitalsImages = ['1frFM9GaRbsRtGnQppa1d3lEpYrIJGdk3', '10p8qyHGme0l9pxJc-cbC9TYQXcYiJzFu','1-Z6sAgVVhBkrT8q05m_IrCBbs7sadhks']

  return (
    <section className='section-3 flex flex-col items-center'>
      <div className='container lg:mt-40 md:mt-40 mt-96'>
      <ProjectFrame project={{
          title: 'Invoicer',
          description: 'Invoicer is a comprehensive web application designed to streamline invoice and payment management for businesses. It features a highly dynamic data visualization dashboard, empowering businesses to make informed financial decisions and gain insights into their sales and performance.',
          images: invoicerImages,
          github: 'https://github.com/nandKadivar/invoicer',
          youtube: '',
          display: 'type1'
        }} />
        <ProjectFrame project={{
          title: 'IELTS Organization',
          description: 'Specialized web application for IELTS teaching institutes, facilitating seamless online seminar hosting, class scheduling, and student performance management. The platform offers mock test creation and administration for IELTS modules (Listening, Reading, Writing), with students receiving valuable feedback from instructors. Detailed test scores and visualizations enhance the teaching experience, fostering continuous improvement and student success in IELTS preparation.',
          images: ieltsImages,
          github: 'https://github.com/nandKadivar/Web-Application-for-IELTS-Organization',
          youtube: '',
          display: 'type2'
        }} />
        <ProjectFrame project={{
          title: 'Milkman',
          description: 'Mobile application tailored for dairy owners, facilitating streamlined management of customer subscriptions, delivery logistics, and day-to-day business operations. The app also empowers new customers to explore various milk providers, compare prices, and seamlessly subscribe, enhancing accessibility and efficiency in the dairy industry.',
          images: milkmanImages,
          github: 'https://github.com/nandKadivar/MilkmanReactNativeApp',
          youtube: 'https://www.youtube.com/watch?v=LPpvetSihp8',
          display: 'type1'
        }} />
        <ProjectFrame project={{
          title: 'Mr. Manager',
          description: 'Comprehensive web application tailored for construction businesses, facilitating efficient resource management. It enables tracking of purchase orders for materials, monitoring construction site progress, managing inventory, and overseeing worker details. The platform also features an analytical dashboard for visualizing business data across multiple construction sites, empowering informed decision-making and streamlined operations.',
          images: managerImages,
          github: 'https://github.com/MrManager-GitHub',
          youtube: '',
          display: 'type2'
        }} />
        <ProjectFrame project={{
          title: 'Urban Canada',
          description: 'Robust web application designed to connect users with a wide array of service providers while empowering small businesses to list and offer their services. The platform enables seamless booking and management of services for users, while providing tools for businesses to track customer interactions and service performance, fostering efficiency and growth in local economies.',
          images: urbanCanadaImages,
          github: 'https://github.com/nandKadivar/Urban-Canada',
          youtube: '',
          display: 'type1'
        }} />
        <ProjectFrame project={{
          title: 'Shah Capitals',
          description: 'Shah Capitals is a dynamic website created for a budding finance startup. This site showcases various finance courses and seminars, helping customers enhance their financial knowledge. Additionally, it features a contact form designed to facilitate business marketing and client engagement.',
          images: shahCapitalsImages,
          github: '',
          youtube: '',
          display: 'type2'
        }} />
      </div>
    </section>
  );
}

export default ThirdSection;