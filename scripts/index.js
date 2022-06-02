const markdownContent = {
    "bold": {
        description: `Para fazer um conteúdo ser exibido em negrito, basta colocar o conteúdo entre asteríscos duplos (**), exemplo:

        **Conteúdo em negrito**`,
        title: "Negrito"
    },
    "italic": {
        description: `Para fazer um conteúdo ser exibido em itálico, basta colocar o conteúdo entre underlines (_) ou asteríscos (*), exemplo:

        _Conteúdo em itálico_
        *Também em itálico*`,
        title: "Itálico"
    },
    "link": {
        description: `Para criar um link, basta descrever um label entre colchetes ([]) e colocar o endereço entre parênteses, exemplo:

        [Label do link](https://www.exemplo.com.br)`,
        title: "Link"
    },
    "ordered-list": {
        description: `Para criar uma lista ordenada, basta colocar um número seguido de um ponto e o conteúdo em seguida (separado por espaço do numeral da lista), exemplo:

        1. Primeiro elemento
        2. Segundo elemento`,
        title: "Lista ordenada"
    },
    "title": {
        description: `Os títulos são definidios através de hashtags (#), podendo variar de uma a seis hashtags (quanto maior o número, menor o nível hierárquico daquele título). Exemplo:

        # Título nível 1
        ## Título nível 2
        ...
        ###### Título nível 6`,
        title: "Título"
    },
    "unordened-list": {
        description: `Para criar uma lista não ordenada, basta colocar "-", "*" ou "+" e o conteúdo em seguida (separado por espaço do marcador da lista), exemplo:

        - Elemento de lista não ordenada
        * Elemento de lista não ordenada
        + Elemento de lista não ordenada
        
        Obs.: Use apenas um desses símbolos na sua lista, misturar eles fará com que outra lista seja criada.`,
        title: "Lista não ordenada"
    }
};

const pageSections = document.querySelectorAll(".page-section");
pageSections.forEach(x => x.addEventListener("click", (e) => {
    pageSections.forEach(y => y.classList.remove("page-section--active"));
    e.target.classList.add("page-section--active");
    updateContent(e.target.getAttribute('data-content'));
}))

const contentTitle = document.getElementById("content-title");
const contentDescription = document.getElementById("content-description");
function updateContent(contentName) {
    const content = markdownContent[contentName];
    contentTitle.innerText = content.title;
    contentDescription.innerText = content.description;
}

updateContent("title");