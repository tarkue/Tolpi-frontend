
import PostHeader from "../PostHeader"
import Card from "../Card"
import Text from "../Typography/Text"
import Button from "../Button"
import { Outline } from "../Button/types"
import { accentColor } from "../colors"
import { useState } from "react"

/**
 * Post Header component 
 *
 */
export default function Post({userName, time, userId, text}) {
    const [userAvatar, setUserAvatar] = useState(null)
    const [active, setActive] = useState(true)

    return <Card style={{width: "calc(100dvw - var(--indent-80))"}}>
        <PostHeader 
            userAvatar={userAvatar}
            userName={userName}
            time={time}
            userId={userId}
        />
        <Text>
            {text}
        </Text>
        {active ? <Button 
            type={Outline}
            color={accentColor}
        >
            толпиться
        </Button> : ""}
    </Card>
}