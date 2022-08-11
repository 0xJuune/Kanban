import Board from './boards'
import List from './lists'
import Task from './tasks'

export default class Kanban {
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