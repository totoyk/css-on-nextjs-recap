import Image from 'next/image'
import sozaiPic from '@public/sozai.webp'

const Recap4 = () => {
  return (
    <div className={`RecapContainer`}>
      <div className='menu'>
        <ul>
          <li>
            <a href=''>
              <span>About</span>私たちについて
            </a>
          </li>
          <li>
            <a href=''>
              <span>Service</span>サービス
            </a>
          </li>
          <li>
            <a href=''>
              <span>Price</span>料金
            </a>
          </li>
          <li>
            <a href=''>
              <span>Contact</span>お問い合わせ
            </a>
          </li>
        </ul>
      </div>

      <div className='wrap'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='item'>
            <Image src={sozaiPic} alt='sozai' />
            <h2 className='CardLabelText'>横並び見出し</h2>
            <p className='CardDescription'>横並びレイアウトをFlexboxで実装します。</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recap4
