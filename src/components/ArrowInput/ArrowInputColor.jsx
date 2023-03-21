import React, { useState } from 'react';

const options = ['Классическая', 'Стандартная'];

const ArrowInputColor = () => {
  const [selectedOption, setSelectedOption] = useState('Классическая');
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div style={{ border: '1px solid #CDCDCD', borderRadius: '5px', display: 'inline-block' }}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <input
          type="text"
          placeholder={selectedOption}
          value={selectedOption}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setShowOptions(false)}
          onChange={() => { }}
          style={{
            border: 'none',
            appearance: 'none',
            background: 'transparent',
            padding: '10px',
            paddingRight: '30px',
            fontSize: '16px',
            width: '100%',
            cursor: 'pointer',
            fontFamily: 'Roboto-Regular',
            fontSize: '12px',
            color: '#7C7C7C',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            width: '0',
            height: '0',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #000',
            cursor: 'pointer',
          }}
          onClick={() => setShowOptions(!showOptions)}
        />
      </div>
      {showOptions && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '200px',
            overflowY: 'auto',
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '10px',
                background:
                  selectedOption === option ? '#CDCDCD' : 'transparent',
                cursor: 'pointer',
                display:
                  selectedOption === option || !selectedOption ? 'block' : 'none',
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArrowInputColor;
