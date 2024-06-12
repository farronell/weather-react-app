import useLocalTime from '../State/useLocalTime'

export default function WeatherInfo({ data }) {
	const localTime = useLocalTime(data)
	if (!data || !data.location || !data.current) {
		return <div>Loading...</div>
	}

	return (
		<>
			<h2>{data.location.name}</h2>
			<h3>{data.current.temp_c}°C</h3>
			<img
				src={data.current.condition.icon}
				alt={data.current.condition.text}
				className='w-[100px]'
			/>
			<p className='text-sm'>
				{localTime ? localTime.toLocaleString() : 'Loading...'}
			</p>
		</>
	)
}
