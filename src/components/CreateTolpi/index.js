import { useEffect, useState } from "react";
import Button from "../Button";
import BackHeader from "../Header/Back";
import Input from "../Input";
import { Primary } from "../Button/types";
import { accentColor } from "../colors";

import s from "./CreateTolpi.module.css"

import { useSpring, animated } from "@react-spring/web";


/**
 * Create Tolpi 
*/
export default function CreateTolpi({ setPopupView }) {
    const [springs, api] = useSpring(
        () => ({
            from: { y: "0%", opacity: 0, scale: 0 },
            to: { y: "5%", opacity: 1, scale: 1 },
        }),
        []
    )
    
    useEffect(() => {
        api.start({
            from: { y: "5%", opacity: 0, scale: 0 },
            to: { y: "0%", opacity: 1, scale: 1 },
        })
    }, [])

    const close = () => {
        api.start({
            to: { y: "5%", opacity: 0, scale: 0 },
            from: { y: "0%", opacity: 1, scale: 1 },
            onResolve() {
                setPopupView(null)
            },
            config: {
                duration: 300
            }
        })
    }

    const [value, setValue] = useState()
    
    return <animated.div className={s.CreateTolpiWrapper} style={springs}>
        <div className={s.CreateTolpi}>
            <BackHeader title={"Толпи"} onClick={close}/>
            <Input 
                placeholder={"Расскажите, что будет на встрече"} 
                setValue={setValue}
                style={{height: "var(--create--input--height)"}}
            />
            <Button type={Primary} color={accentColor}>
                Опубликовать
            </Button>
        </div>
    </animated.div>
}