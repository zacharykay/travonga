import Layout from '../components/layout/Layout';

import '../styles/globals.css';
import React from 'react';

function Travonga({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default Travonga;
