import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { iconClassNames } from '../../untils'

const Block = ({ icon, theme, title, description, action }) => (
  <div className="info">
    {icon && (
      <div className={`icon icon-${theme}`} data-testid="block-icon">
        <i className={iconClassNames(icon)} />
      </div>
    )}
    <div className="description">
      {title && (
        <>
          <h4 className={`${theme}-title`} data-testid="block-title">
            {title}
          </h4>
          <br />
        </>
      )}
      {description && (
        <p className="description" data-testid="block-description">
          {description}
        </p>
      )}
      {action ? (
        <Button
          data-testid="block-action"
          className="btn-link"
          color={theme}
          href={action.url || '#/'}
          onClick={action.callback}
        >
          {action.label}
        </Button>
      ) : null}
    </div>
  </div>
)

Block.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  icon: PropTypes.string,
  theme: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    callback: PropTypes.func
  })
}

Block.defaultProps = {
  image: null,
  icon: 'nc-album-2',
  theme: 'info',
  title: null,
  description: null,
  action: null
}

export default Block
