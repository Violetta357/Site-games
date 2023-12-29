const findSeason = (a) => {
  if (isNaN(a) || a <= 0 || a >= 13) {
    do {
      alert("Вы ввели некорректное значение");
      a = Number(prompt("Введите порядковый номер месяца"));
    } while (isNaN(a) || a <= 0 || a >= 13);
  }
  if (a === 1 || a === 2 || a === 12) {
    return "Зима";
  } else if (a >= 3 && a <= 5) {
    return "Весна";
  } else if (a >= 6 && a <= 8) {
    return "Лето";
  } else {
    return "Осень";
  }

};
const firstGame = () => {
    alert ('Готов играть ?')
    let monthNomber = Number(prompt('Введите порядковый номер месяца')) 
    alert (findSeason(monthNomber))
}