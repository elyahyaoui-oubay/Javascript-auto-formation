class ouvrageManager {
    #ouvrageList = [];
    #counter = 0;

    get ouvrageList(){
        return this.#ouvrageList;
    }

    addouvrage(ouvrage) {
        this.#counter = this.#counter + 1
        ouvrage.id = this.#counter
        this.#ouvrageList.push(ouvrage)
    }

    editouvrage(ouvrage) {
        console.log(ouvrage)
        for (var i = 0; i < this.#ouvrageList.length; i++) {
            if (ouvrage.id == this.#ouvrageList[i].id) {
                this.#ouvrageList[i] = ouvrage
                return ouvrage
            }
        }
    }


    getItem(id) {
        for (var i = 0; i < this.ouvrageList.length; i++) {
            if (id == this.ouvrageList[i].id) {
                return this.ouvrageList[i]
            }
        }
    }

    deleteouvrage(id) {
       this.#ouvrageList =  this.#ouvrageList.filter(function(ouvrage){
            return ouvrage.id != id
        })
    }


    getAllItems() {
        return this.#ouvrageList.sort(function(a, b) {
            return a.title.localeCompare(b.title)
        })
    }
}