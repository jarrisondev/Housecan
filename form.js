const firebaseConfig = {
	apiKey: 'AIzaSyDUiAuCP8-P-hXUrwWYyJTO4oyX8kzpwIs',
	authDomain: 'housecan-96c37.firebaseapp.com',
	projectId: 'housecan-96c37',
	storageBucket: 'housecan-96c37.appspot.com',
	messagingSenderId: '7900809571',
	appId: '1:7900809571:web:7e12420322bc15d9102b56'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const button = document.getElementById('sendForm')

button.addEventListener('click', handleSubmit)

async function handleSubmit() {
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const subject = document.getElementById('subject').value

	if (!name || !email || !subject) alert('Por favor complete todos los campos')
	if (!email.includes('@')) alert('Por favor ingrese un email válido')

	try {
		await db.collection('requests').add({
			name,
			email,
			subject
		})
		alert('Su mensaje ha sido enviado con éxito')
	} catch (e) {
		console.error('Error adding document: ', e)
	}
}
