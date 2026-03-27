import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ThemeSelector from "./ThemeSelector";
import { themes } from "../themes";

import binIPCheckerBg from "../images/binIPCheckerTheme.png";
import booksBg from "../images/booksTheme.png";
import breweryBg from "../images/breweryTheme.png";
import carAPIBg from "../images/carAPITheme.png";
import exerciseDBBg from "../images/exerciseDBTheme.png";
import googleMapPlacesBg from "../images/googleMapPlacesTheme.png";
import linkedinScraperBg from "../images/linkedinScraperTheme.png";
import mobilePhoneSpecsBg from "../images/mobilePhoneSpecsTheme.png";
import moviesTVShowsBg from "../images/moviesTVShowsTheme.png";
import realTimeLensBg from "../images/realTimeLensTheme.png";
import recipesBg from "../images/recipesTheme.png";
import rocketLeagueBg from "../images/rocketLeagueTheme.png";
import seekingAlphaBg from "../images/seekingAlphaTheme.png";
import spotifyDownloaderBg from "../images/spotifyDownloaderTheme.png";
import translateAIBg from "../images/translateAITheme.png";
import usaLotteryBg from "../images/usaLotteryTheme.png";
import weatherBg from "../images/weatherTheme.png";

import { fetchThemeData } from "../services/api";

const themeBackgrounds = {
  binIPCheckerTheme: binIPCheckerBg,
  booksTheme: booksBg,
  breweryTheme: breweryBg,
  carAPITheme: carAPIBg,
  exerciseDBTheme: exerciseDBBg,
  googleMapPlacesTheme: googleMapPlacesBg,
  linkedinScraperTheme: linkedinScraperBg,
  mobilePhoneSpecsTheme: mobilePhoneSpecsBg,
  moviesTVShowsTheme: moviesTVShowsBg,
  realTimeLensTheme: realTimeLensBg,
  recipesTheme: recipesBg,
  rocketLeagueTheme: rocketLeagueBg,
  seekingAlphaTheme: seekingAlphaBg,
  spotifyDownloaderTheme: spotifyDownloaderBg,
  translateAITheme: translateAIBg,
  usaLotteryTheme: usaLotteryBg,
  weatherTheme: weatherBg,
};

export default function Dashboard() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedTheme) return;

    const loadData = async () => {
      setLoading(true);
      const themeObj = themes[selectedTheme];
      try {
        const { data, stats } = await fetchThemeData(themeObj);
        setData(data);
        setStats(stats);
      } catch (error) {
        setData([]);
        setStats({});
      }
      setSearch("");
      setFilter("all");
      setLoading(false);
    };

    loadData();
  }, [selectedTheme]);


  useEffect(() => {
    if (selectedTheme) {
      const bgUrl = themeBackgrounds[selectedTheme];
      document.body.style.backgroundImage = `url(${bgUrl})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.transition = "all 0.5s ease";
    } else {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "#111";
    }

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [selectedTheme]);

  const filteredData = data.filter((item) => {
    const name = item.name || "";
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.field2 === filter;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = ["all", ...new Set(data.map((d) => d.field2).filter(Boolean))];

  return (
    <main>
      <ThemeSelector theme={selectedTheme} setTheme={setSelectedTheme} />

      {selectedTheme && (
        <>
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          <Filters options={filterOptions} onSelect={setFilter} />
        </>
      )}

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>Loading data...</p>
      ) : (
        selectedTheme && (
          <div className="cards">
            {stats && Object.keys(stats).length > 0 &&
              Object.entries(stats).map(([key, value]) => (
                <Card key={key} title={key} value={value} />
              ))
            }
            {filteredData.map((item) => (
              <Card key={item.id} title={item.name} value={`${item.field1} | ${item.field2}`} />
            ))}
          </div>
        )
      )}
    </main>
  );
}