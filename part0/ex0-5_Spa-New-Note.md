# New Note creation in SPA

```Mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User fills text <br> and clicks save button 
    Note right of browser: Event handler adds the new note  <br> and re-renders page 
    Note right of browser: POST request sent <br> with content-type : application/json 

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    
    Note left of server: server accepts the  new note
    server-->>browser:  201 created
    deactivate server
   

```
