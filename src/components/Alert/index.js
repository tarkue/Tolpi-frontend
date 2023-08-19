import Spinner from "../Spinner";
import { SmallSpinner } from "../Spinner/sizes";
import { accentColor, blackTextColor } from "../colors";

import AlertTitle from "../Typography/AlertTitle";
import Text from "../Typography/Text";

import s from "./Alert.module.css"


/**
 * Alert 
*/
export default function Alert({ title, text }) {
    return <div className={s.AlertWrapper}>
        <div className={s.Alert}>
            <Spinner color={accentColor} size={SmallSpinner}/>
            <div className={s.Content}>
                <AlertTitle color={blackTextColor}>
                    { title }
                </AlertTitle>
                <Text color={blackTextColor}>
                    { text }
                </Text>
            </div>
        </div>
    </div>
}