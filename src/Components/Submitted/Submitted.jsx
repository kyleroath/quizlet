import React from 'react'

import {Button} from '@material-ui/core'

const Submitted = ({selections, reset}) => {

    let correctAnswers = 0

    // eslint-disable-next-line
    const calculateScore = (() => {
        selections.forEach((e) => e.selection === e.correct ? correctAnswers++ : correctAnswers--)
    })()

    if(!correctAnswers) {
        return 'Loading...'
    }
    return (
        <div>
            <p>{`Total correct: ${correctAnswers}/${selections.length}`}</p>
            <Button onClick={() => window.location.reload(false)}>Reset</Button>
        </div>
    )
}

export default Submitted