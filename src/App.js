
import style from "./App.module.css";

function App() {
  return (
    <>
     <nav >
    <header className={style.Navbar}>
      <div className={style.logo}>
      <img src="Images/logo.svg" alt="logo" width={110}/>
      </div>
      <div className={style.topright}>
      <div className={style.schedule}>
      <img src="Images/schedule.png" alt=" " height={25}  />
      <span>Schedule</span>
      </div>
      <div className={style.leader}>
      <img src="Images/leaderboard.png" alt="" height={25}/><span>Leaderboard</span>
      </div>
      </div>
    
    </header>
    </nav>
    
    </>
  );
}

export default App;
