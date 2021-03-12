/*Apikey 66c34023cSlGF6JEhmYrNI0ejT49ZBFs

const CallImgApi = async(apiUrl) =>{
	try{
		const imgs = await fetch(apiUrl)
	    return imgs.json()
	}catch (error) {
	      console.log("Ocurrio un Error",error);
	}
   }

*/



//Llamar api giphy

const getSearchByTag = async (tag) =>{
    try{
        const tags = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=j4As5HO2OpUG2w2gTuuqQnIGuwOu2nnJ&limit=4&q=${tag}`);
        return tags.json();
    }catch(error){
        console.log('Ocurrió un error',error);
  }  
}


const getGifSearched = async (offset, gif) =>{
    try{
        const gifs = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=j4As5HO2OpUG2w2gTuuqQnIGuwOu2nnJ&limit=12&offset=${offset}&q=${gif}`);
        return gifs.json();
    }catch(error){
          console.log('Ocurrió un error',error);
    }
}




const inputSearch = document.querySelector('.sugerencias');
const suggestionContainer = document.querySelector('#lista-sugerencias');
const gifContainer = document.querySelector('.gif-container');
const gifTitle = document.querySelector('.gif-title');



const tagSuggested = async (ev) =>{
    
    suggestionContainer.innerHTML = '';
    gifTitle.innerHTML = inputSearch.value;

    if(ev.target.value.length >= 3){
    const tagName = await getSearchByTag(ev.target.value);
    tagName.data.forEach( tag => {
        const newLi = document.createElement('li');
        newLi.classList.add('tag');
        newLi.textContent = tag.name;
        suggestionContainer.appendChild(newLi);
        });
     }

     if(ev.keyCode === 13){
        
         const gifs = await getGifSearched(0,ev.target.value);
         gifs.data.forEach(gif =>{
              const divGif = document.createElement('div');
              divGif.classList.add('gif');
              const gifURL = gif.images.fixed_height.url;
              divGif.style.backgroundImage= `url(${gifURL})`; 
              divGif.innerHTML = `<div class="gif">
                 <div class="container-buttons">
                   <img src="./images/icon-fav.svg" class="btn">
                   <img src="./images/icon-download.svg" class="btn">
                   <img src="./images/icon-max-normal.svg" class="btn">
                   </div>
                  <div class="container-info">
                    <span id="user"></span>
                    <span id="gif-title"></span>
                  </div>       
             </div>
              `
              gifContainer.appendChild(divGif);
         });
     }
 }


 //el boton va a tener que responder al evento click,y mostrar mas imagenes
/*const seeMoreButton = document.createElement('button');
seeMoreButton.classList.add('more-btn');
seeMoreButton.textContent = 'VER MAS';
const header = document.querySelector('#header');
header.appendChild(seeMoreButton);

 */
      
  inputSearch.addEventListener('keyup', tagSuggested);


      

//ver como renovar los gifs al hacer una nueva busqueda
//boton ver mas
//trending gifos
//maximizar
//darle dinamismo a los botones de los gifs(descarga,favoritos)
//si no hay resultados poner la imagen de no-results
//carrousel 
//hover sobre el gif con toggle?????? en js????



//Trending api.giphy.com/v1/gifs/trending


const getTrendingGifos = async () =>{
    try{
       const trending = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=j4As5HO2OpUG2w2gTuuqQnIGuwOu2nnJ&limit=3');
       return trending.json();
    }catch(error){
        console.log('Ocurrió un error',error);
    }
}

document.addEventListener("DOMContentLoaded", async() => {
    const gifosTrending = await getTrendingGifos()
    showTrendingGifs(gifosTrending)
})


const showTrendingGifs = async () =>{
    const trendingContainer = document.querySelector('.carrousel-giftrending');

    const trendingGifs = await getTrendingGifos();
    trendingGifs.data.forEach(trend =>{
       const newTrending = document.createElement('div');
       newTrending.classList.add('trending');
       const trendURL = trend.images.fixed_height.url;
       newTrending.style.backgroundImage = `url(${trendURL})`;
       newTrending.innerHTML = `
       <div class="trending"> 
            <div class="gif-buttons">
                   <img src="./images/icon-fav.svg" class="btn">
                   <img src="./images/icon-download.svg" class="btn">
                   <img src="./images/icon-max-normal.svg" class="btn">
             </div>
           <div class="titles">
            <span id="user">${trend.username}</span>
            <span id="gif-title">${trend.title}</span>
          </div> 
        </div>
       `
     trendingContainer.appendChild(newTrending);

    });
}



// Modal

/* 
const showModal = (ev) =>{
    const modal = document.querySelector('.modal-container');
    modal.style.display = "none";
    modal.innerHTML = 
    `<div class="open-modal">
      <img src="${ev.target.image}" alt="${ev.target.title}">
      <i class="close-modal"><img src="./images/close.svg" alt="close"></i>
  </div>
  <div class="modal-info">
      <div class="modal-titles">
      <p>${ev.target.username}</p>
      <h4>${ev.target.title}</h4>
      </div>
      <div class="modal-btn">
          <i class="favoritos" id='${ev.target.id}'><img src="./images/icon-fav.svg" alt="favoritos"></i>
          <i class="download"><img src="./images/icon-download.svg" alt="download"></i>
      </div>
  </div>`
 document.querySelector('.open-modal > .close-modal').addEventListener('click',function(){
      modal.style.display = 'block'
});
  }

*/
