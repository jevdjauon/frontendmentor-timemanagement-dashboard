import { useState } from "react";
import "./App.scss";
import data from "./data/data.json";

const App = () => {
  console.log(data);

  const [activeMenu, setActiveMenu] = useState("weekly");

  const changeToDaily = () => {
    setActiveMenu("daily");
  };
  const changeToWeekly = () => {
    setActiveMenu("weekly");
  };
  const changeToMonthly = () => {
    setActiveMenu("monthly");
  };

  return (
    <div className="content">
      <div className="user">
        <div className="user-card">
          <div className="top">
            <div className="user-image">
              <img src="./src/images/user.png" alt="" />
            </div>
            <div className="user-info">
              <p>Report for</p>
              <h3>Jeremy Robson</h3>
            </div>
          </div>
          <div className="actions">
            {activeMenu === "daily" ? (
              <button onClick={changeToDaily} id="active">
                Daily
              </button>
            ) : (
              <button onClick={changeToDaily}>Daily</button>
            )}
            {activeMenu === "weekly" ? (
              <button onClick={changeToWeekly} id="active">
                Weekly
              </button>
            ) : (
              <button onClick={changeToWeekly}>Weekly</button>
            )}
            {activeMenu === "monthly" ? (
              <button onClick={changeToMonthly} id="active">
                Monthly
              </button>
            ) : (
              <button onClick={changeToMonthly}>Monthly</button>
            )}
          </div>
        </div>
      </div>
      <div className="main">
        {data.map(({ title, timeframes, id }) => (
          <div className="card" key={id}>
            <div className="icon" id={id}>
              <div className="card-content">
                <div className="left">
                  <h4>{title}</h4>
                  <p>
                    {activeMenu === "daily" ? timeframes.daily.current : null}
                    {activeMenu === "weekly" ? timeframes.weekly.current : null}
                    {activeMenu === "monthly"
                      ? timeframes.monthly.current
                      : null}
                    <span>hrs</span>
                  </p>
                </div>
                <div className="right">
                  <div className="menuButton">
                    <img src="./src/images/icon-ellipsis.svg" alt="" />
                  </div>
                  <p>
                    <span>Last Week - </span>
                    {activeMenu === "daily" ? timeframes.daily.previous : null}
                    {activeMenu === "weekly"
                      ? timeframes.weekly.previous
                      : null}
                    {activeMenu === "monthly"
                      ? timeframes.monthly.previous
                      : null}
                    <span>hrs</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
