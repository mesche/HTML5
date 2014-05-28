//Copyright (c) 2013 SAP AG, All Rights Reserved
(function(){"use strict";jQuery.sap.require("sap.ushell.ui.launchpad.TileContainer");jQuery.sap.require("sap.ushell.ui.launchpad.Tile");jQuery.sap.require("sap.ushell.override");var _=$.ui.sortable.prototype._mouseStop;$.ui.sortable.prototype._mouseStop=function(e,n){if(!e){return}if(this.options.revert){var t=this,a=arguments,c=t.placeholder.offset(),d=$.isFunction(this.options.revert)?this.options.revert.apply(this.element[0],[e,t._uiHash(this)]):this.options.revert,j=jQuery(this.helper);self.reverting=true;if(jQuery(".sapUshellDeleteArea_dashboard_functional").data("tileOver")===true){var i=$.browser.msie,I=(i&&(parseInt($.browser.version,10)===10))?true:false,b=(!(navigator.userAgent.indexOf('Chrome')>-1))&&(navigator.userAgent.indexOf("Safari")>-1);if(!I&&(i||b)){$(this.helper).animate({top:(jQuery(document).height()-this.helper.height()-10)+"px",left:(jQuery(document).width()-this.helper.width()-10)+"px",opacity:0},!isNaN(d)?d:250,function(){var T=jQuery(t.currentItem).attr('id'),o=sap.ui.getCore().byId(T);o.bDeletionFlag=true;jQuery(".sapUshellDeleteArea_dashboard_functional").data("tileOver",false);_.apply(t,a)})}else{jQuery(this.helper).css({top:(jQuery(document).height()-this.helper.height()-10),left:(jQuery(document).width()-this.helper.width()-10),opacity:0,WebkitTransition:'top '+d+'ms ease-in-out, left '+d+'ms ease-in-out, opacity '+d+'ms ease-in-out, ',MozTransition:'top '+d+'ms ease-in-out, left '+d+'ms ease-in-out, opacity '+d+'ms ease-in-out, ',MsTransition:'top '+d+'ms ease-in-out, left '+d+'ms ease-in-out, opacity '+d+'ms ease-in-out, ',OTransition:'top '+d+'ms ease-in-out, left '+d+'ms ease-in-out, opacity '+d+'ms ease-in-out, ',transition:'top '+d+'ms ease-in-out, left '+d+'ms ease-in-out, opacity '+d+'ms ease-in-out'});setTimeout(function(){var T=jQuery(t.currentItem).attr('id'),o=sap.ui.getCore().byId(T);o.bDeletionFlag=true;jQuery(".sapUshellDeleteArea_dashboard_functional").data("tileOver",false);_.apply(t,a)},d)}}else{_.apply(t,a)}}else{this._clear(e,n)}return false};sap.ui.jsview("sap.ushell.renderers.fiori2.launchpad.dashboard.DashboardContent",{createContent:function(c){var t=this,e=sap.ui.getCore().getEventBus();this.oDashboardGroupsBox=this._getDashboardGroupsBox(c);this.oDashboardDeleteArea=this._getDashboardDeleteArea(c);this.oDashboardDeleteArea.attachEvent("tileOver",function(){jQuery(".sapUshellTile-placeholder").hide();jQuery(".sapUshellExcludeMe.sapUshellSortableHelperClone").hide();t.oController._handleSortableChange()});this.oDashboardDeleteArea.attachEvent("tileOut",function(){jQuery(".sapUshellTile-placeholder").show();jQuery(".sapUshellExcludeMe.sapUshellSortableHelperClone").show();t.oController._handleSortableChange()});return[this.oDashboardGroupsBox,this.oDashboardDeleteArea]},_getDashboardDeleteArea:function(c){var d=new sap.ushell.ui.launchpad.DeleteArea({type:sap.ushell.ui.launchpad.DeleteAreaType.Dashboard});return d},_getDashboardGroupsBox:function(c){var t=this._getTileContainerTemplate(c);var r=function(e,A,i){var j=jQuery("<div>").css("display","none").addClass("sapUshellTile");jQuery("body").append(j);try{var b=jQuery("#dashboardGroups"),G=sap.ui.getCore().byId("groupList").getController(),T=parseInt(j.css("width")),d=parseInt(j.css("margin-right")),f=parseInt(j.css("border-top-width")),h=T+d+(2*f),D=d+(5*h),m=d+(2*h);G._updateGroupSelection();if(A>=D){b.css("width",D)}else if(A>=m){var p=Math.floor((A-d)/h);b.css("width",d+(p*h))}else{b.css("width",m)}}finally{j.remove()}};var a=function(){var j=jQuery("#dashboard"),b=jQuery(".sapUshellDashboardGroupsContainerItem").first();j.unbind("resize",r);j.bind("resize",r);b.unbind("resize",r);b.bind("resize",r);r({target:j},j.width(),j.height());r({target:b},j.width(),j.height())};var g=new sap.ushell.ui.launchpad.DashboardGroupsContainer("dashboardGroups",{groups:{path:"/groups",template:t},afterRendering:a});return g},_getTileContainerTemplate:function(c){var t=new sap.ushell.ui.launchpad.TileContainer({headerText:"{title}",groupId:"{groupId}",defaultGroup:"{isDefaultGroup}",showHeader:true,showPlaceholder:true,tiles:{path:"tiles",template:new sap.ushell.ui.launchpad.Tile({draggable:false,"long":"{long}",uuid:"{uuid}",target:"{target}",tileViews:{path:"content",factory:function(i,C){return C.getObject()}},afterRendering:[c._bindTileEvents,c]})},add:function(e){sap.ui.getCore().getEventBus().publish("openCatalog",{groupContext:e.getSource().getBindingContext()})},afterRendering:function(){var j=jQuery('#'+this.getId());c.makeGroupSortable(j)},removable:"{removable}",sortable:"{sortable}"});return t},getControllerName:function(){return"sap.ushell.renderers.fiori2.launchpad.dashboard.DashboardContent"}})}());