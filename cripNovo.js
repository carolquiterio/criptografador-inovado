var criptografia = new Object();
criptografia.frase = '';
criptografia.fraseCriptografada = '';

criptografia.crip = function() { };

var simbolos = "abcdefghijklmnopqrstuvwxyz0123456789áéíóúãõâêîôû,!@#$%¨&*()_+=-.;:]}[{/?ç";
var tamanho = simbolos.length;

function codificar(letra) {
    for (i = 0; i <= tamanho; i++) {
        
        if(letra === "ç") { 
            return "a";
        }

        if (letra === " ") {
            return " ";
        }

        if(letra === this.simbolos.substring(i, i + 1)) { 
            return simbolos.substring(i + 1, i + 2);
        }
    }   
}

function descodificar(letra)
{
    if (letra === "a") {
        return "ç";
    }

    if (letra === " ") {
        return " ";
    }
    for(i = 0; i <= tamanho; i++)
    {
        if (letra === this.simbolos.substring(i, i - 1))
        {
            return simbolos.substring(i - 1, i - 2);
        }
    }
}

function Criptografia(f1) {
    this.frase = f1

    this.crip = function() {   
        var codigo = "";
        for(indice in this.frase) {   
            var letra = this.frase[indice];
            var letraCodificada  = codificar(letra.toLowerCase());
            codigo += letraCodificada;
        }

        return codigo;
    }
    
    this.descrip = function() {   
        var codigo = "";
        for(indice in this.frase) {   
            var letra = this.frase[indice];
            var letraCodificada  = descodificar(letra.toLowerCase());
            codigo += letraCodificada;
        }

        return codigo;
    }
};

$(document).ready(function() {
    $("input[name=botao]").click(function()  {  
        
        var conteudoBotao = $(this).val();
           $("#frase").val($("#frase").val() + conteudoBotao);  
     });
 
     $("input[name=botaoce]").click(function() { 
     $("#frase").val('');
     });
 
     $("input[name=botaocr1]").click(function(){
         var obj_frase = new Criptografia($("#frase").val());
         $("#frase").val(obj_frase.crip()); 
     });

     $("input[name=botaocr2]").click(function(){
         var obj_frase = new Criptografia($("#frase").val());
         $("#frase").val(obj_frase.descrip()); 
     }); 

});
