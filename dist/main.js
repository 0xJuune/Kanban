/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/domMicroFramework.js
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


;// CONCATENATED MODULE: ./src/ui.js







const Ui = (() => {
    const updateBoardList = (kanbanObject) => {
        kanbanObject.getBoards().forEach(e => Dom.makeWordElement(
            'div', e.getName(), 'boardTitleSubheader', '#sidebarItemContainer'))
        // add event to div. (add id )
    }

    const removeBoardList = () => {
      const boardList = document.querySelectorAll('.boardTitleSubheader')
      // if (boardList) {
      //   boardList.forEach().remove()
      // }
      boardList.forEach((e) => e.remove())
    }

    // const name = () => ;

    return {
      updateBoardList,
      removeBoardList
    };
  })();

  
;// CONCATENATED MODULE: ./src/tasks.js
class Task {

    constructor(name, dueDate = 'No date') {
      this.name = name
      this.dueDate = dueDate
      this.content = content
    }
  
    setName(name) {
      this.name = name
    }
  
    getName() {
      return this.name
    }
  
    setDate(dueDate) {
      this.dueDate = dueDate
    }
  
    getDate() {
      return this.dueDate
    }

    setContent(content) {
      this.content = content
    }

    getContent() {
      return this.content
    }

  }
;// CONCATENATED MODULE: ./src/lists.js


class List {

    constructor(name) {
        this.name = name
        this.tasks = []
    }


    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }

    addTask(newTask) {
        if (this.tasks.find((task) => task.getName() === newTask.name)) return
        this.tasks.push(new Task(`${newTask}`))
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName)
    }


}
;// CONCATENATED MODULE: ./src/boards.js


class Board {

    constructor(name) {
        this.name = name
        this.lists = []
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setLists(lists) {
        this.lists = lists
    }

    getLists() {
        return this.lists
    }

    getList(listName) {
        return this.lists.find((list) => list.getName() === listName)
    }

    addList(newList) {
        if (this.lists.find((list) => list.getName() === newList.name)) 
            return this.lists.push(new List(`${newList}`))
    }

    deleteList(listName) {
        this.lists = this.lists.filter((list) => list.name !== listName)
    }





}
;// CONCATENATED MODULE: ./src/kanban.js




class Kanban {
    constructor(name) {
        this.name = name
        this.boards = []
        // this.boards.push(new Board('First KanBan'))
        // this.boards.push(new Board('Second KanBan'))
    }

    setBoards(boards) {
        this.boards = boards
    }

    getBoards() {
        return this.boards
    }

    getBoard(boardName) {
        return this.boards.find((board) => board.getName() === boardName)
    }
    
    contains(boardName) {
        return this.boards.some((board) => board.getName() === boardName)
    }

    addBoard(newBoard) {
        if (!this.boards.find((e) => e.name === newBoard))
            return this.boards.push(new Board(`${newBoard}`))
    }

    deleteBoard(boardName) {
        const boardToDelete = this.boards.find((board) => board.getName() === boardName)
        this.boards.splice(this.boards.indexOf(boardToDelete), 1)
    }

}
;// CONCATENATED MODULE: ./src/index.js







const kanbanStorageObject = new Kanban('store');
const addProjectButton = document.getElementById('addProject')
const byeProjectButton = document.getElementById('byeProject') //use later for selecting individual project deletion


kanbanStorageObject.addBoard('jon\'s board')

console.log(kanbanStorageObject.getBoards())

let testLoop = () => {
    Ui.removeBoardList()
    kanbanStorageObject.addBoard(`Board two`);
    console.log(kanbanStorageObject.getBoards())
    Ui.updateBoardList(kanbanStorageObject);
}

let testLoop2 = () => {
    Ui.removeBoardList()
    console.log('attempted')
}

addProjectButton.addEventListener('click', testLoop)
byeProjectButton.addEventListener('click', testLoop2)


//add board

//refresh ui list
// Ui.updateBoardList(kanbanStorageObject);


/******/ })()
;