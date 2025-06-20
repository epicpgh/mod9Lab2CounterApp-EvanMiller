





import { useState } from "react";

function TextInput({ onTextChange, placeholder }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
                console.log(e.target.value);
     
            onTextChange(e.target.value);
        }
    };

    return (
        <>
            <label htmlFor="text-input">Type Something...</label>
            <textarea on change = {handleChange}style = {{width: 100% }}
                id="text-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="text-input"
            />
        </>
    );
}


    



export default TextInput