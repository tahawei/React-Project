import "./App.css";
import { /*Article,*/ Brand, CTA, Feature, Navbar } from "./componants";
import {
  Blog,
  // Features,
  Footer,
  Header,
  Possibility,
  WhatGBT3,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGBT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
