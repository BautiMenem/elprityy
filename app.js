(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const durationScale = prefersReduced ? .6 : 1;
  const PRITTY_WHATSAPP='5493517616516';
  const whatsappUrl=message=>'https://wa.me/'+PRITTY_WHATSAPP+'?text='+encodeURIComponent(message);
  const directWhatsAppMessage=()=>currentLang==='es'
    ?'Hola Pritty, vi tu página y quiero consultar por el acompañamiento personalizado.'
    :'Hi Pritty, I saw your website and I would like to ask about personalized coaching.';

  const translations = {
    es:{
      'nav.method':'MÉTODO','nav.track':'SEGUIMIENTO','nav.about':'SOBRE MÍ','nav.start':'EVALUACIÓN ↘','nav.methodArrow':'MÉTODO →','nav.trackArrow':'SEGUIMIENTO →','nav.aboutArrow':'SOBRE MÍ →','nav.startArrow':'EMPEZAR →',
      'hero.system':'ENTRENAMIENTO · HÁBITOS · SEGUIMIENTO','hero.liveSystem':'PRITTY // 2026','hero.kicker':'SIN VUELTAS. CON MÉTODO.','hero.l1':'MENOS VUELTAS.','hero.l2':'MÁS PROGRESO.','hero.l3':'ENTRENÁ. MEDÍ.','hero.l4':'AJUSTÁ.','hero.sub':'Preparación personalizada para entrenar mejor, comer mejor y sostener el proceso.','hero.body':'Sin planes copiados. Sin extremos. Lo que funciona, se mantiene; lo que no, se ajusta.','hero.cta':'QUIERO EMPEZAR ↘','hero.how':'VER CÓMO FUNCIONA ↓','hero.instagram':'INSTAGRAM ↗','hero.profile':'PRITTY','hero.live':'● ACTIVO // 06','hero.placeholder':'PRITTY // 01','hero.adherence':'ADHERENCIA','hero.strength':'FUERZA','hero.checkin':'SEMANA DE CONTROL','hero.status':'ESTADO: AJUSTANDO EL PROCESO','hero.slots':'CONSULTAS ABIERTAS','hero.training':'ENTRENAMIENTO 01','hero.nutrition':'HÁBITOS 02','hero.tracking':'SEGUIMIENTO 03','hero.adaptation':'ADAPTACIÓN ∞',
      'principle.label':'02 / PRINCIPIO','principle.title':'LO SIMPLE FUNCIONA<br>SI ESTÁ BIEN HECHO.','principle.sub':'No necesitás hacer todo perfecto.','principle.body':'Necesitás saber qué hacer, medir si está funcionando y ajustar cuando haga falta. El método tiene que acompañar tu vida, no complicarla.','principle.system':'EL MÉTODO','principle.train':'ENTRENÁ','principle.feed':'ALIMENTATE','principle.measure':'MEDÍ','principle.learn':'ENTENDÉ','principle.adapt':'AJUSTÁ','principle.statement1':'MENOS<br>RUIDO.','principle.statement2':'MÁS CONSISTENCIA.<br>MÁS PROGRESO.',
      'engine.label':'03 / TU PLAN','engine.title':'TU PLAN NO SE<br>COPIA. <span class="lime">SE CONSTRUYE.</span>','engine.sub':'Partimos de tu realidad: horarios, entrenamiento, alimentación, descanso y objetivo.','engine.input':'TU CONTEXTO','engine.ready':'LISTO PARA AJUSTAR','engine.goal':'OBJETIVO','engine.training':'ENTRENAMIENTO','engine.context':'CONTEXTO','engine.nutrition':'ALIMENTACIÓN','engine.sleep':'SUEÑO','engine.stress':'ESTRÉS','engine.goalValue':'RECOMPOSICIÓN','engine.trainingValue':'4 DÍAS / 60 MIN','engine.contextValue':'GIMNASIO + VIAJE','engine.nutritionValue':'3 COMIDAS / FLEX','engine.sleepValue':'PROM. 7.1 H','engine.stressValue':'MEDIO','engine.measure':'MEDIR','engine.interpret':'INTERPRETAR','engine.adjust':'AJUSTAR','engine.repeat':'REPETIR','engine.output':'TU SEMANA / 07','engine.protocol':'PLAN 07.4','engine.p1t':'ENTRENAMIENTO — TORSO / PIERNA','engine.p1b':'14 series efectivas · RIR 1–3','engine.p2t':'HÁBITOS — ESTRUCTURA FLEXIBLE','engine.p2b':'3 COMIDAS · OPCIONES SIMPLES · CONTEXTO REAL','engine.p3t':'CONTROL — DOMINGO (FLEXIBLE)','engine.p3b':'Fotos + métricas + contexto','engine.note':'“Subimos volumen de espalda +2 series. Mantenemos la estructura.”','engine.confidence':'CONSISTENCIA DEL PLAN',
      'track.label':'04 / SEGUIMIENTO','track.title':'LO QUE NO SE MIDE,<br><span class="coral">SE ADIVINA.</span>','track.sub':'Seguimos datos reales para saber qué mantener, qué cambiar y cuándo hacerlo.','track.week':'SEMANA // {week}','track.checkin':'CONTROL ADAPTATIVO','track.bodyweight':'PESO CORPORAL','track.performance':'RENDIMIENTO','track.adherence':'ADHERENCIA','track.sleep':'SUEÑO','track.insight':'LECTURA DE PRITTY','track.insightTitle':'EL PESO BAJA,<br>PERO LA FUERZA <span class="lime">SUBE.</span>','track.insightBody':'Eso cambia la decisión: no recortamos más calorías esta semana.','track.next':'SIGUIENTE ACCIÓN','track.keep':'MANTENER / OBSERVAR','track.action1':'→ priorizar sueño','track.action2':'→ mantener carga en compuestos',
      'method.label':'05 / MÉTODO','method.title':'UN MÉTODO.<br>CUATRO PASOS.','method.sub':'No necesitás una semana perfecta. Necesitás un método simple que puedas repetir y ajustar.','method.eval':'EVALUAR','method.evalBody':'Tu punto de partida y tu contexto real.','method.design':'DISEÑAR','method.designBody':'Entrenamiento + hábitos que puedas sostener.','method.measure':'MEDIR','method.measureBody':'Datos, sensaciones y progreso semanal.','method.adapt':'ADAPTAR','method.adaptBody':'Cambiar lo necesario sin empezar de cero.',
      'evidence.label':'06 / EVIDENCIA','evidence.top':'TRANSFORMACIÓN REAL // PROCESO','evidence.title':'EL CAMBIO SE VE.<br>EL PROCESO <span class="coral">SE SOSTIENE.</span>','evidence.case':'CASO / TRANSFORMACIÓN REAL','evidence.goal':'Objetivo: recomposición corporal · proceso personalizado','evidence.resultLabel':'CAMBIO REAL','evidence.resultTime':'12 MESES','evidence.bodyfat':'GRASA CORPORAL','evidence.before':'ANTES','evidence.after':'DESPUÉS','evidence.drag':'DESLIZÁ PARA COMPARAR','evidence.strength':'FUERZA','evidence.adherence':'ADHERENCIA','evidence.quote':'Menos improvisación. Más consistencia, control y ajustes cuando realmente hacen falta.','evidence.disclaimer':'RESULTADOS INDIVIDUALES. PUEDEN VARIAR SEGÚN CONTEXTO, ADHERENCIA Y OTROS FACTORES.','evidence.cta':'QUIERO EMPEZAR ↗',
      'about.label':'07 / PRITTY','about.title':'LO SIMPLE,<br>BIEN HECHO.','about.kicker':'SOBRE MÍ','about.story1':'Empecé a entrenar en 2018 y desde entonces el gimnasio cambió mi vida por completo.','about.story2':'No solo transformé mi físico. Construí disciplina, confianza, autoestima y una mentalidad que hoy me llevó a convertirme en campeón de culturismo natural.','about.story3':'Hoy quiero usar todo lo que aprendí para ayudarte a <span class="lime">conseguir resultados sin extremos, sin dietas imposibles y sin dejar de disfrutar tu vida.</span>','about.story4':'Creo en la disciplina, la constancia y en que <span class="lime">comida real = resultados reales.</span>','about.story5':'Tu mejor versión. Mi misión.','about.cta':'VER @ELPRITTYY_ ↗',
      'faq.label':'08 / PREGUNTAS','faq.title':'ANTES DE<br>EMPEZAR.','faq.sub':'Lo importante, sin letra chica.','faq.cta':'WHATSAPP DIRECTO ↗',
      'start.label':'09 / EMPEZAR','start.title':'¿EMPEZAMOS?','start.note':'NO COMPRÁS UNA RUTINA. EMPEZÁS UN PROCESO.','start.sub':'Contame dónde estás, qué querés lograr y cómo es tu semana. Desde ahí vemos la mejor forma de empezar.','start.s1':'RESPONDÉS 4 DATOS','start.s2':'RECIBÍS CONTACTO','start.s3':'DEFINIMOS EL INICIO','form.title':'PRIMER CONTACTO','form.name':'Nombre','form.whatsapp':'WhatsApp','form.email':'Email','form.objective':'Objetivo','form.mode':'Modalidad','form.online':'ONLINE','form.presential':'PRESENCIAL','form.unknown':'A DEFINIR','form.submit':'ENVIAR EVALUACIÓN ↘','form.success':'EVALUACIÓN RECIBIDA','form.next':'SIGUIENTE PASO:<br><span class="lime">CONTACTO</span>','form.successBody':'Te contactaremos para conocer tu objetivo y definir cómo empezar.','form.reset':'↻ REINICIAR DEMO','form.whatsappHint':'ABRE WHATSAPP CON EL MENSAJE LISTO PARA ENVIAR.','form.consentPrefix':'Leí y acepto la','form.consentAnd':'y los','footer.online':'© 2026 / PRITTY'
    },
    en:{
      'nav.method':'METHOD','nav.track':'TRACKING','nav.about':'ABOUT','nav.start':'ASSESSMENT ↘','nav.methodArrow':'METHOD →','nav.trackArrow':'TRACKING →','nav.aboutArrow':'ABOUT →','nav.startArrow':'START →',
      'hero.system':'TRAINING · HABITS · FOLLOW-UP','hero.liveSystem':'PRITTY // 2026','hero.kicker':'LESS NOISE. MORE METHOD.','hero.l1':'LESS NOISE.','hero.l2':'MORE PROGRESS.','hero.l3':'TRAIN. TRACK.','hero.l4':'ADJUST.','hero.sub':'Personalized coaching to train better, eat better and sustain the process.','hero.body':'No copy-paste plans. No extremes. Keep what works; adjust what does not.','hero.cta':'I WANT TO START ↘','hero.how':'SEE HOW IT WORKS ↓','hero.instagram':'INSTAGRAM ↗','hero.profile':'PRITTY','hero.live':'● LIVE // 06','hero.placeholder':'PRITTY // 01','hero.adherence':'ADHERENCE','hero.strength':'STRENGTH','hero.checkin':'CHECK-IN WEEK','hero.status':'STATUS: ADJUSTING THE PROCESS','hero.slots':'INQUIRIES OPEN','hero.training':'TRAINING 01','hero.nutrition':'HABITS 02','hero.tracking':'TRACKING 03','hero.adaptation':'ADAPTATION ∞',
      'principle.label':'02 / PRINCIPLE','principle.title':'SIMPLE WORKS<br>WHEN IT’S DONE RIGHT.','principle.sub':'You do not need to do everything perfectly.','principle.body':'You need to know what to do, measure whether it is working and adjust when needed. The method should fit your life, not complicate it.','principle.system':'THE METHOD','principle.train':'TRAINS','principle.feed':'FUELS','principle.measure':'MEASURES','principle.learn':'LEARNS','principle.adapt':'ADAPTS','principle.statement1':'LESS<br>NOISE.','principle.statement2':'MORE CONSISTENCY.<br>MORE PROGRESS.',
      'engine.label':'03 / YOUR PLAN','engine.title':'YOUR PLAN ISN’T<br>COPIED. <span class="lime">IT’S BUILT.</span>','engine.sub':'We start from your reality: schedule, training, nutrition, recovery and goal.','engine.input':'YOUR CONTEXT','engine.ready':'READY TO ADJUST','engine.goal':'GOAL','engine.training':'TRAINING','engine.context':'CONTEXT','engine.nutrition':'EATING HABITS','engine.sleep':'SLEEP','engine.stress':'STRESS','engine.goalValue':'RECOMPOSITION','engine.trainingValue':'4 DAYS / 60 MIN','engine.contextValue':'GYM + TRAVEL','engine.nutritionValue':'3 MEALS / FLEX','engine.sleepValue':'AVG 7.1 H','engine.stressValue':'MEDIUM','engine.measure':'MEASURE','engine.interpret':'INTERPRET','engine.adjust':'ADJUST','engine.repeat':'REPEAT','engine.output':'YOUR WEEK / 07','engine.protocol':'PLAN 07.4','engine.p1t':'TRAINING — UPPER / LOWER','engine.p1b':'14 working sets · RIR 1–3','engine.p2t':'HABITS — FLEXIBLE STRUCTURE','engine.p2b':'3 MEALS · SIMPLE OPTIONS · REAL CONTEXT','engine.p3t':'CHECK-IN — SUNDAY (FLEXIBLE)','engine.p3b':'Progress photos + metrics + context','engine.note':'“We added +2 back sets. We keep the structure.”','engine.confidence':'PLAN CONSISTENCY',
      'track.label':'04 / TRACK','track.title':'WHAT ISN’T MEASURED,<br><span class="coral">IS GUESSED.</span>','track.sub':'We track real data to know what to keep, what to change and when to change it.','track.week':'WEEK // {week}','track.checkin':'ADAPTIVE CHECK-IN','track.bodyweight':'BODYWEIGHT','track.performance':'PERFORMANCE','track.adherence':'ADHERENCE','track.sleep':'SLEEP','track.insight':'PRITTY INSIGHT','track.insightTitle':'WEIGHT IS DOWN,<br>BUT STRENGTH IS <span class="lime">UP.</span>','track.insightBody':'That changes the decision: we don’t cut calories any further this week.','track.next':'NEXT ACTION','track.keep':'HOLD / OBSERVE','track.action1':'→ prioritize sleep','track.action2':'→ maintain compound loads',
      'method.label':'05 / METHOD','method.title':'ONE METHOD.<br>FOUR STEPS.','method.sub':'You do not need a perfect week. You need a simple method you can repeat and adjust.','method.eval':'ASSESS','method.evalBody':'Your starting point and real context.','method.design':'DESIGN','method.designBody':'Training + habits you can actually sustain.','method.measure':'MEASURE','method.measureBody':'Data, feedback and weekly progress.','method.adapt':'ADAPT','method.adaptBody':'Change what matters without starting over.',
      'evidence.label':'06 / EVIDENCE','evidence.top':'REAL TRANSFORMATION // PROCESS','evidence.title':'THE CHANGE SHOWS.<br>THE PROCESS <span class="coral">LASTS.</span>','evidence.case':'CASE / REAL TRANSFORMATION','evidence.goal':'Goal: body recomposition · personalized process','evidence.resultLabel':'REAL CHANGE','evidence.resultTime':'12 MONTHS','evidence.bodyfat':'BODY FAT','evidence.before':'BEFORE','evidence.after':'AFTER','evidence.drag':'SLIDE TO COMPARE','evidence.strength':'STRENGTH','evidence.adherence':'ADHERENCE','evidence.quote':'Less improvisation. More consistency, control and adjustments when they actually matter.','evidence.disclaimer':'INDIVIDUAL RESULTS. OUTCOMES MAY VARY BASED ON CONTEXT, ADHERENCE AND OTHER FACTORS.','evidence.cta':'I WANT TO START ↗',
      'about.label':'07 / PRITTY','about.title':'SIMPLE,<br>DONE RIGHT.','about.kicker':'ABOUT ME','about.story1':'I started training in 2018, and since then the gym has completely changed my life.','about.story2':'I did not just transform my physique. I built discipline, confidence, self-esteem and a mindset that led me to become a natural bodybuilding champion.','about.story3':'Today I want to use everything I have learned to help you <span class="lime">get results without extremes, impossible diets, or giving up enjoying your life.</span>','about.story4':'I believe in discipline, consistency, and that <span class="lime">real food = real results.</span>','about.story5':'Your best version. My mission.','about.cta':'SEE @ELPRITTYY_ ↗',
      'faq.label':'08 / FAQ','faq.title':'BEFORE<br>YOU START.','faq.sub':'The important things, without fine print.','faq.cta':'DIRECT WHATSAPP ↗',
      'start.label':'09 / START','start.title':'READY TO START?','start.note':'YOU ARE NOT BUYING A ROUTINE. YOU ARE STARTING A PROCESS.','start.sub':'Tell me where you are, what you want to achieve and what your week looks like. From there we define the best way to start.','start.s1':'ANSWER 4 DETAILS','start.s2':'GET CONTACTED','start.s3':'DEFINE THE START','form.title':'FIRST CONTACT','form.name':'Name','form.whatsapp':'WhatsApp','form.email':'Email','form.objective':'Goal','form.mode':'Mode','form.online':'ONLINE','form.presential':'IN PERSON','form.unknown':'TO DEFINE','form.submit':'SEND ASSESSMENT ↘','form.success':'ASSESSMENT RECEIVED','form.next':'NEXT STEP:<br><span class="lime">CONTACT</span>','form.successBody':'We’ll contact you to understand your goal and define how to start.','form.reset':'↻ RESET DEMO','form.whatsappHint':'OPENS WHATSAPP WITH THE MESSAGE READY TO SEND.','form.consentPrefix':'I have read and accept the','form.consentAnd':'and the','footer.online':'© 2026 / PRITTY'
    }
  };
  const faqs={
    es:[
      ['¿ES UN PLAN PERSONALIZADO O UNA RUTINA PARA TODOS?','Es personalizado. Partimos de tu objetivo, experiencia, horarios, alimentación y contexto real. Desde ahí se construye un plan que puedas sostener y ajustar con el tiempo.'],
      ['¿ESTO SIRVE SI RECIÉN ESTOY EMPEZANDO?','Sí. No necesitás llegar en forma para empezar. El nivel, la experiencia y tu punto de partida forman parte de la planificación para que progreses desde donde estás hoy.'],
      ['¿QUÉ INCLUYE EL SEGUIMIENTO?','No recibís un plan y desaparecemos. Revisamos entrenamiento, alimentación, adherencia y progreso para entender qué mantener, qué ajustar y cuál es el siguiente paso.'],
      ['¿QUÉ PASA SI UNA SEMANA NO PUEDO CUMPLIR EL PLAN?','No arrancamos de cero ni castigamos una semana complicada. Vemos qué pasó, reorganizamos prioridades y ajustamos lo necesario para que puedas seguir avanzando.'],
      ['¿CUÁNTO TIEMPO TARDA EN VERSE UN CAMBIO?','Depende de tu punto de partida, objetivo y consistencia. No prometemos transformaciones mágicas en una cantidad exacta de semanas: medimos, ajustamos y buscamos progreso real y sostenible.'],
      ['¿TENGO QUE ENTRENAR TODOS LOS DÍAS PARA VER RESULTADOS?','No. Más no siempre es mejor. La frecuencia se adapta a tu semana: tres o cuatro días bien hechos y sostenibles pueden valer mucho más que intentar entrenar todos los días.'],
      ['¿VOY A TENER QUE VIVIR A DIETA?','No. La idea no es comer perfecto ni prohibirte todo. La alimentación acompaña tu objetivo y se adapta a tus hábitos para que también funcione cuando salís, viajás o cambia tu semana.'],
      ['¿CADA CUÁNTO SE CAMBIA EL ENTRENAMIENTO O LA ALIMENTACIÓN?','Cuando hace falta. No cambiamos por cambiar: si algo funciona, lo dejamos trabajar. Si los datos o tu contexto muestran que hay que ajustar, ajustamos.']
    ],
    en:[
      ['IS THIS A PERSONALIZED PLAN OR THE SAME ROUTINE FOR EVERYONE?','It is personalized. We start from your goal, experience, schedule, nutrition and real-life context, then build a plan you can sustain and adjust over time.'],
      ['DOES THIS WORK IF I AM JUST STARTING?','Yes. You do not need to be in shape before you start. Your experience and current starting point are part of the plan so you can progress from where you are today.'],
      ['WHAT DOES THE FOLLOW-UP INCLUDE?','You do not receive a plan and get left on your own. We review training, nutrition, adherence and progress to decide what to keep, what to adjust and what comes next.'],
      ['WHAT IF I CANNOT FOLLOW THE PLAN FOR A WEEK?','You do not start over and you are not punished for a difficult week. We look at what happened, reorganize priorities and adjust what is needed so you can keep moving forward.'],
      ['HOW LONG DOES IT TAKE TO SEE A CHANGE?','It depends on your starting point, goal and consistency. We do not promise a magical transformation in an exact number of weeks: we measure, adjust and pursue real, sustainable progress.'],
      ['DO I HAVE TO TRAIN EVERY DAY TO SEE RESULTS?','No. More is not always better. Training frequency adapts to your week: three or four well-executed, sustainable sessions can be far more effective than trying to train every day.'],
      ['WILL I HAVE TO LIVE ON A DIET?','No. The goal is not perfect eating or banning everything you enjoy. Nutrition supports your goal and adapts to your habits so it can still work when you go out, travel or your week changes.'],
      ['HOW OFTEN DO TRAINING OR NUTRITION CHANGE?','When they need to. We do not change things just for the sake of change. If something is working, we let it work. If your data or context call for an adjustment, we adjust.']
    ]
  };
  const validation={
    es:{name:'Ingresá tu nombre.',whatsapp:'Ingresá un WhatsApp válido.',email:'Ingresá un email válido.',objective:'Contanos un poco más sobre tu objetivo.',privacy:'Debés aceptar la Política de Privacidad y los Términos.'},
    en:{name:'Enter your name.',whatsapp:'Enter a valid WhatsApp number.',email:'Enter a valid email.',objective:'Tell us a bit more about your goal.',privacy:'You must accept the Privacy Policy and Terms.'}
  };
  const htmlKeys=new Set(['principle.title','principle.statement1','principle.statement2','engine.title','track.title','track.insightTitle','method.title','evidence.title','about.title','about.story3','about.story4','faq.title','start.title','form.next']);
  let currentLang='es';
  let currentWeek=7;

  function detectLanguage(){
    try{const stored=localStorage.getItem('coachOSLang');if(stored==='es'||stored==='en')return stored}catch{}
    const langs=[...(navigator.languages||[]),navigator.language||''].map(x=>String(x).toLowerCase());
    if(langs.some(l=>l.startsWith('es'))) return 'es';
    let tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch{}
    if(/Argentina|Madrid|Mexico|Bogota|Lima|Santiago|Montevideo|Asuncion|La_Paz|Caracas|Guatemala|Havana|Santo_Domingo|Panama|Costa_Rica|El_Salvador|Tegucigalpa|Managua|Puerto_Rico/i.test(tz)) return 'es';
    return 'en';
  }
  function applyLanguage(lang){
    currentLang=lang==='en'?'en':'es';
    document.documentElement.lang=currentLang;
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n,val=translations[currentLang][key];if(val==null)return;if(htmlKeys.has(key))el.innerHTML=val;else el.textContent=val});
    $$('.lang-btn').forEach(b=>{const active=b.dataset.lang===currentLang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
    try{localStorage.setItem('coachOSLang',currentLang)}catch{}
    document.title=currentLang==='es'?'PRITTY // Alimentación & Entrenamiento Personalizado':'PRITTY // Personalized Nutrition & Training';
    const meta=document.querySelector('meta[name="description"]'); if(meta)meta.content=currentLang==='es'?'Entrenamiento, hábitos y seguimiento sin vueltas, adaptados a tu vida real.':'Training, habits and follow-up adapted to real life.';
    const directWa=whatsappUrl(directWhatsAppMessage());
    const faqWa=$('#faqWhatsApp'),footerWa=$('#footerWhatsApp');
    if(faqWa)faqWa.href=directWa;
    if(footerWa)footerWa.href=directWa;
    const tickerItems=currentLang==='es'?['ENTRENÁ','COMÉ','MEDÍ','AJUSTÁ','REPETÍ']:['TRAIN','EAT','TRACK','ADJUST','REPEAT'];
    const tickerMarkup=tickerItems.map(item=>`<span class="ticker-item">${item}</span>`).join('');
    $$('.ticker-group').forEach(g=>g.innerHTML=tickerMarkup);
    renderFaq();updateWeekLabel(currentWeek);
  }
  function updateWeekLabel(week){currentWeek=week;const el=$('#trackWeek');const template=translations[currentLang]['track.week'];if(el)el.textContent=template.replace('{week}',String(week).padStart(2,'0'))}
  function renderFaq(){const faqList=$('#faqList');faqList.innerHTML='';faqs[currentLang].forEach(([q,a],i)=>{const item=document.createElement('div');item.className='faq-item';item.innerHTML=`<button class="faq-btn focus" type="button" aria-expanded="false"><span>0${i+1}</span><span>${q}</span><i>+</i></button><div class="faq-answer"><div><p>${a}</p></div></div>`;const btn=$('.faq-btn',item);btn.addEventListener('click',()=>{const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))});faqList.appendChild(item)})}
  $$('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.lang)));
  applyLanguage(detectLanguage());

  const tickerEl=$('.ticker');
  if(tickerEl) tickerEl.classList.add('ticker-on');

  const header=$('header');
  const updateHeader=()=>header.classList.toggle('scrolled',scrollY>26);
  updateHeader();addEventListener('scroll',updateHeader,{passive:true});

  const menuBtn=$('#menuBtn'),mobileNav=$('#mobileNav');
  menuBtn.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.classList.toggle('is-open',open);menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
  $$('#mobileNav a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuBtn.classList.remove('is-open');menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Abrir menú')}));


  function scrollToSection(target, pushHash=true){
    if(!target)return;
    const absTop=window.scrollY+target.getBoundingClientRect().top;
    const maxY=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
    const y=Math.max(0,Math.min(absTop,maxY));
    window.scrollTo({top:y,behavior:prefersReduced?'auto':'smooth'});
    if(pushHash&&target.id)history.replaceState(null,'','#'+target.id);
  }
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a)return;
    const href=a.getAttribute('href');
    if(!href||href==='#')return;
    const target=document.querySelector(href);
    if(!target)return;
    e.preventDefault();
    scrollToSection(target,true);
    if(mobileNav?.classList.contains('open')){mobileNav.classList.remove('open');menuBtn?.classList.remove('is-open');menuBtn?.setAttribute('aria-expanded','false');menuBtn?.setAttribute('aria-label','Abrir menú');}
  });
  addEventListener('load',()=>{if(location.hash){const t=document.querySelector(location.hash);if(t)setTimeout(()=>scrollToSection(t,false),80)}});

  const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');revealObserver.unobserve(e.target)}}),{threshold:.14});
  $$('.reveal').forEach(el=>revealObserver.observe(el));
  const sections=['hero','principle','engine','track','method','evidence','about','faq','start'];
  const progressNum=$('#progressNum'),progressFill=$('#progressFill'),progressRail=$('.progress-rail');
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const i=sections.indexOf(e.target.id);if(i>=0){progressNum.textContent=String(i+1).padStart(2,'0');progressFill.style.height=`${((i+1)/9)*100}%`;progressRail.dataset.theme=e.target.dataset.theme||'dark';}}}),{rootMargin:'-42% 0px -48% 0px'});sections.forEach(id=>sectionObserver.observe(document.getElementById(id)));

  function animateNumber(el,target,opts={}){if(el.dataset.ran==='1')return;el.dataset.ran='1';const decimals=Number(el.dataset.decimals||0),prefix=el.dataset.prefix||'',suffix=el.dataset.suffix||'',pad=Number(el.dataset.pad||0);const start=performance.now(),dur=(opts.duration||1100)*durationScale,delay=(opts.delay||0)*durationScale;const render=v=>{let n=decimals?Number(v).toFixed(decimals):String(Math.round(v));if(pad)n=n.padStart(pad,'0');el.textContent=prefix+n+suffix};const go=now=>{const p=Math.min(Math.max((now-start-delay)/Math.max(dur,1),0),1),eased=1-Math.pow(1-p,4);render(target*eased);if(p<1)requestAnimationFrame(go)};requestAnimationFrame(go)}
  setTimeout(()=>{$$('[data-counter="hero"]').forEach((el,i)=>animateNumber(el,Number(el.dataset.target),{duration:1050,delay:i*90}));$('#heroBar').classList.add('on')},420*durationScale);

  const engine=$('#engine'),engineGrid=$('#engineGrid');
  const engineObs=new IntersectionObserver(([e])=>{if(e.isIntersecting){engineGrid.classList.add('engine-active');engine.classList.add('engine-active');engineObs.disconnect()}},{threshold:.2});engineObs.observe(engine);

  // Track animation: the moving point, line, week and metrics share the same progress value.
  const track=$('#track'),trackWrap=$('#trackWrap'),graphPath=$('#graphPath'),graphPoint=$('#graphPoint'),graphHalo=$('#graphHalo');
  let trackRan=false, graphBlinkTimer=null;
  const trackCounters=$$('[data-counter="track"]');
  function renderMetric(el,value){const decimals=Number(el.dataset.decimals||0),prefix=el.dataset.prefix||'',suffix=el.dataset.suffix||'';el.textContent=prefix+(decimals?value.toFixed(decimals):Math.round(value))+suffix}
  function animateTrack(){if(trackRan)return;trackRan=true;trackWrap.classList.add('track-active');track.classList.add('track-active');const total=graphPath.getTotalLength();graphPath.style.strokeDasharray='1';graphPath.style.strokeDashoffset='1';graphPoint.style.opacity='1';graphHalo.style.opacity='.12';graphHalo.classList.remove('graph-halo-pulse');const start=performance.now();const duration=4000*durationScale;const tick=now=>{const raw=Math.min((now-start)/Math.max(duration,1),1);const p=1-Math.pow(1-raw,3);graphPath.style.strokeDashoffset=String(1-p);const pt=graphPath.getPointAtLength(total*p);graphPoint.setAttribute('cx',pt.x);graphPoint.setAttribute('cy',pt.y);graphHalo.setAttribute('cx',pt.x);graphHalo.setAttribute('cy',pt.y);trackCounters.forEach(el=>renderMetric(el,Number(el.dataset.target)*p));const week=Math.max(1,Math.min(7,Math.ceil(p*7)));updateWeekLabel(week);$$('.week-label').forEach(w=>{const n=Number(w.dataset.week);w.classList.toggle('current',n===week);w.classList.toggle('past',n<week)});if(raw<1)requestAnimationFrame(tick);else{trackCounters.forEach(el=>renderMetric(el,Number(el.dataset.target)));updateWeekLabel(7);graphPoint.style.opacity='1';graphPoint.classList.add('graph-final');graphHalo.style.opacity='';graphHalo.classList.add('graph-halo-pulse')}};requestAnimationFrame(tick)}
  const trackObs=new IntersectionObserver(([e])=>{if(e.isIntersecting){animateTrack();trackObs.disconnect()}},{threshold:.18,rootMargin:'0px 0px -8% 0px'});trackObs.observe(track);


  // Before/after comparators: preview only after the user scrolls and each card enters view.
  function initComparePreview(compareStage){
    const compareRange=compareStage?.querySelector('.compare-range');
    if(!compareStage||!compareRange)return;
    let comparePreviewRaf=0,comparePreviewRan=false,comparePreviewQueued=false,compareTouched=false,compareArmed=false,compareInView=false;
    const setComparePos=v=>{compareStage.style.setProperty('--pos',v+'%');compareRange.value=String(Math.round(v))};
    const cancelComparePreview=()=>{compareTouched=true;if(comparePreviewRaf)cancelAnimationFrame(comparePreviewRaf);comparePreviewRaf=0;compareStage.classList.remove('is-previewing')};
    compareRange.addEventListener('input',()=>setComparePos(Number(compareRange.value)));
    ['pointerdown','mousedown','touchstart','input','change'].forEach(type=>compareRange.addEventListener(type,cancelComparePreview,{passive:type!=='input'&&type!=='change'}));
    const animateComparePreview=()=>{
      if(comparePreviewRan||compareTouched||prefersReduced)return;
      comparePreviewRan=true;comparePreviewQueued=false;compareStage.classList.add('is-previewing');setComparePos(50);
      const start=performance.now(),duration=2850;
      const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
      const lerp=(a,b,t)=>a+(b-a)*t;
      const frame=now=>{
        if(compareTouched)return;
        const p=Math.min((now-start)/duration,1);
        let v=50;
        if(p<.12)v=50;
        else if(p<.38)v=lerp(50,69,ease((p-.12)/.26));
        else if(p<.72)v=lerp(69,31,ease((p-.38)/.34));
        else v=lerp(31,50,ease((p-.72)/.28));
        setComparePos(v);
        if(p<1)comparePreviewRaf=requestAnimationFrame(frame);
        else{setComparePos(50);compareStage.classList.remove('is-previewing');comparePreviewRaf=0}
      };
      comparePreviewRaf=requestAnimationFrame(frame);
    };
    const maybeStartComparePreview=()=>{
      if(!compareArmed||!compareInView||comparePreviewRan||comparePreviewQueued||compareTouched||prefersReduced)return;
      comparePreviewQueued=true;
      setTimeout(()=>{comparePreviewQueued=false;if(compareArmed&&compareInView&&!compareTouched)animateComparePreview()},260);
    };
    const initialScrollY=window.scrollY;
    const armComparePreview=()=>{
      if(compareArmed)return;
      if(Math.abs(window.scrollY-initialScrollY)<18)return;
      compareArmed=true;maybeStartComparePreview();removeEventListener('scroll',armComparePreview);
    };
    addEventListener('scroll',armComparePreview,{passive:true});
    const compareObs=new IntersectionObserver(([e])=>{
      compareInView=e.isIntersecting&&e.intersectionRatio>=.28;
      maybeStartComparePreview();
      if(comparePreviewRan)compareObs.disconnect();
    },{threshold:[0,.28,.55],rootMargin:'0px 0px -14% 0px'});
    compareObs.observe(compareStage);
  }
  ['caseCompare','aboutCompare'].forEach(id=>{const stage=$('#'+id);if(stage)initComparePreview(stage)});

  if(matchMedia('(pointer:fine)').matches&&innerWidth>=768){let raf=0;addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{$('#profileCard').style.setProperty('--parallax',Math.min(scrollY*.026,18)+'px')})},{passive:true})}

  const form=$('#assessment'),success=$('#success');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const f=new FormData(form),vals=Object.fromEntries(f),errors={},m=validation[currentLang];
    if(String(vals.name||'').trim().length<2)errors.name=m.name;
    if(!/^[+\d][\d\s()-]{7,20}$/.test(String(vals.whatsapp||'').trim()))errors.whatsapp=m.whatsapp;
    if(!/^\S+@\S+\.\S+$/.test(String(vals.email||'').trim()))errors.email=m.email;
    if(String(vals.objective||'').trim().length<8)errors.objective=m.objective;
    if(!$('#privacyConsent')?.checked)errors.privacy=m.privacy;
    $$('[data-error]').forEach(el=>el.textContent=errors[el.dataset.error]||'');
    if(Object.keys(errors).length)return;

    const name=String(vals.name||'').trim().replace(/[\r\n\t]+/g,' ').replace(/\s{2,}/g,' ').slice(0,80);
    const userWhatsApp=String(vals.whatsapp||'').trim();
    const email=String(vals.email||'').trim();
    const objective=String(vals.objective||'').trim();

    const waMessage=`¡Hola, Pritty! Soy ${name}.

Me interesa saber mas acerca de tu asesoria personalizada.`;

    const waLink=document.createElement('a');
    waLink.href=whatsappUrl(waMessage);
    waLink.target='_blank';
    waLink.rel='noopener noreferrer';
    document.body.appendChild(waLink);
    waLink.click();
    waLink.remove();
  });
  $('#resetBtn').addEventListener('click',()=>{success.classList.remove('show');form.style.display='block';form.reset();$$('[data-error]').forEach(el=>el.textContent='')});


})();