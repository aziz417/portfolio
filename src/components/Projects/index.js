import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I've worked on a variety of projects, including both web applications and websites. Here are some of my key projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'reactjs' ?
            <ToggleButton active value="reactjs" onClick={() => setToggle('reactjs')}>ReactJs</ToggleButton>
            :
            <ToggleButton value="reactjs" onClick={() => setToggle('reactjs')}>ReactJs</ToggleButton>
          }
          <Divider />
          {toggle === 'vuejs' ?
            <ToggleButton active value="vuejs" onClick={() => setToggle('vuejs')}>VueJs</ToggleButton>
            :
            <ToggleButton value="vuejs" onClick={() => setToggle('vuejs')}>VueJs</ToggleButton>
          }
          <Divider />
          {toggle === 'laravel' ?
            <ToggleButton active value="laravel" onClick={() => setToggle('laravel')}>Laravel</ToggleButton>
            :
            <ToggleButton value="laravel" onClick={() => setToggle('laravel')}>Laravel</ToggleButton>
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