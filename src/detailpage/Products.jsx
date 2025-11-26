import Camera from "../pages/cards1/camera/Camera"
import Gaming from "../pages/cards1/gaming/Gaming"
import Laptop from "../pages/cards1/laptop/Laptop"
import Phone from "../pages/cards1/phone/Phone"
import Watch from "../pages/cards1/watch/Watch"
import ProductCard3 from "../pages/productcard copy/ProductCard"
import ProductCard2 from "../pages/productcard/ProductCard"

const Products = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1400px] m-auto px-5">
        <ProductCard2/>
        <ProductCard3/>
        <Watch/>
        <Phone/>
        <Laptop/>
        <Gaming/>
        <Camera/>
      </div>
    </div>
  )
}

export default Products