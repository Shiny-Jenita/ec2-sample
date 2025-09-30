const form = document.getElementById('myForm');
const responseEl = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    
    try {
        const res = await fetch('http://localhost:5000/api/submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        responseEl.innerText = result.message;
    } catch (err) {
        responseEl.innerText = 'Error submitting form.';
    }
});
