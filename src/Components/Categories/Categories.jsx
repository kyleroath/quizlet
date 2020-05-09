import React from 'react'

import {NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import styles from './Categories.module.css'

const Categories = () => {
    return (
        <div>
            <FormControl className={styles.container}>
                <InputLabel>Category</InputLabel>
                <NativeSelect name='category'>
                <option value='Test'>One</option>
                <option value='Test'>Two</option>
                <option value='Test'>Three</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Categories