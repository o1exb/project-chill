import{a as k,i as y,S as fe}from"./assets/vendor-Bjzu1yLH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const a={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},c="/project-chill/assets/sprite-HoBOwdhp.svg";function ve(e,t=c){const n=Math.floor(e),s=e-n,r=Math.round(s*100);let o="";for(let i=1;i<=5;i++)i<=n?o+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===n+1&&s>0?o+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${r}%">
              <use href="${c}#star-filled"></use>
            </svg>
          </div>`:o+=`
          <div class="star">
            <svg class="star-bg"><use href="${c}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${o}
        </div>
      </li>`}function ge(e,t){const n=e.map(s=>{var l;const r=s.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",o=s.genres||[],i=((l=s.genres)==null?void 0:l.map(h=>`<li class="genre-tag">${h}</li>`).join(""))||"",g=s.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${r}" alt="${s.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${s.strArtist}</h3>
            <p class="artist-card-description">${g}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${s._id}" data-genres='${JSON.stringify(o)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${c}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",n)}function he(){a.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",U),a.menuAnchorAbout.addEventListener("click",f),a.menuAnchorArtists.addEventListener("click",f),a.menuAnchorReviews.addEventListener("click",f)}function f(){a.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",U),a.menuAnchorAbout.removeEventListener("click",f),a.menuAnchorArtists.removeEventListener("click",f),a.menuAnchorReviews.removeEventListener("click",f)}function U(){window.innerWidth>=768&&(a.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",U))}const ye=8,A="https://sound-wave.b.goit.study/api",Q="/artists",be="/genres",Le="/albums",X="/feedbacks";async function we(e=1,t="",n="",s=""){const r={limit:ye,page:e,...t&&{name:t},...n&&{sortName:n},...s&&{genre:s}};try{return(await k.get(`${A}${Q}`,{params:r})).data}catch{y.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function Ee(){try{return(await k.get(`${A}${be}`)).data}catch{y.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function ke(e){try{return(await k.get(`${A}${Q}/${e}${Le}`)).data}catch{y.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function Ae(e=1){try{return(await k.get(`${A}${X}`,{params:{page:e}})).data}catch{y.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function Se(e){try{return(await k.post(`${A}${X}`,e)).data}catch{y.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}function $e(){a.loader.classList.add("loader")}function Z(){a.loader.classList.remove("loader")}a.burgerBtnOpenMenu.addEventListener("click",he);a.burgerBtnCloseMenu.addEventListener("click",f);function Me({name:e,rating:t,descr:n}){return`
    <div class="swiper-slide">
      <ul class="feedback-stars">${ve(t)}</ul>
      <p class="feedback-text">"${n}"</p>
      <p class="feedback-author">${e}</p>
    </div>
  `}function V(e,t,n){const s=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");s.classList.toggle("disabled",e===t),r.classList.toggle("disabled",e===n)}async function Be(){const{data:e}=await Ae(),t=e.slice(0,30),n=0,s=t.length-1,r=Math.floor(t.length/2);document.querySelector(".swiper-wrapper").innerHTML=t.map(Me).join("");const o=new fe(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=document.querySelector(".swiper-pagination");i.innerHTML=`
    <span class="swiper-pagination-bullet" data-i="${n}"></span>
    <span class="swiper-pagination-bullet" data-i="${r}"></span>
    <span class="swiper-pagination-bullet" data-i="${s}"></span>`,i.addEventListener("click",l=>{l.target.classList.contains("swiper-pagination-bullet")&&o.slideTo(+l.target.dataset.i)});function g(){const l=o.realIndex;document.querySelectorAll(".swiper-pagination-bullet").forEach(h=>{h.classList.toggle("active",+h.dataset.i===l)}),V(l,n,s)}o.on("slideChange",()=>{g(),V(o.realIndex,n,s)}),g()}Be();const{loaderOverlay:ee,modalForm:te,stars:se,nameInput:j,messageInput:Y,modalOverlay:T,closeBtn:Ne,feedbackBtn:Te}=a;function qe(){ee.classList.remove("hidden")}function Ie(){ee.classList.add("hidden")}let v=0;se.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{B(t+1)}),e.addEventListener("mouseleave",()=>{B(v)}),e.addEventListener("click",()=>{v=t+1,B(v)})});function B(e){se.forEach((t,n)=>{n<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Oe(){T.classList.add("is-open")}Te.addEventListener("click",Oe);function q(){T.classList.remove("is-open")}Ne.addEventListener("click",q);T.addEventListener("click",e=>{e.target===T&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});function Ce(){let e=!0,t=[];return(j.value.trim().length<2||j.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(Y.value.trim().length<10||Y.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(v<1||v>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(n=>{y.error({title:"Error",message:n,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function De(){te.reset(),B(0),v=0}te.addEventListener("submit",async e=>{if(e.preventDefault(),!Ce())return;const t={name:j.value.trim(),rating:v,descr:Y.value.trim()};qe(),await Se(t),q(),De(),Ie()});let d=1,L="",w="",S="";const He=8,E=document.getElementById("searchInput"),m=document.getElementById("genreDropdown"),I=document.getElementById("genreToggle"),ne=document.getElementById("genreList"),p=document.getElementById("sortingDropdown"),O=document.getElementById("sortingToggle"),xe=document.getElementById("sortingList"),Fe=document.getElementById("resetBtn"),Pe=document.getElementById("resetFiltersBtn"),K=document.querySelector(".icon-chevron"),Re=document.getElementById("artists-card-id"),G=document.querySelector(".spinner"),W=a.artistsGrid,N=a.loadMoreBtn,J=document.getElementById("emptyState"),_e=document.querySelector(".search-and-filters-opener"),z=document.querySelector(".filters-panel"),b=document.querySelector(".scrollBtnUp");function $(){m.classList.remove("open"),p.classList.remove("open")}I.addEventListener("click",()=>{m.classList.contains("open")?(m.classList.remove("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):($(),m.classList.add("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});O.addEventListener("click",()=>{p.classList.contains("open")?(p.classList.remove("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`):($(),p.classList.add("open"),p.querySelector(".icon-chevron").innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`)});document.addEventListener("click",e=>{!m.contains(e.target)&&!p.contains(e.target)&&$()});_e.addEventListener("click",()=>{z.classList.toggle("open"),z.classList.contains("open")?K.innerHTML=`<use href="${c}#icon-chevron-down-arrow"></use>`:K.innerHTML=`<use href="${c}#icon-chevron-up-arrow"></use>`});async function Ge(){const e=await Ee();e!=null&&e.length&&(ne.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}Ge();xe.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(w=e.target.dataset.value==="default"?"":e.target.dataset.value,O.querySelector(".dropdown-title").textContent=`${w||"Default"}`,d=1,$(),u(!0))});ne.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(L=e.target.dataset.value==="Default"?"":e.target.dataset.value,I.querySelector(".dropdown-title").textContent=`${L||"Default"}`,d=1,$(),u(!0))});E.addEventListener("keydown",e=>{e.key==="Enter"&&(S=E.value.trim(),d=1,u(!0))});z.addEventListener("submit",e=>{e.preventDefault(),S=E.value.trim(),d=1,u(!0)});Fe.addEventListener("click",()=>{L="",w="",S="",E.value="",I.textContent="Default",O.textContent="Default",d=1,u(!0)});Pe.addEventListener("click",()=>{L="",w="",S="",E.value="",I.textContent="Default",O.textContent="Default",d=1,u(!0)});N.addEventListener("click",()=>{d++,u()});async function u(e=!1){N.style.display="none",J.classList.add("hidden"),G.classList.remove("hidden"),e&&(W.innerHTML="");const t={page:d,name:S,sortName:w||void 0,genre:L||void 0},n=await we(t.page,t.name,t.sortName,t.genre),s=(n==null?void 0:n.artists)||[];if(e&&s.length===0){J.classList.remove("hidden"),Re.innerHTML="",G.classList.add("hidden");return}ge(s,W),s.length===He?N.style.display="flex":N.style.display="none",G.classList.add("hidden")}u(!0);function je(){window.scrollY>(document.body.scrollHeight-window.innerHeight)/2?b.classList.add("visible-scrollBtn"):b.classList.remove("visible-scrollBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}b.classList.contains("visible-scrollBtn")?b.addEventListener("click",e):b.removeEventListener("click",e)}document.addEventListener("scroll",je);function re(e){e.target===a.modalOverlayArtists&&C()}function ae(e){a.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&C()}function Ye(e,t){const n=parseInt(e,10),s=parseInt(t,10);return isNaN(n)&&isNaN(s)?"information missing":!isNaN(n)&&isNaN(s)?`${n}–present`:!isNaN(n)&&!isNaN(s)?`${n}–${s}`:"information missing"}function ze(e){if(typeof e=="string"){const o=parseInt(e,10);if(isNaN(o))return"N/A";e=o}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),n=Math.floor(t/60),s=t%60,r=s<10?`0${s}`:s;return`${n}:${r}`}async function Ue(e,t=[]){$e();const n=a.aboutArtist.querySelector(".modal-info-description");n&&(n.innerHTML=""),a.modalAlboms.innerHTML="";const s=await ke(e),{strArtist:r,strArtistThumb:o,strGender:i,intMembers:g,strCountry:l,strBiographyEN:h,intFormedYear:oe,intDisbandedYear:ie,albumsList:D}=s;a.titleName.textContent=r||"N/A";const ce=Ye(oe,ie);let H="";t&&Array.isArray(t)&&t.length>0&&(H=t.map(M=>`<span class="genre-tag">${M.trim()}</span>`).join(""));const le=` <img class="ph-artist" src="${o}" alt="${r}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${ce}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${i||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${g||"N/A"}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="detail-label">Country</span>
                        <span class="detail-value">${l||"N/A"}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h5 class="detail-label">Biography</h5>
                <p class="modal-info-bio">
                    ${h||"No biography available."}
                </p>
            </div>
            ${H?`<div class="genres">${H}</div>`:""}
            </div>`;a.aboutArtist.innerHTML=le;let x="";D&&D.length>0?D.forEach(M=>{const de=M.strAlbum||"Unknown Album",F=M.tracks;let P="";F&&F.length>0?F.forEach((R,ue)=>{const me=(ue+1)%2===0?"albom-track even":"albom-track odd",_=R.movie,pe=typeof _=="string"&&_.trim()!==""?`<a class="link-icon-youtube" href="${_}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${c}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';P+=`
                            <li class="${me}">
                                <span>${R.strTrack||"No track name"}</span>
                                <span>${ze(R.intDuration)}</span>
                                ${pe}
                            </li>
                        `}):P='<li class="albom-track no-tracks">No tracks available for this album.</li>',x+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${de}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${P}
                    </ul>
                `}):x='<p class="no-albums-message">No albums found for this artist.</p>',a.modalAlboms.insertAdjacentHTML("beforeend",x),a.modalOverlayArtists.classList.add("is-open"),a.body.classList.add("no-scroll"),a.closeModalBtn.addEventListener("click",C),a.modalOverlayArtists.addEventListener("click",re),document.addEventListener("keydown",ae),Z()}function C(){a.modalOverlayArtists.classList.remove("is-open"),a.body.classList.remove("no-scroll"),a.closeModalBtn.removeEventListener("click",C),a.modalOverlayArtists.removeEventListener("click",re),document.removeEventListener("keydown",ae),Z()}a.artistsSection?a.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const n=t.dataset.artistId;let s=[];const r=t.dataset.genres;if(r)try{s=JSON.parse(r)}catch(o){console.error("Error parsing genres from data attribute:",o),s=[]}Ue(n,s)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
