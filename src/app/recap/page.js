import Image from 'next/image'
import sozaiPic from '@public/sozai.jpg'

const Recap = () => {
  return (
    <div className={`RecapContainer`}>
      <Image src={sozaiPic} alt='sozai' />
    </div>
  )
}

export default Recap
