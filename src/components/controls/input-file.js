import React, {Component} from 'react';
import commonPropTypes from './common-prop-types';

// A file control can only be set to an empty string.
// I think we need to keep this as an uncontrolled component, so we override the
// value.prop.
class FileControl extends Component {
  initElementRef = element => {
    this.element = element;
  };

  render() {
    const props = {...this.props};
    delete props.label;
    delete props.value;
    return <input {...props} type="file" ref={this.initElementRef} />;
  }
}

FileControl.propTypes = {
  ...commonPropTypes,
};

export default FileControl;
