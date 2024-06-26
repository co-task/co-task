import { FC } from 'react';
import {Buttonprops} from '../../../../types/type';
import './style.scss';

const index: FC<Buttonprops>= ({ type, icon, title, link }) => {
	return type === 'iconbutton' ? (
		<button className="leftSidebarButton">
			<span>{icon}</span>
			{title}
		</button>
	) : (
		<button className="leftSidebarButton">{title}</button>
	);
};

export default index;
