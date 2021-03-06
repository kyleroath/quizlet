import axios from 'axios'

let questionURL = `https://opentdb.com/api.php?amount=5`
const categoryURL = 'https://opentdb.com/api_category.php'

export const fetchData = async category => {
    let customURL = questionURL
    if(category) {
        customURL = `${questionURL}&category=${category}`
    }
    try {
        const { data: {results} } = await axios.get(customURL)
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

export const decodeHtml = html => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}