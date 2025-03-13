/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1761562143",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_invite",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // remove field
  collection.fields.removeById("file1761562143")

  return app.save(collection)
})
