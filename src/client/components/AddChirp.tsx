import React from 'react';
import { useState, useEffect } from 'react';

const AddChirps = () => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const addChirp = (async () => {
		try {
			const res = await fetch("/chirps/add", {
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
		<div className="chirpInput card border-primary col-md-8 p-3 mt-3">
			<div className="card-body ">
				<form
					className="form-group mb-0 p-3">
					<input className="form control" type="text" name="name" id="name-input" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
					<textarea className="form-control" name="message" id="message-input" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
					<div className="text-right pt-3">
						<input className="btn btn-primary" type="submit" value="Chirp It!" onClick={addChirp} />
					</div>
				</form>
			</div>
		</div>
	
	);
};

export default AddChirps;