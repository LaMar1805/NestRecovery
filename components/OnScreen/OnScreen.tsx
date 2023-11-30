import React from 'react';
import styles from './OnScreen.module.scss';
import phone from '../../public/images/phone-big.png';
import chat from '../../public/images/chat-big.png';
import Image from "next/image";

type OnScreenProps = {

}
const OnScreen = ():any => {

	return (
		<div className={styles.OnScreen}>
			<a href={'tel:4242825171'} className={styles.phone}>
				<Image src={phone} alt={'Phone'}/>
			</a>
			<a href={'#'} className={styles.chat}>
				<Image src={chat} alt={'chat'}/>
			</a>
		</div>
	);
};

export default OnScreen;
