 const validatePhoneNumber = (value: string) => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/;
    return phoneRegex.test(value)? true: false;
    
  };

  export default validatePhoneNumber;