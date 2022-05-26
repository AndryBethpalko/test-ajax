class pageLoader {
    constructor(htmlContainer) {
        this._pageLoaderData = {
            htmlContainer: htmlContainer
        };
        htmlContainer.innerText = 'Loading ...';

        let oReq = new XMLHttpRequest();
        let self = this;
        oReq.addEventListener(
            "load",
            function () {
                self.loadData(this)
            }
        );
        oReq.open("GET", "json/code-test.json");
        oReq.send();
    }

    get htmlContainer() {
        return this._pageLoaderData.htmlContainer;
    }

    loadData(response) {
        let dataSet = JSON.parse(response.responseText);
        dataSet.articles && dataSet.articles.length ? this.showArticles(dataSet.articles) : this.showListIsEmpty();
    }

    showArticles(articles) {
        this.htmlContainer.innerHTML = '';
        articles.forEach(
            function (item) {
                this.createArticleItem(item)
            }.bind(this)
        )
    }

    showListIsEmpty() {
        this.htmlContainer.innerText = 'List is empty';
    }

    createArticleItem(item) {
        createHtmlElem(
            'div',
            this.htmlContainer,
            {
                className: 'article-envelope',
                // TODO: escape title
                innerHTML: `
                  <div class="article">
                    <p class="category">${escapeHtml(item.primarySectionRouteName)}</p>                  
                    <a class="headline" href="${item.link}">${escapeHtml(item.headline)}</a>
                    <p class="standfirst">${escapeHtml(item.standfirst)}</p>                                      
                  </div>
                  <img height="${item.thumbnail.height}" width="${item.thumbnail.height}" 
                  src="${item.thumbnail.src}" title="${item.thumbnail.title}">
                `
            }
        )
    }
}