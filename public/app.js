document.addEventListener('DOMContentLoaded', () => {
  const backdate = document.getElementById('backdate');
  const backdateVal = document.getElementById('backdate-val');
  const randomness = document.getElementById('randomness');
  const randomVal = document.getElementById('random-val');
  const form = document.getElementById('boost-form');
  const statusMsg = document.getElementById('status-msg');
  const heatmapGrid = document.getElementById('heatmap-grid');

  backdate.addEventListener('input', (e) => {
    backdateVal.textContent = e.target.value;
    renderHeatmap();
  });

  randomness.addEventListener('input', (e) => {
    randomVal.textContent = e.target.value + '%';
    renderHeatmap();
  });

  function renderHeatmap() {
    heatmapGrid.innerHTML = '';
    const days = parseInt(backdate.value, 10);
    const density = parseInt(randomness.value, 10);
    const totalSquares = 365;

    for (let i = 0; i < totalSquares; i++) {
      const sq = document.createElement('div');
      sq.classList.add('sq');

      if (i >= (totalSquares - days)) {
        const active = Math.random() * 100 < density;
        if (active) {
          const level = Math.floor(Math.random() * 4) + 1;
          sq.classList.add(`sq-${level}`);
        } else {
          sq.classList.add('sq-0');
        }
      } else {
        sq.classList.add('sq-0');
      }

      heatmapGrid.appendChild(sq);
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusMsg.textContent = 'Generating boost.ps1 script...';

    const data = {
      username: document.getElementById('username').value,
      repo: document.getElementById('repo').value,
      backdateDays: parseInt(backdate.value, 10),
      minCommits: parseInt(document.getElementById('min-commits').value, 10),
      maxCommits: parseInt(document.getElementById('max-commits').value, 10),
      randomness: parseInt(randomness.value, 10)
    };

    try {
      const res = await fetch('/api/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();

      if (result.success) {
        statusMsg.textContent = '✅ boost.ps1 generated successfully in your project root!';
      } else {
        statusMsg.textContent = '❌ Error: ' + result.error;
      }
    } catch (err) {
      statusMsg.textContent = '❌ Request failed: ' + err.message;
    }
  });

  renderHeatmap();
});
