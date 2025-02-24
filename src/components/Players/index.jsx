function Players({ firstPlayerName, secondPlayerName }) {

  return (
    <section className="players">
      <div className="container">
        <div className="players-wrap">
          <div className="players-info-box">
            <span className="players-name">
              {firstPlayerName}
            </span>
          </div>

          <div className="players-vs-wrap">
            <div className="players-vs-icon">
            </div>
          </div>

          <div className="players-info-box">
            <span className="players-name">
              {secondPlayerName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Players; 