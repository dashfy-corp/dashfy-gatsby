import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout'
import AboutSection from '../components/sections/about/AboutSection'
import ServicesSection from '../components/sections/services/ServicesSection'
import SEO from '../components/seo'
import { beachBlueSky } from '../gradients'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      employeeOne: file(
        relativePath: { eq: "img/faces/clem-onojeghuo-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employeeTwo: file(relativePath: { eq: "img/faces/joe-gardner-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employeeThree: file(
        relativePath: { eq: "img/faces/erik-lucatero-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log('DATA', data)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        styles={beachBlueSky}
        titleStyles={`
          background: -moz-linear-gradient(top, #FFFFFF 35%, #4e6773 100%);
          background: -webkit-linear-gradient(top, #FFFFFF 35%,#4e6773 100%);
          background: -ms-linear-gradient(top, #FFFFFF 35%,#4e6773 100%);
          background: linear-gradient(to bottom, #FFFFFF 35%,#4e6773 100%);
        `}
      />
      <ServicesSection
        title="Services Section"
        description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
        services={[
          {
            id: 'service-1',
            size: 4,
            title: 'First Service',
            description:
              'This is a long description of a service that a company may provide.',
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'service-2',
            size: 4,
            title: 'Second Service',
            description:
              'This is a long description of a service that a company may provide.',
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'service-3',
            size: 4,
            title: 'Third Service',
            description:
              'This is a long description of a service that a company may provide.',
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          }
        ]}
      />
      <AboutSection
        title="About Section"
        description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
        employees={[
          {
            id: 'employee-1',
            size: 4,
            avatar: {
              alt: 'Alt text',
              src: data.employeeOne
            },
            title: 'First Employee',
            position: 'his or her position name',
            description: 'This is a long description for an employee.',
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'employee-2',
            size: 4,
            avatar: {
              alt: 'Alt text',
              src: data.employeeTwo
            },
            title: 'Second Employee',
            position: 'his or her position name',
            description: 'This is a long description for an employee.',
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'employee-3',
            avatar: {
              alt: 'Alt text',
              src: data.employeeThree
            },
            size: 4,
            title: 'Third Employee',
            position: 'his or her position name',
            description: 'This is a long description for an employee.',
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          }
        ]}
      />
    </Layout>
  )
}

export default IndexPage
