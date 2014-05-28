/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.NoteTakerCardRenderer");jQuery.sap.require("sap.suite.ui.commons.util.RenderUtils");sap.suite.ui.commons.NoteTakerCardRenderer={};
sap.suite.ui.commons.NoteTakerCardRenderer.render=function(r,c){var f=c.getHeader();var t=this.getTruncatedHeader(f);var s=c.getBody().length>c.getViewAllTrigger();var S=c.getAttachmentFilename()!=="";var a=new sap.suite.ui.commons.util.RenderingHelper(r);r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiCommonsNoteTakerCard");if(c.getThumbUp()){r.addClass("suiteUiNtcPositiveCard")}if(c.getThumbDown()){r.addClass("suiteUiNtcNegativeCard")}r.writeClasses();r.writeAttribute("tabindex","0");var b={role:'region'};if(!jQuery.browser.msie){b.describedby=[c.getId()+"-headerLabel",c.getId()+"-timestamp",c.getId()+"-toolbar",c.getId()+"-body"].join(" ")}r.writeAccessibilityState(c,b);r.write(">");a.writeOpeningTag('div',{attributes:{id:c.getId()+"-header"},classes:['sapSuiteUiCommonsNoteTakerCardHeader']});a.writeOpeningTag('div',{attributes:{id:c.getId()+"-header-buttons"},classes:['sapSuiteUiCommonsNoteTakerCardHeaderButtons']});r.renderControl(c._oEditButton);r.renderControl(c._oDeleteButton);a.writeClosingTag('div');if(!f){r.write("&nbsp;")}else{r.write("<label");r.writeAttribute("id",c.getId()+"-headerLabel");if(f!==t){r.writeAttributeEscaped("title",f)}r.write(">");r.writeEscaped(t);r.write("</label>")}r.write("<div");r.writeAttribute("id",c.getId()+"-timestamp");r.addClass("sapSuiteUiCommonsNoteTakerCardTimestamp");r.writeClasses();r.write(">");r.writeEscaped(c.getFormattedTimestamp());r.write("</div>");r.write("</div>");r.write("<div");r.addClass("sapSuiteUiCommonsNoteTakerCardBodyContent");r.writeClasses();r.write(">");r.write("<div");r.writeAttribute("id",c.getId()+"-toolbar");r.addClass("suiteUiNtcToolbar");r.writeClasses();r.write(">");this.renderToolbar(r,c);r.write("</div>");if(S){r.renderControl(c._prepareAttachmentPanel(false))}r.write("<div");r.writeAttribute("id",c.getId()+"-body");r.addClass("sapSuiteUiCommonsNoteTakerCardBody");if(S&&s){r.addClass("sapSuiteUiCommonsNtcBodyViewAllAttach")}else if(s){r.addClass("sapSuiteUiCommonsNtcBodyViewAll")}else if(S){r.addClass("sapSuiteUiCommonsNtcBodyAttach")}r.writeClasses();r.write(">");r.write(c._getFormattedBody());r.write("</div>");if(s){r.write("<div");r.writeAttribute("id",c.getId()+"-viewAll");r.addClass("sapSuiteUiCommonsNoteTakerCardViewAll");r.writeClasses();r.write(">&nbsp;");c._oViewAllLink.addStyleClass("sapSuiteUiCommonsNoteTakerCardViewAllLink");r.renderControl(c._oViewAllLink);r.write("</div>")}r.write("</div>");r.write("</div>")};
sap.suite.ui.commons.NoteTakerCardRenderer.getTruncatedHeader=function(f){var l=20;var t="...";if(f&&f.length>l){return f.substr(0,l-t.length)+t}else{return f}};
sap.suite.ui.commons.NoteTakerCardRenderer.renderToolbar=function(r,c){r.write("<div");r.writeAttribute("id",c.getId()+"-left-toolbar");r.addClass("sapSuiteUiCommonsNoteTakerCardLeftPanel");if(c.getThumbUp()||c.getThumbDown()){r.addClass("sapSuiteUiCommonsNoteTakerCardWithThumbs")}else{r.addClass("sapSuiteUiCommonsNoteTakerCardNoThumbs")}r.writeClasses();r.write(">");r.write(c._getFormattedTags());r.write("</div>");r.write("<div");r.writeAttribute("id",c.getId()+"-right-toolbar");r.addClass("sapSuiteUiCommonsNoteTakerCardRightPanel");r.writeClasses();r.write(">");r.write("<div");r.writeAttribute("id",c.getId()+"-thumb");var t="";if(c.getThumbUp()&&!c.getThumbDown()){r.writeAttribute("class","sapSuiteUiCommonsNoteTakerCardThumbUp");t=c._rb.getText("NOTETAKERCARD_ICON_THUMB_UP_TOOLTIP");r.writeAttribute("title",t)}else if(!c.getThumbUp()&&c.getThumbDown()){r.writeAttribute("class","sapSuiteUiCommonsNoteTakerCardThumbDown");t=c._rb.getText("NOTETAKERCARD_ICON_THUMB_DOWN_TOOLTIP");r.writeAttribute("title",t)}r.write(">");r.write("<span");r.writeAttribute("style","visibility: hidden; display: none;");r.write(">");r.writeEscaped(t);r.write("</span>");r.write("</div>");r.write("</div>")};