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
