import React from 'react'

const StatsIcon = ({ color }) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.94472 11.0862H19.4181C19.4181 16.2931 15.1778 20.5345 9.94472 20.5345C4.71163 20.5345 0.471319 16.3103 0.471319 11.0862C0.471319 5.8793 4.71163 1.63792 9.94472 1.63792V11.0862V11.0862Z" stroke={color} />
      <path d="M11.9807 9.01724V0.482758C16.709 0.482758 20.5287 4.2931 20.5287 9.01724H11.9807V9.01724Z" stroke={color} strokeWidth="0.941215" strokeMiterlimit="22.9256" />
    </svg>


  )
}

export default StatsIcon
