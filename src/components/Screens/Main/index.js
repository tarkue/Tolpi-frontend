import AdCard from "@/components/AdCard"
import { bigAd, smallAd } from "@/components/AdCard/types"
import Button from "@/components/Button"
import { Primary } from "@/components/Button/types"
import Column from "@/components/Column"

import DefaultHeader from "@/components/Header/Default"
import { Edit } from "@/components/Icons"
import Post from "@/components/Post"
import AdList from "@/components/AdList"
import Span from "@/components/Span"
import ScreenTitle from "@/components/Typography/ScreenTitle"
import { accentColor, blackTextColor, cardColor } from "@/components/colors"

import { useUserStore } from "@/store/userStore"
import { useAppStore } from "@/store/appStore"
import { CreateTolpiPopup, SelectCountryPopup } from "@/components/Popup/types"
import { ProfileName } from "../names"


/**
 * Main Screen 
*/
export default function Main() {
    const setPanel = useAppStore(state => state.setPanel)
    const setPopup = useAppStore(state => state.setPopup)

    const setProfileId = useAppStore(state => state.setProfileId)
    const setProfilePhoto = useAppStore(state => state.setProfilePhoto)
    const setProfileStatus = useAppStore(state => state.setProfileStatus)
    const setProfileName = useAppStore(state => state.setProfileName)

    const UserId = useUserStore(state => state.id)
    const UserPhoto = useUserStore(state => state.photo)
    const UserStatus = useUserStore(state => state.status)
    const UserName = useUserStore(state => state.name)
    
    
    const setPanelAvatar = () => {
        setProfileId(UserId)
        setProfilePhoto(UserPhoto)
        setProfileStatus(UserStatus)
        setProfilePhoto(UserPhoto)
        setProfileName(UserName)

        setPanel(ProfileName)
    }

    return <>
        <DefaultHeader 
            subtitle={"Ваш город"} 
            country={"Екатеринбург"}
            userAvatar={UserPhoto}
            setPanelAvatar={() => setPanelAvatar()}
            onClick={() => {setPopup(SelectCountryPopup)}}
        />
        <AdList>
            <AdCard src={"/bigAd.svg"} type={bigAd}/>
            <AdCard src={"/smallAd.svg"} type={smallAd}/>
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
        <Column>
            <Post 
                userName={"Евгений Смирнов"} 
                time={1690268748} 
                text={"приглашаю на концерт дайте танк завтра в 18:00. Хейтеров прошу не писать"}
            />
        </Column>
    </>
}