const select=document.getElementById("speedSelect"),options=[{value:"0.25",text:"0.25x"},{value:"0.5",text:"0.5x"},{value:"0.75",text:"0.75x"},{value:"0.9",text:"0.9x"},{value:"1",text:"1x",selected:!0},{value:"1.1",text:"1.1x"},{value:"1.25",text:"1.25x"},{value:"1.5",text:"1.5x"},{value:"1.75",text:"1.75x"},{value:"2",text:"2x"},{value:"5",text:"5x"}];options.forEach((e=>{const{value:t,text:x,selected:l}=e,a=document.createElement("option");a.value=t,a.text=x,l&&(a.selected=!0),select.appendChild(a)}));