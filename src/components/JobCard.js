import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 4rem 1fr auto;
	grid-template-rows: auto;
	grid-template-areas:
		'Logo Job Time'
		'Logo Tags Time';
	gap: 0.5rem;
	row-gap: 0.25rem;

	:not(:last-child) {
		border-bottom: 2px solid var(--light-color);
	}

	padding: 0.5rem;
	overflow: hidden;
	color: var(--dark-color);

	@media (hover: hover) and (pointer: fine) {
		&:hover {
			background-color: var(--light-color);
			cursor: pointer;
		}
	}
`;

const CompanyLogo = styled.img`
	grid-area: Logo;
	width: 4rem;
	align-self: center;
	border-radius: var(--border-radius-size);
`;

const Job = styled.div`
	grid-area: Job;
	display: flex;
	flex-direction: column;
	text-align: left;
	font-size: 1rem;

	h2 {
		font-weight: 700;
		font-size: 1em;
	}

	h3 {
		font-size: 0.8em;
		font-weight: 500;
	}

	h4 {
		font-size: 0.8em;
		font-weight: 500;
		background-color: var(--light-color);
		border-radius: var(--border-radius-size);
		padding: 0 0.25em;
		text-transform: capitalize;
		:not(:first-of-type) {
			margin-left: 0.25em;
		}
	}

	span {
		font-size: 0.8em;
		font-weight: 700;
	}
`;

const Company = styled.div`
	display: flex;
`;

const TagsList = styled.ul`
	grid-area: Tags;
	display: flex;
	flex-wrap: wrap-reverse;
`;

const Tag = styled.li`
	border: 1px solid black;
	border-radius: var(--border-radius-size);
	font-size: 0.75rem;
	text-transform: lowercase;
	margin: 0.1rem;
	padding: 0 0.2rem;
	font-weight: 500;
`;

const Salary = styled.p`
	display: none;
`;

const Time = styled.p`
	grid-area: Time;
	font-size: 0.9rem;
	align-self: center;
`;

const JobCard = ({ company_logo, company_name, title, tags, salary, company_location }) => {
	return (
		<CardContainer>
			<CompanyLogo src={company_logo} alt={`${company_name} logo`} />
			<Job>
				<h2>{title}</h2>
				<Company>
					<h3>{company_name}</h3>
					<span>&nbsp;-&nbsp;</span>
					{company_location.map(location => (
						<h4 key={location}>{location}</h4>
					))}
				</Company>
			</Job>
			<TagsList>
				{tags.map(tag => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</TagsList>
			<Salary>{salary}</Salary>
			<Time>Hoy</Time>
		</CardContainer>
	);
};

export default JobCard;
