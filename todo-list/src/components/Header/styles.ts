import styled, { css } from "styled-components";

export const Container = styled.header`
	height: 12.5rem;
	background-color: ${(props) => props.theme["gray-700"]};
`;
export const Navbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	height: 100%;

	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: ${(props) => props.theme["blue"]};
		span {
			color: ${(props) => props.theme["purple-dark"]};
		}
	}
`;
