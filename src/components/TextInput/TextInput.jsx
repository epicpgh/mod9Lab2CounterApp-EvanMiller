





import { useState } from "react";

function TextInput({ onTextChange, placeholder = "" }) {
    const [inputValue, setInputValue] = useState("");

    const handleTextChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
     
            onTextChange(newValue);
        };
    

    return (
        <>
            <label htmlFor="text-input">Type Something...</label>
            <textarea 
                id="text-input"
                type="text"
                value={inputValue}
                onChange={handleTextChange}
                placeholder={placeholder}
                className="text-input"
            />
        </>
    );}



    



export default TextInput