google.charts.load("current", { packages: ["calendar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: "date", id: "Fecha" });
  dataTable.addColumn({ type: "number", id: "Horas" });
  dataTable.addRows(rolDays);

  var chart = new google.visualization.Calendar(
    document.getElementById("calendar_basic")
  );

  var options = {
    title: "¿Hubo rol?",
    height: 350,
    width: "100%",
    calendar: {
      underYearSpace: 10,
      yearLabel: {
        fontName: 'Sans-serif',
        fontSize: 32,
        color: 'black',
        bold: true,
        italic: true
      },
      cellSize: window.innerWidth > 960 ? 16 : 12,
      dayOfWeekLabel: {
        fontName: "Sans-serif",
        fontSize: 12,
        color: "#1a8763",
        bold: true,
        italic: false,
      },
      dayOfWeekRightSpace: 10,
      daysOfWeek: "DLMMJVS",
    },
    colorAxis: { minValue: 0, colors: ["#FF0000", "#00FF00"] },
  };

  chart.draw(dataTable, options);
}
