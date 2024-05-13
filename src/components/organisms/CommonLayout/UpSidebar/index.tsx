import './style.scss'
import { StarOutlined, SnippetsOutlined,SunOutlined, ClockCircleOutlined, BellOutlined } from '@ant-design/icons';

const index = () => {
  const homeicons = [<SnippetsOutlined />,<StarOutlined />,<SunOutlined />,<ClockCircleOutlined />,<BellOutlined />,<SnippetsOutlined />]
   
  return (
    <div className='upsidewrap'>
 <div className="layout">
  {homeicons.slice(0,2).map((icon)=>
  <p>{icon}</p>
  )}
  <p className='dashboard'>Dashboards /</p>
  <p className='inbox'>Inbox</p>
 </div>
 
 <div className="layout">
  <div>
 <input
 style={{padding:'13px', marginTop:'1rem',height:'14px',borderRadius:'2%', border:'0px solid', marginLeft:'25px', background:'rgb(0,0,0,20%)'}}
  type="search"
  placeholder='Search'
  />
 </div>
 <div className="layout">
 {homeicons.slice(2,6).map((icon)=>
  <p>{icon}</p>
  )}
  </div>
 </div>
    </div>
  )
}

export default index