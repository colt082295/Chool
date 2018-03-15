import React from 'react';
import { Button } from 'semantic-ui-react';
// import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavigationHeader.css';

class NavigationHeader extends React.Component {
  render() {
    return (
      <div className={s.navigation}>
        <div className={s.dateRange}>3/10/18 - 3/17/18</div>
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
