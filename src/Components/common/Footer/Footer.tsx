import { Link } from 'react-router-dom'
import "./Footer.scss"
const Footer = () => {
  return (
    <>
    <div className="footer">
      <span>
        &copy; {new Date().getFullYear()}
        <Link
          target="_blank"
          to={'https://github.com/aligamaljk?tab=repositories'}
          >
          Ali Gamal .
        </Link>
        All Reversed.
      </span>
    </div>
    </>
  );
}

export default Footer