import СardItem from '../CardItem/CardItem';
import { CardListProps } from '../CardList/CardList.props';
import styles from '../CardList/CardList.module.css';


export default function CardList({
	id,
	img,
	category,
	publishedAt,
	like,
	title,
	content,
	timeTo,
}: CardListProps): JSX.Element {

	return (
		<div className={styles['card-list']}>
			<СardItem
				id={id}
				img={img}
				category={category}
				publishedAt={publishedAt}
				like={like}
				title={title}
				content={content}
				timeTo={timeTo}
			/>
		</div>
	);
}
