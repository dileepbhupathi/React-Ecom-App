import "../Footer/Footer.css"
import { Count } from "../Count/Count";
import { MyContext } from "../../Constants";
const Footer = ({counter,footerBottonRightClick,footerBottonLeftClick}) => {
  return (
    <div className='footer-container'>
        <div>
          <MyContext.Consumer >
            {blogPosts => (
                <Count counter = {counter} blogPosts = {blogPosts}/>
            )}
          </MyContext.Consumer>
            
        </div>
          <div className="footer-bottons">
              <button className ='footer-botton-left' onClick={footerBottonLeftClick}></button>
              <button className ='footer-botton-right' onClick={footerBottonRightClick}></button>
          </div>
        
    </div>
  )
}

export default Footer;
