import React, { useState } from "react";
import styled from "styled-components";
import ProjectCards from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/constant";

/* ===== SECTION WRAPPER ===== */

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Desc = styled.p`
  max-width: 650px;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
`;

/* ===== FILTER PILLS ===== */

const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 28px;
  padding: 6px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.primary};
`;

// const FilterButton = styled.button`
//   padding: 8px 16px;
//   border-radius: 10px;
//   font-size: 14px;
//   font-weight: 500;
//   cursor: pointer;
//   border: none;
//   background: ${({ active, theme }) =>
//     active ? theme.primary + "20" : "transparent"};
//   color: ${({ theme }) => theme.primary};

//   &:hover {
//     background: ${({ theme }) => theme.primary + "15"};
//   }
// `;


const FilterButton = styled.button`
  padding: 8px 18px;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  white-space: nowrap;

  background: ${({ active, theme }) =>
    active ? theme.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.white : theme.primary};

  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    padding: 6px 14px;
    font-size: 13px;
  }

  @media (max-width: 420px) {
    padding: 4px 4px;
    font-size: 10px;
  }
`;

/* ===== CARD GRID ===== */

const Grid = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
`;

const ProjectsSection = () => {
  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <Desc>
          I have worked on a wide range of web development projects, including
          responsive web applications and full-stack systems. Here are some of
          the projects I've worked on
        </Desc>

        {/* FILTER PILLS */}
        <FilterGroup>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </FilterButton>

          <FilterButton
            active={filter === "frontend project"}
            onClick={() => setFilter("frontend project")}
          >
            Frontend Project
          </FilterButton>

          <FilterButton
            active={filter === "backend project"}
            onClick={() => setFilter("backend project")}
          >
            Backend Project
          </FilterButton>

          <FilterButton
            active={filter === "full stack project"}
            onClick={() => setFilter("full stack project")}
          >
            Full Stack Project
          </FilterButton>
        </FilterGroup>

        {/* PROJECT CARDS */}
        <Grid>
          {filteredProjects.map((project) => (
            <ProjectCards
              key={project.id}
              project={project}
              setOpenModal={setOpenModal}
            />
          ))}
        </Grid>

        {/* MODAL */}
        <ProjectModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Wrapper>
    </Container>
  );
};

export default ProjectsSection;
