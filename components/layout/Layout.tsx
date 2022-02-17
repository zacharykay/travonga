import { FC } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

