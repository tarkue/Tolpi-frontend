import { useEffect, useMemo, useState } from "react"
import s from "./Popup.module.css"

import { useSpring, animated } from "@react-spring/web"
import { useAppStore } from "@/store/appStore"


/**
 * Popup 
*/
export default function Popup({ children, popupView }) {
    
    const [scrollY, setScrollY] = useState(0)
    const [popup, setPopup] = useState(false)
    const [isAnimate, setIsAnimate] = useState(false)
    const setLastMainTop = useAppStore(state => state.setLastMainTop)
    
    const [springs, api] = useSpring(
        () => ({
            from: { background: "rgba(0,0,0,0)" },
            to: { background: "rgba(34, 43, 61, 0.45)" },  
        }),
        []
    )
    useEffect(() => {
        if (popupView) {
            setIsAnimate(true)
        } else {
            if (popup) {
                setIsAnimate(false)
            }
        }
    }, [popupView])

    useEffect(() => {
        setLastMainTop(document.body.children[0].scrollTop)
        setScrollY(document.body.children[0].scrollTop + "px")
        if (isAnimate && popupView && !popup) {
            setPopup(true)
            
            api.start({
                from: { background: "rgba(0,0,0,0)" },
                to: { background: "rgba(34, 43, 61, 0.45)" },  
            })
        } else if (!popupView && popup) {
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
    }, [isAnimate])
    return <>
        {popup ? <animated.div 
            className={s.Popup} style={{"--topScroll": scrollY, ...springs}}
        >
            {children}
        </animated.div> : <></>}
    </>
}