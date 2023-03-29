import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className='goal mb-5'>
      <p className='text-left'>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </p>
      <h6 className='fw-bold'>{goal.text}</h6>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  );
}

export default GoalItem;
