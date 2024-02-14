import { LikeProps } from '../Like/Like.props';
import styles from '../Like/Like.module.css';
import Image from 'next/image';
export default function Like({ like }: LikeProps): JSX.Element {
	return (
		<div className={styles['like']}>
			<span>{like}</span>
			<Image src="/img/icon-like.svg" width={16} height={16} alt="Like" />
		</div>
	);
}
