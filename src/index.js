import { Dom } from './domMicroFramework.js'
import { Ui } from './ui'
import Kanban from './kanban'
import Board from './boards'
import List from './lists'
import Task from './tasks'

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

