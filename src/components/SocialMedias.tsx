

import GithubImage from '/github.svg'
import InstagramImage from '/instagram.svg'
import YoutubeImage from '/youtube.svg'
import LinkedinImage from '/linkedin.svg'

import LogoLeuzinDev from '/logo.png'


export function SocialMedias() {

    return (
        <>
            <div className='w-1/2 h-28 flex justify-center items-center gap-9 '>
                <img className='w-8' src={GithubImage}></img>
                <img className='w-8' src={InstagramImage}></img>
                <img className='w-8' src={YoutubeImage}></img>
                <img className='w-8' src={LinkedinImage}></img>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <p className='text-white text-lg'>Developed by: <u>LeuzinDev</u>

                </p>
                <img className='w-10 m-5' src={LogoLeuzinDev} />
               
            </div>
        </>

    )
}