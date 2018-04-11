// This container component will hold any top level state

import React, {Component} from 'react';
import QuizList from '../QuizList/QuizList';
import QuizInfo from '../QuizInfo/QuizInfo';
import Quiz from '../Quiz/Quiz';
import {Route, Redirect, Switch} from 'react-router-dom';
import './Layout.css';

class LayoutContainer extends Component {

    render() {
        return (
            <div className="LayoutContainer">
                <h1>Quizzical</h1>

                {/* <QuizList/> */}
                <Switch>
                    <Route path="/home" component={QuizList} /> 
                    <Route path="/info/:id" component={QuizInfo} /> 
                    <Route path="/quiz/:id" component={Quiz} /> 
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default LayoutContainer;
