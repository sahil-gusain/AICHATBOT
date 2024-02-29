import { Link } from "react-router-dom"
import { navprop } from "../utils/types"


const NavigationLink = (navProp:navprop) => {
  return (
    <Link
      onClick={navProp.onClick}
      className="nav-link"
      to={navProp.to}
      style={{background:navProp.bg,color:navProp.textColor}}
    >{navProp.text}</Link>
  )
}

export default NavigationLink;