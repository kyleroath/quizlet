/* Not currently in use, potentially in future. */

import React from 'react'

import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'

import styles from './Header.module.css'

const Header = ({state}) => {

    // eslint-disable-next-line
    const { categories, questions } = state

    return(
        <div className={styles.container}>
            {/* <CardHeader>
            <Button onClick={() => console.log(questions)}>Questions</Button>
            <Button onClick={() => console.log(categories)}>Categories</Button>
            <Button onClick={() => console.log(state)}>State</Button>
            </CardHeader> */}
            

            <AppBar position="static" color="default" className={styles.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" >
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                    Quizlet
                    </Typography>
                    <Button color="inherit" className={styles.menuButton}>Reset</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header