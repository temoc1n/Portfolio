import './styles/main.css';
import Header from './components/Header';
import Card from './components/Card';
import DynamicCard from './components/DynamicCard';
import { faCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import avatar from './assets/avatar.svg';
import devices from './assets/devices.svg';
import Alfasoft from './assets/projects/Alfasoft.png';
function App() {

  const development = ['React', 'VueJS', 'Angular', 'SQL', 'Laravel'];
  const ML = ['Python', 'OpenCV', 'Numpy', 'Pandas', 'Pytorch'];


  return(
    <div className="container-fluid p-0 overflow-hidden">
      <Header />
      <div>
        <div className="text-center page_body">
          <h1 className='fs-1'><strong>Software Engineer & ML Enthusiastic</strong></h1>
          <h5 className='mt-3'>Innovating through code and data exploration.</h5>
          <img className="img-fluid mt-5 mb-5" src={avatar} />
          <img className="img-fluid mt-5 devices" src={devices} />
          <div className='blue_background'>
            <div className='text_body_blue'>
              <h2 className='fw-4'>Hi, I'm Duarte. Nice to meet you.</h2>
              <p className='fs-5 subtext'>Since beginning my journey as a full stack developer 6 years ago, I've<br></br>done remote work for agencies, consulted, and collaborated with<br></br>talented people to create digital products for both business and consumer<br></br>use. I'm quietly confident, naturally curious, and perpetually working on<br></br>improving my skills in full stack development at a time.</p>
            </div>
          </div>
          <div className='cards mt-5'>
            <div className='row justify-content-center'>
              <div className='col-5'>
                <Card
                  icon={faCode}
                  title="Full Stack Development"
                  description="I like to code things from scratch, and enjoy bringing ideas to life in the browser and behind the curtines."
                  first_section="Frameworks and Techs:"
                  first_section_list={development}
                />
              </div>
              <div className='col-5'>
                <Card
                  icon={faRobot} 
                  title="ML Development"
                  description="I'm still on a long journey to become proficient in ML but I really enjoy building small modules and projects."
                  first_section="Languages and Libs:"
                  first_section_list={ML}
                />
              </div>
            </div>
          </div>
          <div className="recent_works mt-5">
            <h2>My Recent Works</h2>
            <div className="projects">
              <div className="row justify-content-center gap-4">
                <div className="col-3">
                  <DynamicCard image={Alfasoft} />
                </div>
                <div className="col-3">
                  <DynamicCard image={Alfasoft} />
                </div>
              </div>
              <div className="row justify-content-center gap-4 mt-5">
                <div className="col-3">
                  <DynamicCard image={Alfasoft} />
                </div>
                <div className="col-3">
                  <DynamicCard image={Alfasoft} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
