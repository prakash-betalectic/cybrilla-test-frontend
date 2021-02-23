import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {
  addReplacementIncome,
  addHealthCareExpenses,
  addHomeExpenses,
  addMedicalExpenses,
  addOtherExpenses,
} from '../actions/calculatorActions';

const Slider = ({
  replacementIncome,
  healthCareExpenses,
  homeExpenses,
  medicalExpenses,
  otherExpenses,
}) => {
  const dispatch = useDispatch();

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
              onChange={e => dispatch(addReplacementIncome(e.target.value))}
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
              onChange={e => dispatch(addHealthCareExpenses(e.target.value))}
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
              onChange={e => dispatch(addHomeExpenses(e.target.value))}
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
              onChange={e => dispatch(addMedicalExpenses(e.target.value))}
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
              onChange={e => dispatch(addOtherExpenses(e.target.value))}
            />
          </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  replacementIncome: state.calculator.sliderData.replacementIncome,
  healthCareExpenses: state.calculator.sliderData.healthCareExpenses,
  homeExpenses: state.calculator.sliderData.homeExpenses,
  medicalExpenses: state.calculator.sliderData.medicalExpenses,
  otherExpenses: state.calculator.sliderData.otherExpenses,
});

export default connect(mapStateToProps)(Slider);
