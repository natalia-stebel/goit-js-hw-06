const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  },
];

const galleryList = document.querySelector(".gallery");

galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.justifyContent = "space-evenly";


 const addNewImg = images.map(image => {
  const addNewImgEl = `<li><img src="${image.url}" alt="${image.alt}" heihgt="450" width="450"</li>`;
  return addNewImgEl;
  
});
galleryList.insertAdjacentHTML("beforeend", addNewImg);

// addNewImg(...images);
