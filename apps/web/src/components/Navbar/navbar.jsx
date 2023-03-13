import Image from 'next/image'
import { LogoClaro, LogoSochi } from 'ui'

export default function Navbar(){
    return(
        <div className="navigation">
            <div className="holder">
                <div className="container-fluid">
                    <div className='logo-sochi'>
                        <Image src={LogoSochi} fill alt='Logo sochi.ru' />
                    </div>
                    <div className='logo-claro'>
                        <Image src={LogoClaro} fill alt='Logo claro sports' />
                    </div>
                </div>
            </div>
        </div>
    )
}