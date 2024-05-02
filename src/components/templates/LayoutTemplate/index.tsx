import LeftSidebar from "../../organisms/CommonLayout/LeftSidebar";

const index = ({children}:{children:any;}) => {
    

  return (
    <div>
        <LeftSidebar />
        {children}
        </div>
  )
}

export default index