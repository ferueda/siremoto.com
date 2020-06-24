import React, { useContext } from 'react';
import styled from 'styled-components';

import { JobsContext } from '../context/GlobalState';

import Container from '../styles/Container';

const JobListContainer = styled(Container)`
	text-align: center;
`;

const CompanyLogo = styled.img`
	width: 4rem;
`;

const JobCard = ({ company_logo, company_name }) => {
	return (
		<div>
			<CompanyLogo src={company_logo} alt={`${company_name} logo`} />
		</div>
	);
};

const JobList = () => {
	const { jobs } = useContext(JobsContext);

	console.log(jobs);
	return (
		<main role="main">
			<JobListContainer>
				<h2>Job List</h2>
				{jobs.map(({ id, ...jobData }) => (
					<JobCard key={id} {...jobData} />
				))}
			</JobListContainer>
		</main>
	);
};
export default JobList;
