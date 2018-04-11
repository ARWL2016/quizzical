import React, { Component } from 'react'; 
import quizData from '../../data/quiz-data';
import QuizTitle from '../../components/QuizTitle/QuizTitle';


class QuizList extends Component {
    state = {
        quizTitles: []
    }

    constructor(props) {
        super(props);
        // local synchronous data
        const titles = quizData.map(quiz => quiz.title);
        this.state.quizTitles = titles;
    }

    render() {
        const titles = this.state.quizTitles.map(title => <QuizTitle key={title} title={title}/>);
        return (
            <div>
                <h1>Quiz Titles</h1>
                {titles}
            </div>
        )
    }
}

export default QuizList; 