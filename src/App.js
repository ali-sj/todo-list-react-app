
import './App.css';
import DisplayTodo from './componets/DisplayTodo';
import Input from './componets/Input';
import { animate, motion } from 'framer-motion';


function App() {
  
  return (
    <div className="App">
      <motion.h1
      initial={{y:-200}}
      animate={{y:0}}
      transition={{duration:0.5}}
       whileHover={{scale:1.1}}>Todo App</motion.h1>
       <motion.div style={{marginLeft:'70px'}} initial={{y:800}} animate={{y:0}} transition={{type:'spring',duration:.5}}>
         <Input/>
      <DisplayTodo/>
      
       </motion.div>
      
    </div>
  );
}

export default App;
