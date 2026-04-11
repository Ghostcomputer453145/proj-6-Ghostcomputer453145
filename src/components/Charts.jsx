import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Label,
  PieChart, Pie, Legend, Cell
} from "recharts";

export default function Charts({ data, theme }) {

  const isBooks = theme === "booksTheme";

  const COLORS = [
    "red", "blue", "yellow", "orange",
    "green", "violet", "gold", "silver"
  ];

  let booksBarData = [];
  let booksLineData = [];

  if (isBooks) {
    const counts = {};
    data.forEach(d => {
      if (!d.author) return;
      counts[d.author] = (counts[d.author] || 0) + 1;
    });

    booksBarData = Object.entries(counts)
      .map(([author, count]) => ({
        name: author,
        value: count
      }))
      .slice(0, 10);

    booksLineData = data.slice(0, 10).map((d, i) => ({
      index: i + 1,
      name: d.name,
      value: d.year || 0
    }));
  }

  let stateCounts = {};
  let breweryBarData = [];
  let breweryPieData = [];

  if (!isBooks) {
    data.forEach(d => {
      if (!d.state) return;
      stateCounts[d.state] = (stateCounts[d.state] || 0) + 1;
    });

    breweryBarData = Object.entries(stateCounts)
      .map(([state, count]) => ({
        name: state,
        value: count
      }))
      .slice(0, 10);

    breweryPieData = Object.entries(stateCounts)
      .map(([state, count]) => ({
        name: state,
        value: count
      }))
      .slice(0, 8);
  }

  return (
    <div style={{
      background: "rgba(0,0,0,0.85)",
      padding: "25px",
      borderRadius: "12px"
    }}>

      <h3>{isBooks ? "Publication Trend" : "Breweries by State (Pie)"}</h3>

      <ResponsiveContainer width="100%" height={360}>
        {isBooks ? (
          <LineChart
            data={booksLineData}
            margin={{ top: 20, right: 30, left: 60, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="index"
              tick={{ fill: "gold", fontSize: 14 }}
            >
              <Label
                value="Books (Sample Order)"
                position="bottom"
                offset={25}
              />
            </XAxis>

            <YAxis tick={{ fill: "gold" }} tickMargin={20} width={100}>
              <Label
                value="Year Published"
                angle={-90}
                position="left"
                offset={10}
              />
            </YAxis>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111",
                border: "2px solid gold",
                textShadow: "none",
                color: "gold"
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="gold"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        ) : (
          <PieChart>
              <Pie
                data={breweryPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="54%"
                outerRadius={120}
                labelLine={true}
                label={{fill: "gold", fontSize: 12, offsetRadius: 20
                }}
              >
                {breweryPieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111",
                border: "2px solid gold",
                textShadow: "none",
                color: "gold"
              }}
            />

            <Legend
              wrapperStyle={{
                paddingTop: "20px"
              }}
            />
          </PieChart>
        )}
      </ResponsiveContainer>


      <h3 style={{ marginTop: "40px" }}>
        {isBooks ? "Books by Author" : "Breweries by State"}
      </h3>

      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          data={isBooks ? booksBarData : breweryBarData}
          margin={{ top: 20, right: 30, left: 80, bottom: 120 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={120}
            tick={{ fill: "gold", fontSize: 12 }}
          >
            <Label
              value={isBooks ? "Authors" : "States"}
              position="bottom"
              offset={40}
            />
          </XAxis>

          <YAxis tick={{ fill: "gold" }} tickMargin={20} width={100}>
            <Label
              value={isBooks ? "Number of Books" : "Number of Breweries"}
              angle={-90}
              position="left"
              offset={10}
            />
          </YAxis>

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#111",
              border: "2px solid gold",
              textShadow: "none",
              color: "gold"
            }}
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