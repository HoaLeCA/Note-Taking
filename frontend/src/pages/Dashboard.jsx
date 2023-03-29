import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Goalform from '../components/Goalform';
import Spinner from '../components/Spinner';
import GoalItem from '../components/GoalItem';

import { getGoals, reset } from '../features/goals/goalSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading } = useSelector((state) => state.goals);
  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }
    if (!user) {
      navigate('/login');
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]); //, isError, message

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
          {goals.length > 0 ? (
            <div>
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </div>
          ) : (
            <h3 className='fs-5'>You have not set any notes</h3>
          )}
        </section>
      </div>

      <Goalform />
    </>
  );
}

export default Dashboard;
