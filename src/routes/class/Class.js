import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClassesComponent from '../../components/Class/Class';
import { fetchClass } from '../../actions/classActions';
import s from './Class.css';

class ClassPage extends React.Component {
  static propTypes = {
    class: PropTypes.instanceOf(Object).isRequired,
    fetchClass: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
  };

  // constructor(props) {
  //   super(props);
  //   this.feedGrades = this.feedGrades.bind(this);
  //   this.feedAssignments = this.feedAssignments.bind(this);
  // }

  componentDidMount() {
    this.props.fetchClass();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ClassesComponent
            classInfo={this.props.class}
            fetching={this.props.fetching}
            fetched={this.props.fetched}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  class: state.classInfo.class,
  fetching: state.classInfo.fetching,
  fetched: state.classInfo.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchClass })(
  withStyles(s)(ClassPage),
);
