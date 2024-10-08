import { useContext } from 'react';
import {LoginStatus} from './auth';
import TasksContext from './tasks/taskContext';
import useCounterStore from './counter/store';
import Counter from './counter/Counter';

const NavBar = () => {

  const {tasks} =  useContext(TasksContext);
  const {counter} = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      {/* <LoginStatus /> */}
      <Counter />
    </nav>
  );
};

export default NavBar;
