const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];
// const team2 = { name: "Misha", specialization: "Manager" };

function calculateTeamFinanceReport(salaries, team) {
  // const specializationTeam = team.map((team) => team);
  const quantitySpecialization = {
    ...team,
    quantity: 1,
  };

  // ndfl = 15 / 100;
  // const sum = 1000 / (1 - ndfl);
  // return sum;
  const ndfl = salary / (100 % -tax);
}
// console.log(calculateTeamFinanceReport(salaries1, team1));

/* see in console
{
"totalBudgetTeam":4590, // total budget does not match the sum of specializations due
to truncation of the fractional part
"totalBudgetManager":1111,
"totalBudgetDesigner":1714,
"totalBudgetArtist":1764,
}
*/

// Test 1
const salariesTeam = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function getSalaries(many) {
  const objVal = Object.values(many);

  const sum = objVal.reduce((acc, val) => acc + val);
}
getSalaries(salariesTeam);

// Test 2
const stones = [
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
];

function calcTotalPrice(stone, stoneName) {
  const sumStones = stones.reduce((acc, stone) => {
    if (stoneName === stone.name) {
      stone.price * stone.quantity;
    }
  }, 0);

  return sumStones;
}
console.log(calcTotalPrice(stones, "Изумруд"));
