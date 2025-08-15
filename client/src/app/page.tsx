'use client'
import Footer from "@/pages/Footer/Footer";
import Hero from "@/pages/Hero/Hero";
import { store } from "@/redux/store";
import AppLogosList from "@/section/AppLogosList/AppLogosList";
import CommunityBlogs from "@/section/CommunityBlogs/CommunityBlogs";
import HeroSection2 from "@/section/HeroSection2/HeroSection2";
import Stonelablogs from "@/section/StonelabBlogs/Stonelablogs";
import HireusSection from "@/section/HireusSection/HireusSection";
import { Provider } from "react-redux";
import MarqueeTag from "@/components/MarqueeTag/MarqueeTag";

export default function Home() {
  return (
    <Provider store={store}>
      <Hero />
      <Stonelablogs />
      <AppLogosList />
      <CommunityBlogs />
      <HeroSection2 />
      <MarqueeTag />
      <HireusSection />
    </Provider>
  );
}
