import LeftSidebar from '../../organisms/CommonLayout/LeftSidebar';

const index = ({ children }: { children: any }) => {
	return (
		<>
			<LeftSidebar />
			{children}
		</>
	);
};

export default index;
