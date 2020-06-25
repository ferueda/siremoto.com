import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../context/ThemeContext';

import Container from '../styles/Container';
import HeaderSearch from './HeaderSearch';

const HeroContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-image: ${({ theme }) => `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.45)),url(${theme});`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 45vh;
`;

const Title = styled.div`
	margin-top: -3rem;
	h1 {
		color: var(--main-color);
		font-weight: 700;
		font-size: 3.5rem;
		margin-bottom: 0.5rem;

		a {
			text-decoration: none;
		}

		a:hover,
		a:visited {
			color: inherit;
			text-decoration: none;
		}
	}

	h2 {
		color: #fff;
	}

	text-align: center;
`;

const Header = () => {
	const { light, lightBackgroundImageSrc, darkBackgroundImageSrc } = useContext(ThemeContext);

	const currentTheme = light ? lightBackgroundImageSrc : darkBackgroundImageSrc;

	return (
		<header>
			<HeroContainer theme={currentTheme}>
				<Title>
					<h1>
						<a href="/">siRemoto</a>
					</h1>
					<h2>Encuentra los últimos trabajos remotos en tecnología y programación</h2>
				</Title>
				<HeaderSearch />
			</HeroContainer>
		</header>
	);
};

export default Header;
