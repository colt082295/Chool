import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AssignmentComponent from './DashboardAssignments/DashboardAssignments';
import FeedComponent from './DashboardFeed/DashboardFeed';
import GradeComponent from './DashboardGrades/DashboardGrades';
import MessageComponent from './DashboardMessages/DashboardMessages';
import NotesComponent from './DashboardNotes/DashboardNotes';
import s from './Dashboard.css';

class Dashboard extends React.Component {
  static propTypes = {
    tiles: PropTypes.instanceOf(Object).isRequired,
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

  render() {
    return (
      <div className={s.dashboard}>
        {this.props.tiles.map((data, i) =>
          // console.log("item:", this.state.tileTypes[data.type](data.content, i))
          // console.log("stuff:", data.type, data.content, i)
          // console.log("Function:", this.state.tileTypes[data.type](data.content, i))
          this.state.tileTypes[data.type](data.content, i),
        )}
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
