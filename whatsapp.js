document.querySelector('#contato').addEventListener('click',function(){
 let nome = document.querySelector('#nome').value;
 let fone = document.querySelector('#fone').value;
 let mensagem = document.querySelector('#mensagem').value;
 
let url = ("https://api.whatsapp.com/send?phone=5543996922801&text="+
			"Nome: "+nome+"%0AFone:"+fone+"%0AMensagem: "+mensagem);
window.open(url);

});

function contato(tema){
	document.querySelector('#mensagem').value = tema;

}