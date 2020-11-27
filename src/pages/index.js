import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout'
import ContactSection from '../components/sections/contact/ContactSection'
import GallerySection from '../components/sections/gallery/GallerySection'
import ServicesSection from '../components/sections/services/ServicesSection'
import SplitSection from '../components/sections/split/SplitSection'
import EmployeesSection from '../components/sections/employees/EmployeesSection'
import { Box } from '../components/styles'
import { beachBlueSky, darkBlue } from '../gradients'
import EnvelopeIcon from '../assets/svg/envelope-open.svg'
import { faRocket, faBaby, faRunning } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      employeeOne: file(relativePath: { eq: "img/faces/face-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employeeTwo: file(relativePath: { eq: "img/faces/face-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employeeThree: file(relativePath: { eq: "img/faces/face-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      splitSectionImage: file(relativePath: { eq: "images/gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryOne: file(relativePath: { eq: "img/daniel-olahs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryTwo: file(relativePath: { eq: "img/daniel-olahs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryThree: file(relativePath: { eq: "img/joshua-stannard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const {
    site: { siteMetadata },
    employeeOne,
    employeeTwo,
    employeeThree,
    splitSectionImage,
    galleryOne,
    galleryTwo,
    galleryThree
  } = data

  return (
    <Layout>
      <Hero
        title={siteMetadata.title}
        description={siteMetadata.description}
        styles={beachBlueSky}
        titleStyles={darkBlue}
      />
      <ServicesSection
        title="Services Section"
        description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
        services={[
          {
            id: 'service-1',
            size: 4,
            title: 'First Service',
            icon: {
              icon: faRocket
            },
            description:
              'This is a long description of a service that a company may provide.',
            action: {
              label: 'Read More',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'service-2',
            size: 4,
            title: 'Second Service',
            icon: {
              icon: faBaby
            },
            description:
              'This is a long description of a service that a company may provide.',
            action: {
              label: 'Read More',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'service-3',
            size: 4,
            title: 'Third Service',
            icon: {
              icon: faRunning
            },
            description:
              'This is a long description of a service that a company may provide.',
            action: {
              label: 'Read More',
              callback: () => window.alert('Clicked!')
            }
          }
        ]}
      />
      <SplitSection
        title="Split Section"
        description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
        align="left"
        offset={1}
        spacing={1}
        image={{
          alt: 'Alt text',
          src: splitSectionImage
        }}
      />
      <GallerySection
        title="Gallery Section"
        description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
        items={[
          {
            id: 'item-1',
            size: 4,
            image: {
              alt: 'Alt text',
              src: galleryOne
            },
            title: 'First Employee',
            position: 'his or her position name',
            description: 'This is a long description for an employee.',
            overlay: false,
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'item-2',
            size: 4,
            image: {
              alt: 'Alt text',
              src: galleryTwo
            },
            title: 'Second Employee',
            position: 'his or her position name',
            description: 'This is a long description for an employee.',
            overlay: false,
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          },
          {
            id: 'item-3',
            image: {
              alt: 'Alt text',
              src: galleryThree
            },
            size: 4,
            title: 'Third Employee',
            position: 'his or her position name',
            description: 'This is a long description for an employee.',
            overlay: false,
            action: {
              label: 'Click Me!',
              callback: () => window.alert('Clicked!')
            }
          }
        ]}
      />
      <EmployeesSection
        title="Employee's Section"
        description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
        employees={[
          {
            id: 'employee-1',
            size: 4,
            avatar: {
              alt: 'Alt text',
              src: employeeOne
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
              src: employeeTwo
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
              src: employeeThree
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
      <ContactSection
        title="Contact Section"
        description="Some text to get your clients to contact you."
      >
        <Box
          direction="column"
          padding="0"
          margin="0 20% 10% 20%"
          margin-md="0"
          padding-md="10% 2% 2% 2%"
          padding-lg="8% 5% 10% 20%"
          padding-xl="10% 10% 15% 20%"
        >
          <EnvelopeIcon />
        </Box>
      </ContactSection>
    </Layout>
  )
}

export default IndexPage
