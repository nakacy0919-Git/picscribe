"use strict";

const scene012Data = {
  "id": "scene_012",
  "image_id": "012.webp",
  "overall_description_ja": "晴れた日の都市公園で、5人の若者が芝生の上でフリスビーをしている。左の男性がフリスビーを投げ、中央の男性が笑顔で受け取ろうとしている。周りの3人もゲームに参加している。背景には多くの公園利用者、木々、高層ビルが見え、手前にはピクニックシート、バッグ、水筒、バスケットがある。明るい青空と白い雲が、開放的で活気のある雰囲気を作っている。",
  "overall_description_en": "In a sunny city park, five young people are playing frisbee on the grass. The young man on the left is throwing the frisbee, and the smiling young man in the center is trying to catch it. Three other friends are also joining the game. In the background, many visitors, green trees, and tall buildings can be seen. In the foreground, there is a picnic blanket with bags, a bottle, and a basket. The blue sky and white clouds create a bright, lively, and open atmosphere.",
  "overall_mood": [
    "energetic",
    "cheerful",
    "sunny",
    "lively",
    "friendly",
    "active",
    "refreshing",
    "open",
    "social",
    "playful"
  ],
  "mission_guides": {
    "gist": "5人の若者が何をしているかを書こう（playing frisbee / throwing / catching）",
    "setting": "場所、公園の芝生、木々、街のビル、空の様子を書こう",
    "details": "フリスビー、ピクニック用品、背景の人々なども加えよう",
    "complete": "天気や雰囲気、友人同士の楽しさまで含めて描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "five young people playing frisbee",
        "ja": "フリスビーをしている5人の若者"
      },
      {
        "en": "a boy throwing the frisbee",
        "ja": "フリスビーを投げる男の子"
      },
      {
        "en": "a smiling boy trying to catch it",
        "ja": "笑顔で受け取ろうとする男の子"
      },
      {
        "en": "other friends joining the game",
        "ja": "ゲームに加わるほかの友人たち"
      }
    ],
    "setting": [
      {
        "en": "on a wide grassy field in a city park",
        "ja": "都市公園の広い芝生の上で"
      },
      {
        "en": "many people and green trees in the background",
        "ja": "背景にいる多くの人々と緑の木々"
      },
      {
        "en": "tall buildings behind the park",
        "ja": "公園の後ろにある高層ビル"
      },
      {
        "en": "a picnic blanket and bags in the foreground",
        "ja": "手前にあるピクニックシートとバッグ"
      }
    ],
    "mood": [
      {
        "en": "a bright and lively atmosphere",
        "ja": "明るく活気のある雰囲気"
      },
      {
        "en": "a clear blue sky with white clouds",
        "ja": "白い雲のある澄んだ青空"
      },
      {
        "en": "a healthy outdoor scene",
        "ja": "健康的な屋外の場面"
      },
      {
        "en": "a fun time with friends",
        "ja": "友人たちとの楽しい時間"
      }
    ]
  },
  "hint_language_support": {
    "supported_languages": [
      "en",
      "ja"
    ],
    "default_language": "en",
    "fallback_field": "text",
    "text_fields": {
      "en": "text_en",
      "ja": "text_ja"
    },
    "level_fields": {
      "en": "level",
      "ja": "level_ja"
    },
    "type_fields": {
      "en": "type",
      "ja": "type_ja"
    }
  },
  "core_svo_targets": [
    {
      "step": 1,
      "slot": "subject",
      "name": "主語 (Subject)",
      "targets": [
        "five young people",
        "friends",
        "players",
        "they",
        "the group"
      ],
      "hint_msg": "まずは主語を言いましょう。five young people / friends などが使えます。",
      "success_msg": "Good! 次は動作を書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "are playing",
        "is throwing",
        "is trying to catch",
        "are joining"
      ],
      "hint_msg": "現在進行形を使って、何をしているかを表しましょう。",
      "success_msg": "Great! 次は場所や物を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "frisbee",
        "park",
        "grass",
        "field",
        "sky",
        "friends"
      ],
      "hint_msg": "frisbee, park, on the grass などを加えてみましょう。",
      "success_msg": "Excellent! 背景や雰囲気も書けます。"
    }
  ],
  "suggested_topics": [
    "playing frisbee in the park",
    "having fun with friends",
    "outdoor recreation",
    "a sunny day in a city park",
    "exercise and friendship",
    "a lively public space"
  ],
  "scene_structure": {
    "foreground": [
      "picnic blanket",
      "bags",
      "bottle",
      "basket",
      "grass"
    ],
    "midground": [
      "five players",
      "flying frisbee",
      "wide lawn"
    ],
    "background": [
      "visitors",
      "trees",
      "city buildings",
      "blue sky",
      "white clouds"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "group of friends",
      "label_ja": "友人のグループ",
      "category": "people",
      "importance": "primary",
      "description": "Five young friends are playing frisbee together on the grass.",
      "bounding_box_conceptual": [
        18,
        4,
        60,
        92
      ],
      "color": [
        "white",
        "blue",
        "green",
        "beige"
      ],
      "attributes": [
        "young",
        "friendly",
        "active"
      ],
      "action": [
        "playing",
        "smiling",
        "moving"
      ],
      "synonyms_and_related_words": [
        "friends",
        "group",
        "young people",
        "players",
        "they"
      ],
      "accepted_words": [
        "friends",
        "group",
        "young people",
        "players",
        "they"
      ],
      "common_typos": [
        "freinds",
        "playars",
        "yong people"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "friends",
            "ja": "友人のグループ"
          }
        ],
        "A2": [
          {
            "en": "group",
            "ja": "友人のグループ"
          }
        ],
        "B1": [
          {
            "en": "group of friends",
            "ja": "友人のグループ"
          }
        ],
        "B2": [
          {
            "en": "Five young friends are playing frisbee together on the grass.",
            "ja": "友人のグループ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of group of friends",
          "ja": "友人のグループの印象的な様子"
        },
        {
          "en": "the part of the scene centered on group of friends",
          "ja": "友人のグループを中心とした場面"
        },
        {
          "en": "group of friends adding life to the picture",
          "ja": "絵に生き生きとした印象を加える友人のグループ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "friends, group, players",
          "text_en": "friends, group, players",
          "text_ja": "友人たち、グループ、プレーヤーたち"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Five friends are playing frisbee.",
          "text_en": "Five friends are playing frisbee.",
          "text_ja": "5人の友人がフリスビーをしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a group of young friends in the park",
          "text_en": "a group of young friends in the park",
          "text_ja": "公園にいる若い友人のグループ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The group of friends creates a lively and cooperative mood in the park.",
          "text_en": "The group of friends creates a lively and cooperative mood in the park.",
          "text_ja": "友人のグループが公園に活気があり協力的な雰囲気を作っています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "boy throwing the frisbee",
      "label_ja": "フリスビーを投げる男の子",
      "category": "person",
      "importance": "primary",
      "description": "A young man on the left is throwing the frisbee toward the center.",
      "bounding_box_conceptual": [
        17,
        0,
        76,
        34
      ],
      "color": [
        "white",
        "black"
      ],
      "attributes": [
        "active",
        "athletic",
        "focused"
      ],
      "action": [
        "throwing",
        "pointing"
      ],
      "synonyms_and_related_words": [
        "boy",
        "young man",
        "thrower",
        "player"
      ],
      "accepted_words": [
        "boy",
        "young man",
        "thrower",
        "player"
      ],
      "common_typos": [
        "throwar",
        "yung man"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "フリスビーを投げる男の子"
          }
        ],
        "A2": [
          {
            "en": "young man",
            "ja": "フリスビーを投げる男の子"
          }
        ],
        "B1": [
          {
            "en": "boy throwing the frisbee",
            "ja": "フリスビーを投げる男の子"
          }
        ],
        "B2": [
          {
            "en": "A young man on the left is throwing the frisbee toward the center.",
            "ja": "フリスビーを投げる男の子"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of boy throwing the frisbee",
          "ja": "フリスビーを投げる男の子の印象的な様子"
        },
        {
          "en": "the part of the scene centered on boy throwing the frisbee",
          "ja": "フリスビーを投げる男の子を中心とした場面"
        },
        {
          "en": "boy throwing the frisbee adding life to the picture",
          "ja": "絵に生き生きとした印象を加えるフリスビーを投げる男の子"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, throw, player",
          "text_en": "boy, throw, player",
          "text_ja": "男の子、投げる、プレーヤー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy on the left is throwing the frisbee.",
          "text_en": "The boy on the left is throwing the frisbee.",
          "text_ja": "左の男の子がフリスビーを投げています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young player in a white T-shirt",
          "text_en": "a young player in a white T-shirt",
          "text_ja": "白いTシャツを着た若いプレーヤー"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The player on the left appears to have just sent the frisbee toward his friends.",
          "text_en": "The player on the left appears to have just sent the frisbee toward his friends.",
          "text_ja": "左のプレーヤーは、ちょうど友人たちの方へフリスビーを投げたように見えます。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "central boy catching the frisbee",
      "label_ja": "中央でフリスビーを受け取る男の子",
      "category": "person",
      "importance": "primary",
      "description": "A smiling boy in the center is opening his hands and trying to catch the frisbee.",
      "bounding_box_conceptual": [
        26,
        46,
        48,
        25
      ],
      "color": [
        "navy",
        "beige"
      ],
      "attributes": [
        "smiling",
        "ready",
        "excited"
      ],
      "action": [
        "catching",
        "reaching",
        "smiling"
      ],
      "synonyms_and_related_words": [
        "boy",
        "catcher",
        "receiver",
        "player"
      ],
      "accepted_words": [
        "boy",
        "catcher",
        "receiver",
        "player"
      ],
      "common_typos": [
        "catcer",
        "reciever"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "中央でフリスビーを受け取る男の子"
          }
        ],
        "A2": [
          {
            "en": "catcher",
            "ja": "中央でフリスビーを受け取る男の子"
          }
        ],
        "B1": [
          {
            "en": "central boy catching the frisbee",
            "ja": "中央でフリスビーを受け取る男の子"
          }
        ],
        "B2": [
          {
            "en": "A smiling boy in the center is opening his hands and trying to catch the frisbee.",
            "ja": "中央でフリスビーを受け取る男の子"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of central boy catching the frisbee",
          "ja": "中央でフリスビーを受け取る男の子の印象的な様子"
        },
        {
          "en": "the part of the scene centered on central boy catching the frisbee",
          "ja": "中央でフリスビーを受け取る男の子を中心とした場面"
        },
        {
          "en": "central boy catching the frisbee adding life to the picture",
          "ja": "絵に生き生きとした印象を加える中央でフリスビーを受け取る男の子"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, catch, smile",
          "text_en": "boy, catch, smile",
          "text_ja": "男の子、受け取る、笑う"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy in the center is trying to catch the frisbee.",
          "text_en": "The boy in the center is trying to catch the frisbee.",
          "text_ja": "中央の男の子がフリスビーを受け取ろうとしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a smiling player with open hands",
          "text_en": "a smiling player with open hands",
          "text_ja": "手を開いた笑顔のプレーヤー"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Standing in the center, the smiling player prepares to receive the flying disc.",
          "text_en": "Standing in the center, the smiling player prepares to receive the flying disc.",
          "text_ja": "中央に立つ笑顔のプレーヤーは、飛んでくるディスクを受け取る準備をしています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "other friends joining the game",
      "label_ja": "ゲームに加わるほかの友人たち",
      "category": "people",
      "importance": "primary",
      "description": "Three other friends around the central player are watching the frisbee and joining the game.",
      "bounding_box_conceptual": [
        27,
        20,
        51,
        77
      ],
      "color": [
        "white",
        "blue",
        "green"
      ],
      "attributes": [
        "supportive",
        "active",
        "engaged"
      ],
      "action": [
        "watching",
        "joining",
        "reaching"
      ],
      "synonyms_and_related_words": [
        "other players",
        "friends",
        "girl",
        "boy",
        "participants"
      ],
      "accepted_words": [
        "other players",
        "friends",
        "girl",
        "boy",
        "participants"
      ],
      "common_typos": [
        "othar players",
        "partisipants"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "other players",
            "ja": "ゲームに加わるほかの友人たち"
          }
        ],
        "A2": [
          {
            "en": "friends",
            "ja": "ゲームに加わるほかの友人たち"
          }
        ],
        "B1": [
          {
            "en": "other friends joining the game",
            "ja": "ゲームに加わるほかの友人たち"
          }
        ],
        "B2": [
          {
            "en": "Three other friends around the central player are watching the frisbee and joining the game.",
            "ja": "ゲームに加わるほかの友人たち"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of other friends joining the game",
          "ja": "ゲームに加わるほかの友人たちの印象的な様子"
        },
        {
          "en": "the part of the scene centered on other friends joining the game",
          "ja": "ゲームに加わるほかの友人たちを中心とした場面"
        },
        {
          "en": "other friends joining the game adding life to the picture",
          "ja": "絵に生き生きとした印象を加えるゲームに加わるほかの友人たち"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "friends, players, girl, boy",
          "text_en": "friends, players, girl, boy",
          "text_ja": "友人たち、プレーヤーたち、女の子、男の子"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The other friends are also joining the game.",
          "text_en": "The other friends are also joining the game.",
          "text_ja": "ほかの友人たちもゲームに加わっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "players around the center",
          "text_en": "players around the center",
          "text_ja": "中央の周りにいるプレーヤーたち"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The surrounding friends add movement and teamwork to the scene.",
          "text_en": "The surrounding friends add movement and teamwork to the scene.",
          "text_ja": "周りの友人たちが、この場面に動きとチームワークを加えています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "frisbee",
      "label_ja": "フリスビー",
      "category": "object",
      "importance": "primary",
      "description": "A white frisbee is flying above the players near the center of the image.",
      "bounding_box_conceptual": [
        19,
        41,
        10,
        16
      ],
      "color": [
        "white",
        "blue"
      ],
      "attributes": [
        "round",
        "light",
        "flying"
      ],
      "action": [
        "flying",
        "moving",
        "spinning"
      ],
      "synonyms_and_related_words": [
        "frisbee",
        "disc",
        "flying disc"
      ],
      "accepted_words": [
        "frisbee",
        "disc",
        "flying disc"
      ],
      "common_typos": [
        "frizbee",
        "frisby"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "frisbee",
            "ja": "フリスビー"
          }
        ],
        "A2": [
          {
            "en": "disc",
            "ja": "フリスビー"
          }
        ],
        "B1": [
          {
            "en": "frisbee",
            "ja": "フリスビー"
          }
        ],
        "B2": [
          {
            "en": "A white frisbee is flying above the players near the center of the image.",
            "ja": "フリスビー"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of frisbee",
          "ja": "フリスビーの印象的な様子"
        },
        {
          "en": "the part of the scene centered on frisbee",
          "ja": "フリスビーを中心とした場面"
        },
        {
          "en": "frisbee adding life to the picture",
          "ja": "絵に生き生きとした印象を加えるフリスビー"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "frisbee, disc, fly",
          "text_en": "frisbee, disc, fly",
          "text_ja": "フリスビー、ディスク、飛ぶ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The frisbee is flying in the air.",
          "text_en": "The frisbee is flying in the air.",
          "text_ja": "フリスビーが空中を飛んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a flying disc above the players",
          "text_en": "a flying disc above the players",
          "text_ja": "プレーヤーたちの上を飛ぶディスク"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The frisbee becomes the visual center of the game as it moves through the air.",
          "text_en": "The frisbee becomes the visual center of the game as it moves through the air.",
          "text_ja": "フリスビーは空中を動きながら、ゲームの視覚的な中心になっています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "park lawn",
      "label_ja": "公園の芝生",
      "category": "setting",
      "importance": "primary",
      "description": "A wide green lawn stretches across the park and gives the players room to move.",
      "bounding_box_conceptual": [
        40,
        0,
        60,
        100
      ],
      "color": [
        "green"
      ],
      "attributes": [
        "wide",
        "open",
        "fresh"
      ],
      "action": [
        "spreading",
        "supporting play"
      ],
      "synonyms_and_related_words": [
        "grass",
        "lawn",
        "field",
        "park lawn"
      ],
      "accepted_words": [
        "grass",
        "lawn",
        "field",
        "park lawn"
      ],
      "common_typos": [
        "gras",
        "lown",
        "feild"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "grass",
            "ja": "公園の芝生"
          }
        ],
        "A2": [
          {
            "en": "lawn",
            "ja": "公園の芝生"
          }
        ],
        "B1": [
          {
            "en": "park lawn",
            "ja": "公園の芝生"
          }
        ],
        "B2": [
          {
            "en": "A wide green lawn stretches across the park and gives the players room to move.",
            "ja": "公園の芝生"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of park lawn",
          "ja": "公園の芝生の印象的な様子"
        },
        {
          "en": "the part of the scene centered on park lawn",
          "ja": "公園の芝生を中心とした場面"
        },
        {
          "en": "park lawn adding life to the picture",
          "ja": "絵に生き生きとした印象を加える公園の芝生"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "grass, field, park",
          "text_en": "grass, field, park",
          "text_ja": "芝生、広場、公園"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are playing on the grass.",
          "text_en": "They are playing on the grass.",
          "text_ja": "彼らは芝生の上で遊んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wide grassy field in the park",
          "text_en": "a wide grassy field in the park",
          "text_ja": "公園の広い芝生"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The spacious lawn makes the scene feel open and active.",
          "text_en": "The spacious lawn makes the scene feel open and active.",
          "text_ja": "広々とした芝生が、この場面を開放的で活動的に感じさせています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "picnic items",
      "label_ja": "ピクニック用品",
      "category": "object",
      "importance": "secondary",
      "description": "A picnic blanket, bags, a bottle, and a basket are placed in the lower-right foreground.",
      "bounding_box_conceptual": [
        73,
        63,
        27,
        37
      ],
      "color": [
        "black",
        "blue",
        "silver",
        "beige"
      ],
      "attributes": [
        "portable",
        "casual",
        "outdoor"
      ],
      "action": [
        "resting",
        "lying"
      ],
      "synonyms_and_related_words": [
        "blanket",
        "bags",
        "bottle",
        "basket",
        "picnic items"
      ],
      "accepted_words": [
        "blanket",
        "bags",
        "bottle",
        "basket",
        "picnic items"
      ],
      "common_typos": [
        "blankit",
        "botle",
        "picnick items"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "blanket",
            "ja": "ピクニック用品"
          }
        ],
        "A2": [
          {
            "en": "bags",
            "ja": "ピクニック用品"
          }
        ],
        "B1": [
          {
            "en": "picnic items",
            "ja": "ピクニック用品"
          }
        ],
        "B2": [
          {
            "en": "A picnic blanket, bags, a bottle, and a basket are placed in the lower-right foreground.",
            "ja": "ピクニック用品"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of picnic items",
          "ja": "ピクニック用品の印象的な様子"
        },
        {
          "en": "the part of the scene centered on picnic items",
          "ja": "ピクニック用品を中心とした場面"
        },
        {
          "en": "picnic items adding life to the picture",
          "ja": "絵に生き生きとした印象を加えるピクニック用品"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bag, bottle, basket, blanket",
          "text_en": "bag, bottle, basket, blanket",
          "text_ja": "バッグ、ボトル、バスケット、シート"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are bags and a basket in the foreground.",
          "text_en": "There are bags and a basket in the foreground.",
          "text_ja": "手前にバッグとバスケットがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "picnic items on a blanket",
          "text_en": "picnic items on a blanket",
          "text_ja": "シートの上にあるピクニック用品"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The picnic items suggest that the group plans to spend more time in the park.",
          "text_en": "The picnic items suggest that the group plans to spend more time in the park.",
          "text_ja": "ピクニック用品から、そのグループが公園でさらに時間を過ごす予定であることがうかがえます。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "background scenery",
      "label_ja": "背景の風景",
      "category": "setting",
      "importance": "secondary",
      "description": "Many visitors, large green trees, and tall city buildings can be seen in the background under a blue sky with white clouds.",
      "bounding_box_conceptual": [
        0,
        0,
        44,
        100
      ],
      "color": [
        "green",
        "blue",
        "white",
        "gray"
      ],
      "attributes": [
        "lively",
        "urban",
        "sunny"
      ],
      "action": [
        "surrounding",
        "standing",
        "brightening"
      ],
      "synonyms_and_related_words": [
        "visitors",
        "trees",
        "buildings",
        "sky",
        "clouds"
      ],
      "accepted_words": [
        "visitors",
        "trees",
        "buildings",
        "sky",
        "clouds"
      ],
      "common_typos": [
        "visiters",
        "bildings",
        "clowds"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "visitors",
            "ja": "背景の風景"
          }
        ],
        "A2": [
          {
            "en": "trees",
            "ja": "背景の風景"
          }
        ],
        "B1": [
          {
            "en": "background scenery",
            "ja": "背景の風景"
          }
        ],
        "B2": [
          {
            "en": "Many visitors, large green trees, and tall city buildings can be seen in the background under a blue sky with white clouds.",
            "ja": "背景の風景"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vivid view of background scenery",
          "ja": "背景の風景の印象的な様子"
        },
        {
          "en": "the part of the scene centered on background scenery",
          "ja": "背景の風景を中心とした場面"
        },
        {
          "en": "background scenery adding life to the picture",
          "ja": "絵に生き生きとした印象を加える背景の風景"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "people, trees, buildings, sky",
          "text_en": "people, trees, buildings, sky",
          "text_ja": "人々、木々、建物、空"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many people and trees in the background.",
          "text_en": "There are many people and trees in the background.",
          "text_ja": "背景には多くの人々と木々があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a lively city park with trees and buildings",
          "text_en": "a lively city park with trees and buildings",
          "text_ja": "木々と建物のある活気ある都市公園"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The background scenery balances nature and city life, making the scene rich and realistic.",
          "text_en": "The background scenery balances nature and city life, making the scene rich and realistic.",
          "text_ja": "背景の風景は自然と都市生活の両方を含み、場面を豊かで現実的にしています。"
        }
      ]
    }
  ],
  "text_elements": [],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Playing frisbee together",
      "description_ja": "一緒にフリスビーをしている",
      "involved_elements": [
        "element_001",
        "element_005"
      ],
      "synonyms": [
        "playing frisbee",
        "play frisbee",
        "throw and catch"
      ],
      "accepted_words": [
        "playing frisbee",
        "play frisbee",
        "throw and catch"
      ],
      "common_typos": [
        "playng frisbee",
        "throw and cach"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "playing frisbee",
            "ja": "一緒にフリスビーをしている"
          }
        ],
        "A2": [
          {
            "en": "play frisbee",
            "ja": "一緒にフリスビーをしている"
          }
        ],
        "B1": [
          {
            "en": "Playing frisbee together",
            "ja": "一緒にフリスビーをしている"
          }
        ],
        "B2": [
          {
            "en": "people are playing frisbee",
            "ja": "一緒にフリスビーをしている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the action of playing frisbee together",
          "ja": "一緒にフリスビーをしているという動き"
        },
        {
          "en": "the scene showing playing frisbee together",
          "ja": "一緒にフリスビーをしているを示す場面"
        },
        {
          "en": "the lively motion of playing frisbee together",
          "ja": "一緒にフリスビーをしているの生き生きとした動き"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are playing frisbee together.",
          "text_en": "They are playing frisbee together.",
          "text_ja": "彼らは一緒にフリスビーをしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "play frisbee with friends in the park",
          "text_en": "play frisbee with friends in the park",
          "text_ja": "公園で友人とフリスビーをする"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The five friends are enjoying a lively and cooperative outdoor game.",
          "text_en": "The five friends are enjoying a lively and cooperative outdoor game.",
          "text_ja": "5人の友人たちは活気のある協力的な屋外ゲームを楽しんでいます。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Throwing the frisbee",
      "description_ja": "フリスビーを投げている",
      "involved_elements": [
        "element_002",
        "element_005"
      ],
      "synonyms": [
        "throwing the frisbee",
        "throw the disc",
        "passing the frisbee"
      ],
      "accepted_words": [
        "throwing the frisbee",
        "throw the disc",
        "passing the frisbee"
      ],
      "common_typos": [
        "throing the frisbee",
        "pasing the frisbee"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "throwing the frisbee",
            "ja": "フリスビーを投げている"
          }
        ],
        "A2": [
          {
            "en": "throw the disc",
            "ja": "フリスビーを投げている"
          }
        ],
        "B1": [
          {
            "en": "Throwing the frisbee",
            "ja": "フリスビーを投げている"
          }
        ],
        "B2": [
          {
            "en": "people are throwing the frisbee",
            "ja": "フリスビーを投げている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the action of throwing the frisbee",
          "ja": "フリスビーを投げているという動き"
        },
        {
          "en": "the scene showing throwing the frisbee",
          "ja": "フリスビーを投げているを示す場面"
        },
        {
          "en": "the lively motion of throwing the frisbee",
          "ja": "フリスビーを投げているの生き生きとした動き"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy on the left is throwing the frisbee.",
          "text_en": "The boy on the left is throwing the frisbee.",
          "text_ja": "左の男の子がフリスビーを投げています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "throw the frisbee toward the center",
          "text_en": "throw the frisbee toward the center",
          "text_ja": "フリスビーを中央へ投げる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The player on the left sends the frisbee toward the center of the group.",
          "text_en": "The player on the left sends the frisbee toward the center of the group.",
          "text_ja": "左のプレーヤーはグループの中央へフリスビーを送っています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Trying to catch the frisbee",
      "description_ja": "フリスビーを受け取ろうとしている",
      "involved_elements": [
        "element_003",
        "element_005"
      ],
      "synonyms": [
        "trying to catch the frisbee",
        "catching the frisbee",
        "receiving the pass"
      ],
      "accepted_words": [
        "trying to catch the frisbee",
        "catching the frisbee",
        "receiving the pass"
      ],
      "common_typos": [
        "tryng to catch",
        "recieving the pass"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "trying to catch the frisbee",
            "ja": "フリスビーを受け取ろうとしている"
          }
        ],
        "A2": [
          {
            "en": "catching the frisbee",
            "ja": "フリスビーを受け取ろうとしている"
          }
        ],
        "B1": [
          {
            "en": "Trying to catch the frisbee",
            "ja": "フリスビーを受け取ろうとしている"
          }
        ],
        "B2": [
          {
            "en": "people are trying to catch the frisbee",
            "ja": "フリスビーを受け取ろうとしている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the action of trying to catch the frisbee",
          "ja": "フリスビーを受け取ろうとしているという動き"
        },
        {
          "en": "the scene showing trying to catch the frisbee",
          "ja": "フリスビーを受け取ろうとしているを示す場面"
        },
        {
          "en": "the lively motion of trying to catch the frisbee",
          "ja": "フリスビーを受け取ろうとしているの生き生きとした動き"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy in the center is trying to catch the frisbee.",
          "text_en": "The boy in the center is trying to catch the frisbee.",
          "text_ja": "中央の男の子がフリスビーを受け取ろうとしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "open his hands and try to catch the disc",
          "text_en": "open his hands and try to catch the disc",
          "text_ja": "手を開いてディスクを受け取ろうとする"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The smiling player in the center is positioning himself carefully for the catch.",
          "text_en": "The smiling player in the center is positioning himself carefully for the catch.",
          "text_ja": "中央の笑顔のプレーヤーはキャッチのために慎重に位置を取っています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Joining the game",
      "description_ja": "ゲームに加わっている",
      "involved_elements": [
        "element_004"
      ],
      "synonyms": [
        "joining the game",
        "watching the frisbee",
        "moving with the group"
      ],
      "accepted_words": [
        "joining the game",
        "watching the frisbee",
        "moving with the group"
      ],
      "common_typos": [
        "joinning the game",
        "watchng the frisbee"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "joining the game",
            "ja": "ゲームに加わっている"
          }
        ],
        "A2": [
          {
            "en": "watching the frisbee",
            "ja": "ゲームに加わっている"
          }
        ],
        "B1": [
          {
            "en": "Joining the game",
            "ja": "ゲームに加わっている"
          }
        ],
        "B2": [
          {
            "en": "people are joining the game",
            "ja": "ゲームに加わっている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the action of joining the game",
          "ja": "ゲームに加わっているという動き"
        },
        {
          "en": "the scene showing joining the game",
          "ja": "ゲームに加わっているを示す場面"
        },
        {
          "en": "the lively motion of joining the game",
          "ja": "ゲームに加わっているの生き生きとした動き"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The other friends are also joining the game.",
          "text_en": "The other friends are also joining the game.",
          "text_ja": "ほかの友人たちもゲームに加わっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "watch the disc and move with the group",
          "text_en": "watch the disc and move with the group",
          "text_ja": "ディスクを見てグループと一緒に動く"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The surrounding players help create a sense of teamwork and shared attention.",
          "text_en": "The surrounding players help create a sense of teamwork and shared attention.",
          "text_ja": "周囲のプレーヤーたちは、チームワークと共有された注意の感覚を生み出しています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Spending time in the park",
      "description_ja": "公園で時間を過ごしている",
      "involved_elements": [
        "element_001",
        "element_007",
        "element_008"
      ],
      "synonyms": [
        "spending time in the park",
        "having fun outdoors",
        "enjoying the park"
      ],
      "accepted_words": [
        "spending time in the park",
        "having fun outdoors",
        "enjoying the park"
      ],
      "common_typos": [
        "spendng time",
        "enjoing the park"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "spending time in the park",
            "ja": "公園で時間を過ごしている"
          }
        ],
        "A2": [
          {
            "en": "having fun outdoors",
            "ja": "公園で時間を過ごしている"
          }
        ],
        "B1": [
          {
            "en": "Spending time in the park",
            "ja": "公園で時間を過ごしている"
          }
        ],
        "B2": [
          {
            "en": "people are spending time in the park",
            "ja": "公園で時間を過ごしている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the action of spending time in the park",
          "ja": "公園で時間を過ごしているという動き"
        },
        {
          "en": "the scene showing spending time in the park",
          "ja": "公園で時間を過ごしているを示す場面"
        },
        {
          "en": "the lively motion of spending time in the park",
          "ja": "公園で時間を過ごしているの生き生きとした動き"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are having fun in the park.",
          "text_en": "They are having fun in the park.",
          "text_ja": "彼らは公園で楽しんでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "spend a fun afternoon outdoors",
          "text_en": "spend a fun afternoon outdoors",
          "text_ja": "屋外で楽しい午後を過ごす"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The picnic items and relaxed atmosphere suggest that the group is spending a pleasant afternoon together.",
          "text_en": "The picnic items and relaxed atmosphere suggest that the group is spending a pleasant afternoon together.",
          "text_ja": "ピクニック用品とリラックスした雰囲気から、そのグループが一緒に楽しい午後を過ごしていることが分かります。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "left boy",
      "relationship": "to the left of",
      "object": "the group",
      "example_beginner": "The boy is on the left.",
      "example_intermediate": "The boy in a white T-shirt is to the left of the group."
    },
    {
      "subject": "central boy",
      "relationship": "in the center of",
      "object": "the players",
      "example_beginner": "The smiling boy is in the center.",
      "example_intermediate": "The smiling boy is standing in the center of the players."
    },
    {
      "subject": "frisbee",
      "relationship": "above",
      "object": "the players",
      "example_beginner": "The frisbee is above the players.",
      "example_intermediate": "The frisbee is flying above the players."
    },
    {
      "subject": "other friends",
      "relationship": "around",
      "object": "the central player",
      "example_beginner": "The other friends are around him.",
      "example_intermediate": "The other friends are standing around the central player."
    },
    {
      "subject": "picnic items",
      "relationship": "in the foreground of",
      "object": "the scene",
      "example_beginner": "The picnic items are in the foreground.",
      "example_intermediate": "The picnic blanket and bags are in the lower-right foreground."
    },
    {
      "subject": "buildings",
      "relationship": "behind",
      "object": "the trees",
      "example_beginner": "The buildings are behind the trees.",
      "example_intermediate": "Tall city buildings can be seen behind the trees."
    }
  ],
  "adjective_library": {
    "people": [
      "young",
      "active",
      "friendly",
      "cheerful",
      "smiling",
      "energetic"
    ],
    "park": [
      "wide",
      "green",
      "sunny",
      "open",
      "lively",
      "refreshing"
    ],
    "movement": [
      "dynamic",
      "playful",
      "quick",
      "cooperative"
    ],
    "objects": [
      "portable",
      "casual",
      "outdoor",
      "practical"
    ],
    "atmosphere": [
      "bright",
      "happy",
      "social",
      "healthy",
      "carefree"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "They are in the park."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上で",
      "example": "They are playing on the grass."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "The frisbee is above the players."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周りに",
      "example": "The other friends are around the central player."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The buildings are behind the trees."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜と一緒に / 〜を持って",
      "example": "They are playing with their friends."
    },
    {
      "preposition": "in the foreground",
      "meaning_ja": "手前に",
      "example": "The picnic items are in the foreground."
    },
    {
      "preposition": "in the background",
      "meaning_ja": "背景に",
      "example": "Many people are in the background."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "複数の人が今していることを表す。",
      "examples": [
        "Five friends are playing frisbee.",
        "They are having fun in the park."
      ],
      "hints": [
        "five friends のように複数主語のときは are を使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "There構文",
      "level": "beginner",
      "purpose_ja": "人や物の存在を表す。",
      "examples": [
        "There are many people in the background.",
        "There is a frisbee in the air."
      ],
      "hints": [
        "単数なら There is、複数なら There are を使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞 + 形容詞",
      "level": "beginner",
      "purpose_ja": "人や場所の様子を言う。",
      "examples": [
        "The park is lively.",
        "The sky is bright and blue."
      ],
      "hints": [
        "bright, blue, lively, active などが使えます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "while + clause",
      "label_ja": "whileを使った同時進行",
      "level": "intermediate",
      "purpose_ja": "2つの動作をつなぐ。",
      "examples": [
        "One boy is throwing the frisbee while another is trying to catch it."
      ],
      "hints": [
        "while を使うと、同時に起きていることを1文で表せます。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Relative clause (who / which)",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "名詞を詳しく説明する。",
      "examples": [
        "The boy who is in the center is smiling.",
        "The frisbee, which is flying above the players, is white."
      ],
      "hints": [
        "人には who、物には which が使えます。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "動きを豊かに表す。",
      "examples": [
        "Reaching for the frisbee, the central player smiles brightly."
      ],
      "hints": [
        "動詞ing で始めると、上級らしい文になります。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "It seems / It looks like ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "見た様子から推測する。",
      "examples": [
        "It seems that the friends are enjoying a fun weekend afternoon."
      ],
      "hints": [
        "seems / looks like を使うと推測を表せます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are five young people."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are in ______.",
        "example": "They are in the park."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______.",
        "example": "They are playing frisbee."
      }
    ],
    "intermediate": [
      {
        "template": "Five young people are ______ on ______.",
        "example": "Five young people are playing frisbee on the grass."
      },
      {
        "template": "One person is ______ while another is ______.",
        "example": "One boy is throwing the frisbee while another is trying to catch it."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see many people, trees, and buildings."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Reaching toward the frisbee, the smiling player in the center prepares to catch it."
      },
      {
        "template": "Complex description.",
        "example": "Bathed in sunlight, the park scene feels open, lively, and full of youthful energy."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "Five friends are in the park.",
      "They are playing frisbee.",
      "One boy is throwing the frisbee.",
      "Another boy is trying to catch it."
    ],
    "intermediate": [
      "Five young people are playing frisbee on a wide green field in a city park.",
      "The boy on the left is throwing the frisbee while the smiling boy in the center is trying to catch it.",
      "Other friends are also joining the game.",
      "There are picnic items in the foreground and many people in the background."
    ],
    "advanced": [
      "In a bright city park, five young friends are enjoying a lively game of frisbee on the grass.",
      "The player on the left appears to have just thrown the disc, while the smiling boy in the center prepares to catch it.",
      "The background of visitors, trees, and buildings makes the scene feel social, open, and energetic."
    ]
  },
  "full_description_support": {
    "beginner_model": "Five young people are in the park. They are playing frisbee on the grass. One boy is throwing the frisbee. Another boy is trying to catch it. Other friends are joining the game. The sky is blue and sunny.",
    "intermediate_model": "Five young people are playing frisbee on a wide green field in a city park. The boy on the left is throwing the frisbee, and the smiling boy in the center is trying to catch it. Other friends are standing around them and joining the game. In the foreground, there are picnic items such as bags, a bottle, and a basket. In the background, many people, trees, and tall buildings can be seen.",
    "advanced_model": "Under a clear blue sky with white clouds, five young friends are enjoying a lively frisbee game in a city park. The player on the left has thrown the disc toward the center, where a smiling boy is ready to catch it, while the others watch and join the flow of the game. In the foreground, picnic items suggest that the group is spending a relaxed but active afternoon outdoors. The visitors, trees, and city buildings in the background make the scene rich, realistic, and energetic."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "Five friends are in the park. They are playing frisbee.",
        "ja": "5人の友人が公園にいます。彼らはフリスビーをしています。",
        "focus": "複数主語に合わせて are playing を使う。"
      }
    ],
    "A2": [
      {
        "en": "The boy on the left is throwing the frisbee while the boy in the center is trying to catch it.",
        "ja": "左の男の子がフリスビーを投げ、中央の男の子がそれを受け取ろうとしています。",
        "focus": "while を使って2つの動作をつなぐ。"
      }
    ],
    "B1": [
      {
        "en": "A group of friends is enjoying an active afternoon by playing frisbee in a lively city park.",
        "ja": "友人のグループが、活気ある都市公園でフリスビーをしながら活動的な午後を楽しんでいます。",
        "focus": "enjoying an active afternoon などの表現を使う。"
      }
    ],
    "B2": [
      {
        "en": "The park, which is filled with visitors and framed by trees, seems to offer an ideal place for young people who want to combine exercise, friendship, and relaxation.",
        "ja": "多くの利用者がおり木々に囲まれたこの公園は、運動、友情、くつろぎを組み合わせたい若者たちに理想的な場所を提供しているようです。",
        "focus": "which / who の関係代名詞と seems to を組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene012Data = scene012Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene012Data;
}
