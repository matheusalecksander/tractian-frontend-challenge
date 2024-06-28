import styled from "styled-components";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.gray._0};
	width: 100%;
	height: 100%;
	padding: ${({ theme }) => theme.spacing._4};
	border: 1px solid ${({ theme }) => theme.colors.gray._20};
	border-radius: ${({ theme }) => theme.spacing._2};
`;
