define(["vue","codemirror/lib/codemirror","jszip.min","rapydscript.web","axios.min"],function(Vue,CodeMirror,JSZip,rapydscript,axios){
var exports = {};
(function(){
"use strict";
var ՐՏ_1, ՐՏ_4, ՐՏ_5, ՐՏ_10, ՐՏ_11;
function ՐՏ_bind(fn, thisArg) {
    var ret;
    if (fn.orig) {
        fn = fn.orig;
    }
    if (thisArg === false) {
        return fn;
    }
    ret = function() {
        return fn.apply(thisArg, arguments);
    };
    ret.orig = fn;
    return ret;
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
function ՐՏ_print() {
    if (typeof console === "object") {
        console.log.apply(console, arguments);
    }
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
function ՐՏ_type(obj) {
    return obj && obj.constructor && obj.constructor.name ? obj.constructor.name : Object.prototype.toString.call(obj).slice(8, -1);
}
function ՐՏ_eq(a, b) {
    var ՐՏitr32, ՐՏidx32;
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
            ՐՏitr32 = ՐՏ_Iterable(a);
            for (ՐՏidx32 = 0; ՐՏidx32 < ՐՏitr32.length; ՐՏidx32++) {
                i = ՐՏitr32[ՐՏidx32];
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
ՐՏ_modules["asset"] = {};
ՐՏ_modules["asset.rs_vue"] = {};
ՐՏ_modules["folder_content"] = {};
ՐՏ_modules["asset.common"] = {};
ՐՏ_modules["explorer"] = {};
ՐՏ_modules["editor"] = {};
ՐՏ_modules["asset.html_ml"] = {};
ՐՏ_modules["asset.v_parser_n"] = {};
ՐՏ_modules["config"] = {};

(function(){
    var __name__ = "asset";

    ՐՏ_modules["asset"]["rs_vue"] = ՐՏ_modules["asset.rs_vue"];

    ՐՏ_modules["asset"]["common"] = ՐՏ_modules["asset.common"];

    ՐՏ_modules["asset"]["html_ml"] = ՐՏ_modules["asset.html_ml"];

    ՐՏ_modules["asset"]["v_parser_n"] = ՐՏ_modules["asset.v_parser_n"];
})();

(function(){
    var __name__ = "asset.rs_vue";
    function unpack_name_fun_opt(f_reg_as) {
        function unpacker(reg_as, name_fun_opt, opt) {
            var arg1type;
            arg1type = ՐՏ_type(name_fun_opt);
            if (arg1type.startsWith("Fun")) {
                return f_reg_as.call(this, reg_as, name_fun_opt.name, name_fun_opt);
            } else {
                return function(f) {
                    var name;
                    if (arg1type.startsWith("Str")) {
                        name = name_fun_opt;
                        if (opt) {
                            opt.handler = f;
                        } else {
                            opt = f;
                        }
                    } else {
                        opt = name_fun_opt;
                        name = f.name;
                        opt.handler = f;
                    }
                    return f_reg_as.call(this, reg_as, name, opt);
                };
            }
        }
        return unpacker;
    }
    var V_collector = (ՐՏ_1 = class V_collector {
        constructor () {
            var self = this;
            self._methods = null;
            self._computed = null;
            self._watch = null;
            self._filters = null;
            self._directives = null;
        }
        _reg_as (name, fun_opt) {
            var reg_as = this;
            if (!self[reg_as]) {
                self[reg_as] = {};
            }
            self[reg_as][name] = fun_opt;
            return fun_opt.handler ? fun_opt.handler : fun_opt;
        }
        meth (name_or_fun) {
            var self = this;
            return self._reg_as("_methods", name_or_fun);
        }
        computed (name_or_fun) {
            var self = this;
            return self._reg_as("_computed", name_or_fun);
        }
        filter (name_or_fun) {
            var self = this;
            return self._reg_as("_filters", name_or_fun);
        }
        directive (name_or_fun) {
            var self = this;
            return self._reg_as("_directives", name_or_fun);
        }
        watch (name_or_fun, opt) {
            var self = this;
            return self._reg_as("_watch", name_or_fun, opt);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_1.prototype, {
            _reg_as: {
                enumerable: false, 
                writable: true, 
                value: unpack_name_fun_opt(ՐՏ_1.prototype._reg_as)
            }
        });
        ;
    })(), ՐՏ_1);
    class RS_vue_n {
        constructor (v_collector) {
            var ՐՏitr1, ՐՏidx1;
            var self = this;
            var self_keys, v_spec, tmp;
            self.props = {};
            self.data = self._init_data;
            self.methods = v_collector._methods;
            self.computed = v_collector._computed;
            self.directives = v_collector._directives;
            self.filters = v_collector._filters;
            self.watch = v_collector._watch;
            v_collect(self.__proto__, self, self._map_attr_);
            v_collect(self.__proto__.constructor, self, self._map_attr_);
            self_keys = Object.keys(self);
            ՐՏitr1 = ՐՏ_Iterable([ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed" ]);
            for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
                v_spec = ՐՏitr1[ՐՏidx1];
                if (!(ՐՏ_in(v_spec, self_keys)) && (tmp = self.__proto__[v_spec])) {
                    self[v_spec] = tmp;
                }
            }
        }
        _init_data () {
            var self = this;
            throw ReferenceError("Not implemented");
        }
    }
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
        var ՐՏitr2, ՐՏidx2, ՐՏitr3, ՐՏidx3, ՐՏ_2, ՐՏ_3;
        var k, reg_attr, reg_name, hash_name, watcher_name, watcher_def;
        ՐՏitr2 = ՐՏ_Iterable(Object.getOwnPropertyNames(from_obj));
        for (ՐՏidx2 = 0; ՐՏidx2 < ՐՏitr2.length; ՐՏidx2++) {
            k = ՐՏitr2[ՐՏidx2];
            ՐՏitr3 = ՐՏ_Iterable(map);
            for (ՐՏidx3 = 0; ՐՏidx3 < ՐՏitr3.length; ՐՏidx3++) {
                reg_attr = ՐՏitr3[ՐՏidx3];
                reg_name = from_obj[k][reg_attr];
                if (reg_name) {
                    hash_name = map[reg_attr];
                    if (!to_obj[hash_name]) {
                        to_obj[hash_name] = {};
                    }
                    if (((ՐՏ_2 = to_obj[hash_name][reg_name]) === (ՐՏ_3 = void 0) || typeof ՐՏ_2 === "object" && ՐՏ_eq(ՐՏ_2, ՐՏ_3)) || redefine) {
                        if (hash_name === "watch") {
                            if (reg_name instanceof Object) {
                                watcher_name = reg_name.name || from_obj[k].name;
                                watcher_def = Object.assign({}, reg_name);
                                delete watcher_def.name;
                                watcher_def.handler = from_obj[k];
                            } else {
                                watcher_name = reg_name;
                                watcher_def = from_obj[k];
                            }
                            if (watcher_name.startsWith("$w_")) {
                                watcher_name = watcher_name.substr(3);
                            }
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
    var RS_vue = (ՐՏ_4 = class RS_vue {
        constructor () {
            var ՐՏitr4, ՐՏidx4;
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
            ՐՏitr4 = ՐՏ_Iterable([ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed" ]);
            for (ՐՏidx4 = 0; ՐՏidx4 < ՐՏitr4.length; ՐՏidx4++) {
                v_spec = ՐՏitr4[ՐՏidx4];
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
        Object.defineProperties(ՐՏ_4.prototype, {
            _map_attr_: {
                enumerable: true, 
                writable: true, 
                value: _map_attr_

            }
        });
        ;
    })(), ՐՏ_4);
    ՐՏ_modules["asset.rs_vue"]["unpack_name_fun_opt"] = unpack_name_fun_opt;

    ՐՏ_modules["asset.rs_vue"]["V_collector"] = V_collector;

    ՐՏ_modules["asset.rs_vue"]["RS_vue_n"] = RS_vue_n;

    ՐՏ_modules["asset.rs_vue"]["_reg_as"] = _reg_as;

    ՐՏ_modules["asset.rs_vue"]["v_meth"] = v_meth;

    ՐՏ_modules["asset.rs_vue"]["v_computed"] = v_computed;

    ՐՏ_modules["asset.rs_vue"]["v_filter"] = v_filter;

    ՐՏ_modules["asset.rs_vue"]["v_directive"] = v_directive;

    ՐՏ_modules["asset.rs_vue"]["v_watch"] = v_watch;

    ՐՏ_modules["asset.rs_vue"]["v_rstore_getter"] = v_rstore_getter;

    ՐՏ_modules["asset.rs_vue"]["v_rstore_mutation"] = v_rstore_mutation;

    ՐՏ_modules["asset.rs_vue"]["v_rstore_action"] = v_rstore_action;

    ՐՏ_modules["asset.rs_vue"]["v_collect"] = v_collect;

    ՐՏ_modules["asset.rs_vue"]["RS_vue"] = RS_vue;
})();

(function(){
    var __name__ = "folder_content";
    var templ_folder_content;
    templ_folder_content = "\n<div>\n    <span>\n        <ul  class = 'bar path'>\n            <li  v-for = 'dir in path' @click = '$emit(\"change_dir\", dir.id)'>\n                <span>\n                    ${dir.name}\n                </span>\n            </li>\n            <li  class = 'hover_off'>\n                <input  ref = 'new' :value = 'save_as' placeholder = 'new `file` or `dir/`'/>\n                <template  v-if = 'save_as'>\n                    <button  type = 'button' class = 'v-btn' @click = \"($emit('action', 'save_as', $refs.new.value),  $refs.new.value ='')\">\n                        Save\n                    </button>\n                </template>\n                <template  v-else>\n                    <button  type = 'button' class = 'v-btn' @click = \"($emit('action', 'create', $refs.new.value),  $refs.new.value ='')\">\n                        Create\n                    </button>\n                    <button  type = 'button' class = 'v-btn' @click = \"$emit('action', 'upload')\">\n                        Upload\n                    </button>\n                </template>\n            </li>\n        </ul>\n    </span>\n    <ul  class = 'bar'>\n        <li  v-for = 'it in actions' @click = 'action(it)' class = 'inverse'>\n            ${it.label}\n        </li>\n    </ul>\n    <table  class = 'folder'>\n        <thead>\n            <tr>\n                <th  v-for = 'fld, idx in fields' :colspan = 'idx == 0 ? 2 : 1'>\n                    ${fld.label}\n                </th>\n                <th  v-if = 'row_actions'>\n                    actions\n                </th>\n            </tr>\n            <tr  style = 'height: 0px'>\n                <th  style = 'width:20px;'/>\n                <th  v-for = 'fld in fields' :style = \"{width: (fld.width || 'initial')}\"/>\n                <th  v-if = 'row_actions' style = 'width:50px;'/>\n            </tr>\n        </thead>\n        <tbody>\n            <tr  v-for = 'row in rows_c' @click = 'toggle_select(row.id)' :key = 'row.id' :class = '{selected: selected[row.id]}'>\n                <td>\n                    <i  class = 'clickable' :class = 'row._icon_.class' :style = 'row._icon_.style' @click.stop = 'click(row.id)'></i>\n                </td>\n                <td  v-for = 'fld, idx in fields'>\n                    <template  v-if = 'idx==0'>\n                        <span  class = 'clickable' @click.stop = 'click(row.id)'>\n                            ${row[fld.name]}\n                        </span>\n                    </template>\n                    <template  v-else>\n                        <span>\n                            ${row[fld.name]}\n                        </span>\n                    </template>\n                </td>\n                <td  v-if = 'row_actions'>\n                    <span  v-for = 'ract in row_actions(row)' style = 'margin-right:3px;'>\n                        <i  class = 'clickable' :class = 'ract.icon.class' :style = 'ract.icon.style' @click.stop = 'action(ract, row.id)'></i>\n                    </span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
    var v_meth = ՐՏ_modules["asset.rs_vue"].v_meth;
    var v_computed = ՐՏ_modules["asset.rs_vue"].v_computed;
    var v_watch = ՐՏ_modules["asset.rs_vue"].v_watch;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    
    "\n@external\nclass Vue:\n    @staticmethod\n    def component():\n        pass\n";
    function it_by_path(obj, path) {
        var cur;
        if (!(path instanceof Array)) {
            path = path.split(".");
        }
        cur = obj;
        path.forEach(function(p) {
            cur = cur[p];
        });
        return cur;
    }
    var Folder_content = (ՐՏ_5 = class Folder_content extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.delimiters = [ "${", "}" ];
            self.template = templ_folder_content;
            self.props = {
                type_field: String,
                fields: Array,
                rows: Array,
                sort_by: String,
                selected: Object,
                path: Array,
                save_as: String,
                row_actions: Function
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {
                actions: [ {
                    name: "copy",
                    label: "Copy"
                }, {
                    name: "cut",
                    label: "Cut"
                }, {
                    name: "paste",
                    label: "Paste"
                }, {
                    name: "del",
                    label: "Del"
                } ]
            };
            return ret;
        }
        save_as (o, n) {
            var self = this;
            self.$refs.new.value = n;
        }
        action (a, payload) {
            var self = this;
            self.$emit("action", a.name, payload);
        }
        toggle_select (rid) {
            var self = this;
            self.$emit("toggle_select", rid);
        }
        rows_c () {
            var ՐՏitr5, ՐՏidx5, ՐՏitr6, ՐՏidx6;
            var self = this;
            var type_icon, type_field, rows_sorted, sort_by, ret, row, rec, fld;
            type_icon = {
                file: {
                    class: "fa fa-file-o",
                    style: "color: gray"
                },
                dir: {
                    class: "fa fa-folder",
                    style: "color: gray"
                }
            };
            type_field = self.type_field || "type";
            rows_sorted = self.rows.slice(0);
            sort_by = self.sort_by || self.fields[0].name;
            rows_sorted.sort(function(a, b) {
                var a_type, b_type, ret;
                a_type = it_by_path(a, type_field);
                b_type = it_by_path(b, type_field);
                ret = a_type > b_type ? 1 : a_type < b_type ? -1 : 0;
                if (!ret) {
                    a = a[sort_by];
                    b = b[sort_by];
                    ret = a > b ? 1 : a < b ? -1 : 0;
                }
                return ret;
            });
            ret = [];
            ՐՏitr5 = ՐՏ_Iterable(rows_sorted);
            for (ՐՏidx5 = 0; ՐՏidx5 < ՐՏitr5.length; ՐՏidx5++) {
                row = ՐՏitr5[ՐՏidx5];
                rec = {
                    id: row.id
                };
                ՐՏitr6 = ՐՏ_Iterable(self.fields);
                for (ՐՏidx6 = 0; ՐՏidx6 < ՐՏitr6.length; ՐՏidx6++) {
                    fld = ՐՏitr6[ՐՏidx6];
                    rec[fld.name] = it_by_path(row, fld.name);
                    if (fld.formatter) {
                        rec[fld.name] = fld.formatter(rec[fld.name], row);
                    }
                }
                rec._icon_ = type_icon[row[type_field]];
                ret.push(rec);
            }
            return ret;
        }
        click (rid) {
            var self = this;
            self.$emit("click", rid);
        }
        static make () {
            return new Folder_content();
        }
    }, (function(){
        Object.defineProperties(ՐՏ_5.prototype, {
            save_as: {
                enumerable: false, 
                writable: true, 
                value: v_watch(ՐՏ_5.prototype.save_as)
            },
            action: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.action)
            },
            toggle_select: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.toggle_select)
            },
            rows_c: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_5.prototype.rows_c)
            },
            click: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_5.prototype.click)
            }
        });
        ;
    })(), ՐՏ_5);
    function main() {
        window.val_widgets = window.val_widgets || {};
        window.val_widgets["folder_content"] = Folder_content;
    }
    if (__name__ === "__main__") {
        main();
    }
    ՐՏ_modules["folder_content"]["templ_folder_content"] = templ_folder_content;

    ՐՏ_modules["folder_content"]["it_by_path"] = it_by_path;

    ՐՏ_modules["folder_content"]["Folder_content"] = Folder_content;

    ՐՏ_modules["folder_content"]["main"] = main;
})();

(function(){
    var __name__ = "asset.common";
    function upload_text() {
        function prom(ok, err) {
            var el, ret;
            el = document.createElement("input");
            el.setAttribute("type", "file");
            el.setAttribute("multiple", true);
            el.style.display = "none";
            document.body.appendChild(el);
            ret = [];
            el.onchange = function() {
                var done, i, fr;
                done = el.files.length;
                for (i = 0; i < el.files.length; i++) {
                    fr = new FileReader();
                    fr._filename_ = el.files[i].name;
                    fr.onloadend = function(s) {
                        ret.push({
                            name: s.target._filename_,
                            value: s.target.result
                        });
                        --done;
                        if (done === 0) {
                            ok(ret);
                        }
                    };
                    fr.readAsText(el.files[i]);
                }
            };
            el.click();
            document.body.removeChild(el);
        }
        return new Promise(prom);
    }
    function download(s, filename, mime) {
        var blob, el_data, el;
        blob = new Blob([ s ], {
            type: mime || "text/plain;charset=utf-8;"
        });
        el_data = window.URL.createObjectURL(blob);
        el = document.createElement("a");
        el.setAttribute("href", el_data);
        el.setAttribute("download", filename);
        el.style.display = "none";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
        window.URL.revokeObjectURL(blob);
    }
    function format_num(format, num) {
        var ՐՏ_6, ՐՏ_7;
        var sign_zer_dig, flt_num, sign, zer, dot_idx;
        sign_zer_dig = /^%?(\+)?(\d+)?\.(\d+)?f$/.exec(format);
        if (sign_zer_dig) {
            flt_num = parseFloat(num);
            sign = flt_num < 0 ? "-" : sign_zer_dig[1] && flt_num > 0 ? "+" : "";
            flt_num = Math.abs(flt_num);
            if (sign_zer_dig[3]) {
                flt_num = flt_num.toFixed(parseInt(sign_zer_dig[3]));
            }
            if (sign_zer_dig[2]) {
                zer = parseInt(sign_zer_dig[2]);
                flt_num = flt_num.toString();
                dot_idx = flt_num.indexOf(".");
                dot_idx = (dot_idx !== (ՐՏ_6 = -1) && (typeof dot_idx !== "object" || !ՐՏ_eq(dot_idx, ՐՏ_6))) ? dot_idx : flt_num.length;
                if ((dot_idx !== (ՐՏ_7 = -1) && (typeof dot_idx !== "object" || !ՐՏ_eq(dot_idx, ՐՏ_7)))) {
                    if (zer - dot_idx > 0) {
                        flt_num = "0".repeat(zer - dot_idx) + flt_num;
                    }
                }
            }
            flt_num = sign + flt_num;
            return flt_num;
        } else {
            throw new Error("bad format: " + format);
        }
    }
    function SF(s, args) {
        var splitter, arr, cntr, i, name_format;
        splitter = /(%%)|(%(?:\([a-zA-Z0-9_.]+\))?(?:(?:s)|(?:\+?\d*\.\d*f)))/;
        arr = s.split(splitter);
        cntr = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i].startsWith("%")) {
                if (arr[i] === "%%") {
                    arr[i] = "%";
                } else if (arr[i] === "%s") {
                    arr[i] = args[cntr];
                    ++cntr;
                } else if (arr[i].startsWith("%(")) {
                    name_format = /%\(([a-zA-Z0-9_.]+)\)(s|\+?\d*\.\d*f)/.exec(arr[i]);
                    if (name_format[2] === "s") {
                        arr[i] = args[name_format[1]];
                    } else {
                        arr[i] = format_num(name_format[2], args[name_format[1]]);
                    }
                } else if (/%(\+)?(\d+)?\.(\d+)?f/.test(arr[i])) {
                    arr[i] = format_num(arr[i], args[cntr]);
                    ++cntr;
                } else {
                    throw new Error("bad format: " + arr[i]);
                }
            }
        }
        return arr.join("");
    }
    class Drag_listener {
        constructor (catcher, debounce) {
            var self = this;
            self.catcher = catcher;
            self.x0 = 0;
            self.y0 = 0;
            self.dx = 0;
            self.dy = 0;
            self.vc = null;
            self.listeners = {};
            self.debounce = debounce || 50;
        }
        get_mousedn_listener () {
            var self = this;
            function _inner_(e) {
                var listeners;
                self.vc = this;
                self.x0 = e.clientX;
                self.y0 = e.clientY;
                if (!self.catcher) {
                    self.catcher = function(what, e, args) {
                        self.vc.$emit(what, e, args);
                    };
                }
                if (!(ՐՏ_in("move", self.listeners))) {
                    self.listeners = {
                        move: self.mousemove(),
                        up: self.mouseup()
                    };
                }
                listeners = self.listeners;
                document.addEventListener("mousemove", listeners.move, false);
                document.addEventListener("mouseup", listeners.up, false);
                e.stopPropagation();
                e.preventDefault();
                self.catcher("drag_start", e, {
                    x0: self.x0,
                    y0: self.y0,
                    vc: self.vc
                });
            }
            self.listeners.dn = _inner_;
            return _inner_;
        }
        mousemove () {
            var self = this;
            function _inner_(e) {
                var ՐՏ_8, ՐՏ_9;
                e.stopPropagation();
                e.preventDefault();
                function process_move() {
                    self.dx = e.clientX - self.x0;
                    self.dy = e.clientY - self.y0;
                    self.catcher("drag_move", e, {
                        dx: self.dx,
                        dy: self.dy,
                        vc: self.vc
                    });
                    _inner_.move_fired = true;
                }
                if (((ՐՏ_8 = _inner_.move_fired) === (ՐՏ_9 = void 0) || typeof ՐՏ_8 === "object" && ՐՏ_eq(ՐՏ_8, ՐՏ_9))) {
                    process_move();
                } else if (_inner_.move_fired) {
                    _inner_.move_fired = false;
                    setTimeout(process_move, self.debounce);
                }
            }
            return _inner_;
        }
        mouseup () {
            var self = this;
            function _inner_(e) {
                document.removeEventListener("mousemove", self.listeners.move);
                document.removeEventListener("mouseup", self.listeners.up);
                e.stopPropagation();
                e.preventDefault();
                self.catcher("drag_stop", e, {
                    dx: self.dx,
                    dy: self.dy,
                    vc: self.vc
                });
            }
            return _inner_;
        }
        static get_listener (catcher, debounce) {
            var obj;
            obj = new Drag_listener(catcher, debounce);
            return obj.get_mousedn_listener();
        }
    }
    ՐՏ_modules["asset.common"]["upload_text"] = upload_text;

    ՐՏ_modules["asset.common"]["download"] = download;

    ՐՏ_modules["asset.common"]["format_num"] = format_num;

    ՐՏ_modules["asset.common"]["SF"] = SF;

    ՐՏ_modules["asset.common"]["Drag_listener"] = Drag_listener;
})();

(function(){
    var __name__ = "explorer";
    var templ_explorer, folder_content;
    templ_explorer = "\n<div>\n    <folder_content  \n        :fields = 'fields' \n        :path = 'cur_path' \n        :rows = 'list_dir' \n        :selected = 'selected' \n        :save_as = 'save_as' \n        :row_actions = 'row_actions' \n        type_field = 'type' \n        sort_by = 'name' \n        @click = 'onclick' \n        @toggle_select = 'toggle_select' \n        @action = 'action' \n        @change_dir = 'change_dir'></folder_content>\n</div>\n";
    var v_meth = ՐՏ_modules["asset.rs_vue"].v_meth;
    var v_computed = ՐՏ_modules["asset.rs_vue"].v_computed;
    var v_watch = ՐՏ_modules["asset.rs_vue"].v_watch;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    
    var Folder_content = ՐՏ_modules["folder_content"].Folder_content;
    
    var common = ՐՏ_modules["asset.common"];
    
    
    
    folder_content = Folder_content.make();
    var Explorer = (ՐՏ_10 = class Explorer extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.delimiters = [ "${", "}" ];
            self.template = templ_explorer;
            self.components = {
                "folder_content": folder_content
            };
            self.props = {
                get_fs: Function,
                start_dir: Number,
                bus: Object,
                save_as: String
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {
                cur_dir: self.start_dir || 0,
                fields: [ {
                    name: "name",
                    label: "Name",
                    width: "250px"
                }, {
                    name: "type",
                    label: "Type",
                    width: "50px"
                }, {
                    name: "mtime",
                    label: "Last Changed",
                    width: "200px",
                    formatter: function(d) {
                        return d ? new Date(d).toLocaleString() : "";
                    }
                } ],
                list_dir: [],
                selected: {},
                basket: []
            };
            return ret;
        }
        row_actions (r) {
            var self = this;
            var ret;
            ret = [];
            if (r.type === "file") {
                ret.push({
                    name: "row_download",
                    icon: {
                        class: "fa fa-download",
                        style: "color: gray"
                    }
                });
                if (r.name.endsWith(".html")) {
                    ret.push({
                        name: "try_html",
                        icon: {
                            class: "fa fa-play",
                            style: "color: red; margin-left:5px;"
                        }
                    });
                }
            }
            return ret;
        }
        created () {
            var self = this;
            self.bus.$on("fs_restored", function(start_dir) {
                self.cur_dir = start_dir || 0;
                self.update_list_dir();
            });
            self.update_list_dir();
        }
        update_list_dir () {
            var ՐՏitr7, ՐՏidx7;
            var self = this;
            var fs, list_dir, ids, id;
            fs = self.get_fs();
            list_dir = [];
            ids = fs.list_dir(self.cur_dir);
            ՐՏitr7 = ՐՏ_Iterable(ids);
            for (ՐՏidx7 = 0; ՐՏidx7 < ՐՏitr7.length; ՐՏidx7++) {
                id = ՐՏitr7[ՐՏidx7];
                list_dir.push(fs.get_info(id));
            }
            self.list_dir = list_dir;
            self.clear_selected();
        }
        cur_path () {
            var self = this;
            var fs, ret;
            fs = self.get_fs();
            ret = fs.path_by_id(self.cur_dir).infos;
            ret[0].name = "root";
            return ret;
        }
        change_dir (d) {
            var self = this;
            self.cur_dir = d;
            self.update_list_dir();
        }
        action (a, payload) {
            var ՐՏitr9, ՐՏidx9, ՐՏitr10, ՐՏidx10, ՐՏitr11, ՐՏidx11, ՐՏitr12, ՐՏidx12;
            var self = this;
            var fs, fl, fid, id, basket;
            fs = self.get_fs();
            if (a === "row_download") {
                if (fl = fs.files[payload]) {
                    common.download(fl.content, fl.name);
                }
            } else if (a === "upload") {
                ՐՏ_print("upload");
                function save_files(files) {
                    var ՐՏitr8, ՐՏidx8;
                    var f, fid;
                    ՐՏitr8 = ՐՏ_Iterable(files);
                    for (ՐՏidx8 = 0; ՐՏidx8 < ՐՏitr8.length; ՐՏidx8++) {
                        f = ՐՏitr8[ՐՏidx8];
                        fid = fs.create_file(f.name, self.cur_dir);
                        fs.write_file(fid, f.value);
                    }
                    self.update_list_dir();
                }
                common.upload_text().then(save_files);
            } else if (a === "save_as") {
                fid = fs.create_file(payload, self.cur_dir);
                self.update_list_dir();
                self.$emit("save_as_done", fid, payload);
            } else if (a === "create") {
                if (payload.endsWith("/")) {
                    fs.create_dir(payload.slice(0, -1), self.cur_dir);
                } else {
                    fs.create_file(payload, self.cur_dir);
                }
                self.update_list_dir();
            } else if (a === "del") {
                ՐՏitr9 = ՐՏ_Iterable(self.selected);
                for (ՐՏidx9 = 0; ՐՏidx9 < ՐՏitr9.length; ՐՏidx9++) {
                    id = ՐՏitr9[ՐՏidx9];
                    if (self.selected[id]) {
                        fs.del_any(id);
                    }
                }
                self.clear_selected();
                self.update_list_dir();
            } else if (ՐՏ_in(a, [ "cut", "copy" ])) {
                basket = [ a ];
                ՐՏitr10 = ՐՏ_Iterable(self.selected);
                for (ՐՏidx10 = 0; ՐՏidx10 < ՐՏitr10.length; ՐՏidx10++) {
                    id = ՐՏitr10[ՐՏidx10];
                    if (self.selected[id]) {
                        basket.push(id);
                    }
                }
                self.basket = basket;
            } else if (a === "paste") {
                if (self.basket[0] === "copy") {
                    ՐՏitr11 = ՐՏ_Iterable(self.basket.slice(1));
                    for (ՐՏidx11 = 0; ՐՏidx11 < ՐՏitr11.length; ՐՏidx11++) {
                        id = ՐՏitr11[ՐՏidx11];
                        fs.copy_any(id, self.cur_dir);
                    }
                } else if (self.basket[0] === "cut") {
                    ՐՏitr12 = ՐՏ_Iterable(self.basket.slice(1));
                    for (ՐՏidx12 = 0; ՐՏidx12 < ՐՏitr12.length; ՐՏidx12++) {
                        id = ՐՏitr12[ՐՏidx12];
                        fs.move(id, self.cur_dir);
                    }
                }
                self.basket = [];
                self.update_list_dir();
            } else if (a === "try_html") {
                window.open("#try" + fs.path_by_id(payload).path);
            }
            ՐՏ_print(a, payload);
        }
        toggle_select (rid) {
            var self = this;
            self.$set(self.selected, rid, !self.selected[rid]);
        }
        clear_selected () {
            var self = this;
            self.selected = {};
        }
        onclick (id) {
            var self = this;
            var fs;
            fs = self.get_fs();
            if (fs.dirs[id]) {
                self.change_dir(id);
            } else {
                self.$emit("open", id);
            }
        }
        rows_c () {
            var ՐՏitr13, ՐՏidx13;
            var self = this;
            var ret, r_id;
            ret = [];
            ՐՏitr13 = ՐՏ_Iterable(self.rows);
            for (ՐՏidx13 = 0; ՐՏidx13 < ՐՏitr13.length; ՐՏidx13++) {
                r_id = ՐՏitr13[ՐՏidx13];
                ret.push(self.rows[r_id]);
            }
            return ret;
        }
        static make () {
            return new Explorer();
        }
    }, (function(){
        Object.defineProperties(ՐՏ_10.prototype, {
            row_actions: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.row_actions)
            },
            update_list_dir: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.update_list_dir)
            },
            cur_path: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_10.prototype.cur_path)
            },
            change_dir: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.change_dir)
            },
            action: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.action)
            },
            toggle_select: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.toggle_select)
            },
            clear_selected: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.clear_selected)
            },
            onclick: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_10.prototype.onclick)
            },
            rows_c: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_10.prototype.rows_c)
            }
        });
        ;
    })(), ՐՏ_10);
    function main() {
    }
    if (__name__ === "__main__") {
        main();
    }
    ՐՏ_modules["explorer"]["templ_explorer"] = templ_explorer;

    ՐՏ_modules["explorer"]["folder_content"] = folder_content;

    ՐՏ_modules["explorer"]["Vue"] = Vue;

    ՐՏ_modules["explorer"]["Explorer"] = Explorer;

    ՐՏ_modules["explorer"]["main"] = main;
})();

