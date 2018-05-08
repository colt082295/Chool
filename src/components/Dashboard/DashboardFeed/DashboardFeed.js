import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link/Link';
import s from './DashboardFeed.css';

const classes = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'english', value: 'english', text: 'English' },
  { key: 'math', value: 'math', text: 'Math' },
];
class DashboardFeed extends React.Component {
  static propTypes = {
    feed: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.feedTile, s.tile)}>
        <div className={s.top}>
          <h3 className={s.title}>Feed</h3>
          <div className={s.options}>
            <Icon name="ellipsis vertical" />
          </div>
        </div>
        <div className={s.feedItems}>
          {this.props.feed.map(feedItem =>
            feedItem.content.map(item =>
              item[Object.keys(item)[0]].map((content, i) => (
                <Link to="/" className={s.feedItem} key={i.toString()}>
                  <div>
                    {content.title ? <h3>{content.title}</h3> : ''}
                    {content.body ? <h3>{content.body}</h3> : ''}
                  </div>
                  <div className={s.meta}>
                    {content.body ? <span>{content.class}</span> : ''}
                    <span className={s.date}>
                      {moment(content.date).format('MMM Do YY')}
                    </span>
                  </div>
                </Link>
              )),
            ),
          )}
        </div>
        <div className={s.more}>
          <Dropdown
            placeholder="Class"
            fluid
            search
            defaultValue="all"
            selection
            options={classes}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardFeed);
