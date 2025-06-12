import{a as A,i as b,S as ve}from"./assets/vendor-Bjzu1yLH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const o={burgerBtnOpenMenu:document.querySelector(".icon-burger"),burgerBtnCloseMenu:document.querySelector(".icon-close"),headerMenuContainer:document.querySelector(".header-menu-container"),loaderOverlay:document.querySelector(".loader-in"),modalForm:document.querySelector(".feedback-mod"),stars:document.querySelectorAll(".star-rating path"),nameInput:document.querySelector('.feedback-mod [name="name"]'),messageInput:document.querySelector('.feedback-mod [name="message"]'),modalOverlayArtists:document.querySelector(".modal-overlay-artists"),closeBtn:document.querySelector(".close-btn-mod"),feedbackBtn:document.querySelector(".feedback-btn"),menuAnchorAbout:document.querySelector("#menu-anchor-about"),menuAnchorArtists:document.querySelector("#menu-anchor-artists"),menuAnchorReviews:document.querySelector("#menu-anchor-reviews"),artistsGrid:document.getElementById("artists-card-id"),loadMoreBtn:document.getElementById("load-more-btn"),loader:document.querySelector(".modal-loader"),modalOverlay:document.querySelector(".modal-overlay"),body:document.querySelector("body"),closeModalBtn:document.querySelector(".close-btn"),titleName:document.querySelector(".modal-info-title"),aboutArtist:document.querySelector(".modal-info-card"),modalAlboms:document.querySelector(".modal-alboms"),artistsSection:document.querySelector("#artists-card-id")},h="/project-chill/assets/sprite-HoBOwdhp.svg";function ge(e,t=h){const n=Math.floor(e),s=e-n,r=Math.round(s*100);let a="";for(let i=1;i<=5;i++)i<=n?a+=`
          <div class="star">
            <svg class="star-filled"><use href="${t}#star-filled"></use></svg>
          </div>`:i===n+1&&s>0?a+=`
          <div class="star">
            <svg class="star-bg"><use href="${h}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${r}%">
              <use href="${h}#star-filled"></use>
            </svg>
          </div>`:a+=`
          <div class="star">
            <svg class="star-bg"><use href="${h}#star-filled"></use></svg>
          </div>`;return`
      <li class="star-svg">
        <div class="star-container">
          ${a}
        </div>
      </li>`}function he(e,t){const n=e.map(s=>{var c;const r=s.strArtistThumb||"https://via.placeholder.com/350x350?text=No+Image",a=s.genres||[],i=((c=s.genres)==null?void 0:c.map(g=>`<li class="genre-tag">${g}</li>`).join(""))||"",v=s.strBiographyEN||"Короткий опис для цього артиста відсутній.";return`
        <li class="artist-card">
          <img src="${r}" alt="${s.strArtist}" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${i}</ul>
            <h3 class="artist-card-name">${s.strArtist}</h3>
            <p class="artist-card-description">${v}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${s._id}" data-genres='${JSON.stringify(a)}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${h}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `}).join("");t.insertAdjacentHTML("beforeend",n)}function ye(){o.headerMenuContainer.classList.add("is-open"),window.addEventListener("resize",V),o.menuAnchorAbout.addEventListener("click",p),o.menuAnchorArtists.addEventListener("click",p),o.menuAnchorReviews.addEventListener("click",p)}function p(){o.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",V),o.menuAnchorAbout.removeEventListener("click",p),o.menuAnchorArtists.removeEventListener("click",p),o.menuAnchorReviews.removeEventListener("click",p)}function V(){window.innerWidth>=768&&(o.headerMenuContainer.classList.remove("is-open"),window.removeEventListener("resize",V))}const be=8,S="https://sound-wave.b.goit.study/api",X="/artists",Le="/genres",we="/albums",Z="/feedbacks";async function Ee(e=1,t="",n="",s=""){const r={limit:be,page:e,...t&&{name:t},...n&&{sortName:n},...s&&{genre:s}};try{return(await A.get(`${S}${X}`,{params:r})).data}catch{b.error({title:"Error",message:"Failed to fetch artists.",position:"topRight"})}}async function ke(){try{return(await A.get(`${S}${Le}`)).data}catch{b.error({title:"Error",message:"Failed to fetch genres.",position:"topRight"})}}async function Ae(e){try{return(await A.get(`${S}${X}/${e}${we}`)).data}catch{b.error({title:"Error",message:"Failed to fetch albums.",position:"topRight"})}}async function Se(e=1){try{return(await A.get(`${S}${Z}`,{params:{page:e}})).data}catch{b.error({title:"Error",message:"Failed to fetch feedbacks.",position:"topRight"})}}async function $e(e){try{return(await A.post(`${S}${Z}`,e)).data}catch{b.error({title:"Error",message:"Failed to submit feedback.",position:"topRight"})}}function Me(){o.loader.classList.add("loader")}function ee(){o.loader.classList.remove("loader")}o.burgerBtnOpenMenu.addEventListener("click",ye);o.burgerBtnCloseMenu.addEventListener("click",p);function Be({name:e,rating:t,descr:n}){return`
    <div class="swiper-slide">
      <ul class="feedback-stars">${ge(t)}</ul>
      <p class="feedback-text">"${n}"</p>
      <p class="feedback-author">${e}</p>
    </div>
  `}function K(e,t,n){const s=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");s.classList.toggle("disabled",e===t),r.classList.toggle("disabled",e===n)}async function Ne(){const{data:e}=await Se(),t=e.slice(0,30),n=0,s=t.length-1,r=Math.floor(t.length/2);document.querySelector(".swiper-wrapper").innerHTML=t.map(Be).join("");const a=new ve(".swiper",{slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i=document.querySelector(".swiper-pagination");i.innerHTML=`
    <span class="swiper-pagination-bullet" data-i="${n}"></span>
    <span class="swiper-pagination-bullet" data-i="${r}"></span>
    <span class="swiper-pagination-bullet" data-i="${s}"></span>`,i.addEventListener("click",c=>{c.target.classList.contains("swiper-pagination-bullet")&&a.slideTo(+c.target.dataset.i)});function v(){const c=a.realIndex;document.querySelectorAll(".swiper-pagination-bullet").forEach(g=>{g.classList.toggle("active",+g.dataset.i===c)}),K(c,n,s)}a.on("slideChange",()=>{v(),K(a.realIndex,n,s)}),v()}Ne();const{loaderOverlay:te,modalForm:se,stars:ne,nameInput:Y,messageInput:z,modalOverlay:q,closeBtn:Te,feedbackBtn:qe}=o;function Ie(){te.classList.remove("hidden")}function Oe(){te.classList.add("hidden")}let f=0;ne.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{N(t+1)}),e.addEventListener("mouseleave",()=>{N(f)}),e.addEventListener("click",()=>{f=t+1,N(f)})});function N(e){ne.forEach((t,n)=>{n<e?t.setAttribute("fill","#a76cdb"):t.setAttribute("fill","#ffffff")})}function Ce(){q.classList.add("is-open")}qe.addEventListener("click",Ce);function I(){q.classList.remove("is-open")}Te.addEventListener("click",I);q.addEventListener("click",e=>{e.target===q&&I()});document.addEventListener("keydown",e=>{e.key==="Escape"&&I()});function De(){let e=!0,t=[];return(Y.value.trim().length<2||Y.value.trim().length>16)&&(e=!1,t.push("Name must be between 2 and 16 characters")),(z.value.trim().length<10||z.value.trim().length>512)&&(e=!1,t.push("Message must be between 10 and 512 characters.")),(f<1||f>5)&&(e=!1,t.push("Rating must be between 1 and 5 stars.")),e||t.forEach(n=>{b.error({title:"Error",message:n,position:"topRight",timeout:3e3,pauseOnHover:!0})}),e}function He(){se.reset(),N(0),f=0}se.addEventListener("submit",async e=>{if(e.preventDefault(),!De())return;const t={name:Y.value.trim(),rating:f,descr:z.value.trim()};Ie(),await $e(t),I(),He(),Oe()});const y="/project-chill/assets/sprite-HoBOwdhp.svg";let l=1,w="",E="",$="";const xe=8,k=document.getElementById("searchInput"),u=document.getElementById("genreDropdown"),O=document.getElementById("genreToggle"),re=document.getElementById("genreList"),m=document.getElementById("sortingDropdown"),C=document.getElementById("sortingToggle"),Fe=document.getElementById("sortingList"),Pe=document.getElementById("resetBtn"),Re=document.getElementById("resetFiltersBtn"),W=document.querySelector(".icon-chevron"),_e=document.getElementById("artists-card-id"),j=document.querySelector(".spinner"),J=o.artistsGrid,T=o.loadMoreBtn,Q=document.getElementById("emptyState"),Ge=document.querySelector(".search-and-filters-opener"),U=document.querySelector(".filters-panel"),L=document.querySelector(".scrollBtnUp");function M(){u.classList.remove("open"),m.classList.remove("open")}O.addEventListener("click",()=>{u.classList.contains("open")?(u.classList.remove("open"),u.querySelector(".icon-chevron").innerHTML=`<use href="${y}#icon-chevron-up-arrow"></use>`):(M(),u.classList.add("open"),u.querySelector(".icon-chevron").innerHTML=`<use href="${y}#icon-chevron-down-arrow"></use>`)});C.addEventListener("click",()=>{m.classList.contains("open")?(m.classList.remove("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${y}#icon-chevron-up-arrow"></use>`):(M(),m.classList.add("open"),m.querySelector(".icon-chevron").innerHTML=`<use href="${y}#icon-chevron-down-arrow"></use>`)});document.addEventListener("click",e=>{!u.contains(e.target)&&!m.contains(e.target)&&M()});Ge.addEventListener("click",()=>{U.classList.toggle("open"),U.classList.contains("open")?W.innerHTML=`<use href="${y}#icon-chevron-down-arrow"></use>`:W.innerHTML=`<use href="${y}#icon-chevron-up-arrow"></use>`});async function je(){const e=await ke();e!=null&&e.length&&(re.innerHTML='<div class="dropdown-item" data-value="">Default</div>'+e.map(t=>`<div class="dropdown-item" data-value="${t.genre}">${t.genre}</div>`).join(""))}je();Fe.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(E=e.target.dataset.value==="default"?"":e.target.dataset.value,C.querySelector(".dropdown-title").textContent=`${E||"Default"}`,l=1,M(),d(!0))});re.addEventListener("click",e=>{e.target.classList.contains("dropdown-item")&&(w=e.target.dataset.value==="Default"?"":e.target.dataset.value,O.querySelector(".dropdown-title").textContent=`${w||"Default"}`,l=1,M(),d(!0))});k.addEventListener("keydown",e=>{e.key==="Enter"&&($=k.value.trim(),l=1,d(!0))});U.addEventListener("submit",e=>{e.preventDefault(),$=k.value.trim(),l=1,d(!0)});Pe.addEventListener("click",()=>{w="",E="",$="",k.value="",O.textContent="Default",C.textContent="Default",l=1,d(!0)});Re.addEventListener("click",()=>{w="",E="",$="",k.value="",O.textContent="Default",C.textContent="Default",l=1,d(!0)});T.addEventListener("click",()=>{l++,d()});async function d(e=!1){T.style.display="none",Q.classList.add("hidden"),j.classList.remove("hidden"),e&&(J.innerHTML="");const t={page:l,name:$,sortName:E||void 0,genre:w||void 0},n=await Ee(t.page,t.name,t.sortName,t.genre),s=(n==null?void 0:n.artists)||[];if(e&&s.length===0){Q.classList.remove("hidden"),_e.innerHTML="",j.classList.add("hidden");return}he(s,J),s.length===xe?T.style.display="flex":T.style.display="none",j.classList.add("hidden")}d(!0);function Ye(){window.scrollY>(document.body.scrollHeight-window.innerHeight)/2?L.classList.add("visible-scrollBtn"):L.classList.remove("visible-scrollBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}L.classList.contains("visible-scrollBtn")?L.addEventListener("click",e):L.removeEventListener("click",e)}document.addEventListener("scroll",Ye);function oe(e){e.target===o.modalOverlayArtists&&D()}function ae(e){o.modalOverlayArtists.classList.contains("is-open")&&e.key==="Escape"&&D()}function ze(e,t){const n=parseInt(e,10),s=parseInt(t,10);return isNaN(n)&&isNaN(s)?"information missing":!isNaN(n)&&isNaN(s)?`${n}–present`:!isNaN(n)&&!isNaN(s)?`${n}–${s}`:"information missing"}function Ue(e){if(typeof e=="string"){const a=parseInt(e,10);if(isNaN(a))return"N/A";e=a}if(e==null||isNaN(e))return"N/A";const t=Math.floor(e/1e3),n=Math.floor(t/60),s=t%60,r=s<10?`0${s}`:s;return`${n}:${r}`}async function Ve(e,t=[]){Me();const n=o.aboutArtist.querySelector(".modal-info-description");n&&(n.innerHTML=""),o.modalAlboms.innerHTML="";const s=await Ae(e),{strArtist:r,strArtistThumb:a,strGender:i,intMembers:v,strCountry:c,strBiographyEN:g,intFormedYear:ie,intDisbandedYear:ce,albumsList:H}=s;o.titleName.textContent=r||"N/A";const le=ze(ie,ce);let x="";t&&Array.isArray(t)&&t.length>0&&(x=t.map(B=>`<span class="genre-tag">${B.trim()}</span>`).join(""));const de=` <img class="ph-artist" src="${a}" alt="${r}" />
  <div class="modal-info-description">
            <div class="modal-info-list">
                <div class="wrap-info-item">
                <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Years active</span>
                        <span class="detail-value">${le}</span>
                    </div>
                    <div class="modal-info-item">
                      <span class="detail-label">Sex</span>
                       <span class="detail-value">${i||"N/A"}</span>
                    </div>
                    </div>
                    <div class="wrapp">
                    <div class="modal-info-item">
                        <span class="detail-label">Members</span>
                        <span class="detail-value">${v||"N/A"}</span>
                    </div>
                    <div class="modal-info-item">
                        <span class="detail-label">Country</span>
                        <span class="detail-value">${c||"N/A"}</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="biography">
                <h5 class="detail-label">Biography</h5>
                <p class="modal-info-bio">
                    ${g||"No biography available."}
                </p>
            </div>
            ${x?`<div class="genres">${x}</div>`:""}
            </div>`;o.aboutArtist.innerHTML=de;let F="";H&&H.length>0?H.forEach(B=>{const ue=B.strAlbum||"Unknown Album",P=B.tracks;let R="";P&&P.length>0?P.forEach((_,me)=>{const pe=(me+1)%2===0?"albom-track even":"albom-track odd",G=_.movie,fe=typeof G=="string"&&G.trim()!==""?`<a class="link-icon-youtube" href="${G}" target="_blank" rel="noopener noreferrer" aria-label="Watch on YouTube">
                                <svg class="icon-you-tube">
                                    <use href="${h}#icon-you-tube"></use>
                                </svg>
                            </a>`:'<span class="youtube-link-placeholder"></span>';R+=`
                            <li class="${pe}">
                                <span>${_.strTrack||"No track name"}</span>
                                <span>${Ue(_.intDuration)}</span>
                                ${fe}
                            </li>
                        `}):R='<li class="albom-track no-tracks">No tracks available for this album.</li>',F+=`
                    <ul class="modal-alboms-list-item">
                        <li class="albom-list-title">
                            <span class="albom-title">${ue}</span>
                        </li>
                        <li class="track-info">
                            <span>Track</span>
                            <span>Time</span>
                            <span>Link</span>
                        </li>
                        ${R}
                    </ul>
                `}):F='<p class="no-albums-message">No albums found for this artist.</p>',o.modalAlboms.insertAdjacentHTML("beforeend",F),o.modalOverlayArtists.classList.add("is-open"),o.body.classList.add("no-scroll"),o.closeModalBtn.addEventListener("click",D),o.modalOverlayArtists.addEventListener("click",oe),document.addEventListener("keydown",ae),ee()}function D(){o.modalOverlayArtists.classList.remove("is-open"),o.body.classList.remove("no-scroll"),o.closeModalBtn.removeEventListener("click",D),o.modalOverlayArtists.removeEventListener("click",oe),document.removeEventListener("keydown",ae),ee()}o.artistsSection?o.artistsSection.addEventListener("click",e=>{const t=e.target.closest(".artist-card-link");if(t){const n=t.dataset.artistId;let s=[];const r=t.dataset.genres;if(r)try{s=JSON.parse(r)}catch(a){console.error("Error parsing genres from data attribute:",a),s=[]}Ve(n,s)}}):console.warn('Виконавців з ID "artists-card-id" не знайдено.');
//# sourceMappingURL=index.js.map
