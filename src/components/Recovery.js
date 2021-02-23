import React from 'react';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import { addRecoveryPeriod } from '../actions/calculatorActions';

const Recovery = ({ recoveryPeriod }) => {
  const dispatch = useDispatch();

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
          onChange={e => dispatch(addRecoveryPeriod(e.target.value))}
        />
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  recoveryPeriod: state.calculator.recoveryPeriod,
});

export default connect(mapStateToProps)(Recovery);
