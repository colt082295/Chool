import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardFeed.css';

class DashboardFeed extends React.Component {
  static propTypes = {
    feed: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.feedTile, s.tile)}>
        <h1>Feed:</h1>
        {this.props.feed.map(feedItem =>
          // Find a better way to iterate through all this, maybe restructure the data.
          feedItem.content.map(item =>
            item[Object.keys(item)[0]].map((content, i) => {
              if (content.title) {
                return <h3 key={i.toString()}>{content.title}</h3>;
              }
              return <h3 key={i.toString()}>{content.body}</h3>;
            }),
          ),
        )}
      </div>
    );
  }
}

export default withStyles(s)(DashboardFeed);
