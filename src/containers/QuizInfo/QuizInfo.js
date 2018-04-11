import React, {Component} from 'react';
import quizData from '../../data/quiz-data';

class QuizInfo extends Component {
    state = {
        quiz: {}
    }
    componentDidMount() {
        const id = +this.props.match.params.id; 

        quizData.forEach(data => {
            if (data.id === id) {
                this.setState({quiz: data}, () => {
                    console.log(this.state.quiz);
                });
                
              
            }
        }); 
        
    }

    render() {
        return (
            <div>
                <h1>QUIZ INFO</h1>
                <p>{this.state.quiz.title}</p>
                
            </div>
        )
    }
}

export default QuizInfo;
