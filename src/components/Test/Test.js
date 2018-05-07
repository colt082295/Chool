import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';
import TestQuestionComponent from './TestQuestion/TestQuestion';
import TestMultipleChoiceComponent from './TestMultipleChoice/TestMultipleChoice';
import TestTextareaComponent from './TestTextarea/TestTextarea';
// import TestFinished from './TestFinished/TestFinished';
import s from './Test.css';

class Test extends React.Component {
  static propTypes = {
    questions: PropTypes.instanceOf(Array).isRequired,
  };

  state = {
    questions: this.props.questions,
    currentIndex: 0,
    currentAnswer: '',
    prevBtnDisabled: true,
    nextBtnDisabled: false,
  };

  prevQuestion() {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        currentAnswer: '',
      });
      if (this.state.currentIndex === 1) {
        this.setState({
          prevBtnDisabled: true,
          nextBtnDisabled: false,
        });
      }
    } else {
      this.setState({
        prevBtnDisabled: true,
      });
    }
  }

  nextQuestion() {
    if (this.state.currentIndex + 1 < this.state.questions.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        currentAnswer: '',
        nextBtnDisabled: false,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        currentAnswer: '',
        nextBtnDisabled: true,
        prevBtnDisabled: false,
      });
    }
  }

  updateAnswer(answer) {
    this.setState({
      currentAnswer: answer,
    });
  }

  // testFinished() {
  //   console.log('You finished the test!');
  // }

  renderAnswer() {
    const { currentIndex } = this.state;
    const { questions } = this.props;
    // eslint-disable-next-line prefer-destructuring
    const type = questions[this.state.currentIndex].type;
    if (type === 'multipleChoice') {
      return (
        <TestMultipleChoiceComponent
          choices={this.state.questions[currentIndex].choices}
          answer={this.state.questions[currentIndex].answer}
          updateAnswer={this.updateAnswer.bind(this)}
          currentAnswer={this.state.currentAnswer}
        />
      );
    }
    return <TestTextareaComponent />;
  }

  renderNext() {
    if (this.state.currentIndex === this.state.questions.length - 1) {
      return (
        <Button
          as={Link}
          // to="/notes"
          to="/test/finished"
          primary
          content="Done"
          // onClick={this.testFinished.bind(this)}
        />
      );
    }
    return (
      <Button
        primary
        content="Next"
        disabled={this.state.nextBtnDisabled}
        onClick={this.nextQuestion.bind(this)}
      />
    );
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className={s.test}>
        <div className={s.questionInfo}>
          <div className={s.testInfo}>
            <div className={s.questionCount}>
              {`${currentIndex + 1} / ${this.state.questions.length} `}Questions
            </div>
            <div className={s.questionTime}>59:99</div>
          </div>
          <div className={s.question}>
            <TestQuestionComponent
              question={this.state.questions[currentIndex].question}
              currentIndex={currentIndex}
            />
          </div>
          <div className={s.answers}>{this.renderAnswer()}</div>
        </div>
        <div className={s.nav}>
          <div className={s.prev}>
            <Button
              content="Previous"
              disabled={this.state.prevBtnDisabled}
              onClick={this.prevQuestion.bind(this)}
            />
          </div>
          <div className={s.next}>{this.renderNext()}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Test);
