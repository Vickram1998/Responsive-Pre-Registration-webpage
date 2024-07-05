import Form from "./Form";
import Pro from '../img/pro.jpg'
import './Desktop.css'

export default function Desktop(){
    return <div className="content">
        <div className='desktop-layout' >
        <div className='text-area'>
            <div className='starting-test'>
                <div className="logo"></div>
                 <div className="base">BASE</div>
                 <div className="apparel">APPAREL</div>
            </div>
            <div className='mid-test'>
                <div className="we">WE'RE</div>
                <div className="coming">COMING</div>
                <div className="soon">SOON</div>
            </div>
            <div className='lorem-ipsum-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <Form/>
            
        </div>
        <div className="img-container">
            <img src={Pro} alt="model"/>
        </div>

        </div>
    </div>
}