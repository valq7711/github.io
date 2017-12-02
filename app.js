(function(){
"use strict";
var ՐՏ_3, ՐՏ_4;
function enumerate(item) {
    var arr, iter, i;
    arr = [];
    iter = ՐՏ_Iterable(item);
    for (i = 0; i < iter.length; i++) {
        arr[arr.length] = [ i, item[i] ];
    }
    return arr;
}
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function ՐՏ_in(val, arr) {
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(val) !== -1;
    }
    return arr.hasOwnProperty(val);
}
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
}
function len(obj) {
    var tmp;
    if (obj.constructor === [].constructor || obj.constructor === "".constructor || (tmp = Array.prototype.slice.call(obj)).length) {
        return (tmp || obj).length;
    }
    return Object.keys(obj).length;
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function ՐՏ_eq(a, b) {
    var ՐՏitr6, ՐՏidx6;
    var i;
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < a.length; i++) {
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            ՐՏitr6 = ՐՏ_Iterable(a);
            for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                i = ՐՏitr6[ՐՏidx6];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
var ՐՏ_modules = {};
ՐՏ_modules["modules"] = {};
ՐՏ_modules["modules.rs_vue"] = {};
ՐՏ_modules["todo_storage"] = {};

(function(){
    var __name__ = "modules";

    ՐՏ_modules["modules"]["rs_vue"] = ՐՏ_modules["modules.rs_vue"];
})();

(function(){
    var __name__ = "modules.rs_vue";
    function _reg_as(name_or_fun, reg_as) {
        var _name, _reg_as, _inner_;
        _name = null;
        _reg_as = reg_as;
        _inner_ = function(f) {
            f[_reg_as] = _name || f.name;
            return f;
        };
        if (name_or_fun instanceof Function) {
            return _inner_(name_or_fun);
        }
        _name = name_or_fun;
        return _inner_;
    }
    function v_meth(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_meth");
    }
    function v_computed(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_computed");
    }
    function v_filter(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_filter");
    }
    function v_directive(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_directive");
    }
    function v_watch(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_watch");
    }
    function v_rstore_getter(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_rstore_getter");
    }
    function v_rstore_mutation(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_rstore_mutation");
    }
    function v_rstore_action(name_or_fun) {
        return _reg_as(name_or_fun, "_vue_rstore_action");
    }
    function v_collect(from_obj, to_obj, map, redefine) {
        var ՐՏitr1, ՐՏidx1, ՐՏitr2, ՐՏidx2, ՐՏ_1, ՐՏ_2;
        var k, reg_attr, reg_name, hash_name, watcher_name, watcher_def;
        ՐՏitr1 = ՐՏ_Iterable(Object.getOwnPropertyNames(from_obj));
        for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
            k = ՐՏitr1[ՐՏidx1];
            ՐՏitr2 = ՐՏ_Iterable(map);
            for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
                reg_attr = ՐՏitr2[ՐՏidx2];
                reg_name = from_obj[k][reg_attr];
                if (reg_name) {
                    hash_name = map[reg_attr];
                    if (!to_obj[hash_name]) {
                        to_obj[hash_name] = {};
                    }
                    if (((ՐՏ_1 = to_obj[hash_name][reg_name]) === (ՐՏ_2 = void 0) || typeof ՐՏ_1 === "object" && ՐՏ_eq(ՐՏ_1, ՐՏ_2)) || redefine) {
                        if (hash_name === "watch" && reg_name instanceof Object) {
                            watcher_name = reg_name.name || from_obj[k].name;
                            if (watcher_name.startsWith("$w_")) {
                                watcher_name = watcher_name.substr(3);
                            }
                            watcher_def = Object.assign({}, reg_name);
                            delete watcher_def.name;
                            watcher_def.handler = from_obj[k];
                            to_obj[hash_name][watcher_name] = watcher_def;
                        } else {
                            to_obj[hash_name][reg_name] = from_obj[k];
                        }
                    } else {
                        throw new Error('"' + reg_name + '" already exists in "' + hash_name + '", try v_collect(..., redefine = true)');
                    }
                    break;
                }
            }
        }
    }
    var RS_vue = (ՐՏ_3 = class RS_vue {
        constructor () {
            var ՐՏitr3, ՐՏidx3;
            var self = this;
            var self_keys, v_spec, tmp;
            self.data = self._init_data;
            self.methods = {};
            self.computed = {};
            self.props = {};
            self.watch = {};
            v_collect(self.__proto__, self, self._map_attr_);
            v_collect(self.__proto__.constructor, self, self._map_attr_);
            self_keys = Object.keys(self);
            ՐՏitr3 = ՐՏ_Iterable([ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed" ]);
            for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
                v_spec = ՐՏitr3[ՐՏidx3];
                if (!(ՐՏ_in(v_spec, self_keys)) && (tmp = self.__proto__[v_spec])) {
                    self[v_spec] = tmp;
                }
            }
        }
        _init_data () {
            var self = this;
            throw ReferenceError("Not implemented");
        }
    }, (function(){
        var _map_attr_ = {
            _vue_meth: "methods",
            _vue_computed: "computed",
            _vue_watch: "watch",
            _vue_filter: "filters",
            _vue_directive: "directives",
            _vue_rstore_mutation: "mutations",
            _vue_rstore_action: "actions"
        };
        Object.defineProperties(ՐՏ_3.prototype, {
            _map_attr_: {
                enumerable: true, 
                writable: true, 
                value: _map_attr_

            }
        });
        ;
    })(), ՐՏ_3);
    ՐՏ_modules["modules.rs_vue"]["_reg_as"] = _reg_as;

    ՐՏ_modules["modules.rs_vue"]["v_meth"] = v_meth;

    ՐՏ_modules["modules.rs_vue"]["v_computed"] = v_computed;

    ՐՏ_modules["modules.rs_vue"]["v_filter"] = v_filter;

    ՐՏ_modules["modules.rs_vue"]["v_directive"] = v_directive;

    ՐՏ_modules["modules.rs_vue"]["v_watch"] = v_watch;

    ՐՏ_modules["modules.rs_vue"]["v_rstore_getter"] = v_rstore_getter;

    ՐՏ_modules["modules.rs_vue"]["v_rstore_mutation"] = v_rstore_mutation;

    ՐՏ_modules["modules.rs_vue"]["v_rstore_action"] = v_rstore_action;

    ՐՏ_modules["modules.rs_vue"]["v_collect"] = v_collect;

    ՐՏ_modules["modules.rs_vue"]["RS_vue"] = RS_vue;
})();

(function(){
    var __name__ = "todo_storage";
    var v_meth = ՐՏ_modules["modules.rs_vue"].v_meth;
    var v_computed = ՐՏ_modules["modules.rs_vue"].v_computed;
    var v_watch = ՐՏ_modules["modules.rs_vue"].v_watch;
    var v_filter = ՐՏ_modules["modules.rs_vue"].v_filter;
    var RS_vue = ՐՏ_modules["modules.rs_vue"].RS_vue;
    
    var Todo_storage = (ՐՏ_4 = class Todo_storage extends RS_vue {
        constructor (storage_key) {
            super();
            var self = this;
            self.data = {
                "storage_key": storage_key || "todos-vuejs-2.0",
                "todos": null,
                "uid": 0
            };
        }
        todos (todos) {
            var self = this;
            self.save();
        }
        load () {
            var ՐՏitr4, ՐՏidx4;
            var self = this;
            var index, todo;
            self.todos = JSON.parse(localStorage.getItem(self.storage_key) || "[]");
            ՐՏitr4 = ՐՏ_Iterable(enumerate(self.todos));
            for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
                [index, todo] = ՐՏitr4[ՐՏidx4];
                todo.id = index;
            }
            self.uid = len(self.todos);
        }
        save () {
            var self = this;
            localStorage.setItem(self.storage_key, JSON.stringify(self.todos));
        }
        add (value) {
            var self = this;
            value = value && value.trim();
            if (value) {
                self.todos.push({
                    "id": self.uid,
                    "title": value,
                    "completed": false
                });
                ++self.uid;
                return true;
            }
        }
        remove (todo) {
            var self = this;
            self.todos.splice(self.todos.indexOf(todo), 1);
        }
        remove_completed () {
            var self = this;
            self.todos = self.filters.active();
        }
        ffilters () {
            var self = this;
            return {
                "all": function() {
                    return self.todos;
                },
                "active": function() {
                    return self.todos.filter(function(todo) {
                        return !todo.completed;
                    });
                },
                "completed": function() {
                    return self.todos.filter(function(todo) {
                        return todo.completed;
                    });
                }
            };
        }
        static get_filter_names () {
            return Object.keys(Todo_storage.prototype.ffilters());
        }
    }, (function(){
        Object.defineProperties(ՐՏ_4.prototype, {
            todos: {
                enumerable: false, 
                writable: true, 
                value: v_watch({
                    "deep": true
                })(ՐՏ_4.prototype.todos)
            },
            load: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_4.prototype.load)
            },
            save: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_4.prototype.save)
            },
            add: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_4.prototype.add)
            },
            remove: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_4.prototype.remove)
            },
            remove_completed: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_4.prototype.remove_completed)
            },
            ffilters: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_4.prototype.ffilters)
            }
        });
        ;
    })(), ՐՏ_4);
    ՐՏ_modules["todo_storage"]["Todo_storage"] = Todo_storage;
})();

