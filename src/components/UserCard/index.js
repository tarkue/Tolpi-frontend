import Card from "../Card"
import Text from "../Typography/Text"

import UserCardHeader from "../UserCardHeader"
import UserCardStatistics from "../UserCardStatistics"
import { blackTextColor } from "../colors"

import s from "./UserCard.module.css"

/**
 * Main Screen 
*/
export default function UserCard(props) {
    const {userAvatar, userName, userLink, stat, status} = props
    
    return <Card style={
        {width: "calc(100dvw - var(--indent-80) - var(--indent-40))"}
    }>
        <UserCardHeader 
            userAvatar={userAvatar} 
            userName={userName}
            userLink={userLink}
        />
        {status ? <Text color={blackTextColor}>
            {status}
        </Text> : <></>}
        <UserCardStatistics stat={stat}/>
    </Card>
}
