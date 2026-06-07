import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Raghav" age={25}
        marks={[90,92,93,94,95]}
        person={{name:"Raghav",dept:["AI&DS","CT"]}}
        />
    </div>
  )
}

export default Parent