(function(){

    var __name__ = "__main__";

    var ՐՏ_5;
    var v_meth = ՐՏ_modules["modules.rs_vue"].v_meth;
    var v_computed = ՐՏ_modules["modules.rs_vue"].v_computed;
    var v_watch = ՐՏ_modules["modules.rs_vue"].v_watch;
    var v_filter = ՐՏ_modules["modules.rs_vue"].v_filter;
    var v_directive = ՐՏ_modules["modules.rs_vue"].v_directive;
    var RS_vue = ՐՏ_modules["modules.rs_vue"].RS_vue;
    
    var Todo_storage = ՐՏ_modules["todo_storage"].Todo_storage;
    
    var Todos = (ՐՏ_5 = class Todos extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.template = '<!-- todos_templ --> <section class="todoapp">  <header class="header">  <h1>  todos  </h1>  <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo" />  </header>  <section class="main" v-show="todos.length">  <input class="toggle-all" type="checkbox" v-model="allDone" />  <ul class="todo-list">  <li v-for="todo in filteredTodos" class="todo" :key="todo.id" :class="{ completed: todo.completed, editing: todo == editedTodo }">  <div class="view">  <input class="toggle" type="checkbox" v-model="todo.completed" />  <label @dblclick="editTodo(todo)" v-text = \'todo.title\' />  <button class="destroy" @click="removeTodo(todo)" />  </div>  <input class="edit" type="text" v-model = "todo.title" v-todo-focus = "todo == editedTodo" @blur = "doneEdit(todo)" @keyup.enter = "doneEdit(todo)" @keyup.esc = "cancelEdit(todo)" />  </li>  </ul>  </section>  <footer class="footer" v-show="todos.length">  <span class="todo-count">  <strong v-text = \'remaining\' />  {{ remaining | pluralize }} left  </span>  <ul class="filters">  <li>  <a href = "#/all" :class="{ selected: visibility == \'all\' }">  All  </a>  </li>  <li>  <a href = "#/active" :class="{ selected: visibility == \'active\' }">  Active  </a>  </li>  <li>  <a href = "#/completed" :class="{ selected: visibility == \'completed\' }">  Completed  </a>  </li>  </ul>  <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">  Clear completed  </button>  </footer>  </section> ';
            self.props = {
                "todo_storage": Object,
                "visibility": {
                    "type": String,
                    "default": "all"
                }
            };
            self.computed.allDone = {
                "get": self.allDone_get,
                "set": self.allDone_set
            };
        }
        _init_data () {
            var self = this;
            self.todo_storage.load();
            return {
                "newTodo": "",
                "editedTodo": null
            };
        }
        static TodoFocus (el, binding) {
            if (binding.value) {
                el.focus();
            }
        }
        todos () {
            var self = this;
            return self.todo_storage.todos;
        }
        filteredTodos () {
            var self = this;
            return self.todo_storage.ffilters[self.visibility]();
        }
        remaining () {
            var self = this;
            return len(self.todo_storage.ffilters.active());
        }
        allDone_get () {
            var self = this;
            return self.remaining === 0;
        }
        allDone_set (value) {
            var ՐՏitr5, ՐՏidx5;
            var self = this;
            var todo;
            ՐՏitr5 = ՐՏ_Iterable(self.todo_storage.ffilters.all());
            for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
                todo = ՐՏitr5[ՐՏidx5];
                todo.completed = value;
            }
        }
        pluralize (n) {
            var self = this;
            return n === 1 ? "item" : "items";
        }
        addTodo () {
            var self = this;
            if (self.todo_storage.add(self.newTodo)) {
                self.newTodo = "";
            }
        }
        removeTodo (todo) {
            var self = this;
            self.todo_storage.remove(todo);
        }
        editTodo (todo) {
            var self = this;
            self.beforeEditCache = todo.title;
            self.editedTodo = todo;
        }
        doneEdit (todo) {
            var self = this;
            if (!self.editedTodo) {
                return;
            }
            self.editedTodo = null;
            todo.title = todo.title.trim();
            if (!todo.title) {
                self.removeTodo(todo);
            }
        }
        cancelEdit (todo) {
            var self = this;
            self.editedTodo = null;
            todo.title = self.beforeEditCache;
        }
        removeCompleted () {
            var self = this;
            self.todo_storage.remove_completed();
        }
        static make () {
            return new Todos();
        }
    }, (function(){
        Object.defineProperties(ՐՏ_5.prototype, {
            todos: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_5.prototype.todos)
            },
            filteredTodos: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_5.prototype.filteredTodos)
            },
            remaining: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_5.prototype.remaining)
            },
            pluralize: {
                enumerable: false, 
                writable: true, 
                value: v_filter(ՐՏ_5.prototype.pluralize)
            },
            addTodo: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.addTodo)
            },
            removeTodo: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.removeTodo)
            },
            editTodo: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.editTodo)
            },
            doneEdit: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.doneEdit)
            },
            cancelEdit: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.cancelEdit)
            },
            removeCompleted: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.removeCompleted)
            }
        });
        Object.defineProperties(ՐՏ_5, {
            TodoFocus: {
                enumerable: false, 
                writable: true, 
                value: v_directive(ՐՏ_5.TodoFocus)
            }
        });
    })(), ՐՏ_5);
    function main() {
        window.rs_todo = {};
        window.rs_todo.todo_storage = Todo_storage;
        window.rs_todo.todos_component = Todos;
    }
    if (__name__ === "__main__") {
        main();
    }
})();
})();
