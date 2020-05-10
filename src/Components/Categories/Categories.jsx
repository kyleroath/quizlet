import React from 'react'

import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './Categories.module.css'

const Categories = ({categoryList, handleCategory}) => {
    return (
        <div>
            <FormControl className={styles.container}>
                {/* <InputLabel>Category</InputLabel> */}
                <NativeSelect name='category' onChange={(e) => handleCategory(e.target.value)}>
                <option value=''>Random</option>
                {categoryList.map((m, i) => <option key={i} value={m.id}>{m.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Categories