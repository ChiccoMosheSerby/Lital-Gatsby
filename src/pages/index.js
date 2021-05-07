import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css";

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" keywords={["Lital", "Home Page", "Therapy"]} />
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Home;
