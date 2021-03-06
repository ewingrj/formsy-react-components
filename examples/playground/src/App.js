/* eslint-env node, browser */

import React, {Component} from 'react';
import Playground from './playground';
import Options from './options';

class App extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      layout: 'horizontal',
      showingOptions: true,
      validateBeforeSubmit: true,
      validatePristine: false,
      disabled: false,
    };
  }

  handleChangeOption = (name, value) => {
    const newState = {};
    if (Array.isArray(value)) {
      let options = [];
      if (name === 'validationOptions') {
        options = ['validatePristine', 'validateBeforeSubmit'];
      }
      if (name === 'elementOptions') {
        options = ['disabled'];
      }
      options.forEach(option => {
        newState[option] = value.indexOf(option) !== -1;
      });
    } else {
      newState[name] = value;
    }
    this.setState(newState);
  };

  handleToggleOptions = () => {
    const {showingOptions} = this.state;
    this.setState({showingOptions: !showingOptions});
  };

  render() {
    const {
      layout,
      validateBeforeSubmit,
      validatePristine,
      showingOptions,
      disabled,
    } = this.state;
    return (
      <div>
        <h1 className="pb-2 mt-4 mb-3 border-bottom">Form Playground</h1>
        <Options
          layoutChoice={layout}
          validateBeforeSubmitChoice={validateBeforeSubmit}
          validatePristineChoice={validatePristine}
          showing={showingOptions}
          disabledChoice={disabled}
          onChangeOption={this.handleChangeOption}
          onToggle={this.handleToggleOptions}
        />
        <h2 className="pb-2 mt-4 mb-3 border-bottom">
          Layout: <code>{layout}</code>
        </h2>
        <Playground
          layoutChoice={layout}
          validateBeforeSubmitChoice={validateBeforeSubmit}
          validatePristineChoice={validatePristine}
          disabledChoice={disabled}
        />
      </div>
    );
  }
}

export default App;
