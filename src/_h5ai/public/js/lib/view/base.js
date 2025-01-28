const {dom} = require('../util');

const SEL_ROOT = 'body';
const TPL_TOPBAR =
        `<div id="topbar">
            <div id="toolbar"></div>
            <div id="flowbar"></div>
            <a id="backlink" href="https://ko-fi.com/littlelilycat" target="_blank" title="Tip me on Ko-Fi !!">
                <div>Support</div>
                <div>My Work</div>
            </a>
        </div>`;
const TPL_MAINROW =
        `<div id="mainrow">
            <div id="content"></div>
        </div>`;

const init = () => {
    const $root = dom(SEL_ROOT)
        .attr('id', 'root')
        .clr()
        .app(TPL_TOPBAR)
        .app(TPL_MAINROW);

    return {
        $root,
        $topbar: $root.find('#topbar'),
        $toolbar: $root.find('#toolbar'),
        $flowbar: $root.find('#flowbar'),
        $mainrow: $root.find('#mainrow'),
        $content: $root.find('#content')
    };
};

module.exports = init();
