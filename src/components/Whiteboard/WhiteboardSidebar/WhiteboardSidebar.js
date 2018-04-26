import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WhiteboardSidebar.css';

const fontSizes = [
  { key: '12', text: '12px', value: '12' },
  { key: '14', text: '14px', value: '14' },
  { key: '20', text: '20px', value: '20' },
  { key: '27', text: '27px', value: '27' },
  { key: '35', text: '35px', value: '35' },
];

const colors = [
  {
    key: 'black',
    text: 'Black',
    value: 'black',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'red',
    text: 'Red',
    value: 'red',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'yellow',
    text: 'yellow',
    value: 'yellow',
    label: { color: 'yellow', empty: true, circular: true },
  },
];

// const renderLabel = label => ({
//   color: this.state.color,
//   content: `${label.color}`,
//   // icon: 'check',
// });

const renderLabel = label => ({
  color: 'blue',
  content: `Customized label - ${label.text}`,
  icon: 'check',
});

class WhiteboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.itemClick = this.itemClick.bind(this);
  }
  state = {
    fontSizes,
    colors,
    color: 'black',
  };

  itemClick = () => {
    this.setState({
      // activeItem: e.currentTarget.getAttribute('name'),
    });
  };

  fontAddition = (e, { value }) => {
    this.setState({
      fontSizes: [{ text: value, value }, ...this.state.options],
    });
  };

  fontChange = (e, { value }) => this.setState({ currentValue: value });

  colorChange = (e, { value }) => {
    this.setState({ color: value });
  };

  render() {
    const { currentValue } = this.state;

    return (
      <div className={s.sidebar}>
        <div
          name="auto"
          role="button"
          onClick={this.itemClick}
          tabIndex={0}
          onKeyDown={this.itemClick}
        >
          <Icon name="paint brush" />
        </div>
        <div
          className={s.item}
          role="button"
          name="pencil"
          onClick={this.itemClick}
          tabIndex={0}
          onKeyDown={this.itemClick}
        >
          <Icon name="paint brush" />
        </div>
        <div
          className={s.item}
          role="button"
          name="eraser"
          onClick={this.itemClick}
          tabIndex={0}
          onKeyDown={this.itemClick}
        >
          <Icon name="paint brush" />
        </div>
        <div
          className={s.item}
          role="button"
          name="shape"
          onClick={this.itemClick}
          tabIndex={0}
          onKeyDown={this.itemClick}
        >
          <Icon name="paint brush" />
        </div>
        <div className={s.dropdownWrapper}>
          <Dropdown
            options={this.state.fontSizes}
            placeholder="Font Size"
            search
            selection
            allowAdditions
            value={currentValue}
            defaultValue="12"
            onAddItem={this.fontAddition}
            onChange={this.fontchange}
            className={s.dropdown}
          />
        </div>
        <div className={s.dropdownWrapper}>
          <div className={s.colorWrapper}>
            <div
              className={s.background}
              style={{ background: this.state.color }}
            />
            <Dropdown
              selection
              options={this.state.colors}
              placeholder="Color"
              renderLabel={renderLabel}
              defaultValue="black"
              onChange={this.colorChange}
              className={s.dropdown}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WhiteboardSidebar);
