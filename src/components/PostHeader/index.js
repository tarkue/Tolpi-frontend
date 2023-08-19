import timeConverter from "@/plugins/timeConverter"

import Avatar from "../Avatar"
import Name from "../Typography/Name"
import Time from "../Typography/Time"

import s from "./PostHeader.module.css"
import { blackTextColor } from "../colors"

/**
 * Post Header component 
 *
 */
export default function PostHeader({userAvatar, userName, time, onClick}) {
    return <div className={s.PostHeader} onClick={onClick}>
        <Avatar userAvatar={userAvatar}/>
        <div className={s.content}>
            <Name color={blackTextColor}>{userName}</Name>
            <Time className={s.Time} color={blackTextColor}>{timeConverter(time)}</Time>
        </div>
    </div>
}
