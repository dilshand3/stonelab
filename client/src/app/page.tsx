'use client'
import Footer from "@/pages/Footer/Footer";
import Hero from "@/pages/Hero/Hero";
import { store } from "@/redux/store";
import AppLogosList from "@/section/AppLogosList/AppLogosList";
import CommunityBlogs from "@/section/CommunityBlogs/CommunityBlogs";
import Stonelablogs from "@/section/StonelabBlogs/Stonelablogs";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Hero />
      <Stonelablogs/>
      <AppLogosList/>
      <CommunityBlogs/>
    </Provider>
  );
}
