import styled from "styled-components";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.blue._100};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${({ theme }) => theme.spacing._4};
	position: fixed;
	width: 100%;
`;
