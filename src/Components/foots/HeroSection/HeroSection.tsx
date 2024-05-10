import { Button } from "antd"
import "./HeroSection.scss"
const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <h1>Crafting your Exceptional Dining Reservations</h1>
          <p>
            Reservation is a step into a world of gastronomic wonder. Reserve
            your table today and let us paint your culinary dreams into reality.
          </p>
          <Button danger shape="round" type="primary"
            className="explore-btn"
          >
            Explore Products
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection