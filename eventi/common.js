const MESI=['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];
const CAT={sport:'Sport',fiera:'Fiera',mercato:'Mercato',sagra:'Sagra',concerto:'Concerto',altro:'Altro'};
const pd=s=>{const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const fd=s=>{const d=pd(s);return d.getDate()+' '+MESI[d.getMonth()]+' '+d.getFullYear()};
const range=e=>e.a&&e.a!==e.da?('dal '+fd(e.da)+' al '+fd(e.a)):fd(e.da);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const today=new Date().toISOString().slice(0,10);
// date shown: start, or today if ongoing
const shown=e=>(e.da<today&&e.a>=today)?today:e.da;
const tiles=m=>L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(m);
const TIPI={cortile:'Cortile',terreno:'Terreno',garage:'Garage',vialetto:'Vialetto'};
