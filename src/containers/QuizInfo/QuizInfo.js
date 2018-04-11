import React, {Component} from 'react';
import quizData from '../../data/quiz-data';
import './QuizInfo.css';

class QuizInfo extends Component {
    state = {
        quiz: {}
    }

    componentDidMount() {
        const id = +this.props.match.params.id; 
        quizData.forEach(data => {
            if (data.id === id) {
                this.setState({quiz: data});
            }
        }); 
    }

    backHandler = () => {
        this.props.history.push("/home");
    }

    startQuizHandler = () => {
        this.props.history.push("/quiz/" + this.state.quiz.id);
    }

    render() {
        return (
            <div className="QuizInfo">
                <h1>QUIZ INFO</h1>
                <p>{this.state.quiz.title}</p>
                <button className="btn-default" onClick={this.backHandler}>Back to Quiz List</button>
                <button className="btn-default" onClick={this.startQuizHandler}>Start Quiz</button>
            </div>
        )
    }
}

export default QuizInfo;
