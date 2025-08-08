'use client'
import Hero from "@/pages/Hero/Hero";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Hero/>
    </Provider>
  );
}
