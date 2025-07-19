import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constant'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
I have worked on a wide range of web development projects, including responsive web applications and full-stack systems. Here are some of the projects I've worked on        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
       
          {toggle === 'frontend project' ?
            <ToggleButton active value="frontend project" onClick={() => setToggle('frontend project')}>Frontend Project</ToggleButton>
            :
            <ToggleButton value="frontend project" onClick={() => setToggle('frontend project')}>Frontend Project</ToggleButton>
          }
          <Divider />
          {toggle === 'backend project' ?
            <ToggleButton active value="backend project" onClick={() => setToggle('backend project')}>Backend Project</ToggleButton>
            :
            <ToggleButton value="backend project" onClick={() => setToggle('backend project')}>Backend Project</ToggleButton>
          }
             <Divider />
          {toggle === 'full stack project' ?
            <ToggleButton active value="full stack project" onClick={() => setToggle('full stack project')}>Full Stack Project</ToggleButton>
            :
            <ToggleButton value="full stack project" onClick={() => setToggle('full stack project')}>Full Stack Project</ToggleButton>
          }
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects