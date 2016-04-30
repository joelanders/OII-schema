// has_many should be proper json_schema and the many.js view should use this.
// Currently the has_many key is not part of the validation (but should be).

module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
    list: {
        filters: {
            "type": ["type"],
            "os": ["os"]
        },
        value: { name: "name" }
    },
    has_many: [
        { name: 'oses',  type: 'os' }
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "source": {
        "type": "string"
      },
      "tracker": {
        "type": "string"
      },
      "manifest": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          }
        }
      },
      "builds": {
        "type": "array"
      },
      "os": {
        "type": "string"
      },
      "infra": {
        "type": "array"
      }
    },
    "required": [
      "id",
      "name",
      "type"
    ]
}
