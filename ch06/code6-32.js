// 코드 6-32 커스텀 객체의 구조

function Model(attrs) {
  this._attributes = attrs;
}
Model.prototype.get = function(key) {
  return this._attributes[key];
}
Model.prototype.set = function(key, val) {
  this._attributes[key] = val;
  return this;
};
Model.prototype.unset = function(key) {
  delete this._attributes[key];
  return this;
};
Model.prototype.toJSON = function() {
  var json = {};
  for (var key in this._attributes) {
    var val = this._attributes[key];
    json[key] = val && val.toJSON ? val.toJSON() : val; // 안으로 파고 들면서 toJSON
  }
  return json;
};

function Collection(models) {
  this._models = models.map(function(attrs) { return new Model(attrs); });
}
Collection.prototype.at = function(idx) {
  return this._models[idx];
};
Collection.prototype.add = function(model) {
  return this._models.push(model.constructor == Model ? model : new Model(model));
};
Collection.prototype.remove = function(model) {
  var removed;
  this._models = this.reject(function(target) {
    if (target == model || (target.get('id') == ((model.get && model.get('id')) ||
						 model.id))) {
      removed = target;
      return true;
    }
  });
  return removed;
};
Collection.prototype.reset = function() {
  this._models = [];
  return this;
};
Collection.prototype.filter = function(predicate) {
  return this._modles.filter(predicate);
};
Collection.prototype.reject = function(predicate) {
  return this._models.filter(function(val, idx, models) {
    return !predicate(val, idx, models);
  });
};
Collection.prototype.toJSON = function() {
  return this._models.map(function(model) {
    return model.toJSON(); // 안으로 파고들면서 toJSON
  });
};

var users = new Collection([
  { id: 1, name: "HA" },
  { id: 2, name: "PJ" },
  {
    id: 3,
    name: "JE",
    posts: new Collection([
      { id: 1, body: "내용1", user: new Model({ id: 3, name: "JE" }) },
      { id: 2, body: "내용2", user: new Model({ id: 3, name: "JE" }) }
    ])
  }
]);

users.remove({id: 2});

console.log(JSON.stringify(users.toJSON()));
/*
 * [{"id":1,"name":"HA"},
 * {"id":3,"name":"JE","posts":[
 * {"id":1,"body":"내용1","user":{"id":3,"name":"JE"}},
 * {"id":2,"body":"내용2","user":{"id":3,"name":"JE"}}]}]
* */-
