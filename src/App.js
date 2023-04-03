import style from "./App.module.css";
import Table from "@material-ui/core/Table";
import React from "react";
function App() {
  const SampleData = [
    {
      id: 1,
      Date: 1651744228685,
      stadium: "Maracanã",
      homeTeam: "Brazil",
      homeimage: `https://flagsapi.codeaid.io/Brazil.png`,
      awayTeam: "Serbia",
      awayimage: `https://flagsapi.codeaid.io/Serbia.png`,
      matchPlayed: true,
      homeTeamScore: 1,
      awayTeamScore: 0,
    },
    {
      id: 2,
      Date: 1651744228685,
      stadium: "Stade de Suisse",
      homeTeam: "Switzerland",
      homeimage: `https://flagsapi.codeaid.io/Switzerland.png`,
      awayTeam: "Serbia",
      awayimage: `https://flagsapi.codeaid.io/Serbia.png`,
      matchPlayed: true,
      homeTeamScore: 2,
      awayTeamScore: 2,
    },
    {
      Date: 1651744228685,
      stadium: "Stadion Rajko Mitic",
      homeTeam: "Serbia",
      homeimage: `https://flagsapi.codeaid.io/Serbia.png`,
      awayTeam: "Cameroon",
      awayimage: `https://flagsapi.codeaid.io/Cameroon.png`,
      matchPlayed: true,
      homeTeamScore: 0,
      awayTeamScore: 1,
    },
    {
      Date: 1651744228685,
      stadium: "Maracanã",
      homeTeam: "Brazil",
      homeimage: `https://flagsapi.codeaid.io/Brazil.png`,
      awayTeam: "Switzerland",
      awayimage: `https://flagsapi.codeaid.io/Switzerland.png`,
      matchPlayed: true,
      homeTeamScore: 3,
      awayTeamScore: 0,
    },
    {
      Date: 1651744228685,
      stadium: "Maracanã",
      homeTeam: "Brazil",
      homeimage: `https://flagsapi.codeaid.io/Brazil.png`,
      awayTeam: "Cameroon",
      matchPlayed: true,
      awayimage: `https://flagsapi.codeaid.io/Cameroon.png`,
      homeTeamScore: 4,
      awayTeamScore: 4,
    },
    {
      Date: 1651744228685,
      stadium: "Stade de Suisse",
      homeTeam: "Switzerland",
      homeimage: `https://flagsapi.codeaid.io/Switzerland.png`,
      awayTeam: "Cameroon",
      matchPlayed: true,
      awayimage: `https://flagsapi.codeaid.io/Cameroon.png`,
      homeTeamScore: 2,
      awayTeamScore: 2,
    },
  ];

  return (
    <>
      <nav>
        <header className={style.Navbar}>
          <div className={style.logo}>
            <img src="Images/logo.svg" alt="logo" width={110} />
          </div>
          <div className={style.topright}>
            <div className={style.schedule}>
              <img src="Images/schedule.png" alt=" " height={25} />
              <span>Schedule</span>
            </div>
            <div className={style.leader}>
              <img src="Images/leaderboard.png" alt="" height={25} />
              <span>Leaderboard</span>
            </div>
          </div>
        </header>
      </nav>

      <div className={style.legue}>
        <h4>League Schedule</h4>
      </div>
      <Table className={style.table} size="small">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Stadium</th>
            <th colSpan="3">Home Team</th>
            <th colSpan="3">Away Team</th>
          </tr>
        </thead>
        <tbody>
          {SampleData.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "even" : "odd"}>
              <td style={{ display: "flex", alignItems: "flex-end" }}>
                {`${new Date(row.Date).getDate()}.${
                  new Date(row.Date).getMonth() + 1
                }.${new Date(row.Date).getFullYear()}`}
                <br />
                {`${new Date(row.Date).getHours()}:${new Date(
                  row.Date
                ).getMinutes()}`}
              </td>
              <td>{row.stadium}</td>
              <td style={{ fontWeight: "bold" }}>{row.homeTeam}</td>
              <td>
                <img src={row.homeimage} alt=" " />
              </td>
              <td style={{ fontWeight: "bold" }}>
                {row.homeTeamScore}:{row.awayTeamScore}
              </td>

              <td>
                <img src={row.awayimage} alt=" " />
              </td>
              <td style={{ fontWeight: "bold" }}>{row.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
