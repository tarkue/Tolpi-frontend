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
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { getUser } from "@/apollo/user"
import TolpiesList from "@/components/TolpiesList/TolpiesList"
import server from "@/server/server"
import { generateStats } from "@/service/service"
import Loader from "@/components/Loader"

import bridge from '@vkontakte/vk-bridge';


/**
 * Profile Screen 
*/
export default function Profile() {
    const userId = useUserStore(state => state.id)

    const setPanel = useAppStore(state => state.setPanel)
    const profileId = useAppStore(state => state.profileId)

    const [loader, setLoader] = useState(true)

    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
    const [stats, setStats] = useState([])

    const [status, setStatus] = useState("")
    const [trackers, setTrackers] = useState([])
    const [tolpiesHistory, setTolpiesHistory] = useState([])

    const [subscribeStatus, setSubscribeStatus] = useState(false)

    const toggleSubscribe = () => {
        if (!subscribeStatus) {
            server.subscribe(profileId)
            setStats(generateStats(trackers.length+1, tolpiesHistory.length))
            setTrackers([...trackers, userId])
        }
        else {
            server.unsubscribe(profileId)
            setStats(generateStats(trackers.length-1, tolpiesHistory.length))
            setTrackers(trackers.filter((id) => id != userId))
        }
        setSubscribeStatus(!subscribeStatus)
    }

    const opts = {
        variables: {
            "userId": profileId
        },
        onCompleted(data) {
            if (data.User.tolpies) {
                setTolpiesHistory(data.User.tolpies)
            }
            if (data.User.trackerList) {
                setTrackers(data.User.trackerList)
            }

            setPhoto(data.User.avatar)
            setStatus(data.User.status)
            setName([data.User.firstName, data.User.lastName].join(" "))
            setLoader(false)
        },
    }

    const query = useQuery(getUser, opts)

    useEffect(() => {
        if (trackers.includes(userId)) {
            setSubscribeStatus(true)
        } else {
            setSubscribeStatus(false)
        }

        setStats(
            generateStats(
                trackers.length,
                tolpiesHistory.length
            )
        )
    }, [trackers, tolpiesHistory])

    useEffect(() => {
        query.refetch()
        document.body.children[0].scrollTo({top: 0})
    }, [profileId])

    return loader ? <Loader panel={true}/> : <>
        <BackHeader 
            title={"Профиль"}
            onClick={() => setPanel(MainName)}
        />
        <Column>
            <UserCard 
                userAvatar={photo} 
                userName={name}
                userLink={VK + "id" + profileId}
                stat={stats}
                status={status}
            />
            {profileId != userId ? <>
                <Button 
                    icon={<BookMark/>} type={Primary} 
                    color={accentColor} onClick={() => toggleSubscribe()}
                >
                    {subscribeStatus ? "Не отслеживать" : "Отслеживать"}
                </Button>
                <Button 
                    icon={<SadEmoti/>} type={Outline} 
                    color={accentColor}
                >
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
        <TolpiesList tolpiesList={tolpiesHistory} profile={true}/>
    </>
}