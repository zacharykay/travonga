import React, { useState, useRef } from 'react';

const HiddenContent = ({ hidden_content }) => {
	const ref = useRef();

	const [ readMore, setReadMore ] = useState('Read More...');

	const revealContent = (event) => {
		const evt = event.target.innerText;
		const hiddenContent = ref.current;

		hiddenContent.classList.toggle('hidden_content');

		if (evt === 'Read More...') {
			setReadMore('Read Less...');
		} else {
			setReadMore('Read More...');
		}
	};

	return (
		<React.Fragment>
			<div
				className="hidden_content"
				ref={ref}
				dangerouslySetInnerHTML={{ __html: hidden_content }}
			/>
			<button type="button" className="collapsible_content" onClick={revealContent}>
				{readMore}
			</button>
		</React.Fragment>
	);
};

export default HiddenContent;
