module.exports.iniciaChat = function(application, req, res){
	
	var dadosForm = req.body;
	
	req.assert('apelido','Nome/Apelido é obrigatório').notEmpty();
	req.assert('apelido','Nome/Apelido deve ter entre 3 e 15 caracteres').len(3,15);
	
	var erros = req.validationErrors();
	if (erros){
		//res.send('existem erros no formulário'+ erros)
		res.render('index',{validacao:erros})
		return
	}

	
	application.get('io').emit('msgParaCliente',{apelido: dadosForm.apelido, mensagem:' acabou de entrar no chat'});
	
	res.render('chat2',{dadosForm: dadosForm});
}