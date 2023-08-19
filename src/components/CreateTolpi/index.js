import { useEffect, useState } from "react";
import Button from "../Button";
import BackHeader from "../Header/Back";
import Input from "../Input";
import { Primary } from "../Button/types";
import { accentColor } from "../colors";

import s from "./CreateTolpi.module.css"

import { useSpring, animated } from "@react-spring/web";
import { createTolpiQL } from "@/apollo/tolpi";
import { useAppStore } from "@/store/appStore";
import { useMutation } from "@apollo/client";
import { CreateTolpiPopup } from "../Popup/types";


/**
 * Create Tolpi 
*/
export default function CreateTolpi({ popupView, setPopupView }) {
    const [isAnimate, setIsAnimate] = useState(false)
    const [springs, api] = useSpring(
        () => ({
            from: { y: "0%", opacity: 0, scale: 0 },
            to: { y: "5%", opacity: 1, scale: 1 },
        }),
        []
    )
    
    useEffect(() => {
        if (popupView == CreateTolpiPopup) {
            setIsAnimate(true)
        }
    }, [popupView])

    useEffect(() => {
        if (popupView && isAnimate) {
            api.start({
                from: { y: "5%", opacity: 0, scale: 0 },
                to: { y: "0%", opacity: 1, scale: 1 },
                onResolve() {
                    setIsAnimate(false)
                }
            })
        }
    }, [isAnimate])

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

    const country = useAppStore(state => state.country)

    const [postText, setPostText] = useState()
    const [TolpiCreateTolpi, createUserData] = useMutation(createTolpiQL, {})

    const tolpiesList = useAppStore(state => state.tolpiesList)
    const setTolpiesList = useAppStore(state => state.setTolpiesList)

    const createTolpi = () => {
        TolpiCreateTolpi({
            variables: {
                "text": postText,
                "country": country
            },
            onCompleted(data) {
            setTolpiesList([data.createTolpi, ...tolpiesList])
            }
        })

        close()
    }

    return <animated.div className={s.CreateTolpiWrapper} style={springs}>
        <div className={s.CreateTolpi}>
            <BackHeader title={"Толпи"} onClick={close}/>
            <Input 
                placeholder={"Расскажите, что будет на встрече"} 
                setValue={setPostText}
                style={{height: "var(--create--input--height)"}}
            />
            <Button type={Primary} color={accentColor} onClick={() => createTolpi()}>
                Опубликовать
            </Button>
        </div>
    </animated.div>
}