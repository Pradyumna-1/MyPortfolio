import React from "react";
import styled from "styled-components";

/* ================= OVERLAY ================= */

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: ${({ theme }) =>
    theme.mode === "light"
      ? "rgba(0, 0, 0, 0.45)"
      : "rgba(0, 0, 0, 0.0)"};

  backdrop-filter: blur(66px);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ================= MODAL ================= */

const Modal = styled.div`
  width: 92%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;

  background: ${({ theme }) =>
    theme.mode === "light" ? "#ffffff" : theme.card};

  border-radius: 18px;
  padding: 32px;
  position: relative;

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    theme.mode === "light" ? "#ccc #f5f5f5" : "#555 #1c1c1c"};
`;

/* ================= CLOSE ================= */

const Close = styled.button`
  position: absolute;
  top: 18px;
  right: 22px;

  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;

  color: ${({ theme }) => theme.text_primary};

  &:hover {
    opacity: 0.7;
  }
`;

/* ================= IMAGE ================= */

const ImageWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === "light" ? "#f4f6f8" : "#111"};

  border-radius: 14px;
  padding: 12px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;

  filter: ${({ theme }) =>
    theme.mode === "light"
      ? "brightness(0.95) contrast(1.05)"
      : "none"};

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
`;

/* ================= TEXT ================= */

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.p`
  font-size: 14px;
  margin-bottom: 20px;

  color: ${({ theme }) =>
    theme.mode === "light" ? "#555" : theme.text_secondary};
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.7;

  color: ${({ theme }) =>
    theme.mode === "light" ? "#333" : theme.text_secondary};
`;

/* ================= TAGS ================= */

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
`;

const Tag = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;

  background: ${({ theme }) =>
    theme.mode === "light"
      ? theme.primary + "15"
      : theme.primary + "25"};

  color: ${({ theme }) => theme.primary};
`;

/* ================= LINKS ================= */

const Links = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 30px;
  flex-wrap: wrap;
 
`;

const LinkBtn = styled.a`
  padding: 12px 22px;
  border-radius: 12px;

  background: ${({ variant, theme }) =>
    variant === "live"
      ? "linear-gradient(135deg, #8b5cf6, #7c3aed)"
      : theme.mode === "light"
      ? "#e5e7eb"
      : "#1f2937"};

  color: ${({ variant, theme }) =>
    variant === "live"
      ? "#ffffff"
      : theme.mode === "light"
      ? "#111827"
      : "#e5e7eb"};

  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: all 0.25s ease;
  box-shadow: ${({ variant }) =>
    variant === "live"
      ? "0 10px 30px rgba(139, 92, 246, 0.45)"
      : "none"};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }
`;



/* ================= COMPONENT ================= */

const ProjectModal = ({ openModal, setOpenModal }) => {
  if (!openModal.state || !openModal.project) return null;

  const { project } = openModal;

  return (
    <Overlay onClick={() => setOpenModal({ state: false, project: null })}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Close onClick={() => setOpenModal({ state: false, project: null })}>
          ×
        </Close>

        {project.image && (
          <ImageWrapper>
            <Image src={project.image} alt={project.title} />
          </ImageWrapper>
        )}

        <Title>{project.title}</Title>
        <Date>{project.date}</Date>

        <Tags>
          {project.tags?.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>

        <Desc>{project.description}</Desc>

<Links>
  {project.github && (
    <LinkBtn
      variant="github"
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </LinkBtn>
  )}

  {project.webapp && (
    <LinkBtn
      variant="live"
      href={project.webapp}
      target="_blank"
      rel="noreferrer"
    >
      Live
    </LinkBtn>
  )}
</Links>

      </Modal>
    </Overlay>
  );
};

export default ProjectModal;
