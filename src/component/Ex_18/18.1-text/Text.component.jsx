import React, { useState } from 'react';

const Text = ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(true);
  console.log('text: ', text);
  console.log('maxLength: ', maxLength);

  return (
    <div className="container-read-text">
      {hidden
        ? `${text.substr(0, maxLength).trim()} ...`
        : text}
      {hidden ?
      (<a onClick={() => setHidden(false)} className="read-text"> read more</a>)
      :(<a onClick={() => setHidden(true)} className="read-text"> read less</a>)}
    </div>
  )
}
export default Text;