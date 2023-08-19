import s from "./RootWrapper.module.css"

/**
 * Return active Panel 
 *
 */
export default function RootWrapper({ children, ...props }) {
    return <div className={s.RootWrapper} {...props}> { children } </div>
}
