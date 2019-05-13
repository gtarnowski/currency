import React, { Component, Fragment } from 'react'
import options from '../../lib/currency'
import { Dropdown } from 'semantic-ui-react'

const CurrencyDropDown = ({
  onChange,
  defaultValue,
  multiple,
  placeholder,
  selection,
  className,
  fluid,
  value
}) => {
  const onOverrideChange = (event, { value }) => onChange(value)
  return (
    <Dropdown
      value={value}
      multiple={multiple}
      selection={selection}
      options={options}
      placeholder={placeholder}
      className={className}
      fluid={fluid}
      onChange={onOverrideChange}
    />
  )
}

export default CurrencyDropDown
