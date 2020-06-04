## CoBrowse Simple Example

Using `npx` you can run the script without installing it first:
Use one of the following from node.

```
npx http-server

npm run start
```

Configure `./js/appConfig.js` with the videoAssistUrl and agentId you need
In this example, we use agentId="agent1"

videoAssistUrl will use :8443 if testing from internal network.
Otherwise do not use :8443

sbc-mcap/env  
set CHAT_SERVICES_URL=http://testchatservices.maximusbc.ca/Home/Chat 
set ASSISTJS_URL=https://t1cafex.maximusbc.ca/assistserver/sdk/web/consumer/assist.js 
set VIDEO_ASSIST_URL=https://t1cafex.maximusbc.ca 
set SERVICE_PORT=8080 