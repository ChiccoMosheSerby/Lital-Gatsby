import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css";

// export const staticDataQuary = graphql`
//   query StaticData {
//     allJson {
//       nodes {
//         en {
//           navigation {
//             id
//             path
//             text
//           }
//         }
//         he {
//           navigation {
//             id
//             path
//             text
//           }
//         }
//       }
//     }
//   }
// `;
const Home = () => {
  // console.log('data',data);
  return (
    <Layout>
      <Seo title="Home" keywords={["Lital", "Home Page", "Therapy"]} />
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Home;
