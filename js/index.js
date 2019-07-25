$(document).ready(function () {
    /**
     * on
     */
    function onAdd() {

        var $ul, li, $li, $label, $div, livro, autor;
        livro = $(".js-novo-livro").val();
        autor = $(".js-novo-autor").val();

        //valida se livro esta vazio
        if (livro === "") {
            return;
        }

        $ul = $("ul");
        $li = $("<li>").appendTo($ul);
        $div = $("<div>")
                .addClass("checkbox")
                .appendTo($li);

        $label = $('<label>').appendTo($div);
        $('<input>')
                .attr("type", "checkbox")
                .addClass("js-livro")
                .attr('name', 'list')
                .click(toggleRemovido)
                .appendTo($label);

        $("<big>")
                .appendTo($label)
                .append(livro);

        $label.append(" - ");

        $("<small>")
                .appendTo($label)
                .append(autor);

        $(".js-novo-livro, .js-novo-autor").val("");
    }

    /**
     * Comment
     */
    function toggleRemovido(ev) {
        var $el;
        $el = $(ev.currentTarget);
        $el.closest("li").toggleClass("removido");
    }
    $(".js-add").click(onAdd);
    $(".js-livro").click(toggleRemovido);


});
// Comando 1
var data = {
    livros: [{titulo: 'Orange is The New Black', autor: 'Piper Kerman', checked: true},
        {titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false}],
    cabecalho: 'Livros Preferidos',
    novoLivro: '',
    novoAutor: ''
};

// Comando 2
new Vue({
    el: '#app',
    data: data,
    methods: {
        addLivro: function () {
            console.info('dentro do vue');
            console.info(this);
                        console.info('fim do console');

            var titulo = this.novoLivro.trim();
            var autor = this.novoAutor.trim();
            if (titulo && autor) {
                this.livros.push({
                    titulo: titulo,
                    autor: autor,
                    checked: false
                });
                this.novoLivro = "";
                this.novoAutor = "";
            }
        }
    }
});

//data.titulo = "Livros Preferidos";