import { FC, ReactNode, useEffect, useState } from 'react'

import styles from './modal.module.css'
interface ModalProps {
  onEvent: any;
  children: ReactNode;
  state?: boolean;
  container?: boolean;
  titleContainer?: string;
  config?: Record<string, string | boolean | Object >
}

export const Modal: FC<ModalProps> = ({
  children,
  onEvent,
  state = false,
  container = false,
  titleContainer = '',
  config = {
    closeButton: true,
    maxWidth: '860px',
    display: 'block',
    padding: '45px 70px'
  }
}) => {
  const [height, setHeight] = useState( 0 )

  useEffect( () => {
    if ( state ) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
    const body = document.querySelector( 'html' )
    if ( state ) {
      body.classList.add( 'modal-open' )
    } else {
      body.classList.remove( 'modal-open' )
    }
  }, [state] )

  useEffect( () => {
    setHeight( document.documentElement.clientHeight )
  }, [] )

  const closeHandler = ({ target }) => {
    if ( target.dataset.allow === 'true' ) {
      onEvent()
    }
  }

  return (
    <>
    { state &&
      <div
        style = {{ height: `${height}px` }}
        className={`${styles.modal}`}
        onClick={closeHandler}
        data-allow={true}
      >
        {
          container
            ? <div
               className={`${styles.modal_content} ${container && styles.modal_center}`}
               style={{
                 maxWidth: config.maxWidth as string,
                 display: config.display as string,
                 padding: config.padding as string
               }}
              >
                { titleContainer && <span className={styles.modal_title}>{titleContainer}</span> }
                {config.closeButton &&
                 <span className={styles.modal_close} data-allow={true}></span>}
                { children }
              </div>
            : <div>
             {config.closeButton && <span className={styles.modal_close} data-allow={true}></span>}
            { children }</div>
        }
      </div>}
    </>
  )
}
