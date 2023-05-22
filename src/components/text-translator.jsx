import React, { useState } from "react";
import microService from "../api/micro.service";
import './child.css'; 
// const TextTranslator = (props) => {
//     const [from, setFrom] = useState("en");
//     const [to, setTo] = useState("");
//     const [inputText, setInputText] = useState("");
//     const [translation, setTranslation] = useState("");
function TextTranslator(props) {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("");
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState("");

    // setInputText(props.value)

 
//  Form submit event
const submit = async (event) => {
    event.preventDefault();

    
     // API call to  textTranslator
    setInputText(props.value)
  const  origintext=props.value ;
  console.log(origintext)
    await microService.textTranslator(from,to,origintext).then( (res)=>{
      console.log(res.data)
      if(res.status===200) 
      {
        
        setTranslation(res.data.text); 
        props.onSubmit(res.data.text,to)
      }
    
    })      
  

  }

    return (
   
    <div className="child2">
     <h1>Text Translation</h1>
     
    <form onSubmit={submit}>
      <label>
        From:
        <input type="text"  value={from} onChange={(e) => setFrom(e.target.value)} className="input" />
      </label>
      <br />
      {/* Number of language option can be increased  */}
      <label>
        To language   :
        <select value={to} onChange={(e) => setTo(e.target.value)} className="select">
        <option value="">Choose an option</option>
          <option value="ar">Arabic</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="fi">Finnish</option>
          <option value="de">German</option>
        </select>
      </label>
      <br />
      <label>
        Text:
        <input type="text"  value={props.value}  onChange={(e) => setInputText(e.target.value)} className="input"/>
      </label>
      <br />
      {translation && (
                <div>
                <p>Text Translated to {to} : {translation}</p>
             
                </div>
            )}
      <button type="submit" className="button">Translate</button>
    </form>
    </div>
    );

};

 export default TextTranslator;