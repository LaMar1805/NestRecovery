import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss"
function RoomFeatures(props: { currentFeatures: any[]}) {
	return <div className={styles.room_features + ` room-features`}>

				<div className={styles.room_features__label}>
					<h3>Room Features</h3>
				</div>
				<div className={styles.room_features__icons}>
					{props.currentFeatures.map((value:{ index: number; src: string, width: number, height: number }) =>
						<Image  key={value.index} src={value.src} width={value.width} height={value.height} alt={""}/>)}
				</div>
	</div>;
}
export default RoomFeatures
