import React, {Component} from 'react';
import quizData from '../../data/quiz-data';

class Quiz extends Component {
    state = {
        quiz: {}
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        const quiz = quizData.find(data => {
            return data.id === +this.props.match.params.id;
        }); 
        this.setState({quiz});

    }
    render() {
        return (
            <h1>{this.state.quiz.title}</h1>
        )
    }
}

export default Quiz; 




