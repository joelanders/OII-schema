module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
    list: {
        filters: {
            "family": ["family", "version"],
            "version": ["version"]
        },
        value: { name: "name" }
    },
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "family": {
        "type": "string"
      },
      "version": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "family",
      "version"
    ]
}
