import { Image } from "antd";
import Heading from "../../Components/common/Heading/Heading";
import SectionHeader from "../../Components/common/SectionHeader/SectionHeader";
import "./About.scss"
import img from "../../assets/images/about.jpg"
const About = () => {
  return (
    <>
      <div className="about">
        <SectionHeader title="About" />
        <main className="about">
          <Heading titleOne="About Us" titleTwo="our journey" />
          <div className="about-content">
            <div className="about-image">
              <Image
                preview={false}
                src={img}
                alt="about"
              />
            </div>
            <div className="about-text">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolores laboriosam harum expedita! Consectetur, qui
                sit at recusandae maiores et tempora dolorum inventore
                consequatur voluptatum commodi! Deleniti deserunt, facilis
                maxime omnis quisquam amet? Omnis adipisci, reiciendis
                distinctio maxime, voluptas fugiat eligendi consectetur commodi
                suscipit ducimus animi odit? Voluptatem, perspiciatis deserunt.
              </p>
            </div>
          </div>
          <div className="about-content">
            <div className="about-image">
              <Image
                preview={false}
                src={img}
                alt="about"
              />
            </div>
            <div className="about-text">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolores laboriosam harum expedita! Consectetur, qui
                sit at recusandae maiores et tempora dolorum inventore
                consequatur voluptatum commodi! Deleniti deserunt, facilis
                maxime omnis quisquam amet? Omnis adipisci, reiciendis
                distinctio maxime, voluptas fugiat eligendi consectetur commodi
                suscipit ducimus animi odit? Voluptatem, perspiciatis deserunt.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default About