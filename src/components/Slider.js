import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { processNumber } from '../util.js';

export const Slider = () => {
  const [replacementIncome, setReplacementIncome] = useState('');
  const [healthCareExpenses, setHealthCareExpenses] = useState('');
  const [homeExpenses, setHomeExpenses] = useState('');
  const [medicalExpenses, setMedicalExpenses] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');

  const handleOnChangeInput = (incomeAmount, incomeType) => {
    incomeAmount = processNumber(incomeAmount);
    if (incomeType === 'replacement') {
      setReplacementIncome(incomeAmount);
    } else if (incomeType === 'healthcare') {
      setHealthCareExpenses(incomeAmount);
    } else if (incomeType === 'homecare') {
      setHomeExpenses(incomeAmount);
    } else if (incomeType === 'medical') {
      setMedicalExpenses(incomeAmount);
    } else if (incomeType === 'other') {
      setOtherExpenses(incomeAmount);
    }
  };

  return (
    <>
      <div className="Slider">
        <div className="Slider_section">
          <p className="Slider_title">
            Desired replacement income (after-tax){' '}
            <IconContext.Provider
              value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
            >
              <span>
                <AiOutlineInfoCircle />
              </span>
            </IconContext.Provider>
          </p>
          <span className="Slider_input_container Slider_input_text">
            <input
              className="Slider_input"
              value={replacementIncome}
              onChange={e => handleOnChangeInput(e.target.value, 'replacement')}
            />
          </span>
        </div>
        <div className="Slider_section">
          <p className="Slider_title">
            Out-of-pocket healthcare expenses{' '}
            <IconContext.Provider
              value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
            >
              <span>
                <AiOutlineInfoCircle />
              </span>
            </IconContext.Provider>
          </p>
          <span className="Slider_input_container">
            <input
              className="Slider_input"
              value={healthCareExpenses}
              onChange={e => handleOnChangeInput(e.target.value, 'healthcare')}
            />
          </span>
        </div>
        <div className="Slider_section">
          <p className="Slider_title">
            Home modification expenses{' '}
            <IconContext.Provider
              value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
            >
              <span>
                <AiOutlineInfoCircle />
              </span>
            </IconContext.Provider>
          </p>
          <span className="Slider_input_container">
            <input
              className="Slider_input"
              value={homeExpenses}
              onChange={e => handleOnChangeInput(e.target.value, 'homecare')}
            />
          </span>
        </div>
        <div className="Slider_section">
          <p className="Slider_title">
            Medical homecare expenses{' '}
            <IconContext.Provider
              value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
            >
              <span>
                <AiOutlineInfoCircle />
              </span>
            </IconContext.Provider>
          </p>
          <span className="Slider_input_container Slider_input_text">
            <input
              className="Slider_input"
              value={medicalExpenses}
              onChange={e => handleOnChangeInput(e.target.value, 'medical')}
            />
          </span>
        </div>
        <div className="Slider_section">
          <p className="Slider_title">
            Other expenses (transport, childcare, etc){' '}
            <IconContext.Provider
              value={{ color: '#bbb', size: '20px', paddingLeft: '20px' }}
            >
              <span>
                <AiOutlineInfoCircle />
              </span>
            </IconContext.Provider>
          </p>
          <span className="Slider_input_container Slider_input_text">
            <input
              className="Slider_input"
              value={otherExpenses}
              onChange={e => handleOnChangeInput(e.target.value, 'other')}
            />
          </span>
        </div>
      </div>
    </>
  );
};
