import React, {useState} from "react";
import './Slider.css'
import Slide from "../Slide/Slide"
import Footer from "../Footer/Footer";
import { MyContext } from "../../Constants";
const Ecommerce = ({blogPosts}) =>{
    const [counter,setCounter]=useState(1);
    
    const scrollable = document.getElementsByClassName('.ul-container')


function footerBottonLeftClick(){
    console.log('click left',blogPosts.length)
    setCounter(counter === 1 ? blogPosts.length : counter-1)
    
    // if (counter >1 && counter<=blogPosts.length){
    //     setCounter(counter-1)
    //     scrollable.current.scrollBy({left: -550});
    // }
    // else if (counter === 1){
        blogPosts.unshift(blogPosts.pop())
    // }
    // if (counter >0 && counter <= blogPosts.length){
    //     scrollable.current.scrollBy({left: -550});
    //     setCounter(counter-1)
    //     // if(counter === 1) {
    //     //     blogPosts.unshift(blogPosts.pop())
    //     // }
    // }
    // else if (counter === blogPosts.length){
    //     throw new Error("I Crashed")
    // }

     
    // blogPosts.unshift(blogPosts.pop())
}
function footerBottonRightClick(){
    console.log('click right')
    setCounter(counter === blogPosts.length ? 1 : counter+1)
    blogPosts.push(blogPosts.shift())

    // if (counter >= 1){
    //     scrollable.current.scrollBy({left: 550});
    //     setCounter(counter+1)

    //     if (counter >= blogPosts.length-2)  {
    //         blogPosts.push(blogPosts.shift())
    //         // setCounter(counter+1)
    //     }
    // }
    //  if (counter>0 && counter <= blogPosts.length){
    //     scrollable.current.scrollBy({left: 550});
    //     // if (counter === blogPosts.length){
    //     //     blogPosts.push(blogPosts.shift())
    //     // }
    //     setCounter(counter+1)
    //  }
    //  else if (counter === blogPosts.length){
    //     throw new Error("I crashed")
    //  }
     
    
}

return (
<div className='slider-container'>
        <ul className='ul-container' ref={scrollable}  >
            {blogPosts.map((item)=>(
                <Slide item = {item}/>
            ))}
        </ul>
    <MyContext.Provider value={blogPosts}>
        <Footer  footerBottonLeftClick = {footerBottonLeftClick} footerBottonRightClick = {footerBottonRightClick} counter = {counter}/>
    </MyContext.Provider>
</div>
)
}
export default Ecommerce;