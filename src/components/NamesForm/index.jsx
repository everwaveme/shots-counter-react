import Players from "../Players";
import Stats from "../Stats";
import Footer from "../Footer";
import { useEffect, useState } from "react";

function NamesForm() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowMainComps, setIsShowMainComps] = useState(false);
  const [isNamesConfirmed, setIsNamesConfirmed] = useState(false);
  const [isConfirmError, setConfirmError] = useState(false);
  const [isChangeBtnName, setIsChangeBtnName] = useState(false);
  const [names, setNames] = useState({
    firstPlayer: '',
    secondPlayer: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsShowForm(true);
    });
  }, []);

  const handleConfirmCLick = () => {
    if (names.firstPlayer.trim() !== '' && names.secondPlayer.trim() !== '') {
      if (isConfirmError) {
        setConfirmError(false);
      }

      setTimeout(() => {
        setIsNamesConfirmed(true);;
      }, 1000);
      setIsChangeBtnName(true);
      setTimeout(() => {
        setIsShowForm(false);
      }, 1500);
      setTimeout(() => {
        setIsShowMainComps(true);
      }, 1700);
    } else {
      setConfirmError(true);
    }
  };

  return (
    <>
      {!isNamesConfirmed ? (
        <section className={!isShowForm ? "names-form" : "names-form names-form-show"}>
          <div className="container">
            <p className="names-form-title">
              Who will play?
            </p>

            <div className="names-form-wrap">
              <div className="names-form-box">
                <div className="names-form-input-wrap">
                  <input
                    type="text"
                    className="names-form-input"
                    placeholder="Player 1"
                    onChange={(e) => {
                      setNames({
                        ...names,
                        firstPlayer: e.target.value,
                      });
                    }}
                  />
                  <input
                    type="text"
                    className="names-form-input"
                    placeholder="Player 2"
                    onChange={(e) => {
                      setNames({
                        ...names,
                        secondPlayer: e.target.value,
                      });
                    }}
                  />
                </div>
                <button
                  className="names-form-btn"
                  onClick={handleConfirmCLick}
                >
                  {!isChangeBtnName ? "Confirm" : "Let's go! 😎"}
                </button>
                {isConfirmError ? (
                  <p className="name-form-error">
                    Please, enter players' names!
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className={!isShowMainComps ? "main-components-hide" : "main-components-show"}>
          <Players
            firstPlayerName={names.firstPlayer}
            secondPlayerName={names.secondPlayer}
          />
          <Stats />
          <Footer />
        </div>
      )}
    </>
  );
}

export default NamesForm;