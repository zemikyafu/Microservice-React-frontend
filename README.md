# frontendReact
Frontend React application for micro-services (Neural network digit prediction and cognitive services.

To access the microservices and utilize their underlying services, I have developed a Frontend application using React. The frontend application consists of one parent component called "home" and three child components. These child components are rendered side by side within the parent component. Each child component corresponds to one of the microservices and is implemented in JSX componets: "digit-recognition.jsx," "text-translator.jsx," and "text-toSpeech.jsx."

To interact with the backend microservice endpoints, I have created a class named "micro.service.js" that serves as API interface to the backend and contains methods for making Axios POST requests within the three child components.
The "digit-recognition" component provides a user interface that allows users to upload pictures. The uploaded picture is then sent to the backend microservice for processing. The response data, which represents the predicted digit from the image, is parsed and displayed on the "digit-recognition" component as well as on the "text-translator" component's input field,

The "text-translator" component includes UI fields that hold the text value received from the "digit-recognition" component via the parent component. In React, data flow is unidirectional, and we use props to pass data from parent to child components. State data cannot be directly shared or transferred between child components. After selecting the language option, clicking the translate button submits the component data to the backend textTranslator service. The response from the backend is parsed, and the translated text result is displayed on the "text-translator" component and the "text-toSpeech" component, 

The "text-toSpeech" component features UI fields for language selection and holding the translated text value. When the "convert to speech" button is clicked, the component data is submitted to the backend via a POST request. The response data from the backend, which contains audio data, is loaded in the browser. The synthesized audio data can then be played on the browser, as it is shown in Figure 4.
The end-to-end testing of the three microservice interactions from the frontend has been performed successfully.


