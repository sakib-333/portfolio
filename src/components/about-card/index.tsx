import React from 'react'
import Text from '../text';

interface Props {
     icon: React.ReactElement;
     label: string;
     text: string;
}

function AboutCard({ icon, label, text}: Props) {
  return (
    <div className='w-full p-4 bg-primary/20 rounded-sm'>
      {icon}
     <Text titleSm>{label}</Text>
     <Text textBase accentColor>{text}</Text>
    </div>
  )
}

export default AboutCard