/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
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

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1668504139",
    "max": 0,
    "min": 0,
    "name": "Description_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1280659226",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_film",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("date2728015830")

  // remove field
  collection.fields.removeById("text1668504139")

  // remove field
  collection.fields.removeById("file1280659226")

  return app.save(collection)
})
