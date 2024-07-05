import Form from "../Desktopweb/Form";
import Pro from '../img/mobile.png'
import'./Mobile.css'
import MobileForm from "./MobileForm";

export default function Mobile(){
    return <div className="mobile">
    <div className='mobile-content' >
        <div className='starting-test'>
            <div className="logo"></div>
             <div className="base">BASE</div>
             <div className="apparel">APPAREL</div>
        </div>
        <div className="mobile-img-container">
        <img src={Pro}/>
        </div>
        <div className='mobile-mid-test'>
            <div className="we">WE'RE</div>
            <div className="coming">COMING</div>
            <div className="soon">SOON</div>
        </div>
        <div className='mobile-lorem-ipsum-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <MobileForm/>       
        
    </div>
</div>
}