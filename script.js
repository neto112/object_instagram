const feed = [{
        login: "gi.almerindo",
        foto: "https://avatars.githubusercontent.com/u/79769515?v=4",
        fotocurtida: "https://avatars.githubusercontent.com/u/79769515?v=4",
        quemcurtiu: "augustawillrich",
        ncurtido: 17,
        texto: "#tbt 👑👑Eu sempre achei elas parecidas mas uma é rainha de lá e outra aqui do lado de dentro 💛! Quanta saudade, vó amada!",
        quemcomentou: "heloisyin93",
        oquecomentou: "Quanta saudade!!",
        PostouMinutos: 19
    },
    {
        login: "ruiter_trader",
        foto: "https://avatars.githubusercontent.com/u/79769515?v=4",
        fotocurtida: "https://avatars.githubusercontent.com/u/79769515?v=4",
        quemcurtiu: "investidor",
        ncurtido: 312,
        texto: "JA REFLETIU SOBRE ISSO?! #analisetecnica #swingtrading #swingtrader #daytrade #daytraderbrasil #rendavariavel...",
        quemcomentou: "vitor.x.ferreira",
        oquecomentou: "Bom dia!! Tem algum canal no YouTube? Obrigado",
        PostouMinutos: 23
    },
    {
        login: "sejaumapessoamelhor",
        foto: "https://avatars.githubusercontent.com/u/79769515?v=4",
        fotocurtida: "https://avatars.githubusercontent.com/u/79769515?v=4",
        quemcurtiu: "luanaoliveira",
        ncurtido: 95,
        texto: "Quantas vezes você já machucou alguém — ou alguém te machucou — por palavras ditas nos piores momentos?...",
        quemcomentou: "andretorrespinto",
        oquecomentou: "Depois que você falou sem pensar, o estrago já tá feito. Nos momentos de raiva, o silêncio é a melhor resposta. 🔥",
        PostouMinutos: 33
    },
]

const feedElement = document.getElementsByClassName("feed")[0];

feedElement.innerHTML = feed.map(feed => (
    `
    <div class="feedpost">
<div class="post">
<div class="post-esquerdo">
    <img src="${feed.foto}"></img>
    <strong>${feed.login}</strong>
</div>
<div class="post-direito">
    <strong>...</strong>
</div>
</div>
<div class="img">
<img src="${feed.foto}"></img>
</div>
<ul class="descricao">
<li class="descricao-de">
    <div class="descricao-esquerda">
        <svg aria-label="Curtir" class="svg1" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
<path
d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
</path>
</svg>
        <svg aria-label="Comentar" class="svg2" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
<path clip-rule="evenodd"
d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
fill-rule="evenodd"></path>
</svg>
        <svg aria-label="Compartilhar publicação" class="svg3" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
<path
d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
</path>
</svg>
    </div>
    <div class="descricao-direita">
        <svg aria-label="Salvar" class="svg4" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
<path
d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z">
</path>
</svg>
    </div>
</li>
<li class="descricao-imagem">
    <img src="${feed.fotocurtida}"></img>
    <div>
        Curtido por <strong>${feed.quemcurtiu}</strong> e <strong> outras ${feed.ncurtido} pessoas </strong>
    </div>
</li>
<li class="cristianorneto_">
    <div>
        <strong>${feed.login}</strong> ${feed.texto}
    </div>
    <strong>${feed.quemcomentou}</strong>
    <span>${feed.oquecomentou}</span>
</li>
<li class="cristianorneto_">
    <div class="update">HÁ ${feed.PostouMinutos} MINUTOS</div>
</li>
</ul>
<div class="comentario">
<div class="comentario-esquerdo">
    <svg aria-label="Emoji" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
<path
d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z">
</path>
<path
d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z">
</path>
</svg>
    <input placeholder="Adicione um comentário"></input>
</div>
<div class="comentario-direito">
    <span>Publicar</span>
</div>
</div>
</div>
`
));