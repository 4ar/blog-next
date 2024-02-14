import Image from 'next/image';
import styles from './page.module.css';
import CardList from './components/CardList/CardList';
const news = [
	{
		id: 1,
		img: 'card-img-min.jpg',
		category: 'Front-end',
		publishedAt: '1 месяц назад',
		like: 4,
		title: 'Как работать с CSS Grid',
		content:
			'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
		timeTo: '3 минуты',
	},
];

export default function Home(): JSX.Element {
	return (
		<>
			<CardList
				id={news[0].id}
				img={news[0].img}
				category={news[0].category}
				publishedAt={news[0].publishedAt}
				like={news[0].like}
				title={news[0].title}
				content={news[0].content}
				timeTo={news[0].timeTo}
			/>
		</>
	);
}
