import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    return(
    <>
     <div className='divBot'>
        <button onClick={()=>navigate('/bot')}>Bot</button>
       </div>
    </>
    )
}
export default Home