import {
  ADD_RECOVERY_PERIOD,
  ADD_REPLACEMENT_INCOME,
  ADD_HEALTH_CARE_EXPENSES,
  ADD_HOME_EXPENSES,
  ADD_MEDICAL_EXPENSES,
  ADD_OTHER_EXPENSES,
} from '../actions/calculatorActions';
import { processNumber, calculateFinance, validateForNumber } from '../util.js';

export const initialState = {
  sliderData: {
    replacementIncome: '$11,000',
    healthCareExpenses: '$110,000',
    homeExpenses: '$9,000',
    medicalExpenses: '$2,500',
    otherExpenses: '$6,500',
  },
  recoveryPeriod: 12,
  finance: [359000, 467000],
};

export default function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RECOVERY_PERIOD:
      const isInputNumeric = validateForNumber(action.payload.recoveryPeriod);
      if (!isInputNumeric) return;
      const currentStateRecovery = {
        ...state,
        recoveryPeriod: Number(action.payload.recoveryPeriod),
      };
      const _financeRecovery = calculateFinance(currentStateRecovery);
      return {
        ...state,
        recoveryPeriod: Number(action.payload.recoveryPeriod),
        finance: _financeRecovery,
      };
    case ADD_REPLACEMENT_INCOME:
      const replacementIncome = processNumber(action.payload.replacementIncome);
      const currentStateReplacement = {
        ...state,
        sliderData: {
          ...state.sliderData,
          replacementIncome,
        },
      };
      const _financeReplacement = calculateFinance(currentStateReplacement);
      return {
        ...state,
        sliderData: {
          ...state.sliderData,
          replacementIncome,
        },
        finance: _financeReplacement,
      };
    case ADD_HEALTH_CARE_EXPENSES:
      const healthCareExpenses = processNumber(
        action.payload.healthCareExpenses
      );
      const currentStateHealthCare = {
        ...state,
        sliderData: {
          ...state.sliderData,
          healthCareExpenses,
        },
      };
      const _financeHealthCare = calculateFinance(currentStateHealthCare);
      return {
        ...state,
        sliderData: {
          ...state.sliderData,
          healthCareExpenses,
        },
        finance: _financeHealthCare,
      };
    case ADD_HOME_EXPENSES:
      const homeExpenses = processNumber(action.payload.homeExpenses);
      const currentStateHome = {
        ...state,
        sliderData: {
          ...state.sliderData,
          homeExpenses,
        },
      };
      const _financeHome = calculateFinance(currentStateHome);
      return {
        ...state,
        sliderData: {
          ...state.sliderData,
          homeExpenses,
        },
        finance: _financeHome,
      };
    case ADD_MEDICAL_EXPENSES:
      const medicalExpenses = processNumber(action.payload.medicalExpenses);
      const currentStateMedical = {
        ...state,
        sliderData: {
          ...state.sliderData,
          medicalExpenses,
        },
      };
      const _financeMedical = calculateFinance(currentStateMedical);
      return {
        ...state,
        sliderData: {
          ...state.sliderData,
          medicalExpenses,
        },
        finance: _financeMedical,
      };
    case ADD_OTHER_EXPENSES:
      const otherExpenses = processNumber(action.payload.otherExpenses);
      const currentStateOther = {
        ...state,
        sliderData: {
          ...state.sliderData,
          otherExpenses,
        },
      };
      const _financeOther = calculateFinance(currentStateOther);
      return {
        ...state,
        sliderData: {
          ...state.sliderData,
          otherExpenses,
        },
        finance: _financeOther,
      };
    default:
      return state;
  }
}
