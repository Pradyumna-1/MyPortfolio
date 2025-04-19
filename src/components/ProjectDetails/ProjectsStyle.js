    import styled from 'styled-components';
    import _default from '../../themes/default';

    export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 4rem;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
    padding-top: 3rem;
    padding-bottom: 3rem;
  
    @media (max-width: 768px) {
      padding-top: 4rem;
      padding-bottom: 8rem;  /* Increased bottom padding for small screens */
    }
  `;

    export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 10px 16px 100px 16px;
    gap: 12px;

    @media (max-width: 768px) {
        padding: 10px 12px 60px 12px;
        max-width: 100%;
    }
    `;

    export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 28px;
    }
    `;

    export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        margin-top: 10px;
        font-size: 14px;
        padding: 0 12px;
    }
    `;

    export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;

    @media (max-width: 768px) {
        font-size: 12px;
        margin: 18px 0px;
    }
    `;

    export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    ${({ active, theme }) =>
        active &&
        `
        background: ${theme.primary + 20};
    `}

    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }

    @media (max-width: 768px) {
        padding: 6px 12px;
        border-radius: 4px;
    }
    `;

    export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
    `;

    export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 16px;

    @media (max-width: 768px) {
        gap: 16px;
        padding: 0 10px;
    }
    `;
