import React, {FC, useRef, useState} from 'react';
import {Container} from "../components/Container";
import {Button, ClearButton, SubmitButton} from "../components/Button";
import {Board} from "../components/Board";

const initialState :string[] = ['']

export const Trajectory:FC = () => {

  const [ state, setState ] = useState<string[]>(initialState)
  const [ array , setArray] = useState<string[]>(initialState)
  const btnRef1 = useRef<HTMLButtonElement>(null)
  const btnRef2 = useRef<HTMLButtonElement>(null)
  const btnRef3 = useRef<HTMLButtonElement>(null)
  const btnRef4 = useRef<HTMLButtonElement>(null)
  const btnRef5 = useRef<HTMLButtonElement>(null)
  const btnRef6 = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Container>
        <Button title='primary' color='red'  btnRef={btnRef1} state={state} setState={setState}/>
        <Button title='secondary'  btnRef={btnRef2} state={state} setState={setState}/>
        <Button title='dangerous' color='red'  btnRef={btnRef3} state={state} setState={setState}/>
        <Button title='safety'  btnRef={btnRef4} state={state} setState={setState}/>
        <Button title='hoge' color='red'  btnRef={btnRef5} state={state} setState={setState}/>
        <Button title='fuga'  btnRef={btnRef6} state={state} setState={setState}/>
      </Container>

      <Container>
        <SubmitButton title='軌跡を表示' setArray={setArray} state={state}/>
      </Container>

      <Container>
        <ClearButton title='軌跡をクリア' setArray={setArray} state={state}/>
      </Container>

      <Board state={array} />
    </>
  );
}

