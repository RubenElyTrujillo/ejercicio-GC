import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { Background } from 'ui'
import YouTube from 'react-youtube';
import { VideoContext } from '../../../pages/index'

export default function Cover(){
    const [timeLeft, setTimeLeft] = useState({});
    const { videoId } = useContext(VideoContext)
    useEffect(() =>{
        // Obtener la fecha actual
        const now = new Date();
        // Crear una fecha para el 1 de diciembre de 2022
        const target = new Date('2023-12-1');

        const interval = setInterval(() => {
            const difference = target.getTime() - now.getTime();

             // Calcular los días restantes
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));

            // Calcular las horas restantes
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

            // Calcular los minutos restantes
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            // Calcular los segundos restantes
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Actualizar el estado con el tiempo restante
            setTimeLeft({ days, hours, minutes, seconds });

            // Actualizar la fecha actual para el siguiente intervalo
            now.setSeconds(now.getSeconds() + 1);

        }, 1000)
        return () => clearInterval(interval);
    }, [])

    return(
        <section className="block cover" id="cover">
            <div className='background'>
                <Image src={Background} fill alt='background' />
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='title'>
                        <h1>Faltan</h1>
                    </div>
                    <div className='count'>
                        <div className='time'>
                            {timeLeft.days}
                            <span>Días</span>
                        </div>
                        <div className='time'>
                            {timeLeft.hours}
                            <span>Hrs</span>
                        </div>
                        <div className='time'>
                            {timeLeft.minutes}
                            <span>Min</span>
                        </div>
                        <div className='time'>
                            {timeLeft.seconds}
                            <span>Seg</span>
                        </div>
                    </div>
                    <div className='video'>
                        <YouTube videoId={videoId} className='youtube' />
                    </div>
                </div>
            </div>
        </section>
    )
}