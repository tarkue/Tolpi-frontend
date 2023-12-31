import Column from "@/components/Column"
import Post from "@/components/Post"
import { useUserStore } from "@/store/userStore"
import NotTolpiesWarning from "../Typography/NotTolpiesWarning"
import { blackTextColor } from "../colors"
import { useEffect, useState } from "react"


/**
 * Tolpies List
*/
export default function TolpiesList({tolpiesList, profile}) {
    const userId = useUserStore(state => state.id)
    const [notTolpiesWarningText, setNotTolpiesWarningText] = useState("") 
    
    useEffect(() => {
        if (profile) setNotTolpiesWarningText("Здесь пусто...")
        else setNotTolpiesWarningText("Время стать первым!")
    }, [])
    return <div style={{paddingBottom: "var(--indent-20)"}}>
        <Column>
            {!(tolpiesList.length > 0) ? <NotTolpiesWarning color={blackTextColor}>
                {notTolpiesWarningText}
            </NotTolpiesWarning> : tolpiesList.map((item, key) => <Post 
                userId={item.user.userId}
                userName={[item.user.firstName, item.user.lastName].join(" ")}
                time={item.timestamp} 
                text={item.text}
                avatar={item.user.avatar}
                active={(item.user.userId == userId) ? false : ((Date.now()/1000) < (item.timestamp+(86400*4))) ? true : false}
                key={key}
            />)}
        </Column>
    </div>
}