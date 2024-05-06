import { nav } from '../../../../data/LeftSideBarDate';
import Button from '../../../atoms/Button';
import Text from '../../../atoms/Text';
import CategoryButtonGroup from './CategoryButtonGroup';
import UserProfile from './UserProfile';
import './style.scss';

const index = () => {
	return (
		<div className="leftSidebarButtonWrap">
			<div className="profile">
			<UserProfile />
			</div>
			<div className='favoriterecently'>
			<Text text={'Favorites'} />
			<Text text={'Rencently'} />
			</div>
			{nav.slice(0, 2).map((item) => (
				<Button
					text={item.title}
					type={item.type}
					icon={item.icon}
					link={item.link}
				/>
			))}
			<div className="title">
				<Text text={'Dashboard'} />
			</div>
			<CategoryButtonGroup />
		</div>
	);
};

export default index;