(function(){
    var __name__ = "editor";
    var templ_editor;
    templ_editor = "\n<div>\n    <div  v-if = '!doc_id' class = 'editor_welcome'>\n        <div>\n            <h2  style = 'background-color: white'>\n                <span  style = 'color: #42b983;'>Vue</span>\n                <span  style = 'color: #006ea5;margin-left:-4px'>p</span>\n                <span  style = 'color: #bfa03b;margin-left:-4px'>y</span>\n                <span> ... just one yet Vue+?</span>\n            </h2>\n            <div>\n                <button  type = 'button' @click = \"$emit('readme')\" class = 'v-btn'>\n                    open README\n                </button>\n            </div>\n        </div>\n    </div>\n    <div  v-show = 'doc_id' class = 'editor_up_bar'>\n        <span  class = 'doc_title'>\n            ${doc_id && doc_info.name || \"\"}\n        </span>\n        <span>\n            ln: ${cursor.line+1} col: ${cursor.ch}\n        </span>\n    </div>\n    <div  v-show = 'doc_id' ref = 'cm'></div>\n    <div  v-if = 'error' @click = 'go_error' style = 'cursor:pointer'>\n        <div>\n            File: ${error.filename}\n        </div>\n        ${error.message} ${error.line}:${error.col}\n        <div>${error.stack}</div>\n    </div>\n    <div  v-else>ok</div>\n</div>\n";
    var v_meth = ՐՏ_modules["asset.rs_vue"].v_meth;
    var v_computed = ՐՏ_modules["asset.rs_vue"].v_computed;
    var v_watch = ՐՏ_modules["asset.rs_vue"].v_watch;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    
    var Editor = (ՐՏ_11 = class Editor extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.delimiters = [ "${", "}" ];
            self.template = templ_editor;
            self.props = {
                doc_id: String,
                get_doc: Function,
                error: null,
                get_cm: Function,
                doc_info: Object
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {
                cursor: {
                    line: 0,
                    ch: 0
                }
            };
            return ret;
        }
        mounted () {
            var self = this;
            var CM, defkeys, opt, cm, doc;
            CM = self.get_cm();
            CM.defaults.indentUnit = 4;
            defkeys = CM.defaults.extraKeys = {};
            defkeys["Ctrl-Space"] = "autocomplete";
            defkeys["Ctrl-Enter"] = function(cm) {
                cm.showHint({
                    hint: CM.hint.anyword
                });
            };
            defkeys["Tab"] = "indentMore";
            defkeys["Shift-Tab"] = "indentLess";
            defkeys["Ctrl-O"] = function(cm) {
                self.$emit("open");
            };
            defkeys["Ctrl-S"] = function(cm) {
                self.save(arguments);
            };
            defkeys["Ctrl-Alt-S"] = function(cm) {
                self.save(arguments, true);
            };
            defkeys["Ctrl-D"] = function(cm) {
                self.$emit("close");
            };
            defkeys["Shift-Ctrl-C"] = function(cm) {
                self.$emit("new");
            };
            defkeys["Ctrl-F9"] = function(cm) {
                self.$emit("compile");
            };
            defkeys["Alt-V"] = function(cm) {
                self.$emit("vim");
            };
            opt = {
                mode: "python",
                lineNumbers: true,
                showCursorWhenSelecting: true,
                matchBrackets: true
            };
            cm = self.cm = CM(self.$refs.cm, opt);
            self.$refs.cm.children[0].style.lineHeight = "1.5";
            cm.on("cursorActivity", function() {
                self.cursor_move();
            });
            doc = self.get_doc(self.doc_id);
            if (doc) {
                cm.swapDoc(doc);
            }
            cm.doc.save = function() {
                self.save();
            };
            cm.setSize("100%", "80vh");
        }
        cursor_move () {
            var self = this;
            self.cursor = self.cm.getCursor();
        }
        doc_id (to_doc_id, cur_doc_id) {
            var self = this;
            var doc;
            doc = self.get_doc(to_doc_id);
            if (doc) {
                self.$nextTick(function() {
                    self.cm.swapDoc(doc);
                    self.cursor_move();
                });
            }
        }
        save (args, save_as) {
            var self = this;
            ՐՏ_print(args);
            self.$emit("save", self.doc_id, save_as);
            ՐՏ_print("save", self.cm.doc);
        }
        go_error () {
            var ՐՏ_12, ՐՏ_13;
            var self = this;
            if (!self.error || ((ՐՏ_12 = self.error.line) === (ՐՏ_13 = void 0) || typeof ՐՏ_12 === "object" && ՐՏ_eq(ՐՏ_12, ՐՏ_13))) {
                return;
            }
            self.cm.focus();
            self.cm.doc.setCursor(self.error.line - 1, self.error.col);
        }
        static make () {
            return new Editor();
        }
    }, (function(){
        Object.defineProperties(ՐՏ_11.prototype, {
            cursor_move: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_11.prototype.cursor_move)
            },
            doc_id: {
                enumerable: false, 
                writable: true, 
                value: v_watch(ՐՏ_11.prototype.doc_id)
            },
            save: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_11.prototype.save)
            },
            go_error: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_11.prototype.go_error)
            }
        });
        ;
    })(), ՐՏ_11);
    function main() {
        window.val_widgets = window.val_widgets || {};
        val_widgets.editor = Editor;
    }
    if (__name__ === "__main__") {
        main();
    }
    ՐՏ_modules["editor"]["templ_editor"] = templ_editor;

    ՐՏ_modules["editor"]["Editor"] = Editor;

    ՐՏ_modules["editor"]["main"] = main;
})();

