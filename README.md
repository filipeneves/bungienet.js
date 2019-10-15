[![CodeFactor](https://www.codefactor.io/repository/github/filipeneves/bungienet.js/badge)](https://www.codefactor.io/repository/github/filipeneves/bungienet.js)
[![Depfu](https://badges.depfu.com/badges/2ded173517365cb32c4ae8a822ce9d49/overview.svg)](https://depfu.com/github/filipeneves/bungienet.js?project_id=9796)

# BungieNet.js

## Example

```
const bungienet = require('bungienet.js').config(APIKEY)
bungienet.users.searchUser({ query: 'Nelen' }).then(response => console.log(response.data))
```
