import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { JobsContext } from '../context/JobsContext';

import Container from '../styles/Container';
import JobCard from './JobCard';
import { jobsReducer } from '../context/reducers';

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
	const [selected, setSelected] = useState(null);

	const { jobs } = useContext(JobsContext);

	const handleSelect = jobId => {
		if (selected === jobId) {
			setSelected(null);
		} else {
			setSelected(jobId);
		}
	};

	console.log(jobs);

	return (
		<main role="main">
			<JobListContainer>
				<H2>
					Últimos trabajos <span>(247)</span>
				</H2>
				{jobs.map(job => (
					<JobCard key={job.id} {...job} isActive={job.id === selected} handleSelect={handleSelect} />
				))}
			</JobListContainer>
		</main>
	);
};
export default JobList;
