sap.ui.require.preload({
	"sap/ui/codeeditor/CodeEditor.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Control\",\"sap/ui/codeeditor/js/ace/ace\",\"sap/ui/codeeditor/js/ace/ext-language_tools\",\"sap/ui/codeeditor/js/ace/ext-beautify\",\"sap/ui/codeeditor/js/ace/mode-javascript\",\"sap/ui/codeeditor/js/ace/mode-json\"],function(e,t){\"use strict\";var o=t.extend(\"sap.ui.codeeditor.CodeEditor\",{metadata:{library:\"sap.ui.core\",properties:{value:{type:\"string\",group:\"Misc\",defaultValue:\"\"},type:{type:\"string\",group:\"Appearance\",defaultValue:\"javascript\"},width:{type:\"sap.ui.core.CSSSize\",group:\"Appearance\",defaultValue:\"100%\"},height:{type:\"sap.ui.core.CSSSize\",group:\"Appearance\",defaultValue:\"100%\"},editable:{type:\"boolean\",group:\"Behavior\",defaultValue:!0},lineNumbers:{type:\"boolean\",group:\"Behavior\",defaultValue:!0},valueSelection:{type:\"boolean\",group:\"Behavior\",defaultValue:!1},maxLines:{type:\"int\",group:\"Behavior\",defaultValue:0},colorTheme:{type:\"string\",group:\"Behavior\",defaultValue:\"default\"},syntaxHints:{type:\"boolean\",group:\"Behavior\",defaultValue:!0}},events:{liveChange:{},change:{}},defaultProperty:\"content\"},renderer:function(e,t){e.write(\"<div \"),e.writeControlData(t),e.addStyle(\"width\",t.getWidth()),e.addStyle(\"height\",t.getHeight()),e.addClass(\"sapCEd\"),e.writeAttributeEscaped(\"data-sap-ui-syntaxhints\",t.getSyntaxHints()),e.writeStyles(),e.writeClasses(),e.write(\">\"),e.write(\"</div>\")}}),i=e.sap.getModulePath(\"sap.ui.codeeditor.js.ace\");ace.config.set(\"basePath\",i);var r=ace.require(\"ace/ext/language_tools\");return o.prototype.init=function(){var e=document.createElement(\"div\");this._oEditorDomRef=e,this._oEditorDomRef.style.height=\"100%\",this._oEditorDomRef.style.width=\"100%\",this._oEditor=ace.edit(e);var t=this._oEditor.getSession();t.setUseWorker(!1),t.setValue(\"\"),t.setUseWrapMode(!0),t.setMode(\"ace/mode/javascript\"),this._oEditor.setTheme(\"ace/theme/tomorrow\"),this._oEditor.setOptions({enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}),this._oEditor.renderer.setShowGutter(!0),this._oEditor.$blockScrolling=1/0;var o=this;this._oEditor.addEventListener(\"change\",function(e){var t=o.getCurrentValue();o.fireLiveChange({value:t,editorEvent:e})}),this._oEditor.addEventListener(\"blur\",function(e){var t=o.getCurrentValue(),i=o.getValue();o.setProperty(\"value\",t,!0),t!=i&&o.fireChange({value:t,oldValue:i})})},o.prototype.invalidate=function(){return this},o.prototype.setEditable=function(e){return this.setProperty(\"editable\",e,!0),this._oEditor.renderer.$cursorLayer.element.style.display=e?\"\":\"none\",this._oEditor.textInput.setReadOnly(!e),this},o.prototype.focus=function(){return this._oEditor.focus(),this},o.prototype.setType=function(e){return this.setProperty(\"type\",e,!0),this._oEditor.getSession().setMode(\"ace/mode/\"+this.getType()),this},o.prototype.setSyntaxHints=function(e){return this.setProperty(\"syntaxHints\",e,!0),this._oEditor.renderer.setShowGutter(this.getLineNumbers()),this.getDomRef()&&this.getDomRef().setAttribute(\"data-sap-ui-syntaxhints\",e),this},o.prototype.setColorTheme=function(e){return this.setProperty(\"colorTheme\",e,!0),\"default\"===e?e=\"tomorrow\":\"hcb\"===e?e=\"tomorrow_night\":\"hcb_bright\"===e?e=\"tomorrow_night_bright\":\"hcb_blue\"===e&&(e=\"tomorrow_night_blue\"),this._oEditor.setTheme(\"ace/theme/\"+e),this},o.prototype.setValue=function(e){return this.setProperty(\"value\",e,!0),this._oEditor.getSession().setValue(this.getProperty(\"value\")),this.getValueSelection()||this._oEditor.selection.clearSelection(),this},o.prototype.getCurrentValue=function(){return this._oEditor.getValue()},o.prototype.setLineNumbers=function(e){return this.setProperty(\"lineNumbers\",e,!0),this._oEditor.renderer.setShowGutter(this.getLineNumbers()),this},o.prototype.onAfterRendering=function(){var e=this.getDomRef(),t=this.getMetadata().getPropertyDefaults();setTimeout(function(){this.getMaxLines()===t.maxLines&&this.getHeight()===t.height&&e.height<20&&(e.style.height=\"3rem\")}.bind(this),0),e.appendChild(this._oEditorDomRef),this._oEditor.renderer.updateText()},o.prototype.setMaxLines=function(e){return this._oEditor.setOption(\"maxLines\",e),this.setProperty(\"maxLines\",e,!0)},o.prototype.addCustomCompleter=function(e){r.addCompleter({getCompletions:function(t,o,i,r,s){e.getCompletions(s,{oPos:i,sPrefix:r})}})},o.prototype._getEditorInstance=function(){return this._oEditor},o.prototype.setVisible=function(e){return this.getVisible()!==e&&(this.setProperty(\"visible\",e),this.rerender()),this},o.prototype.prettyPrint=function(){ace.require(\"ace/ext/beautify\").beautify(this._oEditor.session)},o.prototype.destroy=function(e){this._oEditor.destroy(e),t.prototype.destroy.call(this,e)},o.prototype.onfocusout=function(){this._oEditor.getSession().setUseWorker(!1)},o.prototype.onfocusin=function(){this.getEditable()||document.activeElement.blur(),this._oEditor.getSession().setUseWorker(!0)},o},!0);",
	"sap/ui/codeeditor/library.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/core/Core\"],function(e){\"use strict\";return sap.ui.getCore().initLibrary({name:\"sap.ui.codeeditor\",dependencies:[\"sap.ui.core\"],types:[],interfaces:[],controls:[\"sap.ui.codeeditor.CodeEditor\"],elements:[],noLibraryCSS:!1,version:\"1.56.18\"}),sap.ui.codeeditor});"
}, "sap/ui/codeeditor/library-preload");