import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import AssignmentComponent from './DashboardAssignments/DashboardAssignments';
import FeedComponent from './DashboardFeed/DashboardFeed';
import GradeComponent from './DashboardGrades/DashboardGrades';
import MessageComponent from './DashboardMessages/DashboardMessages';
import NotesComponent from './DashboardNotes/DashboardNotes';
import s from './Dashboard.css';
import { fetchDashboard } from '../../actions/homeActions';

class Dashboard extends React.Component {
  static propTypes = {
    tiles: PropTypes.instanceOf(Array).isRequired,
    fetching: PropTypes.bool.isRequired,
    fetchDashboard: PropTypes.func.isRequired,
  };

  state = {
    tileTypes: {
      assignments: (content, index) => (
        <AssignmentComponent assignments={content} key={index.toString()} />
      ),
      feeds: (content, index) => (
        <FeedComponent feed={content} key={index.toString()} />
      ),
      grades: (content, index) => (
        <GradeComponent grades={content} key={index.toString()} />
      ),
      messages: (content, index) => (
        <MessageComponent messages={content} key={index.toString()} />
      ),
      notes: (content, index) => (
        <NotesComponent notes={content} key={index.toString()} />
      ),
    },
  };

  componentDidMount() {
    this.props.fetchDashboard();
  }

  render() {
    return (
      <div className={s.dashboard}>
        <h2>Fetching: {this.props.fetching.toString()}</h2>
        {this.props.tiles.map((data, i) =>
          this.state.tileTypes[data.type](data.content, i),
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tiles: state.home.tiles,
  fetching: state.home.fetching,
  fetched: state.home.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchDashboard })(
  withStyles(s)(Dashboard),
);
