var B = Object.defineProperty; var V = Object.getOwnPropertySymbols; var W = Object.prototype.hasOwnProperty, Y = Object.prototype.propertyIsEnumerable; var L = (f, u, p) => u in f ? B(f, u, { enumerable: !0, configurable: !0, writable: !0, value: p }) : f[u] = p, x = (f, u) => { for (var p in u || (u = {})) W.call(u, p) && L(f, p, u[p]); if (V) for (var p of V(u)) Y.call(u, p) && L(f, p, u[p]); return f }; var d = (f, u, p) => (L(f, typeof u != "symbol" ? u + "" : u, p), p); (function (f, u) { typeof exports == "object" && typeof module != "undefined" ? module.exports = u() : typeof define == "function" && define.amd ? define(u) : (f = typeof globalThis != "undefined" ? globalThis : f || self, f.JustValidate = u()) })(this, function () { "use strict"; const f = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, u = /^[0-9]+$/, p = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, M = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, P = o => { let e = o; return typeof o == "string" && (e = o.trim()), !e }, N = o => f.test(o), G = (o, e) => o.length > e, A = (o, e) => o.length < e, j = o => u.test(o), q = o => p.test(o), O = o => M.test(o), z = (o, e) => o > e, D = (o, e) => o < e; var h; (function (o) { o.Required = "required", o.Email = "email", o.MinLength = "minLength", o.MaxLength = "maxLength", o.Password = "password", o.Number = "number", o.MaxNumber = "maxNumber", o.MinNumber = "minNumber", o.StrongPassword = "strongPassword", o.CustomRegexp = "customRegexp" })(h || (h = {})); var g; (function (o) { o.Required = "required" })(g || (g = {})); var C; (function (o) { o.Label = "label", o.LabelArrow = "labelArrow" })(C || (C = {})); const H = (o, e) => { switch (o) { case h.Required: return "The field is required"; case h.Email: return "Email has invalid format"; case h.MaxLength: return "The field must contain a maximum of :value characters".replace(":value", String(e)); case h.MinLength: return "The field must contain a minimum of :value characters".replace(":value", String(e)); case h.Password: return "Password must contain minimum eight characters, at least one letter and one number"; case h.Number: return "Value should be a number"; case h.StrongPassword: return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"; case h.MaxNumber: return "Number should be less or equal than :value".replace(":value", String(e)); case h.MinNumber: return "Number should be more or equal than :value".replace(":value", String(e)); default: return "Value is incorrect" } }, _ = o => { switch (o) { case g.Required: return "The field is required"; default: return "Group is incorrect" } }, v = o => !!o && typeof o.then == "function", X = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", E = 5, S = { errorFieldStyle: { color: "#FF5C00", border: "1px solid #B81111" }, errorFieldCssClass: "just-validate-error-field", errorLabelStyle: { color: "#FF5C00" }, errorLabelCssClass: "just-validate-error-label", focusInvalidField: !0, lockForm: !0, testingMode: !1 }; class Z { constructor(e, r, t) { d(this, "form", null); d(this, "fields", {}); d(this, "groupFields", {}); d(this, "errors", {}); d(this, "isValid", !1); d(this, "isSubmitted", !1); d(this, "globalConfig", S); d(this, "errorLabels", []); d(this, "eventListeners", []); d(this, "dictLocale", []); d(this, "currentLocale"); d(this, "customStyleTags", {}); d(this, "onSuccessCallback"); d(this, "onFailCallback"); d(this, "tooltips", []); d(this, "lastScrollPosition"); d(this, "isScrollTick"); d(this, "refreshAllTooltips", () => { this.tooltips.forEach(e => { e.refresh() }) }); d(this, "handleDocumentScroll", () => { this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame(() => { this.refreshAllTooltips(), this.isScrollTick = !1 }), this.isScrollTick = !0) }); d(this, "formSubmitHandler", e => { e.preventDefault(), this.isSubmitted = !0, this.globalConfig.lockForm && this.lockForm(), this.validate().then(() => { var r, t; this.isValid ? (r = this.onSuccessCallback) == null || r.call(this, e) : (t = this.onFailCallback) == null || t.call(this, this.fields), this.globalConfig.lockForm && this.unlockForm() }) }); d(this, "handleFieldChange", e => { let r, t; for (const i in this.fields) { const s = this.fields[i]; if (s.elem === e) { r = s, t = i; break } } !r || !t || this.validateField(t, r, !0) }); d(this, "handleGroupChange", e => { let r, t; for (const i in this.groupFields) { const s = this.groupFields[i]; if (s.elems.find(a => a === e)) { r = s, t = i; break } } !r || !t || this.validateGroup(t, r) }); d(this, "handlerChange", e => { !e.target || (this.handleFieldChange(e.target), this.handleGroupChange(e.target), this.renderErrors()) }); this.initialize(e, r, t) } initialize(e, r, t) { if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = S, this.errorLabels = [], this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], typeof e == "string") { const i = document.querySelector(e); if (!i) throw Error(`Form with ${e} selector not found! Please check the form selector`); this.setForm(i) } else if (e instanceof HTMLFormElement) this.setForm(e); else throw Error("Form selector is not valid. Please specify a string selector or a DOM element."); if (this.globalConfig = x(x({}, S), r), t && (this.dictLocale = t), this.isTooltip()) { const i = document.createElement("style"); i.textContent = X, this.customStyleTags[C.Label] = document.head.appendChild(i), this.addListener("scroll", document, this.handleDocumentScroll) } } getLocalisedString(e) { var t; return !this.currentLocale || !this.dictLocale.length ? e : ((t = this.dictLocale.find(i => i.key === e)) == null ? void 0 : t.dict[this.currentLocale]) || e } getFieldErrorMessage(e) { return this.getLocalisedString(e.errorMessage) || H(e.rule, e.value) } getGroupErrorMessage(e) { return this.getLocalisedString(e.errorMessage) || _(e.rule) } setFieldInvalid(e, r) { this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(r) } setGroupInvalid(e, r) { this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(r) } setGroupValid(e) { this.groupFields[e].isValid = !0 } getElemValue(e) { switch (e.type) { case "checkbox": return e.checked; default: return e.value } } validateGroupRule(e, r, t, i) { switch (i.rule) { case g.Required: (r === "radio" || r === "checkbox") && (t.every(s => !s.checked) ? this.setGroupInvalid(e, i) : this.setGroupValid(e)) } } validateFieldRule(e, r, t, i = !1) { const s = t.value, a = this.getElemValue(r); switch (t.rule) { case h.Required: { P(a) && this.setFieldInvalid(e, t); break } case h.Email: { if (typeof a != "string") { this.setFieldInvalid(e, t); break } N(a) || this.setFieldInvalid(e, t); break } case h.MaxLength: { if (!s) { console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof s != "number") { console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof a != "string") { this.setFieldInvalid(e, t); break } G(a, s) && this.setFieldInvalid(e, t); break } case h.MinLength: { if (!s) { console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof s != "number") { console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof a != "string") { this.setFieldInvalid(e, t); break } A(a, s) && this.setFieldInvalid(e, t); break } case h.Password: { if (typeof a != "string") { this.setFieldInvalid(e, t); break } q(a) || this.setFieldInvalid(e, t); break } case h.StrongPassword: { if (typeof a != "string") { this.setFieldInvalid(e, t); break } O(a) || this.setFieldInvalid(e, t); break } case h.Number: { if (typeof a != "string") { this.setFieldInvalid(e, t); break } j(a) || this.setFieldInvalid(e, t); break } case h.MaxNumber: { if (!s) { console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof s != "number") { console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof a != "string") { this.setFieldInvalid(e, t); break } const l = +a; (Number.isNaN(l) || z(l, s)) && this.setFieldInvalid(e, t); break } case h.MinNumber: { if (!s) { console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof s != "number") { console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof a != "string") { this.setFieldInvalid(e, t); break } const l = +a; (Number.isNaN(l) || D(l, s)) && this.setFieldInvalid(e, t); break } case h.CustomRegexp: { if (!s) { console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, t); return } let l; try { l = new RegExp(s) } catch { console.error(`Value for ${t.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(e, t); break } l.test(String(a)) || this.setFieldInvalid(e, t); break } default: { if (!t.validator) { console.error(`Validator for custom rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, t); return } if (typeof t.validator != "function") { console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`), this.setFieldInvalid(e, t); return } const l = t.validator(a, this.fields); if (typeof l != "boolean" && typeof l != "function" && console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`), typeof l == "function" && !i) { const c = l(); if (!v(c)) { console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`), this.setFieldInvalid(e, t); return } return c.then(m => { m || this.setFieldInvalid(e, t) }).catch(() => { this.setFieldInvalid(e, t) }) } l || this.setFieldInvalid(e, t) } } } validateField(e, r, t = !1) { r.isValid = !0; const i = []; return [...r.rules].reverse().forEach(s => { const a = this.validateFieldRule(e, r.elem, s, t); v(a) && i.push(a) }), Promise.allSettled(i) } validateGroup(e, r) { const t = []; return [...r.rules].reverse().forEach(i => { const s = this.validateGroupRule(e, r.type, r.elems, i); v(s) && t.push(s) }), Promise.allSettled(t) } focusInvalidField() { for (const e in this.fields) { const r = this.fields[e]; if (!r.isValid) { setTimeout(() => r.elem.focus(), 0); break } } } afterSubmitValidation() { this.renderErrors(), this.globalConfig.focusInvalidField && this.focusInvalidField() } validate() { return new Promise(e => { const r = []; Object.keys(this.fields).forEach(t => { const i = this.fields[t], s = this.validateField(t, i); v(s) && r.push(s) }), Object.keys(this.groupFields).forEach(t => { const i = this.groupFields[t], s = this.validateGroup(t, i); v(s) && r.push(s) }), r.length ? Promise.allSettled(r).then(() => { this.afterSubmitValidation(), e(!0) }) : (this.afterSubmitValidation(), e(!1)) }) } setForm(e) { this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler) } addListener(e, r, t) { r.addEventListener(e, t), this.eventListeners.push({ type: e, elem: r, func: t }) } removeListener(e, r, t) { r.removeEventListener(e, t) } addField(e, r, t) { if (typeof e != "string") throw Error("Field selector is not valid. Please specify a string selector."); const i = document.querySelector(e); if (!i) throw Error(`Field with ${e} selector not found! Please check the field selector.`); if (!Array.isArray(r) || !r.length) throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`); return r.forEach(s => { if (!("rule" in s || "validator" in s)) throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`); if (!s.validator && (!s.rule || !Object.values(h).includes(s.rule))) throw Error(`Rule should be one of these types: ${Object.values(h).join(", ")}. Provided value: ${s.rule}`) }), this.fields[e] = { elem: i, rules: r, isValid: void 0, config: t }, this.setListeners(i), this.isSubmitted && this.validate(), this } removeField(e) { if (typeof e != "string") throw Error("Field selector is not valid. Please specify a string selector."); return this.fields[e] ? (this.destroy(), delete this.fields[e], this.refresh(), this) : (console.error("Field not found. Check the field selector."), this) } addRequiredGroup(e, r, t) { if (typeof e != "string") throw Error("Group selector is not valid. Please specify a string selector."); const i = document.querySelector(e); if (!i) throw Error(`Group with ${e} selector not found! Please check the group selector.`); const s = i.querySelectorAll("input"), a = Array.from(s).every(c => c.type === "radio"), l = Array.from(s).every(c => c.type === "checkbox"); if (!a && !l) throw Error("Group should contain either or checkboxes or radio buttons"); return this.groupFields[e] = { rules: [{ rule: g.Required, errorMessage: r }], groupElem: i, elems: Array.from(s), type: a ? "radio" : "checkbox", isDirty: !1, isValid: void 0, config: t }, s.forEach(c => { this.setListeners(c) }), this } getListenerType(e) { switch (e) { case "checkbox": case "select-one": case "radio": return "change"; default: return "keyup" } } setListeners(e) { const r = this.getListenerType(e.type); this.removeListener(r, e, this.handlerChange), this.addListener(r, e, this.handlerChange) } clearErrors() { var e, r, t; this.errorLabels.forEach(i => i.remove()); for (const i in this.fields) { const s = this.fields[i], a = ((e = s.config) == null ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle; Object.keys(a).forEach(l => { s.elem.style[l] = "" }), s.elem.classList.remove(((r = s.config) == null ? void 0 : r.errorFieldCssClass) || this.globalConfig.errorFieldCssClass) } for (const i in this.groupFields) { const s = this.groupFields[i], a = ((t = s.config) == null ? void 0 : t.errorFieldStyle) || this.globalConfig.errorFieldStyle; Object.keys(a).forEach(l => { s.elems.forEach(c => { var m; c.style[l] = "", c.classList.remove(((m = s.config) == null ? void 0 : m.errorFieldCssClass) || this.globalConfig.errorFieldCssClass) }) }) } this.tooltips = [] } isTooltip() { return !!this.globalConfig.tooltip } lockForm() { const e = this.form.querySelectorAll("input, textarea, button, select"); for (let r = 0, t = e.length; r < t; ++r)e[r].setAttribute("disabled", "disabled"), e[r].style.pointerEvents = "none", e[r].style.webkitFilter = "grayscale(100%)", e[r].style.filter = "grayscale(100%)" } unlockForm() { const e = this.form.querySelectorAll("input, textarea, button, select"); for (let r = 0, t = e.length; r < t; ++r)e[r].removeAttribute("disabled"), e[r].style.pointerEvents = "", e[r].style.webkitFilter = "", e[r].style.filter = "" } renderTooltip(e, r, t) { var y; const { top: i, left: s, width: a, height: l } = e.getBoundingClientRect(), c = r.getBoundingClientRect(), m = t || ((y = this.globalConfig.tooltip) == null ? void 0 : y.position); switch (m) { case "left": { r.style.top = `${i + l / 2 - c.height / 2}px`, r.style.left = `${s - c.width - E}px`; break } case "top": { r.style.top = `${i - c.height - E}px`, r.style.left = `${s + a / 2 - c.width / 2}px`; break } case "right": { r.style.top = `${i + l / 2 - c.height / 2}px`, r.style.left = `${s + a + E}px`; break } case "bottom": { r.style.top = `${i + l + E}px`, r.style.left = `${s + a / 2 - c.width / 2}px`; break } }return r.dataset.direction = m, { refresh: () => { this.renderTooltip(e, r, t) } } } createErrorLabelElem(e, r, t) { const i = document.createElement("div"); i.innerHTML = r; const s = this.isTooltip() ? t == null ? void 0 : t.errorLabelStyle : (t == null ? void 0 : t.errorLabelStyle) || this.globalConfig.errorLabelStyle; return Object.assign(i.style, s), i.classList.add((t == null ? void 0 : t.errorLabelCssClass) || this.globalConfig.errorLabelCssClass, "just-validate-error-label"), this.isTooltip() && (i.dataset.tooltip = "true"), this.globalConfig.testingMode && (i.dataset.testId = `error-label-${e}`), this.errorLabels.push(i), i } renderErrors() { var e, r, t, i, s, a, l, c, m, k, y, T; if (!!this.isSubmitted) { this.clearErrors(), this.isValid = !0; for (const F in this.groupFields) { const n = this.groupFields[F]; if (n.isValid) continue; this.isValid = !1, n.elems.forEach(w => { var $, I; Object.assign(w.style, (($ = n.config) == null ? void 0 : $.errorFieldStyle) || this.globalConfig.errorFieldStyle), w.classList.add(((I = n.config) == null ? void 0 : I.errorFieldCssClass) || this.globalConfig.errorFieldCssClass) }); const b = this.createErrorLabelElem(F, n.errorMessage, n.config); n.groupElem.appendChild(b), this.isTooltip() && this.tooltips.push(this.renderTooltip(n.groupElem, b, (r = (e = n.config) == null ? void 0 : e.tooltip) == null ? void 0 : r.position)) } for (const F in this.fields) { const n = this.fields[F]; if (n.isValid) continue; this.isValid = !1, n.elem.classList.add(((t = n.config) == null ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass); const b = this.createErrorLabelElem(F, n.errorMessage, n.config); if (n.elem.type === "checkbox" || n.elem.type === "radio") { const w = document.querySelector(`label[for="${n.elem.getAttribute("id")}"]`); ((s = (i = n.elem.parentElement) == null ? void 0 : i.tagName) == null ? void 0 : s.toLowerCase()) === "label" ? (l = (a = n.elem.parentElement) == null ? void 0 : a.parentElement) == null || l.appendChild(b) : w ? (c = w.parentElement) == null || c.appendChild(b) : (m = n.elem.parentElement) == null || m.appendChild(b) } else (k = n.elem.parentElement) == null || k.appendChild(b); this.isTooltip() && this.tooltips.push(this.renderTooltip(n.elem, b, (T = (y = n.config) == null ? void 0 : y.tooltip) == null ? void 0 : T.position)) } } } destroy() { this.eventListeners.forEach(e => { this.removeListener(e.type, e.elem, e.func) }), Object.keys(this.customStyleTags).forEach(e => { this.customStyleTags[e].remove() }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm() } refresh() { this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(e => { this.addField(e, [...this.fields[e].rules], this.fields[e].config) })) : console.error("Cannot initialize the library! Form is not defined") } setCurrentLocale(e) { if (typeof e != "string" && e !== void 0) { console.error("Current locale should be a string"); return } this.currentLocale = e, this.isSubmitted && this.validate() } onSuccess(e) { return this.onSuccessCallback = e, this } onFail(e) { return this.onFailCallback = e, this } } return Z });
