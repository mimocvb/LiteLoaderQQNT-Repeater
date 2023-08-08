// 运行在 Electron 渲染进程 下的页面脚本

const plusIconLight = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="one-plus">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#00c6ff" stroke-width="1"></circle>
        <g transform="translate(12, 12) scale(0.8) translate(-12, -12)">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08z" fill="#00c6ff" class="color000000 svgShape"></path>
        </g>
    </svg>
`;

const plusIconStyle = `
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 4px;
`;

// 页面加载完成时触发
function onLoad() {
    window.addEventListener('DOMNodeInserted', (event) => {

        const addedNode = event.target;

        if (addedNode.classList && addedNode.classList.contains('ml-item')) {
            if (addedNode.querySelector('.container--self') !== null || 
            addedNode.querySelector('.msg-content-container') === null) return;

            var wrapper = addedNode.querySelector('.message-content__wrapper');

            const plusDiv = document.createElement('div');
            plusDiv.id = "mimo_repeater_btn";
            plusDiv.setAttribute('msgID', addedNode.id);
            plusDiv.setAttribute('style', plusIconStyle);
            plusDiv.innerHTML = plusIconLight;
            plusDiv.addEventListener('click', async () => {
                const msgID = plusDiv.getAttribute('msgID');
                const peer = await window.LLAPI.getPeer()
                await window.LLAPI.forwardMessage(peer, peer, [msgID])
            });

            wrapper.appendChild(plusDiv);
        }
    });
}


// 打开设置界面时触发
function onConfigView(view) {

}


// 这两个函数都是可选的
export {
    onLoad
}
