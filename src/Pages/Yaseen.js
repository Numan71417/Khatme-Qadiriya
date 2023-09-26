import data from '../Data'
import yaseenAudio from '../assets/audio/yaseen.m4a'
import Header from '../components/Header'

const Yaseen = () => {
   

  return (
    <div className='yaseen-cont'>

        <Header audio={yaseenAudio} head={'سورة يٰسٓ 20 '} navl='p19' navr='qaseeda'/>

                    <br />
        <h3>اَعُوْذُ بِاللّٰہِ مِنَ الشَّیْطٰنِ الرَّجِیْمِ</h3>
        <hr />
        <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ</h3>
        <hr />
                <br />
        <p>
        {data[0].yaseen1}
        {data[0].yaseen2}
        {data[0].yaseen3}
        {data[0].yaseen4}
        {data[0].yaseen5}
        </p>  
    </div>
  )
}

export default Yaseen
