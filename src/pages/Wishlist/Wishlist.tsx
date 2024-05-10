import EmptyItems from "../../Components/common/EmptyItems/EmptyItems";
import SectionHeader from "../../Components/common/SectionHeader/SectionHeader";
import ProductCart from "../../Components/foots/ProductCart/ProductCart";
import "./Wishlist.scss"
const Wishlist = () => {
    const wish = true
  return (
    <>
      <div className="wishlist">
        <SectionHeader title="Wishlist" />
        <div className="wishlist-container">
          {wish ? (
            <div className="wishlist-items">
              {[1, 2, 3].map((item) => {
                return (
                  <>
                    <ProductCart key={item} />
                  </>
                );
              })}
            </div>
          ) : (
            <>
              <EmptyItems
                titleEmpty="Your WhishList is currently empty."
                navigation="/shop" 
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist