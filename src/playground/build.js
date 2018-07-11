class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      options: ["Thing One", "Thing Two", "Thing Three"]
    };
  }

handleAddOption(option) {
  console.log(option + "test");
  this.setState(prevState => {
    return {
      options: prevState.options.concat([option])
    }
  });
}

  render() {
    return (
      <div>
        <p>Facebook React</p>
        <Options options={this.state.options} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
        <p>Options</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    console.log(option);
  }
  render() {
    return (
      <div> 
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Facebook />, document.getElementById('app'));
