"use strict";

const scene003Data = {
  "id": "scene_003",
  "image_id": "003.webp",
  "overall_description_ja": "朝の暖かな日差しが差し込む寝室で、パジャマ姿の女の子が窓の前に立ち、カーテンを開けている。部屋には整えかけのベッド、目覚まし時計、スリッパ、机、ノート、植物、学校用のバッグなどが見える。",
  "overall_description_en": "A teenage girl in pajamas is standing by the window in her bedroom and opening the curtains. Warm morning sunlight is streaming into the room. An unmade bed, an alarm clock, slippers, a desk, books, a plant, and a school backpack can be seen around her.",
  "overall_mood": [
    "bright",
    "warm",
    "peaceful",
    "fresh",
    "cozy",
    "sunny",
    "calm",
    "hopeful",
    "comfortable",
    "gentle",
    "morning atmosphere",
    "soft light",
    "cheerful",
    "relaxed"
  ],
  "mission_guides": {
    "gist": "女の子（girl）が何をしているか（opening the curtains）を書こう",
    "setting": "場所（bedroom）と窓（window）に注目しよう",
    "details": "ベッド（bed）、目覚まし時計（alarm clock）、スリッパ（slippers）、机（desk）を加えよう",
    "complete": "素晴らしい！朝の日差し（morning sunlight）や明るい雰囲気（bright, peaceful）まで描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a teenage girl in pink pajamas",
        "ja": "ピンクのパジャマを着た10代の女の子"
      },
      {
        "en": "standing by the window",
        "ja": "窓のそばに立っている"
      },
      {
        "en": "opening the curtains",
        "ja": "カーテンを開けている"
      },
      {
        "en": "starting her morning routine",
        "ja": "朝の習慣を始めている"
      }
    ],
    "setting": [
      {
        "en": "inside a cozy bedroom",
        "ja": "居心地の良い寝室の中で"
      },
      {
        "en": "an unmade bed beside her",
        "ja": "彼女のそばにある整えられていないベッド"
      },
      {
        "en": "an alarm clock on the nightstand",
        "ja": "ベッドサイドテーブルの上にある目覚まし時計"
      },
      {
        "en": "a study desk and school backpack nearby",
        "ja": "近くにある勉強机と学校用リュック"
      }
    ],
    "mood": [
      {
        "en": "warm morning sunlight",
        "ja": "暖かな朝の日差し"
      },
      {
        "en": "a bright and peaceful room",
        "ja": "明るく穏やかな部屋"
      },
      {
        "en": "a fresh start to the day",
        "ja": "一日のさわやかな始まり"
      },
      {
        "en": "a calm and hopeful atmosphere",
        "ja": "穏やかで希望に満ちた雰囲気"
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
        "girl",
        "teenage girl",
        "student",
        "young woman",
        "she",
        "teenager",
        "daughter"
      ],
      "hint_msg": "まずは描写の中心となる「女の子（girl）」や「10代の女の子（teenage girl）」を書いてみましょう。",
      "success_msg": "Good! 次は、彼女が何をしているか、動作（Action）を書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "opening",
        "standing",
        "waking",
        "stretching",
        "pulling",
        "looking",
        "starting"
      ],
      "hint_msg": "次は「カーテンを開けている（is opening the curtains）」や「立っている（is standing）」を書いてみましょう。",
      "success_msg": "Great! 最後に、どこで何を開けているか、目的語や場所を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object",
      "name": "目的語・場所",
      "targets": [
        "curtains",
        "window",
        "bedroom",
        "room",
        "sunlight",
        "bed",
        "morning"
      ],
      "hint_msg": "「カーテン（curtains）」「窓（window）」「寝室（bedroom）」などを加えて文を完成させましょう。",
      "success_msg": "Excellent! 基本の描写が完成しました。さらに朝の光や部屋の小物を描写してみましょう。"
    }
  ],
  "suggested_topics": [
    "starting a new day",
    "opening the curtains in the morning",
    "a peaceful morning routine",
    "sunlight entering a bedroom",
    "getting ready for school",
    "waking up in a cozy room"
  ],
  "scene_structure": {
    "foreground": [
      "soft rug",
      "pink backpack",
      "wooden chair",
      "slippers",
      "edge of bed"
    ],
    "midground": [
      "teenage girl",
      "curtains",
      "window",
      "bed",
      "nightstand",
      "alarm clock"
    ],
    "background": [
      "wall shelf",
      "books",
      "teddy bear",
      "plants",
      "desk",
      "lamp",
      "outdoor trees"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "girl",
      "label_ja": "女の子",
      "category": "person",
      "importance": "primary",
      "description": "A teenage girl with brown hair tied in a loose bun is standing by the window. She is wearing pink plaid pajamas and opening the curtains with a peaceful smile.",
      "bounding_box_conceptual": [
        8,
        43,
        84,
        39
      ],
      "color": [
        "pink",
        "brown",
        "cream"
      ],
      "attributes": [
        "young",
        "sleepy",
        "peaceful",
        "fresh",
        "relaxed",
        "cheerful"
      ],
      "action": [
        "standing",
        "opening the curtains",
        "waking up",
        "looking outside",
        "starting her day"
      ],
      "synonyms_and_related_words": [
        "girl",
        "teenage girl",
        "student",
        "young woman",
        "teenager",
        "daughter",
        "young person"
      ],
      "accepted_words": [
        "girl",
        "teenage girl",
        "student",
        "young woman",
        "teenager",
        "daughter",
        "young person",
        "she",
        "female student"
      ],
      "common_typos": [
        "gril",
        "girll",
        "gurl",
        "teeneger",
        "teenage gril",
        "studant",
        "young women",
        "daugter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "girl",
            "ja": "女の子"
          },
          {
            "en": "student",
            "ja": "生徒"
          }
        ],
        "A2": [
          {
            "en": "teenage girl",
            "ja": "10代の女の子"
          },
          {
            "en": "young woman",
            "ja": "若い女性"
          }
        ],
        "B1": [
          {
            "en": "female student",
            "ja": "女子生徒"
          },
          {
            "en": "teenager",
            "ja": "10代の若者"
          }
        ],
        "B2": [
          {
            "en": "young figure",
            "ja": "若い人物"
          },
          {
            "en": "sleepy but cheerful teenager",
            "ja": "眠そうだが明るい10代の女の子"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a sleepy girl greeting the morning",
          "ja": "朝を迎える眠そうな女の子"
        },
        {
          "en": "a young person welcoming a new day",
          "ja": "新しい一日を迎える若者"
        },
        {
          "en": "a girl standing in a pool of morning light",
          "ja": "朝の光に包まれて立つ女の子"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "girl, student, teenager, pajamas",
          "text_en": "girl, student, teenager, pajamas",
          "text_ja": "女の子、生徒、10代の若者、パジャマ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A girl is standing by the window.",
          "text_en": "A girl is standing by the window.",
          "text_ja": "女の子が窓のそばに立っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The girl is...",
          "text_en": "The girl is...",
          "text_ja": "その女の子は……しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "teenage girl, peaceful smile, pink pajamas",
          "text_en": "teenage girl, peaceful smile, pink pajamas",
          "text_ja": "10代の女の子、穏やかな笑顔、ピンクのパジャマ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "starting her day with a smile",
          "text_en": "starting her day with a smile",
          "text_ja": "笑顔で一日を始めている"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl, dressed in pink pajamas, is quietly welcoming the morning light.",
          "text_en": "The girl, dressed in pink pajamas, is quietly welcoming the morning light.",
          "text_ja": "ピンクのパジャマを着た女の子が、静かに朝の光を迎えています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "curtains",
      "label_ja": "カーテン",
      "category": "object",
      "importance": "primary",
      "description": "Light cream curtains are being pulled open by the girl, allowing sunlight to enter the room.",
      "bounding_box_conceptual": [
        0,
        51,
        82,
        44
      ],
      "color": [
        "cream",
        "white",
        "golden"
      ],
      "attributes": [
        "light",
        "soft",
        "thin",
        "flowing",
        "partly open"
      ],
      "action": [
        "being opened",
        "being pulled apart",
        "moving in the light"
      ],
      "synonyms_and_related_words": [
        "curtains",
        "drapes",
        "window curtains",
        "fabric panels",
        "sheer curtains"
      ],
      "accepted_words": [
        "curtains",
        "drapes",
        "window curtains",
        "fabric panels",
        "sheer curtains",
        "cream curtains"
      ],
      "common_typos": [
        "curtans",
        "curtians",
        "curtainses",
        "draps",
        "window curtan",
        "shear curtains"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "curtain",
            "ja": "カーテン"
          },
          {
            "en": "open",
            "ja": "開ける"
          }
        ],
        "A2": [
          {
            "en": "curtains",
            "ja": "カーテン（複数）"
          },
          {
            "en": "window curtains",
            "ja": "窓のカーテン"
          }
        ],
        "B1": [
          {
            "en": "sheer curtains",
            "ja": "薄手のカーテン"
          },
          {
            "en": "drapes",
            "ja": "厚手のカーテン"
          }
        ],
        "B2": [
          {
            "en": "flowing fabric panels",
            "ja": "流れるような布のパネル"
          },
          {
            "en": "light-filtering curtains",
            "ja": "光をやわらげるカーテン"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "curtains parting like a stage at sunrise",
          "ja": "日の出とともに舞台の幕のように開くカーテン"
        },
        {
          "en": "soft fabric releasing the morning light",
          "ja": "朝の光を解き放つ柔らかな布"
        },
        {
          "en": "pale curtains glowing in the sun",
          "ja": "日差しの中で輝く淡い色のカーテン"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "curtain, curtains, open, pull",
          "text_en": "curtain, curtains, open, pull",
          "text_ja": "カーテン、カーテン（複数）、開ける、引く"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is opening the curtains.",
          "text_en": "She is opening the curtains.",
          "text_ja": "彼女はカーテンを開けています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "pull the curtains open with both hands",
          "text_en": "pull the curtains open with both hands",
          "text_ja": "両手でカーテンを引いて開ける"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The pale curtains, pulled apart by the girl, glow in the warm sunlight.",
          "text_en": "The pale curtains, pulled apart by the girl, glow in the warm sunlight.",
          "text_ja": "女の子に開けられた淡い色のカーテンが、暖かな日差しの中で輝いています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "window",
      "label_ja": "窓",
      "category": "setting",
      "importance": "primary",
      "description": "A large bedroom window shows green trees and rooftops outside and lets bright morning sunlight into the room.",
      "bounding_box_conceptual": [
        0,
        63,
        62,
        26
      ],
      "color": [
        "white",
        "golden",
        "green",
        "blue"
      ],
      "attributes": [
        "large",
        "bright",
        "sunlit",
        "clear",
        "open-looking"
      ],
      "action": [
        "letting in sunlight",
        "showing the outside view",
        "brightening the room"
      ],
      "synonyms_and_related_words": [
        "window",
        "bedroom window",
        "large window",
        "windowpane",
        "glass window",
        "outside view"
      ],
      "accepted_words": [
        "window",
        "bedroom window",
        "large window",
        "windowpane",
        "glass window",
        "outside view",
        "pane"
      ],
      "common_typos": [
        "windo",
        "winow",
        "windoe",
        "window pain",
        "windowpanee",
        "outside veiw"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "window",
            "ja": "窓"
          },
          {
            "en": "outside",
            "ja": "外"
          }
        ],
        "A2": [
          {
            "en": "large window",
            "ja": "大きな窓"
          },
          {
            "en": "outside view",
            "ja": "外の景色"
          }
        ],
        "B1": [
          {
            "en": "windowpane",
            "ja": "窓ガラス"
          },
          {
            "en": "sunlit window",
            "ja": "日差しを受けた窓"
          }
        ],
        "B2": [
          {
            "en": "bright opening to the outdoors",
            "ja": "外へと開かれた明るい窓"
          },
          {
            "en": "light-filled window frame",
            "ja": "光に満ちた窓枠"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a window opening the room to a new day",
          "ja": "部屋を新しい一日へ開く窓"
        },
        {
          "en": "a bright frame around the morning sky",
          "ja": "朝空を囲む明るい額縁"
        },
        {
          "en": "a gateway for golden sunlight",
          "ja": "金色の日差しを招き入れる入口"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, outside, trees, sunlight",
          "text_en": "window, outside, trees, sunlight",
          "text_ja": "窓、外、木々、日差し"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "by the window",
          "text_en": "by the window",
          "text_ja": "窓のそばに"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl is standing by the window.",
          "text_en": "The girl is standing by the window.",
          "text_ja": "女の子は窓のそばに立っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large window filled with morning light",
          "text_en": "a large window filled with morning light",
          "text_ja": "朝の光に満ちた大きな窓"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Through the large window, green trees and rooftops can be seen in the distance.",
          "text_en": "Through the large window, green trees and rooftops can be seen in the distance.",
          "text_ja": "大きな窓の向こうには、緑の木々や屋根が遠くに見えます。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "bedroom",
      "label_ja": "寝室",
      "category": "place",
      "importance": "primary",
      "description": "The scene takes place in a warm, cozy bedroom with wooden furniture, soft colors, and morning sunlight.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "pink",
        "cream",
        "brown",
        "golden"
      ],
      "attributes": [
        "cozy",
        "bright",
        "warm",
        "comfortable",
        "tidy",
        "lived-in"
      ],
      "action": [
        "surrounding the girl",
        "providing a place to sleep and study"
      ],
      "synonyms_and_related_words": [
        "bedroom",
        "room",
        "sleeping room",
        "personal room",
        "cozy room"
      ],
      "accepted_words": [
        "bedroom",
        "room",
        "sleeping room",
        "personal room",
        "cozy room",
        "girl's room"
      ],
      "common_typos": [
        "bedrom",
        "bed room",
        "bedorom",
        "roomm",
        "sleeping rom",
        "cozy rooom"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bedroom",
            "ja": "寝室"
          },
          {
            "en": "room",
            "ja": "部屋"
          }
        ],
        "A2": [
          {
            "en": "girl's room",
            "ja": "女の子の部屋"
          },
          {
            "en": "cozy room",
            "ja": "居心地の良い部屋"
          }
        ],
        "B1": [
          {
            "en": "personal space",
            "ja": "自分のための空間"
          },
          {
            "en": "sunlit bedroom",
            "ja": "日差しの差し込む寝室"
          }
        ],
        "B2": [
          {
            "en": "warm domestic interior",
            "ja": "暖かな家庭的室内"
          },
          {
            "en": "peaceful private space",
            "ja": "穏やかな個人空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a cozy room waking up with the sun",
          "ja": "太陽とともに目覚める居心地の良い部屋"
        },
        {
          "en": "a private world filled with morning warmth",
          "ja": "朝の温かさで満たされた自分だけの世界"
        },
        {
          "en": "a peaceful bedroom beginning to glow",
          "ja": "光り始める穏やかな寝室"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bedroom, room, bed, morning",
          "text_en": "bedroom, room, bed, morning",
          "text_ja": "寝室、部屋、ベッド、朝"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl is in her bedroom.",
          "text_en": "The girl is in her bedroom.",
          "text_ja": "女の子は自分の寝室にいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "inside a warm and cozy bedroom",
          "text_en": "inside a warm and cozy bedroom",
          "text_ja": "暖かく居心地の良い寝室の中で"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Filled with soft colors and warm sunlight, the bedroom feels peaceful and welcoming.",
          "text_en": "Filled with soft colors and warm sunlight, the bedroom feels peaceful and welcoming.",
          "text_ja": "柔らかな色と暖かな日差しに満たされ、寝室は穏やかで居心地よく感じられます。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "morning sunlight",
      "label_ja": "朝の日差し",
      "category": "environment",
      "importance": "primary",
      "description": "Golden morning sunlight streams through the window and spreads across the floor, bed, and desk.",
      "bounding_box_conceptual": [
        0,
        38,
        100,
        62
      ],
      "color": [
        "golden",
        "yellow",
        "warm white"
      ],
      "attributes": [
        "warm",
        "bright",
        "golden",
        "soft",
        "natural"
      ],
      "action": [
        "streaming through the window",
        "lighting the room",
        "creating long shadows"
      ],
      "synonyms_and_related_words": [
        "morning sunlight",
        "sunshine",
        "daylight",
        "golden light",
        "natural light",
        "sunbeams",
        "morning light"
      ],
      "accepted_words": [
        "morning sunlight",
        "sunshine",
        "daylight",
        "golden light",
        "natural light",
        "sunbeams",
        "morning light",
        "sunlight"
      ],
      "common_typos": [
        "sunligt",
        "sunligh",
        "morning sunligt",
        "day ligth",
        "goldan light",
        "sun beems"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sunlight",
            "ja": "日差し"
          },
          {
            "en": "light",
            "ja": "光"
          }
        ],
        "A2": [
          {
            "en": "morning light",
            "ja": "朝の光"
          },
          {
            "en": "sunshine",
            "ja": "日光"
          }
        ],
        "B1": [
          {
            "en": "natural light",
            "ja": "自然光"
          },
          {
            "en": "sunbeams",
            "ja": "差し込む光の筋"
          }
        ],
        "B2": [
          {
            "en": "golden illumination",
            "ja": "金色の光"
          },
          {
            "en": "radiant morning glow",
            "ja": "輝く朝の光"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden sunlight pouring into the room",
          "ja": "部屋へ流れ込む金色の日差し"
        },
        {
          "en": "morning light painting the floor with warmth",
          "ja": "床を暖かな色に染める朝の光"
        },
        {
          "en": "sunbeams announcing the beginning of a new day",
          "ja": "新しい一日の始まりを告げる光の筋"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sunlight, light, bright, warm",
          "text_en": "sunlight, light, bright, warm",
          "text_ja": "日差し、光、明るい、暖かな"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Sunlight is coming through the window.",
          "text_en": "Sunlight is coming through the window.",
          "text_ja": "日差しが窓から差し込んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "warm morning sunlight filling the room",
          "text_en": "warm morning sunlight filling the room",
          "text_ja": "部屋を満たす暖かな朝の日差し"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Streaming through the window, the golden sunlight creates a fresh and hopeful atmosphere.",
          "text_en": "Streaming through the window, the golden sunlight creates a fresh and hopeful atmosphere.",
          "text_ja": "窓から差し込む金色の日差しが、さわやかで希望に満ちた雰囲気を作っています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "bed",
      "label_ja": "ベッド",
      "category": "furniture",
      "importance": "secondary",
      "description": "A wooden bed with rumpled pink and white bedding stands on the left side of the room.",
      "bounding_box_conceptual": [
        42,
        0,
        50,
        42
      ],
      "color": [
        "pink",
        "white",
        "blue-green",
        "brown"
      ],
      "attributes": [
        "unmade",
        "soft",
        "wooden",
        "comfortable",
        "rumpled"
      ],
      "action": [
        "standing beside the girl",
        "holding pillows and blankets"
      ],
      "synonyms_and_related_words": [
        "bed",
        "wooden bed",
        "unmade bed",
        "single bed",
        "bedding",
        "mattress"
      ],
      "accepted_words": [
        "bed",
        "wooden bed",
        "unmade bed",
        "single bed",
        "bedding",
        "mattress",
        "sleeping place"
      ],
      "common_typos": [
        "bad",
        "bedd",
        "wooden bad",
        "unmade bead",
        "single bead",
        "matress"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bed",
            "ja": "ベッド"
          },
          {
            "en": "pillow",
            "ja": "枕"
          }
        ],
        "A2": [
          {
            "en": "unmade bed",
            "ja": "整えられていないベッド"
          },
          {
            "en": "blanket",
            "ja": "毛布"
          }
        ],
        "B1": [
          {
            "en": "rumpled bedding",
            "ja": "しわになった寝具"
          },
          {
            "en": "wooden bed frame",
            "ja": "木製のベッド枠"
          }
        ],
        "B2": [
          {
            "en": "loosely arranged bedding",
            "ja": "ゆるく乱れた寝具"
          },
          {
            "en": "sleeping area",
            "ja": "就寝スペース"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "an unmade bed still holding the warmth of sleep",
          "ja": "眠りの温もりをまだ残している整えられていないベッド"
        },
        {
          "en": "soft blankets left in the shape of the night",
          "ja": "夜の形を残した柔らかな毛布"
        },
        {
          "en": "a quiet reminder that the day has just begun",
          "ja": "一日が始まったばかりだと伝える静かな印"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bed, pillow, blanket, sleep",
          "text_en": "bed, pillow, blanket, sleep",
          "text_ja": "ベッド、枕、毛布、眠る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a bed beside the girl.",
          "text_en": "There is a bed beside the girl.",
          "text_ja": "女の子のそばにベッドがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an unmade bed with pink blankets",
          "text_en": "an unmade bed with pink blankets",
          "text_ja": "ピンクの毛布がある整えられていないベッド"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The rumpled bedding suggests that the girl has only just woken up.",
          "text_en": "The rumpled bedding suggests that the girl has only just woken up.",
          "text_ja": "しわになった寝具から、女の子がちょうど起きたばかりだと分かります。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "alarm clock",
      "label_ja": "目覚まし時計",
      "category": "object",
      "importance": "secondary",
      "description": "A black twin-bell alarm clock sits on the bedside table and appears to be ringing.",
      "bounding_box_conceptual": [
        53,
        39,
        11,
        8
      ],
      "color": [
        "black",
        "cream",
        "silver"
      ],
      "attributes": [
        "small",
        "round",
        "black",
        "ringing",
        "traditional"
      ],
      "action": [
        "ringing",
        "sitting on the nightstand",
        "showing the time"
      ],
      "synonyms_and_related_words": [
        "alarm clock",
        "clock",
        "morning alarm",
        "twin-bell clock",
        "bedside clock"
      ],
      "accepted_words": [
        "alarm clock",
        "clock",
        "morning alarm",
        "twin-bell clock",
        "bedside clock",
        "alarm"
      ],
      "common_typos": [
        "alerm clock",
        "alarm clok",
        "clcok",
        "morning alaram",
        "bedside clok"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "clock",
            "ja": "時計"
          },
          {
            "en": "alarm",
            "ja": "目覚まし"
          }
        ],
        "A2": [
          {
            "en": "alarm clock",
            "ja": "目覚まし時計"
          },
          {
            "en": "ring",
            "ja": "鳴る"
          }
        ],
        "B1": [
          {
            "en": "bedside clock",
            "ja": "ベッド脇の時計"
          },
          {
            "en": "morning alarm",
            "ja": "朝の目覚まし"
          }
        ],
        "B2": [
          {
            "en": "traditional twin-bell clock",
            "ja": "昔ながらの二つベル型時計"
          },
          {
            "en": "wake-up alarm",
            "ja": "起床用アラーム"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small clock calling the girl into the day",
          "ja": "女の子を一日へ呼び出す小さな時計"
        },
        {
          "en": "the morning's first noisy messenger",
          "ja": "朝一番のにぎやかな使者"
        },
        {
          "en": "a black alarm breaking the silence of sleep",
          "ja": "眠りの静けさを破る黒い目覚まし時計"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clock, alarm, ring, time",
          "text_en": "clock, alarm, ring, time",
          "text_ja": "時計、目覚まし、鳴る、時間"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The alarm clock is ringing.",
          "text_en": "The alarm clock is ringing.",
          "text_ja": "目覚まし時計が鳴っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black alarm clock on the bedside table",
          "text_en": "a black alarm clock on the bedside table",
          "text_ja": "ベッド脇のテーブルにある黒い目覚まし時計"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The ringing alarm clock suggests that the girl's morning routine has just begun.",
          "text_en": "The ringing alarm clock suggests that the girl's morning routine has just begun.",
          "text_ja": "鳴っている目覚まし時計から、女の子の朝の習慣が始まったばかりだと分かります。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "nightstand",
      "label_ja": "ベッドサイドテーブル",
      "category": "furniture",
      "importance": "secondary",
      "description": "A small wooden nightstand with drawers stands between the bed and the window.",
      "bounding_box_conceptual": [
        57,
        34,
        28,
        15
      ],
      "color": [
        "brown",
        "cream"
      ],
      "attributes": [
        "small",
        "wooden",
        "rectangular",
        "practical"
      ],
      "action": [
        "holding the clock",
        "holding a lamp and plant"
      ],
      "synonyms_and_related_words": [
        "nightstand",
        "bedside table",
        "small cabinet",
        "side table",
        "bedside cabinet"
      ],
      "accepted_words": [
        "nightstand",
        "bedside table",
        "small cabinet",
        "side table",
        "bedside cabinet",
        "drawer unit"
      ],
      "common_typos": [
        "night stand",
        "nighstand",
        "bed side table",
        "cabnet",
        "side tabel"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "table",
            "ja": "テーブル"
          },
          {
            "en": "drawer",
            "ja": "引き出し"
          }
        ],
        "A2": [
          {
            "en": "bedside table",
            "ja": "ベッド脇のテーブル"
          },
          {
            "en": "small cabinet",
            "ja": "小さな棚"
          }
        ],
        "B1": [
          {
            "en": "nightstand",
            "ja": "ナイトスタンド、ベッドサイドテーブル"
          },
          {
            "en": "bedside cabinet",
            "ja": "ベッド脇の収納棚"
          }
        ],
        "B2": [
          {
            "en": "compact storage unit",
            "ja": "小型の収納家具"
          },
          {
            "en": "wooden bedside furnishing",
            "ja": "木製のベッド脇家具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small table holding the tools of morning",
          "ja": "朝の道具を載せた小さなテーブル"
        },
        {
          "en": "a quiet corner between sleep and daylight",
          "ja": "眠りと朝の光の間にある静かな一角"
        },
        {
          "en": "a wooden companion beside the bed",
          "ja": "ベッドのそばにある木製の相棒"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "table, drawer, small, wooden",
          "text_en": "table, drawer, small, wooden",
          "text_ja": "テーブル、引き出し、小さい、木製の"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a small table beside the bed.",
          "text_en": "There is a small table beside the bed.",
          "text_ja": "ベッドのそばに小さなテーブルがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden bedside table with drawers",
          "text_en": "a wooden bedside table with drawers",
          "text_ja": "引き出しのある木製のベッドサイドテーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The nightstand holds several objects connected with the girl's morning routine.",
          "text_en": "The nightstand holds several objects connected with the girl's morning routine.",
          "text_ja": "ベッドサイドテーブルには、女の子の朝の習慣に関係する物がいくつか置かれています。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "slippers",
      "label_ja": "スリッパ",
      "category": "object",
      "importance": "secondary",
      "description": "A pair of soft pink slippers lies on the wooden floor beside the bed.",
      "bounding_box_conceptual": [
        81,
        32,
        10,
        15
      ],
      "color": [
        "pink",
        "cream"
      ],
      "attributes": [
        "soft",
        "fluffy",
        "pink",
        "comfortable",
        "paired"
      ],
      "action": [
        "lying on the floor",
        "waiting beside the bed"
      ],
      "synonyms_and_related_words": [
        "slippers",
        "house slippers",
        "indoor shoes",
        "soft shoes",
        "bedroom slippers"
      ],
      "accepted_words": [
        "slippers",
        "house slippers",
        "indoor shoes",
        "soft shoes",
        "bedroom slippers",
        "pair of slippers"
      ],
      "common_typos": [
        "slipers",
        "slippres",
        "house slipers",
        "indor shoes",
        "pair of sliper"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shoes",
            "ja": "靴"
          },
          {
            "en": "slippers",
            "ja": "スリッパ"
          }
        ],
        "A2": [
          {
            "en": "house slippers",
            "ja": "室内用スリッパ"
          },
          {
            "en": "soft shoes",
            "ja": "柔らかい靴"
          }
        ],
        "B1": [
          {
            "en": "bedroom slippers",
            "ja": "寝室用スリッパ"
          },
          {
            "en": "pair of slippers",
            "ja": "一足のスリッパ"
          }
        ],
        "B2": [
          {
            "en": "fluffy indoor footwear",
            "ja": "ふわふわした室内履き"
          },
          {
            "en": "comfortable house shoes",
            "ja": "快適な室内履き"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "soft slippers waiting for her first steps",
          "ja": "彼女の最初の一歩を待つ柔らかなスリッパ"
        },
        {
          "en": "a quiet pair of shoes beside the bed",
          "ja": "ベッドのそばにある静かな一足"
        },
        {
          "en": "small signs of an ordinary morning",
          "ja": "いつもの朝を示す小さな物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "slippers, shoes, floor, soft",
          "text_en": "slippers, shoes, floor, soft",
          "text_ja": "スリッパ、靴、床、柔らかい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The slippers are on the floor.",
          "text_en": "The slippers are on the floor.",
          "text_ja": "スリッパは床の上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a pair of soft slippers beside the bed",
          "text_en": "a pair of soft slippers beside the bed",
          "text_ja": "ベッドのそばにある柔らかな一足のスリッパ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The slippers resting beside the bed emphasize the ordinary, personal nature of the morning scene.",
          "text_en": "The slippers resting beside the bed emphasize the ordinary, personal nature of the morning scene.",
          "text_ja": "ベッドのそばに置かれたスリッパが、この朝の場面の日常的で個人的な雰囲気を強めています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "desk",
      "label_ja": "勉強机",
      "category": "furniture",
      "importance": "secondary",
      "description": "A wooden study desk on the right holds an open notebook, books, pencils, a plant, and a desk lamp.",
      "bounding_box_conceptual": [
        54,
        72,
        38,
        28
      ],
      "color": [
        "brown",
        "cream"
      ],
      "attributes": [
        "wooden",
        "organized",
        "sunlit",
        "practical"
      ],
      "action": [
        "holding study materials",
        "standing near the window"
      ],
      "synonyms_and_related_words": [
        "desk",
        "study desk",
        "wooden desk",
        "writing desk",
        "work table"
      ],
      "accepted_words": [
        "desk",
        "study desk",
        "wooden desk",
        "writing desk",
        "work table",
        "table"
      ],
      "common_typos": [
        "desck",
        "dask",
        "study desck",
        "writting desk",
        "work tabel"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "desk",
            "ja": "机"
          },
          {
            "en": "table",
            "ja": "テーブル"
          }
        ],
        "A2": [
          {
            "en": "study desk",
            "ja": "勉強机"
          },
          {
            "en": "wooden desk",
            "ja": "木製の机"
          }
        ],
        "B1": [
          {
            "en": "writing desk",
            "ja": "書き物用の机"
          },
          {
            "en": "workspace",
            "ja": "作業スペース"
          }
        ],
        "B2": [
          {
            "en": "organized study area",
            "ja": "整理された学習スペース"
          },
          {
            "en": "sunlit workstation",
            "ja": "日差しの差し込む作業机"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a study desk waiting for the day's work",
          "ja": "今日の学習を待つ机"
        },
        {
          "en": "a sunlit corner prepared for learning",
          "ja": "学習のために整えられた日当たりの良い一角"
        },
        {
          "en": "a quiet workspace beside the morning window",
          "ja": "朝の窓辺にある静かな作業場所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "desk, notebook, books, pencil",
          "text_en": "desk, notebook, books, pencil",
          "text_ja": "机、ノート、本、鉛筆"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a desk near the window.",
          "text_en": "There is a desk near the window.",
          "text_ja": "窓の近くに机があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden study desk with an open notebook",
          "text_en": "a wooden study desk with an open notebook",
          "text_ja": "開いたノートがある木製の勉強机"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sunlit desk suggests that the girl may soon begin studying or preparing for school.",
          "text_en": "The sunlit desk suggests that the girl may soon begin studying or preparing for school.",
          "text_ja": "日差しの差し込む机から、女の子がもうすぐ勉強や学校の準備を始めるかもしれないと想像できます。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "backpack",
      "label_ja": "リュックサック",
      "category": "object",
      "importance": "secondary",
      "description": "A pink school backpack rests on the floor near the desk and chair.",
      "bounding_box_conceptual": [
        77,
        75,
        23,
        20
      ],
      "color": [
        "pink",
        "gray",
        "black"
      ],
      "attributes": [
        "pink",
        "large",
        "school-related",
        "zipped",
        "ready"
      ],
      "action": [
        "resting on the floor",
        "leaning near the desk"
      ],
      "synonyms_and_related_words": [
        "backpack",
        "school bag",
        "rucksack",
        "bag",
        "student bag"
      ],
      "accepted_words": [
        "backpack",
        "school bag",
        "rucksack",
        "bag",
        "student bag",
        "school backpack"
      ],
      "common_typos": [
        "backpak",
        "back pack",
        "school bad",
        "rucksak",
        "student bage"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bag",
            "ja": "かばん"
          },
          {
            "en": "backpack",
            "ja": "リュックサック"
          }
        ],
        "A2": [
          {
            "en": "school bag",
            "ja": "学校用かばん"
          },
          {
            "en": "student bag",
            "ja": "生徒のかばん"
          }
        ],
        "B1": [
          {
            "en": "school backpack",
            "ja": "学校用リュック"
          },
          {
            "en": "rucksack",
            "ja": "リュックサック"
          }
        ],
        "B2": [
          {
            "en": "packed school bag",
            "ja": "準備された学校用かばん"
          },
          {
            "en": "student's belongings",
            "ja": "生徒の持ち物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a school bag waiting for the day ahead",
          "ja": "これから始まる一日を待つ学校用かばん"
        },
        {
          "en": "a pink backpack ready for another journey",
          "ja": "次の一日へ出発する準備ができたピンクのリュック"
        },
        {
          "en": "a quiet sign that school is approaching",
          "ja": "学校へ行く時間が近いことを示す静かな印"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bag, backpack, school, pink",
          "text_en": "bag, backpack, school, pink",
          "text_ja": "かばん、リュック、学校、ピンク"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A pink backpack is on the floor.",
          "text_en": "A pink backpack is on the floor.",
          "text_ja": "ピンクのリュックが床の上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a school backpack beside the desk",
          "text_en": "a school backpack beside the desk",
          "text_ja": "机のそばにある学校用リュック"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The backpack near the desk hints that the girl may be preparing for school.",
          "text_en": "The backpack near the desk hints that the girl may be preparing for school.",
          "text_ja": "机の近くにあるリュックから、女の子が学校へ行く準備をしているのかもしれないと分かります。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "plants",
      "label_ja": "植物",
      "category": "nature",
      "importance": "secondary",
      "description": "Several green plants decorate the shelf, nightstand, and desk, adding freshness to the bedroom.",
      "bounding_box_conceptual": [
        6,
        0,
        60,
        100
      ],
      "color": [
        "green",
        "brown",
        "white"
      ],
      "attributes": [
        "green",
        "fresh",
        "small",
        "decorative",
        "natural"
      ],
      "action": [
        "decorating the room",
        "growing near the light",
        "adding greenery"
      ],
      "synonyms_and_related_words": [
        "plant",
        "plants",
        "potted plant",
        "greenery",
        "houseplant",
        "leaves",
        "indoor plant"
      ],
      "accepted_words": [
        "plant",
        "plants",
        "potted plant",
        "greenery",
        "houseplant",
        "leaves",
        "indoor plant",
        "small plant"
      ],
      "common_typos": [
        "palnt",
        "plantts",
        "potted palnt",
        "greenary",
        "house palnt",
        "leafs"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "plant",
            "ja": "植物"
          },
          {
            "en": "leaves",
            "ja": "葉"
          }
        ],
        "A2": [
          {
            "en": "potted plant",
            "ja": "鉢植え"
          },
          {
            "en": "green plants",
            "ja": "緑の植物"
          }
        ],
        "B1": [
          {
            "en": "houseplant",
            "ja": "観葉植物"
          },
          {
            "en": "greenery",
            "ja": "緑の植物全体"
          }
        ],
        "B2": [
          {
            "en": "natural decoration",
            "ja": "自然を使った装飾"
          },
          {
            "en": "fresh botanical detail",
            "ja": "新鮮な植物の細部"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "green leaves reaching toward the morning light",
          "ja": "朝の光へ向かって伸びる緑の葉"
        },
        {
          "en": "small pieces of nature waking with the room",
          "ja": "部屋とともに目覚める小さな自然"
        },
        {
          "en": "fresh greenery softening the bedroom",
          "ja": "寝室をやわらかい印象にする緑"
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
          "text": "There are several plants in the room.",
          "text_en": "There are several plants in the room.",
          "text_ja": "部屋にはいくつかの植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "green plants decorating the bedroom",
          "text_en": "green plants decorating the bedroom",
          "text_ja": "寝室を飾る緑の植物"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The plants add a fresh and natural quality to the warm interior.",
          "text_en": "The plants add a fresh and natural quality to the warm interior.",
          "text_ja": "植物が暖かな室内に新鮮で自然な雰囲気を加えています。"
        }
      ]
    }
  ],
  "text_elements": [],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Opening the curtains",
      "description_ja": "カーテンを開けている",
      "involved_elements": [
        "element_001",
        "element_002"
      ],
      "synonyms": [
        "open the curtains",
        "opening the curtains",
        "pull the curtains apart",
        "draw back the curtains"
      ],
      "accepted_words": [
        "open",
        "opens",
        "opening",
        "open the curtains",
        "opening the curtains",
        "pull apart",
        "pulling apart",
        "draw back",
        "drawing back"
      ],
      "common_typos": [
        "opning",
        "openning",
        "curtans",
        "pulling appart",
        "draw backk"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "open",
            "ja": "開ける"
          },
          {
            "en": "opening",
            "ja": "開けている"
          }
        ],
        "A2": [
          {
            "en": "open the curtains",
            "ja": "カーテンを開ける"
          },
          {
            "en": "pull the curtains",
            "ja": "カーテンを引く"
          }
        ],
        "B1": [
          {
            "en": "draw back the curtains",
            "ja": "カーテンを引いて開ける"
          },
          {
            "en": "pull the curtains apart",
            "ja": "カーテンを左右に引き分ける"
          }
        ],
        "B2": [
          {
            "en": "part the curtains",
            "ja": "カーテンを開く"
          },
          {
            "en": "let the morning light in",
            "ja": "朝の光を室内へ入れる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "opening the room to the morning",
          "ja": "部屋を朝へと開いている"
        },
        {
          "en": "releasing the sunlight into the bedroom",
          "ja": "日差しを寝室へ解き放っている"
        },
        {
          "en": "drawing back the curtains on a new day",
          "ja": "新しい一日の幕を開けるようにカーテンを開いている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl is opening the curtains.",
          "text_en": "The girl is opening the curtains.",
          "text_ja": "女の子はカーテンを開けています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "pull the curtains open to let in sunlight",
          "text_en": "pull the curtains open to let in sunlight",
          "text_ja": "日差しを入れるためにカーテンを引いて開ける"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Drawing back the curtains, the girl fills the room with warm morning light.",
          "text_en": "Drawing back the curtains, the girl fills the room with warm morning light.",
          "text_ja": "カーテンを引いて開けながら、女の子は部屋を暖かな朝の光で満たしています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Standing by the window",
      "description_ja": "窓のそばに立っている",
      "involved_elements": [
        "element_001",
        "element_003"
      ],
      "synonyms": [
        "stand by the window",
        "standing near the window",
        "stand beside the window",
        "be positioned at the window"
      ],
      "accepted_words": [
        "stand",
        "stands",
        "standing",
        "stand by the window",
        "stand near the window",
        "stand beside the window",
        "be positioned"
      ],
      "common_typos": [
        "standng",
        "stannding",
        "near the windo",
        "beside the winow"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "stand",
            "ja": "立つ"
          },
          {
            "en": "window",
            "ja": "窓"
          }
        ],
        "A2": [
          {
            "en": "stand by the window",
            "ja": "窓のそばに立つ"
          },
          {
            "en": "stand near the window",
            "ja": "窓の近くに立つ"
          }
        ],
        "B1": [
          {
            "en": "stand beside the window",
            "ja": "窓のすぐそばに立つ"
          },
          {
            "en": "face the window",
            "ja": "窓の方を向く"
          }
        ],
        "B2": [
          {
            "en": "be positioned in front of the window",
            "ja": "窓の前に位置する"
          },
          {
            "en": "stand within the sunlight",
            "ja": "日差しの中に立つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "standing where the night meets the morning",
          "ja": "夜と朝が出会う場所に立っている"
        },
        {
          "en": "pausing in front of the bright window",
          "ja": "明るい窓の前で立ち止まっている"
        },
        {
          "en": "standing in the first light of the day",
          "ja": "一日の最初の光の中に立っている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is standing by the window.",
          "text_en": "She is standing by the window.",
          "text_ja": "彼女は窓のそばに立っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "stand barefoot in front of the window",
          "text_en": "stand barefoot in front of the window",
          "text_ja": "裸足で窓の前に立つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Standing in front of the bright window, she appears calm and ready to begin the day.",
          "text_en": "Standing in front of the bright window, she appears calm and ready to begin the day.",
          "text_ja": "明るい窓の前に立ち、彼女は落ち着いて一日を始める準備ができているように見えます。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Waking up and starting the day",
      "description_ja": "目を覚まして一日を始めている",
      "involved_elements": [
        "element_001",
        "element_006",
        "element_007"
      ],
      "synonyms": [
        "wake up",
        "waking up",
        "get out of bed",
        "start the day",
        "begin the morning"
      ],
      "accepted_words": [
        "wake",
        "wakes",
        "waking",
        "wake up",
        "waking up",
        "get out of bed",
        "getting out of bed",
        "start the day",
        "begin the morning"
      ],
      "common_typos": [
        "wakeup",
        "wakeing up",
        "wakingg",
        "geting out of bed",
        "startting the day"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "wake up",
            "ja": "目を覚ます"
          },
          {
            "en": "morning",
            "ja": "朝"
          }
        ],
        "A2": [
          {
            "en": "get out of bed",
            "ja": "ベッドから出る"
          },
          {
            "en": "start the day",
            "ja": "一日を始める"
          }
        ],
        "B1": [
          {
            "en": "begin her morning routine",
            "ja": "朝の習慣を始める"
          },
          {
            "en": "greet the morning",
            "ja": "朝を迎える"
          }
        ],
        "B2": [
          {
            "en": "transition from sleep to wakefulness",
            "ja": "眠りから目覚めへ移る"
          },
          {
            "en": "welcome the beginning of a new day",
            "ja": "新しい一日の始まりを迎える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "leaving the night behind",
          "ja": "夜を後にしている"
        },
        {
          "en": "stepping gently into a new day",
          "ja": "新しい一日へそっと踏み出している"
        },
        {
          "en": "waking with the sunlight",
          "ja": "日差しとともに目覚めている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl has just woken up.",
          "text_en": "The girl has just woken up.",
          "text_ja": "女の子はちょうど目を覚ましたところです。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "begin her morning routine",
          "text_en": "begin her morning routine",
          "text_ja": "朝の習慣を始める"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Having just woken up, the girl welcomes the sunlight and begins her morning routine.",
          "text_en": "Having just woken up, the girl welcomes the sunlight and begins her morning routine.",
          "text_ja": "目を覚ましたばかりの女の子は、日差しを迎え、朝の習慣を始めています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Sunlight streaming into the bedroom",
      "description_ja": "日差しが寝室に差し込んでいる",
      "involved_elements": [
        "element_003",
        "element_005",
        "element_004"
      ],
      "synonyms": [
        "sunlight enters the room",
        "light streams through the window",
        "sunshine fills the bedroom",
        "golden light pours in"
      ],
      "accepted_words": [
        "sunlight enters",
        "light enters",
        "streaming",
        "streams",
        "fills the room",
        "pours in",
        "shines through",
        "illuminates"
      ],
      "common_typos": [
        "sunligt enters",
        "streeming",
        "fillls the room",
        "pors in",
        "shines trough"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "light comes in",
            "ja": "光が入る"
          },
          {
            "en": "sunlight shines",
            "ja": "日差しが照る"
          }
        ],
        "A2": [
          {
            "en": "sunlight enters the room",
            "ja": "日差しが部屋に入る"
          },
          {
            "en": "light comes through the window",
            "ja": "光が窓から入る"
          }
        ],
        "B1": [
          {
            "en": "sunlight streams through the window",
            "ja": "日差しが窓から流れ込む"
          },
          {
            "en": "golden light fills the bedroom",
            "ja": "金色の光が寝室を満たす"
          }
        ],
        "B2": [
          {
            "en": "radiant sunlight floods the room",
            "ja": "輝く日差しが部屋いっぱいに広がる"
          },
          {
            "en": "warm illumination transforms the space",
            "ja": "暖かな光が空間の印象を変える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight spilling across the wooden floor",
          "ja": "木の床にこぼれる日差し"
        },
        {
          "en": "golden light waking every corner of the room",
          "ja": "部屋の隅々を目覚めさせる金色の光"
        },
        {
          "en": "morning brightness washing away the shadows",
          "ja": "影を洗い流す朝の明るさ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Sunlight is coming into the room.",
          "text_en": "Sunlight is coming into the room.",
          "text_ja": "日差しが部屋に入っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "golden sunlight streaming through the window",
          "text_en": "golden sunlight streaming through the window",
          "text_ja": "窓から流れ込む金色の日差し"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Flooding the bedroom with golden light, the sunrise creates a fresh and hopeful mood.",
          "text_en": "Flooding the bedroom with golden light, the sunrise creates a fresh and hopeful mood.",
          "text_ja": "寝室を金色の光で満たし、朝日がさわやかで希望に満ちた雰囲気を作っています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "The alarm clock ringing",
      "description_ja": "目覚まし時計が鳴っている",
      "involved_elements": [
        "element_007",
        "element_008"
      ],
      "synonyms": [
        "alarm clock rings",
        "clock is ringing",
        "alarm goes off",
        "morning alarm sounds"
      ],
      "accepted_words": [
        "ring",
        "rings",
        "ringing",
        "goes off",
        "going off",
        "sounds",
        "is sounding",
        "alarm rings"
      ],
      "common_typos": [
        "ringging",
        "rining",
        "goes of",
        "alaram sounds",
        "is soundng"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "ring",
            "ja": "鳴る"
          },
          {
            "en": "clock",
            "ja": "時計"
          }
        ],
        "A2": [
          {
            "en": "alarm goes off",
            "ja": "目覚ましが鳴る"
          },
          {
            "en": "clock is ringing",
            "ja": "時計が鳴っている"
          }
        ],
        "B1": [
          {
            "en": "morning alarm sounds",
            "ja": "朝の目覚ましが鳴る"
          },
          {
            "en": "wake-up call",
            "ja": "起床を促す合図"
          }
        ],
        "B2": [
          {
            "en": "break the morning silence",
            "ja": "朝の静けさを破る"
          },
          {
            "en": "signal the start of the day",
            "ja": "一日の始まりを知らせる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the alarm calling her out of sleep",
          "ja": "彼女を眠りから呼び出す目覚まし"
        },
        {
          "en": "a sharp sound announcing the morning",
          "ja": "朝を告げる鋭い音"
        },
        {
          "en": "the day's first interruption",
          "ja": "一日で最初の中断"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The alarm clock is ringing.",
          "text_en": "The alarm clock is ringing.",
          "text_ja": "目覚まし時計が鳴っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a ringing alarm clock on the nightstand",
          "text_en": "a ringing alarm clock on the nightstand",
          "text_ja": "ベッドサイドテーブルで鳴っている目覚まし時計"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The ringing alarm clock signals that the girl's day is beginning.",
          "text_en": "The ringing alarm clock signals that the girl's day is beginning.",
          "text_ja": "鳴っている目覚まし時計が、女の子の一日が始まることを知らせています。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Objects resting around the bedroom",
      "description_ja": "寝室の中にさまざまな物が置かれている",
      "involved_elements": [
        "element_006",
        "element_008",
        "element_009",
        "element_010",
        "element_011",
        "element_012"
      ],
      "synonyms": [
        "objects are placed around the room",
        "items rest on the desk",
        "belongings are arranged",
        "furniture fills the room"
      ],
      "accepted_words": [
        "resting",
        "placed",
        "arranged",
        "lying",
        "standing",
        "on the floor",
        "on the desk",
        "beside the bed"
      ],
      "common_typos": [
        "restting",
        "plaiced",
        "aranged",
        "lieing",
        "beside the bead"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "on the floor",
            "ja": "床の上に"
          },
          {
            "en": "on the desk",
            "ja": "机の上に"
          }
        ],
        "A2": [
          {
            "en": "objects are placed",
            "ja": "物が置かれている"
          },
          {
            "en": "items are arranged",
            "ja": "物が並べられている"
          }
        ],
        "B1": [
          {
            "en": "personal belongings",
            "ja": "身の回りの持ち物"
          },
          {
            "en": "bedroom furniture",
            "ja": "寝室の家具"
          }
        ],
        "B2": [
          {
            "en": "everyday objects complete the scene",
            "ja": "日用品が場面を完成させる"
          },
          {
            "en": "personal items create a lived-in atmosphere",
            "ja": "私物が生活感のある雰囲気を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small objects telling the story of her morning",
          "ja": "彼女の朝の物語を伝える小さな物"
        },
        {
          "en": "everyday belongings waiting for the day to begin",
          "ja": "一日の始まりを待つ日用品"
        },
        {
          "en": "a room filled with quiet signs of daily life",
          "ja": "日常生活の静かな印で満たされた部屋"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many things in the bedroom.",
          "text_en": "There are many things in the bedroom.",
          "text_ja": "寝室にはたくさんの物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Around the room, there are...",
          "text_en": "Around the room, there are...",
          "text_ja": "部屋の中には……があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Carefully placed objects, from the slippers to the schoolbag, make the bedroom feel personal and realistic.",
          "text_en": "Carefully placed objects, from the slippers to the schoolbag, make the bedroom feel personal and realistic.",
          "text_ja": "スリッパから学校用バッグまで丁寧に置かれた物が、寝室を個人的で現実感のある空間にしています。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "girl",
      "relationship": "by",
      "object": "window",
      "example_beginner": "The girl is by the window.",
      "example_intermediate": "The girl is standing beside the large bedroom window."
    },
    {
      "subject": "curtains",
      "relationship": "in front of",
      "object": "window",
      "example_beginner": "The curtains are in front of the window.",
      "example_intermediate": "Light cream curtains hang in front of the bright window."
    },
    {
      "subject": "bed",
      "relationship": "to the left of",
      "object": "girl",
      "example_beginner": "The bed is to the left of the girl.",
      "example_intermediate": "An unmade bed stands to the left of the girl."
    },
    {
      "subject": "alarm clock",
      "relationship": "on",
      "object": "nightstand",
      "example_beginner": "The alarm clock is on the table.",
      "example_intermediate": "A black alarm clock sits on the wooden nightstand."
    },
    {
      "subject": "slippers",
      "relationship": "beside",
      "object": "bed",
      "example_beginner": "The slippers are beside the bed.",
      "example_intermediate": "A pair of soft slippers lies beside the bed."
    },
    {
      "subject": "desk",
      "relationship": "to the right of",
      "object": "girl",
      "example_beginner": "The desk is to the right of the girl.",
      "example_intermediate": "A wooden study desk stands to the right of the girl."
    },
    {
      "subject": "backpack",
      "relationship": "near",
      "object": "desk",
      "example_beginner": "The backpack is near the desk.",
      "example_intermediate": "A pink school backpack rests on the floor near the desk."
    },
    {
      "subject": "sunlight",
      "relationship": "through",
      "object": "window",
      "example_beginner": "Sunlight comes through the window.",
      "example_intermediate": "Warm morning sunlight streams through the large window."
    }
  ],
  "adjective_library": {
    "person": [
      "young",
      "sleepy",
      "fresh",
      "peaceful",
      "cheerful",
      "relaxed"
    ],
    "bedroom": [
      "cozy",
      "bright",
      "warm",
      "comfortable",
      "sunlit",
      "tidy",
      "personal"
    ],
    "sunlight": [
      "golden",
      "warm",
      "soft",
      "natural",
      "bright",
      "radiant"
    ],
    "bed": [
      "soft",
      "unmade",
      "comfortable",
      "pink",
      "rumpled"
    ],
    "curtains": [
      "light",
      "cream-colored",
      "soft",
      "flowing",
      "thin"
    ],
    "morning": [
      "fresh",
      "quiet",
      "hopeful",
      "peaceful",
      "sunny"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中に、〜で",
      "example": "The girl is in her bedroom."
    },
    {
      "preposition": "by",
      "meaning_ja": "〜のそばに",
      "example": "She is standing by the window."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The curtains are in front of the window."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The alarm clock is on the nightstand."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のすぐそばに",
      "example": "The slippers are beside the bed."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The bed is to the left of the girl."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The desk is to the right of the girl."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The backpack is near the desk."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Sunlight is coming through the window."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Subject + be + present participle (-ing)",
      "label_ja": "現在進行形",
      "level": "beginner",
      "purpose_ja": "画像の中で今行われている動作を説明する。",
      "examples": [
        "The girl is opening the curtains.",
        "She is standing by the window.",
        "The alarm clock is ringing."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で今している動作を表します。",
        "Level 3では girl + is opening + curtains が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "部屋の中に何があるかを説明する。",
      "examples": [
        "There is a bed beside the girl.",
        "There is an alarm clock on the table.",
        "There are several plants in the room."
      ],
      "hints": [
        "単数なら There is、複数なら There are を使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物・部屋・光の特徴を説明する。",
      "examples": [
        "The girl is sleepy.",
        "The room is bright.",
        "The sunlight is warm."
      ],
      "hints": [
        "sleepy, bright, warmなどの形容詞をbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った場所の表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The girl is by the window.",
        "The clock is on the nightstand.",
        "The backpack is near the desk."
      ],
      "hints": [
        "by, on, beside, near, throughなどを使うと場面を詳しく説明できます。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を加える。",
      "examples": [
        "The girl who is opening the curtains looks peaceful.",
        "The window, which lets in sunlight, is very large.",
        "The backpack that is near the desk is pink."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "物が置かれている・照らされている状態を表す。",
      "examples": [
        "The bed is covered with pink blankets.",
        "The room is filled with sunlight.",
        "Several books are placed on the desk."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で、〜されている状態を説明できます。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "Subject, opening / standing / wearing..., + verb",
      "label_ja": "分詞による追加説明",
      "level": "intermediate",
      "purpose_ja": "主語に複数の特徴や動作を自然に加える。",
      "examples": [
        "The girl, wearing pink pajamas, is opening the curtains.",
        "The sunlight, streaming through the window, brightens the room.",
        "The alarm clock, sitting on the table, is ringing."
      ],
      "hints": [
        "主語の後ろに-ing表現を挟むと、より詳しい描写になります。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の動作や状況を一文でつなぐ。",
      "examples": [
        "Opening the curtains, the girl welcomes the morning sunlight.",
        "Standing by the window, she looks peaceful and refreshed.",
        "Streaming through the window, sunlight fills the bedroom."
      ],
      "hints": [
        "文頭を動詞ingで始めると、高度で自然な画像描写になります。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "受け身の状態を文頭で示す。",
      "examples": [
        "Dressed in pink pajamas, the girl opens the curtains.",
        "Bathed in morning light, the room looks warm and peaceful.",
        "Surrounded by familiar belongings, she begins her day."
      ],
      "hints": [
        "Dressed, Bathed, Surroundedなどから始めると、背景と人物を一文でつなげられます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There is a ______.",
        "example": "There is a girl."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "She is in / by ______.",
        "example": "She is in her bedroom."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "She is ______ing.",
        "example": "She is opening the curtains."
      },
      {
        "step": 4,
        "question_ja": "何を開けていますか？",
        "template": "She is opening ______.",
        "example": "She is opening the curtains."
      },
      {
        "step": 5,
        "question_ja": "ほかに何がありますか？",
        "template": "There is / are ______ on / beside / near ______.",
        "example": "There is an alarm clock on the table."
      }
    ],
    "intermediate": [
      {
        "template": "A teenage girl is ______ing by ______.",
        "example": "A teenage girl is opening the curtains by the window."
      },
      {
        "template": "On / beside the ______, there is / are ______.",
        "example": "Beside the bed, there is a small nightstand with an alarm clock."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a desk, books, plants, and a school backpack."
      },
      {
        "template": "The ______ makes the room feel ______.",
        "example": "The warm sunlight makes the room feel bright and peaceful."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Opening the curtains, the girl welcomes the first sunlight of the day."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Dressed in pink pajamas, she stands barefoot beside the window."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "The girl smiles softly as golden sunlight streams into the bedroom."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The girl, who has just woken up, is opening curtains that glow in the morning light."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A girl is in her bedroom.",
      "She is opening the curtains.",
      "Sunlight is coming through the window.",
      "There is a bed beside her."
    ],
    "intermediate": [
      "A teenage girl in pink pajamas is standing by the window and opening the curtains.",
      "Warm morning sunlight is filling the cozy bedroom.",
      "An unmade bed, an alarm clock, slippers, and a desk can be seen around her.",
      "The girl looks peaceful and ready to start her day."
    ],
    "advanced": [
      "Standing barefoot beside the window, a teenage girl gently pulls open the curtains and welcomes the golden morning light.",
      "Dressed in pink pajamas, she appears calm and refreshed as sunlight spreads across the wooden floor.",
      "Surrounded by familiar objects such as an unmade bed, a ringing alarm clock, and a school backpack, she seems to be beginning an ordinary but hopeful new day."
    ]
  },
  "full_description_support": {
    "beginner_model": "A girl is in her bedroom. She is standing by the window and opening the curtains. Sunlight is coming into the room. There is a bed, a clock, and a desk.",
    "intermediate_model": "A teenage girl wearing pink pajamas is standing by the window in her bedroom. She is opening the curtains and letting warm morning sunlight into the room. An unmade bed, a ringing alarm clock, soft slippers, a study desk, and a school backpack can be seen around her. The room looks bright, cozy, and peaceful.",
    "advanced_model": "Standing barefoot beside a large bedroom window, a teenage girl gently draws back the pale curtains and welcomes the first golden light of the day. Dressed in soft pink pajamas, she appears sleepy yet peaceful as sunlight streams across the wooden floor and brightens the room. An unmade bed, a ringing alarm clock, a pair of slippers, a neatly arranged study desk, several green plants, and a school backpack create a warm, realistic picture of an ordinary morning routine."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A girl is in her bedroom. She is opening the curtains.",
        "ja": "女の子が寝室にいます。彼女はカーテンを開けています。",
        "focus": "girl、bedroom、opening、curtainsを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "Sunlight is coming through the window. The room is bright.",
        "ja": "日差しが窓から差し込んでいます。部屋は明るいです。",
        "focus": "現在進行形とbe動詞＋形容詞を使って、光と部屋を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A teenage girl is standing by the window and opening the curtains in her bedroom.",
        "ja": "10代の女の子が寝室の窓辺に立ち、カーテンを開けています。",
        "focus": "andを使ってstandingとopeningの2つの動作をつなぐ。"
      },
      {
        "en": "The girl looks happy because warm sunlight is filling the room.",
        "ja": "暖かな日差しが部屋を満たしているので、女の子はうれしそうに見えます。",
        "focus": "look＋形容詞とbecauseを使って、様子と理由をつなぐ。"
      }
    ],
    "B1": [
      {
        "en": "A sleepy teenage girl in pink pajamas is pulling open the curtains as morning sunlight enters her cozy bedroom.",
        "ja": "ピンクのパジャマを着た眠そうな10代の女の子が、朝の日差しが居心地の良い寝室へ入る中、カーテンを引いて開けています。",
        "focus": "asを使って人物の動作と背景の変化を同時に描写する。"
      },
      {
        "en": "An alarm clock is ringing beside the unmade bed while the girl begins her morning routine.",
        "ja": "女の子が朝の習慣を始める間、整えられていないベッドのそばで目覚まし時計が鳴っています。",
        "focus": "whileを使い、主動作と周囲の出来事をつなぐ。"
      }
    ],
    "B2": [
      {
        "en": "Dressed in soft pink pajamas, the girl gently draws back the curtains, allowing golden sunlight to flood the peaceful bedroom.",
        "ja": "柔らかなピンクのパジャマを着た女の子が、カーテンを優しく引いて開け、金色の日差しを穏やかな寝室いっぱいに招き入れています。",
        "focus": "Dressedで始まる過去分詞句とallowingを使い、服装・動作・結果を統合する。"
      },
      {
        "en": "Bathed in warm morning light, the room seems to awaken alongside the girl, whose quiet smile suggests hope for the day ahead.",
        "ja": "暖かな朝の光に包まれた部屋は女の子とともに目覚めていくように見え、その静かな笑顔はこれから始まる一日への希望を感じさせます。",
        "focus": "Bathed in、seems to、whoseを使い、抽象的な雰囲気と人物の内面まで描写する。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene003Data = scene003Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene003Data;
}
