import TimelineBar from "../components/TimelineBar";

const SecondSection = () => {
  return (
    <section className='section-2 bg-section2-bg flex flex-col justify-center items-center p-5'>
        <div className="md:h-40 sm:h-80 grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6 my-10 p-4">
          <div className="flex flex-col items-center">
            <span className="text-xl text-white font-bold">
              Development
            </span>
            <span className="mt-2 text-sm text-white font-semi text-justify">
              I specialize in turning ideas into reality through code. From websites to apps, I craft solutions that stand out.
            </span>
          </div>
          <div className="flex flex-col items-center text-justify">
            <span className="text-xl text-white font-bold">
              Cloud
            </span>
            <span className="mt-2 text-sm text-white font-semi text-justify">
              Harnessing the power of the cloud, I optimize infrastructure for performance and security, streamlining operations.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white font-bold">
              DevOps
            </span>
            <span className="mt-2 text-sm text-white font-semi">
              Embracing automation and collaboration, I accelerate delivery pipelines and enhance productivity.
            </span>
          </div>
        </div>
      <div className="timeline-container container shadow-md grid grid-cols-12 gap-2 mt-5 p-4 bg-white shadow-sm rounded-sm">
        <div className="col-span-8">
          <TimelineBar bar={{title: 'CHARUSAT University', description: 'B.tech IT'}} />
        </div>
        <div className="col-span-4">
          <TimelineBar bar={{title: 'Dalhosuie University', description: 'Master of Applied Computer Science'}} />
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-2">
          <TimelineBar bar={{title: 'Software Developer', description: 'Navpad Infotech'}} />
        </div>
        <div className="col-span-5"></div>
        <div className="col-span-2">
          <TimelineBar bar={{title: 'Full Stack Developer', description: 'Bright Techies'}} />
        </div>
        <div className="col-span-2"></div>

        <div className="col-span-3"></div>
        <div className="col-span-3">
          <TimelineBar bar={{title: 'Freelancer Web Developer', description: 'Shah Capitals, Sanskar Internation School'}} />
        </div>
        <div className="col-span-4"></div>
        <div className="col-span-2">
          <TimelineBar bar={{title: 'Developer Co-op', description: 'Dugo Systems Inc'}} />
        </div>

        <div className="col-span-4"></div>
        <div className="col-span-4">
          <TimelineBar bar={{title: 'Developer Intern', description: 'August Infotech'}} />
        </div>
        <div className="col-span-4"></div>
      </div>
    </section>
  );
}

export default SecondSection;