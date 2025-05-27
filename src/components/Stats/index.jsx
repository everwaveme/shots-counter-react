import { useState, useEffect } from "react";
import useHistory from "../../hooks/useHistory";

function Stats() {
  const [stats, setStats, undo, redo, history, index] = useHistory({
    firstPlayer: {
      potSuccess: {
        potted: 0,
        allShots: 0,
      },
      longPotSuccess: {
        potted: 0,
        allShots: 0,
      },
      restPotSuccess: {
        potted: 0,
        allShots: 0,
      },
      safetySuccess: {
        success: 0,
        allShots: 0,
      }
    },

    secondPlayer: {
      potSuccess: {
        potted: 0,
        allShots: 0,
      },
      longPotSuccess: {
        potted: 0,
        allShots: 0,
      },
      restPotSuccess: {
        potted: 0,
        allShots: 0,
      },
      safetySuccess: {
        success: 0,
        allShots: 0,
      }
    }
  });

  const [percentage, setPercentage] = useState({
    firstPlayerPer: {
      potSuccessPer: 0,
      longPotSuccessPer: 0,
      restPotSuccessPer: 0,
      safetySuccessPer: 0,
    },
    secondPlayerPer: {
      potSuccessPer: 0,
      longPotSuccessPer: 0,
      restPotSuccessPer: 0,
      safetySuccessPer: 0,
    }
  });

  useEffect(() => {
    setPercentage({
      ...percentage,
      firstPlayerPer: {
        potSuccessPer: stats.firstPlayer.potSuccess.potted / stats.firstPlayer.potSuccess.allShots * 100 || 0,
        longPotSuccessPer: stats.firstPlayer.longPotSuccess.potted / stats.firstPlayer.longPotSuccess.allShots * 100 || 0,
        restPotSuccessPer: stats.firstPlayer.restPotSuccess.potted / stats.firstPlayer.restPotSuccess.allShots * 100 || 0,
        safetySuccessPer: stats.firstPlayer.safetySuccess.success / stats.firstPlayer.safetySuccess.allShots * 100 || 0,
      },
      secondPlayerPer: {
        potSuccessPer: stats.secondPlayer.potSuccess.potted / stats.secondPlayer.potSuccess.allShots * 100 || 0,
        longPotSuccessPer: stats.secondPlayer.longPotSuccess.potted / stats.secondPlayer.longPotSuccess.allShots * 100 || 0,
        restPotSuccessPer: stats.secondPlayer.restPotSuccess.potted / stats.secondPlayer.restPotSuccess.allShots * 100 || 0,
        safetySuccessPer: stats.secondPlayer.safetySuccess.success / stats.secondPlayer.safetySuccess.allShots * 100 || 0,
      }
    });
  }, [stats]);

  const clearStats = () => {
    setStats(history[0]);
  };

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-table">

          {/* POT SUCCESS  */}
          <div className="stats-field">
            <div className="stats-player">
              <span className="stats-player-info">
                {percentage.firstPlayerPer.potSuccessPer.toFixed(2)}%
                ({stats.firstPlayer.potSuccess.potted}/{stats.firstPlayer.potSuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button
                  className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        potSuccess: {
                          ...stats.firstPlayer.potSuccess,
                          potted: stats.firstPlayer.potSuccess.potted + 1,
                          allShots: stats.firstPlayer.potSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button
                  className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        potSuccess: {
                          ...stats.firstPlayer.potSuccess,
                          allShots: stats.firstPlayer.potSuccess.allShots + 1,
                        }
                      }
                    });
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
                {percentage.secondPlayerPer.potSuccessPer.toFixed(2)}%
                ({stats.secondPlayer.potSuccess.potted}/{stats.secondPlayer.potSuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button
                  className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        potSuccess: {
                          ...stats.secondPlayer.potSuccess,
                          potted: stats.secondPlayer.potSuccess.potted + 1,
                          allShots: stats.secondPlayer.potSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button
                  className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        potSuccess: {
                          ...stats.secondPlayer.potSuccess,
                          allShots: stats.secondPlayer.potSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
              </div>
            </div>
          </div>

          {/* LONG POT SUCCESS */}
          <div className="stats-field">
            <div className="stats-player">
              <span className="stats-player-info">
                {percentage.firstPlayerPer.longPotSuccessPer.toFixed(2)}%
                ({stats.firstPlayer.longPotSuccess.potted}/{stats.firstPlayer.longPotSuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        potSuccess: {
                          ...stats.firstPlayer.potSuccess,
                          potted: stats.firstPlayer.potSuccess.potted + 1,
                          allShots: stats.firstPlayer.potSuccess.allShots + 1,
                        },
                        longPotSuccess: {
                          ...stats.firstPlayer.longPotSuccess,
                          potted: stats.firstPlayer.longPotSuccess.potted + 1,
                          allShots: stats.firstPlayer.longPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        potSuccess: {
                          ...stats.firstPlayer.potSuccess,
                          allShots: stats.firstPlayer.potSuccess.allShots + 1,
                        },
                        longPotSuccess: {
                          ...stats.firstPlayer.longPotSuccess,
                          allShots: stats.firstPlayer.longPotSuccess.allShots + 1,
                        }
                      }
                    });
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
                {percentage.secondPlayerPer.longPotSuccessPer.toFixed(2)}%
                ({stats.secondPlayer.longPotSuccess.potted}/{stats.secondPlayer.longPotSuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        potSuccess: {
                          ...stats.secondPlayer.potSuccess,
                          potted: stats.secondPlayer.potSuccess.potted + 1,
                          allShots: stats.secondPlayer.potSuccess.allShots + 1,
                        },
                        longPotSuccess: {
                          ...stats.secondPlayer.longPotSuccess,
                          potted: stats.secondPlayer.longPotSuccess.potted + 1,
                          allShots: stats.secondPlayer.longPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        potSuccess: {
                          ...stats.secondPlayer.potSuccess,
                          allShots: stats.secondPlayer.potSuccess.allShots + 1,
                        },
                        longPotSuccess: {
                          ...stats.secondPlayer.longPotSuccess,
                          allShots: stats.secondPlayer.longPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
              </div>
            </div>
          </div>

          {/* REST POT SUCCESS */}
          <div className="stats-field">
            <div className="stats-player">
              <span className="stats-player-info">
                {percentage.firstPlayerPer.restPotSuccessPer.toFixed(2)}%
                ({stats.firstPlayer.restPotSuccess.potted}/{stats.firstPlayer.restPotSuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        potSuccess: {
                          ...stats.firstPlayer.potSuccess,
                          potted: stats.firstPlayer.potSuccess.potted + 1,
                          allShots: stats.firstPlayer.potSuccess.allShots + 1,
                        },
                        restPotSuccess: {
                          ...stats.firstPlayer.restPotSuccess,
                          potted: stats.firstPlayer.restPotSuccess.potted + 1,
                          allShots: stats.firstPlayer.restPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        potSuccess: {
                          ...stats.firstPlayer.potSuccess,
                          allShots: stats.firstPlayer.potSuccess.allShots + 1,
                        },
                        restPotSuccess: {
                          ...stats.firstPlayer.restPotSuccess,
                          allShots: stats.firstPlayer.restPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
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
                {percentage.secondPlayerPer.restPotSuccessPer.toFixed(2)}%
                ({stats.secondPlayer.restPotSuccess.potted}/{stats.secondPlayer.restPotSuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        potSuccess: {
                          ...stats.secondPlayer.potSuccess,
                          potted: stats.secondPlayer.potSuccess.potted + 1,
                          allShots: stats.secondPlayer.potSuccess.allShots + 1,
                        },
                        restPotSuccess: {
                          ...stats.secondPlayer.restPotSuccess,
                          potted: stats.secondPlayer.restPotSuccess.potted + 1,
                          allShots: stats.secondPlayer.restPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        potSuccess: {
                          ...stats.secondPlayer.potSuccess,
                          allShots: stats.secondPlayer.potSuccess.allShots + 1,
                        },
                        restPotSuccess: {
                          ...stats.secondPlayer.restPotSuccess,
                          allShots: stats.secondPlayer.restPotSuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
              </div>
            </div>
          </div>

          {/* SAFETY SUCCESS */}
          <div className="stats-field">
            <div className="stats-player">
              <span className="stats-player-info">
                {percentage.firstPlayerPer.safetySuccessPer.toFixed(2)}%
                ({stats.firstPlayer.safetySuccess.success}/{stats.firstPlayer.safetySuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        safetySuccess: {
                          ...stats.firstPlayer.safetySuccess,
                          success: stats.firstPlayer.safetySuccess.success + 1,
                          allShots: stats.firstPlayer.safetySuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      firstPlayer: {
                        ...stats.firstPlayer,
                        safetySuccess: {
                          ...stats.firstPlayer.safetySuccess,
                          allShots: stats.firstPlayer.safetySuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
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
                {percentage.secondPlayerPer.safetySuccessPer.toFixed(2)}%
                ({stats.secondPlayer.safetySuccess.success}/{stats.secondPlayer.safetySuccess.allShots})
              </span>
              <div className="stats-player-btns">
                <button className="stats-potted-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        safetySuccess: {
                          ...stats.secondPlayer.safetySuccess,
                          success: stats.secondPlayer.safetySuccess.success + 1,
                          allShots: stats.secondPlayer.safetySuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
                <button className="stats-missed-btn"
                  onClick={() => {
                    setStats({
                      ...stats,
                      secondPlayer: {
                        ...stats.secondPlayer,
                        safetySuccess: {
                          ...stats.secondPlayer.safetySuccess,
                          allShots: stats.secondPlayer.safetySuccess.allShots + 1,
                        }
                      }
                    });
                  }}
                >
                </button>
              </div>
            </div>
          </div>

          {/* ALL POTTED BALLS */}
          <div className="stats-field">
            <div className="stats-player">
              <span className="stats-player-info all-potted-balls-info">
                {stats.firstPlayer.potSuccess.potted}
              </span>
            </div>

            <div className="stats-text">
              <span className="stats-title">
                All Potted Balls
              </span>
            </div>

            <div className="stats-player">
              <span className="stats-player-info all-potted-balls-info">
                {stats.secondPlayer.potSuccess.potted}
              </span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="stats-btns-wrap">
            <div className="stats-undo-btn-wrap">
              <button className="stats-undo-btn"
                onClick={undo}
              >
              </button>
            </div>

            <div className="stats-clear-btn-wrap">
              <button className="stats-clear-btn"
                onClick={clearStats}
              >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;