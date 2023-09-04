import { useState } from "react"
import style from "./checkBox.module.css"
import checked from "../../assets/icons/checked.png"
type CheckBoxPropsType = {
    title : string
    onlyNumbers : boolean
    showExtraInput? : (extraInput : boolean) => void
    isColumnInput : boolean
    checkBoxValue : boolean
    isAge : boolean
}
const CheckBox = (props : CheckBoxPropsType) => {

   const [inputValue, setInputValue] = useState<string>("")
   const [checkBoxValue, setCheckBoxValue] = useState<boolean>(props.checkBoxValue)

   const handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>,onlyNumbers : boolean) => {
    if(onlyNumbers){
      const value = e.currentTarget.value;
      const regex = /^[0-9]*$/;
      if (regex.test(value)) {
        setInputValue(value);
       }
     } else {
      setInputValue(e.currentTarget.value);
     }
   }
   const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBoxValue(e.target.checked)
   }
    return (
        props.isColumnInput ? 
      <div className={style.leftPart}>
       <div className={style.customCheckboxContainer}> 
          <div className={style.customCheckboxContainer}>
              <input type="checkbox" checked={checkBoxValue} onChange={e => {
                props.showExtraInput ?  props.showExtraInput(checkBoxValue) : ""
                handleChangeCheckBox(e)}
            } className={style.hiddenCheckbox} />
              <span className={style.customCheckbox}>
                { checkBoxValue && <img src={checked} alt="checked" loading="lazy"/> }
              </span>
          </div>
          <p>{props.title}</p>
        </div> 
      </div> 
        :
        <div className={style.container}>

          <div className={style.leftPart}>
            <div className={style.customCheckboxContainer}>
              <input type="checkbox" checked={checkBoxValue} onChange={e => handleChangeCheckBox(e)} className={style.hiddenCheckbox}/>
              <span className={style.customCheckbox}>
                { checkBoxValue && <img src={checked} alt="checked" loading="lazy"/> }
              </span>
            </div>
            <p>{props.title}</p>
          </div>

          {
            props.isAge ? 
            !checkBoxValue && <input type="text" className={style.input} value={inputValue} onChange={(e)=>handleChangeInput(e, props.onlyNumbers)}/>
            :
            checkBoxValue && <input type="text" className={style.input} value={inputValue} onChange={(e)=>handleChangeInput(e, props.onlyNumbers)}/>
          }
         
          
        </div>
    )
}

export default CheckBox;