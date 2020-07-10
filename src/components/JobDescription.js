import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
	margin: 0 auto;
	padding: 2rem 1rem;

	p {
		text-align: justify;
	}
`;

const JobDescription = ({ description, apply }) => {
	const { content_html } = description;
	console.log(content_html);
	return (
		<Container>
			<Button url={apply}>Postular ahora</Button>
			<div dangerouslySetInnerHTML={{ __html: content_html }}></div>
			<Button url={apply}>Postular ahora</Button>
		</Container>
	);
};

export default JobDescription;
