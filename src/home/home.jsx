import React, { useState } from "react";
import DigitRecognition from "../components/digit-recognition"; 
import TextToSpeech from '../components/text-toSpeech';
import TextTranslator from '../components/text-translator';
import "./home.css"
function Home() {
  const [prediction, setPrediction] = useState('');
  const [translation, setTranslation] = useState('');
  const [translationLang, setTranslationLang] = useState('');

  //setPrediction('eight')
  const predictionChange = (newPrediction) => {
    setPrediction(newPrediction);
  };

  const translationChange = (newTranslation,selectedLanguage) => {
    setTranslation(newTranslation);
    setTranslationLang(selectedLanguage)
  };
  const data={ 'translation':translation,'toLang' :translationLang}

  return (

    <div className="parent">
      <DigitRecognition  onSubmit={predictionChange} />
      <TextTranslator value={prediction} onSubmit={translationChange} />
      <TextToSpeech value={data} />
    </div>
 

    // <div className="parent">
    //   <DigitRecognition  onSubmit={predictionChange} />
    //   <TextTranslator value={prediction,}  />
    //   <TextToSpeech />
     
    // </div>
  );
}

export default Home;