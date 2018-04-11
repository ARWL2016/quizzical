// This container component will hold any top level state

import React, {Component} from 'react';
import QuizList from '../QuizList/QuizList';
import QuizInfo from '../QuizInfo/QuizInfo';
import {Route, Redirect, Switch} from 'react-router-dom';

class LayoutContainer extends Component {

    render() {
        return (
            <div>
                <h1>Quizzical</h1>

                {/* <QuizList/> */}
                <Switch>
                    <Route path="/home" component={QuizList} /> 
                    <Route path="/info/:id" component={QuizInfo} /> 
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default LayoutContainer;
