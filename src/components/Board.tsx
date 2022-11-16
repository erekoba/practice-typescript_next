import * as React from 'react';
import {FC, ReactNode} from "react";
import styles from '../../styles/Home.module.css'

type Props = {
  state: string[];
};
export const Board: FC<Props> = (props) => {
  const {state} = props

  return (
    <div className={styles.board}>
      {state.map((data, index) => {
          return (
            index === 0 ? <React.Fragment key={index}></React.Fragment>
            :<div key={index}>{index}.{data}</div>
          )
        }
      )
      }
    </div>
  );
};