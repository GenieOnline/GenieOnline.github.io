function copyCode() {
    const codeBlock = document.getElementById('code-block');
    const codeText = codeBlock.textContent.trim(); // 去掉多余空格

    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('代码已复制到剪贴板');
}
