import "./Shop.scss"
import Heading from "../../Components/common/Heading/Heading"
import SectionHeader from "../../Components/common/SectionHeader/SectionHeader"
import Categories from "../../Components/foots/Categories/Categories";
import img from '../../assets/images/Hero-Banner.jpg';
import img2 from '../../assets/images/homeBG.jpeg';
import img3 from '../../assets/images/about.jpg';
import img4 from '../../assets/images/Frame.png';
import ProductCart from "../../Components/foots/ProductCart/ProductCart";
interface dataCategories {
  id: number;
  img: string;
  title: string;
}
const Shop = () => {
        const DataCategories: dataCategories[] = [
          {
            id: 1,
            img: img,
            title: 'Vegetarian',
          },
          {
            id: 2,
            img: img2,
            title: 'Meal',
          },
          {
            id: 3,
            img: img3,
            title: 'Chicken',
          },
          {
            id: 4,
            img: img4,
            title: 'Dubble',
          },
        ];
  return (
    <>
      <div className="shop">
        <SectionHeader title="Shop" />
        <Heading titleOne="Shop by category" titleTwo="Shop by category" />
        <Categories  dataCategories={DataCategories} />
        <div className="shop-card">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <>
                  <ProductCart key={item} />
              </>
            );
        })}
        </div>
      </div>
    </>
  );
}

export default Shop