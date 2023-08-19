import Avatar from "../Avatar"
import Name from "../Typography/Name"
import VKLink from "../Typography/VkLink"
import { accentColor, blackTextColor } from "../colors"

import s from "./UserCardHeader.module.css"


/**
 * Main Screen 
*/
export default function UserCardHeader(props) {
    const {userAvatar, userName, userLink} = props
    return <div className={s.UserCardHeader}>
        <Avatar userAvatar={userAvatar}/>
        <Name color={blackTextColor}>{userName}</Name>
        <VKLink 
            color={accentColor}
            href={userLink}
        >
            VK
        </VKLink>
    </div>
}
