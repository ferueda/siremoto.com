import React from 'react';

const JobDescription = ({ description, apply }) => {
	const { job_title, content_html } = description;
	return (
		<div>
			<h2>{job_title}</h2>
			<div dangerouslySetInnerHTML={{ __html: content_html }}></div>
		</div>
	);
};

export default JobDescription;
