import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from '../../lib/notifications'



const CopyButton = (copy) => {
  
  const copyToast = () => {
    return toast('Copied')
  }
  


  return (
    <CopyToClipboard text={copy.copy}>
      <button onClick={copyToast} type="button" className="button gif-button">
        <span className="icon">
          <i className="far fa-copy"></i>
        </span>
        <span>Copy to clipboard</span></button>
    </CopyToClipboard>
  )
  
}

export default CopyButton

