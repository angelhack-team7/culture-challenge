import React from 'react';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

const { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, Textarea } = FRC;

var MyForm = React.createClass({
  mixins: [FRC.ParentContextMixin],

  propTypes: {
      children: React.PropTypes.node
  },

  render() {
    return (
      <Formsy.Form
        {...this.props}
          ref="formsy"
        >
        {this.props.children}
      </Formsy.Form>
    );
  }
});

export default MyForm;
