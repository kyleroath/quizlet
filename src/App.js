import React from 'react'

import {fetchData} from './api'
import {QuestionCard, Submitted, Categories} from './Components'

import styles from './App.module.css'
import {Button} from '@material-ui/core'


class App extends React.Component {
    state = {
        questions: {},
        qCount: 0,
        isCompleted: false,
        selections: []
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ questions: fetchedData })
    }

    handleQuestionChange = (selection, correct, submit) => {
        if(!submit) {
            this.setState({qCount: this.state.qCount + 1})
        } else if(submit) {
            this.setState({isCompleted: true})
        }
        this.setState({selections: [...this.state.selections, {selection, correct}]})
    }

    render() {
        const { questions, qCount, isCompleted, selections } = this.state
        return (
            <div>
                <div className={styles.container}>
                    <h1>App</h1>
                    <Button onClick={() => console.log(questions)}>Questions</Button>
                    <Button onClick={() => console.log(this.state)}>State</Button>
                </div>
                <div className={styles.category}>
                    <Categories/>
                </div>
                <div className={styles.question}>
                    {questions.length && !isCompleted && <QuestionCard questions={questions} qCount={qCount} changeQuestion={this.handleQuestionChange}/>}
                    {questions.length && isCompleted && <Submitted selections={selections}/>}
                </div>
            </div>    
        )
    }
}

export default App