// import React , {useState} from 'react'
import img1 from '../image/logo192.png'

export default function AboutUs(props) {

    return (
        <div className='container' style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }}>
            <div className="media">
                <img src={img1} className="mr-3 mt-5" alt="not found" />
                <div className="media-body">
                    <h1 className="mt-0 mt-5">About Us</h1>
                    <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
                </div>
            </div>
        </div>
    )
}
