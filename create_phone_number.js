function createPhoneNumber(numbers) {
  const digitsStr = numbers.join('');
  const phoneNumber = digitsStr.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  return phoneNumber;
}