class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.toggleBtn = this.toggleBtn.bind(this); 

    this.state = {
      visibiliy: false
    }
  }

  toggleBtn() {
    this.setState(prevState => {
      return {
        visibiliy: !prevState.visibiliy
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Go toggle</h1>
        <button onClick={this.toggleBtn}> 
          {this.state.visibiliy ? 'Show Text' : 'Hide Text'}
        </button>
        {
          this.state.visibiliy && 'This is really imporent messages'
        }
      </div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById('app')); 















// let visibiliy = false;

// const toggleGo = () => {
//   visibiliy = !visibiliy;
//   console.log(visibiliy);
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>The App</h1>

//       <button onClick={toggleGo}>
//         {visibiliy ? "hide text" : "show text"}
//       </button>
//       {visibiliy && (
//         <div>
//           <p>This so realy importent text</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
