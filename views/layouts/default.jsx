

var React = require('react');

function DefaultLayout(props) {
  return (
    <html lang="en">
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Velkommen til {props.title}</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
              <link rel="stylesheet" href="/public/css/style.css" />
          </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = DefaultLayout;