google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(() => drawDonut(2025));
google.charts.setOnLoadCallback(() => drawDonut(2024));
google.charts.setOnLoadCallback(() => drawDonut(2023));

/**
 *
 * @param {number} year El año por el que filtrar.
 */
function drawDonut(year) {
  var data = google.visualization.arrayToDataTable([
    ["¿Hubo rol?", "Porcentaje de días"],
    [
      "4 horas o más",
      rolDays.filter(
        ([date, hours]) => date.getFullYear() === year && hours >= 4
      ).length,
    ],
    [
      "menos de 4 horas",
      rolDays.filter(
        ([date, hours]) =>
          date.getFullYear() === year &&
          date.getDay() === 0 &&
          hours < 4 &&
          hours !== 0
      ).length,
    ],
    [
      "No",
      rolDays.filter(
        ([date, hours]) => date.getFullYear() === year && hours === 0
      ).length,
    ],
  ]);

  var options = {
    title: `Porcentaje de rol (${year})`,
    pieHole: 0.4,
    slices: {
      0: { color: "green" },
      1: { color: "orange" },
      2: { color: "red" },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById(`donutchart_${year}`)
  );
  chart.draw(data, options);
}
