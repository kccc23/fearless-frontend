function createCard(name, description, pictureUrl, startDateStr, endDateStr) {
    return `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <img src="${pictureUrl}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            
            <p class="card-text">${description}</p>
          </div>
          <div class="card-footer text-muted">
            ${startDateStr} - ${endDateStr}
          </div>
        </div>
      </div>
    `;
  }

window.addEventListener('DOMContentLoaded', async () => {
  const url = 'http://localhost:8000/api/conferences/';
  try {
    const response = await fetch(url);

    if (!response.ok) { throw new Error('Response not ok'); }
    else {
      const data = await response.json();

      for (let conference of data.conferences) {
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        if (detailResponse.ok) {
          const details = await detailResponse.json();
          const name = details.conference.name;
          const description = details.conference.description;
          const pictureUrl = details.conference.location.picture_url;
          const startDate = new Date(details.conference.starts);
          const endDate = new Date(details.conference.ends);
          const startDateStr = startDate.toLocaleDateString();
          const endDateStr = endDate.toLocaleDateString();
          const html = createCard(name, description, pictureUrl, startDateStr, endDateStr);
          const row = document.querySelector('#conferences-row');
          row.innerHTML += html;
        }
      }

    }
  } catch (error) { console.error('error', error); }
});
