import axios  from "axios";

// const URL_Digit_Recognition_Service= 'http://localhost:5001/api/cnn_keras/predict';
// const URL_Text_Translator_Service= 'http://localhost:5002/api/translate';
// const URL_Text_TO_Speech_Service = 'http://localhost:5003/api/text-to-speech';


const URL_Digit_Recognition_Service= 'http://192.168.49.2:31520/api/cnn_keras/predict';
const URL_Text_Translator_Service= 'http://192.168.49.2:32150/api/translate'
const URL_Text_TO_Speech_Service = 'http://192.168.49.2:31499/api/text-to-speech';


//  Digit Recognition MicroService  Post request 
class MicroService
{
    async digitRecognition(formData)
    {
       
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
   
        return await axios.post( URL_Digit_Recognition_Service, formData
                ,config)
            .then((resp =>{
            return resp.data;
            }));
   
    }

// Text translator microservice  Post request 
    async textTranslator(from,to,inputText)
    {
        const config = {
            headers: {
                "Content-Type": 'application/json',
            },
        };
     const  formData={"from":from,"to":to,"inputText":inputText}
     
        return await axios.post( URL_Text_Translator_Service, formData
                ,config)
            .then((resp =>{
            return resp;
            }));
    }
// Text to Speech convertor  microservice Post request  
    async textToSpeech(text,language )
    {
        const config = {
            headers: {
                "Content-Type": 'application/json',
            },responseType: 'blob'
        };

        const  formData={
            "text":text,"language":language}
        return await axios.post( URL_Text_TO_Speech_Service, formData
                ,config)
            .then((resp =>{
            return resp;
            }));
    }
}
export default new MicroService()

