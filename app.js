// Fade-in is handled purely in CSS (.reveal animation) — no JS needed,
// so content is always visible even if scripts fail to run.

// catalog filter (menu page)
const chips=document.querySelectorAll('.chip');
const blocks=document.querySelectorAll('.cat-block');
if(chips.length){
  chips.forEach(c=>c.addEventListener('click',()=>{
    chips.forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
    const f=c.dataset.f;
    blocks.forEach(b=>b.classList.toggle('hide',f!=='all'&&b.dataset.cat!==f));
  }));
}

// smoke parallax (hero)
window.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*28;
  const y=(e.clientY/window.innerHeight-.5)*28;
  const s1=document.querySelector('.s1'),s2=document.querySelector('.s2');
  if(s1)s1.style.transform=`translate(${x}px,${y}px)`;
  if(s2)s2.style.transform=`translate(${-x}px,${-y}px)`;
});
</content>
