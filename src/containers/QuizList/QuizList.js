import React, { Component } from 'react'; 
import quizData from '../../data/quiz-data';
import QuizTitle from '../../components/QuizTitle/QuizTitle';

class QuizList extends Component {
    state = {
        quizTitles: [{title: '', id: 0}]
    }

    constructor(props) {
        super(props);
        // local synchronous data
        this.state.quizTitles = quizData.map(quiz => ({ id: quiz.id, title: quiz.title}));
        
        console.log(this.state.quizTitles);
    }

    titleClickHandler = (e, title) => {
        this.props.history.push({pathname: "/info/" + title.id});
    }

    render() {
        const titles = this.state.quizTitles.map(title => {
            return <QuizTitle 
                key={title.id} 
                click={() => this.titleClickHandler(null, title)} 
                title={title.title}/>
        });
        return (
            <div>
                <h1>Quiz Titles</h1>
                {titles}
            </div>
        )
    }
}

export default QuizList; 