import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import moment from 'moment';
import reactCalendarCss from 'react-infinite-calendar/styles.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import InfiniteCalendar from './InfiniteCalendar';
import s from './NavigationHeader.css';

class FilterHeader extends React.Component {
  state = {
    startWeek: moment().startOf('week'),
    endWeek: moment().endOf('week'),
    calenderOpen: false,
  };

  toggleCalendar() {
    this.setState({
      calenderOpen: !this.state.calenderOpen,
    });
  }

  dateSelected(e) {
    if (e.eventType === 3) {
      this.setState({
        startWeek: moment(e.start),
        endWeek: moment(e.end),
        calenderOpen: !this.state.calenderOpen,
      });
    }
  }

  leftArrowClick() {
    this.setState({
      startWeek: moment(this.state.startWeek)
        .subtract(1, 'week')
        .startOf('week'),
      endWeek: moment(this.state.startWeek)
        .subtract(1, 'week')
        .endOf('week'),
    });
  }

  rightArrowClick() {
    this.setState({
      startWeek: moment(this.state.startWeek)
        .add(1, 'week')
        .startOf('week'),
      endWeek: moment(this.state.startWeek)
        .add(1, 'week')
        .endOf('week'),
    });
  }

  render() {
    const { startWeek, endWeek } = this.state;
    return (
      <div>
        <div className={s.inner}>
          <div className={s.dateRange}>{`${moment(startWeek).format(
            'MMM Do',
          )} - ${moment(endWeek).format('MMM Do')}`}</div>
          <div>
            <Button.Group>
              <Button
                onClick={() => {
                  this.leftArrowClick();
                }}
              >
                <Icon name="arrow left" />
              </Button>
              <Button
                onClick={() => {
                  this.rightArrowClick();
                }}
              >
                <Icon name="arrow right" />
              </Button>
              <Button
                onClick={() => {
                  this.toggleCalendar();
                }}
              >
                <Icon name="calendar" />
              </Button>
            </Button.Group>
          </div>
        </div>

        <div className={s.calendarWrapper}>
          <InfiniteCalendar
            startWeek={this.state.startWeek}
            endWeek={this.state.endWeek}
            calenderOpen={this.state.calenderOpen}
            dateSelected={this.dateSelected.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s, reactCalendarCss)(FilterHeader);
