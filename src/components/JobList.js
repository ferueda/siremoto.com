import React, { useContext } from 'react';
import styled from 'styled-components';

import { JobsContext } from '../context/JobsContext';

import Container from '../styles/Container';
import JobCard from './JobCard';

const JobListContainer = styled(Container)`
	text-align: center;
	padding: 0;
`;

const H2 = styled.h2`
	font-weight: 600;
	font-size: 1.5rem;
	margin: 1rem auto;

	span {
		font-weight: normal;
		color: #7f8c8d;
	}
`;

const JobList = () => {
	const { jobs } = useContext(JobsContext);

	console.log(jobs);
	return (
		<main role="main">
			<JobListContainer>
				<H2>
					Últimos trabajos <span>(247)</span>
				</H2>
				{jobs.map(({ id, ...jobData }) => (
					<JobCard key={id} {...jobData} />
				))}
			</JobListContainer>
		</main>
	);
};
export default JobList;
