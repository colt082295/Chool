import React from 'react';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
// import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavigationHeader.css';

class NavigationHeader extends React.Component {
  state = {
    startWeek: moment()
      .startOf('week')
      .format('MMM Do'),
    endWeek: moment()
      .endOf('week')
      .format('MMM Do'),
  };
  render() {
    const { startWeek, endWeek } = this.state;
    return (
      <div className={s.navigation}>
        <div className={s.dateRange}>{`${startWeek} - ${endWeek}`}</div>
        <div>
          <Button.Group
            buttons={[
              { key: 'arrow left', icon: 'arrow left' },
              { key: 'arrow right', icon: 'arrow right' },
              { key: 'calendar', icon: 'calendar' },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NavigationHeader);
