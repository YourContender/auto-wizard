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
		service: "Профілактика та ремонт гальмівної системи",
		image: halma,
	},
	{
		service: "Технічне обслуговування",
		image: oil,
	},
	{
		service: "Ремонт КПП",
		image: kpp,
	},
	{
		service: "Ремонт системи охолодження",
		image: holod,
	},
	{
		service: "Ремонт двигунів",
		image: motor,
	},
	{
		service: "Діагностика та обслуговування паливної системи",
		image: petrol,
	},
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
];
