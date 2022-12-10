import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';

//for scrolling to the top of the page
const ScrollToTop = ({children}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
};

export default ScrollToTop;