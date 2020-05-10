import axios from 'axios'

let questionURL = `https://opentdb.com/api.php?amount=5`
const categoryURL = 'https://opentdb.com/api_category.php'

export const fetchData = async (category) => {
    try {
        const { data: {results} } = await axios.get(`${questionURL}&category=${category}`)
        return results
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchCategories = async () => {
    try {
        const {data: {trivia_categories}} = await axios.get(categoryURL)
        return trivia_categories
    } catch (err) {
        console.log(err)
    }
}