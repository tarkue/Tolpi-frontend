import timeConverter from "@/plugins/timeConverter"

import Avatar from "../Avatar"
import Name from "../Typography/Name"
import Time from "../Typography/Time"

import s from "./PostHeader.module.css"
import { blackTextColor, negativeColor } from "../colors"
import { BookMark, Dots, SadEmoti } from "../Icons"
import More from "../More/More"
import MoreItem from "../MoreItem/MoreItem"

/**
 * Post Header component 
 *
 */
export default function PostHeader({userAvatar, userName, time, onClick}) {
    return <div className={s.PostHeader}>
        <div className={s.PostHeaderInfo} onClick={onClick}>
            <Avatar userAvatar={userAvatar}/>
            <div className={s.content}>
                <Name color={blackTextColor}>{userName}</Name>
                <Time className={s.Time} color={blackTextColor}>{timeConverter(time)}</Time>
            </div>
        </div>
        <More>
            <MoreItem icon={<BookMark/>} color={blackTextColor}>
                {false ? "отслеживать" : "не отслеживать"}
            </MoreItem>
            <MoreItem icon={<SadEmoti/>} color={negativeColor}>
                пожаловаться
            </MoreItem>
        </More>
    </div>
}
