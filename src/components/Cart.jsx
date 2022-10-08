import CourseList from './CourseList';
import './Cart.css';

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>No courses selected</h2>
    //   : console.log(selected)
      : <>
      <h2>Selected Classes</h2>
        {selected.map(([id, course]) =>
        <div key={id}>
            <div>
                <div>
                    <h5>{course.term} CS{course.number}</h5>
                    <p>{course.title}</p>
                </div>
                <div>
                    <p>{course.meets}</p>
                </div>
            </div>
        </div>)}
        </> 
    }
  </div>
);

export default Cart;