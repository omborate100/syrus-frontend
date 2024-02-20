import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Adulam'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert("Let's ignite portfolio", 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
          Empower Your Finance <br />
            <span className="text-gradient">DeFi</span> 
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
          Secure, innovate, and revolutionize your Assets 
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={onMintNFT}
          >
            Welcome to our Bank
          </button>

          
           <br />
           <br />
           <br /><br /><br />

          <p className="text-white text-sm font-medium text-center">
            DeFi is redefining banking by eliminating intermediaries, offering unparalleled transparency and security. 
            <br></br>With DeFi, experience a world where banking is boundless, efficient, and truly democratized
          </p>
          <br /><br />
          <ul className="flex flex-row justify-center space-x-2 items-center my-4">
            
            
              
            
              
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
