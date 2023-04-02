import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Noteform from '../components/Noteform';
import Spinner from '../components/Spinner';
import NoteItem from '../components/NoteItem';
import { getNotes, reset } from '../features/notes/noteSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { notes, isLoading } = useSelector((state) => state.notes);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(getNotes());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name} </h1>
        <p className='fs-5'>Note Dashboard</p>
      </section>
      <div className='content'>
        <section className=''>
          {notes.length > 0 ? (
            <div>
              {notes.map((note) => (
                <NoteItem key={note._id} note={note} />
              ))}
            </div>
          ) : (
            <h3 className='fs-5'>You have not set any notes yet.</h3>
          )}
        </section>
      </div>

      <Noteform />
    </>
  );
}

export default Dashboard;
