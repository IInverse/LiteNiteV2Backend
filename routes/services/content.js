const express = require("express")
const app = express.Router()


app.get("/api/pages/fortnite-game", async (req, res) => {
    var season
    if (req.headers["user-agent"]) {
        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
            if (season == 10) season = "x"
        } catch {
            season = 2
        }
    } else season = 2

    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenewsv2: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://images-ext-1.discordapp.net/external/UQl5IA5nOTBBpzOH8vuZ4QNVt12MSlI4HKD0b42h9aM/%3Fwidth%3D960%26height%3D540/https/media.discordapp.net/attachments/861501255092404256/878003152362803200/H0xpSeRBbPw9AAAAAElFTkSuQmCC.png",
                        tileImage: "https://images-ext-2.discordapp.net/external/EkFC4UHJjvkD7nralbTfvl_f23jhJKhT1JvXjP9C50k/%3Fwidth%3D960%26height%3D480/https/media.discordapp.net/attachments/861501255092404256/878015155139645551/gv646JUFQfWIAAAAAASUVORK5CYII.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "LiteNite 2.0",
                        _type: "CommonUI Simple Message MOTD",
                        title: "LiteNite 2.0",
                        body: "Welcome to LiteNite 2.0 Created by Fexor and Taki",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `Aurora-News-0`,
                        spotlight: false
                    }
                ]
            }
		},
		battleroyalenews: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://images-ext-1.discordapp.net/external/UQl5IA5nOTBBpzOH8vuZ4QNVt12MSlI4HKD0b42h9aM/%3Fwidth%3D960%26height%3D540/https/media.discordapp.net/attachments/861501255092404256/878003152362803200/H0xpSeRBbPw9AAAAAElFTkSuQmCC.png",
                        tileImage: "https://images-ext-2.discordapp.net/external/EkFC4UHJjvkD7nralbTfvl_f23jhJKhT1JvXjP9C50k/%3Fwidth%3D960%26height%3D480/https/media.discordapp.net/attachments/861501255092404256/878015155139645551/gv646JUFQfWIAAAAAASUVORK5CYII.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "LiteNite 2.0",
                        _type: "CommonUI Simple Message MOTD",
                        title: "LiteNite 2.0",
                        body: "Welcome to LiteNite 2.0 Created by Fexor and Taki",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `Aurora-News-0`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynoticev2: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "Welcome to LiteNite 2.0 Testing",
                        body: "Welcome to the LiteNite 2.0 Testing! LiteNite is created by Fexor and Taki *I love you Taki ♡*",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
		},
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "Welcome to LiteNite 2.0 Testing",
                        body: "Welcome to the LiteNite 2.0 Testing! LiteNite is created by Fexor and Taki *I love you Taki ♡*",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
 backgroundimage: "https://media.discordapp.net/attachments/865388329034055680/877438412129435678/fortnite_news.png?width=960&height=540",
                        stage: ``,
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
  backgroundimage: "https://media.discordapp.net/attachments/865388329034055680/877438412129435678/fortnite_news.png?width=960&height=540",
                        stage: ``,
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        }
    })
})


module.exports = app