export const users = {
    "amit": {
        nickname: "Amit Cohen",
        password: "amit123456",
        picture: "/Amitpic.jpeg",
        contacts: [
            {
                username: "liron",
                nickname: "Liron Balastra",
                picture: "/Liron.jpg",
                messages: [
                    { time: "10:10", type: "msg", content: "Hello Liron !", sendby: "amit" },
                    { time: "10:11", type: "msg", content: "Hello Amit!", sendby: "liron" },
                    { time: "11:23", type: "msg", content: "You look so good today", sendby: "amit" },
                    { time: "11:23", type: "msg", content: "are you single?", sendby: "amit" },
                ]

            },
            {
                username: "yair",
                nickname: "Yair Lapid",
                picture: "/yair.jpg",
                messages: [
                    { time: "12:10", type: "msg", content: "Hello Amit אחי היקר!", sendby: "yair" },
                    { time: "12:14", type: "msg", content: "do you have some tips for me when i will be a prime minister?", sendby: "yair" },
                    { time: "15:43", type: "msg", content: "i think that you will not be prime minister", sendby: "amit" },
                    { time: "16:22", type: "msg", content: "i have some tricks in my pocket", sendby: "yair" },
                    { time: "16:22", type: "msg", content: "dont you worry", sendby: "yair" },
                ]

            },
            {
                username: "gal",
                nickname: "Gal Kaminka",
                picture: "/gal.jpg",
                messages: [
                    { time: "09:06", type: "msg", content: "Hello gal !", sendby: "amit" },
                    { time: "10:11", type: "msg", content: "Hello dear student!", sendby: "gal" },
                    { time: "12:10", type: "msg", content: "look at the beautiful bananas !", sendby: "amit" },
                    { time: "12:10", type: "pic", content: "/banana.jpg", sendby: "amit" },
                    { time: "13:25", type: "msg", content: "i love strawberrys", sendby: "gal" },
                ]

            },
            {
                username: "justin",
                nickname: "Justin Bieber",
                picture: "/justin.jpg",
                messages: [
                    { time: "11:10", type: "msg", content: "Hello Justin !", sendby: "amit" },
                    { time: "11:10", type: "msg", content: "Love your new Album!", sendby: "amit" },
                    { time: "23:35", type: "msg", content: "I dont care bro", sendby: "justin" },
                ]

            },
            {
                username: "ronaldo",
                nickname: "Cristiano Ronaldo",
                picture: "/Ronaldo.png",
                messages: [
                    { time: "13:16", type: "msg", content: "I heard that you are the best kicker in Bar Ilan", sendby: "ronaldo" },
                    { time: "13:16", type: "msg", content: "Do you want to play?", sendby: "ronaldo" },
                ]

            }
        ]
    },
    "liron": {
        nickname: "Liron Balastra",
        password: "liron123456",
        picture: "/Liron.jpg",
        contacts: [
            {
                username: "amit",
                nickname: "Amit Cohen",
                picture: "/amitc.jpeg",
                messages: [
                    { time: new Date(), type: "msg", content: "Hello Liron !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "you look so good today", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "are you single?", sendby: "amit" },
                ]

            },
            {
                username: "yair",
                nickname: "Yair Lapid",
                picture: "/yair.jpg",
                messages: [
                    { time: new Date(), type: "msg", content: "Hello Yair !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "you will not be prime minister", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "but i will vote for you next time", sendby: "amit" },
                ]

            },
            {
                username: "gal",
                nickname: "Gal Kaminka",
                picture: "/gal.jpg",
                messages: [
                    { time: new Date(), type: "msg", content: "Hello gal !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "why didn't you factored us in Computer Structure?", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "please help us next time", sendby: "amit" },
                ]

            },
            {
                username: "justin",
                nickname: "Justin Bieber",
                picture: "/justin.jpg",
                messages: [
                    { time: new Date(), type: "msg", content: "Hello Justin !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Love your new Album!", sendby: "amit" },
                ]

            },
            {
                username: "Noa",
                nickname: "Noa Agmon",
                picture: "/noa.jpg",
                messages: [
                    { time: new Date(), type: "msg", content: "Hello Noa !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]

            }
        ]
    }
}

