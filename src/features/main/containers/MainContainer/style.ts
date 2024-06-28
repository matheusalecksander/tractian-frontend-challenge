import styled from "styled-components";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.blue._10};
	padding-top: ${({ theme }) => theme.spacing._18};
  padding-left: ${({ theme }) => theme.spacing._3};
  padding-right: ${({ theme }) => theme.spacing._3};
  padding-bottom: ${({ theme }) => theme.spacing._3};
	height: 100%;
`;
