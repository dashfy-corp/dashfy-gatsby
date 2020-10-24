import { ErrorMessage, Field, Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { darkModeTypes } from '../../../types'
import Section from '../../section/Section'
import { FlexCol, FullButton } from '../../styles'

const ContactSection = ({
  title,
  description,
  darkMode,
  reversed,
  align,
  action,
  children
}) => {
  return (
    <Section
      darkMode={darkMode}
      title={title}
      description={description}
      action={action}
    >
      <Container>
        <Row>
          <FlexCol
            xs={{ size: 10, offset: 1, order: reversed ? 2 : 1 }}
            md={{ size: 5, offset: 0, order: reversed ? 2 : 1 }}
            align={align}
          >
            {children}
          </FlexCol>
          <FlexCol
            xs={{ size: 10, offset: 1, order: reversed ? 1 : 2 }}
            md={{ size: 6, offset: 1, order: reversed ? 1 : 2 }}
            xl={{ size: 5, offset: 2, order: reversed ? 1 : 2 }}
            align={align}
          >
            <Formik>
              <Form>
                <FormGroup>
                  <Label>Name</Label>
                  <Input tag={Field} name="name" type="text" />
                  <ErrorMessage name="name" component="div" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input tag={Field} name="email" type="email" />
                  <ErrorMessage name="email" component="div" />
                </FormGroup>
                <FormGroup>
                  <Label>Body</Label>
                  <Input tag={Field} name="body" type="textarea" />
                  <ErrorMessage name="body" component="div" />
                </FormGroup>
                <FullButton>Send Message</FullButton>
              </Form>
            </Formik>
          </FlexCol>
        </Row>
      </Container>
    </Section>
  )
}

ContactSection.propTypes = {
  darkMode: darkModeTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  reversed: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.instanceOf(Object)
  }),
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    color: PropTypes.string,
    callback: PropTypes.func
  }),
  children: PropTypes.element
}

ContactSection.defaultProps = {
  title: null,
  description: null,
  reversed: false,
  image: null,
  children: null,
  action: null,
  align: 'left',
  justify: 'flex-start'
}

export default ContactSection
