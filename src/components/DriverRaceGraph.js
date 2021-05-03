import { Line } from "react-chartjs-2";
const laptimes = [
  { x: "1:25.806", y: 2 },
  { x: "1:48.207", y: 2 },
  { x: "1:32.599", y: 2 },
];
const data = {
  labels: ["1", "2", "3"],
  datasets: [
    {
      label: "Best Lap",
      fill: false,
      data: laptimes,
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        type: "time",
        distribution: "linear",
      },
    ],
  },
};

const DriverRaceGraph = () => (
  <>
    <div className="header">
      <h1 className="title">Graph</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default DriverRaceGraph;
