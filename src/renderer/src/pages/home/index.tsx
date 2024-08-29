import { Button } from 'antd'
import React, { useState } from 'react'
import Style from './index.module.less'
import ElectronWoondenFish from './fish/index'
export const Home: React.FC = () => {
  const [startBeat, setStartBeat] = useState(false)
  const handleClose = (): void => {
    setStartBeat(false)
  }
  return (
    <div className={Style.homeContainer}>
      {!startBeat && (
        <Button style={{ marginTop: '100px' }} onClick={() => setStartBeat(!startBeat)}>
          放松时刻
        </Button>
      )}
      {startBeat && <ElectronWoondenFish handleClose={handleClose} />}
    </div>
  )
}
