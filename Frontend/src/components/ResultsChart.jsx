import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ResultsChart({ poll }) {
  const canvasRef = useRef();
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: poll.options.map((o) => o.text),
        datasets: [
          {
            label: "Votes",
            data: poll.options.map((o) => o.votes),
          },
        ],
      },
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [poll]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} />
    </div>
  );
}
