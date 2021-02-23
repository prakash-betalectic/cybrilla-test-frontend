export const ADD_RECOVERY_PERIOD = 'ADD_RECOVERY_PERIOD';
export const ADD_REPLACEMENT_INCOME = 'ADD_REPLACEMENT_INCOME';
export const ADD_HEALTH_CARE_EXPENSES = 'ADD_HEALTH_CARE_EXPENSES';
export const ADD_HOME_EXPENSES = 'ADD_HOME_EXPENSES';
export const ADD_MEDICAL_EXPENSES = 'ADD_MEDICAL_EXPENSES';
export const ADD_OTHER_EXPENSES = 'ADD_OTHER_EXPENSES';

export function addRecoveryPeriod(recoveryPeriod) {
  return {
    type: ADD_RECOVERY_PERIOD,
    payload: { recoveryPeriod },
  };
}

export function addReplacementIncome(replacementIncome) {
  return {
    type: ADD_REPLACEMENT_INCOME,
    payload: { replacementIncome },
  };
}
export function addHealthCareExpenses(healthCareExpenses) {
  return {
    type: ADD_HEALTH_CARE_EXPENSES,
    payload: { healthCareExpenses },
  };
}
export function addHomeExpenses(homeExpenses) {
  return {
    type: ADD_HOME_EXPENSES,
    payload: { homeExpenses },
  };
}
export function addMedicalExpenses(medicalExpenses) {
  return {
    type: ADD_MEDICAL_EXPENSES,
    payload: { medicalExpenses },
  };
}
export function addOtherExpenses(otherExpenses) {
  return {
    type: ADD_OTHER_EXPENSES,
    payload: { otherExpenses },
  };
}
