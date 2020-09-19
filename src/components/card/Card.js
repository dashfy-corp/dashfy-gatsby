import React from 'react'
import PropTypes from 'prop-types'
import {
  Card as BCard,
  Button,
  CardBody,
  CardFooter,
  CardTitle
} from 'reactstrap'
import classNames from 'classnames'
import { iconClassNames } from '../../untils'
import Image from '../image'

const LinkWrapped = ({ action, children }) => {
  if (action) {
    return (
      <a href={action.url} title={action.title} onClick={action.callback}>
        {children}
      </a>
    )
  }
  return children
}

const Card = ({
  plain,
  align,
  avatar,
  theme,
  title,
  subTitle,
  description,
  action,
  buttons
}) => (
  <BCard
    className={classNames({
      card: true,
      'card-plain': plain,
      'card-profile': avatar !== null
    })}
  >
    {avatar && (
      <div className="card-avatar">
        <LinkWrapped action={action}>
          <Image alt={avatar.alt} src={avatar.src} />
        </LinkWrapped>
      </div>
    )}

    <CardBody>
      <LinkWrapped action={action}>
        <div className="author">
          <CardTitle tag="h4">{title}</CardTitle>
          <h6 className="card-category">{subTitle}</h6>
        </div>
      </LinkWrapped>
      <p className={`card-description text-${align}`}>{description}</p>
    </CardBody>

    {buttons && buttons.length > 0 && (
      <CardFooter className={`text-${align}`}>
        {buttons & (buttons.length > 0) &&
          buttons.map(button => (
            <Button
              key={button.name}
              className={`btn-just-icon btn-${
                button.theme || theme || 'neutral'
              }`}
              href={button.url || '#/'}
              onClick={button.callback}
            >
              <i className={iconClassNames(button.icon)} />
            </Button>
          ))}
      </CardFooter>
    )}
  </BCard>
)

Card.propTypes = {
  plain: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  avatar: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.instanceOf(Object)
  }),
  align: PropTypes.oneOf(['center', 'left', 'right']),
  theme: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    callback: PropTypes.func
  }),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      label: PropTypes.string.isRequired,
      theme: PropTypes.string,
      url: PropTypes.string,
      callback: PropTypes.func
    })
  )
}

Card.defaultProps = {
  plain: true,
  avatar: null,
  align: 'center',
  theme: 'info',
  title: null,
  subTitle: null,
  description: null,
  action: null,
  buttons: []
}

export default Card
