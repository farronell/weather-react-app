import { useEffect, useState } from 'react'

export default function useMeteoData(city) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!city) {
			setError('City is required')
			return
		}

		const url = `http://api.weatherapi.com/v1/current.json?key=912636aaa79f470e833184741242905&query=${city}`

		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Error: ${response.status} ${response.statusText}`)
				}
				return response.json()
			})
			.then(json => setData(json))
			.catch(error => {
				console.error('Error fetching weather data:', error)
				setError(error.message)
			})
	}, [city])

	return { data, error }
}
