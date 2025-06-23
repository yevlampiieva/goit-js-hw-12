import{a as C,S as O,i}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w="36979931-b9ebd2c49fac6caefdf5e0dc3";async function u(a,t){return(await C.get("https://pixabay.com/api/",{params:{key:w,q:a,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".loader"),y=document.querySelector(".gallery"),L=document.querySelector(".load-more-btn");let P=new O(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(a){const t=a.map(({webformatURL:r,largeImageURL:m,tags:e,likes:s,views:c,comments:x,downloads:S})=>`<li class="gallery-item">
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
            <span class="image-inform-text">${c}</span>
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
    </li>`).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function H(){y.innerHTML=""}function b(){p.classList.remove("hidden")}function o(){p.classList.add("hidden")}function q(){L.classList.remove("hidden")}function l(){L.classList.add("hidden")}const f=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let g="",n=1,h=15,d=1;f.addEventListener("submit",z);M.addEventListener("click",$);l();o();async function z(a){if(a.preventDefault(),H(),b(),g=a.target.elements["search-text"].value.trim(),!g){i.error({message:"Please enter some valid search value!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),o(),l();return}try{n=1;const t=await u(g,n);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),o(),l();return}v(t.hits),o(),f.reset(),t.hits.length<h&&d===1?(l(),i.error({message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"})):q()}catch{i.error({message:"Please try again later",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),o(),f.reset()}}async function $(){n+=1,b();try{const a=await u(g,n);d=Math.ceil(a.totalHits/h),n>=d&&(l(),i.error({message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"})),o(),v(a.hits),n>d&&a.hits.length<=h&&l();const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}catch{i.error({message:"Please try again later",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"})}}
//# sourceMappingURL=index.js.map
