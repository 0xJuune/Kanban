export default class Task {

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