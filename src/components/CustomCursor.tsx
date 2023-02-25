import { Fragment, useEffect, useRef } from 'react'

const CustomCursor = () => {
    const cursor1 = useRef();
    const cursor2 = useRef();

    function getMousePos(e: any) {
        return {
            x: e.clientX,
            y: e.clientY
        };
    }

    useEffect(() => {
        let el1: HTMLElement = cursor1.current
        let el2: HTMLElement = cursor2.current
        document.addEventListener("mousemove", function (e) {
            el1.style.transform = `translate3d(calc(${getMousePos(e).x}px - 50%), calc(${getMousePos(e).y}px - 50%), 0px)`

            el2.style.left = getMousePos(e).x + "px";
            el2.style.top = getMousePos(e).y + "px";
        })
    }, [])
    return (
        <Fragment>
            <div ref={cursor1} className="custom-cursor-one"></div>
            <div ref={cursor2} className="custom-cursor-two"></div>
        </Fragment>
    )
}

export default CustomCursor