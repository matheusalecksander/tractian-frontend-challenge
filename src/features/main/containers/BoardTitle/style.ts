import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.spacing._2};
`

export const Title = styled.h2``;

export const LightText = styled.span`
  color: ${({ theme }) => theme.colors.gray._60};
`;
