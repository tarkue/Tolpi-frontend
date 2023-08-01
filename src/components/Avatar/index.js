import Image from "next/image"

import s from "./Avatar.module.css"

/**
 * Avatar 
*/
export default function Avatar({userAvatar, setPanel}) {
    return <Image 
        onClick={setPanel}
        className={s.Avatar}
        height={44} width={44} alt="avatar"
        src={userAvatar ? userAvatar : "/DefaultAvatar.svg"}
    />

}
