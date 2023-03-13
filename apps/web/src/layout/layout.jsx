import Head from 'next/head'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/navbar'

export default function Layout({ children }){
    return(
        <>
            <Head>
                <title>Ejercisio</title>
            </Head>
            <div className='outer-wrapper'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}