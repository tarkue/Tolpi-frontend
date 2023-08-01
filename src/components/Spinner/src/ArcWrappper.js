import { useEffect, useState } from "react";
import Arc from "./Arc";


export default function ArcWrapper({...props}) {
    const [id, setId] = useState(null)
    useEffect(() => {
        setId(Math.random())
    }, [])
    return <Arc id={id} {...props}/>
}