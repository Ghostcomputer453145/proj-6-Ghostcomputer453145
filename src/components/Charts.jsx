import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Label
} from "recharts";

export default function Charts({ data, theme }) {
  const lineData = data.map((d, i) => ({
    index: i + 1,
    value: theme === "booksTheme" ? d.year || 0 : i + 1
  }));
  const barData = data.map((d) => ({
    name: d.name.length > 12 ? d.name.slice(0, 12) + "…" : d.name,
    value: theme === "booksTheme" ? d.year || 0 : 1
  }));

  return (
    <div style={{
      background: "rgba(0,0,0,0.6)",
      padding: "20px",
      borderRadius: "12px",
      width: "100%",
      height: "100%"
    }}>
      <h3>Line Chart</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={lineData}
          margin={{ top: 20, right: 30, left: 30, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="index"
            tick={{ fontSize: 12 }}
            tickMargin={10}
          >
            <Label
              value="Index"
              position="insideBottom"
              offset={-30}
            />
          </XAxis>
          <YAxis
            tick={{ fontSize: 12 }}
            tickMargin={10}
          >
            <Label
              value="Value"
              angle={-90}
              position="insideLeft"
              offset={-10}
            />
          </YAxis>
          <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
          <Line type="monotone" dataKey="value" />
        </LineChart>
      </ResponsiveContainer>
      <h3 style={{ marginTop: "30px" }}>Bar Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={barData}
          margin={{ top: 20, right: 30, left: 30, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-25}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ fontSize: 11 }}
            tickMargin={15}
          >
            <Label
              value="Items"
              position="insideBottom"
              offset={-50}
            />
          </XAxis>
          <YAxis
            tick={{ fontSize: 12 }}
            tickMargin={-10}
          >
            <Label
              value="Count"
              angle={-90}
              position="insideLeft"
              offset={10}
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}