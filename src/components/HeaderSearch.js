import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
`;

const Input = styled.input`
	display: block;
	height: 3.5rem;
	border: none;
	outline: none;
	font-size: 1.35rem;
	padding-left: 1rem;
	border-top-left-radius: var(--border-radius-size);
	border-bottom-left-radius: var(--border-radius-size);
`;

const SearchButton = styled.button`
	border-top-right-radius: var(--border-radius-size);
	border-bottom-right-radius: var(--border-radius-size);
	cursor: pointer;
	background-color: #e6e6e6;
	outline: none;
	border: none;
	width: 3.5rem;
	height: 3.5rem;
`;

const HeaderSearch = ({ placeholder = 'Buscar trabajos' }) => {
	const [search, setSearch] = useState('');

	const onChange = event => {
		setSearch(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(search);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input type="text" aria-label="buscar trabajos" placeholder={placeholder} value={search} onChange={onChange} />
			<SearchButton type="submit">
				<svg
					aria-label="search button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="black"
					width="30px"
					height="30px"
				>
					<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</SearchButton>
		</Form>
	);
};

export default HeaderSearch;
