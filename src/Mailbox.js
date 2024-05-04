import React from 'react';

function Mailbox({ unreadMessages }) {
  const unreadMessageCount = unreadMessages.length;

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessageCount > 0 &&
        <p>You have {unreadMessageCount} unread messages.</p>
      }
    </div>
  );
}




export default Mailbox;
