// Fade-in is handled purely in CSS (.reveal animation) — no JS needed,
// so content is always visible even if scripts fail to run.

// accordion menu (menu page) — tap a section to open, others close
const accItems=document.querySelectorAll('.acc-item');
if(accItems.length){
  accItems.forEach(item=>{
    const head=item.querySelector('.acc-head');
    head.addEventListener('click',()=>{
      const isOpen=item.classList.contains('open');
      accItems.forEach(i=>i.classList.remove('open'));
      if(!isOpen)item.classList.add('open');
    });
  });
}

// smoke parallax (hero)
window.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*28;
  const y=(e.clientY/window.innerHeight-.5)*28;
  const s1=document.querySelector('.s1'),s2=document.querySelector('.s2');
  if(s1)s1.style.transform=`translate(${x}px,${y}px)`;
  if(s2)s2.style.transform=`translate(${-x}px,${-y}px)`;
});
