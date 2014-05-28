/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.SplitterRenderer");sap.ui.commons.SplitterRenderer={};
sap.ui.commons.SplitterRenderer.render=function(r,c){if(!c.getVisible()){return}var a=r;var o=c.getSplitterOrientation();var p=c.getSplitterPosition();var d;var C;var l;var i;p=p.substring(0,p.length-1);d=100-p;a.write("<div ");a.writeControlData(c);a.addClass("sapUiSplitter");a.addStyle("width",c.getWidth());a.addStyle("height",c.getHeight());a.writeStyles();a.writeClasses();a.write(">");a.write("<div id=\""+c.getId()+"_firstPane\" ");if(c.getShowScrollBars()){a.addStyle("overflow","auto")}else{a.addStyle("overflow","hidden")}if(o==sap.ui.commons.Orientation.Vertical){a.addClass("sapUiVSplitterFirstPane");a.addStyle("width",p+"%")}else if(o==sap.ui.commons.Orientation.Horizontal){a.addClass("sapUiHSplitterFirstPane");a.addStyle("height",p+"%")}a.writeClasses();a.writeStyles();a.write(">");C=c.getFirstPaneContent();l=C.length;for(i=0;i<l;i++){a.renderControl(C[i])}a.write("</div>");a.write("<div  id=\""+c.getId()+"_SB\" tabIndex=\"0\" role=\"separator\" title=\"Press SHIFT+ARROW keys to move\" ");if(o==sap.ui.commons.Orientation.Vertical){if(c.getSplitterBarVisible()){a.addClass("sapUiVerticalSplitterBar")}else{a.addClass("sapUiVerticalSplitterBarHidden")}a.addStyle("width",0+"%")}else if(o==sap.ui.commons.Orientation.Horizontal){if(c.getSplitterBarVisible()){a.addClass("sapUiHorizontalSplitterBar")}else{a.addClass("sapUiHorizontalSplitterBarHidden")}a.addStyle("height",0+"%")}a.writeClasses();a.writeStyles();a.write(">");a.write("</div>");a.write("<div id=\""+c.getId()+"_secondPane\" ");if(c.getShowScrollBars()){a.addStyle("overflow","auto")}else{a.addStyle("overflow","hidden")}if(o==sap.ui.commons.Orientation.Vertical){a.addClass("sapUiVSplitterSecondPane");a.addStyle("width",d+'%')}else if(o==sap.ui.commons.Orientation.Horizontal){a.addClass("sapUiHSplitterSecondPane");a.addStyle("height",d+'%')}a.writeClasses();a.writeStyles();a.write(">");C=c.getSecondPaneContent();l=C.length;for(i=0;i<l;i++){a.renderControl(C[i])}a.write("</div>");a.write("</div>")};