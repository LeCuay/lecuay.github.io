google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(() => blame(2025));

function blame(year) {
  const persons = ["CHA", "CHE", "L", "O", "P"];
  const colors = ["lightgrey", "lightgreen", "darkred", "#ffcc00", "lightblue"];

  const blameData = persons.map((person, index) => {
    /** @type {number} */
    const count = rolDays.filter(
      /**
       *
       * @param {[Date, number, string | Array<string> | undefined]} param0 - The date, hours played and person that missed
       * @returns {boolean}
       */
      ([date, hours, personName]) => {
        if (typeof personName === "string") {
          personName = [personName];
        }
        return date.getFullYear() === year && hours === 0 && personName?.includes(person)
      }
    ).length;
    return [person, count, colors[index]];
  });

  const dataTable = google.visualization.arrayToDataTable([
    ["¿Quién faltó?", "¿Cuántas veces?", { role: "style" }],
    ...[...blameData, ["La vida", rolDays.filter(([date, hours, personName]) => date.getFullYear() === year && hours === 0 && !personName).length, "lightgrey"]],
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
