
import { useEffect, useState } from "react"
import Column from "../Column"
import BackHeader from "../Header/Back"
import Input from "../Input"
import SelectText from "../Typography/SelectText"
import { blackTextColor } from "../colors"
import s from "./SelectCountry.module.css"

import { useSpring, animated } from "@react-spring/web";


/**
 * Select Country 
*/
export default function SelectCountry({setPopupView, ...props}) {
    const [springs, api] = useSpring(
        () => ({
            from: { y: "0%" },
            to: { y: "100%" },
        }),
        []
    )
    
    useEffect(() => {
        api.start({
            from: { y: "100%" },
            to: { y: "0%" },
        })
    }, [])
    const close = () => {
        api.start({
            from: { y: "0%" },
            to: { y: "100%" },
            onResolve() {
                setPopupView(null)
            },
            config: {
                duration: 300
            }
        })
    }
    
    const [value, setValue] = useState()

    return <animated.div 
        className={s.SelectCountry} 
        {...props} 
        style={springs}
    >
        <BackHeader title={"Город"} onClick={close}/>
        <Input 
            style={{height: "var(--select--input--height)"}} 
            placeholder={"Поиск по городам"}
            setValue={setValue}
        />
        <div className={s.Content}>
            <Column>
                <SelectText 
                    color={blackTextColor}
                    width={"calc(100dvw - 2*var(--indent-40))"}
                >
                    Челябинск
                </SelectText>
            </Column>
        </div>
    </animated.div>
}