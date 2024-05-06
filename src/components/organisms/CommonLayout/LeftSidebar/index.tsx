import { Buttonprops } from '../../../../../types/type';
import Button from '../../../atoms/Button';
import Text from '../../../atoms/Text';
import CategoryButtonGroup from './CategoryButtonGroup';
import UserProfile from './UserProfile';
import './style.scss';

const index = () => {
	 const nav:Buttonprops[] = [
		{ title: 'Today', icon:'', type: '', link: '' },
		{ title: 'Upcomming', icon:'', type: '', link: '' },
		{ title: 'Calendar', icon:'', type: 'iconbutton', link: '' },
		{ title: 'Inbox', icon:'', type: 'iconbutton', link: '' },
		{ title: 'Trash', icon:'', type: 'iconbutton', link: '' },
		{ title: 'User Profile', icon:'', type: 'iconbutton', link: '' },
	];
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
				title={item.title}
					type={item.type}
					icon={item.icon}
					link={item.link}
				/>
			))}
			<div className="title">
				<Text text={'Dashboard'} />
			</div>
			<CategoryButtonGroup navdata={nav} />
		</div>
	);
};

export default index;
