// 运行在 Electron 渲染进程 下的页面脚本

const plusIconLight = `
<svg t="1691479641988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8577" width="22" height="22"><path d="M464 696.32l2.08 128-121.12-41.44L224 824.32l0.96-56.32a256 256 0 0 0 247.68-194.88l68.16 20.96z" fill="#FDA736" p-id="8578"></path><path d="M472.64 573.12A256 256 0 0 1 224.96 768l1.12-71.68c-24.16-32-8-10.56-76.8-102.24L272 556.48l73.44-104.64c50.72 72.16 34.08 48 73.6 104.64z" fill="#FED370" p-id="8579"></path><path d="M344.96 800c-124.8 42.72-121.12 44.16-130.4 37.44s-6.72 0-4.64-135.68c-77.6-103.36-80-101.44-75.84-112s-2.4-6.4 128-46.4L272 528a16 16 0 0 1 26.24 18.56c-21.12 29.92 0 18.24-122.24 55.84 67.52 89.6 66.56 86.08 66.4 93.92L240 801.76 339.84 768c7.2-2.4 3.04-2.4 109.92 34.08v-17.44a16 16 0 0 1 32 0c0 41.12 2.88 48-5.92 53.6s-5.92 4.32-130.88-38.24zM448 720c0-37.12-10.88-15.04 66.08-117.44-107.36-33.12-104.48-30.72-108.96-37.12L344.96 480l-10.24 14.72a16 16 0 0 1-26.24-18.24c42.88-61.44 28.32-64 120 66.56l116.96 36a16 16 0 0 1 8.16 24.96l-73.6 97.6V720a16 16 0 0 1-32 0z" fill="#35214C" p-id="8580"></path><path d="M864 704a16 16 0 0 0-16-16 16 16 0 0 1 0-32 16 16 0 0 0 16-16 16 16 0 0 1 32 0 16 16 0 0 0 16 16 16 16 0 0 1 0 32 16 16 0 0 0-16 16 16 16 0 0 1-32 0z" fill="#FD7504" p-id="8581"></path><path d="M144 336a16 16 0 0 0-16-16 16 16 0 0 1 0-32 16 16 0 0 0 16-16 16 16 0 0 1 32 0 16 16 0 0 0 16 16 16 16 0 0 1 0 32 16 16 0 0 0-16 16 16 16 0 0 1-32 0z" fill="#FD8F07" p-id="8582"></path><path d="M432 432a16 16 0 0 1-11.68-27.04l272-288a16 16 0 0 1 23.36 22.08C421.6 450.24 442.08 432 432 432zM624 464a16 16 0 0 1-11.36-27.36l144-144a16 16 0 0 1 22.72 22.72C624 471.52 633.44 464 624 464zM576 512a16 16 0 0 1-11.36-27.36l16-16a16 16 0 0 1 22.72 22.72C586.4 508.32 584.32 512 576 512zM848 432a16 16 0 0 1-11.36-27.36l56-56a16 16 0 0 1 22.72 22.72C855.2 432 856.96 432 848 432zM560 720a16 16 0 0 1-11.36-27.36l208-208a16 16 0 0 1 22.72 22.72C553.92 732.64 569.44 720 560 720zM272 416a16 16 0 0 1-11.36-27.36l176-176a16 16 0 0 1 22.72 22.72C267.84 426.72 281.44 416 272 416zM208 480a16 16 0 0 1-11.36-27.36l16-16a16 16 0 0 1 22.72 22.72C218.4 476.32 216.32 480 208 480z" fill="#68539B" p-id="8583"></path><path d="M752 720a16 16 0 0 1-32 0 16 16 0 0 1 32 0zM672 272a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="8584"></path><path d="M784 176a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FDA736" p-id="8585"></path><path d="M320 272a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FED370" p-id="8586"></path><path d="M880 288a16 16 0 0 1-32 0 16 16 0 0 1 32 0zM160 704a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="8587"></path><path d="M944 496a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FED370" p-id="8588"></path><path d="M384 896a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="8589"></path><path d="M368 128a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD7504" p-id="8590"></path><path d="M144 480a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FED370" p-id="8591"></path><path d="M640 832v-16a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0zM704 880h-16a16 16 0 0 1 0-32h16a16 16 0 0 1 0 32zM624 880h-16a16 16 0 0 1 0-32h16a16 16 0 0 1 0 32zM640 912v-16a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0z" fill="#FDA736" p-id="8592"></path><path d="M496 96V80a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0zM560 144h-16a16 16 0 0 1 0-32h16a16 16 0 0 1 0 32zM480 144h-16a16 16 0 0 1 0-32h16a16 16 0 0 1 0 32zM496 176v-16a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0z" fill="#FED370" p-id="8593"></path></svg>
`;

const plusIconStyle = `
    cursor: pointer;
    display: flex;
    grid-row-start: content;
    grid-column-start: right;
    grid-row-end: right;
    grid-column-end: content;
    width: 28px;
    align-items: center;
    padding-left: 6px;
`;

// 页面加载完成时触发
function onLoad() {
    window.addEventListener('DOMNodeInserted', (event) => {

        const addedNode = event.target;

        if (addedNode.classList && addedNode.classList.contains('ml-item')) {
            if (addedNode.querySelector('.container--self') !== null || 
                addedNode.querySelector('.ptt-message') !== null ||
                addedNode.querySelector('.msg-content-container') === null) return;

            var wrapper = addedNode.querySelector('.message-container');

            const plusDiv = document.createElement('div');
            plusDiv.id = "mimo_repeater_btn";
            plusDiv.setAttribute('msgID', addedNode.id);
            plusDiv.setAttribute('style', plusIconStyle);
            plusDiv.innerHTML = plusIconLight;
            plusDiv.addEventListener('click', async () => {
                if (addedNode.querySelector('.message-content-recalled') !== null) return;
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