(function(){
    var __name__ = "asset.html_ml";
    function markup() {
        return "\n<!doctype>- *\n<!DOCTYPE>- *\n<a>+ *\n<abbr> *\n<acronym> *\n<address> *\n<applet> *\n<area> *\n<article> *\n<aside> *\n<audio> *\n<b> *\n<base> *\n<basefont> *\n<bdi> *\n<bdo> *\n<big> *\n<blockquote> *\n<body> *\n<br> *\n<button> *\n<canvas>+ *\n<caption> *\n<center> *\n<cite> *\n<code> *\n<col> *\n<colgroup> *\n<command> *\n<datalist> *\n<dd> *\n<del> *\n<details> *\n<dfn> *\n<div>+ *\n<dl> *\n<dt> *\n<em> *\n<embed> *\n<fieldset> *\n<figcaption> *\n<figure> *\n<font> *\n<footer> *\n<form> *\n<frame> *\n<frameset> *\n<h1> *\n<h2> *\n<h3> *\n<h4> *\n<h5> *\n<h6> *\n<head> *\n<header> *\n<hgroup> *\n<hr> *\n<html> *\n<i>+ *\n<iframe>+ *\n<img> *\n<input> *\n<ins> *\n<kbd> *\n<keygen> *\n<label>+ *\n<legend> *\n<li> *\n<link> *\n<map> *\n<mark> *\n<menu> *\n<meta> *\n<meter> *\n<nav> *\n<noscript> *\n<object> *\n<ol> *\n<optgroup> *\n<option> *\n<output> *\n<p> *\n<param> *\n<pre> *\n<progress> *\n<q> *\n<rp> *\n<rt> *\n<ruby> *\n<s> *\n<samp> *\n<script>+ *\n<section> *\n<select> *\n<small> *\n<source> *\n<span> *\n<strike> *\n<strong> *\n<style> *\n<sub> *\n<summary> *\n<sup> *\n<svg> *\n<table> *\n<tbody> *\n<td> *\n<textarea>+ *\n<tfoot> *\n<th> *\n<thead> *\n<time> *\n<title> *\n<tr> *\n<track> *\n<tt> *\n<u> *\n<ul>+ *\n<var> *\n<video> *\n<wbr> *\n<template>+ *\n<component>+ *\n<slot>+ *\n<collapser>+ *\n<rubber-wrapper>+ *\n<grip>+ *\n<link_hor_grip>+ *\n<grip_one>+ *\n<transition>+ *\n<input_option>+ *\n<option_select>+ *\n<input_bool>+ *\n<tree_view>+ *\n<vl_form>+ *\n<input_file>+ *\n<input_file_img>+ *\n<toolbar>+ *\n<*>+ *\n";
    }
    ՐՏ_modules["asset.html_ml"]["markup"] = markup;
})();

