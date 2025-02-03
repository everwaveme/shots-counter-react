import { useState } from "react";

function Players() {
  const [editingFirstPlayer, setEditingFirstPlayer] = useState(false);
  const [editingSecondPlayer, setEditingSecondPlayer] = useState(false);
  const [firstPlayerName, setFirstPlayerName] = useState('Player 1');
  const [secondPlayerName, setSecondPlayerName] = useState('Player 2');

  //уменьшить количество стэйтов добавив объекты

  return (
    <div className="container">
      <div className="players-wrap">
        <div className="players-info-box">
          {!editingFirstPlayer ? (
            <>
              <span className="players-name"
                onClick={() => {
                  setEditingFirstPlayer(true);
                }}
              >
                {firstPlayerName}
              </span>
              <button className="players-edit-btn"
                onClick={() => {
                  setEditingFirstPlayer(true);
                }}
              >
              </button>
            </>
          ) : (
            <>
              <input className="players-input"
                placeholder="Enter Name"
                value={firstPlayerName}
                onChange={(e) => {
                  setFirstPlayerName(e.target.value);
                }}
              />
              <button className="players-save-btn"
                onClick={() => {
                  setEditingFirstPlayer(false);
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
          {!editingSecondPlayer ? (
            <>
              <span className="players-name"
                onClick={() => {
                  setEditingSecondPlayer(true);
                }}
              >
                {secondPlayerName}
              </span>
              <button className="players-edit-btn"
                onClick={() => {
                  setEditingSecondPlayer(true);
                }}
              >
              </button>
            </>
          ) : (
            <>
              <input className="players-input"
                placeholder="Enter Name"
                value={secondPlayerName}
                onChange={(e) => {
                  setSecondPlayerName(e.target.value);
                }}
              />
              <button className="players-save-btn"
                onClick={() => {
                  setEditingSecondPlayer(false);
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