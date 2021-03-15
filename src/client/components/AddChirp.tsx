import React from 'react';
import { useState, useEffect } from 'react';

const AddChirps = () => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const addChirp = (async () => {
		try {
			const res = await fetch("/add", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, message }),
			});

			const response = await res.json();

		} catch (error) {
			console.log(error);
		}
	});


	return (
		<div className="container">
			<div className="row">
				<input type="text" name="name" id="name-input" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className="row">
				<textarea name="message" id="message-input" cols={30} rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
			</div>
			<div className="row">
				<input type="submit" value="Chirp It!" onClick={addChirp} />
			</div>
		</div>
	);
};

export default AddChirps;