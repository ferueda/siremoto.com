import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
	display: inline-block;
	background-color: var(--secondary-color);
	border-radius: var(--border-radius-size);
	color: #fff;
	padding: 0.5rem 2rem;
	margin: 0 auto;

	&:link,
	:visited,
	:active,
	:focus {
		text-decoration: none;
	}

	text-justify: inter-word;

	&:active,
	:hover {
		opacity: 0.85;
	}
`;

const Button = ({ children, url }) => {
	return (
		<StyledA href={url} rel="noopener noreferrer" target="_blank">
			{children}
		</StyledA>
	);
};

export default Button;
