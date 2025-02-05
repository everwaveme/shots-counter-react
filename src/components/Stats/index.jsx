
function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-pot">
          <div className="stats-pot-first-player">
            <span className="stats-pot-first-player-info">
              0% (0/0)
            </span>
            <div className="stats-pot-first-player-btns">
              <button className="stats-potted-btn">
              </button>
              <button className="stats-missed-btn">
              </button>
            </div>
          </div>

          <div className="stats-pot-text">
            <span className="stats-pot-title">
              Pot Success
            </span>
          </div>

          <div className="stats-pot-second-player">
            <span className="stats-pot-second-player-info">
              0% (0/0)
            </span>
            <div className="stats-pot-second-player-btns">
              <button className="stats-potted-btn">
              </button>
              <button className="stats-missed-btn">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;