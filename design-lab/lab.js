import {CONCEPTS,artURL,esc,VERSION} from './data.js';
const $=q=>document.querySelector(q);let active='serenity',appearance='light',compare='cozy',comparing=false;let focusBeforeDialog;
const key='morrow-design-choice-v1';
// A direction may finish loading after the host appearance changes.
for(const frame of [$('#app-frame'),$('#compare-frame')])frame.addEventListener('load',()=>frame.contentWindow.postMessage({type:'morrow-appearance',value:appearance},location.origin));
function stored(){try{return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}}
function choiceStatus(){const choice=stored();$('#choice-status').textContent=choice?`Saved choice: ${CONCEPTS.find(c=>c.id===choice.concept)?.name||'Unknown direction'}. You can change it anytime.`:'No direction chosen yet.';$('#clear-choice').hidden=!choice;}
function frameURL(id){return `app.html?concept=${encodeURIComponent(id)}&appearance=${appearance}`;}
function render(){
 const c=CONCEPTS.find(c=>c.id===active);
 $('#concept-list').innerHTML=CONCEPTS.map(item=>`<button type="button" class="concept-button" data-concept="${item.id}" aria-pressed="${item.id===active}"><img src="${artURL(item.hero)}" alt="" width="36" height="46"><div><strong>${esc(item.name)}</strong><span>${esc(item.family)}</span></div></button>`).join('');
 for(const [id,value] of Object.entries({'active-name':c.name,'active-family':c.family,'frame-name':c.name,'notes-name':c.name,'notes-summary':c.summary,'notes-structure':c.structure,'notes-strength':c.strength,'notes-tradeoff':c.tradeoff}))$('#'+id).textContent=value;
 $('#app-frame').src=frameURL(active);$('#app-frame').title=`Interactive ${c.name} app concept`;
 $('#choose-direction').textContent=`Choose ${c.name}`;
 $('#compare-with').innerHTML=CONCEPTS.filter(x=>x.id!==active).map(x=>`<option value="${x.id}" ${x.id===compare?'selected':''}>${esc(x.name)}</option>`).join('');
 if(compare===active){compare=CONCEPTS.find(x=>x.id!==active).id;$('#compare-with').value=compare;}
 updateCompare();choiceStatus();
 const url=new URL(location.href);url.searchParams.set('concept',active);history.replaceState(null,'',url);
}
function updateCompare(){
 $('.comparison').hidden=!comparing;$('.compare-choice').hidden=!comparing;
 $('.lab-layout').classList.toggle('comparing',comparing);$('#frames').classList.toggle('comparing',comparing);$('#compare-button').setAttribute('aria-pressed',String(comparing));
 if(comparing){$('#compare-frame').src=frameURL(compare);$('#compare-name').textContent=CONCEPTS.find(c=>c.id===compare).name;$('#compare-frame').title=`Interactive ${$('#compare-name').textContent} comparison concept`;}
}
function openDialog(id){focusBeforeDialog=document.activeElement;$(id).showModal();}
function closeDialog(dialog){dialog.close();focusBeforeDialog?.focus();}
$('#concept-list').addEventListener('click',event=>{const button=event.target.closest('[data-concept]');if(button){active=button.dataset.concept;render();$('#concept-list').querySelector(`[data-concept="${active}"]`)?.focus({preventScroll:true});}});
$('#appearance').addEventListener('change',e=>{appearance=e.target.value;$('#app-frame').contentWindow.postMessage({type:'morrow-appearance',value:appearance},location.origin);if(comparing)$('#compare-frame').contentWindow.postMessage({type:'morrow-appearance',value:appearance},location.origin);});
$('#compare-button').onclick=()=>{comparing=!comparing;updateCompare();};$('#compare-with').onchange=e=>{compare=e.target.value;updateCompare();};
$('#wide-mode').onclick=e=>{const enabled=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',String(enabled));$('.lab-layout').classList.toggle('roomy',enabled);};
$('#open-guide').onclick=()=>openDialog('#guide-dialog');
$('#choose-direction').onclick=()=>{$('#choice-description').textContent=`You are choosing ${CONCEPTS.find(c=>c.id===active).name}. Add any hybrid ideas or details to keep.`;$('#choice-notes').value=stored()?.notes||'';openDialog('#choice-dialog');};
$('#save-choice').onclick=()=>{
 const choice={version:VERSION,concept:active,name:CONCEPTS.find(c=>c.id===active).name,appearance,notes:$('#choice-notes').value.trim(),selectedAt:new Date().toISOString(),scope:'Design preference only; production Android app unchanged'};
 let persisted=true;try{localStorage.setItem(key,JSON.stringify(choice));}catch{persisted=false;}
 const url=URL.createObjectURL(new Blob([JSON.stringify(choice,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='morrow-design-choice.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);closeDialog($('#choice-dialog'));choiceStatus();if(!persisted)$('#choice-status').textContent='Choice downloaded. Browser storage is unavailable, so it was not saved locally.';
};
$('#clear-choice').onclick=()=>{try{localStorage.removeItem(key);}catch{}choiceStatus();};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeDialog(b.closest('dialog')));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('cancel',()=>focusBeforeDialog?.focus()));
const dimensions=[['Warmth','warmth'],['Minimalism','minimalism'],['Premium character','premium'],['Ease of use','ease'],['Discovery','discovery'],['Accessibility watchpoint','accessibility'],['Implementation practicality','practicality']];
$('#comparison-table').innerHTML=`<caption class="small-label">Design judgment based on the implemented concepts</caption><thead><tr><th scope="col">What matters</th>${CONCEPTS.map(c=>`<th scope="col">${esc(c.name)}</th>`).join('')}</tr></thead><tbody>${dimensions.map(([label,key])=>`<tr><th scope="row">${label}</th>${CONCEPTS.map(c=>`<td>${esc(c[key])}</td>`).join('')}</tr>`).join('')}</tbody>`;
const requested=new URLSearchParams(location.search).get('concept');if(CONCEPTS.some(c=>c.id===requested))active=requested;render();
