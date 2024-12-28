import { useState } from 'react'
import './App.css'
import { Field } from './components/Field'
import { Robot } from './components/Robot'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex' }}> 
          <div id='controls'>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </div>
          <div id='field'>
            <Field robotX={0} robotY={0}> <Robot /> </Field>
          </div>
        </div>
      </DndProvider>
    </>
  )
}

export const ItemTypes = {
  ROBOT: 'robot'
}

export default App
