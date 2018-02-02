# JurboLinks
A quick rip-off of githubs TurboLinks
Usage:
1. include the JS file
2. call the function `jurbolinks`, like
```javascript
jurboLinks({
  navigationLinks: "nav a",
  mainContent: "main"
})
```

## Arguments:
config: 
  - navigationLinks: a selector pointing to our main menu
  - mainContent: The area to swap out when we have new data (must exist on all subpages)