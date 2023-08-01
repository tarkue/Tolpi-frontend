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


export default function Page() {
  const setPhoto = useUserStore(state => state.setPhoto)
  const setUserId = useUserStore(state => state.setId)
  const setUserName = useUserStore(state => state.setName)
  const setStatus = useUserStore(state => state.setStatus)

  const panel = useAppStore(state => state.panel)
  const setPanel = useAppStore(state => state.setPanel)
  const popup = useAppStore(state => state.popup)
  const setPopup = useAppStore(state => state.setPopup)
  

  const [loader, setLoader] = useState(true);

  // VK INIT 
  useEffect(() => {
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
          setPanel(MainName)
        })
        .catch(() => setPanel(StartName))
        setTimeout(() => setLoader(false), 2000)
      }) 
  },[])

  useEffect(() => {
    if (popup) {
        document.body.children[0].style.overflowY = "hidden"
    } else {
        document.body.children[0].style.overflowY = "auto"
    }
  }, [popup])




  return <>
    {loader ? <Loader /> : <>
    {popup ? <Popup popupView={popup}>

      {popup == SelectCountryPopup ? <SelectCountry 
        setPopupView={() => setPopup(nonPopup)}
      /> : <></>}
      {popup == CreateTolpiPopup ? <CreateTolpi 
        setPopupView={() => setPopup(nonPopup)}
      /> : <></>}
      
    </Popup> : <></>}

    <Panel ActivePanel={panel}>
      <Main panelId={MainName}/>
      <Profile panelId={ProfileName}/>
      <Start 
        panelId={StartName} 
      />
    </Panel></>}
  </>
}