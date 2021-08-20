const iphonePrice=1219;
const casePrice=59;
const taxPer=15;
function incDecInputvalueBy1(inputId,inc){
   if(inc) document.getElementById(inputId+'-count').value=parseInt(document.getElementById(inputId+'-count').value)+1;
   else if(parseInt(document.getElementById(inputId+'-count').value)>0) document.getElementById(inputId+'-count').value=parseInt(document.getElementById(inputId+'-count').value)-1;
   let price;
   if(inputId=="iphone"){price=iphonePrice;}
   else price=casePrice;
   document.getElementById(inputId+'-price').innerText=price*(parseInt(document.getElementById(inputId+'-count').value));
   document.getElementById('subtotal-price').innerText=(iphonePrice*(parseInt(document.getElementById('iphone-count').value))+casePrice*(parseInt(document.getElementById('case-count').value)));
   document.getElementById('tax-price').innerText=(parseInt(document.getElementById('subtotal-price').innerText)*taxPer)/100;
   document.getElementById('total-price').innerText=parseFloat(document.getElementById('tax-price').innerText)+parseInt(document.getElementById('subtotal-price').innerText);
   
}

document.getElementById('iphone-inc').addEventListener('click',function(){
    incDecInputvalueBy1('iphone',true);
})

document.getElementById('iphone-dec').addEventListener('click',function(){
    incDecInputvalueBy1('iphone',false);
})

document.getElementById('case-inc').addEventListener('click',function(){
    incDecInputvalueBy1('case',true);
})

document.getElementById('case-dec').addEventListener('click',function(){
    incDecInputvalueBy1('case',false);
})