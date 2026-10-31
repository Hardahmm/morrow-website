export const VERSION='1.0.0';
export const ART=[
 {id:'sage-mist',name:'Where the mist stays',collection:'nature',color:'#28574b',source:'seed-001-sage-mist'},
 {id:'blue-orchard',name:'The blue orchard',collection:'minimal',color:'#3a6592',source:'nm-001'},
 {id:'desert-light',name:'The last light',collection:'nature',color:'#995536',source:'seed-002-desert-light'},
 {id:'apricot-flight',name:'Apricot flight',collection:'minimal',color:'#292f4b',source:'nm-003'},
 {id:'moonlit-catnap',name:'Moonlit catnap',collection:'cozy',color:'#8f6f62',source:'mc-002'},
 {id:'original-nw-002',name:'First thaw',collection:'nature',color:'#516344',source:'nw-002'},
 {id:'original-cw-001',name:'Copper pause',collection:'minimal',color:'#6a4c37',source:'cw-001'},
 {id:'original-nw-010',name:'Quince in blue hour',collection:'cozy',color:'#72534f',source:'nw-010'},
 {id:'original-gs-001',name:'The reading pool',collection:'spaces',color:'#835f4c',source:'gs-001'},
 {id:'original-nw-013',name:'Saucer shelter',collection:'cozy',color:'#8a623e',source:'nw-013'},
 {id:'seeds-stillness',name:'Seeds of stillness',collection:'minimal',color:'#64734f',source:'nm-004'},
 {id:'original-nw-009',name:'The quiet tide',collection:'nature',color:'#546e70',source:'nw-009'}
];
export const COLLECTIONS=[
 {id:'nature',name:'A little fresh air',short:'Nature',description:'Mist, open skies and a slower kind of morning.',cover:'sage-mist'},
 {id:'minimal',name:'Room to breathe',short:'Minimal',description:'Quiet shapes. Open space. A clear place for your days.',cover:'blue-orchard'},
 {id:'cozy',name:'Small comforts',short:'Cozy',description:'Soft characters and small things that feel like home.',cover:'moonlit-catnap'},
 {id:'spaces',name:'Somewhere quiet',short:'Spaces',description:'Thoughtful places, warm light and a moment to pause.',cover:'original-gs-001'}
];
export const CONCEPTS=[
 {id:'serenity',name:'Serenity',family:'Apple-inspired clarity',headline:'A little space\nfor yourself.',summary:'One immersive image at a time, quiet floating controls and a clear path into your calendar.',structure:'Immersive hero, horizontal collection shelf, restrained preview controls.',strength:'The most direct, image-led first impression.',tradeoff:'Floating text needs a reliable contrast scrim on every artwork.',warmth:'Quiet and intimate',minimalism:'Very restrained',premium:'Photography leads',ease:'Few visible decisions',discovery:'Collection shelf',accessibility:'Strong scrims required',practicality:'Familiar Compose surfaces',hero:'sage-mist'},
 {id:'material',name:'Form & color',family:'Material You',headline:'A backdrop\nfor your day.',summary:'A useful calendar-first dashboard, expressive tonal shapes and clear, familiar Android controls.',structure:'Calendar summary, featured artwork pair, filter chips and adaptive grid.',strength:'The clearest connection to the existing Android app.',tradeoff:'Tonal containers need restraint to keep the art in front.',warmth:'Friendly and familiar',minimalism:'Organized, not sparse',premium:'Purposeful tonal surfaces',ease:'Explicit labelled controls',discovery:'Filters and image grid',accessibility:'Familiar control patterns',practicality:'Closest to current stack',hero:'blue-orchard'},
 {id:'cozy',name:'Cozy Home',family:'Warm and personal',headline:'Come in.\nStay a little.',summary:'A welcoming art journal, tactile details and small original characters, with wallpaper tools close by.',structure:'Personal greeting, framed daily image, mood shelf and a small illustrated invitation.',strength:'The warmest fit for your calm, cute, tactile brief.',tradeoff:'Illustration must stay small around precise calendar controls.',warmth:'Most welcoming',minimalism:'Soft, selective detail',premium:'Tactile and personal',ease:'Gentle guided choices',discovery:'Mood-led collections',accessibility:'Readable controls, quiet art',practicality:'Simple static assets',hero:'moonlit-catnap'},
 {id:'editorial',name:'Quiet Gallery',family:'Editorial curation',headline:'A change\nof perspective.',summary:'Big art, deliberate typography and asymmetric collection layouts. The wallpaper gets the room.',structure:'Issue-style headline, asymmetric image story, collection list and large detail stage.',strength:'The strongest sense of a curated art collection.',tradeoff:'More browsing emphasis; calendar entry must remain obvious.',warmth:'Thoughtful, artful',minimalism:'Generous negative space',premium:'Editorial composition',ease:'Visible action labels',discovery:'Curated image stories',accessibility:'Avoid tiny captions',practicality:'Standard grid/list layouts',hero:'original-gs-001'},
 {id:'dream',name:'Dreamscape',family:'Soft minimal',headline:'Find your\nsofter side.',summary:'Muted lilac, open layouts and rounded artwork portals, with a quiet interface around your design.',structure:'Centered invitation, portrait artwork portal, open two-column collection grid.',strength:'The lightest, softest atmosphere of the five.',tradeoff:'Pastels still need dark readable text and selection outlines.',warmth:'Gentle and airy',minimalism:'Open and simple',premium:'Soft sculptural framing',ease:'Small, calm choice sets',discovery:'Open visual browsing',accessibility:'Contrast checked on pastels',practicality:'Lightweight shapes and images',hero:'original-nw-013'}
];
export const artURL=id=>new URL(`assets/${id}.webp`,import.meta.url).href;
export const ICONS={
 home:'M3 10 12 3l9 7v10H3z M9 20v-7h6v7',grid:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
 studio:'M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
 back:'m14 5-7 7 7 7M7 12h14',close:'m6 6 12 12M6 18 18 6',check:'m5 12 4 4L20 5',search:'M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
 settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2',
 arrow:'M4 12h16m-6-6 6 6-6 6',download:'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',sun:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1',
 calendar:'M4 5h16v16H4zM4 10h16M8 2v6M16 2v6',save:'M5 3h14v19l-7-5-7 5z',info:'M12 11v6M12 7v1M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',more:'M5 12h.01M12 12h.01M19 12h.01'
};
export function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[name]||ICONS.grid}"/></svg>`;}
export function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
