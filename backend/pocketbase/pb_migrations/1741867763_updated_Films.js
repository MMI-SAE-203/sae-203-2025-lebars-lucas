/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date3094223700",
    "max": "",
    "min": "",
    "name": "Duree_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text945159775",
    "max": 0,
    "min": 0,
    "name": "Langue_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3515993000",
    "max": 0,
    "min": 0,
    "name": "Production_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4056505958",
    "max": 0,
    "min": 0,
    "name": "Invite_associe",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("date3094223700")

  // remove field
  collection.fields.removeById("text945159775")

  // remove field
  collection.fields.removeById("text3515993000")

  // remove field
  collection.fields.removeById("text4056505958")

  return app.save(collection)
})
