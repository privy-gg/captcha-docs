---
outline: deep
---

# Time Limits

Optionally, Captcha.bot can remove users who do not verify in your server.

## Time Limit Setup

We assume you have already ran through the [setup process](../introduction/setup-process.md). 

Your server's time limit can be setup on the dashboard. Various times are available for you to choose from and you can choose for the users to be kicked or banned. 

![Time limit dashboard](../images/specific-features/time-limit.avif)

## FAQ

### How do time limits work?

If the member doesn't complete verification within the time limit, Captcha.bot will take action on them. 

### Does Captcha.bot remove existing members?

No. Captcha.bot's time limits ONLY work on members who join after the setting was enabled. 

### Captcha.bot is removing members who have verified

Captcha.bot looks at members roles to determine if they have been verified. Make sure another bot or staff member is not adding or removing roles until the time limit has been exceeded.

### Captcha.bot isn't removing members

Make sure the bot has the `Kick members` or `Ban members` permission and is above the roles which it assigns to your memberes. **Remember**, if you choose for members to be **kicked** then they will be able to rejoin your server. The time limit resets when they rejoin. 

### What happens when lots of accounts don't verify?

Captcha.bot will slowly work its way through members. In most cases it will remove members within a few seconds of the time limit being up. 