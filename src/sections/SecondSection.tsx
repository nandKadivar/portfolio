import { title } from "process";
import TimelineBar from "../components/TimelineBar";

const SecondSection = () => {
  return (
    <section className='section-2 bg-section2-bg flex flex-col justify-center items-center p-5'>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6 my-10 p-4">
          <div className="flex flex-col items-center">
            <span className="text-xl text-white font-bold">
              Development
            </span>
            <span className="mt-2 text-sm text-white font-semi">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis deserunt ea illo mollitia ducimus alias aliquam saepe consectetur. Deserunt amet dicta ullam eos quae dolor tenetur rerum ab ipsam.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white font-bold">
              Cloud
            </span>
            <span className="mt-2 text-sm text-white font-semi">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis deserunt ea illo mollitia ducimus alias aliquam saepe consectetur. Deserunt amet dicta ullam eos quae dolor tenetur rerum ab ipsam.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl text-white font-bold">
              DevOps
            </span>
            <span className="mt-2 text-sm text-white font-semi">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis deserunt ea illo mollitia ducimus alias aliquam saepe consectetur. Deserunt amet dicta ullam eos quae dolor tenetur rerum ab ipsam.
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