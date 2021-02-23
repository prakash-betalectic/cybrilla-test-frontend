import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const Slider = () => {
  return (
    <>
      <div className="Slider">
        <div class="Slicer_section">
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
            <input className="Slider_input" />
          </span>
        </div>
        <div class="Slicer_section">
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
        </div>
        <div class="Slicer_section">
          <span className="Slider_input_container">
            <input className="Slider_input" />
          </span>
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
            <input className="Slider_input" />
          </span>
        </div>
        <div class="Slicer_section">
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
            <input className="Slider_input" />
          </span>
        </div>
        <div class="Slicer_section">
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
            <input className="Slider_input" />
          </span>
        </div>
      </div>
    </>
  );
};
