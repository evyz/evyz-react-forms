import*as l from"react";import i from"react";var n=function(){return n=Object.assign||function(l){for(var i,n=1,e=arguments.length;n<e;n++)for(var o in i=arguments[n])Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o]);return l},n.apply(this,arguments)};function e(l,i,n){if(n||2===arguments.length)for(var e,o=0,v=i.length;o<v;o++)!e&&o in i||(e||(e=Array.prototype.slice.call(i,0,o)),e[o]=i[o]);return l.concat(e||Array.prototype.slice.call(i))}"function"==typeof SuppressedError&&SuppressedError;var o=function(l){return i.createElement("div",n({},null==l?void 0:l.DOMAttributes,{onClick:function(i){var n,e;(null===(n=null==l?void 0:l.events)||void 0===n?void 0:n.onClick)&&(null===(e=null==l?void 0:l.events)||void 0===e||e.onClick(i))},className:"system_row ".concat(null==l?void 0:l.className),style:n({},null==l?void 0:l.styles)}),null==l?void 0:l.children)},v=function(e){var o,v,t=l.useState((null===(o=null==e?void 0:e.gui)||void 0===o?void 0:o.size)?"system_col-"+(null===(v=null==e?void 0:e.gui)||void 0===v?void 0:v.size):null),d=t[0],u=t[1];!function(l){var n;i.useEffect((function(){var i,n;(null===(i=null==l?void 0:l.gui)||void 0===i?void 0:i.size)&&(null==l?void 0:l.setSize)&&(null==l||l.setSize("system_col-"+(null===(n=null==l?void 0:l.gui)||void 0===n?void 0:n.size)))}),[null===(n=null==l?void 0:l.gui)||void 0===n?void 0:n.size])}(n(n({},e),{setSize:u}));var a=function(l){return{onClick:function(i){var n,e;(null===(n=null==l?void 0:l.events)||void 0===n?void 0:n.onClick)&&(null===(e=null==l?void 0:l.events)||void 0===e||e.onClick(i))}}}(e).onClick;return l.createElement("div",n({},null==e?void 0:e.DOMAttributes,{onClick:a,style:n({},null==e?void 0:e.styles),className:"system_cell ".concat(d&&d," ").concat(null==e?void 0:e.className)}),null==e?void 0:e.children)},t=function(i){var o,v,t,d,u,a=l.useState(""),s=a[0],c=a[1],r=function(l){return{handleKeyPress:function(i){var n,o,v,t,d,u,a,s,c,r,m,f,p,g,h,y,b,E,C,k,x,N,O,w,V,_,D,A,S,z,L=null==l?void 0:l.text;if((null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.prefix)&&(null===(v=null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.prefix)||void 0===v?void 0:v.length)>0&&(L=(null===(t=null==l?void 0:l.validation)||void 0===t?void 0:t.prefix)+L),(null===(d=null==l?void 0:l.validation)||void 0===d?void 0:d.postfix)&&(null===(a=null===(u=null==l?void 0:l.validation)||void 0===u?void 0:u.postfix)||void 0===a?void 0:a.length)>0&&(L+=null===(s=null==l?void 0:l.validation)||void 0===s?void 0:s.postfix),"Enter"===i.key){if(0===(null==l?void 0:l.text.length))return;if(null===(c=null==l?void 0:l.validation)||void 0===c?void 0:c.unique)if((null===(m=null===(r=null==l?void 0:l.state)||void 0===r?void 0:r.value)||void 0===m?void 0:m.length)>0){if(null===(f=null==l?void 0:l.state)||void 0===f?void 0:f.value.find((function(l){return l===L})))return}else if((null===(p=null==l?void 0:l.state)||void 0===p?void 0:p.value)===(null==l?void 0:l.text))return;(null===(h=null===(g=null==l?void 0:l.state)||void 0===g?void 0:g.value)||void 0===h?void 0:h.length)?(null===(y=null==l?void 0:l.state)||void 0===y?void 0:y.setValue)&&(null===(b=null==l?void 0:l.state)||void 0===b||b.setValue(e(e([],null===(E=null==l?void 0:l.state)||void 0===E?void 0:E.value,!0),[L],!1))):(null===(C=null==l?void 0:l.state)||void 0===C?void 0:C.setValue)&&(null===(k=null==l?void 0:l.state)||void 0===k||k.setValue([L])),null==l||l.setText("")}if("Backspace"===i.key&&0===(null==l?void 0:l.text.length)&&(null===(N=null===(x=null==l?void 0:l.state)||void 0===x?void 0:x.value)||void 0===N?void 0:N.length)>0){var M=null===(O=null==l?void 0:l.state)||void 0===O?void 0:O.value[(null===(w=null==l?void 0:l.state)||void 0===w?void 0:w.value.length)-1];(null===(V=null==l?void 0:l.validation)||void 0===V?void 0:V.prefix)&&(M=M.slice(null===(_=null==l?void 0:l.validation)||void 0===_?void 0:_.prefix.length,M.length)),null==l||l.setText(M),(null===(D=null==l?void 0:l.state)||void 0===D?void 0:D.setValue)&&(null===(A=null==l?void 0:l.state)||void 0===A||A.setValue(e([],null===(S=null==l?void 0:l.state)||void 0===S?void 0:S.value.slice(0,(null===(z=null==l?void 0:l.state)||void 0===z?void 0:z.value.length)-1),!0)))}}}}(n(n({},i),{text:s,setText:c})).handleKeyPress;return l.createElement("div",n({className:"system_selectize"},null==i?void 0:i.DOMAttributes),(null===(o=null==i?void 0:i.state)||void 0===o?void 0:o.value)&&(null===(v=null==i?void 0:i.state)||void 0===v?void 0:v.value.length)>0&&(null===(t=null==i?void 0:i.state)||void 0===t?void 0:t.value.map((function(i){return l.createElement("span",null,i)}))),l.createElement("input",{placeholder:null===(d=null==i?void 0:i.gui)||void 0===d?void 0:d.label,style:{width:0===(null===(u=null==i?void 0:i.state)||void 0===u?void 0:u.value.length)?"100%":"min-content"},value:s,onKeyDown:r,onChange:function(l){return c(l.target.value)}}))},d=function(i){return l.createElement("div",n({},null==i?void 0:i.DOMAttributes,{className:"system_wrapper ".concat(null==i?void 0:i.className)}),null==i?void 0:i.children)},u=function(){return i.createElement("div",{className:"system_loader"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",version:"1.1",id:"Capa_1",width:30,height:30,viewBox:"0 0 26.349 26.35"},i.createElement("g",null,i.createElement("g",null,i.createElement("circle",{cx:"13.792",cy:"3.082",r:"3.082"}),i.createElement("circle",{cx:"13.792",cy:"24.501",r:"1.849"}),i.createElement("circle",{cx:"6.219",cy:"6.218",r:"2.774"}),i.createElement("circle",{cx:"21.365",cy:"21.363",r:"1.541"}),i.createElement("circle",{cx:"3.082",cy:"13.792",r:"2.465"}),i.createElement("circle",{cx:"24.501",cy:"13.791",r:"1.232"}),i.createElement("path",{d:"M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05    C6.902,18.996,5.537,18.988,4.694,19.84z"}),i.createElement("circle",{cx:"21.364",cy:"6.218",r:"0.924"})))))},a=function(e){var o,v,t,d,a,s,c,r,m,f,p=l.useState(!1),g=p[0],h=p[1],y=l.useState(!1),b=y[0],E=y[1],C=l.useRef(null);!function(l){var n,e,o;i.useEffect((function(){var i,n,e,o;if(null===(n=null===(i=null==l?void 0:l.validation)||void 0===i?void 0:i.depsValidation)||void 0===n?void 0:n.notNull){for(var v=!0,t=0,d=void 0!==(null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.deps)?null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.deps:[];t<d.length;t++){if(!d[t]){v=!0;break}v=!1}null==l||l.setIsDisabled(v)}}),[null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.deps,null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.depsValidation]),i.useEffect((function(){var i,n,e,o;void 0===(null===(i=null==l?void 0:l.validation)||void 0===i?void 0:i.custom)&&null===(null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.custom)||null==l||l.setIsDisabled(void 0!==(null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.custom)&&(null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.custom))}),[null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.custom])}(n(n({},e),{isDisabled:g,setIsDisabled:h}));var k=function(l){return{buttonHandler:function(i){var n,e,o,v,t,d;if(null===(e=null===(n=null==l?void 0:l.gui)||void 0===n?void 0:n.loader)||void 0===e?void 0:e.promiseLoader)return null==l||l.setIsLocalLoader(!0),void((null===(o=null==l?void 0:l.events)||void 0===o?void 0:o.onClick)&&(null===(v=null==l?void 0:l.events)||void 0===v||v.onClick().then((function(){null==l||l.setIsLocalLoader(!1)}))));(null===(t=null==l?void 0:l.events)||void 0===t?void 0:t.onClick)&&(null===(d=null==l?void 0:l.events)||void 0===d||d.onClick(i))}}}(n(n({},e),{setIsLocalLoader:E})).buttonHandler;return l.createElement("button",n({},null==e?void 0:e.DOMAttributes,{ref:C,title:g&&(null===(v=null===(o=null==e?void 0:e.validation)||void 0===o?void 0:o.depsValidation)||void 0===v?void 0:v.notNull)?"Fill the fields":"",disabled:g,onClick:k,className:"system_button ".concat(e.className," ").concat(b||(null===(d=null===(t=null==e?void 0:e.gui)||void 0===t?void 0:t.loader)||void 0===d?void 0:d.custom)?"isLoading":""),style:n({},null==e?void 0:e.styles)}),b||(null===(s=null===(a=null==e?void 0:e.gui)||void 0===a?void 0:a.loader)||void 0===s?void 0:s.custom)?(null===(r=null===(c=null==e?void 0:e.gui)||void 0===c?void 0:c.loader)||void 0===r?void 0:r.customLoaderComponent)?l.createElement(e.gui.loader.customLoaderComponent,null):l.createElement(u,null):l.createElement(l.Fragment,null),(null==e?void 0:e.children)?null==e?void 0:e.children:void 0!==(null===(m=null==e?void 0:e.gui)||void 0===m?void 0:m.label)?null===(f=null==e?void 0:e.gui)||void 0===f?void 0:f.label:null)},s=function(i){var e,o,v,t,d;return l.createElement("div",n({},null==i?void 0:i.DOMAttributes,{className:"system_checkbox",onClick:function(l){var n,e,o,v,t;(null===(n=null==i?void 0:i.state)||void 0===n?void 0:n.setValue)&&(null===(e=null==i?void 0:i.state)||void 0===e||e.setValue(!(null===(o=null==i?void 0:i.state)||void 0===o?void 0:o.value))),(null===(v=null==i?void 0:i.events)||void 0===v?void 0:v.onClick)&&(null===(t=null==i?void 0:i.events)||void 0===t||t.onClick(l))},style:n({},null==i?void 0:i.styles)}),l.createElement("input",{type:"checkbox",checked:null===(e=null==i?void 0:i.state)||void 0===e?void 0:e.value}),l.createElement("label",{style:n({},null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.labelStyles)},(null===(v=null==i?void 0:i.gui)||void 0===v?void 0:v.label)?(null===(t=null==i?void 0:i.gui)||void 0===t?void 0:t.label.slice(0,50))+((null===(d=null==i?void 0:i.gui)||void 0===d?void 0:d.label.length)>50?"...":""):(null==i?void 0:i.children)?null==i?void 0:i.children:null))},c=function(i){var e,o,v;return l.createElement("div",n({},null==i?void 0:i.DOMAttributes,{className:"system_switchbox",onClick:function(l){var n,e,o,v,t;(null===(n=null==i?void 0:i.state)||void 0===n?void 0:n.setValue)&&(null===(e=null==i?void 0:i.state)||void 0===e||e.setValue(!(null===(o=null==i?void 0:i.state)||void 0===o?void 0:o.value))),(null===(v=null==i?void 0:i.events)||void 0===v?void 0:v.onClick)&&(null===(t=null==i?void 0:i.events)||void 0===t||t.onClick(l))}}),l.createElement("div",{className:"box ".concat((null===(e=null==i?void 0:i.state)||void 0===e?void 0:e.value)&&"active")}),l.createElement("label",null,(null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.label)?null===(v=null==i?void 0:i.gui)||void 0===v?void 0:v.label:(null==i?void 0:i.children)?null==i?void 0:i.children:null))},r=function(e){var o,v,t,d,u,s,c,r,m,f;!function(l){i.useEffect((function(){var i,n,e,o,v,t;!(null===(n=null===(i=null==l?void 0:l.state)||void 0===i?void 0:i.active)||void 0===n?void 0:n.id)&&(null===(e=null==l?void 0:l.state)||void 0===e||e.setActive((null===(v=null===(o=null==l?void 0:l.gui)||void 0===o?void 0:o.components)||void 0===v?void 0:v.length)>0&&(null===(t=null==l?void 0:l.gui)||void 0===t?void 0:t.components[0])))}),[l])}(e);var p=function(l){return{onClickToOpenComponent:function(i,n){var e,o,v;(null===(e=null==l?void 0:l.events)||void 0===e?void 0:e.onClickToOpenComponent)&&(null===(o=null==l?void 0:l.events)||void 0===o||o.onClickToOpenComponent(i)),null===(v=null==l?void 0:l.state)||void 0===v||v.setActive(n)}}}(e).onClickToOpenComponent;return l.createElement("div",n({},null==e?void 0:e.DOMAttributes,{className:"system_tabcontainer"}),l.createElement("div",{className:"pages"},(null===(o=null==e?void 0:e.gui)||void 0===o?void 0:o.components)&&(null===(t=null===(v=null==e?void 0:e.gui)||void 0===v?void 0:v.components)||void 0===t?void 0:t.length)>0&&(null===(u=null===(d=null==e?void 0:e.gui)||void 0===d?void 0:d.components)||void 0===u?void 0:u.map((function(i){var n,o;return l.createElement(a,{className:(null==i?void 0:i.id)===(null===(o=null===(n=null==e?void 0:e.state)||void 0===n?void 0:n.active)||void 0===o?void 0:o.id)?"active":"",events:{onClick:function(l){return p(l,i)}},key:null==i?void 0:i.id},"asdads")})))),l.createElement("div",{className:"layout"},(null===(c=null===(s=null==e?void 0:e.state)||void 0===s?void 0:s.active)||void 0===c?void 0:c.id)&&(null===(f=null===(m=null===(r=null==e?void 0:e.gui)||void 0===r?void 0:r.components)||void 0===m?void 0:m.find((function(l){var i,n;return l.id===(null===(n=null===(i=null==e?void 0:e.state)||void 0===i?void 0:i.active)||void 0===n?void 0:n.id)})))||void 0===f?void 0:f.component)))},m=function(e){var o,v,t,d,u,a=l.useState(!1),s=a[0],c=a[1];return function(l){var n;i.useEffect((function(){null==l||l.setIsOpened(!1)}),[null===(n=null==l?void 0:l.state)||void 0===n?void 0:n.value])}(n(n({},e),{setIsOpened:c})),l.createElement("div",n({},null==e?void 0:e.DOMAttributes,{className:"system_dropdown_wrapper"}),l.createElement("div",{onClick:function(){return c(!s)},className:"selected_item"},null===(v=null===(o=null==e?void 0:e.state)||void 0===o?void 0:o.value)||void 0===v?void 0:v.value," ",l.createElement("button",null,s?"Close":"Open")),l.createElement("ul",{className:"items ".concat(s&&"active")},(null===(t=null==e?void 0:e.gui)||void 0===t?void 0:t.items)&&(null===(u=null===(d=null==e?void 0:e.gui)||void 0===d?void 0:d.items)||void 0===u?void 0:u.map((function(i){return l.createElement("li",{onClick:function(){var l,n;return(null===(l=null==e?void 0:e.state)||void 0===l?void 0:l.setValue)&&(null===(n=null==e?void 0:e.state)||void 0===n?void 0:n.setValue(i))}},null==i?void 0:i.value)})))))},f=function(i){var e,o,t,d,u,a,s,c,r,m;return l.createElement("div",{className:(null==i||i.className,null==i?void 0:i.className),style:null==i?void 0:i.styles},l.createElement(v,{className:null===(o=null===(e=null==i?void 0:i.gui)||void 0===e?void 0:e.cell)||void 0===o?void 0:o.className,styles:n({boxSizing:"border-box",width:"100%",border:"1px solid black"},null===(d=null===(t=null==i?void 0:i.gui)||void 0===t?void 0:t.cell)||void 0===d?void 0:d.styles)},l.createElement("label",{className:null===(a=null===(u=null==i?void 0:i.gui)||void 0===u?void 0:u.label)||void 0===a?void 0:a.className,style:null===(c=null===(s=null==i?void 0:i.gui)||void 0===s?void 0:s.label)||void 0===c?void 0:c.styles},null===(m=null===(r=null==i?void 0:i.gui)||void 0===r?void 0:r.label)||void 0===m?void 0:m.children),null==i?void 0:i.children))};export{a as Button,v as Cell,s as Checbox,m as Dropdown,o as Row,t as Selectize,c as Switchbox,r as Tabcontainer,d as Wrapper,f as fieldset};
//# sourceMappingURL=index.js.map
