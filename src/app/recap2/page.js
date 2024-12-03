import Image from 'next/image'
import sozaiPic from '@public/sozai.webp'

const Recap2 = () => {
  return (
    <div className={`RecapContainer`}>
      <h2 className={`Heading1`}>採用情報について</h2>
      <h2 className={`Heading2`}>採用情報について</h2>
      <h2 className={`Heading3`} data-en={'Recruit'}>
        <span>採用情報について</span>
      </h2>
      <h2 className={`Heading4`} data-number={'01'}>
        <span>採用情報について</span>
      </h2>
      <p className='TextMargin'>
        強調したいテキストに<span className='Emphasis1'>マークをつけること</span>ができます
      </p>
      <p className='TextMargin'>
        強調したいテキストに<span className='Emphasis2'>マークをつけること</span>ができます
      </p>
    </div>
  )
}

export default Recap2
