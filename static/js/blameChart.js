google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(() => blame(2025));

function blame(year) {
  const persons = ["CHA", "CHE", "L", "O", "P"];
  const colors = ["lightgrey", "lightgreen", "darkred", "#ffcc00", "lightblue"];

  const blameData = persons.map((person, index) => {
    const count = rolDays.filter(
      ([date, hours, personName]) =>
        date.getFullYear() === year && hours === 0 && personName === person
    ).length;
    return [person, count, colors[index]];
  });

  const dataTable = google.visualization.arrayToDataTable([
    ["¿Quién faltó?", "¿Cuántas veces?", { role: "style" }],
    ...blameData,
  ]);

  const options = {
    title: "¿Cuántas veces se ha faltado a las partidas?",
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById(`blame_${year}`)
  );
  chart.draw(dataTable, options);
}
