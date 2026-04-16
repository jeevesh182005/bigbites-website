import useInView from '../hooks/useInView'

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, visible] = useInView()

  const transforms = {
    up: 'translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'translate-x-0 translate-y-0 opacity-100' : `${transforms[direction]} opacity-0`} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
