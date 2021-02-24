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

export const removeCharactersFromNumber = number => {
  const num = String(number);
  let numberWithoutChar = '';
  for (let n of num) {
    if (n.charCodeAt(0) > 47 && n.charCodeAt(0) < 58) {
      numberWithoutChar += n;
    }
  }
  return formatNumber(numberWithoutChar);
};

export const processNumber = number => {
  const isInputNumeric = validateForNumber(number);
  if (!isInputNumeric) {
    const numberWithRemovedChar = removeCharactersFromNumber(number);
    return numberWithRemovedChar;
  } else if (!number.length || number === '$') {
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

export const validateForNumber = number => {
  const sanitizedNumber = convertToNumber(number);
  const stringFromNumber = String(sanitizedNumber);
  let numericValue = true;
  for (let char of stringFromNumber) {
    if (char.charCodeAt(0) < 48 || char.charCodeAt(0) > 57) {
      numericValue = false;
      break;
    }
  }
  return numericValue;
};
