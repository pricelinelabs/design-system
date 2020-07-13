(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/FkY":function(n,e,a){"use strict";a.r(e);var t=a("Ff2n"),o=a("q1tI"),p=a.n(o),m=a("6qfE"),r=p.a.createElement;e.default=function(n){var e=n.components;Object(t.a)(n,["components"]);return r(m.MDXTag,{name:"wrapper",components:e},r(m.MDXTag,{name:"h1",components:e,props:{id:"modal"}},r(m.MDXTag,{name:"a",components:e,parentName:"h1",props:{href:"#modal","aria-hidden":"true"}},r(m.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon icon-link"}})),"Modal"),r(m.MDXTag,{name:"p",components:e},"Use ",r(m.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"Modal")," to create an a11y-friendly modal dialog."),r(m.MDXTag,{name:"p",components:e},r(m.MDXTag,{name:"em",components:e,parentName:"p"},"Note: ModalDemo is a simple class for demonstration that maintains an ",r(m.MDXTag,{name:"inlineCode",components:e,parentName:"em"},"isOpen")," variable in its state.")),r(m.MDXTag,{name:"pre",components:e},r(m.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-.jsx",metaString:""}},'<ModalDemo>\n    <Modal\n      header={<Heading.h1>Modal Title</Heading.h1>}\n      width={["200px", "300px"]}\n      enableOverflow\n      ariaLabel=\'Aria label\'\n    >\n        <Text>Modal Content</Text>\n    </Modal>\n</ModalDemo>\n')),r(m.MDXTag,{name:"h2",components:e,props:{id:"props"}},r(m.MDXTag,{name:"a",components:e,parentName:"h2",props:{href:"#props","aria-hidden":"true"}},r(m.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon icon-link"}})),"Props"),r(m.MDXTag,{name:"table",components:e},r(m.MDXTag,{name:"thead",components:e,parentName:"table"},r(m.MDXTag,{name:"tr",components:e,parentName:"thead"},r(m.MDXTag,{name:"th",components:e,parentName:"tr",props:{align:null}},"Prop"),r(m.MDXTag,{name:"th",components:e,parentName:"tr",props:{align:null}},"Type"),r(m.MDXTag,{name:"th",components:e,parentName:"tr",props:{align:null}},"Description"))),r(m.MDXTag,{name:"tbody",components:e,parentName:"table"},r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"isOpen")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"boolean"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Controls display status of modal")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"onClose")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"function"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Executed when modal is closed")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"bg")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"string"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Color of dialog background")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"zIndex")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"number"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"z-index of dialog")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"imgMode")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"boolean"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Add padding to the modal dialog when ",r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"true"))),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"width")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"ArrayOf.string"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Width of the modal at Design System's responsive breakpoints")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"disableCloseButton")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"ArrayOf.string"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"There will be a floating close button. When enabledOverflow = true, it's there by default.")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"enableOverflow")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"boolean"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"When enabled, the modal will extend over the screen based on content, otherwise it will follow height")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"height")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"ArrayOf.string"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Responsive height, when enableOverflow={true}, it's not in use")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"fullScreen")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"boolean"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"Dialog content should fill entire screen. Not for use with ",r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"enableOverflow"),".")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"ariaLabel")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"string"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"aria-label for the DialogContent child component. Required if ",r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"ariaLabelledBy")," is not defined")),r(m.MDXTag,{name:"tr",components:e,parentName:"tbody"},r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"ariaLabelledBy")),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"string"),r(m.MDXTag,{name:"td",components:e,parentName:"tr",props:{align:null}},"aria-labelledby for the DialogContent child component. Required if ",r(m.MDXTag,{name:"inlineCode",components:e,parentName:"td"},"ariaLabel")," is not defined")))),r(m.MDXTag,{name:"h2",components:e,props:{id:"prevent-background-scrolling"}},r(m.MDXTag,{name:"a",components:e,parentName:"h2",props:{href:"#prevent-background-scrolling","aria-hidden":"true"}},r(m.MDXTag,{name:"span",components:e,parentName:"a",props:{className:"icon icon-link"}})),"Prevent Background Scrolling"),r(m.MDXTag,{name:"p",components:e},"Use the ",r(m.MDXTag,{name:"a",components:e,parentName:"p",props:{href:"/ScrollLock"}},"ScrollLock")," helper\nto prevent the background content from scrolling when the modal is open."))}},biIG:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Modal",function(){return a("/FkY")}])}},[["biIG",0,1,2]]]);