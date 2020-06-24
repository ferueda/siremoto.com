import React from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';
import HeaderSearch from './HeaderSearch';

const HeroContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
		url('/assets/images/laptop-stickers-640x427.jpg');
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
	return (
		<header>
			<HeroContainer>
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
