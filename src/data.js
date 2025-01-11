// for carousel services on home page
import service1 from "./images/slider/1.jpg";
import service2 from "./images/slider/2.jpg";
import service3 from "./images/slider/3.jpg";
import service4 from "./images/slider/4.jpg";
import service5 from "./images/slider/5.jpg";
import service6 from "./images/slider/6.jpg";
import service8 from "./images/slider/8.jpg";

// for carousel cars models in home page
import audi from "./images/car-models/audi.png";
import bmw from "./images/car-models/bmw.png";
import chevrolet from "./images/car-models/chevrolet.png";
import ford from "./images/car-models/ford.png";
import honda from "./images/car-models/honda.png";
import hyundai from "./images/car-models/hyundai.png";
import mazda from "./images/car-models/mazda.png";
import mercedes from "./images/car-models/mercedes.png";
import mitsubishi from "./images/car-models/mitsubishi.png";
import nissan from "./images/car-models/nissan.png";
import seat from "./images/car-models/seat.png";
import skoda from "./images/car-models/skoda.png";
import subaru from "./images/car-models/subaru.png";
import suzuki from "./images/car-models/suzuki.png";
import toyota from "./images/car-models/toyota.png";
import volkswagen from "./images/car-models/volkswagen.png";

// for list-services for service page
import motor from "./images/list-services/motor.jpg";
import kpp from "./images/list-services/kpp.jpg";
import oil from "./images/list-services/oil.jpg";
import petrol from "./images/list-services/petrol.jpg";
import holod from "./images/list-services/holod.jpg";
import hodovka from "./images/list-services/hodovka.jpg";
import halma from "./images/list-services/halma.jpg";
import sczepleniya from "./images/list-services/sczepleniya.jpg";
import ruleveKeruvannya from "./images/list-services/ruleve-keruvannya.jpg";

// for selected service component SVG images
import checkList from "./images/svg/selected-service/check-list-svgrepo-com (1).svg";
import workSpace from "./images/svg/selected-service/private-garage-svgrepo-com.svg";
import time from "./images/svg/selected-service/time-check-svgrepo-com.svg";
import worker from "./images/svg/selected-service/mechanic-tools-svgrepo-com.svg";
import service from "./images/svg/selected-service/repairing-service-svgrepo-com.svg";
import price from "./images/svg/selected-service/pc-mechanic-svgrepo-com.svg";

export const items = [
	{
		image: { service5 },
		title: "Гальмівна система",
		description:
			"Ваша безпека на дорозі - це наш головний пріорітет, тому ми завжди радимо ретельно перевіряти гальмівну систему авто. ",
	},
	{
		image: { service4 },
		title: "ТО",
		description: "Важливою частиною експлуатації автомобіля є своєчасне ТО. ",
	},
	{
		image: { service3 },
		title: "КПП",
		description:
			"Кваліфікація наших майстрів є основною вимогою складного і точного процесу ремонту КПП. ",
	},
	{
		image: { service8 },
		title: "Системи охолодження",
		description:
			"Підтримка оптимальної температури в двигуні, для упередження його перегріву є надважливою складовою життєздатності двигуна.",
	},
	{
		image: { service2 },
		title: "Двигун",
		description:
			"Двигун - це серце автомобіля, від роботи якого залежить абсолютно все",
	},
	{
		image: { service6 },
		title: "Паливна система",
		description:
			"Паливна система - забезпечує правильну роботу двигуна та оптимальне використання палива, тому здоров'я паливної напряму пов'язане зі здоров'ям двигуна. ",
	},
];

export const carModels = [
	audi,
	bmw,
	chevrolet,
	ford,
	honda,
	hyundai,
	mazda,
	mercedes,
	mitsubishi,
	nissan,
	seat,
	skoda,
	subaru,
	suzuki,
	toyota,
	volkswagen,
];

