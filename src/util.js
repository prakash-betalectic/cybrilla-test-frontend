export const convertToNumber = formattedNumber => {
  const removeDollarSign = formattedNumber.replace('$', '');
  const removeCommas = removeDollarSign.replace(/,/g, '');
  return Number(removeCommas);
};

export const formatNumber = number => {
  const removeDollarSign = number.replace('$', '');
  const removeCommas = removeDollarSign.replace(/,/g, '');
  const value = removeCommas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${value}`;
};

export const processNumber = number => {
  if (!number.length || number === '$') {
    return '';
  } else {
    return formatNumber(number);
  }
};

export const calculateFinance = currentState => {
  const _replacementIncome = convertToNumber(
    currentState.sliderData.replacementIncome
  );
  const _healthCareExpenses = convertToNumber(
    currentState.sliderData.healthCareExpenses
  );
  const _homeExpenses = convertToNumber(currentState.sliderData.homeExpenses);
  const _medicalExpenses = convertToNumber(
    currentState.sliderData.medicalExpenses
  );
  const _otherExpenses = convertToNumber(currentState.sliderData.otherExpenses);

  const firstBar = Math.round(
    _replacementIncome +
      _healthCareExpenses +
      _homeExpenses +
      _medicalExpenses -
      _otherExpenses
  );

  const secondBar = Math.round(
    ((_replacementIncome + _healthCareExpenses + _homeExpenses) * 1.2) /
      currentState.recoveryPeriod
  );
  return [firstBar, secondBar];
};
