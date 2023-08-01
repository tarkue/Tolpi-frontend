import { useEffect, useState } from "react"
import s from "./Popup.module.css"

import { useSpring, animated, easings } from "@react-spring/web"


/**
 * Popup 
*/
export default function Popup({ children, popupView }) {
    
    const [scrollY, setScrollY] = useState(0)
    
    useEffect(() => {
        setScrollY(document.body.children[0].scrollTop + "px")
    }, [])
    
    const popupStyles = useSpring({
        from: { background: "rgba(0,0,0,0)" },
        to: { background: "rgba(34, 43, 61, 0.45)" },  
    })
    const childrenStyles = useSpring({
        from: { y: "100%" },
        to: { y: "0" }
    })

    if (popupView) return <animated.div 
        className={s.Popup} style={{"--topScroll": scrollY, ...popupStyles}}
    >
        <animated.div style={{...childrenStyles, height: "100%"}}>
            {children}
        </animated.div>
    </animated.div>
}