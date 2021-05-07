import { Link,graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const contactQuery = graphql`
  query ContctInfo {
    contact: site{
      siteMetadata{
        contact
      }
    }
  }
`;

function ContactPage({data}) {
  const email = data?.contact?.siteMetadata?.contact
  return (
    <Layout>
      <Seo title="Contact" keywords={"haleluya"} /> <h1>Contact Me</h1>
      <p>{email}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nihil,
        incidunt magni reiciendis facere aut unde laudantium. Neque perspiciatis
        harum adipisci ullam ducimus unde saepe repellat, error ex impedit,
        commodi quam ipsa consequuntur? Id, error voluptates magnam velit quidem
        vel.
      </p>
    </Layout>
  );
}

export default ContactPage;
