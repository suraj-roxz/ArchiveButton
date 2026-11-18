async function archiveFile() {
    const apiUrl = "https://vxwhiezra8.execute-api.us-east-1.amazonaws.com/archive";
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });

        const text = await response.text();

        if (response.ok) {
            alert("File archived successfully!");
        } else {
            alert("HTTP Error " + response.status + ": " + text);
        }

    } catch (error) {
        alert("Connection error: " + error.message);
    }
}
   
    