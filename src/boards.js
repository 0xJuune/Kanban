import List from './lists'

export default class Board {

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