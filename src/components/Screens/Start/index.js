import Button from "@/components/Button";
import { StartButton } from "@/components/Button/types";
import Span from "@/components/Span";
import StartText from "@/components/Typography/StartText";
import StartTitle from "@/components/Typography/StartTitle";
import { accentColor, blackTextColor } from "@/components/colors";

import s from "./Start.module.css"

import { APP_ID, StartInfo, VK_API_V } from "@/config/config";
import { useState } from "react";

import bridge from '@vkontakte/vk-bridge';
import { useUserStore } from "@/store/userStore";
import { useAppStore } from "@/store/appStore";
import { MainName } from "../names";

import axios from "axios";


/**
 * Start Screen 
*/
export default function Start() {
    const setToken = useUserStore(state => state.setToken)
    const setStatus = useUserStore(state => state.setStatus)
    const token = useUserStore(state => state.token)
    const profileId = useUserStore(state => state.id)

    const setPanel = useAppStore(state => state.setPanel)
    const [k, setK] = useState(0)
    const info = StartInfo[k]

    const buttonHandler = () => {
        
        if (k > 0 && k != (StartInfo.length-1)) {
            bridge.send("VKWebAppGetAuthToken", {
                app_id: APP_ID,
                scope: "status"
            })
            .then((data) => {
                setToken(data.access_token)
                setK(StartInfo.length-1)
            })
            .catch((data) => {
                console.log(data)
                if (k < (StartInfo.length-2)) {
                    setK(k+1)
                }
            })
        } else if (k == StartInfo.length-1) {
            setPanel(MainName)
        } else {
            setK(k+1)
        }
        
        //if (token) {
        //    bridge.send("VKWebAppCallAPIMethod", {
        //        method: "status.get", 
        //        params: {
        //            access_token: token,
        //            user_id: profileId,
        //            v: VK_API_V
        //        }
        //    })
        //    .then((data) => {
        //        setStatus(data.response.text)
        //        bridge.send("VKWebAppStorageSet", {
        //            key: "status",
        //            value: data.response.text
        //        })
        //    })
        //    
        //  }
    }
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
