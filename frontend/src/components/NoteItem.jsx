import { useDispatch } from 'react-redux';
import { deleteNote } from '../features/notes/noteSlice';

function NoteItem({ note }) {
  const dispatch = useDispatch();

  return (
    <div className='note mb-5'>
      <p className='text-left'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </p>
      <h6 className='fw-bold'>{note.text}</h6>
      <button onClick={() => dispatch(deleteNote(note._id))} className='close'>
        X
      </button>
    </div>
  );
}

export default NoteItem;
