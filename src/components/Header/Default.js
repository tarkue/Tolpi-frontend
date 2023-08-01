import Avatar from "../Avatar";
import SelectCountryHeader from "../SelectCountryHeader";

import s from "./Header.module.css"

/**
 * Default Header 
*/
export default function DefaultHeader(props) {
    const { country, subtitle, userAvatar, setPanelAvatar, ...add } = props
    return <header className={s.Header}>
        <SelectCountryHeader 
            country={country} 
            subtitle={subtitle}
            {...add}
        />
        <Avatar userAvatar={userAvatar} setPanel={setPanelAvatar}/>
    </header>
}