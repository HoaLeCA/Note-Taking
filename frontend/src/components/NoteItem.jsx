import { useDispatch } from 'react-redux';
import { deleteNote } from '../features/notes/noteSlice';

function NoteItem({ note }) {
  const dispatch = useDispatch();

  return (
    <div className='note py-2 rounded-2 p-3'>
      <p
        className='d-flex justify-content-begin fw-bold'
        style={{ fontSize: '0.8rem' }}
      >
        Created: {new Date(note.createdAt).toLocaleString('en-US')}
      </p>
      <p style={{ fontSize: '1rem' }} className='fw-light'>
        {note.text}
      </p>
      <button onClick={() => dispatch(deleteNote(note._id))} className='close'>
        X
      </button>
    </div>
  );
}

export default NoteItem;
