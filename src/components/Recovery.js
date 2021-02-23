import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const Recovery = () => {
  const [recoveryPeriod, setRecoveryPeriod] = useState();
  return (
    <div className="Recovery">
      <p className="Recovery_title">
        Recovery period{' '}
        <IconContext.Provider
          value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
        >
          <span>
            <AiOutlineInfoCircle />
          </span>
        </IconContext.Provider>
      </p>
      <span className="Recovery_input_container">
        <input
          type="number"
          className="Recovery_input"
          value={recoveryPeriod}
          onChange={e => setRecoveryPeriod(e.target.value)}
        />
      </span>
    </div>
  );
};
