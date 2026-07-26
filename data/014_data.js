"use strict";

const scene014Data = {
  "id": "scene_014",
  "image_id": "014.webp",
  "overall_description_ja": "明るく広々としたショッピングモールの衣料品店で、2人の若い女性が淡い黄色のセーターを見ながら楽しそうに買い物をしている。左の女性はクリーム色のニットトップスとジーンズを着て、木製ハンガーに掛かったセーターを両手で持ち上げている。右の女性は水色のシャツとベージュのスカートを着て、笑顔でセーターを指さしている。彼女は左手にピンク、白、茶色の紙袋を持ち、肩には大きなベージュのトートバッグを掛けている。左手前には白、紺、ベージュ、ストライプ柄などの服が並ぶラックがあり、NEW ARRIVALとSALEの案内が見える。背景には別の衣料品ラック、歩く買い物客、複数の店舗、ガラス手すりの上階、明るい天井照明が広がっている。2人は服を比較しながら意見を交換し、友人との買い物を楽しんでいるように見える。",
  "overall_description_en": "Inside a bright and spacious clothing store in a modern shopping mall, two young women are enjoying shopping together while examining a pale yellow sweater. The woman on the left wears a cream knit top and blue jeans and holds the sweater on a wooden hanger with both hands. The woman on the right wears a light blue shirt and a beige skirt and points at the sweater with a cheerful smile. She carries pink, white, and brown paper shopping bags in one hand and a large beige tote over her shoulder. A clothing rack in the foreground displays white, navy, beige, blue, and striped garments, while NEW ARRIVAL and SALE signs appear nearby. In the background, shoppers move between stores beneath bright ceiling lights, and a glass-railed upper floor reveals the mall's multi-level design. The women's expressions and gestures suggest that they are comparing the sweater, sharing opinions, and enjoying a friendly shopping trip.",
  "overall_mood": [
    "cheerful",
    "bright",
    "friendly",
    "social",
    "lively",
    "modern",
    "fashionable",
    "comfortable",
    "energetic",
    "welcoming",
    "relaxed",
    "busy",
    "pleasant",
    "stylish",
    "well-lit"
  ],
  "mission_guides": {
    "gist": "2人の女性が何を見て、何をしているかを書こう。",
    "setting": "衣料品店、モール、ラック、背景の買い物客、上階の位置を説明しよう。",
    "details": "黄色いセーター、紙袋、トートバッグ、服装、表情、看板を加えよう。",
    "complete": "服を比較し意見を共有する友人同士の様子と、明るく活気のある雰囲気まで描写しよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "two young women shopping together",
        "ja": "一緒に買い物をする2人の若い女性"
      },
      {
        "en": "one woman holding up a yellow sweater",
        "ja": "黄色いセーターを持ち上げる女性"
      },
      {
        "en": "her friend pointing at the sweater",
        "ja": "セーターを指さす友人"
      },
      {
        "en": "comparing clothes and sharing opinions",
        "ja": "服を比較して意見を共有している"
      }
    ],
    "setting": [
      {
        "en": "inside a clothing store in a shopping mall",
        "ja": "ショッピングモール内の衣料品店で"
      },
      {
        "en": "beside a rack filled with clothes",
        "ja": "服でいっぱいのラックのそばで"
      },
      {
        "en": "with shoppers and stores in the background",
        "ja": "背景に買い物客と店舗がある"
      },
      {
        "en": "under bright ceiling lights in a modern mall",
        "ja": "現代的なモールの明るい照明の下で"
      }
    ],
    "mood": [
      {
        "en": "a cheerful and friendly shopping scene",
        "ja": "明るく親しみのある買い物の場面"
      },
      {
        "en": "a lively but comfortable mall atmosphere",
        "ja": "活気があり快適なモールの雰囲気"
      },
      {
        "en": "warm smiles and relaxed body language",
        "ja": "温かい笑顔とリラックスした身振り"
      },
      {
        "en": "a modern and fashionable retail environment",
        "ja": "現代的でおしゃれな販売環境"
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
        "the shoppers",
        "the customers",
        "they"
      ],
      "hint_msg": "two womenやtwo friendsなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "are shopping",
        "are looking",
        "are comparing",
        "are choosing",
        "are smiling",
        "is holding",
        "is pointing"
      ],
      "hint_msg": "are shoppingやare looking at clothesなど、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次は対象や場所を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "a yellow sweater",
        "clothes",
        "a clothing store",
        "a shopping mall",
        "a clothing rack",
        "shopping bags",
        "a hanger"
      ],
      "hint_msg": "a yellow sweater / in a clothing storeなどを加えましょう。",
      "success_msg": "Excellent! 服装、表情、紙袋、背景まで詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "shopping for clothes with a friend",
    "choosing a yellow sweater",
    "comparing fashion items",
    "giving an opinion about clothes",
    "shopping in a modern mall",
    "carrying shopping bags",
    "looking at new arrivals",
    "shopping during a sale",
    "friends enjoying time together",
    "fashion and personal taste",
    "making a purchase decision"
  ],
  "scene_structure": {
    "foreground": [
      "clothing rack",
      "wooden hangers",
      "yellow sweater",
      "two women",
      "shopping bags",
      "beige tote bag"
    ],
    "midground": [
      "additional racks",
      "NEW ARRIVAL sign",
      "SALE sign",
      "store displays",
      "walking shoppers"
    ],
    "background": [
      "mall corridor",
      "upper-floor balcony",
      "glass railings",
      "storefronts",
      "mall visitors",
      "ceiling lights"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "two young women",
      "label_ja": "2人の若い女性",
      "category": "people",
      "importance": "primary",
      "description": "Two young women stand close together beside a clothing rack, smile warmly, and examine the same pale yellow sweater.",
      "bounding_box_conceptual": [
        14,
        15,
        80,
        78
      ],
      "color": [
        "cream",
        "light blue",
        "yellow",
        "beige",
        "blue"
      ],
      "attributes": [
        "young",
        "friendly",
        "cheerful",
        "fashionable",
        "relaxed",
        "social"
      ],
      "action": [
        "shopping",
        "smiling",
        "looking at clothes",
        "comparing an item",
        "talking"
      ],
      "synonyms_and_related_words": [
        "two women",
        "two young women",
        "two friends",
        "female shoppers",
        "customers"
      ],
      "accepted_words": [
        "two women",
        "two young women",
        "two friends",
        "female shoppers",
        "customers"
      ],
      "common_typos": [
        "two womans",
        "two woman",
        "young womans",
        "female shopers"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "women",
            "ja": "女性たち"
          }
        ],
        "A2": [
          {
            "en": "two young women",
            "ja": "2人の若い女性"
          }
        ],
        "B1": [
          {
            "en": "shopping companions",
            "ja": "一緒に買い物をする仲間"
          }
        ],
        "B2": [
          {
            "en": "two fashion-conscious friends sharing a shopping decision",
            "ja": "買い物の決定を共有するファッション意識の高い友人"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two friends turning shopping into a shared conversation",
          "ja": "買い物を共有の会話へ変える2人の友人"
        },
        {
          "en": "a cheerful pair connected by taste and friendship",
          "ja": "好みと友情でつながる明るい2人"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "two women, friends, shoppers, customers",
          "text_en": "two women, friends, shoppers, customers",
          "text_ja": "2人の女性、友人、買い物客、客"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Two women are shopping together.",
          "text_en": "Two women are shopping together.",
          "text_ja": "2人の女性が一緒に買い物をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "two friends comparing clothes in a shopping mall",
          "text_en": "two friends comparing clothes in a shopping mall",
          "text_ja": "ショッピングモールで服を比較する2人の友人"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "woman holding the sweater",
      "label_ja": "セーターを持つ女性",
      "category": "person",
      "importance": "primary",
      "description": "The woman on the left has long dark hair, wears a cream knit top and blue jeans, and holds the sweater on a wooden hanger with both hands.",
      "bounding_box_conceptual": [
        14,
        17,
        80,
        42
      ],
      "color": [
        "cream",
        "blue",
        "brown",
        "yellow"
      ],
      "attributes": [
        "smiling",
        "casually dressed",
        "interested",
        "careful",
        "fashionable"
      ],
      "action": [
        "holding up the sweater",
        "looking at the garment",
        "smiling",
        "showing it to her friend"
      ],
      "synonyms_and_related_words": [
        "woman on the left",
        "female shopper",
        "young woman",
        "friend",
        "customer"
      ],
      "accepted_words": [
        "woman on the left",
        "female shopper",
        "young woman",
        "friend",
        "customer"
      ],
      "common_typos": [
        "women on the left",
        "female shoper",
        "custumer",
        "woman holdng"
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
            "en": "woman on the left",
            "ja": "左側の女性"
          }
        ],
        "B1": [
          {
            "en": "female shopper holding a garment",
            "ja": "衣服を持つ女性客"
          }
        ],
        "B2": [
          {
            "en": "a shopper presenting a possible purchase to her friend",
            "ja": "購入候補を友人へ見せる買い物客"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the friend who lifts the choice into view",
          "ja": "選択肢を見える位置へ持ち上げる友人"
        },
        {
          "en": "a shopper framing the sweater with both hands",
          "ja": "両手でセーターを見せる買い物客"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, sweater, hanger, hold",
          "text_en": "woman, sweater, hanger, hold",
          "text_ja": "女性、セーター、ハンガー、持つ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman on the left is holding a yellow sweater.",
          "text_en": "The woman on the left is holding a yellow sweater.",
          "text_ja": "左側の女性は黄色いセーターを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold the sweater up so that her friend can see it",
          "text_en": "hold the sweater up so that her friend can see it",
          "text_ja": "友人が見られるようにセーターを持ち上げる"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "woman pointing at the sweater",
      "label_ja": "セーターを指さす女性",
      "category": "person",
      "importance": "primary",
      "description": "The woman on the right wears a light blue shirt over a white top, a beige skirt, and points toward the sweater while smiling.",
      "bounding_box_conceptual": [
        15,
        46,
        82,
        47
      ],
      "color": [
        "light blue",
        "white",
        "beige",
        "brown"
      ],
      "attributes": [
        "smiling",
        "supportive",
        "fashionable",
        "expressive",
        "interested"
      ],
      "action": [
        "pointing",
        "giving an opinion",
        "smiling",
        "looking at the sweater",
        "carrying bags"
      ],
      "synonyms_and_related_words": [
        "woman on the right",
        "female shopper",
        "young woman",
        "friend",
        "customer"
      ],
      "accepted_words": [
        "woman on the right",
        "female shopper",
        "young woman",
        "friend",
        "customer"
      ],
      "common_typos": [
        "women on the right",
        "female shoper",
        "blue shurt",
        "woman pointng"
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
            "en": "woman on the right",
            "ja": "右側の女性"
          }
        ],
        "B1": [
          {
            "en": "female customer giving an opinion",
            "ja": "意見を伝える女性客"
          }
        ],
        "B2": [
          {
            "en": "a supportive shopping companion responding through gesture",
            "ja": "身振りで応じる協力的な買い物仲間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a fingertip guiding attention toward the final choice",
          "ja": "最終的な選択へ注意を導く指先"
        },
        {
          "en": "a friend whose gesture says more than a long explanation",
          "ja": "長い説明以上を伝える身振りの友人"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, point, smile, blue shirt",
          "text_en": "woman, point, smile, blue shirt",
          "text_ja": "女性、指さす、笑う、水色のシャツ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman on the right is pointing at the sweater.",
          "text_en": "The woman on the right is pointing at the sweater.",
          "text_ja": "右側の女性はセーターを指さしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "point at the sleeve while giving her opinion",
          "text_en": "point at the sleeve while giving her opinion",
          "text_ja": "意見を伝えながら袖を指さす"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "yellow sweater",
      "label_ja": "黄色いセーター",
      "category": "object",
      "importance": "primary",
      "description": "A pale yellow long-sleeved knit sweater hangs from a wooden hanger and is held between the two women.",
      "bounding_box_conceptual": [
        37,
        17,
        55,
        46
      ],
      "color": [
        "pale yellow",
        "cream"
      ],
      "attributes": [
        "soft-looking",
        "knitted",
        "long-sleeved",
        "light-colored",
        "new"
      ],
      "action": [
        "hanging",
        "being held up",
        "being examined",
        "being pointed at"
      ],
      "synonyms_and_related_words": [
        "yellow sweater",
        "pale yellow sweater",
        "knit sweater",
        "jumper",
        "pullover"
      ],
      "accepted_words": [
        "yellow sweater",
        "pale yellow sweater",
        "knit sweater",
        "jumper",
        "pullover"
      ],
      "common_typos": [
        "yelow sweater",
        "sweatar",
        "pale yelow",
        "knit sweter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sweater",
            "ja": "セーター"
          }
        ],
        "A2": [
          {
            "en": "yellow sweater",
            "ja": "黄色いセーター"
          }
        ],
        "B1": [
          {
            "en": "pale yellow pullover",
            "ja": "淡い黄色のプルオーバー"
          }
        ],
        "B2": [
          {
            "en": "a softly colored knit garment being considered as a possible purchase",
            "ja": "購入候補として検討される柔らかな色のニット衣服"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small piece of sunshine hanging between two friends",
          "ja": "2人の友人の間に掛かる小さな日差し"
        },
        {
          "en": "the bright center of their shared decision",
          "ja": "2人の共同決定の明るい中心"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "yellow, sweater, clothes, long sleeves",
          "text_en": "yellow, sweater, clothes, long sleeves",
          "text_ja": "黄色、セーター、服、長袖"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sweater is yellow and has long sleeves.",
          "text_en": "The sweater is yellow and has long sleeves.",
          "text_ja": "そのセーターは黄色で長袖です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a pale yellow knit sweater on a wooden hanger",
          "text_en": "a pale yellow knit sweater on a wooden hanger",
          "text_ja": "木製ハンガーに掛かった淡い黄色のニットセーター"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "wooden hanger",
      "label_ja": "木製ハンガー",
      "category": "object",
      "importance": "primary",
      "description": "A light wooden hanger with a silver hook supports the yellow sweater.",
      "bounding_box_conceptual": [
        30,
        22,
        18,
        22
      ],
      "color": [
        "light brown",
        "silver"
      ],
      "attributes": [
        "wooden",
        "smooth",
        "simple",
        "functional"
      ],
      "action": [
        "holding the sweater",
        "hanging from the woman's hands"
      ],
      "synonyms_and_related_words": [
        "hanger",
        "wooden hanger",
        "clothes hanger",
        "coat hanger",
        "garment hanger"
      ],
      "accepted_words": [
        "hanger",
        "wooden hanger",
        "clothes hanger",
        "coat hanger",
        "garment hanger"
      ],
      "common_typos": [
        "hangar",
        "wooden hangar",
        "cloth hanger",
        "coat hangar"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hanger",
            "ja": "ハンガー"
          }
        ],
        "A2": [
          {
            "en": "wooden hanger",
            "ja": "木製ハンガー"
          }
        ],
        "B1": [
          {
            "en": "garment hanger",
            "ja": "衣服用ハンガー"
          }
        ],
        "B2": [
          {
            "en": "a simple display tool supporting the garment's shape",
            "ja": "衣服の形を支える簡素な展示道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden frame presenting the sweater like a picture",
          "ja": "絵のようにセーターを見せる木の枠"
        },
        {
          "en": "the quiet support beneath the shopping decision",
          "ja": "買い物の決定の下にある静かな支え"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hanger, wood, hook, clothes",
          "text_en": "hanger, wood, hook, clothes",
          "text_ja": "ハンガー、木、フック、服"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sweater is on a wooden hanger.",
          "text_en": "The sweater is on a wooden hanger.",
          "text_ja": "セーターは木製ハンガーに掛かっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a light wooden hanger with a metal hook",
          "text_en": "a light wooden hanger with a metal hook",
          "text_ja": "金属フックのある明るい色の木製ハンガー"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "shopping bags",
      "label_ja": "紙のショッピングバッグ",
      "category": "object",
      "importance": "primary",
      "description": "Several paper shopping bags in pink, white, and light brown hang from the right woman's left hand.",
      "bounding_box_conceptual": [
        60,
        54,
        40,
        30
      ],
      "color": [
        "pink",
        "white",
        "light brown"
      ],
      "attributes": [
        "paper",
        "colorful",
        "commercial",
        "portable"
      ],
      "action": [
        "hanging from her hand",
        "being carried",
        "showing previous purchases"
      ],
      "synonyms_and_related_words": [
        "shopping bags",
        "paper bags",
        "store bags",
        "purchase bags",
        "retail bags"
      ],
      "accepted_words": [
        "shopping bags",
        "paper bags",
        "store bags",
        "purchase bags",
        "retail bags"
      ],
      "common_typos": [
        "shoping bags",
        "paper baggs",
        "stor bags",
        "purchace bags"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bags",
            "ja": "袋"
          }
        ],
        "A2": [
          {
            "en": "paper bags",
            "ja": "紙袋"
          }
        ],
        "B1": [
          {
            "en": "bags containing purchases",
            "ja": "購入品の入った袋"
          }
        ],
        "B2": [
          {
            "en": "a collection of shopping bags suggesting several completed purchases",
            "ja": "複数の購入を示す買い物袋の集まり"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "colorful evidence of earlier shopping decisions",
          "ja": "これまでの買い物の決定を示す色鮮やかな証拠"
        },
        {
          "en": "paper bags carrying the story of the shopping trip",
          "ja": "買い物の物語を運ぶ紙袋"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shopping bag, paper bag, pink, carry",
          "text_en": "shopping bag, paper bag, pink, carry",
          "text_ja": "買い物袋、紙袋、ピンク、運ぶ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is carrying several shopping bags.",
          "text_en": "The woman is carrying several shopping bags.",
          "text_ja": "女性はいくつかの買い物袋を持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "pink, white, and brown paper bags hanging from her hand",
          "text_en": "pink, white, and brown paper bags hanging from her hand",
          "text_ja": "手から下がるピンク、白、茶色の紙袋"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "beige tote bag",
      "label_ja": "ベージュのトートバッグ",
      "category": "object",
      "importance": "secondary",
      "description": "A large beige fabric tote bag hangs from the right woman's left shoulder.",
      "bounding_box_conceptual": [
        39,
        73,
        52,
        22
      ],
      "color": [
        "beige",
        "cream"
      ],
      "attributes": [
        "large",
        "soft",
        "fabric",
        "practical",
        "reusable"
      ],
      "action": [
        "hanging from her shoulder",
        "carrying personal items"
      ],
      "synonyms_and_related_words": [
        "tote bag",
        "beige tote bag",
        "shoulder bag",
        "canvas bag",
        "fabric bag"
      ],
      "accepted_words": [
        "tote bag",
        "beige tote bag",
        "shoulder bag",
        "canvas bag",
        "fabric bag"
      ],
      "common_typos": [
        "toat bag",
        "tote beg",
        "shoulder beg",
        "canvus bag"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bag",
            "ja": "バッグ"
          }
        ],
        "A2": [
          {
            "en": "shoulder bag",
            "ja": "肩掛けバッグ"
          }
        ],
        "B1": [
          {
            "en": "reusable fabric bag",
            "ja": "再利用できる布製バッグ"
          }
        ],
        "B2": [
          {
            "en": "a practical reusable tote carrying personal belongings",
            "ja": "私物を運ぶ実用的な再利用トート"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a soft neutral shape balancing the colorful paper bags",
          "ja": "色鮮やかな紙袋とのバランスを取る柔らかな中間色"
        },
        {
          "en": "the practical companion of a long shopping day",
          "ja": "長い買い物の日の実用的な相棒"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bag, tote bag, shoulder, beige",
          "text_en": "bag, tote bag, shoulder, beige",
          "text_ja": "バッグ、トートバッグ、肩、ベージュ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A beige tote bag is hanging from her shoulder.",
          "text_en": "A beige tote bag is hanging from her shoulder.",
          "text_ja": "ベージュのトートバッグが肩から掛かっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large fabric tote carried over one shoulder",
          "text_en": "a large fabric tote carried over one shoulder",
          "text_ja": "片方の肩に掛けた大きな布製トート"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "foreground clothing rack",
      "label_ja": "手前の衣料品ラック",
      "category": "object",
      "importance": "primary",
      "description": "A metal clothing rack fills the left foreground and displays many garments on wooden hangers.",
      "bounding_box_conceptual": [
        30,
        0,
        70,
        28
      ],
      "color": [
        "silver",
        "light brown",
        "white",
        "navy",
        "beige",
        "blue"
      ],
      "attributes": [
        "full",
        "organized",
        "commercial",
        "metal",
        "accessible"
      ],
      "action": [
        "displaying clothes",
        "holding hangers",
        "separating garments"
      ],
      "synonyms_and_related_words": [
        "clothing rack",
        "clothes rack",
        "garment rack",
        "display rack",
        "retail rack"
      ],
      "accepted_words": [
        "clothing rack",
        "clothes rack",
        "garment rack",
        "display rack",
        "retail rack"
      ],
      "common_typos": [
        "cloth rack",
        "cloting rack",
        "garment rak",
        "display rak"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "rack",
            "ja": "ラック"
          }
        ],
        "A2": [
          {
            "en": "clothing rack",
            "ja": "衣料品ラック"
          }
        ],
        "B1": [
          {
            "en": "retail clothing rack",
            "ja": "小売店の衣料品ラック"
          }
        ],
        "B2": [
          {
            "en": "an organized retail fixture presenting multiple fashion choices",
            "ja": "複数の服の選択肢を示す整理された店舗什器"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a line of possible choices waiting on wooden hangers",
          "ja": "木製ハンガーに掛かって待つ選択肢の列"
        },
        {
          "en": "the store's horizontal library of colors and fabrics",
          "ja": "色と布地でできた店の横長の図書館"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clothing rack, clothes, hanger, store",
          "text_en": "clothing rack, clothes, hanger, store",
          "text_ja": "衣料品ラック、服、ハンガー、店"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Many clothes are hanging on the rack.",
          "text_en": "Many clothes are hanging on the rack.",
          "text_ja": "多くの服がラックに掛かっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a metal clothing rack filled with neatly arranged garments",
          "text_en": "a metal clothing rack filled with neatly arranged garments",
          "text_ja": "整然と並んだ衣服でいっぱいの金属製ラック"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "assorted clothes on hangers",
      "label_ja": "ハンガーに掛かったさまざまな服",
      "category": "object",
      "importance": "primary",
      "description": "White, beige, navy, light blue, and striped garments hang neatly from wooden hangers.",
      "bounding_box_conceptual": [
        38,
        0,
        62,
        29
      ],
      "color": [
        "white",
        "beige",
        "navy",
        "light blue",
        "brown"
      ],
      "attributes": [
        "neatly arranged",
        "varied",
        "soft",
        "casual",
        "fashionable"
      ],
      "action": [
        "hanging",
        "being displayed",
        "waiting to be selected"
      ],
      "synonyms_and_related_words": [
        "clothes",
        "garments",
        "tops",
        "shirts",
        "sweaters"
      ],
      "accepted_words": [
        "clothes",
        "garments",
        "tops",
        "shirts",
        "sweaters"
      ],
      "common_typos": [
        "cloths",
        "garmants",
        "clothing itams",
        "apperal"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "clothes",
            "ja": "服"
          }
        ],
        "A2": [
          {
            "en": "garments",
            "ja": "衣服"
          }
        ],
        "B1": [
          {
            "en": "assorted apparel",
            "ja": "さまざまな衣類"
          }
        ],
        "B2": [
          {
            "en": "a varied collection of garments arranged to encourage comparison",
            "ja": "比較を促すよう並べられた多様な衣服"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet spectrum of fabric and color",
          "ja": "布地と色でできた静かな連続"
        },
        {
          "en": "many possible outfits waiting in a row",
          "ja": "一列に並んで待つ多くの服装の可能性"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clothes, shirt, sweater, color",
          "text_en": "clothes, shirt, sweater, color",
          "text_ja": "服、シャツ、セーター、色"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many different clothes on the rack.",
          "text_en": "There are many different clothes on the rack.",
          "text_ja": "ラックにはさまざまな服があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "white, navy, beige, and striped garments on hangers",
          "text_en": "white, navy, beige, and striped garments on hangers",
          "text_ja": "ハンガーに並ぶ白、紺、ベージュ、ストライプの衣服"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "new arrival sign",
      "label_ja": "新商品案内の札",
      "category": "text_sign",
      "importance": "secondary",
      "description": "A small black sign near the foreground rack reads NEW ARRIVAL in white capital letters.",
      "bounding_box_conceptual": [
        25,
        2,
        18,
        9
      ],
      "color": [
        "black",
        "white"
      ],
      "attributes": [
        "rectangular",
        "informative",
        "simple",
        "commercial"
      ],
      "action": [
        "labeling new products",
        "attracting attention"
      ],
      "synonyms_and_related_words": [
        "NEW ARRIVAL sign",
        "new arrival",
        "new product sign",
        "display sign",
        "store sign"
      ],
      "accepted_words": [
        "NEW ARRIVAL sign",
        "new arrival",
        "new product sign",
        "display sign",
        "store sign"
      ],
      "common_typos": [
        "NEW ARIVAL",
        "NEW ARRIVEL",
        "new arival",
        "display sing"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sign",
            "ja": "看板"
          }
        ],
        "A2": [
          {
            "en": "new arrival",
            "ja": "新商品"
          }
        ],
        "B1": [
          {
            "en": "new collection notice",
            "ja": "新作案内"
          }
        ],
        "B2": [
          {
            "en": "a retail sign directing attention toward recently introduced items",
            "ja": "新しく入荷した商品へ注意を向ける店舗案内"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small sign promising something newly arrived",
          "ja": "新しく届いた何かを約束する小さな札"
        },
        {
          "en": "two white words inviting shoppers to look again",
          "ja": "買い物客にもう一度見るよう促す白い2語"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "new, arrival, sign, product",
          "text_en": "new, arrival, sign, product",
          "text_ja": "新しい、入荷、看板、商品"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The black sign says NEW ARRIVAL.",
          "text_en": "The black sign says NEW ARRIVAL.",
          "text_ja": "黒い札にはNEW ARRIVALと書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a small sign marking newly arrived clothes",
          "text_en": "a small sign marking newly arrived clothes",
          "text_ja": "新しく入荷した服を示す小さな札"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "sale sign",
      "label_ja": "セールの赤い看板",
      "category": "text_sign",
      "importance": "secondary",
      "description": "A red rectangular SALE sign stands in the left midground above a clothing display.",
      "bounding_box_conceptual": [
        20,
        11,
        20,
        8
      ],
      "color": [
        "red",
        "white"
      ],
      "attributes": [
        "bright",
        "commercial",
        "eye-catching",
        "rectangular"
      ],
      "action": [
        "advertising a discount",
        "attracting shoppers"
      ],
      "synonyms_and_related_words": [
        "SALE sign",
        "sale",
        "discount sign",
        "red sign",
        "promotion sign"
      ],
      "accepted_words": [
        "SALE sign",
        "sale",
        "discount sign",
        "red sign",
        "promotion sign"
      ],
      "common_typos": [
        "SAIL sign",
        "SALE sing",
        "discount sing",
        "promosion sign"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sale",
            "ja": "セール"
          }
        ],
        "A2": [
          {
            "en": "discount sign",
            "ja": "割引の看板"
          }
        ],
        "B1": [
          {
            "en": "promotional sign",
            "ja": "販促用看板"
          }
        ],
        "B2": [
          {
            "en": "an eye-catching notice designed to encourage immediate purchasing",
            "ja": "すぐの購入を促す目立つ案内"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a red invitation to buy now rather than later",
          "ja": "後ではなく今買うよう誘う赤い案内"
        },
        {
          "en": "a bright commercial signal in the neutral interior",
          "ja": "中間色の店内にある明るい商業的サイン"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sale, discount, red sign, price",
          "text_en": "sale, discount, red sign, price",
          "text_ja": "セール、割引、赤い看板、価格"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a red SALE sign in the store.",
          "text_en": "There is a red SALE sign in the store.",
          "text_ja": "店内には赤いSALEの看板があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an eye-catching sign advertising discounted items",
          "text_en": "an eye-catching sign advertising discounted items",
          "text_ja": "割引商品を宣伝する目立つ看板"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "shopping mall interior",
      "label_ja": "ショッピングモールの内装",
      "category": "setting",
      "importance": "primary",
      "description": "A spacious multi-level shopping mall with white walls, glossy floors, open corridors, glass railings, and bright lights surrounds the store.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "white",
        "cream",
        "silver",
        "light gray"
      ],
      "attributes": [
        "spacious",
        "modern",
        "multi-level",
        "bright",
        "clean",
        "open"
      ],
      "action": [
        "surrounding the shoppers",
        "connecting stores",
        "providing public space"
      ],
      "synonyms_and_related_words": [
        "shopping mall",
        "mall interior",
        "shopping center",
        "retail complex",
        "indoor mall"
      ],
      "accepted_words": [
        "shopping mall",
        "mall interior",
        "shopping center",
        "retail complex",
        "indoor mall"
      ],
      "common_typos": [
        "shoping mall",
        "mall interor",
        "shopping centre",
        "retale complex"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "mall",
            "ja": "モール"
          }
        ],
        "A2": [
          {
            "en": "shopping mall",
            "ja": "ショッピングモール"
          }
        ],
        "B1": [
          {
            "en": "retail complex",
            "ja": "商業施設"
          }
        ],
        "B2": [
          {
            "en": "a spacious contemporary retail environment designed for movement and display",
            "ja": "移動と展示のために設計された広々とした現代的商業空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright indoor city built around shopping",
          "ja": "買い物を中心に作られた明るい屋内都市"
        },
        {
          "en": "a layered public space of stores, light, and movement",
          "ja": "店舗、光、人の動きでできた公共空間"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shopping mall, store, floor, light",
          "text_en": "shopping mall, store, floor, light",
          "text_ja": "ショッピングモール、店、床、照明"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The women are shopping in a large mall.",
          "text_en": "The women are shopping in a large mall.",
          "text_ja": "女性たちは大きなモールで買い物をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a spacious multi-level mall with glass railings and bright lights",
          "text_en": "a spacious multi-level mall with glass railings and bright lights",
          "text_ja": "ガラス手すりと明るい照明がある複数階のモール"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "background shoppers",
      "label_ja": "背景の買い物客",
      "category": "people",
      "importance": "secondary",
      "description": "Many shoppers walk, browse, and stand in the mall corridors and stores behind the two women.",
      "bounding_box_conceptual": [
        24,
        60,
        55,
        40
      ],
      "color": [
        "white",
        "black",
        "blue",
        "beige",
        "gray"
      ],
      "attributes": [
        "numerous",
        "distant",
        "busy",
        "varied",
        "social"
      ],
      "action": [
        "walking",
        "browsing",
        "shopping",
        "standing",
        "talking"
      ],
      "synonyms_and_related_words": [
        "shoppers",
        "customers",
        "mall visitors",
        "people",
        "store visitors"
      ],
      "accepted_words": [
        "shoppers",
        "customers",
        "mall visitors",
        "people",
        "store visitors"
      ],
      "common_typos": [
        "shopers",
        "costumers",
        "mall visiters",
        "passerbys"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "people",
            "ja": "人々"
          }
        ],
        "A2": [
          {
            "en": "customers",
            "ja": "客"
          }
        ],
        "B1": [
          {
            "en": "background shoppers",
            "ja": "背景の買い物客"
          }
        ],
        "B2": [
          {
            "en": "a varied flow of mall visitors creating ongoing public activity",
            "ja": "継続する公共活動を感じさせる買い物客の流れ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small shopping stories moving through the background",
          "ja": "背景を動く小さな買い物の物語"
        },
        {
          "en": "a human current flowing through the mall",
          "ja": "モールを流れる人の流れ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "people, shoppers, walk, background",
          "text_en": "people, shoppers, walk, background",
          "text_ja": "人々、買い物客、歩く、背景"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Many people are walking in the background.",
          "text_en": "Many people are walking in the background.",
          "text_ja": "背景では多くの人が歩いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "shoppers moving through the mall corridors behind the women",
          "text_en": "shoppers moving through the mall corridors behind the women",
          "text_ja": "女性たちの後ろの通路を移動する買い物客"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "upper-floor balcony and glass railing",
      "label_ja": "上階のバルコニーとガラス手すり",
      "category": "setting",
      "importance": "secondary",
      "description": "An upper-floor walkway with transparent glass railings curves across the background above the stores.",
      "bounding_box_conceptual": [
        0,
        40,
        24,
        55
      ],
      "color": [
        "white",
        "transparent",
        "silver"
      ],
      "attributes": [
        "upper-level",
        "curved",
        "transparent",
        "modern",
        "open"
      ],
      "action": [
        "overlooking the lower floor",
        "connecting stores",
        "holding distant visitors"
      ],
      "synonyms_and_related_words": [
        "upper floor",
        "upper level",
        "balcony",
        "glass railing",
        "walkway"
      ],
      "accepted_words": [
        "upper floor",
        "upper level",
        "balcony",
        "glass railing",
        "walkway"
      ],
      "common_typos": [
        "uper floor",
        "upper levle",
        "balconey",
        "glass raling"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "upper floor",
            "ja": "上階"
          }
        ],
        "A2": [
          {
            "en": "glass railing",
            "ja": "ガラス手すり"
          }
        ],
        "B1": [
          {
            "en": "upper-level corridor",
            "ja": "上階の廊下"
          }
        ],
        "B2": [
          {
            "en": "a transparent upper-level walkway expanding the scene vertically",
            "ja": "場面を縦方向に広げる透明な上階通路"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a second layer of shopping life floating above the scene",
          "ja": "場面の上に浮かぶ買い物生活の第二層"
        },
        {
          "en": "a glass edge separating two levels of movement",
          "ja": "2つの移動階層を分けるガラスの境界"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "upper floor, balcony, glass, railing",
          "text_en": "upper floor, balcony, glass, railing",
          "text_ja": "上階、バルコニー、ガラス、手すり"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is another floor above the store.",
          "text_en": "There is another floor above the store.",
          "text_ja": "店の上には別の階があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an upper-level walkway with transparent glass railings",
          "text_en": "an upper-level walkway with transparent glass railings",
          "text_ja": "透明なガラス手すりのある上階通路"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "storefronts and clothing displays",
      "label_ja": "店舗の正面と衣料品展示",
      "category": "setting",
      "importance": "secondary",
      "description": "Several open storefronts, mannequins, clothing racks, and display areas extend across the middle and background.",
      "bounding_box_conceptual": [
        12,
        0,
        62,
        100
      ],
      "color": [
        "white",
        "beige",
        "black",
        "brown"
      ],
      "attributes": [
        "open",
        "commercial",
        "varied",
        "well-organized",
        "bright"
      ],
      "action": [
        "displaying products",
        "attracting shoppers",
        "forming the retail background"
      ],
      "synonyms_and_related_words": [
        "storefronts",
        "shops",
        "clothing displays",
        "store displays",
        "retail displays"
      ],
      "accepted_words": [
        "storefronts",
        "shops",
        "clothing displays",
        "store displays",
        "retail displays"
      ],
      "common_typos": [
        "store fronts",
        "shopes",
        "cloting displays",
        "retale displays"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shops",
            "ja": "店"
          }
        ],
        "A2": [
          {
            "en": "storefronts",
            "ja": "店舗正面"
          }
        ],
        "B1": [
          {
            "en": "retail displays",
            "ja": "小売展示"
          }
        ],
        "B2": [
          {
            "en": "a series of open retail spaces presenting different product selections",
            "ja": "異なる商品を見せる一連の販売空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright sequence of invitations to enter and browse",
          "ja": "入り見て回るよう誘う明るい店舗の連続"
        },
        {
          "en": "the commercial stage surrounding the two friends",
          "ja": "2人の友人を囲む商業的な舞台"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shop, store, display, clothes",
          "text_en": "shop, store, display, clothes",
          "text_ja": "店、店舗、展示、服"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many stores in the mall.",
          "text_en": "There are many stores in the mall.",
          "text_ja": "モールには多くの店があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "open storefronts filled with clothing displays and mannequins",
          "text_en": "open storefronts filled with clothing displays and mannequins",
          "text_ja": "衣料品展示とマネキンでいっぱいの店舗"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "bright ceiling lights and polished floor",
      "label_ja": "明るい天井照明と光沢のある床",
      "category": "setting",
      "importance": "secondary",
      "description": "Numerous recessed ceiling lights illuminate the store and reflect softly on the polished mall floor.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "warm white",
        "cream",
        "light gray"
      ],
      "attributes": [
        "bright",
        "warm",
        "reflective",
        "clean",
        "modern"
      ],
      "action": [
        "illuminating the mall",
        "reflecting on the floor",
        "creating a welcoming atmosphere"
      ],
      "synonyms_and_related_words": [
        "ceiling lights",
        "recessed lights",
        "bright lighting",
        "store lighting",
        "polished floor"
      ],
      "accepted_words": [
        "ceiling lights",
        "recessed lights",
        "bright lighting",
        "store lighting",
        "polished floor"
      ],
      "common_typos": [
        "ceilling lights",
        "recest lights",
        "bright ligthing",
        "polishd floor"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lights",
            "ja": "照明"
          }
        ],
        "A2": [
          {
            "en": "ceiling lights",
            "ja": "天井照明"
          }
        ],
        "B1": [
          {
            "en": "recessed lighting",
            "ja": "埋め込み照明"
          }
        ],
        "B2": [
          {
            "en": "even retail lighting reflected across a polished interior surface",
            "ja": "磨かれた内装面に反射する均一な店舗照明"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small circles of light guiding the eye through the mall",
          "ja": "モール内で視線を導く小さな光の円"
        },
        {
          "en": "a polished floor carrying soft reflections of movement",
          "ja": "人の動きの柔らかな反射を運ぶ磨かれた床"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "light, ceiling, floor, bright",
          "text_en": "light, ceiling, floor, bright",
          "text_ja": "照明、天井、床、明るい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The mall is bright because there are many ceiling lights.",
          "text_en": "The mall is bright because there are many ceiling lights.",
          "text_ja": "多くの天井照明があるため、モールは明るいです。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "warm recessed lights reflected on a polished floor",
          "text_en": "warm recessed lights reflected on a polished floor",
          "text_ja": "磨かれた床に反射する温かな埋め込み照明"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "black sign beside the foreground clothing rack",
      "content": "NEW ARRIVAL",
      "description_ja": "新しく入荷した商品を示す案内。",
      "accepted_words": [
        "NEW ARRIVAL",
        "new arrival",
        "new products",
        "new collection"
      ],
      "common_typos": [
        "NEW ARIVAL",
        "NEW ARRIVEL",
        "new arival"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "new, arrival, item, sign",
          "text_en": "new, arrival, item, sign",
          "text_ja": "新しい、入荷、商品、看板"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "NEW ARRIVAL means 新商品・新入荷。",
          "text_en": "NEW ARRIVAL means 新商品・新入荷。",
          "text_ja": "NEW ARRIVALは「新商品・新入荷」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "A black sign beside the rack says NEW ARRIVAL.",
          "text_en": "A black sign beside the rack says NEW ARRIVAL.",
          "text_ja": "ラックのそばの黒い札にはNEW ARRIVALと書かれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sign frames the nearby garments as current merchandise that shoppers are encouraged to examine first.",
          "text_en": "The sign frames the nearby garments as current merchandise that shoppers are encouraged to examine first.",
          "text_ja": "その札は近くの服を、客が最初に見るよう促される新しい商品として示しています。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "red sign in the left midground",
      "content": "SALE",
      "description_ja": "割引販売中であることを示す赤い案内。",
      "accepted_words": [
        "SALE",
        "sale",
        "discount",
        "special offer"
      ],
      "common_typos": [
        "SAIL",
        "SALEE",
        "discountt"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sale, discount, price, red",
          "text_en": "sale, discount, price, red",
          "text_ja": "セール、割引、価格、赤"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "SALE means セール・割引販売。",
          "text_en": "SALE means セール・割引販売。",
          "text_ja": "SALEは「セール・割引販売」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "A red SALE sign can be seen behind the clothing rack.",
          "text_en": "A red SALE sign can be seen behind the clothing rack.",
          "text_ja": "衣料品ラックの後ろには赤いSALEの看板が見えます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The red sale notice introduces a sense of urgency that may influence customers' purchasing decisions.",
          "text_en": "The red sale notice introduces a sense of urgency that may influence customers' purchasing decisions.",
          "text_ja": "赤いセール案内は、客の購入判断へ影響するかもしれない緊急性を加えています。"
        }
      ]
    },
    {
      "id": "text_003",
      "location": "upper-level banners in the background",
      "content": "indistinct promotional banners",
      "description_ja": "上階に掛けられた文字がはっきり読めない販促用バナー。",
      "accepted_words": [
        "promotional banners",
        "mall banners",
        "advertising signs",
        "hanging signs"
      ],
      "common_typos": [
        "promotional baners",
        "mall baners",
        "advertizing signs"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "banner, sign, advertisement, upper floor",
          "text_en": "banner, sign, advertisement, upper floor",
          "text_ja": "バナー、看板、広告、上階"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are several banners on the upper floor.",
          "text_en": "There are several banners on the upper floor.",
          "text_ja": "上階にはいくつかのバナーがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Although the words are unclear, the hanging banners appear to advertise...",
          "text_en": "Although the words are unclear, the hanging banners appear to advertise...",
          "text_ja": "文字は不鮮明ですが、吊り下げバナーは……を宣伝しているようです。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The distant banners contribute to the commercial atmosphere even though their specific messages cannot be read clearly.",
          "text_en": "The distant banners contribute to the commercial atmosphere even though their specific messages cannot be read clearly.",
          "text_ja": "遠くのバナーは、具体的な内容が読めなくても商業的な雰囲気に貢献しています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Shopping for clothes together",
      "description_ja": "一緒に服を買い物している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "shop for clothes",
        "shopping for clothes",
        "go shopping together",
        "browse clothing",
        "look for clothes"
      ],
      "accepted_words": [
        "shop for clothes",
        "shopping for clothes",
        "go shopping together",
        "browse clothing",
        "look for clothes"
      ],
      "common_typos": [
        "shoping for clothes",
        "go shoping",
        "browse cloths",
        "look for cloths"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shop",
            "ja": "買い物をする"
          }
        ],
        "A2": [
          {
            "en": "shop for clothes",
            "ja": "服を探して買い物する"
          }
        ],
        "B1": [
          {
            "en": "browse clothing",
            "ja": "衣類を見て回る"
          }
        ],
        "B2": [
          {
            "en": "explore fashion choices together",
            "ja": "一緒に服の選択肢を探る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning a shopping trip into shared time",
          "ja": "買い物を共有の時間へ変える"
        },
        {
          "en": "moving through fashion choices as a pair",
          "ja": "2人で服の選択肢を見て進む"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shop, clothes, friend, store",
          "text_en": "shop, clothes, friend, store",
          "text_ja": "買い物する、服、友人、店"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two women are shopping for clothes.",
          "text_en": "The two women are shopping for clothes.",
          "text_ja": "2人の女性は服を買い物しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "browse a clothing store and compare different items",
          "text_en": "browse a clothing store and compare different items",
          "text_ja": "衣料品店を見て回り異なる商品を比較する"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Holding up the yellow sweater",
      "description_ja": "黄色いセーターを持ち上げている",
      "involved_elements": [
        "element_002",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "hold up the sweater",
        "holding the sweater",
        "lift the garment",
        "show the sweater",
        "present the clothing item"
      ],
      "accepted_words": [
        "hold up the sweater",
        "holding the sweater",
        "lift the garment",
        "show the sweater",
        "present the clothing item"
      ],
      "common_typos": [
        "hold upp",
        "holdng the sweater",
        "lift the garmant",
        "show the sweter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold the sweater",
            "ja": "セーターを持つ"
          }
        ],
        "A2": [
          {
            "en": "hold up the sweater",
            "ja": "セーターを持ち上げる"
          }
        ],
        "B1": [
          {
            "en": "present the garment",
            "ja": "衣服を見せる"
          }
        ],
        "B2": [
          {
            "en": "hold the garment at viewing height",
            "ja": "見やすい高さに衣服を持つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "lifting the choice into the center of the conversation",
          "ja": "選択肢を会話の中心へ持ち上げる"
        },
        {
          "en": "turning the sweater into a shared visual question",
          "ja": "セーターを共有の視覚的な質問へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hold, lift, sweater, hanger",
          "text_en": "hold, lift, sweater, hanger",
          "text_ja": "持つ、持ち上げる、セーター、ハンガー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is holding up the yellow sweater.",
          "text_en": "The woman is holding up the yellow sweater.",
          "text_ja": "女性は黄色いセーターを持ち上げています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold the sweater at chest height for her friend to inspect",
          "text_en": "hold the sweater at chest height for her friend to inspect",
          "text_ja": "友人が見られるよう胸の高さでセーターを持つ"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Pointing at the sweater",
      "description_ja": "セーターを指さしている",
      "involved_elements": [
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "point at the sweater",
        "pointing at the sweater",
        "indicate the sleeve",
        "gesture toward the garment",
        "draw attention to the sweater"
      ],
      "accepted_words": [
        "point at the sweater",
        "pointing at the sweater",
        "indicate the sleeve",
        "gesture toward the garment",
        "draw attention to the sweater"
      ],
      "common_typos": [
        "point at sweter",
        "pointng",
        "indecate the sleeve",
        "gestur toward"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "point",
            "ja": "指さす"
          }
        ],
        "A2": [
          {
            "en": "point at the sweater",
            "ja": "セーターを指さす"
          }
        ],
        "B1": [
          {
            "en": "draw attention to a feature",
            "ja": "特徴へ注意を向ける"
          }
        ],
        "B2": [
          {
            "en": "focus the discussion on a design feature",
            "ja": "デザインの特徴へ会話を集中させる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a fingertip narrowing a wide choice to one small detail",
          "ja": "広い選択を小さな細部へ絞る指先"
        },
        {
          "en": "a gesture that turns looking into discussion",
          "ja": "見ることを話し合いへ変える身振り"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "point, sweater, sleeve, detail",
          "text_en": "point, sweater, sleeve, detail",
          "text_ja": "指さす、セーター、袖、細部"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is pointing at the yellow sweater.",
          "text_en": "The woman is pointing at the yellow sweater.",
          "text_ja": "女性は黄色いセーターを指さしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "point toward a specific part of the sweater",
          "text_en": "point toward a specific part of the sweater",
          "text_ja": "セーターの特定の部分を指さす"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Comparing and evaluating the sweater",
      "description_ja": "セーターを比較し評価している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_009"
      ],
      "synonyms": [
        "compare the sweater",
        "evaluate the garment",
        "consider the color",
        "judge the design",
        "decide whether to buy it"
      ],
      "accepted_words": [
        "compare the sweater",
        "evaluate the garment",
        "consider the color",
        "judge the design",
        "decide whether to buy it"
      ],
      "common_typos": [
        "compear the sweater",
        "evaluat",
        "consider the collor",
        "judge the desine"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "look at the sweater",
            "ja": "セーターを見る"
          }
        ],
        "A2": [
          {
            "en": "compare clothes",
            "ja": "服を比較する"
          }
        ],
        "B1": [
          {
            "en": "evaluate the garment",
            "ja": "衣服を評価する"
          }
        ],
        "B2": [
          {
            "en": "assess design, color, and suitability",
            "ja": "デザイン、色、似合い方を評価する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "weighing color, style, and friendship in one moment",
          "ja": "一瞬の中で色、スタイル、友情を比べる"
        },
        {
          "en": "turning personal taste into a shared decision",
          "ja": "個人の好みを共同決定へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "compare, choose, color, buy",
          "text_en": "compare, choose, color, buy",
          "text_ja": "比較する、選ぶ、色、買う"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The women are deciding whether to buy the sweater.",
          "text_en": "The women are deciding whether to buy the sweater.",
          "text_ja": "女性たちはそのセーターを買うか決めています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "compare the yellow sweater with other clothes on the rack",
          "text_en": "compare the yellow sweater with other clothes on the rack",
          "text_ja": "黄色いセーターをほかの服と比較する"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Sharing opinions about fashion",
      "description_ja": "服について意見を伝え合っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "share opinions",
        "talk about the sweater",
        "give fashion advice",
        "comment on the clothes",
        "discuss the color"
      ],
      "accepted_words": [
        "share opinions",
        "talk about the sweater",
        "give fashion advice",
        "comment on the clothes",
        "discuss the color"
      ],
      "common_typos": [
        "share oppinions",
        "talk abaut",
        "fashion advise",
        "coment on"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "talk about clothes",
            "ja": "服について話す"
          }
        ],
        "A2": [
          {
            "en": "share opinions",
            "ja": "意見を共有する"
          }
        ],
        "B1": [
          {
            "en": "comment on the color and design",
            "ja": "色とデザインについて意見を述べる"
          }
        ],
        "B2": [
          {
            "en": "negotiate a purchase through supportive feedback",
            "ja": "支援的な助言で購入を検討する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "friendship speaking through taste and laughter",
          "ja": "好みと笑いを通して語る友情"
        },
        {
          "en": "a conversation in which style becomes social",
          "ja": "スタイルが社交的になる会話"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "opinion, advice, color, style",
          "text_en": "opinion, advice, color, style",
          "text_ja": "意見、助言、色、スタイル"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The friends are talking about the sweater.",
          "text_en": "The friends are talking about the sweater.",
          "text_ja": "友人たちはセーターについて話しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "give a friendly opinion about the sweater's color and style",
          "text_en": "give a friendly opinion about the sweater's color and style",
          "text_ja": "セーターの色とスタイルについて親しみのある意見を伝える"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Carrying shopping bags",
      "description_ja": "買い物袋を持っている",
      "involved_elements": [
        "element_003",
        "element_006",
        "element_007"
      ],
      "synonyms": [
        "carry shopping bags",
        "hold paper bags",
        "carry purchases",
        "hold several bags",
        "carry a tote bag"
      ],
      "accepted_words": [
        "carry shopping bags",
        "hold paper bags",
        "carry purchases",
        "hold several bags",
        "carry a tote bag"
      ],
      "common_typos": [
        "cary shopping bags",
        "hold paper baggs",
        "carry purchaces",
        "severel bags"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "carry bags",
            "ja": "袋を持つ"
          }
        ],
        "A2": [
          {
            "en": "carry several paper bags",
            "ja": "複数の紙袋を持つ"
          }
        ],
        "B1": [
          {
            "en": "carry previous purchases",
            "ja": "以前の購入品を運ぶ"
          }
        ],
        "B2": [
          {
            "en": "carry evidence of several earlier purchases",
            "ja": "複数の以前の購入を示す物を運ぶ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "carrying the visible history of the shopping trip",
          "ja": "買い物の見える履歴を運ぶ"
        },
        {
          "en": "paper handles gathering purchases into one hand",
          "ja": "購入品を片手に集める紙の持ち手"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "carry, shopping bag, paper bag, tote",
          "text_en": "carry, shopping bag, paper bag, tote",
          "text_ja": "運ぶ、買い物袋、紙袋、トート"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is carrying several shopping bags.",
          "text_en": "She is carrying several shopping bags.",
          "text_ja": "彼女はいくつかの買い物袋を持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "carry colorful paper bags and a large beige tote",
          "text_en": "carry colorful paper bags and a large beige tote",
          "text_ja": "色の異なる紙袋と大きなトートを持つ"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Browsing the clothing rack",
      "description_ja": "衣料品ラックを見て回っている",
      "involved_elements": [
        "element_008",
        "element_009",
        "element_010",
        "element_011"
      ],
      "synonyms": [
        "browse the rack",
        "look through clothes",
        "check the new arrivals",
        "look at displayed garments",
        "search the rack"
      ],
      "accepted_words": [
        "browse the rack",
        "look through clothes",
        "check the new arrivals",
        "look at displayed garments",
        "search the rack"
      ],
      "common_typos": [
        "brows the rack",
        "look threw clothes",
        "new arivals",
        "displayd garments"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "look at clothes",
            "ja": "服を見る"
          }
        ],
        "A2": [
          {
            "en": "browse the clothing rack",
            "ja": "衣料品ラックを見て回る"
          }
        ],
        "B1": [
          {
            "en": "examine displayed garments",
            "ja": "展示された衣服を詳しく見る"
          }
        ],
        "B2": [
          {
            "en": "scan a display for a suitable garment",
            "ja": "似合う衣服を求め展示を見る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "moving through a library of fabric choices",
          "ja": "布地の選択肢の図書館を見て進む"
        },
        {
          "en": "searching a row of colors for the right answer",
          "ja": "正しい答えを求め色の列を探す"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "browse, rack, clothes, new arrival",
          "text_en": "browse, rack, clothes, new arrival",
          "text_ja": "見て回る、ラック、服、新商品"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The women are looking through the clothes on the rack.",
          "text_en": "The women are looking through the clothes on the rack.",
          "text_ja": "女性たちはラックの服を見ています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "browse the new arrivals and compare several colors",
          "text_en": "browse the new arrivals and compare several colors",
          "text_ja": "新商品を見て複数の色を比較する"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "Smiling and enjoying time together",
      "description_ja": "笑顔で一緒の時間を楽しんでいる",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "smile",
        "laugh together",
        "enjoy shopping",
        "have fun together",
        "share a cheerful moment"
      ],
      "accepted_words": [
        "smile",
        "laugh together",
        "enjoy shopping",
        "have fun together",
        "share a cheerful moment"
      ],
      "common_typos": [
        "smil",
        "lagh together",
        "enjoy shoping",
        "have funn"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "smile",
            "ja": "笑う"
          }
        ],
        "A2": [
          {
            "en": "enjoy shopping",
            "ja": "買い物を楽しむ"
          }
        ],
        "B1": [
          {
            "en": "share a cheerful moment",
            "ja": "明るいひとときを共有する"
          }
        ],
        "B2": [
          {
            "en": "express friendship through relaxed smiles",
            "ja": "笑顔で友情を表す"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "smiles making the store feel warmer",
          "ja": "店をより温かく感じさせる笑顔"
        },
        {
          "en": "friendship visible in a simple shopping moment",
          "ja": "買い物の瞬間に見える友情"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "smile, laugh, happy, friend",
          "text_en": "smile, laugh, happy, friend",
          "text_ja": "笑う、笑い声、幸せ、友人"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two friends are smiling and having fun.",
          "text_en": "The two friends are smiling and having fun.",
          "text_ja": "2人の友人は笑顔で楽しんでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "share a relaxed and cheerful moment while shopping",
          "text_en": "share a relaxed and cheerful moment while shopping",
          "text_ja": "買い物中に明るいひとときを共有する"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "Walking and shopping in the background",
      "description_ja": "背景で歩き買い物をしている",
      "involved_elements": [
        "element_013",
        "element_015",
        "element_012"
      ],
      "synonyms": [
        "walk through the mall",
        "shop in the background",
        "browse stores",
        "move along the corridor",
        "visit shops"
      ],
      "accepted_words": [
        "walk through the mall",
        "shop in the background",
        "browse stores",
        "move along the corridor",
        "visit shops"
      ],
      "common_typos": [
        "walk threw the mall",
        "shop in back ground",
        "brows stores",
        "coridor"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "walk",
            "ja": "歩く"
          }
        ],
        "A2": [
          {
            "en": "walk through the mall",
            "ja": "モールを歩く"
          }
        ],
        "B1": [
          {
            "en": "move along the corridor",
            "ja": "通路を進む"
          }
        ],
        "B2": [
          {
            "en": "form a background flow of customers",
            "ja": "客の背景の流れを作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a current of shoppers flowing behind the two friends",
          "ja": "2人の後ろを流れる買い物客の流れ"
        },
        {
          "en": "many small journeys crossing the same commercial space",
          "ja": "同じ商業空間を横切る小さな旅"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "walk, people, mall, background",
          "text_en": "walk, people, mall, background",
          "text_ja": "歩く、人々、モール、背景"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Many people are walking in the mall.",
          "text_en": "Many people are walking in the mall.",
          "text_ja": "多くの人がモールを歩いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "shoppers moving between stores in the background",
          "text_en": "shoppers moving between stores in the background",
          "text_ja": "背景で店舗の間を移動する買い物客"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "woman holding the sweater",
      "relationship": "to the left of",
      "object": "woman pointing at the sweater",
      "example_beginner": "The woman holding the sweater is on the left.",
      "example_intermediate": "The woman holding the yellow sweater stands to the left of her friend."
    },
    {
      "subject": "woman pointing at the sweater",
      "relationship": "to the right of",
      "object": "woman holding the sweater",
      "example_beginner": "The woman in blue is on the right.",
      "example_intermediate": "The woman in the blue shirt stands to the right of the sweater holder."
    },
    {
      "subject": "yellow sweater",
      "relationship": "between",
      "object": "two women",
      "example_beginner": "The sweater is between the women.",
      "example_intermediate": "The pale yellow sweater is positioned between the two friends."
    },
    {
      "subject": "yellow sweater",
      "relationship": "on",
      "object": "wooden hanger",
      "example_beginner": "The sweater is on a hanger.",
      "example_intermediate": "The yellow knit sweater is hanging from a light wooden hanger."
    },
    {
      "subject": "clothing rack",
      "relationship": "in front of",
      "object": "mall corridor",
      "example_beginner": "The rack is in the foreground.",
      "example_intermediate": "The clothing rack occupies the foreground in front of the mall corridor."
    },
    {
      "subject": "new arrival sign",
      "relationship": "beside",
      "object": "clothing rack",
      "example_beginner": "The sign is beside the rack.",
      "example_intermediate": "The NEW ARRIVAL sign stands beside the foreground clothing rack."
    },
    {
      "subject": "sale sign",
      "relationship": "behind",
      "object": "new arrival sign",
      "example_beginner": "The sale sign is behind it.",
      "example_intermediate": "The red SALE sign appears behind the smaller NEW ARRIVAL sign."
    },
    {
      "subject": "shopping bags",
      "relationship": "in front of",
      "object": "right woman's skirt",
      "example_beginner": "The bags are in front of her skirt.",
      "example_intermediate": "The colorful shopping bags hang in front of the right woman's beige skirt."
    },
    {
      "subject": "tote bag",
      "relationship": "over",
      "object": "right woman's shoulder",
      "example_beginner": "The tote bag is over her shoulder.",
      "example_intermediate": "The large beige tote hangs over the right woman's left shoulder."
    },
    {
      "subject": "background shoppers",
      "relationship": "behind",
      "object": "two women",
      "example_beginner": "Many people are behind them.",
      "example_intermediate": "Numerous mall visitors walk behind the two women."
    },
    {
      "subject": "upper-floor balcony",
      "relationship": "above",
      "object": "storefronts",
      "example_beginner": "The upper floor is above the stores.",
      "example_intermediate": "The glass-railed upper walkway stretches above the storefronts."
    },
    {
      "subject": "storefronts",
      "relationship": "around",
      "object": "mall corridor",
      "example_beginner": "Stores are around the corridor.",
      "example_intermediate": "Open storefronts line the mall corridor around the shoppers."
    },
    {
      "subject": "ceiling lights",
      "relationship": "above",
      "object": "shopping area",
      "example_beginner": "The lights are above the mall.",
      "example_intermediate": "Numerous recessed lights shine above the shopping area."
    },
    {
      "subject": "polished floor",
      "relationship": "below",
      "object": "shoppers",
      "example_beginner": "The floor is below the shoppers.",
      "example_intermediate": "The polished mall floor extends below the walking shoppers."
    },
    {
      "subject": "assorted clothes",
      "relationship": "on",
      "object": "foreground rack",
      "example_beginner": "The clothes are on the rack.",
      "example_intermediate": "White, navy, beige, and striped garments hang on the foreground rack."
    },
    {
      "subject": "woman pointing",
      "relationship": "next to",
      "object": "shopping bags",
      "example_beginner": "The woman is next to the bags.",
      "example_intermediate": "The pointing woman stands directly beside the paper shopping bags she is carrying."
    }
  ],
  "adjective_library": {
    "people": [
      "young",
      "cheerful",
      "friendly",
      "fashionable",
      "relaxed",
      "smiling",
      "social",
      "supportive",
      "expressive",
      "interested"
    ],
    "clothes": [
      "yellow",
      "pale",
      "knitted",
      "long-sleeved",
      "soft-looking",
      "casual",
      "fashionable",
      "neatly arranged",
      "light-colored",
      "new"
    ],
    "store": [
      "bright",
      "modern",
      "spacious",
      "organized",
      "welcoming",
      "commercial",
      "busy",
      "well-lit",
      "clean",
      "stylish"
    ],
    "mall": [
      "multi-level",
      "open",
      "lively",
      "polished",
      "crowded",
      "contemporary",
      "comfortable",
      "large",
      "indoor",
      "public"
    ],
    "bags": [
      "colorful",
      "paper",
      "beige",
      "large",
      "portable",
      "practical",
      "reusable",
      "full-looking",
      "lightweight"
    ],
    "mood": [
      "cheerful",
      "friendly",
      "pleasant",
      "energetic",
      "relaxed",
      "social",
      "bright",
      "fashionable",
      "busy",
      "positive"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "The women are shopping in a clothing store."
    },
    {
      "preposition": "inside",
      "meaning_ja": "〜の内部で",
      "example": "They are inside a modern shopping mall."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜を見て・〜で",
      "example": "The two friends are looking at a sweater."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "They are standing beside a clothing rack."
    },
    {
      "preposition": "next to",
      "meaning_ja": "〜の隣に",
      "example": "The woman in blue is next to her friend."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The yellow sweater is between the two women."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に・掛かって",
      "example": "The sweater is on a wooden hanger."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "The upper floor is above the stores."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "The polished floor is below the shoppers."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "Many shoppers are behind the two friends."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The clothing rack is in front of the mall corridor."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The sweater holder is to the left of her friend."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The woman in blue is to the right of the sweater."
    },
    {
      "preposition": "over",
      "meaning_ja": "〜に掛けて",
      "example": "A tote bag hangs over her shoulder."
    },
    {
      "preposition": "from",
      "meaning_ja": "〜から",
      "example": "Shopping bags hang from her hand."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って・〜と一緒に",
      "example": "She holds the sweater with both hands."
    },
    {
      "preposition": "among",
      "meaning_ja": "〜の中で",
      "example": "The yellow sweater stands out among the neutral clothes."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Shoppers are walking through the mall."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周囲に",
      "example": "Stores and displays are arranged around the corridor."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "複数の人物が今している動作を表す。",
      "examples": [
        "Two women are shopping together.",
        "They are looking at a sweater.",
        "The friends are comparing clothes."
      ],
      "hints": [
        "two womenやtheyにはareを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "Singular subject + is + present participle (-ing)",
      "label_ja": "単数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "1人の人物が今している動作を表す。",
      "examples": [
        "The woman is holding a sweater.",
        "Her friend is pointing at it.",
        "A shopper is walking in the background."
      ],
      "hints": [
        "the womanやher friendにはisを使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "店やモールにある物や人を説明する。",
      "examples": [
        "There is a clothing rack on the left.",
        "There are many shoppers in the background.",
        "There is a SALE sign in the store."
      ],
      "hints": [
        "単数にはThere is、複数にはThere areを使います。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物、衣服、店の様子を表す。",
      "examples": [
        "The women are cheerful.",
        "The sweater is yellow.",
        "The mall is bright and spacious."
      ],
      "hints": [
        "cheerful, yellow, bright, spaciousなどを使えます。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "人物や物の位置を説明する。",
      "examples": [
        "The sweater is between the women.",
        "The clothes are on the rack.",
        "The shoppers are behind the two friends."
      ],
      "hints": [
        "between, on, behind, besideなどを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + look / seem + adjective",
      "label_ja": "look・seemで印象を表す",
      "level": "intermediate",
      "purpose_ja": "画像から受ける印象を断定せずに述べる。",
      "examples": [
        "The women look happy.",
        "The sweater seems soft.",
        "The store looks modern and welcoming."
      ],
      "hints": [
        "look + 形容詞、seem + 形容詞を使います。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "while + clause",
      "label_ja": "whileによる同時進行",
      "level": "intermediate",
      "purpose_ja": "2つの人物の動作を一文でつなぐ。",
      "examples": [
        "One woman holds the sweater while the other points at it.",
        "They smile while they compare the clothes.",
        "Other shoppers walk through the mall while the friends talk."
      ],
      "hints": [
        "whileは「〜している間に」という意味です。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "One person ..., while the other ...",
      "label_ja": "2人の動作を対比する構文",
      "level": "intermediate",
      "purpose_ja": "2人の異なる役割を明確に表す。",
      "examples": [
        "One woman is holding the sweater, while the other is giving her opinion.",
        "One friend examines the garment, while the other points at the sleeve."
      ],
      "hints": [
        "one womanとthe otherを使うと2人を分けて説明できます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "衣服や看板が置かれている状態を表す。",
      "examples": [
        "The clothes are arranged on the rack.",
        "The sweater is held between the women.",
        "The signs are placed near the displays."
      ],
      "hints": [
        "be動詞 + 過去分詞で「〜されている」を表します。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "who / which / that relative clause",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を加える。",
      "examples": [
        "The woman who is holding the sweater wears a cream top.",
        "The sweater, which is pale yellow, hangs from a wooden hanger.",
        "The bags that she is carrying are pink, white, and brown."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "because / so that + clause",
      "label_ja": "理由・目的を表す節",
      "level": "intermediate",
      "purpose_ja": "なぜその動作をしているか説明する。",
      "examples": [
        "She holds up the sweater so that her friend can see it.",
        "They are smiling because they are enjoying the shopping trip.",
        "The lights are bright so that customers can see the colors clearly."
      ],
      "hints": [
        "becauseは理由、so thatは目的です。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ人物の同時動作を簡潔に表す。",
      "examples": [
        "Holding up the sweater, the woman smiles at her friend.",
        "Pointing at the sleeve, the other woman gives her opinion.",
        "Carrying several bags, she continues shopping."
      ],
      "hints": [
        "文頭を動詞ingで始めます。"
      ]
    },
    {
      "id": "grammar_013",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "背景や受け身の状態を文頭に置く。",
      "examples": [
        "Surrounded by clothes, the two friends compare the sweater.",
        "Displayed on wooden hangers, the garments are easy to examine.",
        "Illuminated by ceiling lights, the mall looks clean and welcoming."
      ],
      "hints": [
        "Surrounded, Displayed, Illuminatedなどから始められます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "It looks like / It seems that / appears to",
      "label_ja": "推量表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できる内容を慎重に述べる。",
      "examples": [
        "It looks like the women are deciding whether to buy the sweater.",
        "The friend appears to recommend the item.",
        "It seems that they have already bought several things."
      ],
      "hints": [
        "断定できない意図や状況には推量表現を使います。"
      ]
    },
    {
      "id": "grammar_015",
      "pattern": "By + present participle, subject + verb",
      "label_ja": "By + 動名詞で方法を表す",
      "level": "advanced",
      "purpose_ja": "方法と結果をつなぐ。",
      "examples": [
        "By holding up the sweater, the woman can examine its shape.",
        "By pointing at the sleeve, her friend focuses attention on a detail.",
        "By comparing several items, they can make a better decision."
      ],
      "hints": [
        "By + 動詞ingで「〜することによって」を表します。"
      ]
    },
    {
      "id": "grammar_016",
      "pattern": "not only A but also B",
      "label_ja": "not only A but also B",
      "level": "advanced",
      "purpose_ja": "2つの重要な特徴を強調する。",
      "examples": [
        "The scene shows not only shopping but also friendship.",
        "The woman carries not only paper bags but also a large tote.",
        "The mall is not only bright but also spacious."
      ],
      "hints": [
        "AとBには同じ種類の語句を置きます。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "make + object + adjective",
      "label_ja": "make + 目的語 + 形容詞",
      "level": "advanced",
      "purpose_ja": "物や状況が雰囲気へ与える効果を説明する。",
      "examples": [
        "The bright lights make the store feel welcoming.",
        "The red SALE sign makes the display more noticeable.",
        "Their smiles make the shopping scene feel friendly."
      ],
      "hints": [
        "make + 目的語 + 形容詞で「〜を…にする」と表します。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are two young women."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are in ______.",
        "example": "They are in a clothing store."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are shopping together."
      },
      {
        "step": 4,
        "question_ja": "何を見ていますか？",
        "template": "They are looking at ______.",
        "example": "They are looking at a yellow sweater."
      },
      {
        "step": 5,
        "question_ja": "左の女性は？",
        "template": "The woman on the left is ______ing.",
        "example": "The woman on the left is holding the sweater."
      },
      {
        "step": 6,
        "question_ja": "右の女性は？",
        "template": "The woman on the right is ______ing.",
        "example": "The woman on the right is pointing at it."
      },
      {
        "step": 7,
        "question_ja": "背景には？",
        "template": "There is / are ______ in the background.",
        "example": "There are many shoppers and stores in the background."
      }
    ],
    "intermediate": [
      {
        "template": "Two young women are ______ing together in ______.",
        "example": "Two young women are shopping together in a clothing store."
      },
      {
        "template": "One woman is ______ing, while the other is ______ing.",
        "example": "One woman is holding the sweater, while the other is pointing at it."
      },
      {
        "template": "The woman in ______ is carrying ______.",
        "example": "The woman in the blue shirt is carrying several shopping bags."
      },
      {
        "template": "In the foreground, there is / are ______.",
        "example": "In the foreground, there is a rack filled with garments."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see shoppers, stores, and an upper-floor walkway."
      },
      {
        "template": "The ______ sign suggests that ______.",
        "example": "The SALE sign suggests that some clothes have reduced prices."
      },
      {
        "template": "It looks like the women are ______.",
        "example": "It looks like the women are deciding whether to buy the sweater."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding the yellow sweater at chest height, the woman invites her friend to examine it."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by neatly arranged garments, the friends discuss a possible purchase."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The woman who is pointing at the sweater is carrying several paper bags."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The sweater, which is pale yellow, stands out among the neutral garments."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By comparing the sweater with other clothes, the women can make a more confident decision."
      },
      {
        "template": "Not only A but also B.",
        "example": "The scene shows not only a shopping decision but also a warm moment of friendship."
      },
      {
        "template": "Inference with seems / appears.",
        "example": "The friend appears to recommend the sweater because she points at it with a cheerful smile."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "Two women are in a clothing store.",
      "They are shopping together.",
      "One woman is holding a yellow sweater.",
      "The other woman is pointing at it.",
      "They are smiling.",
      "There are many clothes on the rack.",
      "The woman on the right is carrying shopping bags.",
      "Many people are walking in the background.",
      "The mall is bright and large."
    ],
    "intermediate": [
      "Two young women are shopping together in a clothing store inside a modern mall.",
      "The woman on the left is holding up a pale yellow sweater on a wooden hanger.",
      "Her friend in a light blue shirt is pointing at the sweater and giving her opinion.",
      "Both women are smiling, so they seem to be enjoying the shopping trip.",
      "The woman on the right is carrying several paper bags and a large beige tote.",
      "In the foreground, a rack displays white, navy, beige, and striped clothes.",
      "A black NEW ARRIVAL sign and a red SALE sign can be seen near the rack.",
      "In the background, shoppers are walking between stores under bright ceiling lights.",
      "The upper-floor walkway and glass railings make the mall look spacious and modern."
    ],
    "advanced": [
      "Standing beside a rack of neatly arranged garments, two young women share a cheerful shopping moment in a bright multi-level mall.",
      "The woman in the cream knit top holds a pale yellow sweater at chest height, while her friend points toward the garment as if commenting on a particular feature.",
      "Carrying several colorful paper bags and a large reusable tote, the woman on the right appears to have already made a number of purchases.",
      "The yellow sweater, which hangs from a wooden hanger, becomes the visual center because it contrasts with the mostly neutral clothing on the rack.",
      "Nearby NEW ARRIVAL and SALE signs introduce both novelty and commercial urgency.",
      "Behind the friends, shoppers move through open corridors lined with storefronts, while an upper-floor walkway extends the scene vertically.",
      "Illuminated by warm ceiling lights, the mall feels modern, welcoming, and active.",
      "The scene presents shopping not only as choosing clothes but also as a social process shaped by friendship and advice."
    ]
  },
  "full_description_support": {
    "beginner_model": "Two young women are in a clothing store. They are shopping together. One woman is holding a yellow sweater on a hanger. The other woman is pointing at the sweater. They are smiling. The woman on the right is carrying several shopping bags and a beige tote bag. There are many clothes on a rack. A NEW ARRIVAL sign and a SALE sign are in the store. Many people are walking in the background. The shopping mall is bright, large, and busy.",
    "intermediate_model": "Two young women are shopping together in a clothing store inside a bright modern mall. The woman on the left has long dark hair and wears a cream knit top with blue jeans. She is holding up a pale yellow sweater on a wooden hanger and looking at it with a cheerful smile. Her friend on the right wears a light blue shirt over a white top and a long beige skirt. She points at the sweater while smiling, as if she is giving an opinion about the color or design. Several pink, white, and brown shopping bags hang from her left hand, and a large beige tote bag rests on her shoulder. In the foreground, a metal rack displays white, navy, beige, light blue, and striped garments. A black NEW ARRIVAL sign and a red SALE sign are visible near the displays. In the background, many shoppers walk through the mall, and open storefronts, glass railings, an upper floor, and bright ceiling lights create a lively atmosphere.",
    "advanced_model": "Inside a spacious, well-lit clothing store in a modern multi-level mall, two young women stand close together and examine a pale yellow knit sweater. The woman on the left, dressed in a cream knit top and blue jeans, holds the garment at chest height on a wooden hanger, allowing its shape and long sleeves to remain visible. Her friend, who wears a light blue overshirt, a white top, and a beige skirt, points toward the sweater with a cheerful expression, suggesting that she is commenting on a particular detail or recommending the item. Carrying several colorful paper shopping bags in one hand and a large beige tote over her shoulder, she appears to have already made several purchases. The sweater is positioned between the two women and becomes the central focus of both the composition and their conversation. In the left foreground, a metal rack holds neatly arranged garments in white, navy, beige, blue, and striped patterns. Because most of these clothes are neutral in color, the pale yellow sweater stands out clearly. A black NEW ARRIVAL sign suggests that some items have recently entered the store, while a red SALE sign introduces the possibility of reduced prices. Beyond the two friends, numerous shoppers move between open storefronts, display racks, and mall corridors. A glass-railed upper walkway stretches across the background, revealing the building's multi-level design and adding depth. Warm recessed lighting and a polished floor make the retail environment feel clean, comfortable, and welcoming. Through their smiles, relaxed body language, and shared attention, the women show that shopping can be both a purchasing activity and a social experience shaped by friendship, advice, and personal taste."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "Two women are in a clothing store. They are looking at a yellow sweater.",
        "ja": "2人の女性が衣料品店にいます。黄色いセーターを見ています。",
        "focus": "複数主語にareを使い、場所と対象を加える。"
      },
      {
        "en": "One woman is holding the sweater. The other woman is pointing at it.",
        "ja": "1人の女性がセーターを持ち、もう1人がそれを指さしています。",
        "focus": "one womanとthe other womanで2人の動作を分ける。"
      },
      {
        "en": "There are many clothes and shoppers in the mall.",
        "ja": "モールには多くの服と買い物客がいます。",
        "focus": "There areで複数の物や人の存在を表す。"
      }
    ],
    "A2": [
      {
        "en": "Two young women are shopping together and comparing a pale yellow sweater in a bright mall.",
        "ja": "2人の若い女性が明るいモールで一緒に買い物をし、淡い黄色のセーターを比較しています。",
        "focus": "andで2つの動作をつなぎ、色と場所を詳しくする。"
      },
      {
        "en": "The woman on the left is holding up the sweater, while her friend is pointing at it and smiling.",
        "ja": "左の女性がセーターを持ち上げ、友人はそれを指さして笑っています。",
        "focus": "whileで2人の同時動作を表す。"
      },
      {
        "en": "The woman in the blue shirt is carrying several shopping bags and a large tote bag.",
        "ja": "水色のシャツの女性は、いくつかの買い物袋と大きなトートバッグを持っています。",
        "focus": "服装で人物を特定し、andで持ち物をつなぐ。"
      }
    ],
    "B1": [
      {
        "en": "The two friends are discussing whether the yellow sweater suits the shopper who is holding it.",
        "ja": "2人の友人は、黄色いセーターが持っている女性に似合うかどうか話し合っています。",
        "focus": "whetherと関係代名詞whoを使う。"
      },
      {
        "en": "The clothing rack in the foreground displays mostly neutral garments, which makes the yellow sweater stand out.",
        "ja": "手前のラックには主に中間色の服が並び、そのため黄色いセーターが目立っています。",
        "focus": "whichとmake + 目的語 + 形容詞を使う。"
      },
      {
        "en": "The shopping bags suggest that the women have already visited several stores before entering this one.",
        "ja": "買い物袋から、女性たちはこの店へ入る前にすでにいくつかの店を訪れたと考えられます。",
        "focus": "suggest thatと現在完了を使って推測する。"
      }
    ],
    "B2": [
      {
        "en": "Holding the pale yellow sweater at chest height, the woman on the left invites her friend to assess its color, shape, and overall suitability.",
        "ja": "淡い黄色のセーターを胸の高さに持ち、左の女性は友人に色、形、全体的な似合い方を評価してもらっています。",
        "focus": "分詞構文とassessを使って動作の目的を表す。"
      },
      {
        "en": "The friend, who points toward a particular part of the garment while smiling, appears to be offering supportive fashion advice rather than criticism.",
        "ja": "笑顔で衣服の特定の部分を指さす友人は、批判ではなく支援的な服装の助言をしているようです。",
        "focus": "非制限用法who、while、appears to、rather thanを組み合わせる。"
      },
      {
        "en": "Set against a multi-level mall filled with shoppers, storefronts, glass railings, and bright lighting, the scene presents shopping as both a commercial activity and a shared social experience.",
        "ja": "買い物客、店舗、ガラス手すり、明るい照明で満ちた複数階のモールを背景に、この場面は買い物を商業活動であると同時に共有される社会的経験として示しています。",
        "focus": "過去分詞で始まる分詞構文とboth A and Bを使う。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene014Data = scene014Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene014Data;
}
