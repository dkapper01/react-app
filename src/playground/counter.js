let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} className="button">
      +1
    </button>
    <button onClick={minusOne} className="">
      -1
    </button>
    <button onClick={reset} className="">
      Reset
    </button>
  </div>
);

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="button">
        +1
      </button>
      <button onClick={minusOne} className="">
        -1
      </button>
      <button onClick={reset} className="">
        Reset
      </button>
    </div>
  );
};

renderCounterApp();
