import axios from 'axios'


const qCount = 5 // Static of 5 questions to start, to be adjusted later.
const questionURL = `https://opentdb.com/api.php?amount=${qCount}`

export const fetchData = async () => {
    try {
        const { data: {results} } = await axios.get(questionURL)
        return results
    }
    catch (err) {
        console.log(err)
    }
}