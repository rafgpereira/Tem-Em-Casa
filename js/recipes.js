
const ingredientesPossiveis = ['abóbora', 'abobrinha', 'amendoim', 'amido de milho', 'arroz', 'aveia', 'azeite','azeitona', 'água com gás', 'banana', 'bacalhau','bacon', 'batata', 'batata palha', 'bis','brócolis', 'cachaça','camarão', 'canela', 'canjica','carne bovina', 'cogumelo', 'couve-flor','creme de leite', 'cenoura', 'chuchu', 'chocolate', 'extrato de tomate' ,'farinha de rosca', 'farinha de trigo', 'fermento', 'frango','fubá', 'gengibre', 'iogurte natural', 'laranja', 'leite','leite condensado', 'leite de coco', 'leite em pó', 'limão', 'macarrão','maçã', 'mamão', 'mandioca', 'manteiga', 'margarina','molho de tomate', 'morango', 'mostarda', 'óleo', 'ovo', 'ovomaltine', 'pão', 'pêssego','pimentão', 'polpa de tomate', 'presunto', 'queijo', 'repolho','requeijão', 'salsicha', 'salame', 'salmão', 'shoyu','sorvete', 'suco em pó', 'tomate', 'uva','vinho'];

const recipes = [
    {
      title: "Lasanha de carne moída",
      link: "https://www.tudogostoso.com.br/receita/876-lasanha-de-carne-moida.html",
      ingredients: ["carne bovina", "presunto","queijo", "macarrão", "tomate","molho de tomate","extrato de tomate"],
      image: "https://static.itdg.com.br/images/640-420/e6aad16dfa0581de2d2f1d35f5aa7833/324587-original.jpg",
      preparationTime: "50 min",
      difficulty: "Médio"
    },
    {
      title: "Sopa de legumes com macarrão",
      link: "https://www.tudogostoso.com.br/receita/15665-sopa-de-legumes-com-macarrao.html",
      ingredients: ["carne bovina", "batata", "mandioca", "macarrão", "cenoura", "tomate"],
      image: "https://receitinhas.com.br/wp-content/uploads/2016/12/Sopa-de-legumes-com-macarrao-recepedia.jpg",
      preparationTime: "50 min",
      difficulty: "Difícil"
    },
    {
      title: "Yakisoba",
      link: "https://www.tudogostoso.com.br/receita/76053-yakisoba.html",
      ingredients: ["macarrão", "óleo", "couve-flor", "cogumelo", "cenoura", "carne bovina", "brócolis", "shoyu", "azeite"],
      image: "https://static.itdg.com.br/images/640-420/0e70301e36ca82769deb4ebfcb78c357/324834-original.jpg",
      preparationTime: "40 min",
      difficulty: "Fácil"
    },
    {
      title: "Almôndegas",
      link: "https://www.tudogostoso.com.br/receita/64879-almondegas.html",
      ingredients: ["carne bovina", "ovo", "molho de tomate", "farinha de rosca", "óleo", "azeite", "extrato de tomate", "tomate"],
      image: "https://static.itdg.com.br/images/640-420/64c44424862fd2c90989167ff9bd42b2/324166-original.jpg",
      preparationTime: "60 min",
      difficulty: "Fácil"
    },
    {
      title: "Panqueca de carne moída",
      link: "https://www.tudogostoso.com.br/receita/760-panqueca-de-carne-moida.html",
      ingredients: ["creme de leite", "leite", "óleo", "ovo", "farinha de trigo", "carne bovina", "extrato de tomate", "queijo", "tomate", "azeite", "molho de tomate"],
      image: "https://d1uz88p17r663j.cloudfront.net/original/e67c541e8769f21f0735ee884d24c216_panqueca-carne-moida-receitas-nestle.jpg",
      preparationTime: "40 min",
      difficulty: "Médio"
    },
    {
      title: "Strogonoff de carne",
      link: "https://www.tudogostoso.com.br/receita/53915-estrogonofe-de-carne-simples.html",
      ingredients: ["carne bovina", "creme de leite", "extrato de tomate", "tomate", "azeite", "óleo", "ketchup", "mostarda"],
      image: "https://static.itdg.com.br/images/640-420/496c09324eaa89a09e5576bf6fc98270/88625-original.jpg",
      preparationTime: "35 min",
      difficulty: "Fácil"
    },
    {
      title: "Fricassê de frango",
      link: "https://www.tudogostoso.com.br/receita/10254-fricasse-de-frango.html",
      ingredients: ["frango", "creme de leite", "requeijão", "milho", "queijo", "azeitona", "batata palha"],
      image: "https://assets.unileversolutions.com/recipes-v2/212080.png",
      preparationTime: "30 min",
      difficulty: "Fácil"
    },
    {
      title: "Strogonoff de frango",
      link: "https://www.tudogostoso.com.br/receita/2462-strogonoff-de-frango.html?slideshowPage=2#recipe-cover",
      ingredients: ["frango", "creme de leite", "cogumelo", "mostarda", "ketchup", "batata palha"],
      image: "https://static.itdg.com.br/images/640-420/16dea8c3e7084abc502ee2793a583a5f/332854-original.jpg",
      preparationTime: "60 min",
      difficulty: "Fácil"
    },
    {
      title: "Risoto de frango",
      link: "https://www.tudogostoso.com.br/receita/148084-risoto-de-frango-simples.html",
      ingredients: ["frango", "milho", "arroz"],
      image: "https://receitinhas.com.br/wp-content/uploads/2016/12/risoto-de-frango-simples.jpg",
      preparationTime: "30 min",
      difficulty: "Fácil"
    },
    {
      title: "Filé de frango empanado",
      link: "https://www.tudogostoso.com.br/receita/30068-file-de-frango-empanado.html",
      ingredients: ["frango", "ovo", "farinha de rosca"],
      image: "https://cooknenjoy.com/wp-content/uploads/2020/08/frango-crocante-03.jpg",
      preparationTime: "40 min",
      difficulty: "Fácil"
    },
    {
      title: "Frango xadrez",
      link: "https://www.tudogostoso.com.br/receita/897-frango-xadrez.html",
      ingredients: ["frango", "pimentão", "cogumelo", "amendoim", "amido de milho", "shoyu"],
      image: "https://cooknenjoy.com/wp-content/uploads/2017/01/frango-xadrez-02-500x375.jpg",
      preparationTime: "40 min",
      difficulty: "Fácil"
    },
    {
      title: "Camarão na moranga",
      link: "https://www.tudogostoso.com.br/receita/1106-camarao-na-moranga.html",
      ingredients: ["camarão", "tomate", "abóbora", "creme de leite", "requeijão", "ketchup"],
      image: "https://assets.unileversolutions.com/recipes-v2/181038.jpg",
      preparationTime: "90 min",
      difficulty: "Difícil"
    },
    {
      title: "Bobó de camarão",
      link: "https://www.tudogostoso.com.br/receita/112-bobo-de-camarao.html",
      ingredients: ["camarão", "mandioca", "molho de tomate", "pimentão", "extrato de tomate", "tomate"],
      image: "https://s2-receitas.glbimg.com/GyuIST9HlLttYS1X9ZO0T--q8wI=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/U/K/zp2llURnexxCaOgLe8iA/bobo-de-camarao-receita-2.jpg",
      preparationTime: "60 min",
      difficulty: "Médio"
    },
    {
      title: "Camarão internacional",
      link: "https://www.tudogostoso.com.br/receita/185460-camarao-internacional-receita-original-do-restaurante-coco-bambu.html",
      ingredients: ["camarão", "presunto", "queijo", "arroz", "requeijão", "ervilha", "creme de leite"],
      image: "https://www.saboresajinomoto.com.br/uploads/images/recipes/camarao-internacional.jpg",
      preparationTime: "40 min",
      difficulty: "Difícil"
    },
    {
      title: "Vatapá de camarão",
      link: "https://www.tudogostoso.com.br/receita/60592-vatapa-de-camarao-rapido.html",
      ingredients: ["camarão", "tomate", "leite de coco", "pão"],
      image: "https://www.receiteria.com.br/wp-content/uploads/vatapa-de-camarao-1-e1680017869564.jpg",
      preparationTime: "90 min",
      difficulty: "Médio"
    },
    {
      title: "Risoto de camarão",
      link: "https://www.tudogostoso.com.br/receita/185493-risoto-de-camarao-sem-frescura.html",
      ingredients: ["camarão", "queijo", "arroz", "vinho", "tomate", "molho de tomate", "óleo", "azeite", "extrato de tomate"],
      image: "https://www.receiteria.com.br/wp-content/uploads/risoto-de-camarao-14.jpg",
      preparationTime: "45 min",
      difficulty: "Difícil"
    },
    {
      title: "Filé de salmão ao forno",
      link: "https://www.tudogostoso.com.br/receita/87779-file-de-salmao-ao-forno-facilimo.html",
      ingredients: ["salmão", "azeitona", "shoyu"],
      image: "https://static.itdg.com.br/images/640-420/d60dc007d34a639e58edd6b4bcccaa67/318348-original.jpg",
      preparationTime: "50 min",
      difficulty: "Fácil"
    },
    {
      title: "Bolo de cenoura",
      link: "https://www.tudogostoso.com.br/receita/23-bolo-de-cenoura.html",
      ingredients: ["óleo", "ovo", "farinha de trigo", "cenoura", "açúcar", "chocolate", "leite", "manteiga", "fermento", "azeite", "margarina"],
      image: "https://static.itdg.com.br/images/640-420/d290bc79bcad112ee9095604e45eb262/365326-original.jpg",
      preparationTime: "40 min",
      difficulty: "Médio"
    },
    {
      title: "Bolo de milho",
      link: "https://www.tudogostoso.com.br/receita/143393-bolo-de-milho-de-lata-no-liquidificador.html",
      ingredients: ["milho", "açúcar", "óleo", "leite", "farinha de milho", "ovo", "fermento", "azeite"],
      image: "https://static.itdg.com.br/images/640-420/dddc72fe7700df29da2e028d7fe73ab6/84121-original.jpg",
      preparationTime: "50 min",
      difficulty: "Fácil"
    },
    {
      title: "Bolo de fubá",
      link: "https://www.tudogostoso.com.br/receita/21560-bolo-de-fuba-simples.html",
      ingredients: ["ovo", "fubá", "óleo", "farinha de trigo", "leite", "açúcar", "fermento", "azeite"],
      image: "https://static.itdg.com.br/images/640-420/a370bff058dfa1faf73efea045fb3707/364475-original.jpg",
      preparationTime: "45 min",
      difficulty: "Fácil"
    },
    {
      title: "Bolo de chocolate",
      link: "https://www.tudogostoso.com.br/receita/62547-a-melhor-receita-de-bolo-de-chocolate.html",
      ingredients: ["ovo", "manteiga", "açúcar", "leite", "chocolate", "farinha de trigo", "fermento", "margarina"],
      image: "https://static.itdg.com.br/images/640-420/5df1a91c8a4ea09243af6822b9970314/318292-original.jpg",
      preparationTime: "40 min",
      difficulty: "Médio"
    },
    {
      title: "Bolo comum",
      link: "https://www.tudogostoso.com.br/receita/29124-bolo-simples.html",
      ingredients: ["ovo", "farinha de trigo", "leite", "açúcar", "manteiga", "fermento", "margarina"],
      image: "https://static.itdg.com.br/images/640-420/92ab14d076bc6dfcc72ed10712924cd1/320646-original.jpg",
      preparationTime: "40 min",
      difficulty: "Fácil"
    },
    {
      title: "Fondue de queijo",
      link: "https://www.tudogostoso.com.br/receita/75804-fondue-de-queijo-facil-e-delicioso.html",
      ingredients: ["requeijão", "queijo", "creme de leite"],
      image: "https://static.itdg.com.br/images/640-420/071107a42349c5274abc29528cb02c4d/355222-original.jpg",
      preparationTime: "10 min",
      difficulty: "Médio"
    },
    {
      title: "Bolinho de arroz",
      link: "https://www.tudogostoso.com.br/receita/4224-bolinho-de-arroz.html?slideshowPage=2#recipe-cover",
      ingredients: ["arroz", "leite", "farinha de trigo", "óleo", "queijo", "ovo", "amido de milho", "azeite"],
      image: "https://static.itdg.com.br/images/640-420/49dc1a832774c48f9935c335508861c4/320105-original.jpg",
      preparationTime: "30 min",
      difficulty: "Fácil"
    },
    {
      title: "Purê de batata",
      link: "https://www.tudogostoso.com.br/receita/59-pure-de-batata.html",
      ingredients: ["batata", "manteiga", "leite", "margarina"],
      image: "https://static.itdg.com.br/images/640-420/ff86fc60e5e375108658ccc4e2ada183/319119-original.jpg",
      preparationTime: "60 min",
      difficulty: "Fácil"
    },
    {
      title: "Chocolate quente",
      link: "https://www.tudogostoso.com.br/receita/130871-chocolate-quente-cremoso.html",
      ingredients: ["leite", "chocolate", "canela", "amido de milho", "açúcar", "creme de leite"],
      image: "https://static.itdg.com.br/images/640-420/c917c8b8756e11e760db1cb81e1b8250/321194-original.jpg",
      preparationTime: "10 min",
      difficulty: "Fácil"
    },
    {
      title: "Quentão",
      link: "https://www.tudogostoso.com.br/receita/690-quentao.html?slideshowPage=2#recipe-cover",
      ingredients: ["cachaça", "açúcar", "limão", "maçã", "gengibre", "laranja", "canela"],
      image: "https://static.itdg.com.br/images/640-420/07aca2a3771fbad1c0ea97603e1981c4/100761-original.jpg",
      preparationTime: "40 min",
      difficulty: "Fácil"
    },
    {
      title: "Cappuccino",
      link: "https://www.tudogostoso.com.br/receita/50547-cappuccino-caseiro.html",
      ingredients: ["café", "chocolate", "canela", "leite em pó", "leite", "bicarbonato de sódio", "açúcar"],
      image: "https://static.itdg.com.br/images/640-420/aa1da627c8cb50386f375e128fa41ff9/365857-original-1-.jpg",
      preparationTime: "15 min",
      difficulty: "Fácil"
    },
    {
      title: "Panqueca",
      link: "https://www.tudogostoso.com.br/receita/82681-massa-de-panqueca.html",
      ingredients: ["ovo", "farinha de trigo", "leite"],
      image: "https://static.itdg.com.br/images/640-420/fe99f60e599810d8f12b3d21edd2be6f/319710-original.jpg",
      preparationTime: "30 min",
      difficulty: "Fácil"
    },
    {
      title: "Brownie",
      link: "https://www.tudogostoso.com.br/receita/306823-brownie-simples-e-rapido.html",
      ingredients: ["manteiga", "chocolate", "farinha de trigo", "ovo", "açúcar", "margarina"],
      image: "https://static.itdg.com.br/images/640-420/9e621f4e0b36756979fda3f87f8279a5/340593-original.jpg",
      preparationTime: "30 min",
      difficulty: "Fácil"
    },
    {
      title: "Pão",
      link: "https://www.tudogostoso.com.br/receita/178357-pao-caseiro.html",
      ingredients: ["farinha de trigo", "açúcar", "leite", "ovo", "óleo", "fermento", "azeite"],
      image: "https://static.itdg.com.br/images/640-420/421f428009c66fdce564599dba6b5b9a/328308-original.jpg",
      preparationTime: "90 min",
      difficulty: "Médio"
    },
    {
        title: "Macarrão à carbonara",
        link: "https://www.tudogostoso.com.br/receita/1624-macarrao-a-carbonara.html",
        ingredients: ["bacon", "ovo", "macarrão", "queijo"],
        image: "https://static.itdg.com.br/images/640-420/00476ffdd307a762beb387d9f3da0ae1/321428-original.jpg",
        preparationTime: "15 min",
        difficulty: "Fácil"
      },
      {
        title: "Macarrão à bolonhesa",
        link: "https://www.tudogostoso.com.br/receita/231-macarrao-bolonhesa.html",
        ingredients: ["carne bovina", "macarrão", "molho de tomate", "óleo", "extrato de tomate", "tomate", "azeite"],
        image: "https://static.itdg.com.br/images/640-420/000d6764be8aa0c96d528276a1ba511d/80944-original.jpg",
        preparationTime: "45 min",
        difficulty: "Médio"
      },
      {
        title: "Macarrão ao molho branco",
        link: "https://www.tudogostoso.com.br/receita/2040-macarrao-ao-molho-branco.html",
        ingredients: ["macarrão", "amido de milho", "queijo", "creme de leite", "óleo", "azeite"],
        image: "https://static.itdg.com.br/images/640-420/dd400d0b07b28388c84c10ec514f9bac/96645-original.jpg",
        preparationTime: "30 min",
        difficulty: "Médio"
      },
      {
        title: "Pudim de leite condensado",
        link: "https://www.tudogostoso.com.br/receita/31593-pudim-de-leite-condensado.html",
        ingredients: ["açúcar", "leite condensado", "ovo", "leite"],
        image: "https://static.itdg.com.br/images/640-420/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        preparationTime: "60 min",
        difficulty: "Fácil"
      },
      {
        title: "Canjica",
        link: "https://www.tudogostoso.com.br/receita/97021-canjica-com-leite-condensado.html",
        ingredients: ["canjica", "leite de coco", "leite", "leite condensado", "canela", "açúcar"],
        image: "https://static.itdg.com.br/images/640-420/48c2f944a28cf3b43edb8b8d29e53de4/352654-original.jpg",
        preparationTime: "40 min",
        difficulty: "Fácil"
      },
      {
        title: "Arroz doce",
        link: "https://www.tudogostoso.com.br/receita/10592-arroz-doce-cremoso.html",
        ingredients: ["arroz", "leite", "leite condensado", "açúcar", "creme de leite", "canela"],
        image: "https://static.itdg.com.br/images/640-420/bbc82056622a01af29d21e402aff9d5f/324146-original.jpg",
        preparationTime: "20 min",
        difficulty: "Fácil"
      },
      {
        title: "Brigadeiro",
        link: "https://www.tudogostoso.com.br/receita/114-brigadeiro.html",
        ingredients: ["leite condensado", "chocolate", "manteiga", "margarina"],
        image: "https://static.itdg.com.br/images/640-420/379203965029eeed8d861ed802dfc051/201447-original.jpg",
        preparationTime: "25 min",
        difficulty: "Fácil"
      },
      {
        title: "Bolinho de chuva",
        link: "https://www.tudogostoso.com.br/receita/76049-bolinho-de-chuva.html?slideshowPage=2#recipe-cover",
        ingredients: ["ovo", "leite", "fermento", "farinha de trigo", "açúcar", "óleo", "azeite"],
        image: "https://static.itdg.com.br/images/640-420/8eff200bdcb493d6e069835e746d513f/322657-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Torta de frango",
        link: "https://www.tudogostoso.com.br/receita/1282-torta-de-frango.html",
        ingredients: ["frango", "óleo", "tomate", "farinha de trigo", "leite", "queijo", "ovo", "fermento", "azeite"],
        image: "https://static.itdg.com.br/images/640-420/9fdb7c8f39a0159c559e36e665673301/317634-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Crepioca",
        link: "https://www.tudogostoso.com.br/receita/183595-crepioca-fit.html",
        ingredients: ["ovo", "tapioca"],
        image: "https://static.itdg.com.br/images/640-420/c062bff5d74293c587f5d9dd7b4ac3ea/319993-original.jpg",
        preparationTime: "5 min",
        difficulty: "Fácil"
      },
      {
        title: "Panqueca de aveia e banana",
        link: "https://www.tudogostoso.com.br/receita/189500-panqueca-saudavel-de-aveia-e-banana.html",
        ingredients: ["banana", "ovo", "aveia"],
        image: "https://static.itdg.com.br/images/640-420/53e47bf452300d58b8e741ae370eae4f/365870-original.jpg",
        preparationTime: "15 min",
        difficulty: "Fácil"
      },
      {
        title: "Salmão grelhado",
        link: "https://www.tudogostoso.com.br/receita/43297-salmao-grelhado.html",
        ingredients: ["salmão", "limão", "óleo", "azeite"],
        image: "https://static.itdg.com.br/images/640-420/d59df3673a8fcd365af0caac830ed377/324510-original.jpg",
        preparationTime: "20 min",
        difficulty: "Fácil"
      },
      {
        title: "Salada de frutas",
        link: "https://www.tudogostoso.com.br/receita/787-salada-de-frutas-gostosa.html",
        ingredients: ["laranja", "maçã", "pêssego", "morango", "uva", "banana", "mamão", "leite condensado"],
        image: "https://static.itdg.com.br/images/640-420/ed559632ca179391eab91a3a5daa98e2/116622-original.jpg",
        preparationTime: "10 min",
        difficulty: "Fácil"
      },
      {
        title: "Cachorro-quente",
        link: "https://www.tudogostoso.com.br/receita/119770-cachorro-quente-aprovadissimo.html",
        ingredients: ["salsicha", "tomate", "molho de tomate", "batata palha", "manteiga", "creme de leite", "margarina", "extrato de tomate"],
        image: "https://static.itdg.com.br/images/640-420/ac539e127fc4784c8606502714f3de96/357545-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Bolo gelado",
        link: "https://www.tudogostoso.com.br/receita/2313-bolo-gelado.html",
        ingredients: ["ovo", "açucar", "farinha de trigo", "fermento", "laranja"],
        image: "https://static.itdg.com.br/images/640-420/cf4237cb78202f2b0852ae7bb4ef980b/325143-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Torta",
        link: "https://www.tudogostoso.com.br/receita/1362-torta-de-liquidificador.html",
        ingredients: ["ovo", "queijo", "fermento", "farinha de trigo", "óleo", "leite"],
        image: "https://www.mariareceita.com.br/wp-content/uploads/2022/03/receita-torta-liquidificador-facil-rapida-1200x900.jpg",
        preparationTime: "35 min",
        difficulty: "Fácil"
      },
      {
        title: "Danoninho caseiro",
        link: "https://www.tudogostoso.com.br/receita/19728-danoninho-caseiro.html",
        ingredients: ["iogurte natural", "creme de leite", "leite condensado", "suco em pó"],
        image: "https://static.itdg.com.br/images/640-420/b2d293e4b1a1303170a5e1fada2178b2/291860-original.jpg",
        preparationTime: "10 min",
        difficulty: "Fácil"
      },
      {
        title: "Mousse de limão",
        link: "https://www.tudogostoso.com.br/receita/155693-mousse-de-limao-rapido.html",
        ingredients: ["leite condensado", "creme de leite", "limão"],
        image: "https://static.itdg.com.br/images/640-420/95266ed07a35db7aace47dc297a70426/332853-original.jpg",
        preparationTime: "10 min",
        difficulty: "Fácil"
      },
      {
        title: "Pizza",
        link: "https://www.tudogostoso.com.br/receita/93498-pizza-de-liquidificador-facil.html",
        ingredients: ["leite", "ovo", "açúcar", "farinha de trigo", "fermento", "molho de tomate", "polpa de tomate", "tomate", "margarina", "manteiga"],
        image: "https://static.itdg.com.br/images/640-420/ace4d69b25472336966e5ff89805443e/323883-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Doce de coco com chocolate",
        link: "https://www.tudogostoso.com.br/receita/140770-doce-gelado-de-coco-com-chocolate.html",
        ingredients: ["leite condensado", "leite", "coco", "amido de milho", "creme de leite"],
        image: "https://static.itdg.com.br/images/640-420/17ec319215fabd2b295e58fffdc4ed93/326636-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Brigadeirão",
        link: "https://www.tudogostoso.com.br/receita/73135-brigadeirao-rapido-e-facil.html",
        ingredients: ["leite condensado", "chocolate", "manteiga", "margarina", "ovo", "creme de leite"],
        image: "https://static.itdg.com.br/images/640-420/47a879dd278115077081802c871f4942/294237-original.jpg",
        preparationTime: "10 min",
        difficulty: "Fácil"
      },
      {
        title: "Bolo de banana",
        link: "https://www.tudogostoso.com.br/receita/119737-bolo-de-banana-rapido-de-liquidificador.html",
        ingredients: ["ovo", "leite", "farinha de trigo", "banana", "óleo", "azeite", "fermento", "açúcar"],
        image: "https://static.itdg.com.br/images/640-420/f2f6e2d33e36672ef5bc6a318cac858b/365847-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Mousse de maracujá",
        link: "https://www.tudogostoso.com.br/receita/1599-mousse-de-maracuja.html",
        ingredients: ["maracuja", "leite condensado", "creme de leite"],
        image: "https://static.itdg.com.br/images/640-420/e1ceeccaac52a138e4ab2f9a125b533b/mousse-de-maracuja.jpg",
        preparationTime: "5 min",
        difficulty: "Fácil"
      },
      {
        title: "Bolo de milho",
        link: "https://www.tudogostoso.com.br/receita/94018-bolo-de-milho-cremoso.html",
        ingredients: ["milho", "ovo", "açúcar", "coco", "farinha de trigo", "óleo", "azeite", "fermento", "fubá"],
        image: "https://static.itdg.com.br/images/640-420/81f87dfad2f0ecf2790ba3557b2bf369/332850-original.jpg",
        preparationTime: "90 min",
        difficulty: "Fácil"
      },
      {
        title: "Creme de milho",
        link: "https://www.tudogostoso.com.br/receita/6662-creme-de-milho.html",
        ingredients: ["milho", "leite", "creme de leite", "farinha de trigo", "manteiga", "margarina"],
        image: "https://static.itdg.com.br/images/640-420/ebd364f73a811242983d83e3fac65333/321081-original.jpg",
        preparationTime: "20 min",
        difficulty: "Fácil"
      },
      {
        title: "Molho branco",
        link: "https://www.tudogostoso.com.br/receita/8072-molho-branco-para-macarrao.html",
        ingredients: ["amido de milho", "creme de leite", "queijo", "margarina", "manteiga", "leite"],
        image: "https://static.itdg.com.br/images/640-420/083d078a0569e59ae0560f57f5bec20a/320870-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Pavê de bis",
        link: "https://www.tudogostoso.com.br/receita/612-pave-de-bis.html",
        ingredients: ["leite condensado", "chocolate", "manteiga", "margarina", "ovo", "creme de leite", "açúcar", "bis", "amido de milho"],
        image: "https://static.itdg.com.br/images/640-420/06b0d96c9d836c1150516aed1137e44f/38644-original.jpg",
        preparationTime: "50 min",
        difficulty: "Médio"
      },
      {
        title: "Misto quente",
        link: "https://www.tudogostoso.com.br/receita/138603-misto-quente-de-forno-a-minha-moda.html",
        ingredients: ["margarina", "manteiga", "pão", "molho de tomate", "polpa de tomate", "tomate", "queijo", "creme de leite", "requeijão"],
        image: "https://static.itdg.com.br/images/640-420/f2f17d646cd72a144d2f0fb660c42e83/100602-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Empadão de frango",
        link: "https://www.tudogostoso.com.br/receita/8054-empadao-de-frango-delicioso.html",
        ingredients: ["farinha de trigo", "ovo", "leite", "manteiga", "margarina", "frango", "azeite", "tomate", "óleo", "molho de tomate", "polpa de tomate", "milho", "azeitona"],
        image: "https://static.itdg.com.br/images/640-420/534dee625691c71ff0f54600fd1020f1/156742-original.jpg",
        preparationTime: "120 min",
        difficulty: "Fácil"
      },
      {
        title: "Coxinha de frango",
        link: "https://www.tudogostoso.com.br/receita/1363-coxinha-pratica-deliciosa.html",
        ingredients: ["leite", "batata", "farinha de trigo", "manteiga", "margarina", "frango", "azeite", "óleo", "ovo", "farinha de rosca", "requeijão"],
        image: "https://static.itdg.com.br/images/640-420/698d517f24c5b5de84f65590402aa1e0/38830-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Torta de banana",
        link: "https://www.tudogostoso.com.br/receita/2211-torta-de-banana-rapida.html",
        ingredients: ["farinha de trigo", "açúcar", "leite", "ovo", "margarina", "fermento", "manteiga", "banana"],
        image: "https://static.itdg.com.br/images/640-420/c7cd687982f847b54fdfbf30348654e8/196380-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Milkshake ovomaltine",
        link: "https://www.tudogostoso.com.br/receita/15577-milk-shake-ovomaltine-original.html",
        ingredients: ["sorvete", "leite", "ovomaltine"],
        image: "https://static.itdg.com.br/images/640-420/41725724fc72a1a8173b44c2f439ead9/1717-original.jpg",
        preparationTime: "10 min",
        difficulty: "Fácil"
      },
      {
        title: "Drink sem álcool",
        link: "https://www.tudogostoso.com.br/receita/161136-drinks-de-frutas-sem-alcool.html",
        ingredients: ["limão", "água com gás"],
        image: "https://static.itdg.com.br/images/640-420/88dc8cd8c4ac06fd504b8f3a422217f7/121020-original.jpg",
        preparationTime: "15 min",
        difficulty: "Fácil"
      },
      {
        title: "Gemada",
        link: "https://www.tudogostoso.com.br/receita/33680-gemada.html",
        ingredients: ["leite", "ovo", "açúcar", "canela"],
        image: "https://static.itdg.com.br/images/640-420/e573756ac9951533edbb9623f7aff008/348389-original.jpg",
        preparationTime: "5 min",
        difficulty: "Fácil"
      },
      {
        title: "Souflé de cenoura",
        link: "https://www.tudogostoso.com.br/receita/15091-soufle-de-cenoura.html",
        ingredients: ["queijo", "margarina", "manteiga", "farinha de trigo", "ovo", "leite", "cenoura"],
        image: "https://static.itdg.com.br/images/640-420/e4c0c1b7da63cd396ff259af2c33ce28/353887-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de bacalhau",
        link: "https://www.tudogostoso.com.br/receita/6113-soufle-de-bacalhau.html",
        ingredients: ["bacalhau", "farinha de trigo", "ovo", "azeite", "óleo", "tomate", "batata", "azeitona"],
        image: "https://static.itdg.com.br/images/640-420/6b960886e573f551adaf92479c8dc6aa/297549-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de queijo",
        link: "https://www.tudogostoso.com.br/receita/2020-soufle-de-queijo.html",
        ingredients: ["ovo", "queijo", "farinha de trigo", "leite", "manteiga", "margarina"],
        image: "https://static.itdg.com.br/images/640-420/7c4e3108735fc406921df1e60266099a/102975-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de brócolis",
        link: "https://www.tudogostoso.com.br/receita/1404-soufle-de-brocolis.html",
        ingredients: ["brócolis", "ovo", "amido", "batata", "queijo", "leite", "creme de leite", "manteiga", "margarina"],
        image: "https://static.itdg.com.br/images/640-420/52027795eb7a723983b18e52dc0d1957/92644-original.jpg",
        preparationTime: "30 min",
        difficulty: "Fácil"
      },
      {
        title: "Souflé de espinafre",
        link: "https://www.tudogostoso.com.br/receita/168529-soufle-de-espinafre.html",
        ingredients: ["espinafre", "farinha de trigo", "ovo", "fermento", "queijo", "leite", "manteiga"],
        image: "https://static.itdg.com.br/images/640-420/aefe6ee7bab57d719d87d80894fe535b/143294-original.jpg",
        preparationTime: "50 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de abobrinha",
        link: "https://www.tudogostoso.com.br/receita/28320-soufle-de-abobrinha.html",
        ingredients: ["abobrinha", "farinha de trigo", "ovo", "óleo", "azeite", "fermento", "queijo"],
        image: "https://static.itdg.com.br/images/640-420/8cf25f957acb972980593e9c7e2c8c8b/347795-original.jpg",
        preparationTime: "80 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de chuchu",
        link: "https://www.tudogostoso.com.br/receita/22040-soufle-de-chuchu.html",
        ingredients: ["ovo", "repolho", "amido", "batata", "queijo", "leite"],
        image: "https://static.itdg.com.br/images/640-420/b044dc9fc2efe13fe3959fa20c333e3e/294277-original.jpg",
        preparationTime: "40 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de batata",
        link: "https://www.tudogostoso.com.br/receita/1366-soufle-de-batatas.html",
        ingredients: ["leite", "margarina", "manteiga", "batata", "queijo", "ovo"],
        image: "https://static.itdg.com.br/images/640-420/e5dd6d7bf9ae89fef5f692de31d9c99e/106327-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de frango",
        link: "https://www.tudogostoso.com.br/receita/1535-soufle-de-frango.html",
        ingredients: ["manteiga", "margarina", "leite", "ovo", "farinha de trigo", "frango"],
        image: "https://static.itdg.com.br/images/640-420/fcd2f6ab2303599939c06195806faad3/192572-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Souflé de repolho",
        link: "https://www.tudogostoso.com.br/receita/1999-soufle-de-repolho.html",
        ingredients: ["ovo", "repolho", "amido", "batata", "queijo", "leite"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpLxUeImXD8H7YSpZJvROSsGnZpErEpspVkBA_jJWJ2OuX_N4rXk8L0uY9PqRoE5WSX4&usqp=CAU",
        preparationTime: "40 min",
        difficulty: "Fácil"
      },
      {
        title: "Souflé de arroz",
        link: "https://www.tudogostoso.com.br/receita/27604-soufle-de-arroz.html",
        ingredients: ["arroz", "leite", "queijo", "manteiga", "margarina"],
        image: "https://static.itdg.com.br/images/640-420/f9ecc697bd56760fc966ae080501a102/224770-original.jpg",
        preparationTime: "6 min",
        difficulty: "Fácil"
      },
      {
        title: "Souflé de camarão",
        link: "https://www.tudogostoso.com.br/receita/11727-soufle-de-camarao.html",
        ingredients: ["tomate", "creme de leite", "queijo", "ovo", "leite", "camarão", "farinha de trigo", "azeite", "óleo"],
        image: "https://static.itdg.com.br/images/640-420/f5c239d23cb8b25dc8f15d24f5d28362/26192-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Escondidinho de camarão",
        link: "https://www.tudogostoso.com.br/receita/59077-escondidinho-de-camarao.html",
        ingredients: ["camarão", "leite de coco", "leite", "manteiga", "margarina", "tomate", "mandioca", "requeijão", "azeite", "óleo"],
        image: "https://static.itdg.com.br/images/640-420/7825aa74cfa0e3114a89dc1b6f516d85/337714-original.jpg",
        preparationTime: "40 min",
        difficulty: "Fácil"
      },
      {
        title: "Escondidinho de frango",
        link: "https://www.tudogostoso.com.br/receita/22275-escondidinho-de-frango.html",
        ingredients: ["frango", "molho de tomate", "polpa de tomate", "tomate", "margarina", "manteiga", "requeijão", "queijo", "milho", "batata"],
        image: "https://static.itdg.com.br/images/640-420/0c17344f678b6ff2b97e6b854e7fe6e3/352808-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Escondidinho de carne seca",
        link: "https://www.tudogostoso.com.br/receita/20768-escondidinho-de-carne-seca.html",
        ingredients: ["mandioca", "margarina", "manteiga", "tomate", "queijo", "carne", "creme de leite"],
        image: "https://static.itdg.com.br/images/640-420/24d17b46bb12ce7f173ffa06b74e6197/353480-original.jpg",
        preparationTime: "60 min",
        difficulty: "Médio"
      },
      {
        title: "Escondidinho de carne moída",
        link: "https://www.tudogostoso.com.br/receita/136814-escondidinho-de-carne-moida.html",
        ingredients: ["batata", "queijo", "manteiga", "margarina", "leite", "azeite", "óleo", "carne bovina"],
        image: "https://static.itdg.com.br/images/640-420/2a589e556d1b1a52ce7389f3b57d7a8f/322458-original.jpg",
        preparationTime: "40 min",
        difficulty: "Fácil"
      },
      {
        title: "Escondidinho de bacalhau",
        link: "https://www.tudogostoso.com.br/receita/82484-bacalhau-escondidinho.html",
        ingredients: ["batata", "queijo", "manteiga", "margarina", "leite", "azeite", "óleo", "creme de leite", "tomate", "bacalhau", "pimentão", "ovo"],
        image: "https://static.itdg.com.br/images/640-420/d5ae06aabed35fc379bba73b2d6661a2/318351-original.jpg",
        preparationTime: "40 min",
        difficulty: "Fácil"
      }

  ];

  export {recipes, ingredientesPossiveis}