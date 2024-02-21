import { GrAdd } from "react-icons/gr";

const AddTask = () => {
  return (
    <div>
      <button className='btn btn-primary w-full'>Add New task<GrAdd className='ml-2' size={18}/></button>
    </div>
  )
}

export default AddTask