export const listServices = [
	{
		path: "/service/halmivna-sistema",
		service: "Профілактика та ремонт гальмівної системи",
		title: "Гальмівна система",
		image: halma,
		repair: "Ремонт двигуна, трансмісії та навісного обладнаня",
		itemsForTable: [
			{ id: 1, name: "Заміна гальмівної рідини", price: "від 500 грн" },
			{ id: 2, name: "Прокачка гальмівної системи", price: "від 300 грн" },
			{ id: 3, name: "Заміна гальмівного шлангу", price: "від 400 грн" },
			{ id: 4, name: "Заміна колодок (1 колесо)", price: "від 250 грн" },
			{ id: 5, name: "Заміна колодок на барабані", price: "від 500 грн" },
			{ id: 6, name: "Регулювання ручника", price: "від 300 грн" },
			{ id: 7, name: "Заміна колодок ручника", price: "від 500 грн" },
			{ id: 8, name: "Заміна тросу", price: "від 1000 грн" },
			{ id: 9, name: "Заміна супорта", price: "від 300 грн" },
			{
				id: 10,
				name: "Заміна головного гальмівного циліндру",
				price: "від 600 грн",
			},
			{
				id: 11,
				name: "Заміна вакуумного підсилювача гальм",
				price: "від 1000 грн",
			},
			{ id: 12, name: "Заміна гальмівного диску", price: "від 500 грн" },
			{ id: 13, name: "Ремонт суппорта", price: "від 500 грн" },
		],
		description:
			"Ваша безпека на дорозі - це наш головний пріорітет, тому ми завжди радимо ретельно перевіряти гальмівну систему авто. Профілактикою є перевірка гальмівних шлангів, рівня та стану гальмівної рідини, дисків, колодок, суппортів та іншого. На дорозі час від часу трапляються різні ситуації, тож Ви повинні бути готові до будь-якого розвитку подій!",
	},
	{
		path: "/service/technichne-obslugovuvannya",
		service: "Технічне обслуговування",
		title: "ТО",
		image: oil,
		repair: "Технічне обслуговування",
		itemsForTable: [
			{ id: 1, name: "ТО (олива, фільтри)", price: "від 500 грн" },
			{
				id: 2,
				name: "Зняття та встановлення захисту двигуна",
				price: "від 100 грн",
			},
			{ id: 3, name: "Заміна салонного фільтра", price: "від 200 грн" },
			{ id: 4, name: "ТО КПП (олива, фільтр)", price: "від 1000 грн" },
			{ id: 5, name: "Заміна рідини ГПК", price: "від 400 грн" },
			{ id: 6, name: "Заміна ременя ГРМ", price: "від 2500 грн" },
			{ id: 7, name: "Заміна ременя кондиціонера", price: "від 500 грн" },
			{ id: 8, name: "Заміна ременя генератора", price: "від 500 грн" },
			{ id: 9, name: "Заміна ременя насосу ГПК", price: "від 500 грн" },
			{ id: 10, name: "Заміна ланцюга ГРМ", price: "від 3000 грн" },
			{
				id: 11,
				name: "Заміна зчеплення (корзина, диск)",
				price: "від 4000 грн",
			},
			{ id: 12, name: "Заміна сальника напіввісі АКПП", price: "від 800 грн" },
			{ id: 13, name: "Комп’ютерна діагностика", price: "від 300 грн" },
			{ id: 14, name: "Заміна охолоджуючої рідини", price: "від 600 грн" },
		],
		description:
			"Важливою частиною експлуатації автомобіля є своєчасне ТО. Двигун, підвіска, гальма, різні рідини та багато іншого впливають на стан авто та його надійність.Тому вчасне ТО допомагає зберегти Ваше авто якнайдовше.",
	},
	{
		path: "/service/kpp",
		service: "Ремонт КПП",
		title: "КПП",
		image: kpp,
		repair: "",
		itemsForTable: [
			{
				id: 1,
				name: "Діагностика КПП (без зняття та розбирання)",
				price: "від 250 грн",
			},
			{ id: 2, name: "Заміна масла МКПП", price: "від 200 грн" },
			{
				id: 3,
				name: "Часткова заміна масла АКПП без заміни фільтра",
				price: "від 500 грн",
			},
			{
				id: 4,
				name: "Часткова заміна масла АКПП із заміною фільтра",
				price: "від 650 грн",
			},
			{
				id: 5,
				name: "Заміна масла в редукторі (перед/зад)",
				price: "від 200 грн",
			},
			{
				id: 6,
				name: "Заміна масла в розподільчій коробці (роздатка)",
				price: "від 200 грн",
			},
			{
				id: 7,
				name: "Зняття та встановлення КПП (без підрамника)",
				price: "від 2000 грн",
			},
			{
				id: 8,
				name: "Зняття та встановлення КПП (з підрамником)",
				price: "від 3500 грн",
			},
			{
				id: 9,
				name: "Розбирання та дефектування МКПП",
				price: "від 1500 грн",
			},
			{
				id: 10,
				name: "Капітальний ремонт МКПП",
				price: "від 2500 грн",
			},
			{
				id: 11,
				name: "Заміна куліси вибору передач МКПП/АКПП",
				price: "від 300 грн",
			},
			{
				id: 12,
				name: "Сальник первинного валу КПП (на знятій КПП)",
				price: "від 150 грн",
			},
			{
				id: 13,
				name: "Регулювання куліси вибору передач",
				price: "від 150 грн",
			},
		],
		description:
			"Кваліфікація наших майстрів є основною вимогою складного і точного процесу ремонту КПП. Якщо у Вас є питання стосовно КПП Вашого авто (скрежетання, вібрації, диференційний шум, важкість перемикання передач) звертайтесь до нас, ми продіагностуємо проблему, розглянемо шляхи вирішення та усунемо її. Нагадуємо, своєчасність звернення та визначення проблеми заощадить Ваш час та Ваші кошти.",
	},
	{
		path: "/service/sistema-oholodzhennya",
		service: "Ремонт системи охолодження",
		title: "Системи охолодження",
		image: holod,
		repair: "",
		itemsForTable: [
			{
				id: 1,
				name: "Перевірка щільності рідини охолодження",
				price: "від 30 грн",
			},
			{
				id: 2,
				name: "Заміна рідини системи охолодження",
				price: "від 350 грн",
			},
			{ id: 3, name: "Промивання системи охолодження", price: "від 500 грн" },
			{ id: 4, name: "Заміна радіатора двигуна", price: "від 550 грн" },
			{
				id: 5,
				name: "Заміна радіатора двигуна зі зняттям бампера та передньої панелі",
				price: "від 850 грн",
			},
			{
				id: 6,
				name: "Промивання радіатора обігрівача салону",
				price: "від 700 грн",
			},
			{
				id: 7,
				name: "Апаратне промивання радіатора обігрівача салону",
				price: "від 1300 грн",
			},
			{
				id: 8,
				name: "Заміна радіатора (обігрівача) салону",
				price: "від 900 грн",
			},
			{
				id: 9,
				name: "Заміна помпи (без зняття ГРМ)",
				price: "від 450 грн",
			},
			{
				id: 10,
				name: "Заміна патрубка системи охолодження",
				price: "від 250 грн",
			},
			{
				id: 11,
				name: "Заміна термостату",
				price: "від 300 грн",
			},
		],
		description:
			"Підтримка оптимальної температури в двигуні, для упередження його перегріву є надважливою складовою життєздатності двигуна. Якщо двигун буде піддаватися постійним перегрівам, це викличе серйозні поломки, несправності, які добре вдарять по Вашому гаманцю. Своєчасна діагностика, виявлення несправностей в системі охолодження допоможе продовжити срок служби Вашому авто в рази.",
	},
	{
		path: "/service/dvigun",
		service: "Ремонт двигунів",
		title: "Двигун",
		image: motor,
		repair: "",
		itemsForTable: [
			{ id: 1, name: "Ремонт стартера", price: "від 800 грн" },
			{ id: 2, name: "Заміна стартера", price: "від 500 грн" },
			{ id: 3, name: "Ремонт генератора", price: "від 1200 грн" },
			{ id: 4, name: "Заміна генератора", price: "від 500 грн" },
			{
				id: 5,
				name: "Заміна прокладки клапанної кришки",
				price: "від 500 грн",
			},
			{ id: 6, name: "Заміна прокладки піддону", price: "від 1000 грн" },
			{ id: 7, name: "Заміна прокладки ГБЦ", price: "від 4000 грн" },
			{ id: 8, name: "Чистка дросельної заслінки", price: "від 700 грн" },
			{
				id: 9,
				name: "Заміна прокладки впускного колектора",
				price: "від 1500 грн",
			},
			{
				id: 10,
				name: "Демонтаж та встановлення двигуна",
				price: "від 7000 грн",
			},
			{ id: 11, name: "Демонтаж та встановлення КПП", price: "від 4000 грн" },
			{ id: 12, name: "Заміна радіатора охолодження", price: "від 1100 грн" },
			{ id: 13, name: "Заміна термостату", price: "від 500 грн" },
		],
		description:
			"Двигун - це серце автомобіля, від роботи якого залежить абсолютно все. В нашому СТО є кваліфіковані фахівці та спеціальне обладнання, тому Ви можете бути спокійні, в разі потреби серце Вашого авто в наших надійних руках.",
	},
	{
		path: "/service/palivna-sistema",
		service: "Діагностика та обслуговування паливної системи",
		title: "Паливна система",
		image: petrol,
		repair: "Паливна система",
		itemsForTable: [
			{ id: 1, name: "Заміна свічок запалювання", price: "від 200 грн" },
			{ id: 2, name: "Чистка форсунок", price: "від 800 грн" },
			{ id: 3, name: "Зняття встановлення колектора", price: "від 1300 грн" },
			{ id: 4, name: "Заміна бензонасосу", price: "від 1000 грн" },
			{ id: 5, name: "Замір тиску паливного насосу", price: "від 250 грн" },
		],
		description:
			"Паливна система - забезпечує правильну роботу двигуна та оптимальне використання палива, тому здоров'я паливної напряму пов'язане зі здоров'ям двигуна. Тому у разі виявлення проблем, наприклад таких як втрата потужності або надмірний розхід пального, наші майстри швидко усунуть її, щоб Ви і далі отримували насолоду від свого авто",
	},
	{
		path: "/service/sczeplennya",
		service: "Ремонт та заміна зчеплення",
		title: "Зчеплення",
		image: sczepleniya,
		repair: "Зчеплення",
		itemsForTable: [
			{ id: 1, name: "Діагностика системи зчеплення", price: "від 200 грн" },
			{
				id: 2,
				name: "Заміна робочого циліндра зчеплення",
				price: "від 300 грн",
			},
			{
				id: 3,
				name: "Заміна головного циліндра зчеплення",
				price: "від 450 грн",
			},
			{
				id: 4,
				name: "Заміна комплекту зчеплення",
				price: "від 2200 грн",
			},
			{
				id: 5,
				name: "Заміна комплекту зчеплення зі зняттям підрамника",
				price: "від 2850 грн",
			},
			{
				id: 6,
				name: "Заміна комплекту зчеплення (повний привід)",
				price: "від 3500 грн",
			},
			{
				id: 7,
				name: "Заміна троса зчеплення",
				price: "від 350 грн",
			},
			{
				id: 8,
				name: "Регулювання троса зчеплення",
				price: "від 150 грн",
			},
			{
				id: 9,
				name: "Реставрація одномасового маховика",
				price: "від 800 грн",
			},
			{
				id: 10,
				name: "Перевірка гідравлічної рідини на наявність вологи",
				price: "від 30 грн",
			},
			{
				id: 11,
				name: "Долив гідравлічної рідини зчеплення",
				price: "від 50 грн",
			},
			{
				id: 12,
				name: "Прокачування зчеплення",
				price: "від 250 грн",
			},
		],
		description:
			"Зчеплення – важливий елемент авто, що забезпечує плавне перемикання передач і передачу крутного моменту від ДВС на трансмісію. З пробігом цей вузол зношується і потребує ремонту. За наявності особливих ознак несправностей варто звернутися до автосервісу. Досвідчені механіки допоможуть визначити причину поломки та якісно усунути несправність.",
	},
	{
		path: "/service/ruleve-keruvannya",
		service: "Ремонт рульового керування",
		title: "Рульове керування",
		image: ruleveKeruvannya,
		repair: "Рульове керування",
		itemsForTable: [
			{ id: 1, name: "Діагностика рульового керування", price: "від 200 грн" },
			{ id: 2, name: "Заміна рульової тяги", price: "від 250 грн" },
			{ id: 2, name: "Заміна рульового наконечника", price: "від 200 грн" },
			{ id: 2, name: "Заміна маятника", price: "від 500 грн" },
			{ id: 2, name: "Заміна рульової рейки", price: "від 800 грн" },
			{
				id: 2,
				name: "Заміна рульової рейки (з підрамником)",
				price: "від 1800 грн",
			},
			{
				id: 2,
				name: "Заміна рульового редуктора",
				price: "від 900 грн",
			},
			{
				id: 2,
				name: "Заміна пильовика рульової рейки",
				price: "від 250 грн",
			},
			{
				id: 2,
				name: "Насос гідропідсилювача заміна або зняття/установка",
				price: "від 350 грн",
			},
			{
				id: 2,
				name: "Зняття та встановлення шланга високого тиску рульового керування",
				price: "від 200 грн",
			},
			{
				id: 2,
				name: "Зняття та встановлення шланга низького тиску рульового керування",
				price: "від 200 грн",
			},
			{
				id: 2,
				name: "Заміна рідини ГПК",
				price: "від 650 грн",
			},
		],
		description:
			"Рульове керування – вузол, який щодня терпить високі навантаження. На багатьох іномарках рульове не розраховане на експлуатацію нерівними дорогами, тому нашим водіям доводиться частіше звертатися в сервіс.",
	},
	{
		path: "/service/pidviska",
		service: "Ремонт ходової (підвіски)",
		title: "Підвіска",
		image: hodovka,
		repair: "Підвіска",
		itemsForTable: [
			{ id: 1, name: "Діагностика ходової частини", price: "від 200 грн" },
			{
				id: 2,
				name: "Опора амортизатора перед/зад заміна",
				price: "від 450 грн",
			},
			{
				id: 3,
				name: "Амортизатор передній/задній (аморт стійка) заміна",
				price: "від 450 грн",
			},
			{
				id: 4,
				name: "Амортизатор передній/задній (окремо стоячий) заміна",
				price: "від 150 грн",
			},
			{
				id: 5,
				name: "Пружина задня (окремо стояча) заміна",
				price: "від 250 грн",
			},
			{
				id: 6,
				name: "Заміна втулки (сайлентблока) амортизатора",
				price: "від 200 грн",
			},
			{
				id: 7,
				name: "Стійка стабілізатора перед/зад заміна за 1 шт.",
				price: "від 150 грн",
			},
			{
				id: 8,
				name: "Втулка стабілізатора перед/зад заміна за 1 шт.",
				price: "від 150 грн",
			},
			{
				id: 9,
				name: "Заміна втулки стабілізатора (пара) зі зняттям підрамника",
				price: "від 800 грн",
			},
			{
				id: 10,
				name: "Зняття встановлення задньої балки",
				price: "від 800 грн",
			},
			{
				id: 11,
				name: "Заміна сайлентблоку задньої балки",
				price: "від 400 грн",
			},
			{
				id: 12,
				name: "Заміна датчика ABS",
				price: "від 150 грн",
			},
			{
				id: 13,
				name: "Заміна шарової опори",
				price: "від 250 грн",
			},
			{
				id: 14,
				name: "Перепресування підшипника",
				price: "від 200 грн",
			},
			{
				id: 15,
				name: "Заміна підшипника ступиці",
				price: "від 450 грн",
			},
			{
				id: 16,
				name: "Заміна важеля верхнього/нижнього (багатоважільна підвіска)",
				price: "від 300 грн",
			},
			{
				id: 17,
				name: "Заміна важеля переднього/нижнього",
				price: "від 350 грн",
			},
			{
				id: 18,
				name: "Заміна сайлентблоку важеля (плаваючого)",
				price: "від 450 грн",
			},
			{
				id: 19,
				name: "Перепресування сайлентблоку важеля",
				price: "від 120 грн",
			},
			{
				id: 20,
				name: "Заміна підрамника",
				price: "від 1000 грн",
			},
			{
				id: 21,
				name: "Заміна підшипника півосі",
				price: "від 700 грн",
			},
			{
				id: 22,
				name: "Заміна півосі у зборі",
				price: "від 600 грн",
			},
			{
				id: 23,
				name: "Регулювання підшипника ступиці",
				price: "від 120 грн",
			},
			{
				id: 24,
				name: "Заміна підшипника ступиці запресної",
				price: "від 650 грн",
			},
			{
				id: 25,
				name: "Заміна ступиці у зборі",
				price: "від 650 грн",
			},
			{
				id: 26,
				name: "Заміна задньої балки",
				price: "від 900 грн",
			},
			{
				id: 27,
				name: "Заміна сайлентблоку задньої балки",
				price: "від 450 грн",
			},
			{
				id: 28,
				name: "Заміна реактивної тяги",
				price: "від 300 грн",
			},
			{
				id: 29,
				name: "Заміна карданного валу",
				price: "від 500 грн",
			},
			{
				id: 30,
				name: "Змащування хрестовини карданного валу 1 шт",
				price: "від 150 грн",
			},
			{
				id: 31,
				name: "Заміна підвісного підшипника карданного валу",
				price: "від 650 грн",
			},
			{
				id: 32,
				name: "Заміна сайлентблоку підрамника",
				price: "від 600 грн",
			},
			{
				id: 33,
				name: "Заміна пильовика шруса (гранати)",
				price: "від 600 грн",
			},
			{
				id: 34,
				name: "Заміна шрусу (гранати)",
				price: "від 600 грн",
			},
			{
				id: 35,
				name: "Заміна приводу колеса у зборі",
				price: "від 600 грн",
			},
			{
				id: 36,
				name: "Сальник півосі (приводу колеса) заміна",
				price: "від 600 грн",
			},
			{
				id: 37,
				name: "Заміна підвісного підшипника приводу колеса",
				price: "від 700 грн",
			},
			{
				id: 38,
				name: "Захисти двигуна зняття/установка",
				price: "від 150 грн",
			},
			{
				id: 39,
				name: "Зняття, встановлення колеса",
				price: "від 30 грн",
			},
			{
				id: 40,
				name: "Слюсарні роботи (складності) (ціна за норму-годину)",
				price: "від 300 грн",
			},
		],
		description:
			"Підвіска – складний технічний вузол, який постійно зазнає сильних навантажень. Кожен автомобіль має свою схему підвіски, тому власники по-різному ставляться до ремонту. Часта проблема полягає в тому, що водій не помічає несправність (особливо на багатоважільній підвісці), продовжуючи експлуатувати авто далі. І коли настає час ремонту, вартість робіт часом перевищує понад 10 тис. грн.",
	},
	// {
	// 	path: "/service/",
	// 	service: "",
	// 	title: "",
	// 	image: sczepleniya,
	// 	repair: "",
	// 	itemsForTable: [
	// 		{ id: 1, name: "Заміна гальмівної рідини", price: "від 500 грн" },
	// 		{ id: 2, name: "Прокачка гальмівної системи", price: "від 300 грн" },
	// 	],
	// 	description: "",
	// },
];

