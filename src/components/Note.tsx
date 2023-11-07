import React from 'react';
import Draggable from 'react-draggable';
import { NoteProps } from '../interfaces/Note';

const Note = React.memo(({ note, handleDrag }: NoteProps) => {
  const handleOnDrag = (e: any, ui: any) => {
    e.stopPropagation();
  };

  return (
    <Draggable position={note.position} onDrag={handleOnDrag} onStop={(e, ui) => handleDrag(e, ui, note.id)}>
      <div className="relative bg-[#A2CDFF] overflow-hidden rounded-lg p-4 w-[300px]">
        <div>
          <p className='text-white text-right text-xs'>{note.date.toDateString()}</p>
        </div>
        <div >
          <h4 className='text-[#0B5BBB] font-semibold'>{note.title}</h4>
          <p className='text-sm my-4 text-muted font-light'>{note.description}</p>
        </div>
        <div className='flex justify-between text-xs font-light items-end w-full'>
          <p>Anon</p>
          <div className='bg-[#66A6F2] p-3 relative -right-4 -bottom-4 rounded-ss-lg '>
            <button className='bg-[#0B5BBB] text-white rounded-full px-2 text-xs'>Edit</button>
            23 Likes
          </div>

        </div>
      </div>
    </Draggable>
  );
});

export default Note;