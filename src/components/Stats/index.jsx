import { useState, useEffect } from "react";

function Stats() {
  //First player stats state
  const [firstPlayerStats, setFirstPlayerStats] = useState({
    potSuccess: {
      potted: 0,
      allShots: 0,
    },
    longPotSuccess: {
      potted: 0,
      allShots: 0,
    }
  });

  const [firstPlayerPer, setFirstPlayerPer] = useState({
    potSuccessPer: 0,
    longPotSuccessPer: 0,
  });

  useEffect(() => {
    setFirstPlayerPer({
      ...firstPlayerPer,
      potSuccessPer: firstPlayerStats.potSuccess.potted / firstPlayerStats.potSuccess.allShots * 100 || 0,
      longPotSuccessPer: firstPlayerStats.longPotSuccess.potted / firstPlayerStats.longPotSuccess.allShots * 100 || 0,
    });
  }, [firstPlayerStats]);

  //Second player stats state
  const [secondPlayerStats, setSecondPlayerStats] = useState({
    potSuccess: {
      potted: 0,
      allShots: 0,
    },
    longPotSuccess: {
      potted: 0,
      allShots: 0,
    }
  });

  const [secondPlayerPer, setSecondPlayerPer] = useState({
    potSuccessPer: 0,
    longPotSuccessPer: 0,
  });

  useEffect(() => {
    setSecondPlayerPer({
      ...secondPlayerPer,
      potSuccessPer: secondPlayerStats.potSuccess.potted / secondPlayerStats.potSuccess.allShots * 100 || 0,
      longPotSuccessPer: secondPlayerStats.longPotSuccess.potted / secondPlayerStats.longPotSuccess.allShots * 100 || 0,
    });
  }, [secondPlayerStats])


  return (
    <section className="stats">
      <div className="container">

        {/* POT SUCCESS  */}
        <div className="stats-card">
          <div className="stats-player">
            <span className="stats-player-info">
              {firstPlayerPer.potSuccessPer.toFixed(2)}%
              ({firstPlayerStats.potSuccess.potted}/{firstPlayerStats.potSuccess.allShots})
            </span>
            <div className="stats-player-btns">
              <button
                className="stats-potted-btn"
                onClick={() => {
                  setFirstPlayerStats({
                    ...firstPlayerStats,
                    potSuccess: {
                      ...firstPlayerStats.potSuccess,
                      potted: firstPlayerStats.potSuccess.potted + 1,
                      allShots: firstPlayerStats.potSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
              <button
                className="stats-missed-btn"
                onClick={() => {
                  setFirstPlayerStats({
                    ...firstPlayerStats,
                    potSuccess: {
                      ...firstPlayerStats.potSuccess,
                      allShots: firstPlayerStats.potSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
            </div>
          </div>

          <div className="stats-text">
            <span className="stats-title">
              Pot Success
            </span>
          </div>

          <div className="stats-player">
            <span className="stats-player-info">
              {secondPlayerPer.potSuccessPer.toFixed(2)}%
              ({secondPlayerStats.potSuccess.potted}/{secondPlayerStats.potSuccess.allShots})
            </span>
            <div className="stats-player-btns">
              <button
                className="stats-potted-btn"
                onClick={() => {
                  setSecondPlayerStats({
                    ...secondPlayerStats,
                    potSuccess: {
                      ...secondPlayerStats.potSuccess,
                      potted: secondPlayerStats.potSuccess.potted + 1,
                      allShots: secondPlayerStats.potSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
              <button
                className="stats-missed-btn"
                onClick={() => {
                  setSecondPlayerStats({
                    ...secondPlayerStats,
                    potSuccess: {
                      ...secondPlayerStats.potSuccess,
                      allShots: secondPlayerStats.potSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
            </div>
          </div>
        </div>

        {/* LONG POT SUCCESS */}
        <div className="stats-card">
          <div className="stats-player">
            <span className="stats-player-info">
              {firstPlayerPer.longPotSuccessPer.toFixed(2)}%
              ({firstPlayerStats.longPotSuccess.potted}/{firstPlayerStats.longPotSuccess.allShots})
            </span>
            <div className="stats-player-btns">
              <button className="stats-potted-btn"
                onClick={() => {
                  setFirstPlayerStats({
                    ...firstPlayerStats,
                    potSuccess: {
                      ...firstPlayerStats.potSuccess,
                      potted: firstPlayerStats.potSuccess.potted + 1,
                      allShots: firstPlayerStats.potSuccess.allShots + 1,
                    },
                    longPotSuccess: {
                      ...firstPlayerStats.longPotSuccess,
                      potted: firstPlayerStats.longPotSuccess.potted + 1,
                      allShots: firstPlayerStats.longPotSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
              <button className="stats-missed-btn"
                onClick={() => {
                  setFirstPlayerStats({
                    ...firstPlayerStats,
                    potSuccess: {
                      ...firstPlayerStats.potSuccess,
                      allShots: firstPlayerStats.potSuccess.allShots + 1,
                    },
                    longPotSuccess: {
                      ...firstPlayerStats.longPotSuccess,
                      allShots: firstPlayerStats.longPotSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
            </div>
          </div>

          <div className="stats-text">
            <span className="stats-title">
              Long Pot Success
            </span>
          </div>

          <div className="stats-player">
            <span className="stats-player-info">
              {secondPlayerPer.longPotSuccessPer.toFixed(2)}%
              ({secondPlayerStats.longPotSuccess.potted}/{secondPlayerStats.longPotSuccess.allShots})
            </span>
            <div className="stats-player-btns">
              <button className="stats-potted-btn"
                onClick={() => {
                  setSecondPlayerStats({
                    ...secondPlayerStats,
                    potSuccess: {
                      ...secondPlayerStats.potSuccess,
                      potted: secondPlayerStats.potSuccess.potted + 1,
                      allShots: secondPlayerStats.potSuccess.allShots + 1,
                    },
                    longPotSuccess: {
                      ...secondPlayerStats.longPotSuccess,
                      potted: secondPlayerStats.longPotSuccess.potted + 1,
                      allShots: secondPlayerStats.longPotSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
              <button className="stats-missed-btn"
                onClick={() => {
                  setSecondPlayerStats({
                    ...secondPlayerStats,
                    potSuccess: {
                      ...secondPlayerStats.potSuccess,
                      allShots: secondPlayerStats.potSuccess.allShots + 1,
                    },
                    longPotSuccess: {
                      ...secondPlayerStats.longPotSuccess,
                      allShots: secondPlayerStats.longPotSuccess.allShots + 1,
                    }
                  })
                }}
              >
              </button>
            </div>
          </div>
        </div>

        {/* REST POT SUCCESS */}
        <div className="stats-card">
          <div className="stats-player">
            <span className="stats-player-info">
              0% (0/0)
            </span>
            <div className="stats-player-btns">
              <button className="stats-potted-btn">
              </button>
              <button className="stats-missed-btn">
              </button>
            </div>
          </div>

          <div className="stats-text">
            <span className="stats-title">
              Rest Pot Success
            </span>
          </div>

          <div className="stats-player">
            <span className="stats-player-info">
              0% (0/0)
            </span>
            <div className="stats-player-btns">
              <button className="stats-potted-btn">
              </button>
              <button className="stats-missed-btn">
              </button>
            </div>
          </div>
        </div>

        {/* SAFETY SUCCESS */}
        <div className="stats-card">
          <div className="stats-player">
            <span className="stats-player-info">
              0% (0/0)
            </span>
            <div className="stats-player-btns">
              <button className="stats-potted-btn">
              </button>
              <button className="stats-missed-btn">
              </button>
            </div>
          </div>

          <div className="stats-text">
            <span className="stats-title">
              Safety Success
            </span>
          </div>

          <div className="stats-player">
            <span className="stats-player-info">
              0% (0/0)
            </span>
            <div className="stats-player-btns">
              <button className="stats-potted-btn">
              </button>
              <button className="stats-missed-btn">
              </button>
            </div>
          </div>
        </div>

        {/* ALL POTTED BALLS */}
        <div className="stats-card">
          <div className="stats-player">
            <span className="stats-player-info all-potted-balls-info">
              0
            </span>
          </div>

          <div className="stats-text">
            <span className="stats-title">
              All Potted Balls
            </span>
          </div>

          <div className="stats-player">
            <span className="stats-player-info all-potted-balls-info">
              0
            </span>
          </div>
        </div>

        {/* RESET BUTTONS */}
        <div className="stats-card">
          <div className="stats-reset-btn-wrap">
            <button className="stats-reset-btn">
              Reset
            </button>
          </div>

          <div className="stats-reset-btn-wrap">
            <button className="stats-reset-all-btn">
              Reset All
            </button>
          </div>

          <div className="stats-reset-btn-wrap">
            <button className="stats-reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;