const Discord = require("discord.js");
var config = require("./config.js");
var Twitter = require('twitter');

const client = new Discord.Client();

client.login(config.discord_token);

const songs = new Array();

const moment = require('moment');

////////////////////////////Initialization of client objects

var streamKeyWord = "null"; //The variable we're gonna use to stream from twitter with.It's javascript by default, because twitter requires something to connect. 

var streamTweets = false; //The variable we're gonna use to dictate if we stream tweets through my discord account.
var dontStreamTweets = null;
var messageChannelToStreamTo;

client.on('ready', () => {

  console.log(` \n \n \n${client.user.username} online at ${moment().format('MMMM Do, YYYY, h:mm:ss A')}`);
  //When BOT is ready, it's indicated in the console with a timestamp.
  
});

client.on('message', message => {
/////////////Actions to do when the bot recieves a message.
      if (message.content == 'sbstop' && message.author.id == client.user.id) {
        process.exit();
        //A command used for stopping the bot, whether for debugging or general purposes.
      }
      if(message.content.startsWith("<") &&  message.author.id == client.user.id) {
          quoteMessage(message);
          //Testing if a user is using the 'quote' command.
         }
         if(message.content.startsWith(".setKeyWord") &&  message.author.id == client.user.id) {
                message.channel.sendMessage("Stream keyword set to: " + message.content.substring(12));
                 setStreamKeyWord(message.content.substring(12));
         }
         if(message.content.startsWith(".toggleStream") &&  message.author.id == client.user.id) {
                    messageChannelToStreamTo = message;
                    toggleStreamTweets();
         }
});

function quoteMessage(message) {
var messageToQuoteID = message.content.substring(1).split(">");
//Getting the ID of the message by splitting the start of it by the > character, as the way to quote a message is <Quote_ID>"Text to say afterwards"

var messageToQuote = message;

message.channel.fetchMessages({around: messageToQuoteID[0]}).then((messages) => {
  if(messages.has(messageToQuoteID[0]))
  //Getting the message object from it's ID which we just obtained, and seeing if it's valid. 
         {
       messageToQuote = messages.get(messageToQuoteID[0]);
        var author = message.author;
        message.delete();
  //Deleting the message that requested a quoted message to reduce spam.
          message.channel.sendMessage("", {embed: {
                      author: {
                        name: `${messageToQuote.author.username} said:`,
                        icon_url: messageToQuote.author.avatarURL ? messageToQuote.author.avatarURL : undefined,
                        color: 32384,
  //Sending an embed object as the quoting.
                      },
                      description: messageToQuote.content
                    }});
                   message.channel.sendMessage(messageToQuoteID[1]);

        } else {
          message.channel.sendMessage("**SelimIX ERR: Could not quote**");
          //If something goes wrong, return an error.
        }
});

}
function startStream() {
if(streamTweets) { 
t.stream('statuses/filter', {track: streamKeyWord},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);

   messageChannelToStreamTo.channel.sendMessage("**" + tweet.user.screen_name + "**: " + tweet.text); 
    //If streamTweets is true, stream tweets to whatever channel we choose.
  });

 
});
}
}




process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
//A snippet of code to catch unfulfilled promises and give more information about them. Found in the discord.js server, NOT MY CODE.

///////////////The section of the selfbot that turns you into a living twitter stream////////////////////
var t = new Twitter({
  consumer_key: config.consumer_key, 
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});
//Config setup for my twitter object. I have a seperate file, config.js, that holds my private login keys for discord and twitter.


function setStreamKeyWord(keyword) { 
 streamKeyWord = keyword; 
}
//Funtion to set the stream keyword based on simple input.

function toggleStreamTweets() { 
if(streamTweets) { 
  streamTweets = false; 
  } else {  
  streamTweets = true;    
  startStream();
  
  }
  
}
//function to toggle streamTweets.

