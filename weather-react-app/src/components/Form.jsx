import React, { forwardRef, useState } from 'react'

const Form = forwardRef(({ handleChangeCity, city, handleSubmitCity }, ref) => {
	const [isValid, setIsValid] = useState('')

	const validInput = () => {
		if (!ref.current.value.trim()) {
			setIsValid('The input field cannot be empty.')
			return false
		}
		setIsValid('')
		return true
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (validInput()) {
			handleSubmitCity()
		}
	}

	return (
		<form onSubmit={handleSubmit} className='w-full p-4'>
			<select
				name='city'
				id='city'
				onChange={handleChangeCity}
				value={city}
				className='w-full text-black border-none rounded-sm focus-visible:outline-none mb-2'
			>
				<option value='Kyiv'>Kyiv</option>
				<option value='Paris'>Paris</option>
				<option value='London'>London</option>
			</select>
			<input
				type='text'
				placeholder={city}
				ref={ref}
				className='w-full text-black p-2 mb-2 border border-gray-300 rounded-sm'
			/>
			{isValid && <p className='text-red-500 text-lg'>{isValid}</p>}
			<button
				className='w-full text-black border border-sky-500 text-base bg-white p-2 rounded-sm'
				type='submit'
			>
				Search
			</button>
		</form>
	)
})

export default Form
