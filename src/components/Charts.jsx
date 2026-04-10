import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Label
} from "recharts";

export default function Charts({ data, theme }) {

  const isBooks = theme === "booksTheme";
  const limitedData = data.slice(0, 10);
  const chartData = limitedData.map((d, i) => ({
    index: i + 1,
    name: d.name,
    shortName: d.name.length > 15 ? d.name.slice(0, 15) + "…" : d.name,
    value: isBooks ? d.year || 0 : 1
  }));

  return (
    <div style={{
      background: "rgba(0,0,0,0.85)",
      padding: "25px",
      borderRadius: "12px"
    }}>

      <h3>{isBooks ? "Publication Trend" : "Breweries Trend"}</h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="index"
            tick={{ fontSize: 14 }}
            tickMargin={15}
          >
            <Label
              value={isBooks ? "Book Index" : "Entry Index"}
              position="bottom"
              offset={20}
              style={{ fontSize: 16 }}
            />
          </XAxis>

          <YAxis
            tick={{ fontSize: 14 }}
            tickMargin={15}
          >
            <Label
              value={isBooks ? "Year Published" : "Number of Breweries"}
              angle={-90}
              position="center"
              style={{ fontSize: 16 }}
            />
          </YAxis>

          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              color: "gold",
              border: "2px solid gold",
              fontSize: "14px"
            }}
            formatter={(value, name, props) => [
              isBooks ? `Year: ${value}` : `Breweries: ${value}`,
              props.payload.name 
            ]}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="gold"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>


      <h3 style={{ marginTop: "40px" }}>
        {isBooks ? "Books Overview" : "Breweries Overview"}
      </h3>

      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 60, bottom: 120 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="shortName"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={120}
            tick={{ fontSize: 12 }}
          >
            <Label
              value={isBooks ? "Book Titles" : "Brewery Names"}
              position="bottom"
              offset={40}
              style={{ fontSize: 16 }}
            />
          </XAxis>

          <YAxis
            tick={{ fontSize: 14 }}
            tickMargin={15}
          >
            <Label
              value={isBooks ? "Year Published" : "Count"}
              angle={-90}
              position="center"
              style={{ fontSize: 16 }}
            />
          </YAxis>

          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              color: "gold",
              border: "2px solid gold",
              fontSize: "14px"
            }}
            formatter={(value, name, props) => [
              isBooks ? `Year: ${value}` : `Breweries: ${value}`,
              props.payload.name
            ]}
          />

          <Bar
            dataKey="value"
            fill="gold"
            barSize={45}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}