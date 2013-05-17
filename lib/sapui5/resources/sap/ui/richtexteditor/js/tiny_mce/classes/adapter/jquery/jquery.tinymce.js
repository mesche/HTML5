/**
 * jquery.tinymce.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function($){var u,l,d=[],w=window;$.fn.tinymce=function(s){var b=this,c,e,f,p,g,q="",h="";if(!b.length)return b;if(!s)return tinyMCE.get(b[0].id);b.css('visibility','hidden');function j(){var k=[],m=0;if(a){a();a=null}b.each(function(i,n){var e,o=n.id,r=s.oninit;if(!o)n.id=o=tinymce.DOM.uniqueId();e=new tinymce.Editor(o,s);k.push(e);e.onInit.add(function(){var t,v=r;b.css('visibility','');if(r){if(++m==k.length){if(tinymce.is(v,"string")){t=(v.indexOf(".")===-1)?null:tinymce.resolve(v.replace(/\.\w+$/,""));v=tinymce.resolve(v)}v.apply(t||tinymce,k)}}})});$.each(k,function(i,e){e.render()})}if(!w.tinymce&&!l&&(c=s.script_url)){l=1;f=c.substring(0,c.lastIndexOf("/"));if(/_(src|dev)\.js/g.test(c))h="_src";p=c.lastIndexOf("?");if(p!=-1)q=c.substring(p+1);w.tinyMCEPreInit=w.tinyMCEPreInit||{base:f,suffix:h,query:q};if(c.indexOf('gzip')!=-1){g=s.language||"en";c=c+(/\?/.test(c)?'&':'?')+"js=true&core=true&suffix="+escape(h)+"&themes="+escape(s.theme)+"&plugins="+escape(s.plugins)+"&languages="+g;if(!w.tinyMCE_GZ){tinyMCE_GZ={start:function(){tinymce.suffix=h;function k(c){tinymce.ScriptLoader.markDone(tinyMCE.baseURI.toAbsolute(c))}k("langs/"+g+".js");k("themes/"+s.theme+"/editor_template"+h+".js");k("themes/"+s.theme+"/langs/"+g+".js");$.each(s.plugins.split(","),function(i,n){if(n){k("plugins/"+n+"/editor_plugin"+h+".js");k("plugins/"+n+"/langs/"+g+".js")}})},end:function(){}}}}$.ajax({type:"GET",url:c,dataType:"script",cache:true,success:function(){tinymce.dom.Event.domLoaded=1;l=2;if(s.script_loaded)s.script_loaded();j();$.each(d,function(i,j){j()})}})}else{if(l===1)d.push(j);else j()}return b};$.extend($.expr[":"],{tinymce:function(e){return!!(e.id&&"tinyMCE"in window&&tinyMCE.get(e.id))}});function a(){function r(n){if(n==="remove"){this.each(function(i,e){var f=t(e);if(f)f.remove()})}this.find("span.mceEditor,div.mceEditor").each(function(i,e){var f=tinyMCE.get(e.id.replace(/_parent$/,""));if(f)f.remove()})}function b(v){var s=this,e;if(v!==u){r.call(s);s.each(function(i,n){var e;if(e=tinyMCE.get(n.id))e.setContent(v)})}else if(s.length>0){if(e=tinyMCE.get(s[0].id))return e.getContent()}}function t(e){var f=null;(e)&&(e.id)&&(w.tinymce)&&(f=tinyMCE.get(e.id));return f}function c(m){return!!((m)&&(m.length)&&(w.tinymce)&&(m.is(":tinymce")))}var q={};$.each(["text","html","val"],function(i,n){var o=q[n]=$.fn[n],e=(n==="text");$.fn[n]=function(v){var s=this;if(!c(s))return o.apply(s,arguments);if(v!==u){b.call(s.filter(":tinymce"),v);o.apply(s.not(":tinymce"),arguments);return s}else{var f="";var g=arguments;(e?s:s.eq(0)).each(function(i,h){var j=t(h);f+=j?(e?j.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):j.getContent({save:true})):o.apply($(h),g)});return f}}});$.each(["append","prepend"],function(i,n){var o=q[n]=$.fn[n],p=(n==="prepend");$.fn[n]=function(v){var s=this;if(!c(s))return o.apply(s,arguments);if(v!==u){s.filter(":tinymce").each(function(i,e){var f=t(e);f&&f.setContent(p?v+f.getContent():f.getContent()+v)});o.apply(s.not(":tinymce"),arguments);return s}}});$.each(["remove","replaceWith","replaceAll","empty"],function(i,n){var o=q[n]=$.fn[n];$.fn[n]=function(){r.call(this,n);return o.apply(this,arguments)}});q.attr=$.fn.attr;$.fn.attr=function(n,v){var s=this,e=arguments;if((!n)||(n!=="value")||(!c(s))){if(v!==u){return q.attr.apply(s,e)}else{return q.attr.apply(s,e)}}if(v!==u){b.call(s.filter(":tinymce"),v);q.attr.apply(s.not(":tinymce"),e);return s}else{var f=s[0],g=t(f);return g?g.getContent({save:true}):q.attr.apply($(f),e)}}}})(jQuery);