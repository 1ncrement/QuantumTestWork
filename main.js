const d = document, w = window;

class Tweets {
    constructor() {
        this.tweets = [
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "1Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1834,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "5Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1793,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "7Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 514,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1307,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "2Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1088,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "4Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 290,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "3Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1922,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "6Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1200,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 895,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1687,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1282,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1061,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1288,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 219,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1181,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1735,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 94,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 787,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 269,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 494,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1151,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1803,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1539,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 425,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1852,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1458,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 837,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 616,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "10Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1163,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "11Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 946,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "12Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1418,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            },
            {
                "created_at": "Thu Jun 22 21:00:00 +0000 2017",
                "id": 877994604561387500,
                "id_str": "877994604561387520",
                "text": "13Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular",
                "truncated": false,
                "entities": {
                    "hashtags": [
                        {
                            "text": "Angular",
                            "indices": [
                                103,
                                111
                            ]
                        }
                    ],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [
                        {
                            "url": "https://t.co/xFox78juL1",
                            "expanded_url": "http://buff.ly/2sr60pf",
                            "display_url": "buff.ly/2sr60pf",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                },
                "source": "<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>",
                "user": {
                    "id": 772682964,
                    "id_str": "772682964",
                    "name": "SitePoint JavaScript",
                    "screen_name": "SitePointJS",
                    "location": "Melbourne, Australia",
                    "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
                    "url": "http://t.co/cCH13gqeUK",
                    "entities": {
                        "url": {
                            "urls": [
                                {
                                    "url": "http://t.co/cCH13gqeUK",
                                    "expanded_url": "http://sitepoint.com/javascript",
                                    "display_url": "sitepoint.com/javascript",
                                    "indices": [
                                        0,
                                        22
                                    ]
                                }
                            ]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 1045,
                    "friends_count": 18,
                    "listed_count": 328,
                    "created_at": "Wed Aug 22 02:06:33 +0000 2012",
                    "favourites_count": 57,
                    "utc_offset": 43200,
                    "time_zone": "Wellington"
                }
            }
        ];
        this.mainNode = d.querySelector('#main');
        this.page = 0;
        this.tweetCont = 10;
        this.sort = null;
        this.tweetsNode = null;
        this.paginationNode = null;
        this.sortToggleBtnHandler = this.sortToggleBtnHandler.bind(this);
        this.dropSortBtnHandler = this.dropSortBtnHandler.bind(this);
        this.paginationBtnHandler = this.paginationBtnHandler.bind(this);

        this.makeTweetsContent();
        this.makePaginationController();
        this.render();
    }

    render(sort, page) {
        const {tweetsNode, paginationNode, mainNode, tweets, tweetCont} = this;

        if (page !== undefined) {
            let maxPage = this._getMaxPage();

            if (page === 'prev') {
                let nextPage = this.page - 1;
                this.page = nextPage <= maxPage && nextPage >= 0 ? nextPage : 0;
            } else if (page === 'next') {
                let nextPage = this.page + 1;
                this.page = nextPage <= maxPage ? nextPage : maxPage;
            } else {
                this.page = maxPage >= page ? page : maxPage;
            }

            console.log('Page params:', this.page, maxPage, page);
        }

        sort !== undefined && (this.sort = sort);

        if (mainNode && tweetsNode && paginationNode) {
            const tweetList = this._getSortingTweets();
            const newTweetsNode = this._getTemplate('main-content');
            tweetList.map(this._getTweetTemplate).forEach(tweet => newTweetsNode.appendChild(tweet));
            mainNode.replaceChild(newTweetsNode, tweetsNode);
            this.tweetsNode = newTweetsNode;
        }
    }

    _getMaxPage() {
        const {tweets, tweetCont} = this;
        return Math.floor(tweets.length/tweetCont);
    }

    _getSortingTweets() {
        const {tweets, sort, page, tweetCont} = this;
        let newTweets = tweets.concat([]);

        if (sort === 1) {
            newTweets.sort((a, b) => a.user.followers_count - b.user.followers_count);
        } else if (sort === 0) {
            newTweets.sort((b, a) => a.user.followers_count - b.user.followers_count);
        }

        return newTweets.splice(page * tweetCont, tweetCont);
    }

    _getTweetTemplate(tweet) {
        const {text} = tweet;
        const tweetNode = d.createElement('div');
        tweetNode.classList.add('tweet', 'item');

        tweetNode.innerHTML = `<div class="content">
                ${text}
            </div>`;

        return tweetNode;
    }

    _getTemplate(classList) {
        const main = d.createElement('div');
        main.classList.add(classList);
        return main;
    }

    makePaginationController() {
        const {mainNode, tweets, tweetCont} = this;
        this.paginationNode = this._getTemplate('pagination');

        if (mainNode && this.paginationNode) {
            this.paginationNode.appendChild(_getPaginationBtn('prev', this.paginationBtnHandler('prev')));
            for (let i = 0, maxPage = this._getMaxPage(); i <= maxPage; i++){
                this.paginationNode.appendChild(_getPaginationBtn(i+1, this.paginationBtnHandler(i)))
            }
            this.paginationNode.appendChild(_getPaginationBtn('next', this.paginationBtnHandler('next')));

            mainNode.appendChild(this.paginationNode);
        }

        function _getPaginationBtn(text, handler) {
            const btn = d.createElement('a');
            btn.classList.add('btn', 'pagination-btn');
            btn.innerText = text;
            btn.addEventListener('click', handler);

            return btn;
        }
    }

    sortToggleBtnHandler(e) {
        this.render(this.sort === 1 ? 0 : 1);
    }

    dropSortBtnHandler(e) {
        this.sort = null;
        this.render();
    }

    paginationBtnHandler(page) {
        return () => {
            this.render(undefined, page);
        };
    }

    makeTweetsContent() {
        const {mainNode} = this;
        this.tweetsNode = this._getTemplate('main-content');

        if (mainNode && this.tweetsNode) {
            this.sortToggleBtnNode = _getBtnNode('Sort tweets', ['toggle', 'btn'], this.sortToggleBtnHandler);
            this.dropSortBtnNode = _getBtnNode('Drop sort', ['drop-sort', 'btn'], this.dropSortBtnHandler);

            mainNode.appendChild(this.sortToggleBtnNode);
            mainNode.appendChild(this.dropSortBtnNode);
            mainNode.appendChild(this.tweetsNode);
        }

        function _getBtnNode(text = 'empty', classList = ['btn'], handler = () => {}) {
            const btn = d.createElement('a');
            btn.classList.add(classList);
            btn.innerText = text;
            btn.addEventListener('click', handler);

            return btn;
        }
    }
}

w.addEventListener('load', () => {
    new Tweets();
});