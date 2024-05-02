import Button from "../../../atoms/Button"
import "./style.scss"
const index = () => {
    const nav = [
        {title:"Today", icon:"", type:"" ,link:""},
        {title:"Upcomming", icon:"", type:"" ,link:""},
        {title:"Calendar", icon:"", type:"iconbutton" ,link:""},
        {title:"Inbox", icon:"", type:"iconbutton" ,link:""},
        {title:"Trash", icon:"", type:"iconbutton" ,link:""},
        {title:"User Profile", icon:"", type:"iconbutton" ,link:""},
    
    ]
  return (
    <div className="leftSidebarButtonWrap">
    {nav.slice(0,2).map(item=>
    <Button text={item.title} type={item.type} icon={item.icon} link={item.link} />
    )}
    {nav.slice(2,6).map(item=>
    <Button text={item.title} type={item.type} icon={item.icon} link={item.link} />
    )}
    </div>
  )
}

export default index