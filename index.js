import{a as d,S as f,i as n}from"./assets/vendor-BmZX0e86.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51915317-a5ee9a5ba63d3f1e31a6123a4",m="https://pixabay.com/api/";async function y(s){try{return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data}catch(o){return console.error("Помилка запиту до Pixabay API:",o),null}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
      <a href="${t.largeImageURL}">
        <li class="photo-card">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>
      </a>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const w=document.querySelector("#search-form");w.addEventListener("submit",v);async function v(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){n.warning({title:"Увага",message:"Введіть пошуковий запит"});return}b(),L();try{const a=await y(t);if(c(),!a||a.hits.length===0){n.error({title:"Нічого не знайдено",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(a.hits),n.success({title:"Готово",message:`Знайдено ${a.totalHits} зображень`})}catch{c(),n.error({title:"Помилка",message:"Сталася помилка при завантаженні даних."})}}
//# sourceMappingURL=index.js.map
