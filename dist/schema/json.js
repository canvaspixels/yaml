"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _failsafe = require("./failsafe");

var schema = [_failsafe.map, _failsafe.seq, {
  class: String,
  tag: 'tag:yaml.org,2002:str',
  resolve: function resolve(doc, node) {
    return node.strValue || '';
  }
}, {
  class: null,
  tag: 'tag:yaml.org,2002:null',
  test: /^null$/,
  resolve: function resolve() {
    return null;
  }
}, {
  class: Boolean,
  tag: 'tag:yaml.org,2002:bool',
  test: /^true$/,
  resolve: function resolve() {
    return true;
  }
}, {
  class: Boolean,
  tag: 'tag:yaml.org,2002:bool',
  test: /^false$/,
  resolve: function resolve() {
    return false;
  }
}, {
  class: Number,
  tag: 'tag:yaml.org,2002:int',
  test: /^-?(?:0|[1-9][0-9]*)$/,
  resolve: function resolve(str) {
    return parseInt(str, 10);
  }
}, {
  class: Number,
  tag: 'tag:yaml.org,2002:float',
  test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
  resolve: function resolve(str) {
    return parseFloat(str);
  }
}];

schema.scalarFallback = function (str) {
  throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(str)));
};

var _default = schema;
exports.default = _default;