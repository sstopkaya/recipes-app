import axios from "axios"

export const getRecipesList = async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: size || '20',
          tags
        },
        headers: {
          'X-RapidAPI-Key': 'c65aa38926mshf312bc72d9ac0bbp1be530jsnbd5fb43297d6',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    return await axios.request(options)
}