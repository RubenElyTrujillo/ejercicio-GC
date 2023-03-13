import { useContext } from 'react'
import Image from 'next/image'
import { Image1, Image2, Image3, Image4 } from 'ui'
import { VideoContext } from '../../../pages/index'

export default function Sports(){
    const { videoId, setVideoId } = useContext(VideoContext)
    return(
        <section className="block sports" id="sports">
            <div className="holder">
                <div className="container-fluid">
                    <div className='title'>
                        <h2>Claro Sports En Sochi 2014</h2>
                    </div>
                    <div className='buttons'>
                        <button onClick={() => setVideoId('Zv11L-ZfrSg')} className={videoId == "Zv11L-ZfrSg" ? "active" : ""}>
                            <div className='content'>
                                <Image src={Image1} fill alt="" />
                                <div className='text'>
                                    <h3>Los Deportistas latinoamericanos que participan en Sochi 2014</h3>
                                </div>
                            </div>
                            <span>Team Latam</span>
                        </button>
                        <button onClick={() => setVideoId('bUCfv8D_hoQ')} className={videoId == "bUCfv8D_hoQ" ? "active" : ""}>
                            <div className='content'>
                                <Image src={Image2} fill alt="" />
                                <div className='text'>
                                    <h3>Los Deportistas latinoamericanos que participan en Sochi 2014</h3>
                                </div>
                            </div>
                            <span>Travel Meets Fashion</span>
                        </button>
                        <button onClick={() => setVideoId('NLTdu4XZby0')} className={videoId == "NLTdu4XZby0" ? "active" : ""}>
                            <div className='content'>
                                <Image src={Image3} fill alt="" />
                                <div className='text'>
                                    <h3>Los Deportistas latinoamericanos que participan en Sochi 2014</h3>
                                </div>
                            </div>
                            <span>Velocidad y Riesgo</span>
                        </button>
                        <button onClick={() => setVideoId('493nZgmJf1M')} className={videoId == "493nZgmJf1M" ? "active" : ""}>
                            <div className='content'>
                                <Image src={Image4} fill alt="" />
                                <div className='text'>
                                    <h3>Los Deportistas latinoamericanos que participan en Sochi 2014</h3>
                                </div>
                            </div>
                            <span>Experiencia Multimedia</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}