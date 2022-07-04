import styled, { keyframes } from 'styled-components';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './firewurks.css';

const NumberButton = styled.button`
  background-color: ${(props) => (props.guessed ? '#b35c3e' : '#ff8359')};
  color: ${(props) => (props.guessed ? '#b3b3b3' : '#fff')};
  border-radius: 60px;
  font-size: 1rem;
  padding: 20px 40px;
  margin-top: 3%;
  border-width: 0px;
  cursor: pointer;
  margin-left: 2%;

  :hover {
    background-color: #994f35;
    color: #999;
  }
`;

const PlayAgainButton = styled.button`
  background-color: #ff8359;
  color: #fff;
  border-radius: 60px;
  font-size: 1rem;
  padding: 20px 40px;
  margin-top: 3%;
  border-width: 0px;
  cursor: pointer;
  margin-left: 20%;
  align-items: center;
  margin-right: 20%;

  :hover {
    background-color: #994f35;
    color: #999;
  }
`;

const GameText = styled.h1`
  font-size: 1rem;
  margin-top: 10%;
`;

const QueryTextCorrect = styled.h1`
  font-size: 100%;
  margin-top: 3%;
  color: #21a600;
`;

const QueryTextIncorrect = styled.h1`
  font-size: 100%;
  margin-top: 3%;
  color: #bb0000;
`;

const QueryTextStarting = styled.h1`
  font-size: 100%;
  margin-top: 4.35%;
  color: #fff;
`;

function generateNumber() {
  return Math.ceil(Math.random() * 10);
}

function Play() {

  const [guesses, setGuesses] = useState([]);
  const [lastGuess, setLastGuess] = useState();

  var gusseslen = guesses.length;

  const [answer] = useState(generateNumber);

  const navigate = useNavigate();

  const soundEffectRef = useRef();

  const fireworksEffectRef = useRef();

  const handleClick = useCallback(
    (guess) => {
      
      console.log('you guessed', guess);
      setGuesses((lastValue) => {
        lastValue.push(guess);
        return lastValue;
      });
      setLastGuess(guess);

      if (guess === answer){
        soundEffectRef.current.play()
      }
      console.log(gusseslen + " DEBUG")
      if (guess === answer && gusseslen < 1){
        fireworksEffectRef.current.play()
      }
    },
    [navigate, gusseslen, answer]
  );
  const handleClickReload = useCallback(() => {
    navigate(window.location.reload());
  }, [navigate]);

  
  
  console.log('answer', answer);
  console.log('guess', lastGuess);
  console.log('allguesses', guesses);

  const rightAnswer = answer === lastGuess;

  

  return (
    <div className="App">
      <audio src="./sound.wav" ref={soundEffectRef} />
      <audio src="./fireworks!!!.wav" loop ref={fireworksEffectRef} />
      <header className="App-header">
        <GameText>
          I'm thinking of a number 1-10. Take your guess at what it is.
        </GameText>

        {gusseslen === 0 && (
          <>
            <QueryTextStarting>{'Start taking guesses!'}</QueryTextStarting>
            <QueryTextStarting>{'Guesses: 0'}</QueryTextStarting>
          </>
        )}

        {lastGuess && (
          <p>
            {rightAnswer ? (
              <>
                <QueryTextCorrect>
                  {answer + "! That's correct!"}
                </QueryTextCorrect>
                <QueryTextCorrect>
                  {'You got that in ' + gusseslen + ' guesses!'}
                </QueryTextCorrect>
                {gusseslen === 1 && (
                  <div className="pyro">
                    <div className="before"></div>
                    <div className="after"></div>
                  </div>
                )}
                
              </>
            ) : (
              <>
                <QueryTextIncorrect>
                  {"Sorry, that's incorrect. Try again!"}
                </QueryTextIncorrect>
                <QueryTextIncorrect>
                  {'Guesses: ' + gusseslen}
                </QueryTextIncorrect>
              </>
            )}
          </p>
        )}
        <NumberButton
          guessed={guesses.indexOf(1) > -1}
          onClick={() => handleClick(1)}
        >
          1
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(2) > -1}
          onClick={() => handleClick(2)}
        >
          2
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(3) > -1}
          onClick={() => handleClick(3)}
        >
          3
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(4) > -1}
          onClick={() => handleClick(4)}
        >
          4
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(5) > -1}
          onClick={() => handleClick(5)}
        >
          5
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(6) > -1}
          onClick={() => handleClick(6)}
        >
          6
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(7) > -1}
          onClick={() => handleClick(7)}
        >
          7
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(8) > -1}
          onClick={() => handleClick(8)}
        >
          8
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(9) > -1}
          onClick={() => handleClick(9)}
        >
          9
        </NumberButton>
        <NumberButton
          guessed={guesses.indexOf(10) > -1}
          onClick={() => handleClick(10)}
        >
          10
        </NumberButton>
        <PlayAgainButton onClick={() => handleClickReload()}>
          Play Again
        </PlayAgainButton>
      </header>
    </div>
  );
}

export default Play;

