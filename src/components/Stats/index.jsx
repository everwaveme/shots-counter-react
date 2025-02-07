

function Stats() {
  return (
    <section className="stats">
      <div className="container">

        {/* POT SUCCESS  */}
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
              Pot Success
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

        {/* LONG POT SUCCESS */}
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
              Long Pot Success
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