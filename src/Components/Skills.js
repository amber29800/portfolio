import Backend from './Backend';
import DB from './DB';
import Frontend from './Frontend';
import Intro from './Intro';
import Programming from './Programming';
import Projects from './Projects';

const Skills = () => {
  return (
    <div className='flex flex-col mt-10 gap-10 lg:px-10'>
        <Intro/>
        <div className='flex flex-col gap-10 m-2 p-2'>
          <Projects/>
          <Programming/>
          <Frontend/>
          <Backend/>
          <DB/>
        </div>
    </div>
  )
}

export default Skills;