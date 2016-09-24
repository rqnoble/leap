# leap

description:
leap uses plivo for group sms with the contacts provided in leap.js.
leap only allows sms from numbers listed in contacts.

requirements:
plivo account, authID, authToken, and phone number.
public facing ip

setup:
install node.js
install required modules:
   - from leap base directory run `npm install`
start leap:
   - nodejs leap.js

references:
https://www.plivo.com/docs/getting-started/reply-to-an-incoming-sms/
https://www.plivo.com/docs/getting-started/send-bulk-sms/
