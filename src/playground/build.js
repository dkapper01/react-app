class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: ['Thing One', 'Thing Two', 'Thing three']
    }
  }
  handleAddOption(option) {
    this.setState(prevState => {
      options: prevState.options.concat([option])
    })
  }
  render() {
    return (
      <div>
        <h1>React is cool</h1>
        <Options 
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );  
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();

    const optionInputName = e.target.elements.optionInputName.value.trim(); 

    console.log(optionInputName);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='optionInputName' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <h3>Options</h3>
        {this.props.options.map(option => (
          <Option 
            key={option}
            optionText={option}
          />
        ))}
        <Option />
      </div>
    );
  }
}

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
    </div>
  );
}

ReactDOM.render(<Facebook />, document.getElementById('app')); 