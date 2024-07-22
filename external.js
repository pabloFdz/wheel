function confetti(e=document.body,t){if(!e){console.error("Must have element to populate the confetti!");return}let i=e=>/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(e),$=Object.assign({addBlur:!0,angle:0,angleEmoji:0,colors:"random",delay:10,drop:400,fadeout:!0,fixedSize:!1,flakes:100,scale:1,speed:5e3,spread:400,spin:!0,type:"default",zIndex:99999},t),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,a=$.drop,l=$.spread,n=()=>$.addBlur?r(1,2):1,s=`conf${r(0,1e3)}etti${r(0,1e3)}ver${r(0,1e3)}lay`,o="";(!$.flakes||Number.isNaN(1*$.flakes))&&($.flakes=100);for(let d=0;d<$.flakes;d++){let f=`con${r(0,1e3)}fet${r(0,1e3)}ti${r(0,1e3)}`,p=`${r($.speed/2,$.speed)}`,_="",m="";$.spin&&(_=`<animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 0 0"
                          to="${(.5>Math.random()?-1:1)*360} 0 0"
                          dur="${r($.speed/6,$.speed/2)}ms"
                          begin="-${r(1,10)/10}s"
                          repeatCount="indefinite"/>`);let c="";c="random"!=$.colors&&Array.isArray($.colors)?$.colors[r(0,$.colors.length-1)]:`rgb(${r(0,255)}, ${r(0,255)}, ${r(0,255)})`;let u=6,h=`calc(1em * ${$.scale})`,g=1;if($.fixedSize||(u=r(4,7),h=`calc(${r(5,15)/10}em * ${$.scale})`,g=r(5,20)/10),Array.isArray($.type)){let y=$.type,b=y[r(0,y.length-1)];m=i(b)?`<g transform="scale(${$.scale})" id="${f}">
            <image href="${b}" height="${20*g}" width="${20*g}" 
            x="${-10*g}" y="${-10*g}">
                ${_}
            </image>
        </g>`:`<text id="${f}" fill="${c}" stroke-width="${r(1,3)}" 
        fill="none" x="0" y="0" dominant-baseline="middle" text-anchor="middle" filter="url(#blur${n()})" 
        font-size="${h}" font-family="'Roboto', sans-serif" transform="rotate(${$.angleEmoji})">
				${b}
        ${_}
        </text>`}else switch($.type){case"circle":m=`<circle id="${f}" fill="${c}" cx="0" cy="0" r="${u}" 
          filter="url(#blur${n()})">
            ${_}
            </circle>`;break;case"square":let x=r(4,12);m=`<rect id="${f}" fill="${c}" x="0" y="0" height="${x}" width="${x}" 
          filter="url(#blur${n()})">
                ${_}
            </rect>`;break;case"tri":case"triangle":m=`<path id="${f}" fill="${c}" d="M -8 6 L 0 -8 L 8 6 Z" 
          filter="url(#blur${n()})">
                ${_}
            </path>`;break;default:m=`<rect id="${f}" fill="${c}" x="0" y="0" 
          height="${r(6,18)}" width="${r(4,7)}" filter="url(#blur${n()})">
            ${_}
        </rect>`}o+=`<g transform="translate(${r(-.3*l,.3*l)} 0) scale(1.${r(0,1)})">
        ${m}
    </g>
    <animateMotion xlink:href="#${f}" dur="${p}ms" begin="0s" fill="freeze" repeatCount="none" keyTimes="0;1" keySplines="0.12 0.1 0.9 0.1" caalcMode="spline">
        <mpath xlink:href="#motionPath${s}${r(1,2)}" />
    </animateMotion>`}let k=e.getBoundingClientRect(),v=k.top+(k.bottom-k.top)/2,M=k.left-(k.left-k.right)/2,w="";$.fadeout&&(w=`<animate attributeName="opacity" values="1; 0" dur="${$.speed/4}ms" begin="${$.speed/4}ms" repeatCount="none" fill="freeze"/>
	<animateTransform attributeName="transform" type="translate" additive="sum" values="0 0; ${-l/2} ${-a/2}" begin="0s" dur="${$.speed/10}ms" fill="freeze" repeatCount="0" keyTimes="0;1" keySplines="0.4 0 0.6 1" calcMode="spline" />
	<animateTransform attributeName="transform" type="scale" additive="sum" values="0; 1" begin="0s" dur="${$.speed/10}ms" fill="freeze" repeatCount="0" keyTimes="0;1" keySplines="0.4 0 0.6 1" calcMode="spline" />`);let z=`<svg id="${s}" viewBox="0 0 ${l} ${a}" height="${a}px" width="${l}px" preserveAspectRatio="none" style="left:${M}px; 
        top:${v}px; 
        pointer-events:none; 
        position:fixed; 
        transform:translate(-50%,-50%) rotate(${$.angle}deg); 
        transition:${$.speed/10}ms; 
        user-select:none; 
        z-index:${$.zIndex}">
        <filter id="blur1" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
        </filter>
        <filter id="blur2" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
        <path id="motionPath${s}1" fill="none" stroke="none" 
        d="M ${.5*l} -${0*a} Q ${.3*l} ${.25*a} ${.5*l} ${.5*a} 
        Q ${.7*l} ${.75*a} ${.5*l} ${1.1*a}" />
        <path id="motionPath${s}2" fill="none" stroke="none" 
        d="M ${.5*l} -${0*a} 
        Q ${.7*l} ${.25*a} ${.5*l} ${.5*a} Q ${.3*l} ${.75*a} ${.5*l} ${1.1*a}" />
				<g transform="translate(${l/2} ${a/2})">
        	${o}
					${w}
				</g>
    </svg>`,C=document.createElement("div");C.innerHTML=z;let T=C.firstChild;document.body.appendChild(T),setTimeout(()=>{T?.remove()},$.speed)}