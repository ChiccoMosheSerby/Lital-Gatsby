import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const Section = styled.section`
  font-size: 1.2rem;
  .piska {
    margin-bottom: 15px;
  }
  p {
    font-weight: 600;
  }
`;
function AboutPage() {
  return (
    <Layout>
      <Seo title="About" keywords={"haleluya"} />
      <Section>
        <h1>About me</h1>
        <div className="piska">
          I was born in Israel and I was raised in a multicultural atmosphere in
          a large family. I studied Law before I became a psychotherapist and I
          have an extensive work and life experience. I am bilingual and a
          mother of three. I immigrated twice with my own family thus I gained
          both the knowledge and the experience in family relocation and took
          much interest in the processes involved and their aftermath. I am
          approachable and have the ability to adjust myself to my client’s age
          and needs. I incorporate mindfulness into my lifestyle and my work as
          a therapist and I very much believe that there is no one truth but
          many interpretations of the reality. I am honest and transparent and
          see therapy as another form of a ‘two way’ conversation. As someone
          who sometimes wished things were different, I learned to live in the
          moment and look back for the sake of reflecting and not re-living. We
          are all here to exceed our expectations of our future which starts
          today. What you are looking for is already here, my aim is to help you
          find it.
        </div>
        <p style={{ marginLeft: "100px" }}>
          “What you think you become what you feel you attract what you imagine
          you create”
          <br />
          <div style={{ textAlign: "left", marginLeft: "10px" }}>Buddha</div>
        </p>
        <p>
        I will be pleased to offer therapy in English or Hebrew. 
        </p>
      </Section>
    </Layout>
  );
}

export default AboutPage;
