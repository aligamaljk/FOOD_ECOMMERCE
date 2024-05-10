import { Image } from "antd";
import "./Categories.scss"
import { FaCheck } from 'react-icons/fa';
import { memo, useState } from "react";
interface dataCategories {
  id: number;
  img: string;
  title: string;
}
const Categories = memo(({
  dataCategories,
}: {
  dataCategories: dataCategories[];
}) => {
  const [checkCategory, setCheckCategory] = useState<number>(0);
  return (
    <>
      <div className="categories">
    <div className="categories-cards">
        {dataCategories.map(({ id, img, title }, index) => {
          return (
            <div className="category-card" key={id}>
              <div
                className="check"
                style={{ display: checkCategory === index ? 'flex' : 'none' }}
              >
                <FaCheck size={20} color="#fff" />
              </div>
              <div
                className={
                  checkCategory === index
                    ? 'category-img active-category'
                    : 'category-img'
                }
                onClick={() => {
                  setCheckCategory(index);
                }}
              >
                <Image preview={false} src={img} />
              </div>
              <div className="category-title">
                <h1 className="title">{title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
});

export default Categories