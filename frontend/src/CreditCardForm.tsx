import React, { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from './utils/constant';

const CreditCardForm: React.FC = () => {
	const [cardNumber, setCardNumber] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean | null>(null);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const response = await axios.post(`${BASE_API_URL}validate`, { cardNumber });
			setIsValid(response.data.valid);
		} catch (error) {
			console.error('There was an error validating the credit card:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="cardNumber">Credit Card Number:</label>
				<input
					type="text"
					id="cardNumber"
					value={cardNumber}
					onChange={(e) => setCardNumber(e.target.value)}
					required
				/>
			</div>
			<button type="submit">Validate</button>
			{isValid !== null && (
				<p>{isValid ? 'Valid Credit Card Number' : 'Invalid Credit Card Number'}</p>
			)}
		</form>
	);
};

export default CreditCardForm;
