import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">

        <form className="form">

          <h2> Tell us what you think about your rubber duck!</h2>

          <div className="form__group">
            <h3>What would you say are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input type='checkbox' name='bestFeatures' value='colour' />
                  <span> It's yellow!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' name='bestFeatures' value='sound' />
                  <span>  It squeaks!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' name='bestFeatures' value='logo' />
                  <span> it has a logo </span>
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' name='bestFeatures' value='size' />
                  <span> It's big!</span>
                </label>
              </li>
            </ul>
          </div>

          <h3>What would you say are the worst features of your rubber duck?</h3>
          <div className="form__group">
            <ul>
              <li>
                <label>
                  <input type='checkbox' name='worstFeatures' value='color ' />
                  <span> It's  yellow!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' name='worstFeatures' value='sound ' />
                  <span> It squeaks!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' name='worstFeatures' value='logo ' />
                  <span> It has a  logo!</span>
                </label>
              </li>
              <li>
                <label>
                  <input type='checkbox' name='worstFeatures' value='size' />
                  <span> It's big!</span>
                </label>
              </li>
            </ul>
          </div>
          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className='form__group radio'>
            <li>
              <input
                id='consistency-1'
                type='radio'
                name='consistency'
                value='1'
              />
              <label htmlFor='consistency-1'>1</label>
            </li>
            <li>
              <input
                id='consistency-2'
                type='radio'
                name='consistency'
                value='2'
              />
              <label htmlFor='consistency-2'>2</label>
            </li>
            <li>
              <input
                id='consistency-3'
                type='radio'
                name='consistency'
                value='3'
              />
              <label htmlFor='consistency-3'>3</label>
            </li>
            <li>
              <input
                id='consistency-4'
                type='radio'
                name='consistency'
                value='4'
              />
              <label htmlFor='consistency-4'>4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input
                id='colour-1'
                type='radio'
                name='colour'
                value='1'
              />
              <label htmlFor='colour-1'>1</label>
            </li>
            <li>
              <input
                id='colour-2'
                type='radio'
                name='colour'
                value='2'
              />
              <label htmlFor='colour-2'>2</label>
            </li>
            <li>
              <input
                id='colour-3'
                type='radio'
                name='colour'
                value='3'
              />
              <label htmlFor='colour-3'>3</label>
            </li>
            <li>
              <input
                id='colour-4'
                type='radio'
                name='colour'
                value='4'
              />
              <label htmlFor='colour-4'>4</label>
            </li>
          </ul>

        </form>

      </section>
    </main >
  );
}

export default Main;
