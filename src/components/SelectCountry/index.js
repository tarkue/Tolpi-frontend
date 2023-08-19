
import { useEffect, useState } from "react"
import Column from "../Column"
import BackHeader from "../Header/Back"
import Input from "../Input"
import SelectText from "../Typography/SelectText"
import { blackTextColor } from "../colors"
import s from "./SelectCountry.module.css"

import { useSpring, animated } from "@react-spring/web";
import { useMutation } from "@apollo/client"
import { setCountry } from "@/apollo/user"
import { useAppStore } from "@/store/appStore"

import { MOST_POPULAR_COUNTRIES } from "@/config/config"
import { SelectCountryPopup } from "../Popup/types"


/**
 * Select Country 
*/
export default function SelectCountry({popupView, setPopupView, ...props}) {
    
    const countries = useAppStore(state => state.countries);

    const [isAnimate, setIsAnimate] = useState(false)
    const [springs, api] = useSpring(
        () => ({
            from: { y: "100%" },
            to: { y: "0%" },
        }),  
        [popupView]
    )
    useEffect(() => {
        if (popupView == SelectCountryPopup) {
            setIsAnimate(true)
        }
    }, [popupView])
    

    useEffect(() => {
        if (popupView == SelectCountryPopup && isAnimate) { 
            api.start({
                from: { y: "100%" },
                to: { y: "0%" },
                onResolve() {
                    setIsAnimate(false)
                }
            })
        }
        
    }, [isAnimate])
    
    
    const close = () => {
        api.start({
            from: { y: "0%" },
            to: { y: "100%" },
            onResolve() {
                setPopupView(null)
            },
            config: {
                duration: 300
            }
        })
    }

    const [tolpiSetCountry, tolpiSetCountryData]  = useMutation(setCountry, {})
    const setAppCountry = useAppStore(state => state.setCountry)

    const selectCountry = (country) => {
        tolpiSetCountry({
            variables: {
                "country": country
            }
        })
        setAppCountry(country)
        close()
    }
    
    const [searchValue, setSearchValue] = useState("")
    const [search, setSearch] = useState([])

    useEffect(() => {
        if (searchValue && searchValue.length > 3) {
            setSearch(
                countries.filter(
                    (c) => c.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
                )
            )
        }
    }, [searchValue])

    const SearchList = search.map((item, key) => {
        return <SelectText 
            color={blackTextColor}
            width={"calc(100dvw - 2*var(--indent-40))"}
            onClick={() => selectCountry(item)}
            key={key}
        >
            {item}
        </SelectText>
    })

    const CountryList = MOST_POPULAR_COUNTRIES.map((item, key) => {
        return <SelectText 
            color={blackTextColor}
            width={"calc(100dvw - 2*var(--indent-40))"}
            onClick={() => selectCountry(item)}
            key={key}
        >
            {item}
        </SelectText>
    })
    return <animated.div 
        className={s.SelectCountry} 
        {...props} 
        style={springs}
    >
        <BackHeader title={"Город"} onClick={close}/>
        <Input 
            style={{height: "var(--select--input--height)"}} 
            placeholder={"Поиск по городам"}
            setValue={setSearchValue}
        />
        <div className={s.Content}>
            <Column>
                { searchValue.length > 3 ? SearchList : CountryList }
            </Column>
        </div>
    </animated.div>
}