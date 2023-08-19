import { useSpring, animated, useSpringRef, easings } from "@react-spring/web";
import s from "./Panel.module.css"
import { useEffect } from "react";


/**
 * Return active Panel 
 *
 * 
 * @param {string} ActivePanel id активной панели.
 */
export default function Panel({ children, ActivePanel }) {

    const [springs, api] = useSpring(
        () => ({
            from: { y: "4dvh", opacity: 0 },
            to: { y: "0dvh", opacity: 1 },
        }),
        []
    )

    var panelList = new Object();

    if (children.length) { 
        children.forEach( (child, key) => {
            if (child.props.panelId === undefined) return;
            panelList[child.props.panelId] = key
        });
    } else return <div className={s.Panel}>{ children }</div>

    useEffect(() => {
        api.start({
            from: { y: "4dvh", opacity: 0 },
            to: { y: "0dvh", opacity: 1 },
        })
    }, [ActivePanel])   
    
    return <animated.div className={s.Panel} style={springs}> 
        {children[ panelList[ActivePanel] ]} 
    </animated.div>
}
