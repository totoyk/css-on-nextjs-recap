import Image from 'next/image'
import sozaiPic from '@public/sozai.webp'

const Recap = () => {
  return (
    <div className={`RecapContainer`}>
      <div className={`RecapPic`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic2`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic3`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic4`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic5`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic6`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic6_a`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic6_b`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic6_c`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
      <div className={`RecapPic7`}>
        <Image src={sozaiPic} alt='sozai' />
      </div>
    </div>
  )
}

export default Recap
