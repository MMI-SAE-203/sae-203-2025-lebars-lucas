/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2728015830",
    "max": "",
    "min": "",
    "name": "date_sortie_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2728015830",
    "max": "",
    "min": "",
    "name": "date_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
