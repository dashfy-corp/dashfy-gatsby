import classNames from 'classnames'

export const darkModeClassNames = (darkMode, classNameObject) => {
  const classes = { ...(classNameObject || {}) }
  if (darkMode) {
    classes[`section-${darkMode}`] = true
  }
  return classNames(classes)
}

export const iconClassNames = iconName => {
  if (iconName.indexOf('nc-') === 0) {
    return `nc-icon ${iconName}`
  }

  if (iconName.indexOf('fa-') === 0) {
    return `fa ${iconName}`
  }

  return ``
}
