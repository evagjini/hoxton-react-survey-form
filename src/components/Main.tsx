import { useState } from "react"
import AnswersList from "./AnswersList";


type AnswerType = {
  review: string
  email: string
  username: string
  consistency: number
  colour: number
  logo: number
  bestFeautures: string[]
  worstFeautures: string[]
  timeSpent: string[]


}



function Main() {
  // State for the challenge #3
  //
  //
  // ignore for now
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<AnswerType[]>([])

  const initialForm: AnswerType = {
    review: '',
    email: '',
    username: '',
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeautures: ['colour'],
    worstFeautures: ['logo'],
    timeSpent: ['swimming']

  }


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();

            const bestFeatures = [
              ...document.querySelectorAll('input[name="bestFeatures"]:checked'),
            ].map((input) => input.value);



            const worstFeatures = [
              ...document.querySelectorAll('input[name="worstFeatures"]:checked'),
            ].map((input) => input.value);

            const timeSpent = [
              ...document.querySelectorAll('input[name="timeSpent"]:checked'),
            ].map((input) => input.value);




            const answer: AnswerType = {
              review: event.target.review.value,
              email: event.target.email.value,
              username: event.target.username.value,
              consistency: Number(event.target.consistency.value),
              colour: Number(event.target.colour.value),
              logo: Number(event.target.logo.value),
              bestFeautures: bestFeatures,
              worstFeautures: worstFeatures,
              timeSpent: timeSpent,
            };
            setAnswers([...answers, answer])

          }}
        >
          <h2> Tell us what you think about your rubber duck!</h2>

          <div className="form__group">
            <h3>
              What would you say are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="bestFeatures"
                    value="colour"
                    required
                  />
                  <span> It's yellow!</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="bestFeatures"
                    value="sound"

                  />
                  <span> It squeaks!</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="bestFeatures"
                    value="logo"
                    required
                  />
                  <span> it has a logo </span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="bestFeatures" value="size" />
                  <span> It's big!</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>
              What would you say are the worst features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="worstFeatures" value="color " />
                  <span> It's yellow!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="worstFeatures" value="sound " />
                  <span> It squeaks!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="worstFeatures" value="logo " />
                  <span> It has a logo!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="worstFeatures" value="size" />
                  <span> It's big!</span>
                </label>
              </li>
            </ul>
          </div>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="consistency-1"
                  type="radio"
                  name="consistency"
                  value="1"
                />
                <label htmlFor="consistency-1">1</label>
              </li>
              <li>
                <input
                  id="consistency-2"
                  type="radio"
                  name="consistency"
                  value="2"
                />
                <label htmlFor="consistency-2">2</label>
              </li>
              <li>
                <input
                  id="consistency-3"
                  type="radio"
                  name="consistency"
                  value="3"
                />
                <label htmlFor="consistency-3">3</label>
              </li>
              <li>
                <input
                  id="consistency-4"
                  type="radio"
                  name="consistency"
                  value="4"
                />
                <label htmlFor="consistency-4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul className="form__group radio">
              <li>
                <input id="colour-1" type="radio" name="colour" value="1" />
                <label htmlFor="colour-1">1</label>
              </li>
              <li>
                <input id="colour-2" type="radio" name="colour" value="2" />
                <label htmlFor="colour-2">2</label>
              </li>
              <li>
                <input id="colour-3" type="radio" name="colour" value="3" />
                <label htmlFor="colour-3">3</label>
              </li>
              <li>
                <input id="colour-4" type="radio" name="colour" value="4" />
                <label htmlFor="colour-4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="logo1" type="radio" name="logo" value="1" />
                <label htmlFor="logo1">1</label>
              </li>
              <li>
                <input id="logo2" type="radio" name="logo" value="2" />
                <label htmlFor="logo2">2</label>
              </li>
              <li>
                <input id="logo3" type="radio" name="logo" value="3" />
                <label htmlFor="logo3">3</label>
              </li>
              <li>
                <input id="logo4" type="radio" name="logo" value="4" />
                <label htmlFor="logo4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="spenttime" value="swim" />
                  <span> Swimming </span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="timeSpent" value="bath" />
                  <span> Bathing</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="timeSpent" value="chat" />
                  <span> Chatting</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="timeSpent" value="nothing" />
                  <span>I don't like to spend time with it</span>
                </label>
              </li>
            </ul>
          </div>
          <label>
            {" "}
            What else have you got to say about your rubber duck?
            <textarea></textarea>
          </label>
          <label>

            Put your name here (if you feel like it):
            <input type="text" name="username" ></input>
          </label>
          Leave us your email pretty please??
          <input type="email" name="email"></input>


          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
