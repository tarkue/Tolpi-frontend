import { useEffect, useState } from "react"
import s from "./Popup.module.css"

import { useSpring, animated, easings } from "@react-spring/web"


/**
 * Popup 
*/
export default function Popup({ children, popupView }) {
    
    const [scrollY, setScrollY] = useState(0)
    const [popup, setPopup] = useState(false)
    
    const [springs, api] = useSpring(
        () => ({
            from: { background: "rgba(0,0,0,0)" },
            to: { background: "rgba(34, 43, 61, 0.45)" },  
        }),
        []
    )

    useEffect(() => {
        setScrollY(document.body.children[0].scrollTop + "px")
        if (popupView) {
            setPopup(true)

            api.start({
                from: { background: "rgba(0,0,0,0)" },
                to: { background: "rgba(34, 43, 61, 0.45)" },  
            })
        } else {
            api.start({
                from: { background: "rgba(34, 43, 61, 0.45)" },
                to: { background: "rgba(34, 43, 61, 0)" }, 
                onResolve() {
                    setPopup(false)
                },
                config: {
                    duration: 300
                }
            })
        }
    }, [popupView])
    return <>
        {popup ? <animated.div 
            className={s.Popup} style={{"--topScroll": scrollY, ...springs}}
        >
            {children}
        </animated.div> : <></>}
    </>
}