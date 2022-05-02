import React from 'react';
import {Chip} from "./components/chip";
import {Helmet} from "react-helmet";
import {Card} from "./components/card"
import {Accept, CloseVote, Create, Cross, Edit, Reject, Save, Trash} from "./components/icon";
import {Carousel} from "./components/carousel";
import {Button} from "./components/button";
import {ColorsEnum} from "./components/colors";
import {SearchBar} from "./components/search-bar/search-bar";


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Сторибук для бедных</title>
      </Helmet>
      <dt>Просто текст</dt>
      <dd>
        <div style={{display: "flex", flexDirection: "row", gap: 5}}>
          <Chip text="Сптечик"/>
          <Chip text="Ярослав" variant="accept"/>
          <Chip text="Хлопин" variant="reject"/>
        </div>
      </dd>
      <dt>С onCLose</dt>
      <dd>
        <div style={{display: "flex", flexDirection: "row", gap: 5}}>
          <Chip text="Екатеринбург Малышева 64" onClose={() => {alert('close')}}/>
          <Chip text="Ярослав" variant="accept" onClose={() => {alert('close')}}/>
          <Chip text="Хлопин" variant="reject" onClose={() => {alert('close')}}/>
        </div>
      </dd>
      <dt>С accessoryRight</dt>
      <dd>
        <div>
          <Chip text="Екатеринбург Малышева 64" accessoryRight={
            <>
                <Cross/>
                <Cross/>
            </>
          }/>
        </div>
      </dd>
      <dt>Кнопка</dt>
      <dd>
        <div style={{display: "flex", flexDirection: "row", gap: 10, flexWrap: "wrap"}}>
          <Button text="Сохранить" icon={<Save/>}/>
          <Button text="Создать" icon={<Create/>}/>
          <Button text="Редактировать" icon={<Edit/>}/>
          <Button text="Отменить" icon={<Trash/>} color={ColorsEnum.Reject}/>
          <Button text="Отказаться" icon={<Reject/>} color={ColorsEnum.Reject}/>
          <Button text="Закрыть голосование" icon={<CloseVote/>} color={ColorsEnum.Accept}/>
          <Button text="Принять приглашение" icon={<Accept/>} color={ColorsEnum.Accept}/>
        </div>
      </dd>
      <dt>Строка поиска</dt>
      <dd>
        <SearchBar>
          <input type="search"/>
        </SearchBar>
      </dd>
        <dt>Карточка</dt>
        <dd>
            <div>
                <Card
                    title="День рождения Яслрсава Лвьва"
                    description="День рождения Яслрсава Лвьва"
                    backgroundImageUrl={"https://picsum.photos/id/722/400/200"}
                />
            </div>
            <div>
                <Card
                    title="День рождения Сптпичика Ючррчченко"
                    description="День рождения Сптпичика Ючррчченко"
                    backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                />
            </div>
        </dd>
        <dt>Каруселька</dt>
        <dd>Сделаем во всю ширину</dd>
            <Carousel
                carouselElements={[
                    <Card
                        title="День рождения Яслрсава Лвьва"
                        description="День рождения Яслрсава Лвьва"
                        backgroundImageUrl={"https://picsum.photos/id/722/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1031/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                    />,
                    <Card
                        title="День рождения Сптпичика Ючррчченко"
                        description="День рождения Сптпичика Ючррчченко"
                        backgroundImageUrl={"https://picsum.photos/id/1069/400/200"}
                    />
                ]}
            />
    </div>
  );
}

export default App;
