$('.collection')
    .on('click', '.collection-item', function(){
        //para adicionar a quantidade na lista
        var $badge = $('.badge', this);
        if ($badge.length === 0) {
            $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
        }
        $badge.text(parseInt($badge.text()) + 1);

        //Para a mensagem do Toast
        var nomeProduto = this.firstChild.textContent;
        M.toast({html: nomeProduto + ' adicionado'}, 1000);
    })
    .on('click', '.badge', function() {
        $(this).remove();
        return false;
    });

//exibindo o modal
$('.modal').modal();


$('#confirmar').on('click', function() {
    var texto = "";
    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });
    $('#resumo').empty().text(texto);
});

//botao limpar
$('.acao-limpar').on('click', function() {
    $('.badge').remove();
});

$('#finalizar').click(function(){
    $.ajax({
        url: 'http://127.0.0.1/appaula.php',
        type: "POST",
        data:{
            resumo: $('#resumo').text()
        },
        error:function(erro){
            M.toast({html: erro.responseText},3000,'red-text');
        },
        success:function(dados){
            M.toast({html: dados},3000);
            $('.badge').remove();
        }
    });
})