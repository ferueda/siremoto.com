import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
	width: 15px;
	height: 15px;
	margin: auto 0.25em auto 0;

	@media screen and (min-width: 768px) {
		width: 20px;
		height: 20px;
		margin: auto 0.35em auto 0;
	}
`;

const country = {
	argentina: 'argentina',
	bolivia: 'bolivia',
	canada: 'canada',
	chile: 'chile',
	colombia: 'colombia',
	'costa rica': 'costa-rica',
	cuba: 'cuba',
	ecuador: 'ecuador',
	inglaterra: 'england',
	españa: 'spain',
	honduras: 'honduras',
	méxico: 'mexico',
	panama: 'panama',
	paraguay: 'paraguay',
	perú: 'peru',
	remote: 'remote',
	uruguay: 'uruguay',
	'estados unidos': 'usa',
	venezuela: 'venezuela',
};

const FlagIcon = ({ flag }) => {
	return <StyledImg src={`/assets/flags/${country[flag]}.svg`} alt={`${flag} flag`} />;
};

export default FlagIcon;
