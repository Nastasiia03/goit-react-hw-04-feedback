
import {useState} from "react";
import { FeedbackOptions } from "./feedback/feedback";
import { GlobalStyle } from "./globalstyle";
import { Layout } from "./layout";
import { Notification } from "./notification/notification";
import { Section } from "./section/section";
import { Statistics } from "./statistics/statistics";

export const App = () => {
 const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  
    const countTotalFeedback = () => {
        const sum = good + neutral + bad;
        return sum
    }
    
    const countPositivePercentage = () => {
        const sum = countTotalFeedback();
        const goodFeedback = (good * 100) / sum;
        return Math.round(goodFeedback)
    }
    

  return (
      <Layout> 
            <GlobalStyle/>
            <Section title="Please leave feedback">
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}>{['good', 'neutral', 'bad']}</FeedbackOptions>
            </Section>

            <Section title="Statistics">
        {countTotalFeedback() === 0 ? (<Notification message="There is no feedback"></Notification>) :
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositivePercentage()}></Statistics>}
            </Section>
            </Layout> 
        
  )
};
