# Troubleshooting

## TypeError when using React: Cannot read property 'firstChild' of undefined

This error is commonly caused by [two versions of React loaded alongside](https://github.com/facebook/react/issues/2402).

For example, if you `npm install` a package that requires a different React version and puts it into `dependencies` instead of `peerDependencies`, it might install a separate React into `node_modules/<some library using React>/node_modules/react`.

Two different Reacts won't play nicely together (at least yet).

To fix it, just delete `node_modules/<some library using React>/node_modules/react`.
If you see a library putting React in `dependencies` instead of `peerDependencies`, file an issue.


See more: http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined?answertab=votes#tab-top

---
