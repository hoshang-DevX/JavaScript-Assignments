const outputDiv = document.getElementById('output');

// Function 1: Fetch JSON using `.then()`
document.getElementById('btnFetch').addEventListener('click', () => {
    fetch('data1.json')
        .then(response => response.json())
        .then(data => {
            outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Function 2: Fetch JSON using `async/await`
document.getElementById('btnAsync').addEventListener('click', async () => {
    try {
        const response = await fetch('data2.json');
        const data = await response.json();
        outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Function 3: Fetch multiple JSON files using `Promise.all`
document.getElementById('btnPromiseAll').addEventListener('click', async () => {
    const jsonFiles = ['data1.json', 'data2.json', 'data3.json'];

    try {
        const responses = await Promise.all(jsonFiles.map(file => fetch(file).then(res => res.json())));
        outputDiv.innerHTML = responses.map((data, index) => `<h3>Data from File ${index + 1}</h3><pre>${JSON.stringify(data, null, 2)}</pre>`).join('<hr>');
    } catch (error) {
        console.error('Error fetching multiple JSON files:', error);
    }
});
