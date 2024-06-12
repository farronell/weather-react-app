import { TiWeatherWindyCloudy } from 'react-icons/ti'

export default function Header() {
	return (
		<header className='flex flex-row justify-around text-white text-3xl font-bold gap-5 items-center p-5'>
			<TiWeatherWindyCloudy color='yellow' size='3rem' />
			<h1>Weather React App</h1>
			<p>by Farronell</p>
		</header>
	)
}
