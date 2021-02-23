import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const Recovery = () => {
  return (
    <div className="Recovery">
      <p className="Recovery_title">
        Recovery Chart{' '}
        <IconContext.Provider
          value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
        >
          <span>
            <AiOutlineInfoCircle />
          </span>
        </IconContext.Provider>
      </p>
      <span className="Recovery_input_container">
        <input type="number" className="Recovery_input" />
      </span>
    </div>
  );
};
