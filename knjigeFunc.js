const knjige = require('knjige')

console.log("Knjige koje se nalaze u listi su:")
knjige.sveKnjige()

var id = 5
console.log("Knjiga sa id =" + id)
knjige.getKnjiga(id)

console.log("Knjiga ciji je autor Ivo Andric je:")
knjige.getKnjigaByAuthor("Ivo Andric")

console.log("Izbrisana je knjiga sa id = 5")
knjige.deleteKnjiga(4)

console.log("Knjige koje se nalaze u listi su:")
knjige.sveKnjige()

console.log("Dodata je knjiga sa id = 6")
knjige.addKnjiga(6,"Stranac", "Alber Kami")

console.log("Knjige koje se nalaze u listi su:")
knjige.sveKnjige()
