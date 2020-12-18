import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'
import { darkModeTypes } from '../../../types'
import Card from '../../card/Card'
import Section from '../../section/Section'

/**
 * Employees Section Component
 *
 * Custom section to display employees, each employee
 * can have its own avatar along with name and position.
 *
 * @param darkMode
 * @param title
 * @param description
 * @param action
 * @param services
 * @return {*}
 * @constructor
 */
const EmployeesSection = ({
  darkMode,
  title,
  description,
  action,
  employees
}) => (
  <Section
    darkMode={darkMode}
    title={title || 'About'}
    description={description}
    action={action}
  >
    <>
      {employees
        .map(employee => ({
          ...employee,
          subTitle: employee.position
        }))
        .map(employee => (
          <Col
            key={employee.id}
            className="content-center"
            md={employee.size || 6}
          >
            <Card {...employee} plain />
          </Col>
        ))}
    </>
  </Section>
)

EmployeesSection.propTypes = {
  darkMode: darkModeTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    callback: PropTypes.func
  }),
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      position: PropTypes.string,
      avatar: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.instanceOf(Object)
      }),
      description: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
      action: PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
        callback: PropTypes.func
      })
    })
  )
}

EmployeesSection.defaultProps = {
  darkMode: false,
  employees: []
}

export default EmployeesSection
