import React from 'react'
import add from '../assets/svg/add.svg'
const AddProblem = () => {

    const [open, setOpen] = React.useState(false)

    const [problem, setProblem] = React.useState({
        title: '',
        description: '',
        you: 'Anon.',
        color: 'pjBlue'

    })

    const handleOpenAdd = () => {
        setOpen(!open)
    }
    const handleColorClick = (color) => {
        setProblem({ ...problem, color: color })
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target
        setProblem({ ...problem, [id]: value })
    }
    const colors = ['pjBlue', 'pjGreen', 'pjPurple', 'pjPink', 'pjOrange']
    return (
        <>
            <div className={` w-3/12 flex flex-col justify-end  z-50 fixed ease-in duration-300 bottom-0 right-0 ${open ? 'items-start ' : 'items-end'}`}>
                <div className={`w-full  mt-10 relative z-50  bg-white border border-black rounded-l-3xl  justify-between items-center py-2  px-4 ${open ? 'flex ' : 'hidden'}`}>

                    <form className='w-full flex flex-col gap-4' action="">
                        <div className='border border-black rounded-xl px-3 pt-1 pb-2'>
                            <label htmlFor="title" className='text-left block font-light text-xs'>Problem Title</label>
                            <input id='title' onChange={handleInputChange} type="text" className='w-full  outline-none' placeholder='Add a problem' value={problem.title} />
                        </div>
                        <div className='border border-black rounded-xl px-3 pt-1 pb-2'>
                            <label htmlFor="description" className='text-left block font-light text-xs'>Problem Description</label>
                            <textarea id='description' onChange={handleInputChange} className='w-full  outline-none' placeholder='Add a problem' value={problem.description} />
                        </div>
                        <div className='border border-black rounded-xl px-3 pt-1 pb-2'>
                            <label htmlFor="you" className='text-left block font-light text-xs'>You?</label>
                            <input id='you' type="text" onChange={handleInputChange} className='w-full  outline-none' placeholder='You?' value={problem.you} />
                        </div>

                        <div className='border flex justify-between gap-2 items-center border-black rounded-full px-3 py-2'>
                            {
                                colors.map((color) => (
                                    <div onClick={() => handleColorClick(color)} className={`w-10 duration-200 ease-out  h-10 rounded-full bg-${color} ${problem.color == color && 'flex-1'}`}>

                                    </div>
                                ))
                            }
                        </div>
                        <button>Create</button>

                    </form>

                </div>
                <button onClick={handleOpenAdd} className={`w-20 border-black bg-white h-20 border flex items-center justify-center rounded-full relative z-50 -top-10  -left-10 ${open && 'bg-primary rotate-45 	'}`}><img src={add} /></button>

            </div>
        </>

    )
}

export default AddProblem