import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from 'styled-components'
import "../styles/global.css";

const Section = styled.section`
  font-size: 1.2rem;

  .piska{
    margin-bottom: 15px;
  }
  p{
    font-weight: 600;
  }
`
const Home = () => {
  // console.log('data',data);
  return (
    <Layout>
      <Seo title="Home" keywords={["Lital", "Home Page", "Therapy"]} />

      <Section>
        <h1>Lital (Serby) Bejerano</h1>
        <p>
          I am an experienced and fully qualified integrative (see integrative
          therapy page for more info) counsellor/psychotherapist for parents,
          children and young adults.
        </p>
        <div className='piska'>
          Children, adolescent and adults; we all struggle at some point on our
          journey, as we try to navigate our way through the ordinary and
          extraordinary changes in our lives.{" "}
        </div>
        <div className='piska'>
          Seeking psychological support is a first positive step towards
          emotional healing and this can be done at any point of one’s life. You
          do not need to wait until the walls are falling down, you can go to
          therapy simply when the paint is chipping or when you like a different
          colour on your wall. Therapy is open for all and there is much to
          gain. It offers a broad array of benefits for all of us, whatever our
          circumstances, conditions and concerns are.{" "}
        </div>
        <div className='piska'>
          Having a professional therapeutic relationship can help you build your
          resilience, confidence and ability to understand and cope with your
          unique circumstances. I also believe therapy should aim to provide us
          with the necessary skills needed to turn our challenges into
          opportunities for growth. This is possible.{" "}
        </div>
        <div className='piska'>
          We can all agree that we cannot change our past, but we can learn to
          change the way we think about it and choose our way forward.{" "}
        </div>
        <div className='piska'>
          My aim is to help you unravel your challenges by providing you with a
          sensitive and confidential space to explore your thoughts, feelings
          and behaviours. My goal is to provide you with the tools needed to
          pave the path for your positive change.{" "}
        </div>
        <div className='piska'>Just be you and we will work through the rest together. </div>
        <p style={{ marginLeft:'100px' }}>
          “When you change the way you look at things, the things you look at
          change” <br /><div style={{textAlign:'left',marginLeft:'10px'}}>Dr Wayne Dyer</div>
        </p>
      </Section>
    </Layout>
  );
};

export default Home;
