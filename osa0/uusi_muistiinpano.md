```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: HTML document
    deactivate Server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>browser: HTTP-statuscode 302
    [comment]: <> (Selain tekee uuden HTTP GET pyynnön)
    deactivate server

    Note right of browser: Server tells browser to execute a new HTTP GET command

    browser->>server: GET location: /notes
    activate server
    server->>browser: reload notes page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: HTML document
    deactivate Server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server->>browser: JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server->>browser: Give the notes from data.json file
    deactivate server
```

