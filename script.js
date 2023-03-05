const getFoxImage = () => {
  return new Promise((resolve, reject) => {
    fetch('https://randomfox.ca/floof/')
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject('Failed to get fox image');
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

const showFoxImage = () => {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = 'Loading...';
  getFoxImage()
    .then(data => {
      const imageUrl = data.image;
      imageContainer.innerHTML = `<img id="fox-image" src="${imageUrl}" alt="Random fox image">`;
    })
    .catch(error => {
      imageContainer.innerHTML = `Error: ${error}`;
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  showFoxImage();
});
