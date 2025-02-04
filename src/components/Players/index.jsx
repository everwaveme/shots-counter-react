import { useState } from "react";

function Players() {
  const [editing, setEditing] = useState({
    firstPlayer: false,
    secondPlayer: false,
  });
  const [playerName, setPlayerName] = useState({
    firstPlayer: 'Player 1',
    secondPlayer: 'Player 2',
  });

  return (
    <div className="container">
      <div className="players-wrap">
        <div className="players-info-box">
          {!editing.firstPlayer ? (
            <>
              <span className="players-name"
                onClick={() => {
                  setEditing({ ...editing, firstPlayer: true });
                }}
              >
                {playerName.firstPlayer}
              </span>
              <button className="players-edit-btn"
                onClick={() => {
                  setEditing({ ...editing, firstPlayer: true });
                }}
              >
              </button>
            </>
          ) : (
            <>
              <input className="players-input"
                placeholder="Enter Name"
                value={playerName.firstPlayer}
                onChange={(e) => {
                  setPlayerName({ ...playerName, firstPlayer: e.target.value });
                }}
              />
              <button className="players-save-btn"
                onClick={() => {
                  setEditing({ ...editing, firstPlayer: false });
                }}
              >
              </button>
            </>
          )}
        </div>

        <div className="players-vs-wrap">
          <div className="players-vs-icon">
          </div>
        </div>

        <div className="players-info-box">
          {!editing.secondPlayer ? (
            <>
              <span className="players-name"
                onClick={() => {
                  setEditing({ ...editing, secondPlayer: true });
                }}
              >
                {playerName.secondPlayer}
              </span>
              <button className="players-edit-btn"
                onClick={() => {
                  setEditing({ ...editing, secondPlayer: true });
                }}
              >
              </button>
            </>
          ) : (
            <>
              <input className="players-input"
                placeholder="Enter Name"
                value={playerName.secondPlayer}
                onChange={(e) => {
                  setPlayerName({ ...playerName, secondPlayer: e.target.value });
                }}
              />
              <button className="players-save-btn"
                onClick={() => {
                  setEditing({ ...editing, secondPlayer: false });
                }}
              >
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Players; 