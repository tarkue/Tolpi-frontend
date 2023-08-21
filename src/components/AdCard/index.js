import Image from "next/image";
import { smallAd } from "./types";
import classNames from "@/plugins/classNames";

import s from "./AdCard.module.css"

/**
 * Ad Card 
*/
export default function AdCard({src, type, href, onClick}) {
    const classes = classNames(s.AdCard, type == smallAd ? s.Small : s.Big)
    return <>
        <a className={classes} href={href} onClick={onClick} target="_blank">
            <Image 
                height={103} 
                width={type == smallAd ? 103: 187} 
                src={src}
                alt="ad banner"
            />
        </a>
    </>
}
