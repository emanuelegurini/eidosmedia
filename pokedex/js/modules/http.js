export const httpGET = async (endpoint) => { 
	try {
		const res = await fetch(endpoint)
		
		if (!res.ok) {
			throw new Error(`HTTP ${res.status}: ${res.statusText}`);
		}

		return await res.json()
	} catch (error) {

		throw new Error(`Fetch error: ${url}: ${error.message}`)
	}
}