import Image from 'next/image'

import compStyle from './icon.module.css'
import compProps from './icon.props'

const getIconByType = (type: string, color: string) => {
  if (type === 'play') {
    return (
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2.653C0.5 1.227 2.029 0.323 3.279 1.01L14.819 7.358C16.114 8.07 16.114 9.931 14.819 10.643L3.28 16.991C2.03 17.678 0.501 16.774 0.501 15.348L0.5 2.653Z" fill={color} />
      </svg>
    )
  }

  if (type === 'pause') {
    return (
      <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.75C0 0.551088 0.0790175 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H2.25C2.44891 0 2.63968 0.0790175 2.78033 0.21967C2.92098 0.360322 3 0.551088 3 0.75V14.25C3 14.4489 2.92098 14.6397 2.78033 14.7803C2.63968 14.921 2.44891 15 2.25 15H0.75C0.551088 15 0.360322 14.921 0.21967 14.7803C0.0790175 14.6397 0 14.4489 0 14.25V0.75ZM7.5 0.75C7.5 0.551088 7.57902 0.360322 7.71967 0.21967C7.86032 0.0790175 8.05109 0 8.25 0H9.75C9.94891 0 10.1397 0.0790175 10.2803 0.21967C10.421 0.360322 10.5 0.551088 10.5 0.75V14.25C10.5 14.4489 10.421 14.6397 10.2803 14.7803C10.1397 14.921 9.94891 15 9.75 15H8.25C8.05109 15 7.86032 14.921 7.71967 14.7803C7.57902 14.6397 7.5 14.4489 7.5 14.25V0.75Z" fill={color} />
      </svg>
    )
  }

  if (type === 'stop') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 3.5C0.5 2.70435 0.816071 1.94129 1.37868 1.37868C1.94129 0.816071 2.70435 0.5 3.5 0.5H12.5C13.2956 0.5 14.0587 0.816071 14.6213 1.37868C15.1839 1.94129 15.5 2.70435 15.5 3.5V12.5C15.5 13.2956 15.1839 14.0587 14.6213 14.6213C14.0587 15.1839 13.2956 15.5 12.5 15.5H3.5C2.70435 15.5 1.94129 15.1839 1.37868 14.6213C0.816071 14.0587 0.5 13.2956 0.5 12.5V3.5Z" fill={color} />
      </svg>
    )
  }

  return null
}

export default function Icon(props: compProps) {
  const { type, color } = props

  return (
    <div className={compStyle.wrapper}>
      { getIconByType(type, color) }
    </div>
  )
}