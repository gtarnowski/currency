import React from 'react'
import './index.css'

const Flag = ({ currencyCode, flagName }) => (
  <div className="flag-container">
    <div className={`currency-flag currency-flag-${currencyCode}`} />
    <strong>{flagName}</strong>
  </div>
)

export default Flag
