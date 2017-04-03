const htmlTemplateBase = (body, initialState = '') => `
    <html>
        <head>
            <title>Haiku App</title>
            <meta charset="utf-8">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
        </head>
        <body>
            <div id="root">${body}</div>
        </body>
        <script>
            window.__INITIAL_STATE__ = ${initialState};
        </script>
        <script src="./client.js"></script>
        <script src="https://use.fontawesome.com/40dc888cc4.js"></script>
    </html>
`;

export default htmlTemplateBase;