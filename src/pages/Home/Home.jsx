import React from "react";
import Header from "../../components/Header/Header";

import InStory from "../../components/InStory/InStory";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Features from "../../components/Features/Features";
import Recommend from "../../components/Recommend/Recommend";
import CategoryGallery from "../../components/CategoryGallery/CategoryGallery";
import Banner from "../../components/Banner/Banner";
import { BannerDB, BannerDB1 } from "../../db/dummyDb";
import BlogShowCase from "../../components/BlogShowCase/BlogShowCase";
// import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Ribben from "../../components/Ribben/Ribben";
import Discount from "../../components/Discount/Discount";
import Offer from "../../components/Offer/Offer";
import PopularBrands from "../../components/PopularBrands/PopularBrands";
import GameBanner from "../../components/GameBanner/GameBanner";
import FooterDownloadApp from "../../components/FooterDownloadApp/FooterDownloadApp";
import FooterCopyRight from "../../components/FooterCopyRight/FooterCopyRight";
import FooterPhone from "../../components/FooterPhone/FooterPhone";
import Facilities from "../../components/Facilities/Facilities";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import NewSlider from "../../components/NewSlider/NewSlider";
import FooterSubcategories from "../../components/Footer/FooterSubcategories";
import FourCategories from "../../components/FourCategories/FourCategories";
// import DemoSlider from "../../components/DemoSlider/DemoSlider";

function Home() {
  return (
    <React.Fragment>
      <Ribben />
      <Header />
      {/* <DemoSlider /> */}
      <InStory />
      <HeroSlider />
      <Features />
      {/* <ProductSlider /> */}
      <NewSlider />
      <Discount />
      <Recommend />
      <CategoryGallery />
      <Banner data={BannerDB} />
      <Offer />
      <PopularBrands />
      <Banner data={BannerDB1} />
      <FourCategories />
      <GameBanner />
      <BlogShowCase />
      <FooterLogo />
      <FooterPhone />
      <Facilities />
      <FooterDownloadApp />
      <FooterCopyRight />
      <FooterSubcategories />
    </React.Fragment>
  );
}

export default Home;
