const Dom = (() => {
    const createDiv = document.createElement('div');
    const selectTab = document.querySelectorAll('.tab');

    function makeWordElement(tag, text, nameClass, parent) {
        let make = document.createElement(tag);
        let words = document.createTextNode(text);
        let a = document.querySelector(parent);
        make.appendChild(words);
        make.className = nameClass;
        a.appendChild(make)
    }

    function makeContainerElement(id, parent) {
        let make = document.createElement('div');
        let a = document.querySelector(parent)
        make.id = id;
        a.appendChild(make)
    }

	return {
        makeWordElement,
        makeContainerElement,
    }
})();

export { Dom };