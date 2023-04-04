import React, { useEffect, useState } from "react";
import NavScreen from "./NavScreen";
import LeagueService from "./services/LeagueService";
import style from "./App.module.css";
import Table from "@material-ui/core/Table";
import Footer from "./Footer";

const Leaderboard = () => {
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

  const countries = [
    ...new Set(matches.flatMap((match) => [match.homeTeam, match.awayTeam])),
  ];
  console.log(countries);

  //for counting the number of matches
  function countMatchesPlayedByTeam(teamName) {
    let count = 0;
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      if (
        match.matchPlayed &&
        (match.homeTeam === teamName || match.awayTeam === teamName)
      ) {
        count++;
      }
    }
    return count;
  }

  // number of goals
  function calculateGoals(matches, team) {
    let goals = 0;

    matches.forEach((match) => {
      if (match.homeTeam === team) {
        goals += match.homeTeamScore;
      } else if (match.awayTeam === team) {
        goals += match.awayTeamScore;
      }
    });

    return goals;
  }

  // for the goal against function
  function calculateGoalsConceded(matches, teamName) {
    let goalsConceded = 0;
    for (let match of matches) {
      if (match.homeTeam === teamName) {
        goalsConceded += match.awayTeamScore;
      } else if (match.awayTeam === teamName) {
        goalsConceded += match.homeTeamScore;
      }
    }
    return goalsConceded;
  }
  // function to calculate the number of points
  function calculatePoints(matches, teamName) {
    let points = 0;

    // Iterate over each match
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];

      // Check if the team played in the match
      if (match.homeTeam === teamName || match.awayTeam === teamName) {
        // Determine if the team won, lost or drew the match
        if (
          match.homeTeam === teamName &&
          match.homeTeamScore > match.awayTeamScore
        ) {
          points += 3; // The team won the match
        } else if (
          match.awayTeam === teamName &&
          match.awayTeamScore > match.homeTeamScore
        ) {
          points += 3; // The team won the match
        } else if (match.homeTeamScore === match.awayTeamScore) {
          points += 1; // The match ended in a draw
        }
      }
    }

    return points;
  }

  return (
    <>
      <NavScreen />
      <div className={style.legue}>
        <h4>League Standings</h4>
      </div>

      <Table className={style.table} size="small">
        <thead>
          <tr>
            <th colSpan="2">Team Name</th>
            <th>MP</th>
            <th>GF</th>
            <th>GA</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {countries
            .sort(
              (a, b) =>
                calculatePoints(matches, b) - calculatePoints(matches, a)
            )
            .map((country) => (
              <tr key={country}>
                <td>
                  <img
                    src={`https://flagsapi.codeaid.io/${country}.png`}
                    alt=" "
                  />
                </td>
                <td style={{ fontWeight: "bold" }}>{country}</td>
                <td>{countMatchesPlayedByTeam(country)}</td>
                <td>{calculateGoals(matches, country)}</td>
                <td>{calculateGoalsConceded(matches, country)}</td>
                <td>{calculatePoints(matches, country)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Footer/>
    </>
  );
};

export default Leaderboard;
