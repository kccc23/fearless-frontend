window.addEventListener('DOMContentLoaded', async () => {
    const statesUrl = 'http://localhost:8000/api/states/';
    try {
        const statesResponse = await fetch(statesUrl);
        if (statesResponse.ok) {
            const statesData = await statesResponse.json();
            const selectTag = document.getElementById('state');
            for (let state of statesData.states) {
                const option = document.createElement('option');
                option.value = state.abbreviation;
                option.innerHTML = state.name;
                selectTag.appendChild(option);
            }

        } else { throw new Error('Response not ok'); }
    } catch (error) {
        console.error('error', error);
    }

    const formTag = document.getElementById('create-location-form');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
            method: 'POST',
            body: json,
            headers: {'Content-Type': 'application/json',}
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newLocation = await response.json();
        }

    });

});
