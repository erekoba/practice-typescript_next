import React, {Dispatch, FC, forwardRef, RefObject, useImperativeHandle, useState} from 'react';
import styles from '../../styles/Home.module.css'

type btnProps = {
  title: string;
  btnRef?: RefObject<HTMLButtonElement>;
  state: string[];
  setState: Dispatch<React.SetStateAction<string[]>>;
  color?: string
}

type Props = {
  title: string;
  setArray: Dispatch<React.SetStateAction<string[]>>;
  state: string[];
}

export const Button: FC<btnProps> = (props) => {
  const {title, color, btnRef, state, setState} = props

  const handleHover = (): void => {
    btnRef?.current?.style.color === 'red'
      ? setState(prevState => ([...prevState, `${btnRef?.current?.textContent}`]))
      : console.log(btnRef?.current?.textContent)
  }

  return (
    <button
      className={styles.button}
      style={{color: `${color}`}}
      ref={btnRef}
      onMouseEnter={handleHover}
    >{title}</button>
  );
}

// eslint-disable-next-line react/display-name
export const SubmitButton:FC<Props>  = (props) => {
  const {title,setArray,state} = props

  const handleClick = (): void => {
    setArray(state)
  }

  return (
    <button className={styles.button} onClick={handleClick}>{title}</button>
  );
}

export const ClearButton:FC<Props> = (props) => {
  const {title,setArray} = props

  const handleClick = (): void => {
    setArray([])
  }

  return (
    <button className={styles.button} onClick={handleClick}>{title}</button>
  );
}

