# Notes from Hour 1
## Jacob
<hr/>

There are two sets of instructions. Not sure if I'm supposed to use both.
-https://github.com/wilau2/cs-games-2018-relay-instructions/blob/master/web/RELAY_WEB.md
-https://github.com/wilau2/cs-games-2018-relay-instructions/blob/master/web/RELAY_WEB_HOUR_1.md

Will follow the hour 1 instructions first and then do bonus stuff if I have time

## Hour 1 Instructions

Looks like React/Redux (idk Redux so that's great)
When you click a button it literally just lists a bunch of wallets with address/usernames, ok
All the stuff for apps is in containers/App

### Questions
*Create wallet in an account*: Go to app/api/account.json and add username. Go to app/api/wallets.json and add other info. Seems to hook up to Redux store
*Display the wallets of an account*: No time
*Deposit PGG or CAD to a wallet*: No time
*Display wallet currency and amount*: This was really easy. Go to containers/App/Wallet/index.js and it should be pretty obvious
*Display the PGG/CAD current price (price of the latest trade)*: I don't know if this should be async or not. Note: Fuck that no time. Idk what happened to the font. Access the trades json and see what I did in trades/index.js.
*Display your account value CAD + PGG of all wallets (need to have a current PGG/CAD price)*: No time

Lost a lot of time with the stupid fucking pull request. Really hope there aren't any merge errors