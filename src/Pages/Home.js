import React from "react";

import Slider from "../Components/Slider/Slider";
import PolicyBlocks from "../Components/PolicyBlocks/PolicyBlocks";
import BannerSection from "../Components/Banners/BannerSection";
import Banner from "../Components/Banners/Banner";

// Images Import Section
import banner1 from "../Utilities/Images/Banners/banner1.jpeg";
import banner2 from "../Utilities/Images/Banners/banner2.jpeg";

const Home = () => {
  return (
    <div>
      <Slider />
      <PolicyBlocks />
      <BannerSection>
        <Banner link="http://" imgLink={banner1} imgName="Available Book" />
        <Banner link="http://" imgLink={banner2} imgName="Discount 40% Book" />
      </BannerSection>
    </div>
  );
};

export default Home;
