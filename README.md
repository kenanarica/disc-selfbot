# disc-selfbot
A discord selfbot I made that quotes people and can open a twitter stream using your person. A "Just to see if I can do this" kind of project.

## Setup
Assuming you've cloned this repo and you've got Node installed, let's start installing! Type 
```
npm install moment
npm install discord.js
npm install twitter
```
  1.  Create a Twitter application at [Twitter's Dev site](dev.twitter.com) and paste the Consumer, Consumer_Secret, Access, and Access_Secret keys into [config.js](config.js) accordingly.
  2. Open discord and open the dev tools using `Ctrl + Shift + I` on Windows & Linux or `Cmd + Option + I` on macOS. From there, go to Application > Local Storage, and there should be a field that says `token`. This token is the token that controllers your user. Fill out the `token` object in [config.js](config.js) accordingly. Technically, you don't have to use a `self` token for this, you can use a BOT account token for it. 
  
  **DISCLAIMER: DO NOT GIVE THIS TOKEN TO ANYONE OR SHARE IT ANYWHERE. I AM NOT RESPONSIBLE FOR ANY ACTIONS RESULTING IN THE USE OF THIS SELFBOT.**
  And there you go!
  
## Usage
#### Quoting
To quote a message, start your message with `<MESSAGE_ID> "Any text you want to come after the quote"`. Using a faulty message ID will just not quote anything. To get a message ID in discord, simply right click any message and click "Copy ID", provided you have [developer mode enabled](https://www.youtube.com/watch?v=mqTNGiSSadE).

Example usage: `<307918869480210433> "This text will be sent after the quoting RichEmbed object"` 
#### Twitter streams

Type `.setKeyWord "keyword to start a twitter stream of"`to set your stream keyword. Best avoid keywords that have anything to do with politics, due to the excessive spam you'll create.

By default this is set to "javascript", just because requesting a stream from twitter of empty characters returns an error. 

Type `.toggleStream` to start a stream in whatever channel you type this in. **Be careful where you use this. You can easily get banned from spam.**
Typing `.toggleStream` again will turn it off.

#### Questions, comments or concerns? 
Contact me! I'd love to hear feedback :) 
