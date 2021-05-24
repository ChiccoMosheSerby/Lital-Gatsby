import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

const Section = styled.section`
  font-size: 1.2rem;
  padding-bottom: 150px;

  .piska {
    margin-bottom: 15px;
  }
  p {
    font-weight: 600;
  }
`;

function ServicesPage() {
  return (
    <Layout>
      <Seo title="Sevices" keywords={"haleluya"} /> <h1>Services</h1>
      <Section>
        <h1>What is integrative therapy: </h1>
        <p>
          I am an experienced and fully qualified integrative (see integrative
          therapy page for more info) counsellor/psychotherapist for parents,
          children and young adults.
        </p>
        <div className="piska">
          Integrative psychotherapy can be effective for both short or
          longer-term therapy experiences. It is a modern, collaborative
          approach to therapy. The approach is more inclusive than many other
          types of therapy as the client and therapist work together as therapy
          unfolds and evolves.{" "}
          <span style={{ fontWeight: "bold" }}>Integrative counselling </span>
          aims to promote healing and facilitate wholeness - ensuring that all
          levels of a person's being and functioning (mental, physical and
          emotional health) are maximised to their full potential.
          <br /> It recognises that people are diverse and complex, so that it
          may be helpful for a therapist to draw on more than one counselling
          approach, in order to meet the needs of each individual. It is
          beneficial because of its large range of techniques that can be used
          to treat each person’s unique issues. Depending upon the needs of the
          individual, an integrative therapist may use{" "}
          <span style={{ fontWeight: "bold" }}>person-centred</span>
          counselling techniques,{" "}
          <span style={{ fontWeight: "bold" }}>psychodynamic</span> theory,{" "}
          <span style={{ fontWeight: "bold" }}>existential</span> therapy or
          <span style={{ fontWeight: "bold" }}>
            cognitive behavioural therapy
          </span>{" "}
          techniques in working with a person. Likewise, when working with
          children and adolescent an integrative counsellor may use{" "}
          <span style={{ fontWeight: "bold" }}>art, play, sand</span> or{" "}
          <span style={{ fontWeight: "bold" }}>music</span> in working with a
          young person which depends on both their needs and choice to
          communicate.
        </div>
        <div className="piska">
          Rather than using one counselling approach throughout an individual
          therapy experience, an integrative counsellor uses different
          approaches as needed. In this way the therapy is tailored to you
          rather than you being tailored to fit one specific type of therapy.
        </div>
        <div className="piska">
          <p>My approach: </p>
          It is my objective to see your viewpoint as if I was you, to
          communicate my understanding back to you and to actively engage in
          your experience of the therapy. I hold a psychodynamic approach and
          believe that our past experiences manifested our inner world which has
          much to do with our personality. Nevertheless, I strongly accept that
          history is not destiny but rather can be used to better understand
          ourselves with compassion as well as to hold a clearer idea of our way
          forward.
        </div>

        <div className="piska">
          We can all agree that we cannot change our past, but we can learn to
          change the way we think about it and choose our way forward.{" "}
        </div>
        <div className="piska">
          I believe that our thoughts and perceptions make our experiences, and
          our experiences shape our thoughts about ourselves, which directly
          affect both our wellbeing and our relationship with others. It is a
          cognitive process which is important for us all to understand though
          requires certain skills to untangled and comprehend. I am here to help
          you unravel.
        </div>
        <div className="piska">
          I use my theoretical understanding and skills to work together with
          you in a transference, honest and non-judgmental manner. I believe
          that life is much about relationships; our relationship with
          ourselves, our relationship with our experiences and our relationship
          with others. I genuinely care about those I work with and offer
          support in understanding patterns of behaviour, perceptions and
          interpretation which I believe can bring about a positive shift. I
          believe we are all unique and special and that we deserve to exceed
          our expectation of life. I have been in therapy for years myself thus
          I appreciate what it is like to be on both sides of the sofa. I
          believe in communication and know that this can be done in various
          ways. I listen to the verbal and non-verbal and I work with the ‘hear
          and now’ with the aim to both focus on your present life and for you
          to personally benefit from our relationship.{" "}
        </div>
        <div className="piska">
          <p>My work with parents</p>
          <div>
            Parenting, though rewarding, can also be difficult and lead to
            stress, anxiety and pain. Meeting our children’s needs without
            compromising ours can be challenging. I aim to enable you to explore
            your views and relationships so you can feel supported, more helpful
            and in control. We all want to raise healthy minded children and it
            is our parental responsibility to support them and us when and as
            needed. <br /> Whether you chose to see me for parental support or
            as part of my work with your child, working together can help your
            child feel more supported and that the work is not just ‘on them’.
          </div>
        </div>
        <div className="piska">
          My training was one of the best things I did for both myself and my
          family. It further developed my understanding of our family dynamics
          and it provided me with the additional tools needed to establish open
          communication among us. I feel very passionately about supporting you
          with your challenges. My work with parents is what I call a ‘parent to
          parent approach’. We sit to discuss any concerns you might have about
          yourself, your parenting style, your child or any other matter and
          together we both make sense of your situation and find suitable ways
          for you to offer the needed support under your unique circumstances.
        </div>
      </Section>
    </Layout>
  );
}

export default ServicesPage;
