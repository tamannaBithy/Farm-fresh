import Categories from "@/components/home/Categories";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import HeroSection from "@/components/home/HeroSection";
import NewsLetter from "@/components/home/NewsLetter";
import WhyChoose from "@/components/home/WhyChoose";

const page = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProduct />
      <WhyChoose />
      <NewsLetter />
    </>
  );
};

export default page;
