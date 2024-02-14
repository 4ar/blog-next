import { CardItemProps } from '../CardItem/CardItem.props';
import styles from '../CardItem/CardItem.module.css';
import Image from 'next/image';
import Like from '../Like/Like';
export default function CardItem({
	id,
	img,
	category,
	publishedAt,
	like,
	title,
	content,
	timeTo,
}: CardItemProps): JSX.Element {
	return (
		<div className={styles['card']}>
			<Image
				className="card-img"
				src={`/img/${img}`}
				width={330}
				height={200}
				alt="Как работать с CSS Grid"
			/>
			<div className={styles['card-detailed']}>
				<div className={styles['card-detailed__wrap']}>
					<div className={styles['card__category']}>{category}</div>
					<div className={styles['card__separate']}>·</div>
					<div className={styles['card__date-pub']}>
						{publishedAt}
					</div>
				</div>
				<Like like={like} />
			</div>
			<div className={styles['card-content']}>
				<div className={styles['card-content__title']}>{title}</div>
				<div className={styles['card-content__preview']}>{content}</div>
			</div>
			<div className={styles['card-footer']}>
				<div className={styles['card-footer__time']}>{timeTo}</div>
				<button className={styles['card-footer__more']}>
					Читать
					<Image
						src="/img/icon-arrow.svg"
						width={16}
						height={16}
						alt="arrow"
					/>
				</button>
			</div>
		</div>
	);
}
