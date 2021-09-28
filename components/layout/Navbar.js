import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Navbar.module.css';

import { navigationLinks } from '../../utils/fullNavigation';

const MobileLogo =
	'/assets/Travonga-Travel-Itineraries-Logo-Nav-Header-Inverted-768x227.png';
const HeaderLogo = '/assets/Travonga-Travel-Itineraries-Logo-Nav-Header-768x227.png';

const Navbar = () => {
	const [ menuToggled, setMenuToggled ] = useState(false);
	const [ submenuIndex, setSubmenuIndex ] = useState(null);
	const [ submenuShow, setSubmenuShow ] = useState(true);

	const toggleSubmenu = (index) => {
		if (menuToggled) {
			if (submenuIndex === index) {
				setSubmenuIndex(null);
				return;
			}
			setSubmenuIndex(index);
		}
	};

	return (
		<nav className={styles.site_nav_container}>
			<div className={styles.mega_site_nav}>
				{/* <!-- Site Logo Mobile --> */}
				<div className={styles.site_logo_mobile}>
					<Link
						href="/"
						passHref
						className={styles.header_image_wrapper_mobile}
					>
						<Image
							className={styles.header_image}
							src={MobileLogo}
							alt="Travonga.com Travel Itineraries and Attraction Guides - Logo and Site Banner Inverted for Mobile"
							width="202.98"
							height="60"
						/>
					</Link>
				</div>

				<div
					className={
						menuToggled ? (
							styles.site_nav + ' ' + styles.mobile_nav_open
						) : (
							styles.site_nav
						)
					}
					id={styles.megaNavMenu}
				>
					{/* <!-- Site Logo Non-Mobile --> */}
					<div className={styles.site_logo}>
						<Link href="/" passHref className={styles.header_image_wrapper}>
							<Image
								className={styles.header_image}
								src={HeaderLogo}
								alt="Travonga.com Travel Itineraries and Attraction Guides - Logo and Site Banner for Desktop and Tablet"
								width="202.98"
								height="60"
							/>
						</Link>
					</div>

					{/* <!-- Attraction Guides Dropdown --> */}

					{navigationLinks.map((link, index) => {
						const { id, name, categories } = link;
						return (
							<div
								key={id}
								className={styles.menu_item}
								onClick={() => toggleSubmenu(index)}
							>
								<div
									id={
										menuToggled ? (
											styles.menuBackdrop
										) : (
											styles.backdrop
										)
									}
									onClick={() => {
										setMenuToggled(!menuToggled);
										setSubmenuIndex(null);
									}}
								/>
								<h2
									className={
										submenuIndex === index ? (
											styles.menu_item_title +
											' ' +
											styles.menu_item_title_active
										) : (
											styles.menu_item_title
										)
									}
								>
									{name}
								</h2>
								<ul
									className={
										submenuIndex === index && submenuShow ? (
											styles.mobile_menu_open + ' ' + styles.submenu
										) : submenuShow ? (
											styles.submenu
										) : (
											styles.submenuHide
										)
									}
								>
									{categories.map((category) => {
										const { id, name, pages } = category;
										return (
											<li
												key={id}
												className={styles.submenu_column}
											>
												<h3
													className={
														styles.submenu_column_heading
													}
												>
													{name}
												</h3>
												<ul
													className={styles.submenu_column_list}
												>
													{pages.map((page) => {
														const { id, name, url } = page;
														return (
															<li
																key={id}
																onClick={() => {
																	setSubmenuShow(false);
																	setMenuToggled(false);
																	setSubmenuIndex(null);
																	setTimeout(() => {
																		setSubmenuShow(
																			true
																		);
																	}, 100);
																}}
															>
																<Link href={url}>
																	{name}
																</Link>
															</li>
														);
													})}
												</ul>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>

				{/* Hamburger Icon */}
				<button
					type="button"
					className={styles.nav_menu_mobile_icon}
					onClick={() => {
						setMenuToggled(!menuToggled);
						setSubmenuIndex(null);
					}}
				>
					<span>&#9776;</span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
