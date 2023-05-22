import React, { useState } from "react";
import axios from "axios";

import microService from "../api/micro.service";
import './child.css';
function  DigitRecognition (props)  {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);


    //  Form submit event
    const submit = async (event) => {
      event.preventDefault();
  
      
      const formData = new FormData();
      formData.append('image', image);
  
      // API call to  digitRecognition

      await microService.digitRecognition(formData).then( (res)=>{
        console.log(res)
        if(res.success)
        {
          setPrediction(res.predictResult);
          props.onSubmit(res.predictResult)
        }
       
      })      
    
  
    }
     // image upload event handler 
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  }

    return (
        <div className="child1">
            <h1>CNN Keras Prediction</h1>
            <form onSubmit={submit}>
                <label>
                Upload Image:
                <input type="file" onChange={handleImageUpload} />
                </label>
                <button type="submit" className="button">Predict</button>
            </form>
            {prediction && (
                <div>
                <p>Image digit prediction: {prediction}</p>
             
                </div>
            )}
        </div>
    );

};

export default DigitRecognition;