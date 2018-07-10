(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{190:function(e,t,n){var l=n(1),a=n(229).default,r=n(223).default,s=(n(228).default,n(208).default),o=function(e){return l.createElement("div",e)};e.exports=function(e){e.scope;var t=e.location;return l.createElement(r,{location:t},l.createElement(a,{title:"React Widgets"}),l.createElement("div",null,l.createElement("h1",null,"Getting Started"),l.createElement("p",null,"react-widgets is a suite of high-quality input components built for React. Each component is built for ease of use, accessibility, and the practical needs of complex (or simple) forms. The work great with complex data structures and models, and in keeping with the ",l.createElement("a",{href:"http://facebook.github.io/react/docs/forms.html#controlled-components"},"React approach")," to form inputs, each component's props can easily be ",l.createElement("a",{href:"/react-widgets/controllables/"},l.createElement("em",null,"controlled")," or ",l.createElement("em",null,"uncontrolled")),"."),l.createElement("p",null,"A special shout-out to Kendo UI Core, and jQuery UI, whose original work inspired this suite."),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-sm-6"},l.createElement("h4",null,"Install: npm (recommended)"),l.createElement("pre",null,l.createElement("code",null,"npm install react-widgets --save"))),l.createElement("div",{className:"col-sm-6"},l.createElement("h4",null,"bower"),l.createElement("pre",null,l.createElement("code",null,"bower install react-widgets --save")))),l.createElement("p",null,"The npm build offers an additional advantage of allowing you to only require the individual widgets allowing code bundlers like webpack and Browserify to only package up the pieces you use, saving you bytes."),l.createElement("h2",null,"Setup"),l.createElement("p",null,"Stylesheets, images, and fonts are found in the ",l.createElement("code",null,"dist")," directory. You can use webpack to ",l.createElement("code",null,"require()")," the styles, or include the css normally. The included icons are provided by - ",l.createElement("a",{href:"http://fontawesome.io"},"Font Awesome by Dave Gandy")),l.createElement(s,null,l.createElement(o,{title:"webpack"},"\n// Add the css styles...\nimport 'react-widgets/dist/css/react-widgets.css';\n\n// ...Or if you prefer to use the Less or Sass files directly\n// import 'react-widgets/lib/less/react-widgets.less';\n// import 'react-widgets/lib/scss/react-widgets.scss';\n\nimport { render } from 'react-dom';\nimport DropdownList from 'react-widgets/lib/DropdownList';\n\nrender(<DropdownList />, document.getElementById('app-root'))\n"),l.createElement(o,{title:"browser globals"},'\n    <link href="dist/css/react-widgets.css" rel="stylesheet"/>\n\n    <script src="http://fb.me/react-15.5.5.js"><\/script>\n    <script src="http://fb.me/react-dom-15.5.0.js"><\/script>\n    <script src=\'node_modules/react-widgets/dist/react-widgets.js\'><\/script>\n    <script>\n      var DropdownList = ReactWidgets.DropDownlist;\n\n      ReactDOM.render(<DropdownList/>, document.getElementById(\'app-root\'))\n    <\/script>\n    ')),l.createElement("blockquote",null,l.createElement("p",null,l.createElement("strong",null,"Hey!")," Date and number components need a ",l.createElement("em",null,"Localizer")," configured in order to work! Check out the ",l.createElement("a",{href:"../localization/"},"Localization page")," for more information.")),l.createElement("p",null,"If are using webpack to handle styles in your application you are probably already configured loaders to make it work with appropriate file extensions. If not, you will have to use the ",l.createElement("code",null,"css-loader"),", ",l.createElement("code",null,"style-loader"),", ",l.createElement("code",null,"url-loader")," and, optionally, the ",l.createElement("code",null,"less-loader")," or",l.createElement("code",null,"scss-loader"),"."),l.createElement("p",null,"Here's a common configuration:"),l.createElement("pre",{className:"pg-code-section"},l.createElement("code",{className:"language-js"},"module: ","{","\n","  ","loaders: [","\n","    ","// for good ol' css","\n","    ","{"," test: /\\\\.css$/, use: ['style-loader', 'css-loader'] ","}",",","\n","    ","// OR if using less","\n","    ","{"," test: /\\\\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] ","}",",","\n","    ","// OR if using scss","\n","    ","{"," test: /\\\\.scss$/, use: ['style-loader', 'css-loader', 'scss-loader'] ","}",",","\n","\n","    ","// images and fonts","\n","    ","{","\n","      ","test: /\\\\.(gif|ttf|eot|svg|woff2?)$/,","\n","      ","use: 'url-loader?name=[name].[ext]',","\n","    ","}",",","\n","  ","]","\n","}","\n")),l.createElement("p",null,"When using Less or Sass, you'll need to help webpack find the font and image folders. Override corresponding variables from ",l.createElement("code",null,"variables")," file."),l.createElement(s,null,l.createElement(o,{title:"Sass",lang:"scss"},"\n$font-path: '~react-widgets/lib/fonts';\n$img-path: '~react-widgets/lib/img';\n\n@import '~react-widgets/lib/scss/react-widgets';\n"),l.createElement(o,{title:"Less",lang:"less"},"\n    @import '~react-widgets/lib/less/react-widgets';\n\n    @font-path: '~react-widgets/lib/fonts';\n    @img-path:  '~react-widgets/lib/img';\n    ")),l.createElement("h2",null,"Accessibility and Read Direction"),l.createElement("p",null,"React-widgets tries to be as inclusive and wide reaching as possible. Along with an included solution for date and number localization, there is first class support for cultures and languages that read right to left (with the ",l.createElement("code",null,"isRtl")," prop)."),l.createElement("p",null,"Each widget also has appropriate ARIA roles and attributes for the benefit of screen readers and visually impaired users. Keyboard-only navigation of widgets is also supported, for those who prefer to not, or cannot use a mouse. To help ensure maximum accessibility, every widget should have an ",l.createElement("code",null,"id")," attribute. If you do not wish to provide an id attribute, the component will generate the necessary id's to properly label and annotate the widget ARIA."),l.createElement("blockquote",null,l.createElement("p",null,l.createElement("strong",null,"Note:")," Because of how server-side rendering works, using auto generated ",l.createElement("code",null,"id"),"s may cause checksum mismatches. Always provide ",l.createElement("code",null,"id")," props to your components to avoid this possible pitfall."))))}},207:function(e,t,n){var l=n(239),a=l.highlight,r=l.languages;n(238),n(237),n(236),n(235),n(234),n(233),n(232),e.exports=function(e,t){return void 0===t&&(t="jsx"),a(e,r[t]||r.text)}},208:function(e,t,n){"use strict";n.r(t);var l=n(193),a=n(1),r=n.n(a),s=n(241),o=n.n(s),c=n(240),i=n.n(c),d=n(207),u=n.n(d),m=0;t.default=function(e){var t=e.children;return r.a.createElement(o.a,{defaultActiveKey:0,id:"tab-code-block-"+m++},r.a.Children.map(t,function(e,t){var n,a=e.props;return r.a.createElement(i.a,{title:a.title,eventKey:t},r.a.createElement("pre",{className:"pg-code-section"},r.a.createElement("code",{dangerouslySetInnerHTML:{__html:u()(Object(l.a)([(n=a.children,n.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'"))]),a.lang||"jsx")}})))}))}}}]);
//# sourceMappingURL=component---src-pages-index-md-f3f0c1b709ca52276f2b.js.map