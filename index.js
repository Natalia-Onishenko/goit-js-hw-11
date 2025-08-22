import{a as u,S as p,i}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="51915317-a5ee9a5ba63d3f1e31a6123a4",f="https://pixabay.com/api/";async function m(a){try{return(await u.get(f,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data}catch(t){return console.error("Помилка запиту до Pixabay API:",t),null}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(r=>`
      <a href="${r.largeImageURL}">
        <li class="photo-card">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${r.likes}</p>
            <p><b>Views:</b> ${r.views}</p>
            <p><b>Comments:</b> ${r.comments}</p>
            <p><b>Downloads:</b> ${r.downloads}</p>
          </div>
        </li>
      </a>`).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.add("visible")}function L(){l.classList.remove("visible")}const v=document.querySelector("#search-form");v.addEventListener("submit",w);async function w(a){a.preventDefault();const t=a.target.elements["search-text"],r=t.value.trim();if(!r){i.warning({title:"Увага",message:"Введіть пошуковий запит",position:"topRight"});return}g(),b();try{const s=await m(r);if(!s||s.hits.length===0){i.error({title:"Нічого не знайдено",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits),i.success({title:"Готово",message:`Знайдено ${s.totalHits} зображень`,position:"topRight"})}catch(s){console.error("Помилка при запиті:",s),i.error({title:"Помилка",message:"Сталася помилка при завантаженні даних.",position:"topRight"})}finally{L(),t.value="",t.focus()}}
//# sourceMappingURL=index.js.map
