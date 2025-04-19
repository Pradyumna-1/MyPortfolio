import React from 'react'
import styled from 'styled-components'
import { skills } from '../data/constant'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding-top: 45rem;
    padding-bottom:40rem;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
`

const SkillCard = styled.div`
  max-width: 480px;
  background: ${({ theme }) => theme.card};
  border: 1px solid #854CE6;
  border-radius: 16px;
  padding: 20px 30px;
  text-align: center;
`

const SkillTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary + 80};
`

const SkillIcon = styled.img`
  width: 20px;
  height: 20px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past few years.</Desc>
        <SkillsContainer>
          {skills.map((skill, i) => (
            <SkillCard key={i}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, j) => (
                  <SkillItem key={j}>
                    <SkillIcon src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
