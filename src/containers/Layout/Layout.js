// This container component will hold any top level state

import React, {Component} from 'react';
import QuizList from '../QuizList/QuizList';
// import quizData from '../../data/quiz-data';

class LayoutContainer extends Component {

    render() {
        return (
            <div>
                <h1>Quizzical</h1>
                <QuizList/>
            </div>
        )
    }
}

export default LayoutContainer;
