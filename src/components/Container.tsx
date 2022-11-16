import React, {FC, ReactNode} from 'react';
import styles from '../../styles/Home.module.css'

type containerType = {
  children: ReactNode
}

export const Container: FC<containerType> = (props) => {
  const {children} = props
  return (
    <div className={styles.container}>{children}</div>
  );
}
