import React from 'react'

const PersonalIcon = ({ color }) => {
  return (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5147 0.471069C12.8699 0.471069 14.771 2.37211 14.771 4.72738C14.771 7.08266 12.8699 8.9837 10.5147 8.9837C8.15938 8.9837 6.25834 7.08266 6.25834 4.72738C6.25834 2.37211 8.15938 0.471069 10.5147 0.471069V0.471069Z" stroke={color} />
      <path d="M10.481 17.9674H0.471096C0.471096 11.2885 5.88822 9.89215 10.481 9.89215C16.0159 9.89215 20.4909 11.7932 20.4909 17.9674H10.481V17.9674Z" stroke={color} />
    </svg>


  )
}

export default PersonalIcon
