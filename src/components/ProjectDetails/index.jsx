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
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'full stack' ?
            <ToggleButton active value="full stack" onClick={() => setToggle('business website')}>Frontend Project</ToggleButton>
            :
            <ToggleButton value="full stack" onClick={() => setToggle('business website')}>Frontend Project</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend project' ?
            <ToggleButton active value="frontend project" onClick={() => setToggle('web app')}>Backend Project</ToggleButton>
            :
            <ToggleButton value="frontend project" onClick={() => setToggle('web app')}>Backend Project</ToggleButton>
          }
          <Divider />
          {toggle === 'backend project' ?
            <ToggleButton active value="backend project" onClick={() => setToggle('android app')}>Full Stack Project</ToggleButton>
            :
            <ToggleButton value="backend project" onClick={() => setToggle('android app')}>Full Stack Project</ToggleButton>
          }
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