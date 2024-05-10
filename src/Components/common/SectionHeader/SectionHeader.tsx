import { useNavigate } from "react-router"
import "./SectionHeader.scss"
const SectionHeader = ({title} : {title : string } ) => {
    const navigate = useNavigate()
  return (
    <>
      <div className="section-header">
        <div className="section-header-title">
          <h1 className="title-one"
            onClick={() => navigate('/')}
          >Home</h1>
          <div className="section-header-line"></div>
          <h1 className="title-two"> {title} </h1>
        </div>
      </div>
    </>
  )
}

export default SectionHeader