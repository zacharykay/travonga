import { useState, useEffect, useRef, useCallback } from 'react';

const StickyPageNav = ({ children }) => {
	const [ stickyOffset, setStickyOffset ] = useState(0);
	const [ isSticky, setIsSticky ] = useState(false);
	const ref = useRef(null);

	useEffect(
		() => {
			if (window.scrollY > 0) {
				setStickyOffset(window.scrollY + ref.current.getBoundingClientRect().top);
			} else {
				setStickyOffset(ref.current.getBoundingClientRect().top);
			}
		},
		[ stickyOffset ]
	);

	//eslint-disable-next-line
	const stickyPageNav = () => {
		let windowOffset = window.scrollY;

		if (ref.current) {
			if (windowOffset >= stickyOffset) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		}
	};

	const stickyEffect = useCallback(
		() => {
			stickyPageNav();
		},
		[ stickyPageNav ]
	);

	useEffect(
		() => {
			if (typeof window !== 'undefined') {
				window.addEventListener('scroll', stickyPageNav);
			}
			return () => window.removeEventListener('scroll', stickyPageNav);
		},
		//eslint-disable-next-line
		[ stickyEffect ]
	);

	return (
		<nav className={isSticky ? 'sticky' : ''} ref={ref}>
			{children}
		</nav>
	);
};

export default StickyPageNav;
