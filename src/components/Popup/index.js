import { useEffect, useState } from "react"
import s from "./Popup.module.css"


/**
 * Popup 
*/
export default function Popup({ children, popupView }) {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        setScrollY(document.body.children[0].scrollTop + "px")
    }, [])
    if (popupView) return <div className={s.Popup} style={{"--topScroll": scrollY}}>
        {children}
    </div>
}