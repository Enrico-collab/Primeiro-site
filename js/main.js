// TERCEIRA PARTE DO SITE

// Bom esse código abaixo é o meu código que eu peguei la no site de onde eu peguei os slides. É o codigo do meu modelo de slides. Que foi o modelo simples que eu peguei lá do site especifico. 
// Perceba que ele tá com o seletor de classe (.), sempre quando tem o . antes do nome, é uma classe. 
// Então vou atribuir uma classe pra ele, que será a classe ( "slider-principal" ) que foi atribuida la no meu arquivo index.html
// Depois eu preciso fazer com que meus scripts de js la no arquivo index.html, seja chamado a nossa página. Então pra isso eu preciso ir no meu arquivo index.html e no "src="..", e chamar o meu arquivo main.js"

// Feito tudo isso dito acima, nós vamos agora começar a editar/estilizar meu slider.

// 1ºPasso para editar meu slider: editar os dots: Dots é aquilo que especifica em qual imagem do slider voce está. Pode ser um circulo pequeno dentro do meu slider, indicando, ao passamento das imagens, em qual imagem estou.
// 2ºPasso para editar meu slider: estilizar os botões de "previus" e "next". 
// Quando meu slide rodou, apareceu um botão na parte de cima "previus" e outro na parte de baixo "next". Botões esses que servem para mudar os slides, voltar e próximo.
// Eu quero tirar esses botões e por duas setas, uma pra esquerda para voltar o slider e outro pra direita para adiantar os slider. 
// Como estilizar os botões: Como eu peguei esse slider de um site, eu vou no meu navegador do site que estou fazendo e inspeciono ele, e eu tenho que ver qual a classe que esses botões estão inlcuido ( classe essa já definida pelo meu arquivo que eu peguei no site, o slider ).
// Eu verifiquei e vi que ele esta atribuido na classe "slick-prev".
// Irei estilizar meus botões no meu arquivo main.css ( poderia ser feito por aqui, porém o professor fez no arquivo css). 
// Então eu vou la no meu arquivo main.css e vou referencia-lo como todos os outros já feitos.

// Abaixo estou referenciando minha classe do slide, já atribuida no index.html, para meu arquivo javascript ( main.js) para poder colocar as intruções do conteudo dentro do meu slide. Por os dots, por exemplo.
// Pondo os dots.
$('.slider-principal').slick({

    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true  // Instruções em js, a ultima instrução não tem virgula !! )
}); 
