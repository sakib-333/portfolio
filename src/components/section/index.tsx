import React from 'react'

type SectionProps = React.ComponentPropsWithoutRef<"section">;

function Section({children, className, ...props}: SectionProps) {
  return (
    <section {...props} className={`py-8 sm:py-12 md:py-16: lg:py-20 ${className}`}>{children}</section>
  )
}

export default Section