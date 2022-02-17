import { useState, useEffect, useRef, useCallback, FC } from "react";

interface Props {
  children: HTMLElement;
}

const StickyPageNav: FC<Props> = (props) => {
  const { children } = props;

  const [ stickyOffset, setStickyOffset ] = useState<number>(0);
  const [ isSticky, setIsSticky ] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const navPosition = ref.current;

  useEffect(
    () => {
      if (window && window.scrollY > 0 && navPosition) {
        setStickyOffset(window.scrollY + navPosition.getBoundingClientRect().top);
      } else if (navPosition) {
        setStickyOffset(navPosition.getBoundingClientRect().top);
      }
    },
    [ stickyOffset ]
  );

  //eslint-disable-next-line
  const stickyPageNav = (): void => {
    let windowOffset: number = window.scrollY;

    if (navPosition) {
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
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", stickyPageNav);
      }
      return () => window.removeEventListener("scroll", stickyPageNav);
    },
    //eslint-disable-next-line
    [ stickyEffect ]
  );

  return (
    <nav className={isSticky ? "sticky" : ""} ref={ref}>
      {children}
    </nav>
  );
};

export default StickyPageNav;
