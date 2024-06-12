import React, { useRef, useState } from 'react'
import useMeteoData from '../State/useMeteoData'
import Form from './Form'
import WeatherInfo from './WeatherInfo'

export default function WeatherCard() {
	const [city, setCity] = useState('Kyiv')
	const { data, error } = useMeteoData(city)

	const inputCityRef = useRef(null)

	const handleChangeCity = e => {
		setCity(e.target.value)
	}

	const handleSubmitCity = () => {
		if (inputCityRef.current) {
			setCity(inputCityRef.current.value)
		}
	}

	if (!data) {
		return <div>Loading...</div>
	}

	if (error) {
		return (
			<div>
				<h2>Error fetching weather data: {error}</h2>
			</div>
		)
	}

	return (
		<section className='items-center flex flex-col justify-center h-screen'>
			<div className='border-8 border-white border-t-sky-500 w-1/3 h-fit flex flex-col items-center justify-center text-white uppercase font-bold text-6xl gap-5 rounded-xl'>
				<Form
					handleChangeCity={handleChangeCity}
					city={city}
					handleSubmitCity={handleSubmitCity}
					ref={inputCityRef}
				/>
				<WeatherInfo data={data} />
			</div>
		</section>
	)
}
