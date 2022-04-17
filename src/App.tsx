import React from 'react';
import {Chip} from "./components/chip";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Тест Chips</title>
      </Helmet>
      <div>
        <Chip text="Сптечик"/>
        <Chip text="Ярослав" variant="accept"/>
        <Chip text="Хлопин" variant="reject"/>
      </div>
      <div>
        <Chip text="Екатеринбург Малышева 64" onClose={() => {alert('close')}}/>
        <Chip text="Ярослав" variant="accept" onClose={() => {alert('close')}}/>
        <Chip text="Хлопин" variant="reject" onClose={() => {alert('close')}}/>
      </div>
    </div>
  );
}

export default App;
