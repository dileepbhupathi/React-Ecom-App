
import "../Count/Count.css"
export const Count = ({blogPosts,counter}) => {
  // if (counter === 6){
  //   throw new Error("I Crashed")
  // }
  return (
    <>
        <span className='footer-count'>{counter} / {blogPosts.length}</span>
    </>
  )
}
