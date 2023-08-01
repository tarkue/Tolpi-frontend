import Button from "@/components/Button"
import Column from "@/components/Column"
import BackHeader from "@/components/Header/Back"
import Span from "@/components/Span"
import ScreenTitle from "@/components/Typography/ScreenTitle"
import UserCard from "@/components/UserCard"

import { accentColor, blackTextColor } from "@/components/colors"

import { VK } from "@/config/config"

import { useAppStore } from "@/store/appStore"
import { useUserStore } from "@/store/userStore"
import { MainName } from "../names"
import { BookMark, SadEmoti } from "@/components/Icons"
import { Outline, Primary } from "@/components/Button/types"
import { useEffect } from "react"


/**
 * Profile Screen 
*/
export default function Profile() {
    const userId = useUserStore(state => state.id)

    const setPanel = useAppStore(state => state.setPanel)

    const profileId = useAppStore(state => state.profileId)
    const profilePhoto = useAppStore(state => state.profilePhoto)
    const profileStatus = useAppStore(state => state.profileStatus)
    const profileName = useAppStore(state => state.profileName)
    const profileTolpies = useAppStore(state => state.profileTolpies)
    const profileStats = useAppStore(state => state.profileStats)

    return <>
        <BackHeader 
            title={"Профиль"}
            onClick={() => setPanel(MainName)}
        />
        <Column>
            <UserCard 
                userAvatar={profilePhoto} 
                userName={profileName}
                userLink={VK + "id" + profileId}
                stat={profileStats}
                status={profileStatus}
            />
            {profileId != userId ? <>
                <Button icon={<BookMark/>} type={Primary} color={accentColor}>
                    Отслеживать
                </Button>
                <Button icon={<SadEmoti/>} type={Outline} color={accentColor}>
                    Пожаловаться
                </Button>
            </> : <></>
            }
        </Column>
        <ScreenTitle 
            color={blackTextColor} 
            width={"calc(100dvw - var(--indent-80))"}
        >
            <Span color={accentColor}>Толпи</Span>стория
        </ScreenTitle>
    </>
}
