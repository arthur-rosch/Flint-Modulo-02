function salaryIncrease(value) {
  try {
    let newSalary;
    isNaN(value) == false
      ? value <= 1500
        ? (newSalary = value + value * 0.2)
        : value >= 1500 && value <= 2000
        ? (newSalary = value + value * 0.15)
        : value >= 2000 && value <= 3000
        ? (newSalary = value + value * 0.1)
        : value > 3000 && (newSalary = value + value * 0.05)
      : console.log(`${value} Não e um valor valido!!`);
    return newSalary;
  } catch (error) {
    console.log(
      `um erro foi encontrado e não foi possível concluir a operação \n\n${error}`
    );
  }
}
console.log(salaryIncrease(1500));
