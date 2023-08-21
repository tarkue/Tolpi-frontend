import Button from "@/components/Button";
import { StartButton } from "@/components/Button/types";
import Span from "@/components/Span";
import StartText from "@/components/Typography/StartText";
import StartTitle from "@/components/Typography/StartTitle";
import { accentColor, blackTextColor } from "@/components/colors";

import s from "./Start.module.css"

import { StartInfo } from "@/config/config";
import { useEffect, useState } from "react";

import bridge from '@vkontakte/vk-bridge';

import { useAppStore } from "@/store/appStore";
import { MainName } from "../names";


/**
 * Start Screen 
*/
export default function Start() {
    const setBlockScroll = useAppStore(state => state.setBlockScroll)

    const setPanel = useAppStore(state => state.setPanel)
    const [k, setK] = useState(0)
    const info = StartInfo[k]

    const buttonHandler = () => {
         if (k == StartInfo.length-1) {
            setPanel(MainName)
            bridge.send("VKWebAppStorageSet", {
                key: "start",
                value: "true"
            })
            setBlockScroll(false)
        } else {
            setK(k+1)
        }
    }

    useEffect(() => {
        setBlockScroll(true)
    }, [])
    return <>
        <div className={s.Content}>
            <div className={s.StartText}> 
                <StartTitle 
                    color={blackTextColor} 
                >
                    {info.title} <Span color={accentColor}>
                        {info.SpanTitle}
                    </Span>
                </StartTitle>
                <StartText color={blackTextColor}>
                    {info.text}
                </StartText>
            </div>
        </div>
        <div className={s.ButtonWrapper}>
            <Button 
                type={StartButton} 
                color={accentColor} 
                onClick={() => buttonHandler()}
            >
                {info.buttonText}
            </Button>
        </div>
    </>
}
