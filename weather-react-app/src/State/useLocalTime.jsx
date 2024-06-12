import { useEffect, useState } from 'react'

export default function useLocalTime(data) {
	const [localTime, setLocalTime] = useState(null)

	useEffect(() => {
		if (data && data.location) {
			const initialEpoch = data.location.localtime_epoch * 1000
			setLocalTime(new Date(initialEpoch))

			const intervalId = setInterval(() => {
				setLocalTime(prevTime => new Date(prevTime.getTime() + 1000))
			}, 1000)

			return () => clearInterval(intervalId)
		}
	}, [data])

	return localTime
}
