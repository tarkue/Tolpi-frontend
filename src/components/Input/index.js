import s from "./Input.module.css"

import { useRef } from "react";

import Card from "../Card";

/**
 * Styled input component 
*/
export default function Input({placeholder, setValue, ...props}) {
    const textInput = useRef(null);

    return (
      <Card 
        onClick={() => {textInput.current.focus()}} 
        style={{cursor: "text", padding: "var(--indent-20)",}}
      >
        <textarea 
            ref={textInput}
            type="text" 
            name="input"
            placeholder={placeholder}
            className={s.Input}
            onChange={(e) => setValue(e.target.value)}
            {...props}
        />
      </Card>
    )
  }