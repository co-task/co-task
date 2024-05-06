import { FC } from 'react';
import {Buttonprops} from '../../../../types/type';
import './style.scss';

const index: FC<Buttonprops>= ({ type, icon, text, link }) => {
	return type === 'iconbutton' ? (
		<button className="leftSidebarButton">
			{icon}
			{text}
		</button>
	) : (
		<button className="leftSidebarButton">{text}</button>
	);
};

export default index;
