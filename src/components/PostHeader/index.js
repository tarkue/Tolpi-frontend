import timeConverter from "@/plugins/timeConverter"

import Avatar from "../Avatar"
import Name from "../Typography/Name"
import Time from "../Typography/Time"

import s from "./PostHeader.module.css"

/**
 * Post Header component 
 *
 */
export default function PostHeader({userAvatar, userName, time, userId}) {
    return <div className={s.PostHeader}>
        <Avatar userAvatar={userAvatar}/>
        <div className={s.content}>
            <Name>{userName}</Name>
            <Time className={s.Time}>{timeConverter(time)}</Time>
        </div>
    </div>
}
