const t=document.querySelector("#bookmarkInput"),e=document.querySelector("#addBookmarkBtn"),n=document.querySelector("#bookmarkList");let a=[];const o=function(){n.innerHTML=a.map((t,e)=>`<li>
      <a target="_blank" href="${t}">${t}</a>
      <button type="button" data-index="${e}" class="delete">Del</button>
      <button type="button" data-index="${e}" class="edit">Edit</button>
    </li>`).join("")};e.addEventListener("click",function(){let e=t.value.trim();e&&(a.push(e),t.value="",o())}),n.addEventListener("click",t=>{let e=t.target.dataset.index;if("BUTTON"===t.target.nodeName){if(t.target.classList.contains("edit")){let t=prompt("Редагуйте посилання",a[e]);t&&(a[e]=t,o())}t.target.classList.contains("delete")&&(a.splice(e,1),o())}});
//# sourceMappingURL=Js-Part4-Task8.1bcbf6a9.js.map
