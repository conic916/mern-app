import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Postss extends Component {
  render() {
    return (
      <div>
        <h2>Hello world!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Postss.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postss);
