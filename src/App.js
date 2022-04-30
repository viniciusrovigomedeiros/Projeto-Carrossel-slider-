import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/list1.json')
    .then((response) => response.json())
    .then(setData);
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if (!data || !data.length) return null;
  
  return (
    <div className='container'>
      <h1 className='h1'>Lançamentos</h1>
            <div className='carousel' ref={carousel}>
              {data.map((item) => {
                const {id, image} = item;
                return (
                  <div className='item' key={id}>
                    <div className='image'>
                        <img src= {image} />
                    </div>
                </div>
                );
                })}
            </div>
{/* botao */}
            <div className='buttons'>
                <button onClick={handleLeftClick}>
                  <img src='/static/images/216151_right_chevron_icon.png' alt='Left'/>
                  </button>
                <button onClick={handleRightClick}>
                  <img src='/static/images/216151_right_chevron_icon.png' alt='Right'/>
                  </button>
            </div>
{/* botao */}

        </div>
        
    );

    
}




export default App;