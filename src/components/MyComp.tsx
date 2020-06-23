import * as React from 'react'

type MyCompProps = {
    name: 'Nick' | 'Roger'
    isMarried: boolean,
    kids: 2 | 4,
    livedIn?: 'California' | 'Florida'
}

const MyComp = (props: MyCompProps) => {
    return(
     <div>
         <h1>{props.name}</h1>
         <div>Is Married: {props.isMarried}</div>
         <div>Number of kids: {props.kids}</div>
         <div>Lived in: {props.livedIn}</div>
     </div>
    )
}

export default MyComp