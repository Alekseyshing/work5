import React from 'react'

const BalanceIcon = ({ color }) => {
  return (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.44094 4.49704H18.4838C19.578 4.49704 20.4534 5.38925 20.4534 6.46663V15.9947C20.4534 17.0889 19.5612 17.9643 18.4838 17.9643H2.44094C1.34673 17.9643 0.471355 17.0721 0.471355 15.9947V6.46663C0.471355 5.37241 1.36356 4.49704 2.44094 4.49704V4.49704Z" stroke={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.4703 9.47994H16.3122C15.3527 9.47994 14.5615 10.2711 14.5615 11.2307C14.5615 12.2071 15.3527 12.9814 16.3122 12.9814H20.4703V9.4631V9.47994Z" stroke={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1776 10.8098C16.4132 10.8098 16.5984 10.995 16.5984 11.2307C16.5984 11.4664 16.4132 11.6515 16.1776 11.6515C15.9419 11.6515 15.7567 11.4664 15.7567 11.2307C15.7567 10.995 15.9419 10.8098 16.1776 10.8098Z" fill={color} stroke={color} />
      <path d="M5.16807 4.49705L12.8781 0.608378C13.5346 0.271696 14.3258 0.557876 14.6457 1.24807L16.1607 4.49705" stroke={color} strokeWidth="0.942709" strokeMiterlimit="22.9256" />
    </svg>



  )
}

export default BalanceIcon
