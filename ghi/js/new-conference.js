window.addEventListener('DOMContentLoaded', async () => {
    const locationsUrl = 'http://localhost:8000/api/locations/';
    try {
        const locationsResponse = await fetch(locationsUrl);
        if (locationsResponse.ok) {
            const locationsData = await locationsResponse.json();
            const selectTag = document.querySelector('#location');
            for (let location of locationsData.locations) {
                const option = document.createElement('option');
                option.value = location.id;
                option.innerHTML = location.name;
                selectTag.appendChild(option);
            }

        } else { throw new Error('Response not ok'); }
    } catch (error) {
        console.error('error', error);
    }

    const formTag = document.getElementById('create-conference-form');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const conferenceUrl = ' http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: 'POST',
            body: json,
            headers: {'Content-Type': 'application/json',}
        };
        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newConference = await response.json();
        }

    });

});