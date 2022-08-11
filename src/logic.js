import Kanban from './kanban'
import Board from './boards'
import List from './lists'
import Task from './tasks'



console.log('Too bad, no localStorage for us')

if (storageAvailable('localStorage')) {
    console.log('Yippee! We can use localStorage awesomeness')
  }
  else {
    console.log('Too bad, no localStorage for us')
  }
