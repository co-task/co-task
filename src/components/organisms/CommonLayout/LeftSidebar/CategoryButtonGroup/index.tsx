import { nav } from "../../../../../data/LeftSideBarDate";
import Button from "../../../../atoms/Button"
import '../../LeftSidebar/style.scss';

const index = () => {
   
  return (
    <>
        {nav.slice(2, 6).map((item) => (
        <Button
            text={item.title}
            type={item.type}
            icon={item.icon}
            link={item.link}
        />
    ))}</>
  )
}

export default index