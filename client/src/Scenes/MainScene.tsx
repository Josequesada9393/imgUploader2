import Dashboard from '../Components/Dashboard/Dashboard'
import Loading from '../Components/Loading/Loading'
import UploadSuccess from '../Components/uploadSuccess/UploadSuccess'
import {useSelector} from 'react-redux'
import { RootState } from '../state/store'

type Props = {}

function MainScene({}: Props) {
    const file = useSelector((state: RootState) => state.files.fileURL);
    const loading = useSelector((state: RootState) => state.files.loading);

  return (

    <>
    {loading ?

        <Loading/>
        :
        (
          <>
          {
            !loading && file ?

            <UploadSuccess/>
            : 

            <Dashboard/>

          }

          </>
        )


      }

    </>
  )
}

export default MainScene