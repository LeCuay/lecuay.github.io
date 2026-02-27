google.charts.load("current", { packages: ["calendar"] });
google.charts.setOnLoadCallback(() => drawCalendar(2026));
google.charts.setOnLoadCallback(() => drawCalendar(2025));
google.charts.setOnLoadCallback(() => drawCalendar(2024));
google.charts.setOnLoadCallback(() => drawCalendar(2023));

/**
 *
 * @param {number} year El año por el que filtrar.
 */
function drawCalendar(year) {
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: "date", id: "Fecha" });
  dataTable.addColumn({ type: "number", id: "Horas" });
  dataTable.addRows(rolDays.filter(([date, _hours]) => date.getFullYear() === year).map(([date, hours]) => [date, hours]));

  var chart = new google.visualization.Calendar(
    document.getElementById(`calendar_${year}`)
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
