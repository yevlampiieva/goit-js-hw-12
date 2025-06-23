import{a as C,S as O,i as o}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w="36979931-b9ebd2c49fac6caefdf5e0dc3";async function u(a,t){return(await C.get("https://pixabay.com/api/",{params:{key:w,q:a,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".loader"),p=document.querySelector(".gallery"),y=document.querySelector(".load-more-btn");let H=new O(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(a){const t=a.map(({webformatURL:r,largeImageURL:m,tags:e,likes:s,views:l,comments:x,downloads:S})=>`<li class="gallery-item">
      <a class="gallery-link" href=${m}>
      <div class="image-container">
        <img class="gallery-image" src="${r}" alt="${e}" />
        </div>
        <div class="image-inform">
          <div>
            <h3 class="image-inform-title">Likes</h3>
            <span class="image-inform-text">${s}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Views</h3>
            <span class="image-inform-text">${l}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Comments</h3>
            <span class="image-inform-text">${x}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Downloads</h3>
            <span class="image-inform-text">${S}</span>
          </div>
        </div>
      </a>
    </li>`).join("");p.insertAdjacentHTML("beforeend",t),H.refresh()}function P(){p.innerHTML=""}function v(){h.classList.remove("hidden")}function i(){h.classList.add("hidden")}function M(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}const f=document.querySelector(".form"),q=document.querySelector(".load-more-btn"),$=document.querySelector(".gallery");let g="",n=1,b=15,d=1;f.addEventListener("submit",z);q.addEventListener("click",k);c();i();async function z(a){if(a.preventDefault(),P(),v(),g=a.target.elements["search-text"].value.trim(),!g){o.error({message:"Please enter some valid search value!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),i(),c();return}try{n=1;const t=await u(g,n);if(d=Math.ceil(t.totalHits/b),t.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),i(),c();return}L(t.hits),i(),f.reset(),n>=d?(c(),o.error({message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"})):M()}catch{o.error({message:"Please try again later",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),i(),f.reset()}}async function k(){n+=1,v();try{const a=await u(g,n);d=Math.ceil(a.totalHits/b),n>=d&&(c(),o.error({message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"})),i(),L(a.hits);const r=$.firstElementChild.getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}catch{o.error({message:"Please try again later",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"})}}
//# sourceMappingURL=index.js.map
