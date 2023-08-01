import Mark from "../../Typography/Mark"
import TrackersTitle from "../../Typography/TrackersTitle"

import s from "./Tracker.module.css"
/**
 * Card Statictics
*/
export default function Tracker({value, title}) {
    return <div className={s.Tracker}>
        <Mark>{value}</Mark>
        <TrackersTitle>{title}</TrackersTitle>
    </div>
}
