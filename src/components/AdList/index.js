import s from "./AdList.module.css"


/**
 * Ad List 
*/
export default function AdList({ children }) {
    return <>
        <div className={s.AdList}>
            { children}
        </div>
    </>
}