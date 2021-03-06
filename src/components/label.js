import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/dedupe';
import RequiredSymbol from './required-symbol';

const Label = props => {
  const {layout, label, htmlFor, labelClassName, fakeLabel, required} = props;

  if (layout === 'elementOnly') {
    return null;
  }

  const labelClassNames = classNames([
    'col-form-label',
    layout === 'horizontal' ? 'col-sm-3' : '',
    labelClassName,
  ]);

  if (fakeLabel) {
    return (
      <div className={labelClassNames} data-required={required}>
        {label}
        <RequiredSymbol required={required} />
      </div>
    );
  }

  return (
    <label
      className={labelClassNames}
      data-required={required}
      htmlFor={htmlFor}>
      {label}
      <RequiredSymbol required={required} />
    </label>
  );
};

Label.propTypes = {
  fakeLabel: PropTypes.bool,
  htmlFor: PropTypes.string,
  label: PropTypes.node,
  labelClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
  required: PropTypes.bool,
};

Label.defaultProps = {
  fakeLabel: false,
  htmlFor: null,
  label: null,
  labelClassName: '',
  layout: 'horizontal',
  required: false,
};

export default Label;
