[![CodeFactor](https://www.codefactor.io/repository/github/filipeneves/bungienet.js/badge)](https://www.codefactor.io/repository/github/filipeneves/bungienet.js)

# BungieNet.js

## Example

```
const bungienet = require('bungienet.js').config(APIKEY)
bungienet.users.searchUser({ query: 'Nelen' }).then(response => console.log(response.data))
```
