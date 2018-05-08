import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import DashboardBasicList from './DashboardBasicList/DashboardBasicList';
import s from './Dashboard.css';
import { fetchDashboard } from '../../actions/homeActions';

class Dashboard extends React.Component {
  static propTypes = {
    tiles: PropTypes.instanceOf(Array).isRequired,
    // fetching: PropTypes.bool.isRequired,
    fetchDashboard: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchDashboard();
  }

  render() {
    return (
      <div className={s.dashboard}>
        {this.props.tiles.map((data, i) => (
          <DashboardBasicList
            key={i.toString()}
            type={data.type}
            list={data.content}
            title={data.type}
          />
        ))}
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
