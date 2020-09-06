import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data);
  return (
    <div className="coming-soon-card">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pratik Solanke - Personal Website</title>
      </Helmet>
      <div style={{margin: "auto", fontFamily: "ubuntu"}}>
        <div>
          <h3 style={{marginTop: '0px'}}>Hi,</h3>You have reached my personal website.<br/>
          I am in the process of building this website.<br/>
          In the meantime, you can find me on these other websites.
        </div>
        <div style={{marginTop: '30px'}}>
          <div style={{width: '20%', margin: 'auto'}}>
            <a href="https://github.com/psolanke" target="_blank">
              <Img style={{marginRight:'10px'}} fixed={data.githubLogo.childImageSharp.fixed}/>
            </a>
            <a href="https://www.linkedin.com/in/pratik-solanke-8612ba78/" target="_blank">
              <Img style={{marginLeft:'10px'}} fixed={data.linkedInLogo.childImageSharp.fixed}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    githubLogo: file(relativePath: { eq: "logos/GitHub-Mark-64px.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    linkedInLogo: file(relativePath: { eq: "logos/LI-In-Bug.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

