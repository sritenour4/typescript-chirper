import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router'

const Admin = () => {
	const history = useHistory()
	const { id }= useParams()
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const deleteChirp = (async () => {
		try {
			await fetch(`/chirps/${id}`, {
				method: 'DELETE',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			});
			history.push('/')
		} catch (error) {
			console.log(error);
		}
	})

	const editChirp = (async () => {
		try {
			const res = await fetch(`/chirps/${id}`, {
				method: 'PUT',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, message }),
			});

			const response = await res.json();
			history.push('/')
		} catch (error) {
			console.log(error);
		}
	});


	return (
		<div className="container p-4">
			<div className="row">
			<input type="text" name="username" id="name-input" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className="row">
			<textarea name="message" id="message-input" cols={30} rows={10} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
			</div>
			<div className="row">
			<input type="submit" value="Update" onClick={editChirp} />
			<button onClick={deleteChirp}>Delete</button>
			</div>
		</div>
	);
};



export default Admin;