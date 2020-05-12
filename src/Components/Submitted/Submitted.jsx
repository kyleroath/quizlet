import React from 'react'

import {Button, Card, CardContent, Box, Typography} from '@material-ui/core'

import styles from './Submitted.module.css'

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
            <Card className={styles.container}>
                <CardContent >
                    <Box border={1} borderRadius={16}>
                <Typography variant='h5' className={styles.results}>Your results:</Typography>
                </Box> 
                    <Typography variant='h6' className={styles.question}>{`You scored ${correctAnswers}/${selections.length} correct!`}</Typography>
                    <Typography variant='h4' className={styles.question}>{(correctAnswers * 100) / selections.length}%</Typography>
                    <Button className={styles.reset}onClick={() => window.location.reload(false)}>Try Again</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Submitted