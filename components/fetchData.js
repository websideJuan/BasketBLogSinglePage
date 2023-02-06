// const option = {
    
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'ebb3a496e8msh85da687636962cep18b0d9jsn659f92ba3cd7',
//         'X-RapidAPI-Host': 'sports-live-scores.p.rapidapi.com'
//     }
// }
// export async function nameFunction () {
//     return await fetch('https://sports-live-scores.p.rapidapi.com/basketball/live', option)
//     .then(response => response.json())
    
//     .catch(error => console.log(error))
// }



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebb3a496e8msh85da687636962cep18b0d9jsn659f92ba3cd7',
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

export async function nameFunction () {
    return await fetch('https://aliexpress-datahub.p.rapidapi.com/store_item_search?storeId=1102051418&sellerId=231651707', options)
	.then(response => response.json())
	.catch(err => console.error(err));
}

