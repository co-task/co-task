import Button from "../../../../atoms/Button"
import '../../LeftSidebar/style.scss';

const index = () => {
    const nav = [
		{ title: 'Today', icon: '', type: '', link: '' },
		{ title: 'Upcomming', icon: '', type: '', link: '' },
		{ title: 'Calendar', icon: '', type: 'iconbutton', link: '' },
		{ title: 'Inbox', icon: '', type: 'iconbutton', link: '' },
		{ title: 'Trash', icon: '', type: 'iconbutton', link: '' },
		{ title: 'User Profile', icon: '', type: 'iconbutton', link: '' },
	];
  return (
    <div>
        {nav.slice(2, 6).map((item) => (
        <Button
            text={item.title}
            type={item.type}
            icon={item.icon}
            link={item.link}
        />
    ))}</div>
  )
}

export default index