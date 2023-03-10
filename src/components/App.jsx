
import {Component} from "react";
import { FeedbackOptions } from "./feedback/feedback";
import { GlobalStyle } from "./globalstyle";
import { Layout } from "./layout";
import { Notification } from "./notification/notification";
import { Section } from "./section/section";
import { Statistics } from "./statistics/statistics";

export class App extends Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


  onLeaveFeedback = (evt) => {
    const option = evt.target.name;
        this.setState((state) => ({
          [option]: state[option] + 1,
        }))
    }
        

    countTotalFeedback = () => {
        const {good, neutral, bad } = this.state;
        const sum = good + neutral + bad;
        return sum
    }
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const sum = this.countTotalFeedback();
        const goodFeedback = (good * 100) / sum;
        return Math.round(goodFeedback)
    }
    
  render() {
      const options = Object.keys(this.state);
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percent = this.countPositiveFeedbackPercentage();

      return <Layout> 
            <GlobalStyle/>
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}>{options}</FeedbackOptions>
            </Section>

            <Section title="Statistics">
                {total === 0 ? (<Notification message="There is no feedback"></Notification>) : (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent}></Statistics>)} 
            </Section>
            </Layout> 
        
    }
};
