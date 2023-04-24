import React from 'react';
import PropTypes from 'prop-types';

// import {HandySvg} from 'handy-svg';
// import Path from 'react-svg-path';
import { Header, Gallery, Group, Div, Panel, PanelHeader} from '@vkontakte/vkui';
import './style.css'
import camera from '../img/camera.png';
const demo = [
	"Это он съел хлеб в ларьке",
	"Это кто?",
	"Этот пользователь думал, что выиграет на \n ТОМ САМОМ ХАКАТОНЕ",
	"Город Нижний Волочок",
	"15",
	"Продаю гараж",
	"Верстальщик, работает в Nexign 3 дня ЫААА, без зарплаты ЫАААА",
	"<text>",
	"Хочет мерч от Nexign",
	"И мы счастливы",
	"Аста ла виста бейби",
	"Всем привет я тут новенький",
	"Тот самый хакатон",
	"В Пятерочке чебупелли по акции",
	"Рашит плент Б",
	"Я слышал про капитал Маркса, интересно, сколько он накопил?",
	"Я слышал про споры грибов, надеюсь они помирятся",
	"Одна ошибка - и ты ошибся",
	"Если я молчу - лучше меня не перебивать",
	"<untitled>",
	"Борщ с капустой, но не красный",
	"ПОООООВАР АХАААА",
	"Имя Ибрагим вам о чём нибудь говорит?",
	"Свежее мясо",
	"Хочу роллы",
	"В коворкинге была вкусная пицца",
	"42",
	"На допсе по хакатону",
	"На комиссии по хакатону",
	"Ушёл обедать в 2 часа ночи",
	"Жёстко кодил",
	"ПасхалОчка",
	"Хочет быть в жюри",
	"Нет времени объяснять",
	"Волк не волк. В цирке не в лесу",
	"ТЫ ЧЕВО НАДЕЛАЛ?",
	"Ходил во Вкусно и Точка, а там невкусно и запятая...",
	"Пошумим",
	"А Я БУДУ",
	"Нельзя так просто взять и закодить нейросетку",
	"Ушёл за хлебом",
	"Редкий вид снюсоеда",
	"Лучше быть последним первым, чем первым последним",
	"Нет ничего важнее семьи",
	"Сказочный",
	"Скупаю биток",
	"Павел Дуров верни стену",
	"Крош или Ёжик",
	"Я запрещаю",
	"Я запрещаю вам запрещать",
	"Я запрещаю вам кодить на JS",
	"С--",
	"Вложился в акции Nexign",
	"Смотрю аниме",
	"Пацаны ваще ребята",
	"Могёт",
	"хто я?",
	"Подержите моё пиво",
	"Я сама неотвратимость",
	"Я вижу тут одного гангстера",
	"Вы ваще бублики с дырками",
	"Пацаны, развивайтесь, читайте книжки",
	"А ловко ты это придумал - DEMO!",
	"Что такое бебра",
	"Люблю команду Костыли",
	"Ученик",
	"Ударился мизинцем о тумбочку",
	"Да ты что...",
	"В твоём возрасте мне уже было 34",
	"Навёл порчу",
	"Я только пришёл на работу, а уже устал",
	"Беды с башкой",
	"Давай по новой, Миша",
	"Ты знаешь кто прекрасен? Прочитай первое слово",
	"Прострелили колено",
	"Авада Кедавра",
	"Культовый мем Урала",
	"Сила в правде",
	"Загадка Жака Фреско",
	"Ждёт обнову Бравл Старс",
	"Приложение сломалось, попробуй перезапустить",
	"Приложение не сломалось, просто лень придумывать подпись",
	"300 метров от вас",
	"Папулы гноятся? Не беда! Есть решение... читать продолжение",
	"А у нас за такое на севере...",
	"Огурец",
	"Кабачок",
	"Шлёпа",
	"Ухты-пухты",
	"Ой"
]

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let f = getRandomInt(0, 88);
		let s = getRandomInt(0, 88);
		let t = getRandomInt(0, 88);
		let ch = getRandomInt(0, 88);
		let fi = getRandomInt(0, 88);
		let six = getRandomInt(0, 88);
		let sev = getRandomInt(0, 88);
		console.log(f, s, t)
const Home = ({id, friends}) => (
	
	<div id={id} friends = {friends} className = "panell">
		<Group header={<Header mode="secondary">ТОТ САМЫЙ ХАКАТОН</Header>}>
      		<Gallery
        		slideWidth="100%"
        		style={{ height: 700 }}
        		// bullets="dark"
        		showArrows
      		>	
        
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[0]?friends[0].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[f]}</div>
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[1]?friends[1].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[s]}</div>
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[2]?friends[2].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[t]}</div>
			{console.log(demo[t])}
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[3]?friends[3].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[ch]}</div>
			{console.log(demo[ch])}
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[4]?friends[4].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[fi]}</div>
			{console.log(demo[fi])}
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[5]?friends[5].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[six]}</div>
			{console.log(demo[fi])}
		</div>
		<div className="body">
			<div className="items_container">
				<div className="photo_container">
					<div className="photo" style={{ backgroundImage: `url(${friends[6]?friends[6].photo_200_orig:camera})` }}>
						
							{/* <img className="photo_icon" src={friends[0]?friends[0].photo_200_orig:camera} alt="CameraPic"/> */}
						
					</div>
				</div>
			</div>
			<div className='podpis'>{demo[sev]}</div>
			{console.log(demo[fi])}
		</div>
      </Gallery>
    </Group>
	</div>
	
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
