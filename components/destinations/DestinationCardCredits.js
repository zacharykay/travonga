import styles from '../../styles/Destinations.module.css';

import Link from 'next/link';
import React from 'react';

const DestinationCardCredits = ({ cardType, ...place }) => {
	const { cc_image_url, cc_author_url, cc_author, cc_license, cc_license_url } = place;

	return (
		<p
			className={
				cardType === 'carousel' ? 'owl-item-credits' : styles.destination_credits
			}
		>
			<Link href={cc_image_url}>
				<a target="_blank" rel="noopener noreferrer">
					Photo
				</a>
			</Link>{' '}
			by{' '}
			<Link href={cc_author_url}>
				<a target="_blank" rel="noopener noreferrer">
					{cc_author}
				</a>
			</Link>
			<br />
			{!cc_license ? (
				<i>Edited</i>
			) : (
				<React.Fragment>
					<Link href={cc_license_url}>
						<a target="_blank" rel="noopener noreferrer">
							{cc_license}
						</a>
					</Link>
					{' | '}
					<i>Edited</i>
				</React.Fragment>
			)}
		</p>
	);
};

export default DestinationCardCredits;
