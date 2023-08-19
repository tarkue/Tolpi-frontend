
import PostHeader from "../PostHeader"
import Card from "../Card"
import Text from "../Typography/Text"
import Button from "../Button"
import { Outline } from "../Button/types"
import { accentColor, blackTextColor } from "../colors"
import { VK } from "@/config/config"

import { useAppStore } from "@/store/appStore"


/**
 * Post Header component 
 *
 */
export default function Post({userName, time, userId, text, avatar, active}) {
    const goToProfile = useAppStore(state => state.goToProfile)

    return <Card style={{width: "calc(100dvw - var(--indent-80))"}}>
        <PostHeader 
            userAvatar={avatar}
            userName={userName}
            time={time}
            onClick={() => goToProfile(userId, document.body.children[0].scrollTop)}
        />
        <Text color={blackTextColor}>
            {text}
        </Text>
        {active ? <Button 
            type={Outline}
            color={accentColor}
            href={VK + "im?sel=" + userId}
            target="_blank"
        >
            толпиться
        </Button> : ""}
    </Card>
}