(function(){
    var __name__ = "asset.v_parser_n";
    var _rml_test_str_;
    function strip_quotes(s) {
        if (s[0] === "'" || s[0] === '"') {
            return s.slice(1, -1);
        }
        return s;
    }
    function attrs2hash(attr_list) {
        var ret;
        ret = {};
        attr_list.forEach(function(it) {
            ret[it.name] = it;
        });
        return ret;
    }
    function attrs_assign(attrs_base, attrs_extra) {
        var ՐՏitr14, ՐՏidx14;
        var attrs_hash, ret, k;
        if (!(attrs_base && len(attrs_base))) {
            return attrs_extra.slice(0);
        } else if (!(attrs_extra && len(attrs_extra))) {
            return attrs_base.slice(0);
        }
        attrs_hash = Object.assign(attrs2hash(attrs_base), attrs2hash(attrs_extra));
        ret = [];
        ՐՏitr14 = ՐՏ_Iterable(attrs_hash);
        for (ՐՏidx14 = 0; ՐՏidx14 < ՐՏitr14.length; ՐՏidx14++) {
            k = ՐՏitr14[ՐՏidx14];
            ret.push(attrs_hash[k]);
        }
        return ret;
    }
    class ParserError extends Error {
        constructor (message, line, col, pos, is_eof) {
            super();
            var self = this;
            self.message = message;
            self.line = line;
            self.col = col;
            self.pos = pos;
            self.stack = new Error().stack;
            self.is_eof = is_eof;
        }
    }
    class OutputError extends Error {
        constructor (message, line, col, pos) {
            super();
            var self = this;
            var lcp;
            self.message = message;
            if (ՐՏ_type(line) === "Array") {
                lcp = line;
                line = lcp[0];
                col = lcp[1];
                pos = lcp[2];
            }
            self.line = line;
            self.col = col;
            self.pos = pos;
            self.stack = new Error().stack;
        }
    }
    class Stream {
        constructor (src) {
            var self = this;
            self.RE = /(( *).*)(\n|$)/g;
            self.src = src;
            self.line = 0;
            self.col = 0;
            self.string = null;
            self._string = "";
            self.indent = 0;
            self.is_last_line = false;
            self.start_line_pos = 0;
        }
        pos () {
            var self = this;
            return self.start_line_pos + self.col;
        }
        eof () {
            var self = this;
            return self.is_last_line && self.eol();
        }
        next_line () {
            var self = this;
            var ret;
            while (!((ret = self._next_line()) && ret.trim() || self.eof())) {
                self.eat_space();
            }
            return ret;
        }
        _next_line () {
            var self = this;
            var ret;
            if (self.is_last_line) {
                return null;
            }
            self.start_line_pos += self._string.length;
            ret = self.RE.exec(self.src);
            self._string = ret[0];
            self.indent = ret[2].length;
            self.string = ret[1];
            self.is_last_line = !ret[3];
            ++self.line;
            self.col = 0;
            return ret[1];
        }
        match (m, eat) {
            var self = this;
            var ret;
            if (ՐՏ_type(m) === "String") {
                m = new RegExp("^" + m);
            }
            ret = m.exec(self.string.slice(self.col));
            if (ret && eat) {
                self.col += ret[0].length;
            }
            return ret;
        }
        eol () {
            var self = this;
            return self.col >= self.string.length;
        }
        sol () {
            var self = this;
            return self.col === 0;
        }
        eat_space () {
            var self = this;
            var ret;
            ret = self.match(/^ */, true);
            return ret && ret[0];
        }
        peek () {
            var self = this;
            return self.string.charAt(self.col);
        }
        eat (ch) {
            var self = this;
            var _ch;
            if (!ch) {
                return false;
            }
            _ch = self.string.charAt(self.col);
            if ((_ch === ch || typeof _ch === "object" && ՐՏ_eq(_ch, ch))) {
                ++self.col;
                return true;
            }
            return false;
        }
        next () {
            var self = this;
            var _ch;
            _ch = self.string.charAt(self.col);
            if (_ch) {
                ++self.col;
                return _ch;
            }
            return null;
        }
        eat_to_end () {
            var self = this;
            var ret;
            ret = self.string.slice(self.col);
            self.col = self.string.length;
            return ret;
        }
        rest () {
            var self = this;
            return self.src.slice(self.pos());
        }
    }
    class Parser {
        constructor () {
            var self = this;
            self.src = null;
            self.indent_len = null;
            self.cur_level = 0;
            self.stream = null;
            self.chunk_tbl = null;
            self.templ_tbl = null;
            self.var_tbl = null;
            self.compile_requires = null;
        }
        raise_err (msg) {
            var self = this;
            var S;
            S = self.stream;
            throw new ParserError(msg, S.line, S.col, S.pos(), S.eof());
        }
        eol_or_comment_expect () {
            var self = this;
            if (!self.stream.match(/^\s*(#.*)?$/, true)) {
                self.raise_err("Expected end of the line");
            }
        }
        eol_expect () {
            var self = this;
            if (!self.stream.match(/^\s*$/, true)) {
                self.raise_err("Expected end of the line");
            }
        }
        expect (m, err) {
            var self = this;
            var ret;
            if (!(ret = self.stream.match(m, true))) {
                self.raise_err("Expected: " + (err || m));
            }
            return ret;
        }
        read_string (quote, force_strip) {
            var self = this;
            var S, q, quote_map, m, strip, ret, cur, ln, s;
            S = self.stream;
            if (q = S.match(/^(''''''|""""""|(''(?!')|""(?!")))/, true)) {
                return q[2] || "";
            }
            quote_map = {
                "'": new RegExp("^('''(?!')|'(?!'))"),
                '"': new RegExp('^("""(?!")|"(?!"))')
            };
            quote = S.match(quote_map[quote], true)[0];
            if (quote.length === 3) {
                m = /^([^\\']|\\('{1,3}|.)|'{1,2}(?!'))*/;
                strip = true;
            } else {
                strip = force_strip || false;
                m = /^([^\\']|\\('|.))*/;
            }
            if (quote[0] !== "'") {
                m = new RegExp(m.source.replace(/'/g, '"'));
            }
            ret = [];
            cur = "";
            while (true) {
                if (S.eol()) {
                    ln = S._next_line();
                    if (ln === null) {
                        break;
                    }
                    if (!ln.trim()) {
                        S.eat_space();
                        ret.push(ln);
                        continue;
                    }
                }
                s = S.match(m, true);
                ret.push(s[0]);
                if (!S.eol()) {
                    break;
                }
            }
            self.expect(quote);
            ret = ret.join("\n").replace(new RegExp("\\\\" + quote, "g"), quote).replace(new RegExp("\\\\\\\\" + quote, "g"), "\\" + quote);
            if (!strip) {
                ret = quote[0] + ret + quote[0];
            }
            return ret;
        }
        read_var_def () {
            var self = this;
            var S, q;
            S = self.stream;
            if (q = S.match(/^('|")/)) {
                return self.read_string(q[1]);
            } else {
                return S.eat_to_end();
            }
        }
        parse_tag () {
            var self = this;
            var ret, S, paren_or_colon, eof, attr, comma_or_paren;
            function read_attr() {
                var ret, q;
                ret = {
                    name: null,
                    value: null,
                    type: null
                };
                ret.name = self.expect(/^[\w:`~!@#$%^&*\.\-+{[\]}]+/, "Attr name was expected")[0];
                if (S.match(/^\s*=\s*/, true)) {
                    if (q = S.match(/^('|")/)) {
                        ret.value = self.read_string(q[1]);
                        ret.type = "string";
                    } else if (S.match(/^\$/, true)) {
                        ret.value = "$" + self.expect(/^\w+/, "variable name")[0];
                        ret.type = "var_ref";
                    } else {
                        self.raise_err("Unexpected attribute value (expected 'string' or $variable)");
                    }
                }
                return ret;
            }
            ret = {
                name: null,
                attrs: []
            };
            S = self.stream;
            S.eat_space();
            ret.name = self.expect(/^[\w\-]+/, "Invalid tag name")[0];
            S.eat_space();
            paren_or_colon = self.expect(/^(\(|:)/, "Paren or colon was expected")[1];
            if (paren_or_colon === ":") {
                return ret;
            }
            if (!S.match(/^\s*\)/, true)) {
                function eat_space_comment() {
                    S.eat_space();
                    while (!S.eof() && (S.eol() || S.match(/^(\\\s*|#.*)$/, true))) {
                        S.next_line();
                    }
                    S.eat_space();
                }
                while (!(eof = S.eof())) {
                    eat_space_comment();
                    attr = read_attr();
                    if (attr.name.startsWith("%")) {
                        ret[attr.name] = attr.value === null ? true : strip_quotes(attr.value);
                    } else {
                        ret.attrs.push(attr);
                    }
                    eat_space_comment();
                    comma_or_paren = self.expect(/^\s*(,\s*\)|\)|,)/, "Paren or comma was expected")[1];
                    if (comma_or_paren[comma_or_paren.length-1] === ")") {
                        break;
                    } else if (comma_or_paren[0] === ",") {
                        eat_space_comment();
                        if (S.match(/^\)/, true)) {
                            break;
                        }
                    }
                }
                if (eof) {
                    self.raise_err("Unexpected EOF");
                }
            }
            self.expect(/^\s*:/, "Colon was expected");
            if (!len(ret.attrs)) {
                ret.attrs = null;
            }
            return ret;
        }
        read_verbatim (re_stop) {
            var self = this;
            var S, barier_level, ret, re_indent, eof, empty_line;
            S = self.stream;
            barier_level = self.cur_level;
            ret = [];
            re_indent = new RegExp("^\\s{" + barier_level * self.indent_len + "}");
            while (!(eof = S.eof())) {
                if (empty_line = S.match(/^\s*$/, true)) {
                    ret.push(empty_line[0]);
                    S._next_line();
                    continue;
                }
                if (!S.match(re_indent, true) || re_stop && S.match(re_stop, true)) {
                    break;
                }
                ret.push(S.eat_to_end());
                S._next_line();
            }
            return ret.join("\n");
        }
        tokenize () {
            var self = this;
            var S, start_end, ret, q, var_name;
            S = self.stream;
            start_end = {
                s: [ S.line, S.col, S.pos() ],
                e: null
            };
            if (S.match(/^\s*#/, true)) {
                ret = {
                    _type: "comment",
                    value: S.eat_to_end()
                };
            } else if (q = S.match(/^('|")/)) {
                ret = {
                    _type: "string",
                    value: self.read_string(q[1])
                };
            } else if (S.match(/^\s*\$/, true)) {
                if (var_name = S.match(/^(\w+)\s*=\s*/, true)) {
                    ret = {
                        _type: "var_def",
                        name: "$" + var_name[1],
                        value: self.read_var_def()
                    };
                } else if (var_name = S.match(/^(\w+)/, true)) {
                    ret = {
                        _type: "var_ref",
                        name: "$" + var_name[1]
                    };
                } else {
                    self.raise_err("Unexpected syntax");
                }
            } else if (S.match(/^\s*def\s+/, true)) {
                ret = Object.assign({
                    _type: "def"
                }, self.parse_tag());
            } else if (S.match(/^\s*v-def\s+/, true)) {
                ret = Object.assign({
                    _type: "v-def"
                }, self.parse_tag());
            } else if (S.match(/^\s*\+{3}/, true)) {
                ret = {
                    _type: "beg",
                    value: "+++"
                };
            } else if (S.match(/^\s*---/, true)) {
                ret = {
                    _type: "end",
                    value: "---"
                };
            } else {
                ret = Object.assign({
                    _type: "tag"
                }, self.parse_tag());
            }
            start_end.e = [ S.line, S.col, S.pos() ];
            ret._pos = start_end;
            return ret;
        }
        dedent (node, to_level) {
            var self = this;
            while (true) {
                if (node.scope_level <= to_level) {
                    break;
                }
                node = node.parent;
            }
            return node;
        }
        walk_up (node, up_level) {
            var self = this;
            if (up_level === 0) {
                return node;
            }
            up_level = up_level < 0 ? -up_level : up_level;
            while (up_level) {
                node = node.parent;
                --up_level;
            }
            return node;
        }
        parse (rml) {
            var ՐՏ_14, ՐՏ_15;
            var self = this;
            var parent, main, child_nodes, S, sol, dlt, chunk, compiler, token, node;
            self.src = rml;
            self.stream = new Stream(rml);
            self._init_indent_len();
            self.chunk_tbl = {
                "v-pyj": {
                    "%tag": "script",
                    "%verbatim": true
                },
                "v-css": {
                    "%tag": "css",
                    "%verbatim": true
                }
            };
            self.templ_tbl = {};
            self.var_tbl = {};
            self.compile_requires = [];
            main = parent = {
                _type: "main",
                child_nodes: [],
                scope_level: 0,
                scoped_by: "indent"
            };
            child_nodes = parent.child_nodes;
            S = self.stream;
            S.next_line();
            function push_scope(node, scoped_by, scope_level) {
                if (self.allow_child(node)) {
                    if (!node.child_nodes) {
                        node.child_nodes = [];
                    }
                    child_nodes = node.child_nodes;
                    if (scoped_by) {
                        node.scoped_by = scoped_by;
                        node.scope_level = scope_level;
                    }
                    parent = node;
                } else {
                    self.raise_err("Element `" + (node.name || node._type) + "` couldn`t have a child");
                }
            }
            while (!S.eof()) {
                if (S.eol()) {
                    S.next_line();
                }
                sol = S.sol();
                if (sol) {
                    dlt = self.hold_indent();
                    if (dlt === 1) {
                        push_scope(node, "indent", self.cur_level);
                        chunk = self.chunk_tbl[node.name];
                        compiler = node["%compiler"] || chunk && chunk["%compiler"];
                        if (compiler) {
                            self.compile_requires.push({
                                node: node,
                                compiler: compiler
                            });
                        }
                        if (node["%verbatim"] || chunk && chunk["%verbatim"]) {
                            node.child_nodes = [ self.read_verbatim() ];
                            continue;
                        }
                    } else if (dlt < 0 || dlt === 0 && node && node._inline) {
                        parent = self.dedent(parent, self.cur_level);
                        child_nodes = parent.child_nodes;
                    }
                }
                S.eat_space();
                if (S.eol()) {
                    continue;
                }
                token = self.tokenize();
                token._inline = !sol;
                if (token._inline && token._type !== "comment") {
                    push_scope(node);
                }
                if (token._type === "beg") {
                    if (!sol) {
                        self.raise_err("Unexpected placement of `+++`");
                    }
                    self.eol_or_comment_expect();
                    chunk = self.chunk_tbl[node.name];
                    compiler = node["%compiler"] || chunk && chunk["%compiler"];
                    if (compiler) {
                        self.compile_requires.push({
                            node: node,
                            compiler: compiler
                        });
                    }
                    if (node["%verbatim"] || chunk && chunk["%verbatim"]) {
                        S._next_line();
                        node.child_nodes = [ self.read_verbatim(/^---\s*#*.*$/) ];
                        node.scoped_by = "beg_end";
                        node.scope_level = self.cur_level;
                    } else {
                        push_scope(node, "beg_end", self.cur_level);
                    }
                } else if (token._type === "end") {
                    if (!sol || ((ՐՏ_14 = parent.scope_level) !== (ՐՏ_15 = self.cur_level) && (typeof ՐՏ_14 !== "object" || !ՐՏ_eq(ՐՏ_14, ՐՏ_15)))) {
                        self.raise_err("Unexpected placement of `---`");
                    }
                    if (parent.scoped_by !== "beg_end") {
                        self.raise_err("Mismatched end block `---`");
                    }
                    parent = self.walk_up(parent, 1);
                    child_nodes = parent.child_nodes;
                } else if (token._type === "comment") {
                    token.parent = parent;
                    if (!token._inline) {
                        child_nodes.push(token);
                        node = token;
                    } else if (node._type === "tag") {
                        token.parent = node;
                        node.child_nodes = [ token ];
                    } else {
                        child_nodes.push(token);
                    }
                } else if (token._type === "string") {
                    token.parent = parent;
                    child_nodes.push(token);
                    node = token;
                } else if (token._type === "def") {
                    if (!sol) {
                        self.raise_err("`def` block should be at new line");
                    }
                    token.parent = parent;
                    node = self.chunk_tbl[token.name] = token;
                } else if (token._type === "v-def") {
                    if (!(sol && parent._type === "main")) {
                        self.raise_err("`v-def` block should be at new line and in the main scope");
                    }
                    token.parent = parent;
                    node = self.templ_tbl[token.name] = token;
                } else if (token._type === "var_def") {
                    if (!sol) {
                        self.raise_err("Variable definition should be at new line");
                    }
                    token.parent = parent;
                    node = self.var_tbl[token.name] = token.value;
                    node = token;
                } else if (token._type === "var_ref") {
                    token.parent = parent;
                    child_nodes.push(token);
                    node = token;
                } else if (token._type === "tag") {
                    token.parent = parent;
                    child_nodes.push(token);
                    node = token;
                } else {
                    self.raise_err("Unexpected syntax");
                }
            }
            return [main.child_nodes, self.var_tbl, self.chunk_tbl, self.compile_requires, self.templ_tbl];
        }
        _init_indent_len () {
            var self = this;
            self.indent_len = 4;
        }
        hold_indent () {
            var self = this;
            var ind_len, level, dlt_level;
            ind_len = self.stream.indent;
            if (ind_len % self.indent_len) {
                self.raise_err("Inconsistent indentation");
            }
            level = ind_len / self.indent_len || 0;
            dlt_level = level - self.cur_level;
            if (dlt_level > 1) {
                self.raise_err("Inconsistent indentation");
            }
            self.cur_level = level;
            return dlt_level;
        }
        allow_child (node) {
            var self = this;
            if (node._type === "main" || node._type === "v-def" || node._type === "def" && !node["%tag"]) {
                return true;
            }
            if (node._type === "tag" && (!self.chunk_tbl[node.name] || self.chunk_tbl[node.name]["%tag"])) {
                return true;
            }
            return false;
        }
    }
    class RML_compiler {
        constructor (markup, opt) {
            var self = this;
            self.markup = markup;
            self.compilers = opt.compilers || {};
            self.save_v_pyj = opt.save_v_pyj || function() {
                return;
            };
        }
        print_attrs (attrs, vars, tag_pos, ind) {
            var ՐՏitr15, ՐՏidx15;
            var self = this;
            var num_attrs, ret, pref, it, name, val;
            vars = vars || null;
            if (!(attrs && (num_attrs = len(attrs)))) {
                return "";
            }
            ret = [ " " ];
            pref = !ind || num_attrs <= 5 ? "" : "\n" + ind;
            ՐՏitr15 = ՐՏ_Iterable(attrs);
            for (ՐՏidx15 = 0; ՐՏidx15 < ՐՏitr15.length; ՐՏidx15++) {
                it = ՐՏitr15[ՐՏidx15];
                name = it.name;
                val = it.value;
                if (vars) {
                    name = self.mount_vars(name, vars, tag_pos);
                    val = self.mount_vars(val, vars, tag_pos);
                }
                ret.push(pref + name);
                if (ՐՏ_type(val) === "String") {
                    ret.push("= " + val);
                }
            }
            return ret.join(" ");
        }
        mount_vars (s, vars_rbl, tag_pos) {
            var self = this;
            var ret;
            function replacer(p0, p1, p2) {
                var v, s;
                v = vars_rbl[p2] || null;
                if (v === null) {
                    throw new OutputError("No var named `" + p2 + "`", tag_pos);
                }
                s = p1 + (vars_rbl[p2] || p2);
                return s;
            }
            if (!s) {
                return s;
            }
            ret = s.replace(/(^|(?!\\)\W)(\$\w+)/gm, replacer);
            return ret.replace(/\\\$/g, "$");
        }
        print_tag (tag, ind, vars, chunks, stack) {
            var ՐՏitr16, ՐՏidx16, ՐՏitr17, ՐՏidx17;
            var self = this;
            var ret, child_inline, name, close_tag, is_verbatim, is_alias, is_chunk, child_nodes, start_content, child_ind, tag_prop, close_meth, i, t, has_child, content;
            ind = ind || "";
            vars = vars && vars instanceof Object && Object.keys(vars).length && vars || null;
            chunks = chunks || null;
            stack = stack || [];
            ret = tag._inline ? "" : "\n" + ind;
            if (tag._type === "comment") {
                return "";
            }
            if (tag._type === "string") {
                ret += strip_quotes(tag.value);
                return ret;
            }
            if (tag._type === "var_ref") {
                ret += self.mount_vars(tag.name, vars, tag._pos.s);
                return ret;
            }
            child_inline = tag.child_nodes && tag.child_nodes[0] && tag.child_nodes[0]._inline;
            name = tag.name;
            if (vars) {
                name = self.mount_vars(name, vars, tag._pos.s);
            }
            close_tag = {};
            is_verbatim = tag["%verbatim"];
            if (chunks && chunks[name]) {
                if (chunks[name]["%tag"]) {
                    is_alias = true;
                    is_verbatim = is_verbatim || chunks[name]["%verbatim"];
                } else {
                    is_chunk = true;
                }
            }
            if (is_chunk) {
                if (ՐՏ_in(name, stack)) {
                    throw new OutputError("Circular reference detected in chunk `" + name + "`", tag._pos.s[0], tag._pos.s[1], tag._pos.s[2]);
                }
                stack.push(name);
                child_nodes = chunks[name].child_nodes;
                ret = [];
                start_content = "";
                child_ind = ind;
                close_tag[false] = "";
                close_tag[true] = "";
            } else {
                if (is_alias) {
                    name = chunks[name]["%tag"];
                    tag.attrs = attrs_assign(chunks[tag.name].attrs, tag.attrs);
                }
                child_nodes = tag.child_nodes;
                child_ind = ind + (child_inline ? "" : "    ");
                start_content = ">";
                ret = [ tag._inline ? "" : "\n" + ind, "<", name, self.print_attrs(tag.attrs, vars, tag._pos.s, tag._inline ? null : ind + "    ") ];
                tag_prop = self.markup[name] || self.markup["*"];
                close_meth = null;
                if (tag_prop) {
                    close_meth = tag_prop.close_meth;
                    if (!close_meth) {
                        close_tag[false] = "/>";
                        close_tag[true] = (child_inline ? "" : "\n" + ind) + "</" + name + ">";
                    } else if (close_meth === "+") {
                        close_tag[false] = "></" + name + ">";
                        close_tag[true] = (child_inline ? "" : "\n" + ind) + "</" + name + ">";
                    } else if (close_meth === "-") {
                        close_tag[false] = ">";
                        close_tag[true] = ">";
                    }
                } else {
                    throw new OutputError("Invalid tag: " + name);
                }
            }
            if (child_nodes) {
                i = 0;
                ՐՏitr16 = ՐՏ_Iterable(child_nodes);
                for (ՐՏidx16 = 0; ՐՏidx16 < ՐՏitr16.length; ՐՏidx16++) {
                    t = ՐՏitr16[ՐՏidx16];
                    if (t._type !== "comment") {
                        break;
                    }
                    ++i;
                }
                child_nodes = child_nodes.slice(i);
                has_child = !!len(child_nodes);
            } else {
                has_child = false;
            }
            if (has_child) {
                ret.push(start_content);
                if (is_verbatim) {
                    content = child_nodes[0].split("\n");
                    ret.push("\n" + child_ind);
                    ret.push(content.join("\n" + child_ind));
                } else {
                    ՐՏitr17 = ՐՏ_Iterable(child_nodes);
                    for (ՐՏidx17 = 0; ՐՏidx17 < ՐՏitr17.length; ՐՏidx17++) {
                        t = ՐՏitr17[ՐՏidx17];
                        ret.push(self.print_tag(t, child_ind, vars, chunks, stack));
                    }
                }
            }
            ret.push(close_tag[has_child]);
            if (is_chunk) {
                stack.pop();
            }
            return ret.join("");
        }
        pre_compile (src) {
            var ՐՏitr18, ՐՏidx18, ՐՏitr19, ՐՏidx19;
            var self = this;
            var p, content, vars, chunks, nodes_to_compile, templ_tbl, out_v_pyj, v_pyj_tag, v_pyj_script, templ_name, rml_templ, node, templ_str, templ_str_len, templ_str_lines_num, out_v_pyj_str, v_css_tag, out_v_css, v_css_str, store_in, ret;
            p = new Parser();
            [content, vars, chunks, nodes_to_compile, templ_tbl] = p.parse(src);
            out_v_pyj = [];
            v_pyj_tag = content.find(function(it) {
                return it.name === "v-pyj";
            });
            if (v_pyj_tag && v_pyj_tag.child_nodes && (v_pyj_script = v_pyj_tag.child_nodes[0])) {
                ՐՏitr18 = ՐՏ_Iterable(templ_tbl);
                for (ՐՏidx18 = 0; ՐՏidx18 < ՐՏitr18.length; ՐՏidx18++) {
                    templ_name = ՐՏitr18[ՐՏidx18];
                    rml_templ = templ_tbl[templ_name];
                    out_v_pyj.push(templ_name + '= """');
                    ՐՏitr19 = ՐՏ_Iterable(rml_templ.child_nodes);
                    for (ՐՏidx19 = 0; ՐՏidx19 < ՐՏitr19.length; ՐՏidx19++) {
                        node = ՐՏitr19[ՐՏidx19];
                        out_v_pyj.push(self.print_tag(node, null, vars, chunks));
                    }
                    out_v_pyj.push('\n"""\n\n');
                }
                templ_str = out_v_pyj.join("");
                templ_str_len = len(templ_str);
                templ_str_lines_num = len(templ_str.split("\n"));
                v_pyj_tag._pos.s[0] += templ_str_lines_num;
                v_pyj_tag._pos.e[0] += templ_str_lines_num;
                v_pyj_tag._pos.s[2] += templ_str_len;
                v_pyj_tag._pos.e[2] += templ_str_len;
                out_v_pyj_str = templ_str + v_pyj_script;
            }
            v_css_tag = content.find(function(it) {
                return it.name === "v-css";
            });
            out_v_css = null;
            if (v_css_tag && v_css_tag.child_nodes && (v_css_str = v_css_tag.child_nodes[0])) {
                store_in = null;
                if (v_css_tag.attrs && len(v_css_tag.attrs)) {
                    if (v_css_tag.attrs[0].name === "store_in") {
                        store_in = strip_quotes(v_css_tag.attrs[0].value);
                    } else {
                        throw new OutputError("v-css: expected `store-in` instead of " + v_css_tag.attrs[0].name, v_css_tag._pos.s);
                    }
                }
                out_v_css = {
                    css: v_css_str,
                    store_in: store_in
                };
            }
            ret = {
                v_css: out_v_css,
                v_pyj: out_v_pyj_str,
                nodes_to_compile: nodes_to_compile,
                raise_err_at: null,
                compile_v_pyj: null,
                make_html: null
            };
            ret.raise_err_at = function(node, compiler_err) {
                var err, node_line, indentation;
                err = ՐՏ_type(compiler_err) === "String" ? new Error(compiler_err) : compiler_err;
                node_line = node._pos.s[0] + (node.scoped_by === "beg_end" ? 1 : 0);
                indentation = node.scope_level * p.indent_len;
                err.line = err.line || 0;
                err.pos = (err.pos || 0) + indentation * err.line + node._pos.e[2];
                err.line += node_line;
                err.col = indentation + (err.col || 0);
                throw err;
            };
            ret.compile_v_pyj = function(compiler) {
                if (!v_pyj_script) {
                    return;
                }
                try {
                    return compiler(ret.v_pyj);
                } catch (ՐՏ_Exception) {
                    var err = ՐՏ_Exception;
                    ret.raise_err_at(v_pyj_tag, err);
                }
            };
            ret.make_html = function() {
                var ՐՏitr20, ՐՏidx20;
                var out_html, tag;
                out_html = [];
                ՐՏitr20 = ՐՏ_Iterable(content);
                for (ՐՏidx20 = 0; ՐՏidx20 < ՐՏitr20.length; ՐՏidx20++) {
                    tag = ՐՏitr20[ՐՏidx20];
                    if (ՐՏ_in(tag.name, [ "v-pyj", "v-css" ])) {
                        continue;
                    }
                    out_html.push(self.print_tag(tag, null, vars, chunks));
                }
                return out_html.join("");
            };
            return ret;
        }
        compile (src) {
            var ՐՏitr21, ՐՏidx21;
            var self = this;
            var prec, it, compiler;
            prec = self.pre_compile(src);
            if (prec.v_pyj) {
                self.save_v_pyj(prec.v_pyj);
            }
            if (prec.nodes_to_compile) {
                ՐՏitr21 = ՐՏ_Iterable(prec.nodes_to_compile);
                for (ՐՏidx21 = 0; ՐՏidx21 < ՐՏitr21.length; ՐՏidx21++) {
                    it = ՐՏitr21[ՐՏidx21];
                    if (compiler = self.compilers[it.compiler]) {
                        try {
                            it.node.child_nodes[0] = compiler(it.node.child_nodes[0]);
                        } catch (ՐՏ_Exception) {
                            var err = ՐՏ_Exception;
                            prec.raise_err_at(it.node, err);
                        }
                    } else {
                        prec.raise_err_at(it.node, new Error("Compiler `" + it.compiler + "` is not set"));
                    }
                }
            }
            return prec.make_html();
        }
    }
    _rml_test_str_ = "\ndef RS(%tag = script, %verbatim,  type = \"text/js\" ):\n$asd = DDDDDD\ndef tt():\n    div(d=\"df dfsdf\\\" g\"):\n        span(in_tt = 'qq'):\n            RS():\n                'sdfsdfsdsdfsdf sdf '\n                {function();\n                    dsfsdf;\n                    e = /\\$.+/.exec('sdfsdf')\n                }\n                 fsdfsd\n\n!DOCTYPE(html):\ndiv():\n    tt():\n    RS(some = 'wer1'):\n    span(as = '$asd', g= '\\$event'):\n        ul:\n            li:\n                i(class = 'sdsd'):\n            li:\n\ndef qq():\n    div():\n        qq1():\n        # dfsdf\n        'hi from qq-chunk'\ndef qq1():\n    #qq1():\n    div():\n        'hi from qq1-chunk'\n    span(name = 'qq1-chunk'):\n        'sdfsdf'\ndiv:\n    RS:\n        'adasd'\n        'sdasd'\nsvg:\n    qq1():\neditable(f = 'sdfsdf', @click = 'sdfdf()'):\nRS:\n\n";
    function load_markup(markup) {
        var ՐՏitr22, ՐՏidx22;
        var html_tags, line, tag;
        html_tags = {};
        function read_line(ln) {
            var r;
            r = /^<\s*([^\s]+)\s*>\s*([+-]?)/.exec(ln);
            return {
                "tag": r[1],
                "close_meth": r[2]
            };
        }
        ՐՏitr22 = ՐՏ_Iterable(markup.split("\n"));
        for (ՐՏidx22 = 0; ՐՏidx22 < ՐՏitr22.length; ՐՏidx22++) {
            line = ՐՏitr22[ՐՏidx22];
            line = line.split("#")[0].trimRight();
            if (!line.trim()) {
                continue;
            } else {
                tag = read_line(line);
                html_tags[tag.tag] = tag;
            }
        }
        return html_tags;
    }
    var html_ml = ՐՏ_modules["asset.html_ml"];
    
    function compile(rml_s, opt) {
        var markup, compiler, ret;
        markup = html_ml.markup();
        compiler = new RML_compiler(load_markup(markup), opt);
        ret = compiler.compile(rml_s);
        return ret;
    }
    function pre_compile(rml_s) {
        var markup, compiler, ret;
        markup = html_ml.markup();
        compiler = new RML_compiler(load_markup(markup), {});
        ret = compiler.pre_compile(rml_s);
        return ret;
    }
    function main() {
        return compile(_rml_test_str_);
    }
    if (__name__ === "__main__") {
        main();
    }
    ՐՏ_modules["asset.v_parser_n"]["_rml_test_str_"] = _rml_test_str_;

    ՐՏ_modules["asset.v_parser_n"]["strip_quotes"] = strip_quotes;

    ՐՏ_modules["asset.v_parser_n"]["attrs2hash"] = attrs2hash;

    ՐՏ_modules["asset.v_parser_n"]["attrs_assign"] = attrs_assign;

    ՐՏ_modules["asset.v_parser_n"]["ParserError"] = ParserError;

    ՐՏ_modules["asset.v_parser_n"]["OutputError"] = OutputError;

    ՐՏ_modules["asset.v_parser_n"]["Stream"] = Stream;

    ՐՏ_modules["asset.v_parser_n"]["Parser"] = Parser;

    ՐՏ_modules["asset.v_parser_n"]["RML_compiler"] = RML_compiler;

    ՐՏ_modules["asset.v_parser_n"]["load_markup"] = load_markup;

    ՐՏ_modules["asset.v_parser_n"]["compile"] = compile;

    ՐՏ_modules["asset.v_parser_n"]["pre_compile"] = pre_compile;

    ՐՏ_modules["asset.v_parser_n"]["main"] = main;
})();

(function(){
    var __name__ = "config";
    var RS_IMPORT_DIRS, PYJ_CACHE, CSS_CACHE, re_split_ext, re_split_pth;
    var rml_pre_compile = ՐՏ_modules["asset.v_parser_n"].pre_compile;
    
    RS_IMPORT_DIRS = [ "root/vuepy" ];
    PYJ_CACHE = null;
    CSS_CACHE = null;
    re_split_ext = /^(.*)\.([^\.]+)$/;
    re_split_pth = /^(.*)\/([^\/]+)$/;
    function file_saver(fs) {
        function save_file(fp, content) {
            var fid, dir_file, dir_id;
            fid = fs.id_by_path(fp);
            if (!fid) {
                dir_file = re_split_pth.exec(fp);
                dir_id = fs.id_by_path(dir_file[1]);
                fid = fs.create_file(dir_file[2], dir_id);
            }
            fs.write_file(fid, content);
            return fid;
        }
        return save_file;
    }
    function vuepy_precompile(s, fp_no_ext) {
        var prec;
        prec = rml_pre_compile(s);
        if (prec.v_pyj) {
            PYJ_CACHE[fp_no_ext + ".pyj"] = prec.v_pyj;
        }
        if (prec.v_css) {
            prec.v_css.store_in = prec.v_css.store_in || fp_no_ext + ".css";
            prec.v_css.stored_by = fp_no_ext.split("/").slice(2).join("/") + ".vuepy";
            if (!CSS_CACHE[prec.v_css.store_in]) {
                CSS_CACHE[prec.v_css.store_in] = {};
            }
            CSS_CACHE[prec.v_css.store_in][prec.v_css.stored_by] = prec.v_css.css;
        }
        return prec;
    }
    function expand_import_dot2package(pyj_s, fp) {
        var package_pref;
        package_pref = fp.split("/")[fp.split("/").length-2];
        package_pref = package_pref ? package_pref + "." : "";
        function dot_expander(s, import_line, mod_as_names, from_import, dot_package) {
            var ret;
            if (import_line) {
                mod_as_names = mod_as_names.split(/ *, */).map(function(mod_as_name) {
                    var mod_name, mod, name;
                    if (/^ *\./.test(mod_as_name)) {
                        mod_name = mod_as_name.split(/ +as +/);
                        mod = mod_name[0];
                        name = mod_name[1] && mod_name[1].trim() || mod.replace(/^ *\./, "");
                        mod_as_name = mod.replace(/^ *\./, package_pref) + " as " + name;
                    }
                    return mod_as_name;
                });
                ret = "import " + mod_as_names.join(", ");
                ՐՏ_print(fp, s, " -> ", ret);
                return ret;
            } else if (from_import) {
                dot_package = dot_package.replace(/^ *\./, package_pref);
                ret = "from " + dot_package + " import ";
                ՐՏ_print(fp, s, " -> ", ret);
                return ret;
            }
        }
        return pyj_s.replace(/(^import +(.*)$)|(^from +(\.[\w.]+) +import +)/gm, dot_expander);
    }
    function old_expand_import_dot2package(pyj_s, fp) {
        var package_pref;
        package_pref = fp.split("/")[fp.split("/").length-2];
        package_pref = package_pref ? package_pref + "." : "";
        function dot_expander(s, mod_as_names) {
            var ret;
            mod_as_names = mod_as_names.split(/ *, */).map(function(mod_as_name) {
                var mod_name, mod, name;
                if (/^ *\./.test(mod_as_name)) {
                    mod_name = mod_as_name.split(/ +as +/);
                    mod = mod_name[0];
                    name = mod_name[1] && mod_name[1].trim() || mod.replace(/^ *\./, "");
                    mod_as_name = mod.replace(/^ *\./, package_pref) + " as " + name;
                }
                return mod_as_name;
            });
            ret = "import " + mod_as_names.join(", ") + "\n";
            ՐՏ_print(fp, s, " -> ", ret);
            return ret;
        }
        return pyj_s.replace(/^import +(.*)\n/gm, dot_expander);
    }
    function file_reader(fs) {
        var save_file;
        class Read_ex {
            constructor () {
                var self = this;
                self.code = "ENOENT";
            }
        }
        save_file = file_saver(fs);
        function read_file(fp) {
            var fp_no_ext, fp_vuepy, fid, prec, ret;
            if (PYJ_CACHE && PYJ_CACHE[fp]) {
                return PYJ_CACHE[fp];
            }
            fp_no_ext = re_split_ext.exec(fp)[1];
            fp_vuepy = fp_no_ext + ".vuepy";
            ՐՏ_print("try import vuepy: ", fp_vuepy);
            if (fid = fs.id_by_path(fp_vuepy)) {
                prec = vuepy_precompile(fs.files[fid].content, fp_no_ext);
                if (prec.v_pyj) {
                    ret = prec.v_pyj;
                } else {
                    throw new Error("Found `" + fp_vuepy + "`, but there isn`t `v-pyj` in it, so nothing to import!");
                }
            } else {
                fid = fs.id_by_path(fp);
                ՐՏ_print("try import: ", fp);
                if (!fid) {
                    throw new Read_ex();
                }
                ret = fs.files[fid].content;
            }
            return expand_import_dot2package(ret, fp);
        }
        return read_file;
    }
    function rml_compile(s, fp, fs, opt) {
        var ՐՏitr23, ՐՏidx23;
        var defs, fid, fp_no_ext, prec, v_js, it, compiler, css_frags;
        PYJ_CACHE = {};
        CSS_CACHE = {};
        defs = {
            compilers: {
                "rapydscript": function(s) {
                    return _rs_compile(s, fp, fs);
                }
            }
        };
        opt = Object.assign({}, defs, opt);
        if (!s) {
            fid = fs.id_by_path(fp);
            if (!fid) {
                throw new Error("File `" + fp + "` not found ");
            }
            s = fs.files[fid].content;
        }
        fp_no_ext = re_split_ext.exec(fp)[1];
        prec = vuepy_precompile(s, fp_no_ext);
        if (prec.v_pyj) {
            v_js = prec.compile_v_pyj(opt.compilers["rapydscript"]);
        }
        if (prec.nodes_to_compile) {
            ՐՏitr23 = ՐՏ_Iterable(prec.nodes_to_compile);
            for (ՐՏidx23 = 0; ՐՏidx23 < ՐՏitr23.length; ՐՏidx23++) {
                it = ՐՏitr23[ՐՏidx23];
                if (compiler = opt.compilers[it.compiler]) {
                    try {
                        it.node.child_nodes[0] = compiler(it.node.child_nodes[0]);
                    } catch (ՐՏ_Exception) {
                        var err = ՐՏ_Exception;
                        PYJ_CACHE = null;
                        CSS_CACHE = null;
                        prec.raise_err_at(it.node, err);
                    }
                } else {
                    prec.raise_err_at(it.node, new Error("Compiler `" + it.compiler + "` is not set"));
                }
            }
        }
        PYJ_CACHE = null;
        css_frags = len(Object.keys(CSS_CACHE)) && CSS_CACHE || null;
        CSS_CACHE = null;
        return {
            "html": prec.make_html(),
            "pyj": prec.v_pyj,
            "js": v_js,
            "css": css_frags
        };
    }
    function rs_compile(s, fp, fs, opt) {
        PYJ_CACHE = {};
        CSS_CACHE = {};
        return {
            "js": _rs_compile(s, fp, fs, opt)
        };
    }
    function _rs_compile(s, fp, fs, opt) {
        var me, compiler, main_loop, defs, wrapper__pyj_s, ret;
        function get_amd_wrapper(pyj_s) {
            var is_amd_mod, tmp, mod_as_names, out_pyj_s;
            is_amd_mod = false;
            function get_amd_imports(pyj_s) {
                var out, out_pyj_s;
                out = [];
                function replacer(s, mod_as_names) {
                    var ՐՏitr24, ՐՏidx24;
                    var mod_as_name, mod, name;
                    is_amd_mod = true;
                    mod_as_names = mod_as_names.split(/ *, */);
                    ՐՏitr24 = ՐՏ_Iterable(mod_as_names);
                    for (ՐՏidx24 = 0; ՐՏidx24 < ՐՏitr24.length; ՐՏidx24++) {
                        mod_as_name = ՐՏitr24[ՐՏidx24];
                        mod_as_name = mod_as_name.split(/ +as +/);
                        mod = mod_as_name[0];
                        name = mod_as_name[1] || mod;
                        out.push({
                            mod: mod.trim(),
                            name: name.trim()
                        });
                    }
                    return "";
                }
                out_pyj_s = pyj_s.replace(/^import_amd +(.*)\n/gm, replacer);
                return [ out, out_pyj_s ];
            }
            tmp = get_amd_imports(pyj_s);
            mod_as_names = tmp[0];
            out_pyj_s = tmp[1];
            function binder(mod_as_names) {
                function wrapper(js_s) {
                    var ՐՏitr25, ՐՏidx25;
                    var imports_arr, imports_as, mod_as_name;
                    imports_arr = [];
                    imports_as = [];
                    ՐՏitr25 = ՐՏ_Iterable(mod_as_names);
                    for (ՐՏidx25 = 0; ՐՏidx25 < ՐՏitr25.length; ՐՏidx25++) {
                        mod_as_name = ՐՏitr25[ՐՏidx25];
                        imports_arr.push('"' + mod_as_name.mod + "" + '"');
                        imports_as.push(mod_as_name.name);
                    }
                    return "define([" + imports_arr.join(",") + "]," + "function(" + imports_as.join(",") + "){\nvar exports = {};\n" + js_s + "\nreturn exports;})";
                }
                if (is_amd_mod) {
                    return wrapper;
                } else {
                    return function(js_s) {
                        return js_s;
                    };
                }
            }
            return [ binder(mod_as_names), out_pyj_s ];
        }
        me = _rs_compile;
        compiler = rapydscript;
        if (me.running) {
            compiler = compiler.factory();
        } else {
            main_loop = me.running = true;
        }
        defs = {
            basedir: fp.split("/").slice(0, -1).join("/"),
            readfile: file_reader(fs),
            es6: true,
            beautify: true,
            import_dirs: RS_IMPORT_DIRS
        };
        opt = Object.assign({}, defs, opt);
        try {
            s = s ? expand_import_dot2package(s, fp) : opt.readfile(fp);
            wrapper__pyj_s = get_amd_wrapper(s);
            ret = compiler.compile(wrapper__pyj_s[1], opt);
            ret = wrapper__pyj_s[0](ret);
        } catch (ՐՏ_Exception) {
            var err = ՐՏ_Exception;
            err.src = fp;
            me.running = false;
            throw err;
        }
        if (main_loop) {
            me.running = false;
        }
        return ret;
    }
    ՐՏ_modules["config"]["RS_IMPORT_DIRS"] = RS_IMPORT_DIRS;

    ՐՏ_modules["config"]["PYJ_CACHE"] = PYJ_CACHE;

    ՐՏ_modules["config"]["CSS_CACHE"] = CSS_CACHE;

    ՐՏ_modules["config"]["re_split_ext"] = re_split_ext;

    ՐՏ_modules["config"]["re_split_pth"] = re_split_pth;

    ՐՏ_modules["config"]["file_saver"] = file_saver;

    ՐՏ_modules["config"]["vuepy_precompile"] = vuepy_precompile;

    ՐՏ_modules["config"]["expand_import_dot2package"] = expand_import_dot2package;

    ՐՏ_modules["config"]["old_expand_import_dot2package"] = old_expand_import_dot2package;

    ՐՏ_modules["config"]["file_reader"] = file_reader;

    ՐՏ_modules["config"]["rml_compile"] = rml_compile;

    ՐՏ_modules["config"]["rs_compile"] = rs_compile;

    ՐՏ_modules["config"]["_rs_compile"] = _rs_compile;
})();

(function(){

    var __name__ = "__main__";

    var ՐՏ_16;
    var app_templ;
    app_templ = "\n<div>\n    <div  style = 'position: relative;'>\n        <div>\n            <button  class = 'v-btn' @click = 'show_explorer = !show_explorer'>\n                Explorer\n            </button>\n            <button  class = 'v-btn' @click = 'editor_opt.vim_mode = !editor_opt.vim_mode' :style = \"{color: (editor_opt.vim_mode ? 'red' : 'gray' )}\">\n                Vim\n            </button>\n            <button  class = 'v-btn' @click = 'store_fs'>\n                <i  class = 'fa fa-save'></i>\n                 FS\n            </button>\n            <button  class = 'v-btn' @click = 'download_fs'>\n                <i  class = 'fa fa-download'></i>\n                 FS\n            </button>\n            <button  class = 'v-btn' @click = 'download_zip'>\n                <i  class = 'fa fa-download'></i>\n                 ZIP\n            </button>\n            <button  class = 'v-btn' @click = 'upload_fs' style = 'margin-left:30px;'>\n                <i  class = 'fa fa-power-off' style = 'color:red;'></i>\n                <i  class = 'fa fa-upload'></i>\n                 FS\n            </button>\n            <button  class = 'v-btn' @click = 'load_fs_from_srv'>\n                <i  class = 'fa fa-power-off' style = 'color:red;'></i>\n                Reset FS\n            </button>\n        </div>\n        <explorer  \n            :get_fs = 'get_fs' \n            :start_dir = '0' \n            :bus = 'this' \n            :save_as = 'save_as_name' \n            @save_as_done = 'save_as_done' \n            @open = 'open_doc' \n            v-show = 'show_explorer' \n            class = 'explorer' \n            ref = 'explorer'></explorer>\n    </div>\n    <ul  class = 'doc_tabs'>\n        <li  v-for = 'doc, doc_id in docs' key = 'doc_id' :class = \"{active: doc_id==editor_opt.cur_doc_id}\">\n            <span  @click = '(editor_opt.cur_doc_id = doc_id, edit_focus())'>\n                ${doc.info.name}\n            </span>\n            <i  class = 'fa fa-close' @click = 'close(doc_id)'></i>\n        </li>\n    </ul>\n    <div  style = 'height: 85vh; position:relative;'>\n        <editor  \n            ref = 'editor' \n            :get_cm = 'editor_opt.get_cm' \n            :doc_id = 'editor_opt.cur_doc_id' \n            :get_doc = 'get_cm_doc' \n            :error = 'editor_opt.error' \n            style = 'border-right: solid 1px gray; display: inline-block' \n            :style = '{width: editor_opt.width+\"px\", height: \"inherit\"}' \n            :doc_info = 'cur_doc_info' \n            @compile = 'try_compile' \n            @save = 'save' \n            @open = 'show_explorer = true' \n            @close = 'close' \n            @new = 'open_doc' \n            @readme = 'open_doc(get_fs().id_by_path(\"/README\"))' \n            @vim = 'editor_opt.vim_mode = !editor_opt.vim_mode'></editor>\n        <span  style = 'display: inline-block; width: 10px; position: absolute; top:0px; bottom: 0px; cursor: e-resize' @mousedown = 'resizer'/>\n    </div>\n</div>\n";
    var v_meth = ՐՏ_modules["asset.rs_vue"].v_meth;
    var v_computed = ՐՏ_modules["asset.rs_vue"].v_computed;
    var v_watch = ՐՏ_modules["asset.rs_vue"].v_watch;
    var RS_vue = ՐՏ_modules["asset.rs_vue"].RS_vue;
    
    var Explorer = ՐՏ_modules["explorer"].Explorer;
    
    var Editor = ՐՏ_modules["editor"].Editor;
    
    var common = ՐՏ_modules["asset.common"];
    
    var config = ՐՏ_modules["config"];
    
    
    
    Vue.component("explorer", Explorer.make());
    Vue.component("editor", Editor.make());
    window.srv = axios.create({
        baseURL: "/" + window.location.pathname.split("/")[1] + "/default",
        timeout: 1e4,
        withCredentials: true
    });
    window.check_space = function() {
        var name, sz, dlt, s, flag, trash;
        name = "rsvuepy_check_space_" + new Date().valueOf();
        function clean_up() {
            window.localStorage.removeItem(name);
        }
        window.onunload = clean_up;
        sz = 100;
        dlt = 1e6;
        s = "Q";
        flag = true;
        while (true) {
            trash = s.repeat(sz);
            try {
                window.localStorage.setItem(name, trash);
            } catch (ՐՏ_Exception) {
                if (flag) {
                    dlt = Math.floor(dlt / 2);
                    flag = false;
                }
                sz -= dlt;
                continue;
            }
            if (!flag) {
                flag = true;
                dlt = Math.floor(dlt / 2);
            }
            sz += dlt;
            if (dlt < 1e3) {
                break;
            }
        }
        clean_up();
        return sz;
    };
    var App = (ՐՏ_16 = class App extends RS_vue {
        constructor () {
            super();
            var self = this;
            self.delimiters = [ "${", "}" ];
            self.template = app_templ;
            self.props = {
                get_fs: Function,
                get_fs_keeper: Function
            };
            self.rs_imports = {
                ch_u: null,
                set_a: null
            };
        }
        _init_data () {
            var self = this;
            var ret;
            ret = {
                save_as_name: "",
                compiler_by_ext: {
                    "pyj": "rs",
                    "vuepy": "vuepy",
                    "html": "vuepy"
                },
                docs: {},
                editor_opt: {
                    width: 960,
                    cur_doc_id: "",
                    last_doc_id: 0,
                    error: null,
                    get_cm: function() {
                        return self.CM;
                    },
                    vim_mode: false
                },
                show_explorer: false,
                fs_restored: false,
                fs_restore_prom: null
            };
            return ret;
        }
        beforeCreate () {
            var self = this;
            self.cm_docs = {};
            self.CM = CodeMirror;
            self.compilers = {
                "rs": config.rs_compile,
                "vuepy": config.rml_compile
            };
        }
        mounted () {
            var self = this;
            self.fs_keeper = self.get_fs_keeper();
            self.restore_fs();
        }
        vim_mode_switcher (mode, cur_mode) {
            var self = this;
            var keyMap;
            keyMap = {
                true: "vim",
                false: "default"
            };
            self.$refs.editor.cm.setOption("keyMap", keyMap[mode]);
        }
        resizer (e) {
            var self = this;
            var w, _resizer;
            w = self.editor_opt.width;
            _resizer = function(what, e, opt) {
                var _w;
                if (what === "drag_move") {
                    _w = w + opt.dx;
                    self.editor_opt.width = _w > 150 ? _w : 150;
                }
            };
            common.Drag_listener.get_listener(_resizer, 30)(e);
        }
        cur_doc_info () {
            var self = this;
            var cur_doc;
            cur_doc = self.docs[self.editor_opt.cur_doc_id];
            return cur_doc && cur_doc.info;
        }
        write_file (fp, content) {
            var self = this;
            var fs, fid, dir_file, dir_id;
            fs = self.get_fs();
            fid = fs.id_by_path(fp);
            if (!fid) {
                ՐՏ_print("wrtf: ", fp);
                dir_file = /^(.*)\/([^\/]+)$/.exec(fp);
                dir_id = fs.id_by_path(dir_file[1]);
                fid = fs.create_file(dir_file[2], dir_id);
            }
            fs.write_file(fid, content);
            return fid;
        }
        save (doc_id, save_as) {
            var self = this;
            var fs, doc, txt;
            function remove_extra_space(cm_doc) {
                var do_replace, cm;
                do_replace = function() {
                    var cursor;
                    cursor = cm_doc.getSearchCursor(/\s+?$/);
                    while (cursor.findNext()) {
                        cursor.replace("");
                    }
                };
                cm = cm_doc.getEditor();
                if (cm) {
                    cm.operation(do_replace);
                } else {
                    do_replace();
                }
            }
            fs = self.get_fs();
            doc = self.docs[doc_id];
            if (!doc.file_id || save_as) {
                self.save_as_name = doc.info.name;
                self.show_explorer = true;
            } else if (!fs.files[doc.file_id]) {
                doc.file_id = null;
                self.save_as_name = doc.info.name;
                self.show_explorer = true;
            } else {
                remove_extra_space(self.cm_docs[doc_id]);
                txt = self.cm_docs[doc_id].getValue();
                fs.write_file(doc.file_id, txt);
                doc.info = fs.get_info(doc.file_id);
                self.store_fs();
            }
        }
        show_explorer (nv, ov) {
            var self = this;
            if (!nv) {
                self.save_as_name = "";
            }
        }
        save_as_done (fid, fname) {
            var self = this;
            var doc_id, doc;
            doc_id = self.editor_opt.cur_doc_id;
            doc = self.docs[doc_id];
            doc.file_id = fid;
            self.save(doc_id);
            self.save_as_name = "";
            self.show_explorer = false;
            ՐՏ_print("save_as_done", fname);
        }
        edit_focus () {
            var self = this;
            self.$nextTick(function() {
                self.$refs.editor.cm.focus();
            });
        }
        close (doc_id) {
            var ՐՏitr26, ՐՏidx26;
            var self = this;
            var cur_doc_id, isfound, next_doc_id, prev_doc_id, _prev_doc_id;
            cur_doc_id = self.editor_opt.cur_doc_id;
            if (doc_id && (doc_id !== cur_doc_id && (typeof doc_id !== "object" || !ՐՏ_eq(doc_id, cur_doc_id)))) {
                self.$delete(self.docs, doc_id);
                self.edit_focus();
                return;
            }
            isfound = false;
            next_doc_id = null;
            prev_doc_id = null;
            _prev_doc_id = null;
            ՐՏitr26 = ՐՏ_Iterable(self.docs);
            for (ՐՏidx26 = 0; ՐՏidx26 < ՐՏitr26.length; ՐՏidx26++) {
                doc_id = ՐՏitr26[ՐՏidx26];
                if (isfound) {
                    next_doc_id = doc_id;
                    break;
                }
                if ((doc_id === cur_doc_id || typeof doc_id === "object" && ՐՏ_eq(doc_id, cur_doc_id))) {
                    isfound = true;
                    prev_doc_id = _prev_doc_id;
                }
                _prev_doc_id = doc_id;
            }
            self.$delete(self.docs, cur_doc_id);
            self.editor_opt.cur_doc_id = next_doc_id || prev_doc_id || "";
            self.edit_focus();
        }
        get_cm_doc (id) {
            var self = this;
            return self.cm_docs[id];
        }
        get_doc_id (file_id) {
            var ՐՏitr27, ՐՏidx27, ՐՏ_17;
            var self = this;
            var doc_id;
            if (!file_id) {
                return false;
            }
            ՐՏitr27 = ՐՏ_Iterable(self.docs);
            for (ՐՏidx27 = 0; ՐՏidx27 < ՐՏitr27.length; ՐՏidx27++) {
                doc_id = ՐՏitr27[ՐՏidx27];
                if (((ՐՏ_17 = self.docs[doc_id].file_id) === file_id || typeof ՐՏ_17 === "object" && ՐՏ_eq(ՐՏ_17, file_id))) {
                    return doc_id;
                }
            }
            return false;
        }
        open_docp (path) {
            var self = this;
            var file_id;
            if (!self.fs_restored) {
                self.$on("fs_restored", function() {
                    self.open_docp(path);
                });
                return;
            }
            file_id = fs.id_by_path(path);
            ՐՏ_print("file_id", file_id);
            if (file_id) {
                self.open_doc(file_id);
            }
        }
        open_doc (file_id) {
            var self = this;
            var map_type, doc_id, doc, fs, ext;
            if (!self.fs_restored) {
                self.$on("fs_restored", function() {
                    self.open_doc(file_id);
                });
                return;
            }
            map_type = {};
            map_type["py"] = "python";
            map_type["pyj"] = "cpyj";
            map_type["vuepy"] = "vuepy";
            map_type["js"] = "javascript";
            map_type["css"] = "css";
            map_type["html"] = {
                name: "htmlmixed",
                tags: {
                    script: [ [ "type", /^text\/(x-)?python$/, "text/x-python" ], [ null, null, "javascript" ] ]
                }
            };
            self.show_explorer = false;
            doc_id = self.get_doc_id(file_id);
            if (doc_id) {
                self.editor_opt.cur_doc_id = doc_id;
                self.edit_focus();
                return;
            }
            doc_id = "#" + (++self.editor_opt.last_doc_id);
            self.$set(self.docs, doc_id, {
                file_id: null,
                info: {
                    name: "noname" + self.editor_opt.last_doc_id,
                    mtime: ""
                }
            });
            doc = self.docs[doc_id];
            if (file_id) {
                fs = self.get_fs();
                doc.file_id = file_id;
                doc.info = fs.get_info(file_id);
                ext = doc.info.name.split(".")[doc.info.name.split(".").length-1];
                ՐՏ_print("ext:", ext);
                self.cm_docs[doc_id] = self.CM.Doc(fs.files[file_id].content, map_type[ext]);
            } else {
                self.cm_docs[doc_id] = self.CM.Doc('def hello():\n    print("hello")\n', "python");
            }
            self.editor_opt.cur_doc_id = doc_id;
            self.edit_focus();
        }
        compile_current (opt) {
            var ՐՏ_18, ՐՏitr30, ՐՏidx30;
            var self = this;
            var output_path_map, fs, doc, fname_splited, ext, compiler, fp, cm_doc, output, fp_no_ext, fname_no_ext, opath;
            output_path_map = {
                "html": function(pth) {
                    return "/views/" + pth.split(/\//).filter(function(x) {
                        return x && x !== "root";
                    }).slice(1).join("/");
                },
                "js": "/static/js/",
                "css": "/static/css/"
            };
            function update_css(css, frags_to_update) {
                var ՐՏitr28, ՐՏidx28;
                var stored_frags, css_head, updated_frags, out, stored_by, section;
                function parse_css(css) {
                    var re_splitter, frags, stored_frags, i, stored_by, content;
                    re_splitter = /(\n?^ *\/\* *-+ *< *([^\s>]+) *> *-+ *\*\/ *$\n?)/m;
                    frags = css.split(re_splitter);
                    stored_frags = {
                        "_css_head_": frags[0] || ""
                    };
                    if (len(frags) > 1) {
                        i = 2;
                        while (i < len(frags)) {
                            stored_by = frags[i];
                            content = frags[i + 1];
                            stored_frags[stored_by] = content || "";
                            i += 3;
                        }
                    }
                    return stored_frags;
                }
                stored_frags = parse_css(css);
                css_head = stored_frags._css_head_;
                delete stored_frags._css_head_;
                updated_frags = Object.assign({}, stored_frags, frags_to_update);
                out = [];
                ՐՏitr28 = ՐՏ_Iterable(updated_frags);
                for (ՐՏidx28 = 0; ՐՏidx28 < ՐՏitr28.length; ՐՏidx28++) {
                    stored_by = ՐՏitr28[ՐՏidx28];
                    section = "\n/*---------< " + stored_by + " >-------------*/\n";
                    out.push(section + updated_frags[stored_by]);
                }
                return css_head + out.join("");
            }
            var store_css = (ՐՏ_18 = function store_css(css_to_store, fs) {
                var ՐՏitr29, ՐՏidx29;
                var opath, opath_id, css_file, fp, fid, css_s;
                opath = output_path_map["css"];
                opath_id = fs.id_by_path(opath);
                ՐՏitr29 = ՐՏ_Iterable(css_to_store);
                for (ՐՏidx29 = 0; ՐՏidx29 < ՐՏitr29.length; ՐՏidx29++) {
                    css_file = ՐՏitr29[ՐՏidx29];
                    fp = opath + css_file;
                    fid = fs.id_by_path(fp);
                    if (!fid) {
                        fid = fs.create_file(css_file, opath_id);
                    }
                    ՐՏ_print("css_to_store", css_to_store[css_file]);
                    css_s = update_css(fs.files[fid].content, css_to_store[css_file]);
                    ՐՏ_print("css_s", css_s);
                    fs.write_file(fid, css_s);
                }
            }, Object.defineProperty(ՐՏ_18, "__doc__", {
                value: "css_to_store is a hash:\n    'a.css' :\n        'foo.vuepy': \"a { color: black } ...\"\n        'bar.vuepy': \"div.error { color: red } ...\"\n        ...\n    ..."
            }), ՐՏ_18);
            fs = self.get_fs();
            doc = self.docs[self.editor_opt.cur_doc_id];
            fname_splited = doc.info.name.split(".");
            ext = fname_splited[1] ? fname_splited[fname_splited.length-1] : "";
            compiler = self.compilers[self.compiler_by_ext[ext]];
            if (!compiler) {
                return "compiler is not set for ." + ext;
            }
            ՐՏ_print("compiler detected: ", compiler.name);
            fp = fs.path_by_id(doc.file_id, "root").path;
            cm_doc = self.get_cm_doc(self.editor_opt.cur_doc_id);
            if (cm_doc) {
                output = compiler(cm_doc.getValue(), fp, fs, opt);
                fp_no_ext = /^(.*)\.([^\.]+)$/.exec(fp)[1];
                fname_no_ext = fp_no_ext.split("/")[fp_no_ext.split("/").length-1];
                ՐՏitr30 = ՐՏ_Iterable(output);
                for (ՐՏidx30 = 0; ՐՏidx30 < ՐՏitr30.length; ՐՏidx30++) {
                    ext = ՐՏitr30[ՐՏidx30];
                    if (ext === "css" && output[ext]) {
                        ՐՏ_print(output[ext]);
                        store_css(output[ext], fs);
                        continue;
                    }
                    if (output[ext]) {
                        if (opath = output_path_map[ext]) {
                            if (opath instanceof Function) {
                                opath = opath(fp_no_ext + "." + ext);
                            } else {
                                opath = opath + fname_no_ext + "." + ext;
                            }
                        } else {
                            opath = fp_no_ext + "." + ext;
                        }
                        self.write_file(opath, output[ext]);
                        ՐՏ_print(opath);
                    }
                }
                self.save(self.editor_opt.cur_doc_id);
                self.store_fs();
                self.$refs.explorer.update_list_dir();
                return output;
            }
            return "";
        }
        try_compile (opt) {
            var self = this;
            var ret;
            try {
                ret = self.compile_current(opt);
            } catch (ՐՏ_Exception) {
                var err = ՐՏ_Exception;
                self.editor_opt.error = err instanceof Object ? err : {
                    message: err
                };
                ՐՏ_print("err:", err);
                return err;
            }
            self.editor_opt.error = null;
        }
        upload_fs () {
            var self = this;
            var fs, ret;
            fs = self.get_fs();
            function cleanup(uploaded_list) {
                var it;
                if (it = uploaded_list && uploaded_list[0]) {
                    ՐՏ_print("try load fs: " + it.name);
                    fs.loads(it.value);
                    ՐՏ_print("try load fs: done");
                    self.fs_restored = true;
                    self.$emit("fs_restored", 0);
                }
            }
            ret = common.upload_text();
            ret.then(cleanup);
            return ret;
        }
        load_fs_from_srv () {
            var self = this;
            var fs, ret;
            fs = self.get_fs();
            function cleanup(mod) {
                fs.loads(mod.exports);
                self.fs_restored = true;
                self.$emit("fs_restored", 0);
            }
            ret = rs_req.load_amd("fs_demo", "");
            ret.then(cleanup);
            return ret;
        }
        restore_fs () {
            var self = this;
            var fs, ret;
            ՐՏ_print("restore_fs");
            fs = self.get_fs();
            function cleanup() {
                self.fs_restored = true;
                self.$emit("fs_restored", 0);
            }
            ret = self.fs_keeper.load(fs);
            ret.then(cleanup).catch(function() {
                ՐՏ_print("try load from srv");
                self.load_fs_from_srv();
            });
            return ret;
        }
        store_fs () {
            var self = this;
            var fs;
            fs = self.get_fs();
            return self.fs_keeper.save(fs);
        }
        download_fs () {
            var self = this;
            var fs, d, fname;
            fs = self.get_fs();
            d = new Date();
            fname = "fs_" + d.toLocaleString().replace(/\./g, "").replace(/, *|:/g, "_").slice(0, -3) + ".json";
            common.download(fs.dumps(), fname);
        }
        download_zip () {
            var ՐՏitr31, ՐՏidx31;
            var self = this;
            var jszip, fs, fid;
            function dn_hadler(data) {
                var d, fname;
                d = new Date();
                fname = "all_" + d.toLocaleString().replace(/\./g, "").replace(/, *|:/g, "_").slice(0, -3) + ".zip";
                common.download(data, fname, "application/zip;");
            }
            jszip = new JSZip();
            fs = self.get_fs();
            ՐՏitr31 = ՐՏ_Iterable(fs.files);
            for (ՐՏidx31 = 0; ՐՏidx31 < ՐՏitr31.length; ՐՏidx31++) {
                fid = ՐՏitr31[ՐՏidx31];
                jszip.file(fs.path_by_id(fid).path.slice(1), fs.files[fid].content);
            }
            jszip.generateAsync({
                type: "blob",
                compression: "DEFLATE",
                compressionOptions: {
                    level: 9
                }
            }).then(dn_hadler);
        }
    }, (function(){
        Object.defineProperties(ՐՏ_16.prototype, {
            vim_mode_switcher: {
                enumerable: false, 
                writable: true, 
                value: v_watch({
                    name: "editor_opt.vim_mode"
                })(ՐՏ_16.prototype.vim_mode_switcher)
            },
            resizer: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.resizer)
            },
            cur_doc_info: {
                enumerable: false, 
                writable: true, 
                value: v_computed(ՐՏ_16.prototype.cur_doc_info)
            },
            write_file: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.write_file)
            },
            save: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.save)
            },
            show_explorer: {
                enumerable: false, 
                writable: true, 
                value: v_watch(ՐՏ_16.prototype.show_explorer)
            },
            save_as_done: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.save_as_done)
            },
            edit_focus: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.edit_focus)
            },
            close: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.close)
            },
            get_cm_doc: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.get_cm_doc)
            },
            get_doc_id: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.get_doc_id)
            },
            open_docp: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.open_docp)
            },
            open_doc: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.open_doc)
            },
            compile_current: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.compile_current)
            },
            try_compile: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.try_compile)
            },
            upload_fs: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.upload_fs)
            },
            load_fs_from_srv: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.load_fs_from_srv)
            },
            restore_fs: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.restore_fs)
            },
            store_fs: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.store_fs)
            },
            download_fs: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.download_fs)
            },
            download_zip: {
                enumerable: false, 
                writable: true, 
                value: v_meth(ՐՏ_16.prototype.download_zip)
            }
        });
        ;
    })(), ՐՏ_16);
    exports.Vue = Vue;
    exports.App = App;
    function main() {
    }
    if (__name__ === "__main__") {
        main();
    }
})();
})();

return exports;})
