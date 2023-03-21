import React from 'react'

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.color,
    padding: '8px 16px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    fontFamily: 'Roboto-Regular',
    cursor: 'pointer',
    borderStyle: 'none',
    outline: 'none',
    gap: '12px',
  }
  return (
    <button style={buttonStyle}>
      <img src={props.svg} alt="SVG Image" />
      <span>{props.text}</span>
    </button>
  )
}

export default Button