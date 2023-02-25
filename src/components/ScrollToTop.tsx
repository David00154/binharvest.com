import { Fragment, useEffect, useRef, useState } from 'react'

const ScrollToTop = () => {
    const scrollToTopBtn = useRef()
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (document.body.scrollTop > 100) {
                (scrollToTopBtn.current as HTMLElement).classList.add('active');
            } else {
                (scrollToTopBtn.current as HTMLElement).classList.remove('active');
            }
        }, true)
    }, [])
    function scrollTop() {
        document.body.scrollTo({ behavior: "smooth", top: 0 })
    }
    return (
        <Fragment>
            <button onClick={scrollTop} ref={scrollToTopBtn} className='scroll-to-top'>
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6l-4.6 4.6Z" /></svg>
                </i>
            </button>
        </Fragment>
    )
}

export default ScrollToTop