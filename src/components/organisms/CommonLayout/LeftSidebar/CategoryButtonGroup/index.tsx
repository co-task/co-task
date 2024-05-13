import {Buttonprops} from "../../../../../../types/type";
import Button from "../../../../atoms/Button"
import '../../LeftSidebar/style.scss';

const index = ({navdata}:{navdata:Buttonprops[]}) => {
   
  return (
    <>
        {navdata.slice(2, 6).map((item) => (
        <Button
            key={item.title}
            title={item.title}
            type={item.type}
            icon={item.icon}
            link={item.link}
        />
    ))}</>
  )
}

export default index