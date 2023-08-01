import s from "./RootWrapper.module.css"

/**
 * Return active Panel 
 *
 */
export default function RootWrapper({ children }) {
    return <div className={s.RootWrapper}> { children } </div>
}
