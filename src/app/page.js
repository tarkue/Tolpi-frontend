"use client"
import { useState, useEffect } from "react";

import Panel from '@/components/Panel'

import Main from "@/components/Screens/Main";
import Profile from "@/components/Screens/Profile";
import Start from "@/components/Screens/Start";

import { MainName, ProfileName, StartName } from "@/components/Screens/names";

import Loader from "@/components/Loader";

import Popup from "@/components/Popup"
import CreateTolpi from "@/components/CreateTolpi"
import SelectCountry from "@/components/SelectCountry"

import bridge from '@vkontakte/vk-bridge';

import { useUserStore } from "@/store/userStore";
import { useAppStore } from "@/store/appStore";
import { CreateTolpiPopup, SelectCountryPopup, nonPopup } from "@/components/Popup/types";
import { useSpring, useSpringRef, animated } from "@react-spring/web";


export default function Page() {
  const api = useSpringRef()
  const springs = useSpring({
    from: { y: "20%", opacity: 0 },
    to: { y: "0%", opacity: 1 }
  })

  const setPhoto = useUserStore(state => state.setPhoto)
  const setUserId = useUserStore(state => state.setId)
  const setUserName = useUserStore(state => state.setName)
  const setStatus = useUserStore(state => state.setStatus)

  const panel = useAppStore(state => state.panel)
  const setPanel = useAppStore(state => state.setPanel)
  const popup = useAppStore(state => state.popup)
  const setPopup = useAppStore(state => state.setPopup)

  const [loader, setLoader] = useState(false);

  // Popup
  useEffect(() => {
    if (popup || loader) {
        document.body.children[0].style.overflowY = "hidden"
    } else {
        document.body.children[0].style.overflowY = "auto"
    }
  }, [popup, loader])

  // VK INIT 
  useEffect(() => {
    setLoader(true)
    
    bridge.send("VKWebAppInit");
    bridge.send("VKWebAppGetUserInfo")
      .then((data) => {
        setUserId(data.id)
        setUserName([data.first_name, data.last_name].join(" "))
        setPhoto(data.photo_100)
        bridge.send("VKWebAppStorageGet", {
          keys: ["status"]
        })
        .then((data) => {
          setStatus(data.keys[0].value)
        })
        .catch(() => setPanel(StartName))
        setTimeout(() => {
          setLoader(false)
          setPanel(MainName)
        }, 3000)
      }) 
  },[])


  // Animate

  return <animated.div style={springs}>
    {loader ? <Loader /> : <>
    {<Popup popupView={popup}>

      {popup == SelectCountryPopup ? <SelectCountry 
        setPopupView={setPopup}
      /> : <></>}
      {popup == CreateTolpiPopup ? <CreateTolpi 
        setPopupView={setPopup}
      /> : <></>}
      
    </Popup>}

    <Panel ActivePanel={panel}>
      <Main panelId={MainName}/>
      <Profile panelId={ProfileName}/>
      <Start 
        panelId={StartName} 
      />
    </Panel></>}
  </animated.div>
}