export const dataTable = [
	{
		title: "Ремонт двигуна, трансмісії та навісного обладнаня",
		items: [
			{ id: 1, name: "Ремонт стартера", price: "від 800 грн" },
			{ id: 2, name: "Заміна стартера", price: "від 500 грн" },
			{ id: 3, name: "Ремонт генератора", price: "від 1200 грн" },
			{ id: 4, name: "Заміна генератора", price: "від 500 грн" },
			{
				id: 5,
				name: "Заміна прокладки клапанної кришки",
				price: "від 500 грн",
			},
			{ id: 6, name: "Заміна прокладки піддону", price: "від 1000 грн" },
			{ id: 7, name: "Заміна прокладки ГБЦ", price: "від 4000 грн" },
			{ id: 8, name: "Чистка дросельної заслінки", price: "від 700 грн" },
			{
				id: 9,
				name: "Заміна прокладки впускного колектора",
				price: "від 1500 грн",
			},
			{
				id: 10,
				name: "Демонтаж та встановлення двигуна",
				price: "від 7000 грн",
			},
			{ id: 11, name: "Демонтаж та встановлення КПП", price: "від 4000 грн" },
			{ id: 12, name: "Заміна радіатора охолодження", price: "від 1100 грн" },
			{ id: 13, name: "Заміна термостату", price: "від 500 грн" },
		],
	},
	{
		title: "Технічне обслуговування",
		items: [
			{ id: 1, name: "ТО (олива, фільтри)", price: "від 500 грн" },
			{
				id: 2,
				name: "Зняття та встановлення захисту двигуна",
				price: "від 100 грн",
			},
			{ id: 3, name: "Заміна салонного фільтра", price: "від 200 грн" },
			{ id: 4, name: "ТО КПП (олива, фільтр)", price: "від 1000 грн" },
			{ id: 5, name: "Заміна рідини ГПК", price: "від 400 грн" },
			{ id: 6, name: "Заміна ременя ГРМ", price: "від 2500 грн" },
			{ id: 7, name: "Заміна ременя кондиціонера", price: "від 500 грн" },
			{ id: 8, name: "Заміна ременя генератора", price: "від 500 грн" },
			{ id: 9, name: "Заміна ременя насосу ГПК", price: "від 500 грн" },
			{ id: 10, name: "Заміна ланцюга ГРМ", price: "від 3000 грн" },
			{
				id: 11,
				name: "Заміна зчеплення (корзина, диск)",
				price: "від 4000 грн",
			},
			{ id: 12, name: "Заміна сальника напіввісі АКПП", price: "від 800 грн" },
			{ id: 13, name: "Комп’ютерна діагностика", price: "від 300 грн" },
			{ id: 14, name: "Заміна охолоджуючої рідини", price: "від 600 грн" },
		],
	},
	{
		title: "Ходова частина",
		items: [
			{ id: 1, name: "Заміна стабілізатора", price: "від 500 грн" },
			{ id: 2, name: "Заміна стійки стабілізатора", price: "від 200 грн" },
			{ id: 3, name: "Заміна втулки стабілізатора", price: "від 400 грн" },
			{ id: 4, name: "Заміна кульової опори верхньої", price: "від 400 грн" },
			{ id: 5, name: "Заміни важеля", price: "від 500 грн" },
			{ id: 6, name: "Заміна підшипника маточини", price: "від 1000 грн" },
			{ id: 7, name: "Заміна втулки амортизатора", price: "від 400 грн" },
			{ id: 8, name: "Заміна пружини передньої", price: "від 800 грн" },
			{ id: 9, name: "Заміна амортизатора переднього", price: "від 700 грн" },
			{ id: 10, name: "Заміна задньої балки", price: "від 1500 грн" },
			{ id: 11, name: "Зняття/встановлення важеля", price: "від 500 грн" },
			{ id: 12, name: "Перепресовка сайлентблоку", price: "від 200 грн" },
			{ id: 13, name: "Заміна реактивної тяги", price: "від 400 грн" },
		],
	},
	{
		title: "Гальмівна система",
		items: [
			{ id: 1, name: "Заміна гальмівної рідини", price: "від 500 грн" },
			{ id: 2, name: "Прокачка гальмівної системи", price: "від 300 грн" },
			{ id: 3, name: "Заміна гальмівного шлангу", price: "від 400 грн" },
			{ id: 4, name: "Заміна колодок (1 колесо)", price: "від 250 грн" },
			{ id: 5, name: "Заміна колодок на барабані", price: "від 500 грн" },
			{ id: 6, name: "Регулювання ручника", price: "від 300 грн" },
			{ id: 7, name: "Заміна колодок ручника", price: "від 500 грн" },
			{ id: 8, name: "Заміна тросу", price: "від 1000 грн" },
			{ id: 9, name: "Заміна супорта", price: "від 300 грн" },
			{
				id: 10,
				name: "Заміна головного гальмівного циліндру",
				price: "від 600 грн",
			},
			{
				id: 11,
				name: "Заміна вакуумного підсилювача гальм",
				price: "від 1000 грн",
			},
			{ id: 12, name: "Заміна гальмівного диску", price: "від 500 грн" },
			{ id: 13, name: "Ремонт суппорта", price: "від 500 грн" },
		],
	},
	{
		title: "Паливна система",
		items: [
			{ id: 1, name: "Заміна свічок запалювання", price: "від 200 грн" },
			{ id: 2, name: "Чистка форсунок", price: "від 800 грн" },
			{ id: 3, name: "Зняття встановлення колектора", price: "від 1300 грн" },
			{ id: 4, name: "Заміна бензонасосу", price: "від 1000 грн" },
			{ id: 5, name: "Замір тиску паливного насосу", price: "від 250 грн" },
		],
	},
	{
		title: "Кліматична установка",
		items: [
			{ id: 1, name: "Заміна фреону", price: "від 1200 грн" },
			{ id: 2, name: "Заміна радіатора кондиціонера", price: "від 1000 грн" },
		],
	},
];

export const titleForDropdownTableInPriceComponent = "Наші ціни";

export const descrForDropdownTableInPriceComponent =
	"У таблицях ціни вказані з префіксом 'від', тому що все залежить від стану авто і конструктивних особливостей вузла, з яким працюватиме майстер. Візьмемо, наприклад, ТО - процедура не складна і швидка, але на більшості авто стоїть захист двигуна, який зняти і встановити іноді займає більше часу ніж саме ТО. Причиною можуть бути, наприклад, гнилі болти або зірвана різьба, що ми не зможемо залишити просто так.";

export const advantageForSelectedService = [
	{
		image: checkList,
		text: "Узгоджуємо кожен етап",
	},
	{
		image: time,
		text: "Ремонтуємо точно у термін",
	},
	{
		image: worker,
		text: "Не нав'язуємо зайвих послуг",
	},
	{
		image: workSpace,
		text: "Пускаємо в робочу зону",
	},
	{
		image: service,
		text: "Багаторічний досвід роботи майстрів",
	},
	{
		image: price,
		text: "Прозорі ціни",
	},
];
