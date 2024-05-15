import { useCallback, useEffect, useState } from 'react';
import './passwordCard.css';

function PasswordCard(){

    //passwordd state
    const [passwordvalue , passwordsetValue] = useState("");
    //length
    const [length , lengthSetValue] = useState(8);
    // uppercase
    const [uppercaseAllowed , uppercaseAllowedset] = useState(false);
    //lower
    const [lowercaseAllowed , lowercaseAllowedset] = useState(false);
    //numbers
    const [numbersAllowed , numbersAllowedset] = useState(false);
    //symbols
    const [symboleAllowed , symboleAllowedset] = useState(false);
    //passworGenerator
    const passwordGenerator = useCallback(()=>{
        let password = "";
        let passwordValues = "";
        if(numbersAllowed==true){passwordValues += "134567890";}
        if(uppercaseAllowed)passwordValues+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowercaseAllowed)passwordValues+="abcdefghijklmnopqrstuvwxyz";
        if(symboleAllowed)passwordValues+= "~`@#$%^&*()_+={[}]|\:;'<,>.?/-+=/*-+,.%^7)-_!<>/:"
       if(!numbersAllowed && !uppercaseAllowed && !lowercaseAllowed && !symboleAllowed){
            alert("Select any option");
            passwordsetValue("");
            return;
       }
        for(let i=1; i<=length; i++){
            let createPassword = Math.floor(Math.random()*passwordValues.length+1);
            password += passwordValues[createPassword];
        }
        passwordsetValue(()=>{
            passwordsetValue(password);
        });
    } , [length , uppercaseAllowed , lowercaseAllowed , numbersAllowed , symboleAllowed , passwordsetValue]);


    //useEffect
    useEffect(()=>{
        passwordGenerator();
    } , [length , uppercaseAllowed , lowercaseAllowed , numbersAllowed , symboleAllowed])

    function copyText(){
        window.navigator.clipboard.writeText(passwordvalue);
        alert("Password copied Successfully");
        return
    }
    return(
        <>
            <div className='mainContainer'>
                <div className='innerContainer'>
                <h1>Password Generator</h1>
                <div className='inputBox flexbody' >
                    <input type='text'  readOnly value={passwordvalue} 
                        style={{ 
                            width : "500px",
                            padding : "15px",
                            borderRadius :"10px",
                            margin : "10px"
                        }}
                    />
                    <button 
                        style={{ 
                            width : "70px",
                            padding : "15px",
                            borderRadius :"10px",
                            
                        }}
                        onClick={copyText}
                    >Copy</button>
                </div>
                <div className='flexbody' >
                    <p style={{ 
                           fontSize :"25px",
                           color :"white"
                        }}>Select Password length(**8-50 characters**)</p>
                    <input type='number' value={length} onChange={(e)=>{
                        lengthSetValue(e.target.value)
                    }} 
                    style={{ 
                        width : "35px",
                        padding : "10px",
                        borderRadius :"10px",
                        margin : "10px 15px"
                    }}
                    />   
                </div>
                <div className='checkBox flexbody'>
                    <input type="checkbox"  id="uppercase" defaultChecked= {uppercaseAllowed} onChange={(e)=>{
                        uppercaseAllowedset((previous)=>!previous)
                    }}/>
                    <label>Include upper case</label>
                    <input type="checkbox"  id="lowercase"  defaultChecked= {lowercaseAllowed} onChange={(e)=>{
                        lowercaseAllowedset((previous)=>!previous)
                    }} />
                    <label >Include lower case</label>
                    <input type="checkbox"  id="number"  defaultChecked= {numbersAllowed} onChange={(e)=>{
                        numbersAllowedset((previous)=>!previous)
                    }} />
                    <label >Include number</label>
                    <input type="checkbox"  id="symbol"  defaultChecked= {symboleAllowed} onChange={(e)=>{
                        symboleAllowedset((previous)=>!previous)
                    }}/>
                    <label >Include symbol</label>
                </div>
               
                
                    <div className='generateButton'>
                        <button onClick={()=>{
                         const id1 = document.getElementById("uppercase").checked = true;
                         uppercaseAllowedset(true)
                         const id2 = document.getElementById("lowercase").checked = true;
                         lowercaseAllowedset(true)
                         const id3 = document.getElementById("number").checked = true;
                         numbersAllowedset(true)
                         const id4 = document.getElementById("symbol").checked = true;
                         symboleAllowedset(true)

                        }} 
                        style={{
                            padding :"15px",
                            borderRadius : "10px"
                        }}
                        >Generate Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PasswordCard;