const flavorsBtn = document.getElementById('flavorsBtn');
const flavorsList = document.getElementById('flavorsList');

flavorsBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot'); 
    const data = await response.json();
    flavorsList.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.title;
      flavorsList.appendChild(li);
    });
  } catch (error) {
    flavorsList.innerHTML = '<li>Error fetching flavors</li>';
    console.error(error);
  }
});