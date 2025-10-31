import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './CounterSlice';
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      </section>
    </div>
  );
};
export default Counter;
