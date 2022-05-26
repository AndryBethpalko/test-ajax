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
        this.htmlContainer.innerText = response.responseText;
    }
}