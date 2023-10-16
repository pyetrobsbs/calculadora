function criaCalculadora(){
  return {
   display: document.querySelector('.display'),
  
   inicia(){
    this.cliqueBotoes();
   this.presionaEnter();
   },
   presionaEnter(){
   this.display.addEventListener('keydown', e =>{
      if(e.key === 13){
       this.igual();
      }
    })
    
   },
  clearDisplay(){
this.display.value = '';
  },
  apagaUm(){
    this.display.value = this.display.value.slice(0,-1);
  },
   igual(){
   let conta = this.display.value;
   try{
conta = eval(conta);
if(!conta){
  alert("Conta inválida");
  return;
}
this.display.value = String(conta);
   }catch(e){
    alert("Conta inválida");
    return;
   }
   },
  
   cliqueBotoes(){
    // this aqui é a calculadora
  document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('btn-num')){
     this.btnParaDisplay(el.innerText);
    }
if(el.classList.contains('btn-clear')){
this.clearDisplay();
}
if(el.classList.contains('btn-del')){
  this.apagaUm();
}
if(el.classList.contains('btn-eq')){
this.igual();
}

    this.display.focus();   
  }.bind(this));
   },
   btnParaDisplay (valor){
    this.display.value += valor;
  }
  }
}

let calculadora = criaCalculadora();
calculadora.inicia ();
