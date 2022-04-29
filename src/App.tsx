import React from 'react';
import {Chip} from "./components/chip";
import {Helmet} from "react-helmet";
import {Card} from "./components/card"
import {Cross} from "./components/icon/cross";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Сторибук для бедных</title>
      </Helmet>
      <dt>Просто текст</dt>
      <dd>
        <div>
          <Chip text="Сптечик"/>
          <Chip text="Ярослав" variant="accept"/>
          <Chip text="Хлопин" variant="reject"/>
        </div>
      </dd>
      <dt>С onCLose</dt>
      <dd>
        <div>
          <Chip text="Екатеринбург Малышева 64" onClose={() => {alert('close')}}/>
          <Chip text="Ярослав" variant="accept" onClose={() => {alert('close')}}/>
          <Chip text="Хлопин" variant="reject" onClose={() => {alert('close')}}/>
        </div>
      </dd>
      <dt>С accessoryRight</dt>
      <dd>
        <div>
          <Chip text="Екатеринбург Малышева 64" accessoryRight={
            <><Cross/><Cross/></>
          }/>
        </div>
      </dd>
        <dt>Карточка</dt>
        <dd>
            <div>
                <Card
                    title="Aboba"
                    description="День рождения нашего дорогого друга Хмитрия Длопина!"
                    backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                />
            </div>
        </dd>
    </div>
  );
}

export default App;
