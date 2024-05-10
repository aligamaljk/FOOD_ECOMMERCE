
import Heading from "../../common/Heading/Heading"
import './SliderProducts.scss';
import ProductCart from "../ProductCart/ProductCart";
import { AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

const SliderProducts = () => {
  return (
    <>
      <div className="sub-products">
        <Heading titleOne={'Most Selling'} titleTwo={'Most Selling'} />
        <div className="product-carts-container ">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={20}
            modules={[Navigation, Scrollbar]}
            navigation={{ nextEl: '.right-arrow', prevEl: '.left-arrow' }}
            scrollbar={{
              el: '.swiper--progress',
              draggable: true,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2.1,
              },
              800: {
                slidesPerView: 3.1,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1250: {
                slidesPerView: 3.3,
              },
              1440: {
                slidesPerView: 4.3,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map(
              (data, _id) =>
                data && (
                  <SwiperSlide key={_id}>
                    <ProductCart />
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        <div className="swiper--option">
          <div className="swiper--progress"></div>
          <div className="swiper--arrows">
            <div className="left-arrow arrow">
              <AiOutlineArrowLeft />
            </div>
            <div className="right-arrow arrow">
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderProducts;