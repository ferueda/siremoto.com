import React from 'react';
import styled from 'styled-components';

import JobDescription from './JobDescription';
import FlagIcon from './FlagIcon';

import { getDateDiff } from '../utils/helpers';

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
		border-bottom: 1px solid var(--light-color);
	}

	padding: 0.5rem;
	overflow: hidden;
	color: var(--dark-color);

	background-color: ${({ isActive }) => isActive && 'var(--light-color)'};

	@media screen and (min-width: 768px) {
		grid-template-columns: 4rem 1fr 1fr auto;
		grid-template-rows: auto;
		grid-template-areas:
			'Logo Job Salary Time'
			'Logo Job Tags Time';

		gap: 1rem;
		row-gap: 0.25rem;
		padding: 1rem;
	}

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
		font-size: 0.9em;
		font-weight: 500;
	}

	h4 {
		font-size: 0.9em;
		font-weight: 500;
		text-transform: capitalize;
		margin: auto 0;
	}

	span {
		font-size: 0.8em;
		font-weight: 700;
		margin: auto 0.25em;
	}

	@media screen and (min-width: 768px) {
		justify-content: center;
		font-size: 1.25rem;

		h3 {
			font-size: 0.8em;
		}

		h4 {
			font-size: 0.8em;
		}

		span {
			font-weight: 500;
		}
	}
`;

const Company = styled.div`
	display: flex;
`;

const TagsList = styled.ul`
	grid-area: Tags;
	display: flex;
	flex-wrap: wrap-reverse;
	@media screen and (min-width: 768px) {
		justify-content: center;
		align-items: center;
	}
`;

const Tag = styled.li`
	border: 1px solid black;
	border-radius: var(--border-radius-size);
	font-size: 0.75rem;
	text-transform: lowercase;
	margin: 0.1rem;
	padding: 0 0.2rem;
	font-weight: 500;
	max-height: 20px;

	@media screen and (min-width: 768px) {
		justify-content: center;
		align-items: center;
	}

	@media screen and (min-width: 1000px) {
		max-height: 25px;
		font-size: 0.85rem;
		margin: 0.2rem;
		padding: 0.05rem 0.35rem;
	}
`;

const Salary = styled.p`
	grid-area: Salary;
	display: none;
	font-size: 1rem;

	@media screen and (min-width: 768px) {
		display: flex;
		font-weight: 600;
		justify-content: center;
		align-items: center;
	}
`;

const Time = styled.p`
	grid-area: Time;
	font-size: 0.9rem;
	align-self: center;

	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
`;

const JobCard = ({ id, isActive, tags, salary, company_info, timestamp, apply_link, description, handleSelect }) => {
	const { logo, name, location } = company_info;

	const today = new Date();
	const jobDate = new Date(timestamp);

	const time = getDateDiff(jobDate, today);

	return (
		<React.Fragment>
			<CardContainer isActive={isActive} onClick={() => handleSelect(id)}>
				<CompanyLogo src={logo} alt={`${name} logo`} />
				<Job>
					<h2>{description.job_title}</h2>
					<Company>
						<h3>{name}</h3>

						<span>&nbsp;&#8212;&nbsp;</span>

						{location.remote ? <FlagIcon flag="remote" /> : null}

						{location.city && location.country ? (
							<>
								<FlagIcon flag={location.country} />

								<h4>{location.country}</h4>
							</>
						) : null}
					</Company>
				</Job>
				<TagsList>
					{tags.slice(0, 6).map(tag => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</TagsList>
				<Salary>{salary}</Salary>
				<Time>{time !== 0 ? `${time}d` : 'hoy'}</Time>
			</CardContainer>
			{isActive && <JobDescription apply={apply_link} company={company_info} description={description} />}
		</React.Fragment>
	);
};

export default JobCard;
