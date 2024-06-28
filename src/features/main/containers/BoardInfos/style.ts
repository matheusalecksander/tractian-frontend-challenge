import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing._4};
`;

export const InfoItem = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.gray._30};
	background-color: transparent;
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing._2};
	padding: ${({ theme }) => theme.spacing._2};
	border-radius: ${({ theme }) => theme.spacing._1};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.gray._60};

	svg {
		color: ${({ theme }) => theme.colors.blue._50};
	}
`;
