(function(){
  var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var WA='5511964330202',hov=matchMedia('(hover:hover)').matches,calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  var bar=$('#bar');addEventListener('scroll',function(){var h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
  var mb=$('.menu'),nav=$('nav');
  if(mb){mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});$$('nav a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)})})}
  var hero=$('.hero.main'),mark=$('.mark');
  if(hero&&hov&&!calm){hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;hero.style.setProperty('--mx',x+'px');hero.style.setProperty('--my',y+'px');
    if(mark)mark.style.transform='translate('+((x/r.width-.5)*-24)+'px,'+((y/r.height-.5)*-24)+'px) rotate('+((x/r.width-.5)*6)+'deg)'})}
  // palavra que muda no título
  var rot=$('#rot');
  if(rot&&!calm){var W=['trazem clientes','passam confiança','vendem por você','carregam rápido'],n=0;setInterval(function(){rot.classList.add('out');setTimeout(function(){n=(n+1)%W.length;rot.textContent=W[n];rot.classList.remove('out')},350)},2600)}
  // faixa em movimento
  var mq=$('.marq div');if(mq)mq.innerHTML+=mq.innerHTML;
  // planos
  var pl=$('#plans');
  if(pl)pl.innerHTML=(window.PLANOS||[]).map(function(p){return '<article class="plan gl" data-r>'+(p.destaque?'<span class="badge">Mais escolhido</span>':'')+'<h3>'+p.nome+'</h3><p class="d">'+p.desc+'</p><div class="price"><small>a partir de </small>R$ '+p.preco+'<small> '+p.periodo+'</small></div><ul>'+p.itens.map(function(i){return '<li>'+i+'</li>'}).join('')+'</ul><button class="btn'+(p.destaque?'':' solid')+'" data-plano="'+p.nome+'">Quero este plano</button></article>'}).join('');
  // portfólio
  var grid=$('#cards'),P=window.PROJETOS||[];
  if(grid){
    var tags=['Todos'].concat(P.map(function(p){return p.tag}).filter(function(t,i,a){return a.indexOf(t)===i})),chips=$('#chips');
    chips.innerHTML=tags.map(function(t,i){return '<button class="chip" aria-pressed="'+(i==0)+'">'+t+'</button>'}).join('');
    grid.innerHTML=P.map(function(p,i){var th=p.img?'<img src="'+p.img+'" alt="Projeto '+p.titulo+'" loading="lazy">':'<div class="mock v'+(i%3)+'"><i></i><i></i><i></i><i></i><i></i><i></i></div>';
      return '<button class="card gl" data-r data-i="'+i+'" data-tag="'+p.tag+'"><div class="thumb">'+th+'<span class="tag">'+(p.modelo?'Modelo · ':'')+p.tag+'</span></div><div class="meta"><h3>'+p.titulo+'</h3><p>'+p.resumo+'</p></div></button>'}).join('');
    chips.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;$$('.chip',chips).forEach(function(c){c.setAttribute('aria-pressed',c===b)});
      $$('.card',grid).forEach(function(c){c.hidden=b.textContent!=='Todos'&&c.dataset.tag!==b.textContent})});
    var dlg=$('#modal');
    grid.addEventListener('click',function(e){var c=e.target.closest('.card');if(!c)return;var p=P[c.dataset.i];
      $('.box',dlg).innerHTML='<button class="x" aria-label="Fechar">×</button><span class="sub">'+(p.modelo?'Projeto modelo · ':'')+p.tag+'</span><h3>'+p.titulo+'</h3><p>'+p.resumo+'</p><p>'+p.resultado+'</p>'+(p.link?'<a class="btn solid" href="'+p.link+'" target="_blank" rel="noopener">Ver projeto</a>':'')+'<a class="btn" href="https://wa.me/'+WA+'?text='+encodeURIComponent('Olá! Vi o projeto '+p.titulo+' no site da Cantus Faber e quero algo parecido.')+'">Quero algo parecido</a>';dlg.showModal()});
    dlg.addEventListener('click',function(e){if(e.target===dlg||e.target.closest('.x'))dlg.close()});
  }
  // plano -> formulário
  var f=$('#form');
  document.addEventListener('click',function(e){var b=e.target.closest('[data-plano]');if(!b||!f)return;f.plano.value=b.dataset.plano;$('#contato').scrollIntoView();setTimeout(function(){f.nome.focus({preventScroll:true})},500)});
  // envio do formulário (Netlify Forms)
  if(f){var ok=$('.msg',f);f.addEventListener('submit',function(e){e.preventDefault();var btn=$('button[type=submit]',f);btn.disabled=true;btn.textContent='Enviando...';
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
    .then(function(r){if(!r.ok)throw 0;f.reset();ok.className='msg show';ok.textContent='Mensagem enviada! Respondemos em até um dia útil. Se preferir, chame no WhatsApp.';btn.textContent='Enviada ✓'})
    .catch(function(){ok.className='msg show';ok.innerHTML='Não conseguimos enviar agora. Fale com a gente direto no <a href="https://wa.me/'+WA+'">WhatsApp</a> ou por e-mail.';btn.disabled=false;btn.textContent='Enviar mensagem'})})}
  // brilho que segue o cursor nos cartões
  if(hov)document.addEventListener('pointermove',function(e){var g=e.target.closest&&e.target.closest('.gl');if(!g)return;var r=g.getBoundingClientRect();g.style.setProperty('--x',(e.clientX-r.left)+'px');g.style.setProperty('--y',(e.clientY-r.top)+'px')});
  // entrada suave ao rolar
  var els=$$('[data-r]');$$('.bento,.plans,.cards,.steps').forEach(function(g){$$('[data-r]',g).forEach(function(c,i){c.style.setProperty('--i',i)})});
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(x){io.observe(x)})}else els.forEach(function(x){x.classList.add('in')});
  // cookies (para analytics: cole o script dentro de analytics(); só roda se a pessoa aceitar)
  function analytics(){}
  var k='cf-cookies',v=null;try{v=localStorage.getItem(k)}catch(e){}
  if(v==='aceito'){analytics();return}if(v==='recusado')return;
  var d=document.createElement('div');d.id='cf-cookies';d.setAttribute('role','dialog');d.setAttribute('aria-label','Aviso de cookies');
  d.innerHTML='<p>Usamos cookies opcionais para entender como o site é usado e melhorá-lo. A escolha é sua. Detalhes na <a href="privacidade.html">Política de Privacidade</a>.</p><button class="btn solid" data-c="aceito">Aceitar</button><button class="btn" data-c="recusado">Recusar</button>';
  d.addEventListener('click',function(e){var r=e.target.getAttribute&&e.target.getAttribute('data-c');if(!r)return;try{localStorage.setItem(k,r)}catch(x){}d.remove();if(r==='aceito')analytics()});
  document.body.appendChild(d);
})();
