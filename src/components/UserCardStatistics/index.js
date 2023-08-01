import Tracker from "./Tracker";

import s from "./UserCardStatistics.module.css"


/**
 * User Card Statistics
*/
export default function UserCardStatistics({stat}) {
    const trackers = stat.map((item, key) => {
        return <Tracker value={item.value} title={item.title} key={key}/>
    })
    return <div className={s.UserCardStatistics}>
        {trackers}
    </div>

}
