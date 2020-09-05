# SuperBot-MusicBotCode
This is just code for the music bot I am working on. Its super buggy, and it works ok. Try it out yourself ;)

# How This Works
If you want to play music, go in a voice channel, and play music. You can only select songs from YouTube. Go to http://youtube.com and find a youtube link for music. 
Once you found one, copy URL, and go to channel, go in voice, and do b..play <URL link from YouTube>. If not in YouTube, the bot will not work.

# How to run the Code

**1)** Go to http://nodejs.org and download the recommended version of node. Download Visual Studio Code, and you will also need to download FFMPEG. You can download it here: https://ffmpeg.org/

**2)** Set up FFMPEG and nodejs on your computer. FFMPEG is tricky to set up, compared to NODE, it isn't so hard at all. FFMPEG Download Tutorial: https://www.youtube.com/watch?v=a_KqycyErd8

**3)** Go to Command promt. On Windows, type in search cmd, and click enter. (On mac, its called unix.). Make sure your file for node is on desktop. Name the folder where node is in, so you do not forget. Do not use ! , in your file, or it will not work. 

**4)** In command promt, type in "cd desktop', then type in next "cd <folder name where nodejs is in>", and then type "npm init". This will create a json file, where your code will be. Follow the steps on how to set it up. You can edit the name of the project, the author, version, the main file (where it says index.js, you can name it to another .js file. I will recommend musicbot.js because that is what you downloaded), and description. We will not recommend to edit anything else when setting it up. When finished with step, you can click enter. Once all done, stay on command promt.

**5)** You are going to need to download a few modules from npm. The 1st one your are going to download is discord.js. Type in command promt "npm install discord.js" and click enter. Don't worry about the warnings at all. Next module your going to install is @discordjs/opus. Type in command promt "npm install discordjs/opus". There are 3 more modules your going to need to install for it to work. The next one in ffmpeg-static. Type in command promt "npm install ffmpeg-static". The next one to install is opusscript. Type in command promt "npm install opusscript", and the final module your going to install is ytdl-core. Type in command promt "npm install ytdl-core". To make life shorter, you can do npm install, and type in all the packages to install in 1 go, so you do not have to type in 600 of them. 

**6)** Open up Visual Studio Code.

**7)** After opening up Visual Studio code, go to the top left hand corner, and click on file. Click on "open folder", and go to your folder on your desktop. Click open, and all of the npm modules, node modules, including some json packages are all in the code!

**8)** Make a new .js file called musicbot.js. (If sidebar not open, hold 2 keys for a split second *crtl + b*. On Mac, *command + b*. Make sure that sidebar is open. Go to your file name on the left hand side, and there should be 4 little objects on there. Click on object that says new file (place your mouse over there, and keep it there for a second to see if that one is correct), and type in the new file musicbot.js. (Don't add the dot at the end of .js). Now, copy the code from github in musicbot.js, and paste it into musicbot.js file. 

**9)** DON'T FORGET TO ADD THE TOKEN!!! Go to discord applications, add a bot, go to bot, create a bot, and click copy token. And go to code where it says "place bot token here", delete text and place bot toke there in musicbot.js. (Do not get rid of quotation marks, or else, the token will not work. "")

**10)** Open up terminal. To open it up, hold these 2 keys for a split second *crtl + tidlekey*. On Mac, *command + tidlekey* (The tidle key is located on the top left hand corner on your keyboard. Its right below the esc button).

**10)** To run the node, type in node musicbot.js. Then, a message below should be saying it is online. If it isn't working, you will be givin an error, and a ton of messages below. To stop running the bot, do *crtl + c* (On Mac, *command + c*) to stop the bot running. It will take about 30 seconds for the bot on discord to go offline, but no commands will be working when put offline. 

If my tutorial confused you, watch this video on how to set up the bot. https://www.youtube.com/watch?v=j_sD9udZnCk&t=1s (After he does npm init and shows how to set up init, and when it is done, stop there, and go to Step 5. Once done with step 5 on here, you can finish and continue video)
