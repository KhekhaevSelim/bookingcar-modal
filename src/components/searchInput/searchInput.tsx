import { useState } from "react"
import style from "./searchInput.module.css"
import clear from "../../assets/icons/close.png"
type SearchInputPropsType = {
    placeholder : string
}

const SearchInput = (props: SearchInputPropsType) => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const clearInput = () => {
        setInputValue("")
    }
    return (
        <div className={style.container}>   
        { inputValue ?
           <>
          <input type="text" className={style.customInput2} placeholder={props.placeholder}
                 value={inputValue} onChange={e=>handleChange(e)}/> 
          <img src={clear} alt="clear" className={style.clearIcon} onClick={clearInput}/>
          </> 
                 :
          <input type="text" className={style.customInput} placeholder={props.placeholder}
                 value={inputValue} onChange={e=>handleChange(e)}/>
        }
        </div>
    
    )
}

export default SearchInput;