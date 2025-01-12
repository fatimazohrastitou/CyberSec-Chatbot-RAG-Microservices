document.getElementById('model-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const initialNodes = document.getElementById('initial-nodes').value.split(',');
    const probability = document.getElementById('probability').value;

    const response = await fetch('/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initial_nodes: initialNodes, probability: probability })
    });

    const result = await response.json();
    const resultsDiv = document.getElementById('results');

    if (result.status === 'success') {
        resultsDiv.innerHTML = `
            <h2>Simulation Results</h2>
            <p>Infected Nodes: ${result.infected_nodes.join(', ')}</p>
            <p>Download CSV: <a href="${result.file}" download>Click here</a></p>
        `;
    } else {
        resultsDiv.innerHTML = `<p>Something went wrong. Please try again.</p>`;
    }
});
