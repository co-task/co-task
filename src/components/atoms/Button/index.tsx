import { buttonprops } from '../../../types/type';
import './style.scss';

const index = ({ type, icon, text, link }: buttonprops) => {
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
