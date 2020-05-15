import React, {useState} from 'react'

import Selection from '../Selections/Selections'
import {decodeHtml} from '../../api'

import {Typography, Button, Card, CardContent, Box} from '@material-ui/core'
import styles from './Question.module.css'


const QuestionCard = ({questions, qCount, changeQuestion}) => {

    /* Variable decalartions! */
    const unescapedQuestion = decodeHtml(questions[qCount].question)
    const questionBarStatus = qCount + 1 < questions.length
    
    const [currentSelection, setCurrentSelection] = useState('') // Used by selection component to set selection. Then saved to parent class selection on next.
    
    return (
        <div>
            <Card className={styles.container}>
                <CardContent >
                    <Box border={1} borderRadius={16}>
                <Typography variant='h5' className={styles.category}>{`${questions[qCount].category}`}</Typography>
                </Box> 
                    <Typography variant='h5' className={styles.question}>{unescapedQuestion}</Typography>
                    <Selection content={questions[qCount]} setSelection={setCurrentSelection} currentSelection={currentSelection}/>
                    {questionBarStatus && <Button  className={styles.button} disabled={currentSelection === ''} variant='outlined' onClick={() => changeQuestion(currentSelection, questions[qCount].correct_answer, false)}>Next</Button>}
                    {!questionBarStatus && <Button className={styles.button} variant="outlined" onClick={() => changeQuestion(currentSelection, questions[qCount].correct_answer, true)}>Submit</Button>} 
                </CardContent>
            </Card>
        </div>
    )
}

export default QuestionCard