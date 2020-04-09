var criptografia = new Object();
criptografia.frase = '';
criptografia.fraseCriptografada = '';

criptografia.crip = function() { };
criptografia.crip2 = function() { };

function codificar(letra)
{
    switch(letra)
    {
        case 'A': return 'Q';break;
        case 'S': return 'W';break;
        case 'D': return 'E';break;
        case 'F': return 'R';break;
        case 'G': return 'T';break;
        case 'H': return 'Y';break;
        case 'J': return 'U';break;
        case 'K': return 'I';break;
        case 'L': return 'O';break;
        case 'Ç': return 'P';break;
        case 'Q': return '1';break;
        case 'W': return '2';break;
        case 'E': return '3';break;
        case 'R': return '4';break;
        case 'T': return '5';break;
        case 'Y': return '6';break;
        case 'U': return '7';break;
        case 'I': return '8';break;
        case 'O': return '9';break;
        case 'P': return '0';break;
        case '1': return 'Z';break;
        case '2': return 'X';break;
        case '3': return 'C';break;
        case '4': return 'V';break;
        case '5': return 'B';break;
        case '6': return 'N';break;
        case '7': return 'M';break;
        case '8': return 'A';break;
        case '9': return 'S';break;
        case '0': return 'D';break;
        case 'Z': return 'F';break;
        case 'X': return 'G';break;
        case 'C': return 'H';break;
        case 'V': return 'J';break;
        case 'B': return 'K';break;
        case 'N': return 'L';break;
        case 'M': return 'Ç';break;
        case ' ': return ' ';break;
    }
}

function codificar2(letra)
{
    switch(letra)
    {
        case 'A': return 'Z';break;
        case 'S': return 'X';break;
        case 'D': return 'C';break;
        case 'F': return 'V';break;
        case 'G': return 'B';break;
        case 'H': return 'N';break;
        case 'J': return 'M';break;
        case 'K': return 'A';break;
        case 'L': return 'S';break;
        case 'Ç': return 'D';break;
        case 'Q': return 'F';break;
        case 'W': return 'G';break;
        case 'E': return 'H';break;
        case 'R': return 'J';break;
        case 'T': return 'K';break;
        case 'Y': return 'L';break;
        case 'U': return 'Ç';break;
        case 'I': return 'Q';break;
        case 'O': return 'W';break;
        case 'P': return 'E';break;
        case '1': return 'R';break;
        case '2': return 'T';break;
        case '3': return 'Y';break;
        case '4': return 'U';break;
        case '5': return 'I';break;
        case '6': return 'O';break;
        case '7': return 'P';break;
        case '8': return '1';break;
        case '9': return '2';break;
        case '0': return '3';break;
        case 'Z': return '4';break;
        case 'X': return '5';break;
        case 'C': return '6';break;
        case 'V': return '7';break;
        case 'B': return '8';break;
        case 'N': return '9';break;
        case 'M': return '0';break;
        case ' ': return ' ';break;
    }
}


function Criptografia(f1) 
{
    this.frase = f1

    this.crip = function()  
    {   
        var codigo = "";
        for(indice in this.frase)
        {   
            var letra = this.frase[indice];
            var letraCodificada  = codificar(letra.toUpperCase());
            codigo += letraCodificada;
        }

        return codigo;
    }
    this.crip2 = function()  
    {   
        var codigo = "";
        for(indice in this.frase)                                             
        {                                                                                            
           var letra = this.frase[indice];
           var letraCodificada  = codificar2(letra.toUpperCase());
           codigo += letraCodificada; 
        }                                                       
                                                                                
        return codigo;
    }
};

$(document).ready(function(){
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
         $("#frase").val(obj_frase.crip2()); 
     }); 

});
