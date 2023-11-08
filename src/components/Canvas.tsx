import React, { useEffect, useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { INote } from '../interfaces/Note'
import Note from './Note'

const Canvas = () => {
  
  const initNotes : INote[] = [
    {
      id: "1",
      title: "Note 1",
      description: "This is the first note",
      date: new Date(),
      userId: "123",
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: "2",
      title: "Note 2",
      description: "This is the second note",
      date: new Date(),
      userId: "456",
      position: {
        x: -200,
        y: 400,
      },
    },
    {
      id: "3",
      title: "Note 3",
      description: "This is the third note",
      date: new Date(),
      userId: "789",
      position: {
        x: 0,
        y: 0,
      },
    },
    ]
    const [notes, setNotes] = useState(initNotes);

  useEffect(() => {
    // const theNotes = localStorage.getItem("notes");
    // if (theNotes != "null") {
    //   setNotes(JSON.parse(theNotes));
    // }
  }, []);

  const [onDrag, setOnDrag] = useState(false);



  const handleDrag = (e: any, ui: any, id: string) => {
    setOnDrag(true);
    e.stopPropagation();
    const { x, y } = ui;
    console.log(x, y);
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          position: {
            x,
            y,
          },
        };
      }
      return note;
    }
    );
    setNotes(newNotes);
    setTimeout(() => {
      setOnDrag(false);
    }, 100);
    // localStorage.setItem("notes", JSON.stringify(newNotes));
  }
  const TransformWrapperMemoized = React.memo(TransformWrapper);
  const TransformComponentMemoized = React.memo(TransformComponent);

  return (
    <TransformWrapperMemoized
    
      limitToBounds= {false}
      minScale = {0.5}
      maxScale= {2}
      disabled= {onDrag}
      // wheel={{
      //   wheelDisabled: true,
      //   disabled: true,
      // }
      // }

      
    
  >
      <TransformComponentMemoized        wrapperClass="fixed z-10 top-0 left-0 !w-screen !h-screen  ">
    
      <div className="">

        {notes?.map((note) => (
          <Note key={note.id} note={note} handleDrag={handleDrag} />
        ))}
      
      </div>
      </TransformComponentMemoized>

  </TransformWrapperMemoized>
  )
}

export default Canvas