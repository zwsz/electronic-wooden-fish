import React, { useState } from 'react'
import Style from './index.module.less'
import Fish from '@renderer/assets/fish.png'
import { Button } from 'antd'

interface Iprops {
  handleClose: () => void
}

const ElectronWoondenFish: React.FC<Iprops> = ({ handleClose }) => {
  const [beat, setBeat] = useState(false)
  const handleAnimation = (): void => {
    setBeat(true)
    setTimeout(() => {
      setBeat(false)
    }, 400)
  }

  return (
    <div className={Style.fishContainer}>
      <div style={{ position: 'relative' }}>
        <span
          className={beat ? Style.textBeat : ''}
          style={{ position: 'absolute', top: 30, opacity: '0' }}
        >
          胡伟是傻逼+1
        </span>
        <img
          src={Fish}
          style={{ marginTop: '100px', cursor: 'pointer', width: '50px' }}
          className={beat ? Style.beat : ''}
          onClick={() => handleAnimation()}
        ></img>
      </div>

      <Button className={Style.footer} onClick={() => handleClose()}>
        到此为止吧！
      </Button>
    </div>
  )
}

export default ElectronWoondenFish
