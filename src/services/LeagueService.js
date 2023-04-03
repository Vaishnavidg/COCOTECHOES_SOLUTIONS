/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 */
class LeagueService {    
    LeagueService(){
        this.access_token = "";
        this.matches = [];
    }

    async fetchData() {
        //1.token
        let resp;
//2.data fetch
        resp = await fetch("http://localhost:3001/api/v1/getAccessToken")
        let data = await resp.json()
        this.access_token = data.access_token
        console.log(this.access_token);

//3.setmatches
        resp = await 
        
        fetch("http://localhost:3001/api/v1/getAllMatches",{headers: {
            Authorization: `Bearer ${this.access_token}`
        }})
        let matchesData = await resp.json();
        this.setMatches(matchesData.matches)
    }
     
    /**
     * //*constructot: url, matches variable
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    setMatches(matches) {
        this.matches = matches
        //3. variable setmatches data store
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {

        return this.matches
    }

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {}
    
    /**
     * Asynchronic function to fetch the data from the server.
     */
    
}

export default LeagueService;