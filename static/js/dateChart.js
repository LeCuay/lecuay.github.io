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

  /**
   *
   * @returns {{cells: number, yearLabelFontSize: number, dayOfWeekLabel: number}}
   */
  const getSizesByScreenSize = () => {
    const sizes = {
      cells: 6,
      yearLabelFontSize: 16,
      dayOfWeekLabel: 6,
    };

    if (window.innerWidth > 768) {
      sizes.cells = 12;
      sizes.yearLabelFontSize = 24;
      sizes.dayOfWeekLabel = 8;
    }

    if (window.innerWidth > 992) {
      sizes.cells = 16;
      sizes.yearLabelFontSize = 32;
      sizes.dayOfWeekLabel = 12;
    }

    return sizes;
  };

  const sizes = getSizesByScreenSize();

  var options = {
    title: "¿Hubo rol?",
    height: 350,
    width: "100%",
    calendar: {
      underYearSpace: 10,
      yearLabel: {
        fontName: "Sans-serif",
        fontSize: sizes.yearLabelFontSize,
        color: "black",
        bold: true,
        italic: true,
      },
      cellSize: sizes.cells,
      dayOfWeekLabel: {
        fontName: "Sans-serif",
        fontSize: sizes.dayOfWeekLabel,
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
