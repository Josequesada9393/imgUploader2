import './Loading.css'

type Props = {}

function Loading({}: Props) {
  return (
    <div className='container'>
        <p>Uploading</p>
        <div className='loader'>
            <div className='loadingBar'></div>
        </div>
    </div>
  )
}

export default Loading