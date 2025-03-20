const formatPhoneNumber = (value: string): string => {
  const numericValue = value.replace(/\D/g, '')
  console.log(value)
  if (!value) return ""; // Проверяем, что value не пустое

  let formatted = "+7";

  if (value.length > 1) {
    formatted += ` (${numericValue.slice(1, 4)}`; // Код оператора
  }
  if (value.length >= 4) {
    formatted += `) ${numericValue.slice(4, 7)}`; // Первая часть номера
  }
  if (value.length >= 7) {
    formatted += `-${numericValue.slice(7, 9)}`; // Вторая часть номера
  }
  if (value.length >= 9) {
    formatted += `-${numericValue.slice(9, 11)}`; // Третья часть номера
  }

  return formatted;
};

export default formatPhoneNumber;
