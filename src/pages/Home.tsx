import React from 'react'
import AddProblem from '../components/AddProblem'
import Navbar from '../components/Navbar'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Note from '../components/Note'
import Canvas from '../components/Canvas'

const Home = () => {
    const placeNote = (x: number, y: number) => {
        console.log(x, y)
    }
  
    return (
            <div>
                <Navbar />
                <AddProblem />
                <Canvas/>

            </div>


    )
}

export default Home