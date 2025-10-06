document.getElementById("myForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Replace with your backend URL
    const apiUrl = "/api/submit"; 
    //const apiUrl = "http://172.31.26.58:5000/api/submit";

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });

        const data = await response.json();
        document.getElementById("response").innerText = JSON.stringify(data);
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("response").innerText = "Failed to submit form.";
    }
});
