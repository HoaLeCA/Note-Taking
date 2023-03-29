import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

function Goalform() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createGoal({ text }));
    setText('');
  };
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>
            <b>Creat Your Note</b>
          </label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Create Note
          </button>
        </div>
      </form>
    </section>
  );
}

export default Goalform;
