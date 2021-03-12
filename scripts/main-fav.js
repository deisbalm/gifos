
const containerFavourites = document.querySelector('.container');


const favouriteCard = (parentFav) =>{
    const favourite = document.createElement('div');
    favourite.classList.add('favourite');
    favourite.innerHTML = `
    <div class="gif-buttons">
    <img src="./images/icon-fav.svg" class="fav-btn">
    <img src="./images/icon-download.svg" class="download-btn">
    <img src="./images/icon-max-normal.svg" class="max-btn">
 </div>
 <div class="titles">
    <span id="user">User</span>
     <span id="gif-title">Titulo</span>
 </div> `

 parentFav.appendChild(favourite);


 //close
  const removeFavourite = (ev) =>{
         const favClick = ev.target
         favClick.closest('.favourite').remove();
  }

const removeBtn = document.querySelectorAll('.fav-btn')
  removeBtn.forEach(fav =>{
      addEventListener('click',removeFavourite);  
   });
}
//agregar

const addBtn = document.querySelector('.agregar');


const addFavourite = (ev) =>{
    favouriteCard(containerFavourites);
}

addBtn.addEventListener('click', addFavourite);