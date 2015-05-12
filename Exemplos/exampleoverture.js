if (typeof app === "undefined" || app === null) {
  window.app = {};
}

$.extend(true, app, (function() {
  var _model;
  _model = app.baseModels.repository.edit({
    module: 'user',
    localizedStrings: app.localizedStrings.users,
    loadCallback: function(data) {
      var role, _i, _len, _ref;
      _model.user.name(data.name);
      _model.user.username(data.username);
      _model.user.active(data.active);
      _model.user.roles = data.roles;
      _ref = _model.availableRoles();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        role = _ref[_i];
        role.isAssigned(_model.user.roles.any(role.key));
      }
    },
    getData: function(callback) {
      var r, _i, _len, _ref, _roles;
      _roles = [];
      _ref = _model.availableRoles();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        r = _ref[_i];
        if (r.isAssigned()) {
          _roles.push(r.key);
        }
      }
      callback({
        name: _model.user.name(),
        username: _model.user.username(),
        active: _model.user.active(),
        roles: _roles
      });
    }
  }, {
    existentRoles: ko.observableArray(),
    user: {
      name: ko.observable(),
      username: ko.observable(),
      active: ko.observable(true),
      roles: null
    },
    availableRoles: ko.observableArray()
  });
  app.subscribeEventHandler('app.beforeInit', function() {
    return $.ajax('../roles/available', {
      async: false,
      success: function(data) {
        var role, _i, _len;
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          role = data[_i];
          _model.availableRoles.push({
            name: role.name,
            key: role.key,
            isAssigned: ko.observable(false)
          });
        }
      }
    });
  });
  app.subscribeEventHandler('app.afterInit', function() {
    return _model.user.load();
  });
  return {
    view: {
      model: _model
    }
  };
})());
