import React from 'react'
import './ProjectPage.css'
import NavBar from '../../components/navBar/NavBar';
import projects from './projects.json'
import Footer from '../../components/footer/Footer';
import ClientPage from '../clientPage/ClientPage';

function ProjectPage() {
  return (
    <div className='project-page'>

        <div>
            <NavBar/> 
        </div>    

        <div className='project-pg'>
            <h1 id='project-hd'>PROJECT PAGE</h1>
        </div>

        <div className='project-header'>
            <h1 id='project-hd'>PROJECT</h1>
        </div>

        <div className='project-info'>
            <div className='project-details'>
                <h1>Our Features Projects</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat eos nostrum perferendis debitis itaque ipsam corrupti, ut tempore saepe consequatur optio, eum illum officia iusto. Labore vel ratione quidem.</p>
            </div>

            <div className='project-images'>
                {
                    projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <div className='project-imagez'>
                            <img src={project.img} alt={project.name} />
                        </div>
                    
                    </React.Fragment>
                    ))
                }
            </div>
            
        </div>

        <div>
            <ClientPage/>
        </div>

        <div className='footer'>
            <Footer/>
        </div>

    </div>
  )
}

export default ProjectPage