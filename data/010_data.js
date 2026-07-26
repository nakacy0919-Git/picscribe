"use strict";

const scene010Data = {
  "id": "scene_010",
  "image_id": "010.webp",
  "overall_description_ja": "明るい日差しが差し込むカフェで、2人の若い女性が木製のテーブルを挟んで向かい合い、笑いながら会話を楽しんでいる。左の女性は白いニットを着て白いカップを持ち、右の女性は青いデニムシャツを着て頬杖をついている。テーブルの上にはアイスドリンク、ケーキ、皿、フォークがあり、背景には大きな窓、観葉植物、ペンダントライト、カウンター、黒板メニューが見える。自然光と2人の笑顔が、親しみやすく活気のある雰囲気を作っている。",
  "overall_description_en": "Two young women are sitting across from each other at a wooden table in a bright cafe, chatting and laughing together. The woman on the left is wearing a white knit sweater and holding a white cup, while the woman on the right is wearing a blue denim shirt and resting her cheek on one hand. An iced drink, a small cake, a plate, and a fork are on the table. Large windows, green plants, pendant lights, a cafe counter, and a blackboard menu can be seen in the background. The warm sunlight and their cheerful expressions create a friendly and lively atmosphere.",
  "overall_mood": [
    "cheerful",
    "friendly",
    "bright",
    "warm",
    "lively",
    "relaxed",
    "joyful",
    "social",
    "comfortable",
    "sunny",
    "welcoming",
    "casual",
    "positive",
    "animated",
    "cozy"
  ],
  "mission_guides": {
    "gist": "2人の女性（two women / two friends）が、何をしているか（chatting / laughing）を書こう",
    "setting": "場所（cafe）、向かい合う位置（across from each other）、木製のテーブル（wooden table）に注目しよう",
    "details": "白いカップ、アイスドリンク、ケーキ、服装、黒板メニュー、植物などを加えよう",
    "complete": "自然光、笑顔、友情、明るく親しみやすい雰囲気まで含めて描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "two young women talking together",
        "ja": "一緒に話している2人の若い女性"
      },
      {
        "en": "laughing across the table",
        "ja": "テーブルを挟んで笑っている"
      },
      {
        "en": "one woman holding a coffee cup",
        "ja": "1人の女性がコーヒーカップを持っている"
      },
      {
        "en": "two friends enjoying a conversation",
        "ja": "会話を楽しむ2人の友人"
      }
    ],
    "setting": [
      {
        "en": "inside a bright and cozy cafe",
        "ja": "明るく居心地のよいカフェの中で"
      },
      {
        "en": "sitting across from each other at a wooden table",
        "ja": "木製のテーブルで向かい合って座っている"
      },
      {
        "en": "a cake and drinks on the table",
        "ja": "テーブルの上のケーキと飲み物"
      },
      {
        "en": "large windows, plants, and a menu board in the background",
        "ja": "背景にある大きな窓、植物、メニューボード"
      }
    ],
    "mood": [
      {
        "en": "a cheerful and friendly atmosphere",
        "ja": "明るく親しみやすい雰囲気"
      },
      {
        "en": "warm sunlight filling the cafe",
        "ja": "カフェを満たす暖かな日差し"
      },
      {
        "en": "happy and relaxed expressions",
        "ja": "幸せそうでくつろいだ表情"
      },
      {
        "en": "a lively moment between close friends",
        "ja": "親しい友人同士の活気あるひととき"
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
        "two women",
        "two young women",
        "two friends",
        "women",
        "friends",
        "customers",
        "they",
        "the pair"
      ],
      "hint_msg": "まずは「2人の女性（two women）」や「2人の友人（two friends）」など、複数の主語を書きましょう。",
      "success_msg": "Good! 次は、2人が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "chatting",
        "talking",
        "laughing",
        "smiling",
        "drinking",
        "enjoying",
        "sitting",
        "sharing"
      ],
      "hint_msg": "「話している（are talking）」「笑っている（are laughing）」など、複数主語に合わせて are + 動詞ing を使いましょう。",
      "success_msg": "Great! 次に、場所や飲み物、相手との関係を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "cafe",
        "coffee shop",
        "table",
        "coffee",
        "drink",
        "cake",
        "friend",
        "conversation",
        "window",
        "sunlight"
      ],
      "hint_msg": "「カフェで（in a cafe）」「テーブルで（at a table）」「友人と（with a friend）」などを加えましょう。",
      "success_msg": "Excellent! 次は服装、食べ物、背景、感情や雰囲気を加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "friends chatting at a cafe",
    "laughing together",
    "enjoying coffee and cake",
    "a cheerful conversation",
    "spending time with a close friend",
    "a sunny cafe interior",
    "friendly social interaction"
  ],
  "scene_structure": {
    "foreground": [
      "wooden table",
      "white cup",
      "iced drink",
      "small cake",
      "white plate",
      "fork"
    ],
    "midground": [
      "woman in a white sweater",
      "woman in a denim shirt",
      "wooden chairs",
      "sunlight across the table"
    ],
    "background": [
      "large cafe windows",
      "street outside",
      "green plants",
      "pendant lights",
      "blackboard menu",
      "cafe counter",
      "shelves",
      "other tables and chairs"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "woman in white sweater",
      "label_ja": "白いセーターの女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with brown hair tied in a loose bun is sitting on the left. She is wearing a white knit sweater, smiling broadly, and holding a white cup in her right hand.",
      "bounding_box_conceptual": [
        17,
        4,
        76,
        47
      ],
      "color": [
        "white",
        "brown",
        "blue"
      ],
      "attributes": [
        "young",
        "cheerful",
        "smiling",
        "relaxed",
        "friendly",
        "animated"
      ],
      "action": [
        "sitting",
        "laughing",
        "holding a cup",
        "talking",
        "looking at her friend"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "lady",
        "friend",
        "customer",
        "female customer",
        "woman in white",
        "she"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "lady",
        "friend",
        "customer",
        "female customer",
        "woman in white",
        "she"
      ],
      "common_typos": [
        "womon",
        "young women",
        "ladie",
        "costomer",
        "femail customer",
        "women in white"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "woman",
            "ja": "女性"
          }
        ],
        "A2": [
          {
            "en": "young woman",
            "ja": "若い女性"
          }
        ],
        "B1": [
          {
            "en": "female customer",
            "ja": "女性客"
          }
        ],
        "B2": [
          {
            "en": "an expressive friend sharing a joyful moment",
            "ja": "楽しいひとときを分かち合う表情豊かな友人"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright laugh beside a warm cup",
          "ja": "温かなカップのそばにある明るい笑い声"
        },
        {
          "en": "a cheerful friend leaning into the conversation",
          "ja": "会話へ身を乗り出す明るい友人"
        },
        {
          "en": "a smiling figure filled with morning energy",
          "ja": "朝の活気に満ちた笑顔の人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, friend, white sweater, cup",
          "text_en": "woman, friend, white sweater, cup",
          "text_ja": "女性、友人、白いセーター、カップ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is holding a cup.",
          "text_en": "The woman is holding a cup.",
          "text_ja": "女性はカップを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a cheerful woman wearing a white knit sweater",
          "text_en": "a cheerful woman wearing a white knit sweater",
          "text_ja": "白いニットセーターを着た明るい女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman in the white sweater, laughing openly, appears deeply engaged in the conversation.",
          "text_en": "The woman in the white sweater, laughing openly, appears deeply engaged in the conversation.",
          "text_ja": "白いセーターの女性は大きく笑い、会話に深く参加しているようです。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "woman in denim shirt",
      "label_ja": "デニムシャツの女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with long dark hair is sitting on the right. She is wearing a blue denim shirt, resting her cheek on one hand, and laughing at her friend.",
      "bounding_box_conceptual": [
        18,
        48,
        79,
        47
      ],
      "color": [
        "blue",
        "black",
        "brown"
      ],
      "attributes": [
        "young",
        "happy",
        "relaxed",
        "friendly",
        "amused",
        "attentive"
      ],
      "action": [
        "sitting",
        "laughing",
        "resting her cheek",
        "listening",
        "looking at her friend"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "lady",
        "friend",
        "customer",
        "female customer",
        "woman in blue",
        "she"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "lady",
        "friend",
        "customer",
        "female customer",
        "woman in blue",
        "she"
      ],
      "common_typos": [
        "womon",
        "young women",
        "ladie",
        "costomer",
        "femail customer",
        "women in blue"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "woman",
            "ja": "女性"
          }
        ],
        "A2": [
          {
            "en": "young woman",
            "ja": "若い女性"
          }
        ],
        "B1": [
          {
            "en": "female friend",
            "ja": "女性の友人"
          }
        ],
        "B2": [
          {
            "en": "an amused listener enjoying the conversation",
            "ja": "会話を楽しむ愉快そうな聞き手"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm smile answering her friend's laughter",
          "ja": "友人の笑いに応える暖かな笑顔"
        },
        {
          "en": "a relaxed listener leaning into the moment",
          "ja": "その瞬間へ身を預けるくつろいだ聞き手"
        },
        {
          "en": "a joyful face framed by dark hair and sunlight",
          "ja": "黒い髪と日差しに縁取られた喜びの表情"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, friend, blue shirt, smile",
          "text_en": "woman, friend, blue shirt, smile",
          "text_ja": "女性、友人、青いシャツ、笑顔"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is laughing.",
          "text_en": "The woman is laughing.",
          "text_ja": "女性は笑っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a smiling woman in a blue denim shirt",
          "text_en": "a smiling woman in a blue denim shirt",
          "text_ja": "青いデニムシャツを着た笑顔の女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Resting her cheek on one hand, the woman in denim listens and laughs with her friend.",
          "text_en": "Resting her cheek on one hand, the woman in denim listens and laughs with her friend.",
          "text_ja": "片手で頬杖をつき、デニム姿の女性は友人の話を聞いて笑っています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "two friends",
      "label_ja": "2人の友人",
      "category": "people",
      "importance": "primary",
      "description": "Two young women are seated across from each other at the same table, making eye contact and sharing a cheerful conversation.",
      "bounding_box_conceptual": [
        17,
        4,
        80,
        91
      ],
      "color": [
        "white",
        "blue",
        "brown"
      ],
      "attributes": [
        "friendly",
        "close",
        "cheerful",
        "social",
        "relaxed",
        "engaged"
      ],
      "action": [
        "chatting",
        "laughing together",
        "making eye contact",
        "spending time together"
      ],
      "synonyms_and_related_words": [
        "two women",
        "two young women",
        "two friends",
        "friends",
        "the women",
        "the pair",
        "customers",
        "companions",
        "they"
      ],
      "accepted_words": [
        "two women",
        "two young women",
        "two friends",
        "friends",
        "the women",
        "the pair",
        "customers",
        "companions",
        "they"
      ],
      "common_typos": [
        "two womans",
        "two young womenes",
        "freinds",
        "the womens",
        "companians",
        "they is"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "two women",
            "ja": "2人の女性"
          }
        ],
        "A2": [
          {
            "en": "two friends",
            "ja": "2人の友人"
          }
        ],
        "B1": [
          {
            "en": "close friends",
            "ja": "親しい友人"
          }
        ],
        "B2": [
          {
            "en": "two companions sharing an animated exchange",
            "ja": "活気あるやり取りを分かち合う2人の仲間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two friends turning an ordinary coffee break into a joyful memory",
          "ja": "普通のコーヒー休憩を楽しい思い出へ変える2人の友人"
        },
        {
          "en": "laughter traveling freely across the wooden table",
          "ja": "木製テーブルを越えて自由に行き交う笑い声"
        },
        {
          "en": "a friendship visible in every smile and glance",
          "ja": "すべての笑顔と視線に表れる友情"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "two women, two friends, they, together",
          "text_en": "two women, two friends, they, together",
          "text_ja": "2人の女性、2人の友人、彼女たち、一緒に"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are talking and laughing.",
          "text_en": "They are talking and laughing.",
          "text_ja": "彼女たちは話して笑っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "two close friends enjoying time together",
          "text_en": "two close friends enjoying time together",
          "text_ja": "一緒の時間を楽しむ2人の親しい友人"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two friends, seated across from each other, communicate through laughter, eye contact, and relaxed body language.",
          "text_en": "The two friends, seated across from each other, communicate through laughter, eye contact, and relaxed body language.",
          "text_ja": "向かい合って座る2人の友人は、笑い、視線、くつろいだ身振りで気持ちを伝え合っています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "white coffee cup",
      "label_ja": "白いコーヒーカップ",
      "category": "object",
      "importance": "primary",
      "description": "A simple white ceramic cup is being held by the woman on the left near the center of the table.",
      "bounding_box_conceptual": [
        51,
        38,
        13,
        10
      ],
      "color": [
        "white",
        "cream"
      ],
      "attributes": [
        "ceramic",
        "small",
        "plain",
        "warm-looking",
        "handled"
      ],
      "action": [
        "being held",
        "containing a drink",
        "being raised above the table"
      ],
      "synonyms_and_related_words": [
        "cup",
        "coffee cup",
        "white cup",
        "ceramic cup",
        "mug",
        "hot drink",
        "coffee",
        "tea"
      ],
      "accepted_words": [
        "cup",
        "coffee cup",
        "white cup",
        "ceramic cup",
        "mug",
        "hot drink",
        "coffee",
        "tea"
      ],
      "common_typos": [
        "cofee cup",
        "coffe cup",
        "ceremic cup",
        "mugg",
        "hot drnik"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cup",
            "ja": "カップ"
          }
        ],
        "A2": [
          {
            "en": "coffee cup",
            "ja": "コーヒーカップ"
          }
        ],
        "B1": [
          {
            "en": "ceramic cup",
            "ja": "陶器のカップ"
          }
        ],
        "B2": [
          {
            "en": "a warm drink held during the conversation",
            "ja": "会話中に持たれた温かい飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm pause held between laughter",
          "ja": "笑いの合間に持たれた温かな休憩"
        },
        {
          "en": "a small white cup joining the conversation",
          "ja": "会話へ加わる小さな白いカップ"
        },
        {
          "en": "a quiet source of comfort in her hand",
          "ja": "手の中にある静かな安らぎ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cup, coffee, white, hold",
          "text_en": "cup, coffee, white, hold",
          "text_ja": "カップ、コーヒー、白い、持つ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is holding a white cup.",
          "text_en": "She is holding a white cup.",
          "text_ja": "彼女は白いカップを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a white ceramic cup held near her chest",
          "text_en": "a white ceramic cup held near her chest",
          "text_ja": "胸の近くで持たれた白い陶器のカップ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The cup in her hand suggests that the conversation is taking place during a relaxed coffee break.",
          "text_en": "The cup in her hand suggests that the conversation is taking place during a relaxed coffee break.",
          "text_ja": "手にしたカップから、くつろいだコーヒー休憩中の会話であることが分かります。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "iced drink",
      "label_ja": "アイスドリンク",
      "category": "object",
      "importance": "primary",
      "description": "A tall clear glass filled with a dark iced drink, ice cubes, and a black straw stands near the center-right of the table.",
      "bounding_box_conceptual": [
        61,
        47,
        22,
        9
      ],
      "color": [
        "dark brown",
        "transparent",
        "black"
      ],
      "attributes": [
        "cold",
        "clear",
        "tall",
        "iced",
        "refreshing"
      ],
      "action": [
        "standing on the table",
        "containing ice",
        "holding a straw"
      ],
      "synonyms_and_related_words": [
        "iced drink",
        "cold drink",
        "iced coffee",
        "iced tea",
        "glass",
        "beverage",
        "soft drink",
        "drink with ice"
      ],
      "accepted_words": [
        "iced drink",
        "cold drink",
        "iced coffee",
        "iced tea",
        "glass",
        "beverage",
        "soft drink",
        "drink with ice"
      ],
      "common_typos": [
        "ice drink",
        "iced cofee",
        "cold drnik",
        "bevarage",
        "drink with ise"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cold drink",
            "ja": "冷たい飲み物"
          }
        ],
        "A2": [
          {
            "en": "iced drink",
            "ja": "アイスドリンク"
          }
        ],
        "B1": [
          {
            "en": "iced coffee",
            "ja": "アイスコーヒー"
          }
        ],
        "B2": [
          {
            "en": "a refreshing beverage served over ice",
            "ja": "氷とともに提供された爽やかな飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark glass catching the sunlight and conversation",
          "ja": "日差しと会話を受け止める濃い色のグラス"
        },
        {
          "en": "a cool drink balancing the warmth of the cafe",
          "ja": "カフェの温かさと調和する冷たい飲み物"
        },
        {
          "en": "ice and light sparkling beside the laughter",
          "ja": "笑い声のそばで輝く氷と光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "drink, glass, ice, straw",
          "text_en": "drink, glass, ice, straw",
          "text_ja": "飲み物、グラス、氷、ストロー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is an iced drink on the table.",
          "text_en": "There is an iced drink on the table.",
          "text_ja": "テーブルの上にアイスドリンクがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a tall glass of iced coffee with a black straw",
          "text_en": "a tall glass of iced coffee with a black straw",
          "text_ja": "黒いストローが入った背の高いアイスコーヒー"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The condensation and visible ice make the drink appear cool and refreshing in the sunlit cafe.",
          "text_en": "The condensation and visible ice make the drink appear cool and refreshing in the sunlit cafe.",
          "text_ja": "水滴と見える氷によって、日当たりのよいカフェで飲み物が冷たく爽やかに見えます。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "cake",
      "label_ja": "ケーキ",
      "category": "food",
      "importance": "primary",
      "description": "A small layered chocolate cake topped with cream, strawberries, and berries sits on a white plate between the two women.",
      "bounding_box_conceptual": [
        72,
        35,
        14,
        15
      ],
      "color": [
        "brown",
        "white",
        "red",
        "cream"
      ],
      "attributes": [
        "small",
        "sweet",
        "layered",
        "decorated",
        "fresh-looking"
      ],
      "action": [
        "sitting on a plate",
        "being shared",
        "waiting to be eaten"
      ],
      "synonyms_and_related_words": [
        "cake",
        "small cake",
        "chocolate cake",
        "dessert",
        "slice of cake",
        "sweet",
        "pastry",
        "berry cake"
      ],
      "accepted_words": [
        "cake",
        "small cake",
        "chocolate cake",
        "dessert",
        "slice of cake",
        "sweet",
        "pastry",
        "berry cake"
      ],
      "common_typos": [
        "cak",
        "choclate cake",
        "desert",
        "slice off cake",
        "pastrie",
        "bery cake"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cake",
            "ja": "ケーキ"
          }
        ],
        "A2": [
          {
            "en": "small dessert",
            "ja": "小さなデザート"
          }
        ],
        "B1": [
          {
            "en": "layered chocolate cake",
            "ja": "層になったチョコレートケーキ"
          }
        ],
        "B2": [
          {
            "en": "a carefully decorated dessert shared between friends",
            "ja": "友人同士で分け合う丁寧に飾られたデザート"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small celebration placed between two friends",
          "ja": "2人の友人の間に置かれた小さなお祝い"
        },
        {
          "en": "a sweet centerpiece beneath their laughter",
          "ja": "笑い声の下にある甘い中心"
        },
        {
          "en": "berries and cream turning the table into a cheerful occasion",
          "ja": "テーブルを楽しいひとときへ変えるベリーとクリーム"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cake, dessert, strawberry, plate",
          "text_en": "cake, dessert, strawberry, plate",
          "text_ja": "ケーキ、デザート、イチゴ、皿"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a cake between the two women.",
          "text_en": "There is a cake between the two women.",
          "text_ja": "2人の女性の間にケーキがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a small chocolate cake topped with cream and berries",
          "text_en": "a small chocolate cake topped with cream and berries",
          "text_ja": "クリームとベリーが載った小さなチョコレートケーキ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The decorated cake suggests that the friends may be celebrating or simply enjoying a special treat together.",
          "text_en": "The decorated cake suggests that the friends may be celebrating or simply enjoying a special treat together.",
          "text_ja": "飾られたケーキから、友人たちがお祝いをしているか、特別なおやつを楽しんでいる可能性がうかがえます。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "wooden table",
      "label_ja": "木製のテーブル",
      "category": "furniture",
      "importance": "primary",
      "description": "A square wooden cafe table separates the two women and holds their drinks, cake, plate, and fork.",
      "bounding_box_conceptual": [
        65,
        5,
        35,
        87
      ],
      "color": [
        "brown",
        "golden brown"
      ],
      "attributes": [
        "wooden",
        "square",
        "polished",
        "warm-toned",
        "sturdy"
      ],
      "action": [
        "supporting food and drinks",
        "standing between the women"
      ],
      "synonyms_and_related_words": [
        "table",
        "wooden table",
        "cafe table",
        "square table",
        "dining table",
        "coffee table",
        "shared table"
      ],
      "accepted_words": [
        "table",
        "wooden table",
        "cafe table",
        "square table",
        "dining table",
        "coffee table",
        "shared table"
      ],
      "common_typos": [
        "tabel",
        "wooden tabel",
        "cafe tabel",
        "sqare table",
        "dinning table"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "table",
            "ja": "テーブル"
          }
        ],
        "A2": [
          {
            "en": "cafe table",
            "ja": "カフェのテーブル"
          }
        ],
        "B1": [
          {
            "en": "wooden table",
            "ja": "木製のテーブル"
          }
        ],
        "B2": [
          {
            "en": "a shared surface connecting the two friends",
            "ja": "2人の友人をつなぐ共有の場所"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden bridge carrying drinks, dessert, and laughter",
          "ja": "飲み物、デザート、笑いを運ぶ木の橋"
        },
        {
          "en": "the warm center of their conversation",
          "ja": "2人の会話の暖かな中心"
        },
        {
          "en": "a simple table transformed by friendship",
          "ja": "友情によって特別な場所へ変わる普通のテーブル"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "table, wood, cafe, between",
          "text_en": "table, wood, cafe, between",
          "text_ja": "テーブル、木、カフェ、間"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The table is between the two women.",
          "text_en": "The table is between the two women.",
          "text_ja": "テーブルは2人の女性の間にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a square wooden table holding drinks and cake",
          "text_en": "a square wooden table holding drinks and cake",
          "text_ja": "飲み物とケーキを載せた四角い木製テーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The shared table functions as both a physical and social center for their conversation.",
          "text_en": "The shared table functions as both a physical and social center for their conversation.",
          "text_ja": "共有するテーブルが、会話の物理的・社会的な中心として機能しています。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "large windows and sunlight",
      "label_ja": "大きな窓と日差し",
      "category": "setting",
      "importance": "primary",
      "description": "Large windows on the left fill the cafe with bright natural sunlight and reveal trees, buildings, and a street outside.",
      "bounding_box_conceptual": [
        0,
        0,
        52,
        61
      ],
      "color": [
        "green",
        "white",
        "golden",
        "blue"
      ],
      "attributes": [
        "large",
        "bright",
        "sunny",
        "clear",
        "open-looking"
      ],
      "action": [
        "letting in sunlight",
        "showing the street",
        "illuminating the women"
      ],
      "synonyms_and_related_words": [
        "window",
        "large window",
        "sunlight",
        "natural light",
        "daylight",
        "street view",
        "outside view",
        "sunny window"
      ],
      "accepted_words": [
        "window",
        "large window",
        "sunlight",
        "natural light",
        "daylight",
        "street view",
        "outside view",
        "sunny window"
      ],
      "common_typos": [
        "windo",
        "sun ligth",
        "naturul light",
        "day ligth",
        "street veiw"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "window",
            "ja": "窓"
          }
        ],
        "A2": [
          {
            "en": "sunlight",
            "ja": "日差し"
          }
        ],
        "B1": [
          {
            "en": "natural light",
            "ja": "自然光"
          }
        ],
        "B2": [
          {
            "en": "bright daylight pouring through floor-to-ceiling windows",
            "ja": "床から天井までの窓から注ぐ明るい日差し"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight joining the conversation at the table",
          "ja": "テーブルの会話へ加わる日差し"
        },
        {
          "en": "a bright outdoor world opening behind the friends",
          "ja": "友人たちの後ろに開く明るい外の世界"
        },
        {
          "en": "golden light turning an ordinary meeting into a vivid memory",
          "ja": "普通の出会いを鮮やかな思い出へ変える金色の光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, sunlight, bright, outside",
          "text_en": "window, sunlight, bright, outside",
          "text_ja": "窓、日差し、明るい、外"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Sunlight is coming through the windows.",
          "text_en": "Sunlight is coming through the windows.",
          "text_ja": "日差しが窓から入っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "large windows filled with warm natural light",
          "text_en": "large windows filled with warm natural light",
          "text_ja": "暖かな自然光に満ちた大きな窓"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Streaming through the windows, the sunlight highlights the women's faces and creates an energetic atmosphere.",
          "text_en": "Streaming through the windows, the sunlight highlights the women's faces and creates an energetic atmosphere.",
          "text_ja": "窓から差し込む日差しが女性たちの顔を照らし、活気ある雰囲気を作っています。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "blackboard menu",
      "label_ja": "黒板メニュー",
      "category": "sign",
      "importance": "secondary",
      "description": "A large blackboard menu in a wooden frame hangs on the wall behind the woman in denim and lists several drinks and a scone.",
      "bounding_box_conceptual": [
        5,
        70,
        43,
        22
      ],
      "color": [
        "black",
        "brown",
        "white"
      ],
      "attributes": [
        "large",
        "handwritten",
        "decorative",
        "informative",
        "framed"
      ],
      "action": [
        "displaying menu items",
        "hanging on the wall"
      ],
      "synonyms_and_related_words": [
        "menu",
        "menu board",
        "blackboard menu",
        "chalkboard",
        "cafe menu",
        "drink list",
        "signboard"
      ],
      "accepted_words": [
        "menu",
        "menu board",
        "blackboard menu",
        "chalkboard",
        "cafe menu",
        "drink list",
        "signboard"
      ],
      "common_typos": [
        "menue",
        "menu bord",
        "black bord",
        "chalk bord",
        "cafe menue",
        "sign bord"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "menu",
            "ja": "メニュー"
          }
        ],
        "A2": [
          {
            "en": "menu board",
            "ja": "メニューボード"
          }
        ],
        "B1": [
          {
            "en": "blackboard menu",
            "ja": "黒板メニュー"
          }
        ],
        "B2": [
          {
            "en": "a handwritten cafe menu displaying available drinks and food",
            "ja": "飲み物と食べ物を示す手書きのカフェメニュー"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark wall of handwritten choices",
          "ja": "手書きの選択肢が並ぶ黒い壁"
        },
        {
          "en": "the cafe's voice written in white chalk",
          "ja": "白いチョークで書かれたカフェの声"
        },
        {
          "en": "a simple list shaping the flavors of the scene",
          "ja": "場面の味を形作る簡単なリスト"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "menu, coffee, tea, juice",
          "text_en": "menu, coffee, tea, juice",
          "text_ja": "メニュー、コーヒー、紅茶、ジュース"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a menu on the wall.",
          "text_en": "There is a menu on the wall.",
          "text_ja": "壁にメニューがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a blackboard menu listing drinks and a scone",
          "text_en": "a blackboard menu listing drinks and a scone",
          "text_ja": "飲み物とスコーンを載せた黒板メニュー"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The handwritten board reinforces the casual, independent atmosphere of the cafe.",
          "text_en": "The handwritten board reinforces the casual, independent atmosphere of the cafe.",
          "text_ja": "手書きの黒板が、カフェの気軽で個性的な雰囲気を強めています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "plants",
      "label_ja": "観葉植物",
      "category": "nature",
      "importance": "secondary",
      "description": "Several leafy green plants are placed near the windows, on shelves, and around the cafe interior.",
      "bounding_box_conceptual": [
        11,
        0,
        55,
        99
      ],
      "color": [
        "green",
        "brown",
        "cream"
      ],
      "attributes": [
        "leafy",
        "fresh",
        "natural",
        "decorative",
        "indoor"
      ],
      "action": [
        "decorating the cafe",
        "growing near the windows",
        "softening the interior"
      ],
      "synonyms_and_related_words": [
        "plant",
        "plants",
        "potted plant",
        "houseplant",
        "indoor plant",
        "greenery",
        "leaves"
      ],
      "accepted_words": [
        "plant",
        "plants",
        "potted plant",
        "houseplant",
        "indoor plant",
        "greenery",
        "leaves"
      ],
      "common_typos": [
        "palnt",
        "plantt",
        "potted palnt",
        "house palnt",
        "greenary"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "plant",
            "ja": "植物"
          }
        ],
        "A2": [
          {
            "en": "potted plant",
            "ja": "鉢植え"
          }
        ],
        "B1": [
          {
            "en": "indoor greenery",
            "ja": "室内の緑"
          }
        ],
        "B2": [
          {
            "en": "natural decoration softening the cafe interior",
            "ja": "カフェの店内をやわらげる自然の装飾"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "green leaves carrying the outdoor light into the cafe",
          "ja": "外の光をカフェへ運ぶ緑の葉"
        },
        {
          "en": "small pieces of nature surrounding the conversation",
          "ja": "会話を囲む小さな自然"
        },
        {
          "en": "living decoration making the cafe feel fresh and open",
          "ja": "カフェを新鮮で開放的にする生きた装飾"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "plant, leaves, green, pot",
          "text_en": "plant, leaves, green, pot",
          "text_ja": "植物、葉、緑、鉢"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many plants in the cafe.",
          "text_en": "There are many plants in the cafe.",
          "text_ja": "カフェにはたくさんの植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "leafy potted plants near the large windows",
          "text_en": "leafy potted plants near the large windows",
          "text_ja": "大きな窓の近くにある葉の多い鉢植え"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The greenery connects the bright outdoor setting with the warm wooden interior.",
          "text_en": "The greenery connects the bright outdoor setting with the warm wooden interior.",
          "text_ja": "緑の植物が、明るい屋外と暖かな木の店内をつないでいます。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "pendant lights",
      "label_ja": "ペンダントライト",
      "category": "lighting",
      "importance": "secondary",
      "description": "Round glass pendant lights hang from the ceiling and glow warmly above the cafe.",
      "bounding_box_conceptual": [
        0,
        58,
        27,
        41
      ],
      "color": [
        "golden",
        "transparent",
        "black"
      ],
      "attributes": [
        "round",
        "hanging",
        "warm",
        "decorative",
        "glowing"
      ],
      "action": [
        "hanging from the ceiling",
        "giving off light",
        "decorating the cafe"
      ],
      "synonyms_and_related_words": [
        "pendant light",
        "hanging light",
        "ceiling light",
        "glass lamp",
        "light bulb",
        "cafe lighting"
      ],
      "accepted_words": [
        "pendant light",
        "hanging light",
        "ceiling light",
        "glass lamp",
        "light bulb",
        "cafe lighting"
      ],
      "common_typos": [
        "pendant ligth",
        "hanging ligth",
        "ceiling lamb",
        "glass lamb"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "light",
            "ja": "照明"
          }
        ],
        "A2": [
          {
            "en": "hanging light",
            "ja": "吊り下げ照明"
          }
        ],
        "B1": [
          {
            "en": "pendant lamp",
            "ja": "ペンダントランプ"
          }
        ],
        "B2": [
          {
            "en": "decorative glass lighting suspended above the cafe",
            "ja": "カフェ上部に吊られた装飾的なガラス照明"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small indoor suns floating above the conversation",
          "ja": "会話の上に浮かぶ室内の小さな太陽"
        },
        {
          "en": "glass circles holding warm light",
          "ja": "暖かな光を包むガラスの円"
        },
        {
          "en": "soft lamps adding sparkle to the cafe air",
          "ja": "カフェの空気へ輝きを加える柔らかな照明"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "light, lamp, ceiling, warm",
          "text_en": "light, lamp, ceiling, warm",
          "text_ja": "照明、ランプ、天井、暖かい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lights are hanging from the ceiling.",
          "text_en": "The lights are hanging from the ceiling.",
          "text_ja": "照明が天井から吊り下がっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "round glass pendant lights glowing above the cafe",
          "text_en": "round glass pendant lights glowing above the cafe",
          "text_ja": "カフェの上で光る丸いガラスのペンダントライト"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Although daylight dominates the scene, the pendant lights add decorative warmth and depth.",
          "text_en": "Although daylight dominates the scene, the pendant lights add decorative warmth and depth.",
          "text_ja": "場面の主な光は日差しですが、ペンダントライトが装飾的な温かさと奥行きを加えています。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "cafe interior",
      "label_ja": "カフェの店内",
      "category": "setting",
      "importance": "primary",
      "description": "The cafe has warm wooden furniture, a counter, shelves, plants, blackboard signage, and large windows.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "brown",
        "green",
        "cream",
        "black"
      ],
      "attributes": [
        "cozy",
        "bright",
        "wooden",
        "welcoming",
        "modern-rustic"
      ],
      "action": [
        "surrounding the women",
        "providing a social space",
        "creating a warm atmosphere"
      ],
      "synonyms_and_related_words": [
        "cafe",
        "coffee shop",
        "cafe interior",
        "restaurant",
        "coffeehouse",
        "shop",
        "indoor space",
        "meeting place"
      ],
      "accepted_words": [
        "cafe",
        "coffee shop",
        "cafe interior",
        "restaurant",
        "coffeehouse",
        "shop",
        "indoor space",
        "meeting place"
      ],
      "common_typos": [
        "caffe",
        "cofee shop",
        "cafe interia",
        "restarant",
        "coffee hause"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cafe",
            "ja": "カフェ"
          }
        ],
        "A2": [
          {
            "en": "coffee shop",
            "ja": "コーヒーショップ"
          }
        ],
        "B1": [
          {
            "en": "cafe interior",
            "ja": "カフェの店内"
          }
        ],
        "B2": [
          {
            "en": "a sunlit social space with a warm rustic design",
            "ja": "暖かな素朴なデザインの明るい交流空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright room built for conversation and connection",
          "ja": "会話とつながりのために作られた明るい部屋"
        },
        {
          "en": "a warm public space that feels almost like home",
          "ja": "家のように感じられる暖かな公共空間"
        },
        {
          "en": "sunlight, wood, and laughter forming the character of the cafe",
          "ja": "日差し、木、笑い声が作るカフェの個性"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cafe, coffee shop, table, window",
          "text_en": "cafe, coffee shop, table, window",
          "text_ja": "カフェ、コーヒーショップ、テーブル、窓"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two women are in a cafe.",
          "text_en": "The two women are in a cafe.",
          "text_ja": "2人の女性はカフェにいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a bright cafe with wooden furniture and green plants",
          "text_en": "a bright cafe with wooden furniture and green plants",
          "text_ja": "木製家具と緑の植物がある明るいカフェ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The cafe, filled with natural light and rustic details, provides an inviting setting for friendship and conversation.",
          "text_en": "The cafe, filled with natural light and rustic details, provides an inviting setting for friendship and conversation.",
          "text_ja": "自然光と素朴な細部に満ちたカフェが、友情と会話に適した居心地のよい場所を提供しています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "top of the blackboard menu",
      "content": "COFFEE",
      "description_ja": "黒板メニューの見出しとして大きく書かれた語。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "coffee, drink, menu, cafe",
          "text_en": "coffee, drink, menu, cafe",
          "text_ja": "コーヒー、飲み物、メニュー、カフェ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "COFFEE is the main heading on the menu.",
          "text_en": "COFFEE is the main heading on the menu.",
          "text_ja": "COFFEE はメニューの主な見出しです。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "At the top of the blackboard, the word ... is written.",
          "text_en": "At the top of the blackboard, the word ... is written.",
          "text_ja": "黒板の一番上には……という語が書かれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The large word 'COFFEE' clearly identifies the board as a cafe menu.",
          "text_en": "The large word 'COFFEE' clearly identifies the board as a cafe menu.",
          "text_ja": "大きな「COFFEE」という語が、その黒板がカフェのメニューであることを明確に示しています。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "middle of the blackboard menu",
      "content": "Coffee / Cafe Latte / Cappuccino / Tea / Juice",
      "description_ja": "メニューに書かれている飲み物の一覧。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "coffee, cafe latte, cappuccino, tea, juice",
          "text_en": "coffee, cafe latte, cappuccino, tea, juice",
          "text_ja": "コーヒー、カフェラテ、カプチーノ、紅茶、ジュース"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board lists several drinks.",
          "text_en": "The board lists several drinks.",
          "text_ja": "黒板にはいくつかの飲み物が書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The drink options include...",
          "text_en": "The drink options include...",
          "text_ja": "飲み物の選択肢には……があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The menu offers both coffee-based beverages and non-coffee options such as tea and juice.",
          "text_en": "The menu offers both coffee-based beverages and non-coffee options such as tea and juice.",
          "text_ja": "メニューにはコーヒー系の飲み物と、紅茶やジュースなどのコーヒー以外の選択肢があります。"
        }
      ]
    },
    {
      "id": "text_003",
      "location": "bottom of the blackboard menu",
      "content": "Scone",
      "description_ja": "メニューの下部に書かれた焼き菓子の名前。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "scone, food, snack, menu",
          "text_en": "scone, food, snack, menu",
          "text_ja": "スコーン、食べ物、軽食、メニュー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "A scone is a baked snack.",
          "text_en": "A scone is a baked snack.",
          "text_ja": "スコーンは焼き菓子です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "At the bottom of the menu, there is...",
          "text_en": "At the bottom of the menu, there is...",
          "text_ja": "メニューの下部には……があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The inclusion of a scone suggests that the cafe serves light food as well as drinks.",
          "text_en": "The inclusion of a scone suggests that the cafe serves light food as well as drinks.",
          "text_ja": "スコーンが載っていることから、このカフェが飲み物だけでなく軽食も提供していることが分かります。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Chatting with each other",
      "description_ja": "互いに会話している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "chat",
        "chatting",
        "talk",
        "talking",
        "have a conversation",
        "converse",
        "speak with each other",
        "exchange stories"
      ],
      "accepted_words": [
        "chat",
        "chatting",
        "talk",
        "talking",
        "have a conversation",
        "converse",
        "speak with each other",
        "exchange stories"
      ],
      "common_typos": [
        "chating",
        "talkking",
        "have a converstation",
        "convers",
        "speak each other"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "talk",
            "ja": "話す"
          }
        ],
        "A2": [
          {
            "en": "chat with a friend",
            "ja": "友人とおしゃべりする"
          }
        ],
        "B1": [
          {
            "en": "have a conversation",
            "ja": "会話をする"
          }
        ],
        "B2": [
          {
            "en": "engage in an animated exchange",
            "ja": "活気あるやり取りをする"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "letting stories travel across the table",
          "ja": "物語をテーブル越しに行き交わせる"
        },
        {
          "en": "turning words into a shared moment of connection",
          "ja": "言葉をつながりのひとときへ変える"
        },
        {
          "en": "filling the cafe with a conversation only close friends can have",
          "ja": "親しい友人だからこそできる会話でカフェを満たす"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "talk, chat, friend, together",
          "text_en": "talk, chat, friend, together",
          "text_ja": "話す、おしゃべりする、友人、一緒に"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two women are talking.",
          "text_en": "The two women are talking.",
          "text_ja": "2人の女性は話しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "chat happily across the table",
          "text_en": "chat happily across the table",
          "text_ja": "テーブルを挟んで楽しそうに話す"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Facing each other across the table, the two friends engage in an animated conversation.",
          "text_en": "Facing each other across the table, the two friends engage in an animated conversation.",
          "text_ja": "テーブルを挟んで向き合い、2人の友人は活気ある会話をしています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Laughing together",
      "description_ja": "一緒に笑っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "laugh",
        "laughing",
        "laugh together",
        "smile",
        "smiling",
        "giggle",
        "share a laugh",
        "look amused"
      ],
      "accepted_words": [
        "laugh",
        "laughing",
        "laugh together",
        "smile",
        "smiling",
        "giggle",
        "share a laugh",
        "look amused"
      ],
      "common_typos": [
        "laught",
        "laughingg",
        "smilling",
        "gigle",
        "share laught"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "laugh",
            "ja": "笑う"
          }
        ],
        "A2": [
          {
            "en": "laugh together",
            "ja": "一緒に笑う"
          }
        ],
        "B1": [
          {
            "en": "share a laugh",
            "ja": "笑いを分かち合う"
          }
        ],
        "B2": [
          {
            "en": "burst into joyful laughter",
            "ja": "楽しそうに大笑いする"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "laughter crossing the table like sunlight",
          "ja": "日差しのようにテーブルを越える笑い声"
        },
        {
          "en": "sharing a moment too joyful to express only in words",
          "ja": "言葉だけでは表せないほど楽しい瞬間を分かち合う"
        },
        {
          "en": "turning the cafe into a space of pure happiness",
          "ja": "カフェを純粋な幸せの空間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are laughing together.",
          "text_en": "They are laughing together.",
          "text_ja": "彼女たちは一緒に笑っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "laugh, smile, happy, together",
          "text_en": "laugh, smile, happy, together",
          "text_ja": "笑う、笑顔、幸せ、一緒に"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "share a cheerful laugh with a close friend",
          "text_en": "share a cheerful laugh with a close friend",
          "text_ja": "親しい友人と明るい笑いを分かち合う"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Laughing openly, both women appear completely relaxed and comfortable with each other.",
          "text_en": "Laughing openly, both women appear completely relaxed and comfortable with each other.",
          "text_ja": "大きく笑いながら、2人の女性は互いに完全にくつろぎ、安心しているようです。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Holding and enjoying drinks",
      "description_ja": "飲み物を持ち、楽しんでいる",
      "involved_elements": [
        "element_001",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "hold a cup",
        "drink coffee",
        "enjoy a drink",
        "have coffee",
        "sip a drink",
        "share drinks",
        "have a cold drink"
      ],
      "accepted_words": [
        "hold a cup",
        "drink coffee",
        "enjoy a drink",
        "have coffee",
        "sip a drink",
        "share drinks",
        "have a cold drink"
      ],
      "common_typos": [
        "holing a cup",
        "drink cofee",
        "enjoyng a drink",
        "sipp a drink"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "drink",
            "ja": "飲む"
          }
        ],
        "A2": [
          {
            "en": "have coffee",
            "ja": "コーヒーを飲む"
          }
        ],
        "B1": [
          {
            "en": "enjoy a beverage",
            "ja": "飲み物を楽しむ"
          }
        ],
        "B2": [
          {
            "en": "savor drinks during a relaxed conversation",
            "ja": "くつろいだ会話の中で飲み物を味わう"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "letting warm and cold drinks accompany the conversation",
          "ja": "温かい飲み物と冷たい飲み物に会話へ寄り添ってもらう"
        },
        {
          "en": "sharing friendship over coffee and ice",
          "ja": "コーヒーと氷を囲んで友情を分かち合う"
        },
        {
          "en": "holding refreshment while exchanging stories",
          "ja": "物語を交わしながら飲み物を手にする"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "One woman is holding a cup, and there is an iced drink on the table.",
          "text_en": "One woman is holding a cup, and there is an iced drink on the table.",
          "text_ja": "1人の女性はカップを持ち、テーブルにはアイスドリンクがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "enjoy hot and cold drinks while chatting",
          "text_en": "enjoy hot and cold drinks while chatting",
          "text_ja": "会話しながら温かい飲み物と冷たい飲み物を楽しむ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "While one woman holds a ceramic cup, an iced drink waits on the table for the other.",
          "text_en": "While one woman holds a ceramic cup, an iced drink waits on the table for the other.",
          "text_ja": "1人が陶器のカップを持つ一方、もう1人のためのアイスドリンクがテーブルに置かれています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Sharing cake at the table",
      "description_ja": "テーブルでケーキを分け合っている",
      "involved_elements": [
        "element_003",
        "element_006",
        "element_007"
      ],
      "synonyms": [
        "share cake",
        "eat cake",
        "enjoy dessert",
        "have dessert",
        "share a sweet",
        "eat together",
        "enjoy a treat"
      ],
      "accepted_words": [
        "share cake",
        "eat cake",
        "enjoy dessert",
        "have dessert",
        "share a sweet",
        "eat together",
        "enjoy a treat"
      ],
      "common_typos": [
        "share cak",
        "eat desert",
        "enjoyng dessert",
        "share a sweit",
        "eat togather"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "eat cake",
            "ja": "ケーキを食べる"
          }
        ],
        "A2": [
          {
            "en": "share a dessert",
            "ja": "デザートを分け合う"
          }
        ],
        "B1": [
          {
            "en": "enjoy a sweet treat",
            "ja": "甘いおやつを楽しむ"
          }
        ],
        "B2": [
          {
            "en": "share a carefully decorated dessert during their meeting",
            "ja": "会っている間に丁寧に飾られたデザートを分け合う"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "placing something sweet at the center of friendship",
          "ja": "友情の中心に甘いものを置く"
        },
        {
          "en": "turning a small cake into a shared celebration",
          "ja": "小さなケーキを共有のお祝いへ変える"
        },
        {
          "en": "sharing sweetness as naturally as they share laughter",
          "ja": "笑いを分かち合うように自然に甘さも分け合う"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a cake between the two friends.",
          "text_en": "There is a cake between the two friends.",
          "text_ja": "2人の友人の間にケーキがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "share a small cake topped with fruit and cream",
          "text_en": "share a small cake topped with fruit and cream",
          "text_ja": "果物とクリームが載った小さなケーキを分け合う"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Placed between them, the decorated cake suggests a shared treat or a small celebration.",
          "text_en": "Placed between them, the decorated cake suggests a shared treat or a small celebration.",
          "text_ja": "2人の間に置かれた飾り付きケーキは、共有するおやつや小さなお祝いを示しているようです。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Making eye contact",
      "description_ja": "視線を合わせている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "make eye contact",
        "look at each other",
        "face each other",
        "meet each other's eyes",
        "watch her friend",
        "share a glance"
      ],
      "accepted_words": [
        "make eye contact",
        "look at each other",
        "face each other",
        "meet each other's eyes",
        "watch her friend",
        "share a glance"
      ],
      "common_typos": [
        "make eyes contact",
        "look each other",
        "face to each other",
        "share a glanse"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "look at each other",
            "ja": "互いを見る"
          }
        ],
        "A2": [
          {
            "en": "make eye contact",
            "ja": "視線を合わせる"
          }
        ],
        "B1": [
          {
            "en": "share a friendly glance",
            "ja": "親しげな視線を交わす"
          }
        ],
        "B2": [
          {
            "en": "maintain attentive and expressive eye contact",
            "ja": "注意深く表情豊かな視線を保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "letting their eyes continue the conversation between words",
          "ja": "言葉の合間に目で会話を続ける"
        },
        {
          "en": "sharing understanding through a single glance",
          "ja": "一つの視線で理解を分かち合う"
        },
        {
          "en": "making friendship visible in the space between their smiles",
          "ja": "笑顔の間に友情を見える形にする"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The women are looking at each other.",
          "text_en": "The women are looking at each other.",
          "text_ja": "女性たちは互いを見ています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "make eye contact while talking and laughing",
          "text_en": "make eye contact while talking and laughing",
          "text_ja": "話して笑いながら視線を合わせる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Their steady eye contact shows that both women are actively listening and emotionally engaged.",
          "text_en": "Their steady eye contact shows that both women are actively listening and emotionally engaged.",
          "text_ja": "安定した視線から、2人とも積極的に聞き、感情的にも会話へ参加していることが分かります。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Sunlight filling the cafe",
      "description_ja": "日差しがカフェを満たしている",
      "involved_elements": [
        "element_008",
        "element_010",
        "element_011",
        "element_012"
      ],
      "synonyms": [
        "sunlight fills the cafe",
        "natural light enters",
        "light shines through the windows",
        "sunlight illuminates the women",
        "daylight brightens the room"
      ],
      "accepted_words": [
        "sunlight fills the cafe",
        "natural light enters",
        "light shines through the windows",
        "sunlight illuminates the women",
        "daylight brightens the room"
      ],
      "common_typos": [
        "sun ligth fills",
        "naturul light",
        "shines threw the windows",
        "day ligth"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sunlight shines",
            "ja": "日差しが照る"
          }
        ],
        "A2": [
          {
            "en": "natural light fills the cafe",
            "ja": "自然光がカフェを満たす"
          }
        ],
        "B1": [
          {
            "en": "sunlight illuminates the interior",
            "ja": "日差しが店内を照らす"
          }
        ],
        "B2": [
          {
            "en": "bright daylight creates a lively and welcoming environment",
            "ja": "明るい日差しが活気と親しみのある環境を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight pouring across the table like another guest",
          "ja": "もう1人の客のようにテーブルへ注ぐ日差し"
        },
        {
          "en": "golden light carrying the energy of the street indoors",
          "ja": "通りの活気を店内へ運ぶ金色の光"
        },
        {
          "en": "daylight making every smile and glass sparkle",
          "ja": "すべての笑顔とグラスを輝かせる日差し"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Sunlight is filling the cafe.",
          "text_en": "Sunlight is filling the cafe.",
          "text_ja": "日差しがカフェを満たしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "warm natural light streaming through the large windows",
          "text_en": "warm natural light streaming through the large windows",
          "text_ja": "大きな窓から差し込む暖かな自然光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Streaming through the windows, the daylight highlights the friends' expressions and energizes the entire scene.",
          "text_en": "Streaming through the windows, the daylight highlights the friends' expressions and energizes the entire scene.",
          "text_ja": "窓から差し込む日差しが友人たちの表情を際立たせ、場面全体に活気を与えています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Enjoying time with a friend",
      "description_ja": "友人との時間を楽しんでいる",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_012"
      ],
      "synonyms": [
        "spend time together",
        "enjoy time with a friend",
        "meet a friend",
        "have fun together",
        "socialize",
        "catch up",
        "enjoy each other's company"
      ],
      "accepted_words": [
        "spend time together",
        "enjoy time with a friend",
        "meet a friend",
        "have fun together",
        "socialize",
        "catch up",
        "enjoy each other's company"
      ],
      "common_typos": [
        "spend time togather",
        "enjoy time whith a friend",
        "socialise",
        "catch upp",
        "enjoy each others company"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "have fun together",
            "ja": "一緒に楽しむ"
          }
        ],
        "A2": [
          {
            "en": "spend time with a friend",
            "ja": "友人と時間を過ごす"
          }
        ],
        "B1": [
          {
            "en": "catch up with a friend",
            "ja": "友人と近況を語り合う"
          }
        ],
        "B2": [
          {
            "en": "enjoy each other's company in a relaxed social setting",
            "ja": "くつろいだ交流の場で互いの存在を楽しむ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "making friendship stronger through ordinary moments",
          "ja": "何気ない瞬間を通して友情を深める"
        },
        {
          "en": "turning coffee, cake, and conversation into connection",
          "ja": "コーヒー、ケーキ、会話をつながりへ変える"
        },
        {
          "en": "creating a shared memory in the middle of a sunny day",
          "ja": "晴れた日の中で共有の思い出を作る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two friends are having fun together.",
          "text_en": "The two friends are having fun together.",
          "text_ja": "2人の友人は一緒に楽しんでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "enjoy each other's company over drinks and cake",
          "text_en": "enjoy each other's company over drinks and cake",
          "text_ja": "飲み物とケーキを囲んで互いとの時間を楽しむ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Their relaxed posture and genuine laughter suggest that they are close friends catching up after some time apart.",
          "text_en": "Their relaxed posture and genuine laughter suggest that they are close friends catching up after some time apart.",
          "text_ja": "くつろいだ姿勢と自然な笑いから、しばらく離れていた親しい友人同士が近況を語り合っているようです。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "woman in white",
      "relationship": "to the left of",
      "object": "woman in denim",
      "example_beginner": "The woman in white is to the left of the woman in blue.",
      "example_intermediate": "The woman wearing a white sweater is seated to the left of her friend in denim."
    },
    {
      "subject": "two women",
      "relationship": "across from",
      "object": "each other",
      "example_beginner": "The two women are across from each other.",
      "example_intermediate": "The two friends are sitting across from each other at the same table."
    },
    {
      "subject": "wooden table",
      "relationship": "between",
      "object": "two women",
      "example_beginner": "The table is between the two women.",
      "example_intermediate": "A square wooden table stands between the two friends."
    },
    {
      "subject": "cake",
      "relationship": "between",
      "object": "two women",
      "example_beginner": "The cake is between them.",
      "example_intermediate": "A small decorated cake sits between the two women."
    },
    {
      "subject": "white cup",
      "relationship": "in",
      "object": "left woman's hand",
      "example_beginner": "The cup is in her hand.",
      "example_intermediate": "The woman on the left is holding a white cup in her right hand."
    },
    {
      "subject": "iced drink",
      "relationship": "in front of",
      "object": "woman in denim",
      "example_beginner": "The drink is in front of the woman in blue.",
      "example_intermediate": "A tall iced drink stands in front of the woman wearing denim."
    },
    {
      "subject": "cake",
      "relationship": "on",
      "object": "white plate",
      "example_beginner": "The cake is on a plate.",
      "example_intermediate": "The decorated cake is placed on a white plate."
    },
    {
      "subject": "large windows",
      "relationship": "behind",
      "object": "woman in white",
      "example_beginner": "The windows are behind the woman in white.",
      "example_intermediate": "Large sunlit windows are behind the woman wearing the white sweater."
    },
    {
      "subject": "blackboard menu",
      "relationship": "behind",
      "object": "woman in denim",
      "example_beginner": "The menu is behind the woman in blue.",
      "example_intermediate": "A blackboard menu hangs on the wall behind the woman in denim."
    },
    {
      "subject": "pendant lights",
      "relationship": "above",
      "object": "cafe tables",
      "example_beginner": "The lights are above the tables.",
      "example_intermediate": "Round pendant lights hang above the cafe tables."
    },
    {
      "subject": "plants",
      "relationship": "near",
      "object": "windows",
      "example_beginner": "The plants are near the windows.",
      "example_intermediate": "Several potted plants are arranged near the large windows."
    }
  ],
  "adjective_library": {
    "people": [
      "cheerful",
      "friendly",
      "happy",
      "relaxed",
      "amused",
      "social",
      "animated",
      "close"
    ],
    "cafe": [
      "bright",
      "cozy",
      "warm",
      "welcoming",
      "sunny",
      "lively",
      "rustic",
      "comfortable"
    ],
    "conversation": [
      "friendly",
      "lively",
      "animated",
      "casual",
      "joyful",
      "engaging",
      "warm"
    ],
    "food_and_drinks": [
      "sweet",
      "fresh",
      "cold",
      "warm",
      "decorated",
      "refreshing",
      "delicious-looking"
    ],
    "light": [
      "bright",
      "golden",
      "natural",
      "warm",
      "soft",
      "sunny",
      "glowing"
    ],
    "atmosphere": [
      "cheerful",
      "positive",
      "social",
      "inviting",
      "energetic",
      "relaxed",
      "friendly"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "The two women are talking in a cafe."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜で、〜のところに",
      "example": "They are sitting at a wooden table."
    },
    {
      "preposition": "across from",
      "meaning_ja": "〜の向かい側に",
      "example": "The friends are sitting across from each other."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The cake is between the two women."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜と一緒に、〜を持って",
      "example": "She is talking with her friend."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The drinks are on the table."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The iced drink is in front of the woman in denim."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The menu board is behind the woman in blue."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The plants are near the windows."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上方に",
      "example": "The pendant lights are above the tables."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "Sunlight is coming through the windows."
    },
    {
      "preposition": "together",
      "meaning_ja": "一緒に",
      "example": "The two friends are laughing together."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "2人以上が今行っている動作を表す。",
      "examples": [
        "The two women are talking.",
        "They are laughing together.",
        "The friends are sitting at a table."
      ],
      "hints": [
        "主語が複数なので is ではなく are を使います。",
        "Scene 010では two women + are chatting / laughing が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "テーブルやカフェにある物を説明する。",
      "examples": [
        "There is a cake on the table.",
        "There is an iced drink in front of one woman.",
        "There are several plants in the cafe."
      ],
      "hints": [
        "単数には There is、複数には There are を使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と感情・状態の形容詞",
      "level": "beginner",
      "purpose_ja": "人物や雰囲気がどのように見えるかを表す。",
      "examples": [
        "The women are happy.",
        "They are relaxed.",
        "The cafe is bright and lively."
      ],
      "hints": [
        "happy, cheerful, relaxed, friendly などの感情を表す形容詞を使いましょう。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置表現",
      "level": "beginner",
      "purpose_ja": "2人や物の位置関係を説明する。",
      "examples": [
        "The women are in a cafe.",
        "They are across from each other.",
        "The cake is between them."
      ],
      "hints": [
        "in, at, across from, between, behind などを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + verb + adverb",
      "label_ja": "副詞を使った動作の説明",
      "level": "intermediate",
      "purpose_ja": "会話や笑い方を詳しく説明する。",
      "examples": [
        "They are talking happily.",
        "The women are laughing loudly.",
        "Sunlight is shining brightly."
      ],
      "hints": [
        "happily, loudly, brightly, warmly などを使うと場面が豊かになります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "while + clause",
      "label_ja": "whileを使った同時進行",
      "level": "intermediate",
      "purpose_ja": "2つの動作を同時に説明する。",
      "examples": [
        "They are laughing while talking.",
        "One woman is holding a cup while her friend is listening.",
        "They are chatting while enjoying drinks and cake."
      ],
      "hints": [
        "whileを使うと、同時に行われている複数の動作を一文で表せます。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "One ..., while the other ...",
      "label_ja": "2人の違いを表す対比構文",
      "level": "intermediate",
      "purpose_ja": "2人が別々にしている動作や服装を対比する。",
      "examples": [
        "One woman is holding a cup, while the other is resting her cheek on her hand.",
        "One is wearing white, while the other is wearing blue.",
        "One has a hot drink, while the other has an iced drink."
      ],
      "hints": [
        "One ..., while the other ... で「1人は〜だが、もう1人は〜」と表せます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を加える。",
      "examples": [
        "The woman who is holding the cup is wearing white.",
        "The cake that is on the plate is topped with berries.",
        "The menu, which is behind them, lists several drinks."
      ],
      "hints": [
        "人には who、物には which または that を使います。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の動作を簡潔につなぐ。",
      "examples": [
        "Holding a white cup, one woman laughs with her friend.",
        "Resting her cheek on one hand, the woman in denim listens happily.",
        "Sitting across from each other, the friends share a lively conversation."
      ],
      "hints": [
        "文頭を動詞ingで始めると、高度で自然な描写になります。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "人物や場所の状態を文頭で示す。",
      "examples": [
        "Bathed in sunlight, the cafe feels bright and welcoming.",
        "Seated across from each other, the women laugh together.",
        "Surrounded by plants and warm wooden furniture, they enjoy their conversation."
      ],
      "hints": [
        "Bathed, Seated, Surrounded などから始めると背景と主動作をつなげられます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から想像できる関係や状況を断定せずに表す。",
      "examples": [
        "It looks like they are close friends.",
        "They seem to be catching up after some time apart.",
        "The cake suggests that they may be celebrating something."
      ],
      "hints": [
        "looks like, seems, may be を使って、友情やお祝いを推測できます。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "make / create + object + adjective",
      "label_ja": "使役的な表現",
      "level": "advanced",
      "purpose_ja": "光や笑顔が雰囲気へ与える影響を説明する。",
      "examples": [
        "Their laughter makes the cafe feel lively.",
        "The sunlight makes the scene look warm.",
        "The plants and wooden furniture create a welcoming atmosphere."
      ],
      "hints": [
        "make + 目的語 + 形容詞、create + 名詞を使うと雰囲気の原因を説明できます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are two women."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are in / at ______.",
        "example": "They are in a cafe."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are talking."
      },
      {
        "step": 4,
        "question_ja": "どのような様子ですか？",
        "template": "They look ______.",
        "example": "They look happy."
      },
      {
        "step": 5,
        "question_ja": "何がありますか？",
        "template": "There is / are ______ on the table.",
        "example": "There is a cake on the table."
      }
    ],
    "intermediate": [
      {
        "template": "Two young women are ______ing at ______.",
        "example": "Two young women are chatting at a wooden table."
      },
      {
        "template": "One woman is ______, while the other is ______.",
        "example": "One woman is holding a cup, while the other is resting her cheek on her hand."
      },
      {
        "template": "On the table, there is / are ______.",
        "example": "On the table, there are two drinks, a cake, a plate, and a fork."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see large windows, plants, lights, and a menu board."
      },
      {
        "template": "The ______ makes the scene feel ______.",
        "example": "The warm sunlight makes the scene feel cheerful and welcoming."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Sitting across from each other, the two friends laugh and share an animated conversation."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Bathed in warm sunlight, the cafe provides a lively setting for their meeting."
      },
      {
        "template": "Main clause, while + contrasting clause.",
        "example": "One woman holds a white cup while the other leans forward and listens with a smile."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The woman who is wearing a denim shirt is laughing at her friend, who is holding a white cup."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that the two women are close friends who are catching up over coffee and cake."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "Two women are in a cafe.",
      "They are sitting at a table.",
      "They are talking and laughing.",
      "One woman is holding a cup.",
      "There is a cake on the table."
    ],
    "intermediate": [
      "Two young women are sitting across from each other at a wooden cafe table.",
      "They are chatting happily and laughing together.",
      "One woman is holding a white cup, while the other is resting her cheek on her hand.",
      "A cake and an iced drink are on the table between them.",
      "Large windows, plants, warm lights, and a menu board create a cheerful atmosphere."
    ],
    "advanced": [
      "Seated across from each other at a sunlit wooden table, two young women share an animated conversation and laugh openly.",
      "One friend, dressed in a white knit sweater, holds a ceramic cup, while the other, wearing a blue denim shirt, leans forward with her cheek resting on one hand.",
      "Between them are a decorated chocolate cake and a tall iced drink, suggesting that they are enjoying a relaxed coffee break or a small celebration.",
      "Bathed in natural light and surrounded by greenery, pendant lamps, and rustic wooden furniture, the cafe feels lively, warm, and welcoming."
    ]
  },
  "full_description_support": {
    "beginner_model": "Two women are in a cafe. They are sitting at a wooden table. They are talking and laughing together. One woman is holding a white cup. There is an iced drink and a cake on the table. The cafe is bright and friendly.",
    "intermediate_model": "Two young women are sitting across from each other at a wooden table in a bright cafe. The woman on the left is wearing a white sweater and holding a white cup. The woman on the right is wearing a blue denim shirt and resting her cheek on one hand. They are looking at each other, chatting, and laughing happily. A small cake, an iced drink, a plate, and a fork are on the table. In the background, there are large windows, green plants, pendant lights, a cafe counter, and a blackboard menu.",
    "advanced_model": "Bathed in warm natural light, two young women sit across from each other at a polished wooden table in a lively cafe. The woman on the left, whose brown hair is tied in a loose bun, wears a white knit sweater and holds a simple ceramic cup while laughing openly. Opposite her, a friend in a blue denim shirt rests her cheek on one hand and responds with an equally joyful smile. Between them, a small chocolate cake decorated with cream and berries shares the table with a tall iced drink, suggesting a relaxed coffee break or a modest celebration. Behind the pair, large windows reveal a sunny street lined with trees, while leafy plants, hanging glass lights, warm wooden furniture, and a handwritten blackboard menu create an inviting social setting. Their eye contact, relaxed posture, and genuine laughter make the scene feel like a moment of close friendship and easy connection."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "Two women are in a cafe. They are talking and laughing.",
        "ja": "2人の女性がカフェにいます。彼女たちは話して笑っています。",
        "focus": "複数主語 two women に合わせて are talking / are laughing を使う。"
      },
      {
        "en": "There is a cake on the table. One woman has a cup.",
        "ja": "テーブルの上にケーキがあります。1人の女性はカップを持っています。",
        "focus": "There is と has を使い、食べ物と持ち物を説明する。"
      }
    ],
    "A2": [
      {
        "en": "Two young women are sitting across from each other and chatting happily at a cafe.",
        "ja": "2人の若い女性がカフェで向かい合って座り、楽しそうに話しています。",
        "focus": "across from each other と happily を使って位置と様子を加える。"
      },
      {
        "en": "One woman is holding a white cup, while the other is smiling with her hand under her cheek.",
        "ja": "1人の女性は白いカップを持ち、もう1人は頬に手を当てて笑っています。",
        "focus": "One ..., while the other ... で2人の異なる動作を対比する。"
      }
    ],
    "B1": [
      {
        "en": "Two close friends are enjoying an animated conversation while sharing drinks and cake at a sunlit cafe table.",
        "ja": "2人の親しい友人が、日差しの当たるカフェのテーブルで飲み物とケーキを楽しみながら、活気ある会話をしています。",
        "focus": "animated conversation、while sharing、sunlit を使って場面を具体化する。"
      },
      {
        "en": "Their relaxed posture, eye contact, and genuine laughter create a warm and friendly atmosphere.",
        "ja": "くつろいだ姿勢、視線、自然な笑いが、暖かく親しみやすい雰囲気を作っています。",
        "focus": "複数の名詞を主語にして create + atmosphere を使う。"
      }
    ],
    "B2": [
      {
        "en": "Seated across from each other in a cafe flooded with natural light, the two women laugh openly as they exchange stories over coffee and dessert.",
        "ja": "自然光に満ちたカフェで向かい合って座り、2人の女性はコーヒーとデザートを囲んで話を交わしながら大きく笑っています。",
        "focus": "Seatedで始める過去分詞句、flooded with、as節を組み合わせる。"
      },
      {
        "en": "The woman who is holding the white cup appears to be telling an amusing story, while her friend, who is dressed in denim, responds with laughter that makes their close relationship immediately visible.",
        "ja": "白いカップを持つ女性は面白い話をしているようで、デニム姿の友人は笑いで応え、その親しい関係がすぐに伝わってきます。",
        "focus": "whoを連続して使う関係代名詞、appears to、while、that節を組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene010Data = scene010Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene010Data;
}
