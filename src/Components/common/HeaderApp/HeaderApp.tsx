import { Image } from "antd"
import "./HeaderApp.scss"
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import { useEffect, useState } from "react"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import { NavLinksCart, NavLinksItems } from "../../../hooks/NavLinks"
const HeaderApp = () => {
    const navigate = useNavigate()
    const [scrolle, setScrolle] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setScrolle(true)
            } else {
                setScrolle(false)
            }
        })
    }, [])
  return (
    <>
      <div className={scrolle ? 'header-app scroll' : 'header-app'}>
        <div
          className="log"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <Image preview={false} src={logo} />
        </div>
        <div className="nav-links"><NavLinksItems /></div>
        <div className="cart-links"><NavLinksCart /></div>
        <div className="menu"><HeaderMenu /></div>
      </div>
    </>
  );
}

export default HeaderApp