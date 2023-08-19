"use client"
import { useState, useEffect } from "react";

import Panel from '@/components/Panel'
import Main from "@/components/Screens/Main";
import Profile from "@/components/Screens/Profile";
import Start from "@/components/Screens/Start";
import Loader from "@/components/Loader";
import Popup from "@/components/Popup"
import CreateTolpi from "@/components/CreateTolpi"
import SelectCountry from "@/components/SelectCountry"

import { MainName, ProfileName, StartName } from "@/components/Screens/names";
import { CreateTolpiPopup, SelectCountryPopup } from "@/components/Popup/types";

import bridge from '@vkontakte/vk-bridge';

import { useUserStore } from "@/store/userStore";
import { useAppStore } from "@/store/appStore";

import { useSpring, animated } from "@react-spring/web";

import { useMutation } from "@apollo/client";
import { createUser } from "@/apollo/user";



export default function Page() {
  const [springs, api] = useSpring(
    () => ({
        from: { y: "20%", opacity: 0  },
        to: { y: "0%", opacity: 1 },  
    }),
    []
  )
  const [isAnimate, setIsAnimate] = useState(false)

  const upUser = useUserStore(state => state.upUser)
  const setAppCountry = useAppStore(state => state.setCountry)

  const panel = useAppStore(state => state.panel)
  const setPanel = useAppStore(state => state.setPanel)

  const popup = useAppStore(state => state.popup)
  const setPopup = useAppStore(state => state.setPopup)

  const loaderPanel = useAppStore(state => state.loaderPanel);
  const setLoaderPanel = useAppStore(state => state.setLoaderPanel);

  const [TolpiUserCreate, createUserData] = useMutation(createUser, {})
  
  // VK INIT 
  useEffect(() => {
    if (!panel) {
      setPanel(MainName)
      TolpiUserCreate({
        onCompleted(data) {
          upUser(data.createUser.userId, data.createUser.avatar)
          if (data.createUser.country) {
            setAppCountry(data.createUser.country)
          }
        }
      })
      bridge.send("VKWebAppInit");
      bridge.send("VKWebAppStorageGet", {
        keys: ["start"]
      }).then((data) => {
        if (data.keys[0].value == "") {
          setPanel(StartName)
        } else {
          setPanel(MainName)
        }
      })  
    }
    setTimeout(()=> setLoaderPanel(false), 3000)
  },[panel])

  useEffect(() => {
    if (loaderPanel) {
      setIsAnimate(true)
    }
  }, [loaderPanel])

  useEffect(() => {
    if (loaderPanel && isAnimate) {
      api.start({
        from: { y: "20%", opacity: 0  },
        to: { y: "0%", opacity: 1 },  
        onResolve() {
          setIsAnimate(false)
        }
      })
    } 
  }, [isAnimate])

  return <animated.div style={springs}>
    {loaderPanel ? <Loader /> : <>
    {<Popup popupView={popup}>
      {popup == SelectCountryPopup ? <SelectCountry 
        popupView={popup}
        setPopupView={setPopup}
      /> : <></>}
      {popup == CreateTolpiPopup ? <CreateTolpi 
        popupView={popup}
        setPopupView={setPopup}
      /> : <></>}
    </Popup>}

    <Panel ActivePanel={panel}>
      <Main panelId={MainName}/>
      <Profile panelId={ProfileName}/>
      <Start panelId={StartName}/>
    </Panel></>}
  </animated.div>
}