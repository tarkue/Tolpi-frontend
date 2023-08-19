import AdCard from "@/components/AdCard"
import { bigAd, smallAd } from "@/components/AdCard/types"
import Button from "@/components/Button"
import { Primary } from "@/components/Button/types"
import DefaultHeader from "@/components/Header/Default"
import { Edit } from "@/components/Icons"

import AdList from "@/components/AdList"
import Span from "@/components/Span"
import ScreenTitle from "@/components/Typography/ScreenTitle"
import { accentColor, blackTextColor, cardColor } from "@/components/colors"

import { useUserStore } from "@/store/userStore"
import { useAppStore } from "@/store/appStore"
import { CreateTolpiPopup, SelectCountryPopup } from "@/components/Popup/types"

import { useEffect, useState } from "react"
import { useQuery, useSubscription } from "@apollo/client"
import { getAllTolpi, getSubscribeTolpi } from "@/apollo/tolpi"
import TolpiesList from "@/components/TolpiesList/TolpiesList"

import Spinner from "@/components/Spinner"
import { tolpiContains } from "@/service/service"
import { ADS_LINKS } from "@/config/config"


/**
 * Main Screen 
*/
export default function Main() {
    const [loader, setLoader] = useState(true)

    const popup = useAppStore(state => state.popup)
    const setPopup = useAppStore(state => state.setPopup)

    const tolpiesList = useAppStore(state => state.tolpiesList)
    const setTolpiesList = useAppStore(state => state.setTolpiesList)

    const goToProfile = useAppStore(state => state.goToProfile)
    
    const country = useAppStore(state => state.country)
    
    const userPhoto = useUserStore(state => state.photo)
    const userId = useUserStore(state => state.id)

    const lastMainTop = useAppStore(state => state.lastMainTop)

    
    const query = useQuery(getAllTolpi, {
        variables: {
            "country": country
        },
        onCompleted() {
            setLoader(false)
            setTolpiesList(query.data.Tolpies)
        },
    })

    useEffect(() => {
        setLoader(true)
    }, [country])


    useEffect(() => {
        if (lastMainTop != 0 && !popup) {
            document.body.children[0].scrollTo({top: lastMainTop})
        }
    })

    useSubscription(getSubscribeTolpi, {
        onData(data) {
            if (data.data.data) {
                let last = data.data.data.Tolpies.length-1
                let item = data.data.data.Tolpies[last]

                if (tolpiesList) {
                    if (!tolpiContains(tolpiesList, item)) {
                        setTolpiesList([item, ...tolpiesList])
                      
                    }
                    return 
                }
                setTolpiesList(item)
            }
        }
    })
    
    return <>
        <DefaultHeader 
            subtitle={"Ваш город"} 
            country={country}
            userAvatar={userPhoto}
            setPanelAvatar={() => goToProfile(userId, document.body.children[0].scrollTop)}
            onClick={() => {setPopup(SelectCountryPopup)}}
        />
        <AdList>
            <AdCard src={"/bigAdNow.svg"} type={bigAd} href={ADS_LINKS.BIG_AD}/>
            <AdCard src={"/smallAd.svg"} type={smallAd} href={ADS_LINKS.SMALL_AD}/>
        </AdList>
        <Button 
            icon={<Edit/>} type={Primary} color={cardColor} 
            onClick={() => {setPopup(CreateTolpiPopup)}}
        >
            Создай толпи
        </Button>
        <ScreenTitle 
            color={blackTextColor} 
            width={"calc(100dvw - var(--indent-80))"}
        >
            Толпи в <br /><Span color={accentColor}>вашем городе</Span>
        </ScreenTitle>
        {loader ? <Spinner/> : <TolpiesList tolpiesList={tolpiesList}/>}
    </>
}