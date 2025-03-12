/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2757606541")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text475052849",
    "max": 0,
    "min": 0,
    "name": "nom_partenaires",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file1403379033",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "logo_partenaires",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url2316834610",
    "name": "url_partenaires",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2757606541")

  // remove field
  collection.fields.removeById("text475052849")

  // remove field
  collection.fields.removeById("file1403379033")

  // remove field
  collection.fields.removeById("url2316834610")

  return app.save(collection)
})
