import Navbar from "../navbar";
import Footer from "../footer";
import ProductCard from "../productCard";





export default function Sell() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-row justify-center items-start flex-wrap ">
      <ProductCard
      title="2023 Bentley Continental GT"
      year={2023}
      miles={1500}
      color="navy blue"
      price={"250000"}
      imageUrl="https://i.blocketcdn.se/pictures/asl/1002047347/1029307743.webp?type=3840x2880&quot"
/>





      </div>
      
      <Footer />
      </>
  );

  
}
