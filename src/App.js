import React from 'react'

import {fetchData, fetchCategories} from './api'
import {QuestionCard, Submitted, Categories} from './Components'

import styles from './App.module.css'
import {Typography, Button} from '@material-ui/core'
import quizletimg from './images/image.png'

const testing = false // Testing mode enable/disdable!


class App extends React.Component {
    state = {
        questions: {},
        categories: [],
        qCount: 0,
        isCompleted: false,
        selections: []
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        const fetchedCategories = await fetchCategories()
        this.setState({ questions: fetchedData, categories: fetchedCategories })
    }

    handleQuestionChange = (selection, correct, submit) => {
        !submit ? this.setState({qCount: this.state.qCount + 1}) : this.setState({isCompleted: true})

        this.setState({selections: [...this.state.selections, {selection, correct}]})
    }

    handleCategoryChange = async (category) => {
        if(category) {
            const fetchedData = await fetchData(category)
            this.setState({questions: fetchedData, isCompleted: false})
        } else {
            const fetchedData = await fetchData()
            this.setState({questions: fetchedData, isCompleted: false}) 
        }
    }

    render() {
        const { questions, categories, qCount, isCompleted, selections } = this.state
        return (
            <div>
                <div className={styles.container}>
                    <Typography variant='h3'>Quizlet</Typography>
                    <img className={styles.image} src={quizletimg} alt="Quizlet"/>
                    <Typography variant='h6' className={styles.caption}>A fun 5 question random or specific categorized quiz game. See how you do! Good luck ;)</Typography>
                </div>
                {testing && <div className={styles.container}>
                        <Button onClick={() => console.log(questions)}>Questions</Button>
                        <Button onClick={() => console.log(categories)}>Categories</Button>
                        <Button onClick={() => console.log(this.state)}>State</Button>
                </div>}
                <div className={styles.category}>
                    <Typography variant="overline">Category:</Typography>
                    <Categories categoryList={categories} handleCategory={this.handleCategoryChange}/>
                </div>
                <div className={styles.question}>
                    {questions.length && !isCompleted && <QuestionCard questions={questions} qCount={qCount} changeQuestion={this.handleQuestionChange}/>}
                    {isCompleted && <Submitted selections={selections} reset={this.freshData}/>}
                </div>
                <div className={styles.container}>
                    <Typography variant='caption' className={styles.footer}>Quizlet created by Kyle Roath. OpenTDB for API.</Typography>
                </div>
            </div>    
        )
    }
}

export default App