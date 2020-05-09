import React from 'react'

const Submitted = ({selections}) => {

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
        </div>
    )
}

export default Submitted