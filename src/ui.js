import { Dom } from './domMicroFramework.js'
import Kanban from './kanban'
import Board from './boards'
import List from './lists'
import Task from './tasks'


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

  export { Ui };