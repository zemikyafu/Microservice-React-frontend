import React, { useState, useEffect } from 'react';
import microService from "../api/micro.service";
import './child.css';

function TextToSpeech(props) {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState("");
  const [audioUrl, setAudioUrl] = useState("");


//update the audio data when new data avalable 
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);


   // update the selected language is changed  from parent component prop 
   useEffect(() => {
    setLanguage(props.value.toLang);
  }, [props.value.toLang]);




 // Make a POST request to the Flask microservice
  const submit = async(event)=> {
    event.preventDefault();
    
    //get prediction result from parent component using probs Hook
    // setInputText(props.value)
    setText(props.value.translation)

  // API call to  textToSpeech
    await microService.textToSpeech(text,language).then(response => {
      const url = URL.createObjectURL(response.data);
      setAudioUrl(url);
    })
    .catch(error => {
      console.error(error);
    });

  }



  const handleChange = (e) => {
        setLanguage(e.target.value);
      };

  return (
    
 
 <div className="child3">
    <h1>Text To Speech Conversion</h1>
    <form onSubmit={submit} className="form">
      <label>
        Language:
        <select value={language} onChange={handleChange} className="select">
          <option value="">Choose an option</option>
          <option value="ar">Arabic</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="fi">Finnish</option>
          <option value="de">German</option>
        </select>
        </label>
      <label>
         Text:
         <input type="text" 
         value={props.value.translation}  onChange={(e) => setText(e.target.value)} className="input" />
      </label>
      <button type="submit" className="button">Convert to speech</button>
    </form>
        {audioUrl && (
          <audio key={audioUrl} controls className="audio">
            <source src={audioUrl} type="audio/wav" />
          </audio>
        )}
  </div>


  );
}

export default TextToSpeech;


// export default TextToSpeech;
