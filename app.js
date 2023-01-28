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
  console.log(quantitySpecialization);
  // ndfl = 15 / 100;
  // const sum = 1000 / (1 - ndfl);
  // return sum;
}
console.log(calculateTeamFinanceReport(salaries1, team1));

/* see in console
{
"totalBudgetTeam":4590, // total budget does not match the sum of specializations due
to truncation of the fractional part
"totalBudgetManager":1111,
"totalBudgetDesigner":1714,
"totalBudgetArtist":1764,
}
*/
