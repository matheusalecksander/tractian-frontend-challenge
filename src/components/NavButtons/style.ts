import styled from "styled-components";

interface NavButtonProps {
	isActive?: boolean;
}

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.spacing._3};
`;

export const NavButton = styled.button<NavButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
  gap: ${({ theme }) => theme.spacing._2};
	border-radius: ${({ theme }) => theme.spacing._1};
	padding: ${({ theme }) => theme.spacing._1} ${({ theme }) => theme.spacing._2};
	color: ${({ theme }) => theme.colors.gray._0};
	border: none;
	background-color: ${({ isActive, theme }) => (isActive ? theme.colors.blue._50 : theme.colors.blue._90)};
	font-weight: 600;

	&:hover {
		cursor: pointer;
	}
`;
