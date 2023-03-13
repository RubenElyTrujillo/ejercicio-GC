import Image from 'next/image'
import { LogoSochi, Mobile, Facebook, Twitter, Youtube } from 'ui'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="holder">
                <div className="container-fluid">
                    <div className="aviso">
                        <span>Aviso de privacidad / Contacto</span>
                    </div>
                    <div className="logo">
                        <Image src={LogoSochi} fill alt='' />
                    </div>
                    <div className="redes">
                        <a href="">
                            <Image src={Mobile} fill alt='' />
                        </a>
                        <a href="">
                            <Image src={Twitter} fill alt='' />
                        </a>
                        <a href="">
                            <Image src={Facebook} fill alt='' />
                        </a>
                        <a href="">
                            <Image src={Youtube} fill alt='' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}