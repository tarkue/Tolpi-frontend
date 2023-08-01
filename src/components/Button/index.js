import { useEffect, useState } from "react"

import ButtonText from "@/components/Typography/ButtonText"
import StartButtonText from "../Typography/StartButtonText"


import s from "./Button.module.css"
import { StartButton, Outline, Primary } from "./types"
import classNames from "@/plugins/classNames"
import { accentColor, cardColor, whiteTextColor, blackTextColor } from "../colors"


/**
 * Button 
*/
export default function Button(props) {
    const { children, icon, type, color, ...add } = props
    const [start, setStart] = useState(false)
    const [textColor, setTextColor] = useState("")

    useEffect(() => {
        if (type == StartButton) {
            setStart(true)
            if (color == accentColor) {
                setTextColor(whiteTextColor)
            } else if (color == cardColor) {
                setTextColor(blackTextColor)
            }
        } 
        
        if (color == accentColor && type == Primary) {
            setTextColor(whiteTextColor)
        } else if (color == cardColor && type == Primary) {
            setTextColor(blackTextColor)
        }

        if (type == Outline) {
            setTextColor(color)
        }
    }, [])
    
    return <a 
        {...add}
        className={classNames(s.Button, type)}
        style={{"--color": textColor, "--background": color}}
    >
        {icon ? icon : <></>}
        {
            start ? <StartButtonText color={textColor}>{children}</StartButtonText> :
            <ButtonText color={textColor}>{children}</ButtonText>
        }
    </a>
}
