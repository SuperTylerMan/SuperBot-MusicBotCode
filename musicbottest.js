const Discord = require('discord.js')
const bot = new Discord.Client
const env = require('dotenv')
const ytdl = require('ytdl-core')
const opus = require('@discordjs/opus')
const ffmpeg = require('ffmpeg-static')
const scriptopus = require('opusscript')
const { link } = require('ffmpeg-static')
const TOKEN = ("Place Bot Token Here")
const PREFIX = 'b..'

var servers = {};

bot.on('ready', () =>{
    console.log('Music bot Testing Has been Sequenced!')
    bot.user.setActivity('music. b..help for commands. Beta Bot Test!')
})


var PlayHelp = '-`b..play <link>` - Plays the music you have requested.'
var StopHelp = '-`b..stop` - Stops the music completely, where ever it is at.'
var SkipHelp = '-`b..skip` - Skips the music. It really doesnt work tho because the que is not properly working'
var LeaveHelp = '-`b..leave` - Leaves the channel it is in, and the music stops completly (COMMAND UNDER BETA! It works the same way as b..stop does.'
bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'help':
        let embeded = new Discord.MessageEmbed()
        .setTitle("Here are the commands for the SuperTylerMan Music Bot!\n*Note: This bot is in BETA form, and there are many bugs. This will eventually be added to the SuperBot!, but it is being tested here first before we transfer anything over")
        .setDescription(PlayHelp = '\n' + StopHelp + '\n' + SkipHelp + '\n' + LeaveHelp)
        .setColor(0xFCC300)
        .setFooter("Please be gentle with the bot AND PLEASE, DO NOT GO CRAZY WITH IT\nThis bot is still in beta form, and please give it time as it improves. Thank :)")

        if(!args[1]){
            message.channel.send(embeded)
        break;
        }
    }
})

bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(/ +/)

    switch(args[0]){
        case 'play':

        function play(connection, message){
            var server = servers[message.guild.id];

            server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.shift();

            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection, message);
                } else {
                    connection.disconnected();
                }
            })

        }

        if(!args[1]){
            message.channel.send('Error. You need to provide a YouTube link to play the music.\n*IF IT IS NOT A YOUTUBE LINK, THE BOT WILL STOP WORKING!!! ONLY YOUTUBE LINKS*')
            return;
        }

        if(!message.member.voice.channel){
            message.channel.send('Error. You need to be in a voice channel to play music')
            return;
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args[1]);

        if(!message.member.voice.conncection) message.member.voice.channel.join().then(function(conncection){
            play(conncection, message)
        message.channel.send("Playing the song that was requested!")
        })
        break;

        case 'skip':
            var server = servers[message.guild.id]
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send("Music was successfully skipped!")
        break;

        case 'leave':
            message.channel.send('Left Voice Channel\n*It really doesnt work right now -___-*')
            var server = servers[message.guild.id]
            if(message.guild.voice.conncection){
                for(var i = server.queue.length -1; i >=0; i--)
                    server.queue.splice(i, 1);
                    if(!message.member.voice.conncection) message.member.voice.channel.disconnect();
                break;
            }

        case 'stop':
            message.channel.send('Music successfully stopped.')
            var server = servers[message.guild.id]
                server.dispatcher.end();
                if(message.guild.voice.conncection){
                    for(var i = server.queue.length -1; i >=0; i--)
                        server.queue.splice(i, 1);
                console.log('Queue stopped')
        
    }
}})

bot.login(TOKEN)
