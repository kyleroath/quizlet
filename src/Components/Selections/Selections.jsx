import React, {useEffect} from 'react'

import {FormControl, FormControlLabel, FormLabel, FormGroup, Checkbox} from '@material-ui/core'

import styles from './Selections.module.css'


const Selection = ({content, setSelection, currentSelection}) => {

    useEffect(() => {
        setSelection('')
    // eslint-disable-next-line
    }, [content])

    let parsedQuestions = [content.correct_answer]
    // eslint-disable-next-line
    const parseData = (() => {
        content.incorrect_answers.map((m) => parsedQuestions.push(m))
        if(parsedQuestions.length > 3) {
            parsedQuestions.sort()
        }
    })()

    return (
        <div>
            <FormControl component="fieldset" className={styles.container}>
                <FormLabel component="legend">Answer:</FormLabel>
                    <FormGroup>
                        {/* {content.incorrect_answers.map((m, i) => (
                            <FormControlLabel
                            key={i}
                            control={<Checkbox name={m} checked={m === currentSelection} onChange={(e) => setSelection(e.target.name)}/>}
                            label={m}/>
                        ))} */}
                        {parsedQuestions.map((m, i) => (
                            <FormControlLabel
                            key={i}
                            control={<Checkbox name={m} checked={m === currentSelection} onChange={(e) => setSelection(e.target.name)}/>}
                            label={m}/>
                        ))}
                    </FormGroup>
            </FormControl>
        </div>
    )
}

export default Selection
