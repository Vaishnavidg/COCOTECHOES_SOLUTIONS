import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import Table from "@material-ui/core/Table";
import LeagueService from "./services/LeagueService";

export default function TableScreen() {
  const Data = new LeagueService();
  const [matches, setMachesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Data.fetchData();
      setMachesData(Data.getMatches());
    };
    fetchData();
    console.log(fetchData);
  }, []);

  return (
    <>
      <Table className={style.table} size="small">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th className="stadium">Stadium</th>
            <th colSpan="3">Home Team</th>
            <th colSpan="3">Away Team</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((row) => (
            <tr key={row.matchDate}>
              <td className={row % 2 === 0 ? "even" : "odd"}>
                {`${new Date(row.matchDate).getDate()}.${
                  new Date(row.matchDate).getMonth() + 1
                }.${new Date(row.matchDate).getFullYear()}`}
                <br />
                {`${new Date(row.matchDate).getHours()}:${new Date(
                  row.matchDate
                ).getMinutes()}`}
              </td>
              <td>{row.stadium}</td>
              <td style={{ fontWeight: "bold" }}>{row.homeTeam}</td>
              <td>
                <img
                  src={`https://flagsapi.codeaid.io/${row.homeTeam}.png`}
                  alt=" "
                />
              </td>
              <td style={{ fontWeight: "bold" }}>
                {row.homeTeamScore}:{row.awayTeamScore}
              </td>

              <td>
                <img
                  src={`https://flagsapi.codeaid.io/${row.awayTeam}.png`}
                  alt=" "
                />
              </td>
              <td style={{ fontWeight: "bold" }}>{row.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* ------------------------------for 750*700 pixels -------------------------- */}
     
    </>
  );
}
