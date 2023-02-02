const encodedParams = new URLSearchParams();
encodedParams.append("url", "https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'eeafe880e6msh1e38474f636dbe4p1fc06ajsn5101ddf52f0d',
		'X-RapidAPI-Host': 'fashion4.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://fashion4.p.rapidapi.com/v1/results', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));