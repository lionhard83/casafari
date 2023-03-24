# 🏠 CASAFARI

Casari is legacy API to casafari services

Created by [@lionhard83](https://github.com/lionhard83)
Docs: https://developer.casafari.com/

## How to use

```
import casafari from "casafari";
export const cf = casafari("Token YOUR_TOKEN");
// ...
await cf.getTypes();
await cf.getFeeds();
await cf.createFeed(feed);
await cf.deleteFeed(feedId);

```
