import LeftSidebar from '../../organisms/CommonLayout/LeftSidebar';
import UpSidebar from '../../organisms/CommonLayout/UpSidebar';
import './style.scss';

const index = ({ children }: { children: any }) => {
	return (
		<>
		<div className='rootlayout'>
			<LeftSidebar />
			<UpSidebar />
			</div>
			{children}
			
		</>
	);
};

export default index;
