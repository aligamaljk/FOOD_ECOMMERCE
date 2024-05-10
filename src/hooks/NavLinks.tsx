import { Badge, Image } from "antd";
import { NavLink } from "react-router-dom"
import heart from '../assets/images/Vector.png';
import cart from '../assets/images/cart.png';
export const NavLinksItems = ({onClose} : {onClose?: () => void}) => {
    return (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
            onClick={onClose}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
            onClick={onClose}
          >
            About
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
            onClick={onClose}
          >
            shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
            onClick={onClose}
          >
            contact
          </NavLink>
        </>
    )
}

export const  NavLinksCart = ({onClose} : {onClose?: () => void}) => {
    return (
      <>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? 'activeLink-cart cart-link' : 'cart-link'
          }
          onClick={onClose}
        >
          <Badge count={2} size="small">
            <Image preview={false} src={heart} />
          </Badge>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? 'activeLink-cart cart-link' : 'cart-link'
          }
          onClick={onClose}
        >
          <Badge count={2} size="small">
            <Image preview={false} src={cart} />
          </Badge>
        </NavLink>
      </>
    );
} 