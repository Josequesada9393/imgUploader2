import './Dashboard.css'
import Button from '../button/Button'
import ImgDropper from '../imgDropper/ImgDropper'
type Props = {}

function Dashboard({}: Props) {
  return (

    <div className='dashboard'>
      <div className='innerElements'>
        <div className='title'>
            <p className='titleText'>Upload your image</p>
        </div>
        <div className='subtitle'>
            <p className='subtitleText'>File should be Jpeg, Png...</p>
        </div>
       <ImgDropper></ImgDropper>
        <div className='box'></div>
        <div className='optionDiv'>
            <p className='optionDivText'>Or</p>
        </div>
        <Button></Button>
        </div>
    </div>
  )
}

export default Dashboard