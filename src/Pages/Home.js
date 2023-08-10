import React from "react";

import Slider from "../Components/Slider/Slider";
import PolicyBlocks from "../Components/PolicyBlocks/PolicyBlocks";
import BannerSection from "../Components/Banners/BannerSection";
import Banner from "../Components/Banners/Banner";
import FullWidthBanner from "../Components/Banners/FullWidthBanner";

// Images Import Section
import banner1 from "../Utilities/Images/Banners/banner1.jpeg";
import banner2 from "../Utilities/Images/Banners/banner2.jpeg";
import buy3banner from "../Utilities/Images/Banners/buy3Banner.png";
import nightChildBanner from "../Utilities/Images/Banners/nightChildbanner.png";
import businessBanner from "../Utilities/Images/Banners/businessBanner.png";
import loveBookBanner from "../Utilities/Images/Banners/loveBookBanner.png";

import ProductsSection from "../Components/Products/ProductsSection";

import ProductDevisonSection from "../Components/Products/ProductDevisonSection";
import ProductPublisherSection from "../Components/Products/productPublisherSection";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <Slider />
      <PolicyBlocks />
      <BannerSection>
        <Banner link="http://" imgLink={banner1} imgName="Available Book" />
        <Banner link="http://" imgLink={banner2} imgName="Discount 40% Book" />
      </BannerSection>

      <ProductsSection />
      <ProductDevisonSection
        sectionType={1}
        productIds={[8, 5, 4, 3, 16]}
        devisonTitle={"Deal of the Day above 20% off Special offer"}
      />
      <ProductDevisonSection
        sectionType={2}
        productIds={[3, 20, 17, 14, 15]}
        devisonTitle={"Best Seller"}
      />
      <BannerSection>
        <Banner link="http://" imgLink={buy3banner} imgName="Buy 3 Banner" de />
        <Banner
          link="http://"
          imgLink={nightChildBanner}
          imgName="Night Child Banner"
        />
        <Banner
          link="http://"
          imgLink={businessBanner}
          imgName="Business Book Banner "
        />
      </BannerSection>
      <ProductDevisonSection
        sectionType={2}
        productIds={[20, 13, 14, 17, 11]}
        devisonTitle={"Trending Now"}
      />

      <FullWidthBanner
        link="http://"
        imgLink={loveBookBanner}
        imgName="Love Book Banner "
      />
      <ProductDevisonSection
        sectionType={2}
        productIds={[12, 8, 19, 13, 20]}
        devisonTitle={"Lovley Books"}
      />
      <ProductPublisherSection />
    </div>
  );
};

export default Home;
