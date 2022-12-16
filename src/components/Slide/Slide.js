import "../Slide/Slide.css";

 const Slide = ({item}) => {

  return (
    <>
      <li className='slide-container' key = {item.id} >
         <figure className="figure-container">
          <img className='slide-image' src={item.image} alt=''/>
          <figurecaption className='slide-paragraph'>{item.name}</figurecaption>
        </figure>

        </li>
    </>
            
  )
}
export default Slide;