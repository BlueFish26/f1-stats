import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import F1Database from "../data/F1Database";

const formatTime = (seconds) => {
  seconds = seconds.toString().replace(",", "");
  return new Date(+seconds * 1000).toISOString().substr(15, 8);
};

const getSeconds = (duration) => {
  let timeSegments = duration.split(":");
  return +timeSegments[0] * 60 + +timeSegments[1];
};

const options = {
  resposive: true,
  scales: {
    y: {
      type: "linear",
      ticks: {
        callback: (secs) => formatTime(secs),
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      min: 0,
      max: 20,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: (tooltipItem) => `Lap ${tooltipItem[0].label}`,
        label: (tooltipItem) => {
          if (tooltipItem.dataset.label === "Track Position") {
            return `P${tooltipItem.formattedValue}`;
          } else {
            return formatTime(tooltipItem.formattedValue);
          }
        },
      },
    },
  },
};

const DriverRaceGraph = ({ round, driverId }) => {
  const [raceData, setRaceData] = useState({});

  useEffect(() => {
    const loadLapTimes = async () => {
      console.log(round, driverId);
      const driverLapTimes = await F1Database.getRaceLapTimesForDriver(
        round,
        driverId
      );
      const laps = driverLapTimes.lap_times.map((lap) => lap.number);
      const lapTimes = driverLapTimes.lap_times.map((lap) =>
        getSeconds(lap.Timings[0].time)
      );
      const trackPositions = driverLapTimes.lap_times.map(
        (lap) => lap.Timings[0].position
      );
      const _raceData = {
        labels: laps,
        datasets: [
          {
            label: "Lap Times",
            data: lapTimes,
            fill: false,
            tension: 0.2,
            backgroundColor: "#A6381F",
            borderColor: "#DE2B1B",
            borderDash: [5, 5],
            yAxisID: "y",
          },
          {
            label: "Track Position",
            data: trackPositions,
            fill: false,
            tension: 0.2,
            backgroundColor: "#303E8C",
            borderColor: "#023059",
            yAxisID: "y1",
          },
        ],
      };
      setRaceData(_raceData);
    };
    loadLapTimes();
  }, [round, driverId]);

  return (
    <>
      <Line data={raceData} options={options} />
    </>
  );
};

export default DriverRaceGraph;
