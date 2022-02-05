const makeBigger = () => {
   content = document.querySelector('.content');
   h1 = document.querySelector('h1');
   contentStyle = window.getComputedStyle(content, null).getPropertyValue('font-size');
   h1Style = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   contentFontSize = parseFloat(contentStyle);
   h1FontSize = parseFloat(h1Style)
   content.style.fontSize = (contentFontSize + 10) + 'px';
   h1.style.fontSize = (h1FontSize + 10) + 'px';
};

const makeSmaller = () => {
   content = document.querySelector('.content');
   h1 = document.querySelector('h1');
   contentStyle = window.getComputedStyle(content, null).getPropertyValue('font-size');
   h1Style = window.getComputedStyle(h1, null).getPropertyValue('font-size');
   contentFontSize = parseFloat(contentStyle);
   h1FontSize = parseFloat(h1Style)
   content.style.fontSize = (contentFontSize - 10) + 'px';
   h1.style.fontSize = (h1FontSize - 10) + 'px';
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

