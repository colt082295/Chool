import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link/Link';
import Message from '../DashboardMessages/DashboardMessage/DashboardMessage';
import SettingsModal from './SettingsModal/SettingsModal';
import s from './DashboardBasicList.css';

const classes = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'english', value: 'english', text: 'English' },
  { key: 'math', value: 'math', text: 'Math' },
];

class DashboardBasicList extends React.Component {
  static propTypes = {
    list: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.node.isRequired,
    type: PropTypes.node.isRequired,
  };

  state = {
    modalOpen: false,
  };

  /* eslint-disable class-methods-use-this, consistent-return */
  capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  openSettingsModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeSettingModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  renderBlock(type, list, i) {
    if (type === 'assignments') {
      return (
        <Link
          to={`/assignments/${list.id}`}
          className={s.item}
          key={i.toString()}
        >
          <div>
            <h3>{list.title}</h3>
          </div>
          <div className={s.meta}>
            <span>{list.class}</span>
            <span className={s.date}>
              {moment(list.date).format('MMM Do YY')}
            </span>
          </div>
        </Link>
      );
    } else if (type === 'notes') {
      return (
        <Link to={`/note/${list.id}`} className={s.item} key={i.toString()}>
          <div>
            <h3>{list.title}</h3>
          </div>
          <div className={s.meta}>
            <span>{list.class}</span>
            <span className={s.date}>
              {moment(list.date).format('MMM Do YY')}
            </span>
          </div>
        </Link>
      );
    } else if (type === 'feeds') {
      return list.content.map(item =>
        item[Object.keys(item)[0]].map((content, index) => (
          <Link to="/" className={s.item} key={(i + index).toString()}>
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
      );
    } else if (type === 'grades') {
      return (
        <Link to="/grades" className={s.item} key={i.toString()}>
          <div>
            <h3>{list.title}</h3>
          </div>
          <div className={s.meta}>
            <span>{list.class}</span>
            <span className={s.date}>
              {moment(list.date).format('MMM Do YY')}
            </span>
            <span className={s.gradeScore}>{list.grade}</span>
          </div>
        </Link>
      );
    } else if (type === 'messages') {
      return (
        <Message
          name={list.name}
          message={list.messages[list.messages.length - 1]}
          key={i.toString()}
        />
      );
    }
  }

  renderMore(type) {
    if (type === 'notes') {
      return (
        <div className={s.more}>
          <Dropdown
            placeholder="Class"
            fluid
            search
            defaultValue="all"
            selection
            options={classes}
          />
          <Link to="/notes" className={s.addNote}>
            <Icon name="plus" />
          </Link>
        </div>
      );
    }
    return (
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
    );
  }

  /* eslint-enable class-methods-use-this, consistent-return */

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div>
        <div className={s.tile}>
          <div className={s.top}>
            <h3 className={s.title}>{this.capFirstLetter(this.props.title)}</h3>
            <div className={s.options}>
              <Icon
                name="ellipsis vertical"
                onClick={this.openSettingsModal.bind(this)}
              />
            </div>
          </div>
          <div className={s.items}>
            {this.props.list.map((list, i) =>
              this.renderBlock(this.props.type, list, i),
            )}
          </div>
          {this.renderMore(this.props.type)}
        </div>
        <SettingsModal
          modalOpen={this.state.modalOpen}
          title={this.capFirstLetter(this.props.title)}
          closeSettingModal={this.closeSettingModal.bind(this)}
        />
      </div>
    );
  }
}

export default withStyles(s)(DashboardBasicList);
