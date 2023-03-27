import './App.css';
import Blog from './component/Blog/Blog';
import Mobile from './component/Mobile/Mobile';
import Todos from './component/Todos/Todos';

function App() {
  const titleStyle = {
    color: 'orange',
    textDecoration: 'underline',
    border: '2px solid white',
    borderRadius: '5px',
    padding: '10px'
  }

  return (
    <div className="App">
      <article className='blog'>
        <h2 style={titleStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus.</h2>
        <p style={{color: 'white', border: '2px solid white', borderRadius: '5px', padding: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ad vel, sunt ab eius dolorum molestiae saepe libero minima ipsa inventore dolorem eos autem veniam eligendi incidunt mollitia, consectetur assumenda quidem nobis vitae? Explicabo voluptas blanditiis modi voluptates sed minus laboriosam, reprehenderit suscipit nam a voluptatibus maiores voluptate rem nisi molestias reiciendis repellat asperiores cumque saepe corrupti obcaecati necessitatibus! Laborum omnis itaque eaque sunt atque, illo vero in soluta facere fugit sint quasi hic molestias, debitis temporibus odio sequi quisquam. Totam, quos! At veritatis odio nesciunt illum natus? Enim nemo laborum impedit culpa odit tempora alias quidem rerum animi molestiae.</p>
      </article>
      <Mobile></Mobile>
      <Blog heading="What is React?" author="Arifur"></Blog>
      <Blog heading="What is JSX?" author="Jhankar"></Blog>
      <Blog heading="What is create-react-app?" author="Abrar"></Blog>
      <Blog heading="What is Component?" author="Jamil"></Blog>
      <Blog heading="What is state?" author="Zakariah"></Blog>
      <Todos></Todos>
    </div>
  );
}

export default App;
