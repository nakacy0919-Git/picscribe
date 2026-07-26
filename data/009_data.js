"use strict";

const scene009Data = {
  "id": "scene_009",
  "image_id": "009.webp",
  "overall_description_ja": "月と街の明かりが見える静かな夜の寝室で、ピンク色のパジャマを着た若い女性がベッドの上に座り、両手で開いた本を持って読書をしている。ベッドには花柄の布団、枕、紫色の毛布があり、床にはふわふわしたスリッパと丸いラグが置かれている。右側には木製の机と椅子があり、机の上にはマグカップ、デスクランプ、ペン立て、本が並ぶ。ナイトテーブルにはランプ、目覚まし時計、植物が置かれ、壁のポスター、写真、棚、植物、ストリングライトが温かく落ち着いた夜の雰囲気を作っている。",
  "overall_description_en": "A young woman in pink pajamas is sitting on her bed in a quiet bedroom at night and reading an open book with both hands. The bed is covered with floral bedding, soft pillows, and a purple blanket. Fluffy slippers and a round rug lie on the floor. To the right, a wooden desk and chair hold a mug, a desk lamp, pencil holders, and books. A bedside table supports a warm lamp, an alarm clock, and a small plant. Through the window, a starry sky, city lights, and a crescent moon can be seen, while posters, photographs, shelves, greenery, and string lights create a peaceful bedtime atmosphere.",
  "overall_mood": [
    "cozy",
    "warm",
    "peaceful",
    "quiet",
    "sleepy",
    "relaxed",
    "nighttime",
    "softly lit",
    "comfortable",
    "serene",
    "dreamy",
    "restful",
    "calm",
    "personal",
    "inviting"
  ],
  "mission_guides": {
    "gist": "若い女性（woman / girl）が、ベッドの上で何をしているか（reading）を書こう",
    "setting": "場所（bedroom）、ベッド（bed）、時間（at night）、窓（window）に注目しよう",
    "details": "本、パジャマ、枕、毛布、スリッパ、机、ランプ、マグカップなどを加えよう",
    "complete": "三日月、街の明かり、励ましの言葉、寝る前の落ち着いた雰囲気まで描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young woman in pink pajamas",
        "ja": "ピンクのパジャマを着た若い女性"
      },
      {
        "en": "reading an open book on the bed",
        "ja": "ベッドの上で開いた本を読んでいる"
      },
      {
        "en": "holding the book with both hands",
        "ja": "両手で本を持っている"
      },
      {
        "en": "relaxing before going to sleep",
        "ja": "眠る前にくつろいでいる"
      }
    ],
    "setting": [
      {
        "en": "inside a cozy bedroom at night",
        "ja": "夜の居心地のよい寝室の中で"
      },
      {
        "en": "a wooden desk and chair on the right",
        "ja": "右側にある木製の机と椅子"
      },
      {
        "en": "a warm bedside lamp next to the bed",
        "ja": "ベッドのそばにある暖かなランプ"
      },
      {
        "en": "a crescent moon and city lights outside the window",
        "ja": "窓の外に見える三日月と街の明かり"
      }
    ],
    "mood": [
      {
        "en": "soft golden light",
        "ja": "柔らかな金色の光"
      },
      {
        "en": "a quiet bedtime atmosphere",
        "ja": "静かな就寝前の雰囲気"
      },
      {
        "en": "a peaceful and dreamy room",
        "ja": "穏やかで夢のような部屋"
      },
      {
        "en": "a comfortable evening routine",
        "ja": "快適な夜の習慣"
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
        "woman",
        "young woman",
        "girl",
        "young lady",
        "reader",
        "student",
        "she",
        "book lover"
      ],
      "hint_msg": "まずは「女性（woman）」や「女の子（girl）」など、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は、その女性が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "reading",
        "holding",
        "sitting",
        "relaxing",
        "looking",
        "enjoying",
        "resting",
        "preparing"
      ],
      "hint_msg": "「本を読んでいる（is reading）」や「ベッドに座っている（is sitting）」と書きましょう。",
      "success_msg": "Great! 次に、何を読んでいるか、どこに座っているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "book",
        "bed",
        "bedroom",
        "room",
        "night",
        "pajamas",
        "lamp",
        "window",
        "home",
        "story"
      ],
      "hint_msg": "「本（book）」「ベッド（bed）」「寝室（bedroom）」「夜（at night）」などを加えましょう。",
      "success_msg": "Excellent! 次は月、街の明かり、机、照明、寝る前の雰囲気を加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "reading before bed",
    "relaxing in a bedroom at night",
    "a peaceful bedtime routine",
    "enjoying a book in pajamas",
    "a cozy personal room",
    "warm indoor lighting",
    "a moonlit city view"
  ],
  "scene_structure": {
    "foreground": [
      "bed",
      "young woman",
      "open book",
      "purple blanket",
      "fluffy slippers",
      "round rug"
    ],
    "midground": [
      "bedside table",
      "bedside lamp",
      "alarm clock",
      "small plant",
      "wooden desk",
      "chair",
      "desk lamp",
      "mug",
      "pencil holders",
      "books"
    ],
    "background": [
      "large window",
      "crescent moon",
      "starry sky",
      "city lights",
      "white curtains",
      "wall photos",
      "good night poster",
      "wall shelf",
      "books",
      "trailing plant",
      "teddy bear",
      "string lights",
      "to-do list"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "young woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with dark hair tied in a loose bun is sitting cross-legged on the bed. She is wearing pink plaid pajamas and fluffy white socks.",
      "bounding_box_conceptual": [
        20,
        18,
        65,
        48
      ],
      "color": [
        "pink",
        "white",
        "brown"
      ],
      "attributes": [
        "young",
        "relaxed",
        "calm",
        "comfortable",
        "focused",
        "sleepy"
      ],
      "action": [
        "sitting",
        "reading",
        "holding a book",
        "relaxing"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "girl",
        "young lady",
        "reader",
        "student",
        "book lover",
        "she"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "girl",
        "young lady",
        "reader",
        "student",
        "book lover",
        "she"
      ],
      "common_typos": [
        "womon",
        "young women",
        "gril",
        "ladie",
        "readar",
        "studant",
        "book luver"
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
            "en": "reader",
            "ja": "読者"
          }
        ],
        "B2": [
          {
            "en": "a relaxed figure absorbed in a bedtime story",
            "ja": "就寝前の物語に夢中になるくつろいだ人物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet reader ending the day with a story",
          "ja": "物語とともに一日を終える静かな読者"
        },
        {
          "en": "a peaceful figure wrapped in pink and golden light",
          "ja": "ピンク色と金色の光に包まれた穏やかな人物"
        },
        {
          "en": "a book lover enjoying one final chapter before sleep",
          "ja": "眠る前に最後の一章を楽しむ本好きの人"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, girl, reader, pink pajamas",
          "text_en": "woman, girl, reader, pink pajamas",
          "text_ja": "女性、女の子、読者、ピンクのパジャマ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A woman is reading on the bed.",
          "text_en": "A woman is reading on the bed.",
          "text_ja": "女性がベッドの上で読書をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young woman wearing pink plaid pajamas",
          "text_en": "a young woman wearing pink plaid pajamas",
          "text_ja": "ピンクのチェック柄パジャマを着た若い女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The young woman, dressed in comfortable pajamas, is enjoying a peaceful reading routine before sleep.",
          "text_en": "The young woman, dressed in comfortable pajamas, is enjoying a peaceful reading routine before sleep.",
          "text_ja": "楽なパジャマを着た若い女性は、眠る前の穏やかな読書習慣を楽しんでいます。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "open book",
      "label_ja": "開いた本",
      "category": "object",
      "importance": "primary",
      "description": "A dark blue book is open in the woman's hands. The cover reads 'A Little Book of Happiness'.",
      "bounding_box_conceptual": [
        39,
        28,
        20,
        21
      ],
      "color": [
        "dark blue",
        "gold",
        "cream"
      ],
      "attributes": [
        "open",
        "hard-covered",
        "small",
        "printed"
      ],
      "action": [
        "being held",
        "being read",
        "resting near her lap"
      ],
      "synonyms_and_related_words": [
        "book",
        "open book",
        "novel",
        "story book",
        "hardcover book",
        "reading book",
        "bedtime book"
      ],
      "accepted_words": [
        "book",
        "open book",
        "novel",
        "story book",
        "hardcover book",
        "reading book",
        "bedtime book"
      ],
      "common_typos": [
        "bok",
        "boook",
        "noval",
        "story bok",
        "hard cover book",
        "bed time book"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "book",
            "ja": "本"
          }
        ],
        "A2": [
          {
            "en": "open book",
            "ja": "開いた本"
          }
        ],
        "B1": [
          {
            "en": "bedtime story",
            "ja": "寝る前に読む物語"
          }
        ],
        "B2": [
          {
            "en": "a volume offering a final moment of happiness before sleep",
            "ja": "眠る前に最後の幸せな時間を与える一冊"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small doorway into happiness",
          "ja": "幸せへ続く小さな入口"
        },
        {
          "en": "a story glowing in the warm bedside light",
          "ja": "暖かな枕元の光の中で輝く物語"
        },
        {
          "en": "the final journey of the day held between two covers",
          "ja": "2枚の表紙の間にある一日最後の旅"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "book, open, read, story",
          "text_en": "book, open, read, story",
          "text_ja": "本、開いている、読む、物語"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is reading a book.",
          "text_en": "She is reading a book.",
          "text_ja": "彼女は本を読んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an open blue book held with both hands",
          "text_en": "an open blue book held with both hands",
          "text_ja": "両手で持たれた開いた青い本"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The book, whose title refers to happiness, reinforces the peaceful tone of the bedtime scene.",
          "text_en": "The book, whose title refers to happiness, reinforces the peaceful tone of the bedtime scene.",
          "text_ja": "幸せに関する題名の本が、就寝前の場面の穏やかな雰囲気を強めています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "bed",
      "label_ja": "ベッド",
      "category": "furniture",
      "importance": "primary",
      "description": "A wooden bed covered with cream floral bedding occupies the left side of the bedroom.",
      "bounding_box_conceptual": [
        35,
        0,
        61,
        66
      ],
      "color": [
        "cream",
        "white",
        "pink",
        "brown"
      ],
      "attributes": [
        "wooden",
        "soft",
        "large",
        "comfortable",
        "neatly arranged"
      ],
      "action": [
        "supporting the woman",
        "holding bedding",
        "providing a place to rest"
      ],
      "synonyms_and_related_words": [
        "bed",
        "single bed",
        "wooden bed",
        "bedframe",
        "sleeping area",
        "made bed",
        "comfortable bed"
      ],
      "accepted_words": [
        "bed",
        "single bed",
        "wooden bed",
        "bedframe",
        "sleeping area",
        "made bed",
        "comfortable bed"
      ],
      "common_typos": [
        "bedd",
        "single bad",
        "wooden bad",
        "bed fram",
        "sleeping are",
        "comfortible bed"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bed",
            "ja": "ベッド"
          }
        ],
        "A2": [
          {
            "en": "single bed",
            "ja": "一人用ベッド"
          }
        ],
        "B1": [
          {
            "en": "wooden bedframe",
            "ja": "木製のベッドフレーム"
          }
        ],
        "B2": [
          {
            "en": "a softly prepared resting place",
            "ja": "柔らかく整えられた休息場所"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a soft island separating her from the busy day",
          "ja": "忙しい一日から彼女を切り離す柔らかな島"
        },
        {
          "en": "the quiet center of the room's nighttime routine",
          "ja": "部屋の夜の習慣の静かな中心"
        },
        {
          "en": "a comfortable place where reading slowly becomes sleep",
          "ja": "読書がゆっくり睡眠へ変わる快適な場所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bed, bedroom, wood, sleep",
          "text_en": "bed, bedroom, wood, sleep",
          "text_ja": "ベッド、寝室、木、眠る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is sitting on the bed.",
          "text_en": "The woman is sitting on the bed.",
          "text_ja": "女性はベッドの上に座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden bed covered with floral bedding",
          "text_en": "a wooden bed covered with floral bedding",
          "text_ja": "花柄の寝具で覆われた木製のベッド"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The spacious bed serves as both a resting place and a comfortable reading area.",
          "text_en": "The spacious bed serves as both a resting place and a comfortable reading area.",
          "text_ja": "広いベッドは、休息場所と快適な読書場所の両方として使われています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "pillows and blanket",
      "label_ja": "枕と毛布",
      "category": "object",
      "importance": "secondary",
      "description": "Soft cream pillows and a purple knitted blanket are arranged across the bed.",
      "bounding_box_conceptual": [
        43,
        0,
        52,
        56
      ],
      "color": [
        "cream",
        "purple",
        "pink"
      ],
      "attributes": [
        "soft",
        "floral",
        "knitted",
        "warm",
        "layered"
      ],
      "action": [
        "resting on the bed",
        "supporting the woman",
        "adding warmth"
      ],
      "synonyms_and_related_words": [
        "pillows",
        "cushions",
        "blanket",
        "throw blanket",
        "knitted blanket",
        "bedding",
        "quilt",
        "comforter"
      ],
      "accepted_words": [
        "pillows",
        "cushions",
        "blanket",
        "throw blanket",
        "knitted blanket",
        "bedding",
        "quilt",
        "comforter"
      ],
      "common_typos": [
        "pilllows",
        "cushons",
        "blankit",
        "throw blankett",
        "knited blanket",
        "comfortar"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pillows and blanket",
            "ja": "枕と毛布"
          }
        ],
        "A2": [
          {
            "en": "soft bedding",
            "ja": "柔らかな寝具"
          }
        ],
        "B1": [
          {
            "en": "knitted throw blanket",
            "ja": "編み目のある掛け毛布"
          }
        ],
        "B2": [
          {
            "en": "layered textiles creating warmth and restfulness",
            "ja": "温かさと休息感を作る重ねられた布"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "soft layers gathering around the reader",
          "ja": "読者の周りに集まる柔らかな層"
        },
        {
          "en": "a purple wave of warmth across the bed",
          "ja": "ベッドに広がる紫色の温かさの波"
        },
        {
          "en": "fabric clouds waiting to carry her into sleep",
          "ja": "彼女を眠りへ運ぶのを待つ布の雲"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pillow, blanket, soft, purple",
          "text_en": "pillow, blanket, soft, purple",
          "text_ja": "枕、毛布、柔らかい、紫"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are pillows and a blanket on the bed.",
          "text_en": "There are pillows and a blanket on the bed.",
          "text_ja": "ベッドの上に枕と毛布があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "soft floral pillows and a purple knitted blanket",
          "text_en": "soft floral pillows and a purple knitted blanket",
          "text_ja": "柔らかな花柄の枕と紫色の編み毛布"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The layered bedding surrounds the reader with visual and physical warmth.",
          "text_en": "The layered bedding surrounds the reader with visual and physical warmth.",
          "text_ja": "重ねられた寝具が、読者を見た目にも実際にも温かく包んでいます。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "slippers and rug",
      "label_ja": "スリッパとラグ",
      "category": "object",
      "importance": "secondary",
      "description": "A pair of fluffy cream slippers lies beside the bed on the wooden floor, and a round lavender rug covers part of the floor.",
      "bounding_box_conceptual": [
        80,
        41,
        20,
        34
      ],
      "color": [
        "cream",
        "lavender",
        "brown"
      ],
      "attributes": [
        "fluffy",
        "soft",
        "round",
        "comfortable",
        "matching"
      ],
      "action": [
        "lying on the floor",
        "resting beside the bed",
        "waiting to be worn"
      ],
      "synonyms_and_related_words": [
        "slippers",
        "house slippers",
        "indoor shoes",
        "rug",
        "round rug",
        "carpet",
        "soft mat"
      ],
      "accepted_words": [
        "slippers",
        "house slippers",
        "indoor shoes",
        "rug",
        "round rug",
        "carpet",
        "soft mat"
      ],
      "common_typos": [
        "sliper",
        "slipperss",
        "house sliper",
        "indor shoes",
        "rugg",
        "carpett"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "slippers",
            "ja": "スリッパ"
          }
        ],
        "A2": [
          {
            "en": "round rug",
            "ja": "丸いラグ"
          }
        ],
        "B1": [
          {
            "en": "fluffy house slippers",
            "ja": "ふわふわした室内用スリッパ"
          }
        ],
        "B2": [
          {
            "en": "comfortable floor furnishings for a private bedroom",
            "ja": "個人の寝室にある快適な床まわりの用品"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "soft shoes waiting for the final steps of the day",
          "ja": "一日の最後の歩みを待つ柔らかな履物"
        },
        {
          "en": "a lavender circle of comfort on the floor",
          "ja": "床にあるラベンダー色の安らぎの輪"
        },
        {
          "en": "the quiet path between reading and sleep",
          "ja": "読書と睡眠をつなぐ静かな道"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "slippers, rug, floor, soft",
          "text_en": "slippers, rug, floor, soft",
          "text_ja": "スリッパ、ラグ、床、柔らかい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The slippers are beside the bed.",
          "text_en": "The slippers are beside the bed.",
          "text_ja": "スリッパはベッドのそばにあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "fluffy slippers resting beside a round rug",
          "text_en": "fluffy slippers resting beside a round rug",
          "text_ja": "丸いラグのそばに置かれたふわふわのスリッパ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The slippers and soft rug strengthen the private and restful character of the bedroom.",
          "text_en": "The slippers and soft rug strengthen the private and restful character of the bedroom.",
          "text_ja": "スリッパと柔らかなラグが、寝室の私的で休息感のある雰囲気を強めています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "bedside table",
      "label_ja": "ナイトテーブル",
      "category": "furniture",
      "importance": "primary",
      "description": "A wooden bedside table beside the bed holds a warm lamp, a black alarm clock, a small plant, and books.",
      "bounding_box_conceptual": [
        40,
        57,
        44,
        17
      ],
      "color": [
        "brown",
        "cream",
        "black",
        "green"
      ],
      "attributes": [
        "wooden",
        "organized",
        "small",
        "warmly lit",
        "practical"
      ],
      "action": [
        "holding a lamp",
        "supporting an alarm clock",
        "storing books"
      ],
      "synonyms_and_related_words": [
        "bedside table",
        "nightstand",
        "bedside cabinet",
        "table lamp",
        "alarm clock",
        "small plant",
        "books"
      ],
      "accepted_words": [
        "bedside table",
        "nightstand",
        "bedside cabinet",
        "table lamp",
        "alarm clock",
        "small plant",
        "books"
      ],
      "common_typos": [
        "bed side table",
        "night stand",
        "bedside cabnet",
        "table lamb",
        "alarm clok",
        "small palnt"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bedside table",
            "ja": "ベッド脇のテーブル"
          }
        ],
        "A2": [
          {
            "en": "nightstand",
            "ja": "ナイトテーブル"
          }
        ],
        "B1": [
          {
            "en": "lamp and alarm clock",
            "ja": "ランプと目覚まし時計"
          }
        ],
        "B2": [
          {
            "en": "an organized collection of bedtime essentials",
            "ja": "就寝前に必要な物が整理された一式"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small station marking the edge of sleep",
          "ja": "睡眠の入り口を示す小さな場所"
        },
        {
          "en": "the quiet keeper of light and time beside the bed",
          "ja": "ベッドのそばで光と時間を見守る場所"
        },
        {
          "en": "a wooden bridge between reading and rest",
          "ja": "読書と休息をつなぐ木の橋"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "nightstand, lamp, clock, plant",
          "text_en": "nightstand, lamp, clock, plant",
          "text_ja": "ナイトテーブル、ランプ、時計、植物"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a lamp and a clock on the nightstand.",
          "text_en": "There is a lamp and a clock on the nightstand.",
          "text_ja": "ナイトテーブルにランプと時計があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden bedside table with a lamp and an alarm clock",
          "text_en": "a wooden bedside table with a lamp and an alarm clock",
          "text_ja": "ランプと目覚まし時計がある木製のナイトテーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The bedside table gathers practical and decorative objects needed for a comfortable night.",
          "text_en": "The bedside table gathers practical and decorative objects needed for a comfortable night.",
          "text_ja": "ナイトテーブルには、快適な夜に必要な実用品と装飾品がまとめられています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "desk and chair",
      "label_ja": "机と椅子",
      "category": "furniture",
      "importance": "primary",
      "description": "A wooden study desk and matching chair stand on the right side of the room.",
      "bounding_box_conceptual": [
        55,
        69,
        45,
        31
      ],
      "color": [
        "brown",
        "cream"
      ],
      "attributes": [
        "wooden",
        "organized",
        "large",
        "practical",
        "matching"
      ],
      "action": [
        "supporting study materials",
        "providing a work area"
      ],
      "synonyms_and_related_words": [
        "desk",
        "study desk",
        "wooden desk",
        "writing desk",
        "chair",
        "wooden chair",
        "workspace"
      ],
      "accepted_words": [
        "desk",
        "study desk",
        "wooden desk",
        "writing desk",
        "chair",
        "wooden chair",
        "workspace"
      ],
      "common_typos": [
        "desck",
        "dask",
        "study tabel",
        "wooden tabel",
        "chear",
        "work space"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "desk and chair",
            "ja": "机と椅子"
          }
        ],
        "A2": [
          {
            "en": "study desk",
            "ja": "勉強机"
          }
        ],
        "B1": [
          {
            "en": "workspace",
            "ja": "作業・学習スペース"
          }
        ],
        "B2": [
          {
            "en": "a neatly arranged corner for daytime study",
            "ja": "日中の学習用に整えられた一角"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a silent study corner waiting for tomorrow",
          "ja": "明日を待つ静かな学習の一角"
        },
        {
          "en": "the room's daytime workplace resting at night",
          "ja": "夜に休む部屋の日中の作業場所"
        },
        {
          "en": "a wooden space holding the tools of future tasks",
          "ja": "これからの課題の道具を置く木の空間"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "desk, chair, wood, study",
          "text_en": "desk, chair, wood, study",
          "text_ja": "机、椅子、木、勉強"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a desk and a chair beside the bed.",
          "text_en": "There is a desk and a chair beside the bed.",
          "text_ja": "ベッドのそばに机と椅子があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden study desk with a matching chair",
          "text_en": "a wooden study desk with a matching chair",
          "text_ja": "おそろいの椅子がある木製の勉強机"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Although the desk is not being used, it remains neatly prepared for future study.",
          "text_en": "Although the desk is not being used, it remains neatly prepared for future study.",
          "text_ja": "机は今使われていませんが、次の学習のためにきれいに整えられています。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "desk lamp, mug, and stationery",
      "label_ja": "デスクランプ、マグカップ、文房具",
      "category": "object",
      "importance": "secondary",
      "description": "A white adjustable desk lamp shines over a mug, two pencil holders, books, and stationery on the desk.",
      "bounding_box_conceptual": [
        27,
        72,
        36,
        28
      ],
      "color": [
        "white",
        "cream",
        "brown",
        "golden"
      ],
      "attributes": [
        "organized",
        "bright",
        "practical",
        "decorative"
      ],
      "action": [
        "lighting the desk",
        "holding stationery",
        "resting on the desk"
      ],
      "synonyms_and_related_words": [
        "desk lamp",
        "mug",
        "cup",
        "pencil holder",
        "pen holder",
        "stationery",
        "books",
        "study materials"
      ],
      "accepted_words": [
        "desk lamp",
        "mug",
        "cup",
        "pencil holder",
        "pen holder",
        "stationery",
        "books",
        "study materials"
      ],
      "common_typos": [
        "desk lamb",
        "mugg",
        "pencel holder",
        "stationary",
        "study materals"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lamp and pencils",
            "ja": "ランプと鉛筆"
          }
        ],
        "A2": [
          {
            "en": "desk lamp and mug",
            "ja": "デスクランプとマグカップ"
          }
        ],
        "B1": [
          {
            "en": "organized stationery",
            "ja": "整理された文房具"
          }
        ],
        "B2": [
          {
            "en": "a prepared collection of study tools illuminated by focused light",
            "ja": "集中光に照らされた準備済みの学習道具一式"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pool of study light waiting beside bedtime",
          "ja": "就寝時間のそばで待つ学習の光"
        },
        {
          "en": "tools standing quietly after the day's work",
          "ja": "一日の作業後に静かに並ぶ道具"
        },
        {
          "en": "the desk holding tomorrow's unfinished possibilities",
          "ja": "明日の未完成の可能性を載せる机"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "lamp, mug, pencils, books",
          "text_en": "lamp, mug, pencils, books",
          "text_ja": "ランプ、マグカップ、鉛筆、本"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many study things on the desk.",
          "text_en": "There are many study things on the desk.",
          "text_ja": "机の上にはたくさんの学習用品があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a desk lamp shining over a mug and pencil holders",
          "text_en": "a desk lamp shining over a mug and pencil holders",
          "text_ja": "マグカップとペン立てを照らすデスクランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The organized stationery suggests that the room is used for both study and rest.",
          "text_en": "The organized stationery suggests that the room is used for both study and rest.",
          "text_ja": "整理された文房具から、この部屋が学習と休息の両方に使われていることが分かります。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "window and night city",
      "label_ja": "窓と夜の街",
      "category": "setting",
      "importance": "primary",
      "description": "A large window on the left reveals a starry night sky, dark trees, tall buildings, and many glowing city lights.",
      "bounding_box_conceptual": [
        0,
        0,
        50,
        33
      ],
      "color": [
        "dark blue",
        "black",
        "orange",
        "white"
      ],
      "attributes": [
        "large",
        "clear",
        "starry",
        "urban",
        "nighttime"
      ],
      "action": [
        "showing the city at night",
        "revealing stars",
        "connecting the room to the outside"
      ],
      "synonyms_and_related_words": [
        "window",
        "large window",
        "night view",
        "city lights",
        "night sky",
        "cityscape",
        "buildings",
        "stars"
      ],
      "accepted_words": [
        "window",
        "large window",
        "night view",
        "city lights",
        "night sky",
        "cityscape",
        "buildings",
        "stars"
      ],
      "common_typos": [
        "windo",
        "winow",
        "night veiw",
        "city ligths",
        "city scape",
        "bildings"
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
            "en": "night view",
            "ja": "夜景"
          }
        ],
        "B1": [
          {
            "en": "city lights",
            "ja": "街の明かり"
          }
        ],
        "B2": [
          {
            "en": "an urban nightscape beyond the bedroom window",
            "ja": "寝室の窓の向こうに広がる都会の夜景"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark city sparkling beyond the warm room",
          "ja": "暖かな部屋の向こうで輝く暗い街"
        },
        {
          "en": "the sleeping world glowing outside her private space",
          "ja": "自分だけの空間の外で光る眠る世界"
        },
        {
          "en": "night stretching quietly beyond the glass",
          "ja": "ガラスの向こうに静かに広がる夜"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, city, lights, night",
          "text_en": "window, city, lights, night",
          "text_ja": "窓、街、明かり、夜"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "City lights can be seen through the window.",
          "text_en": "City lights can be seen through the window.",
          "text_ja": "窓から街の明かりが見えます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a dark city filled with scattered lights",
          "text_en": "a dark city filled with scattered lights",
          "text_ja": "点在する光で満たされた暗い街"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Beyond the window, glowing buildings and stars create a quiet contrast with the warm bedroom.",
          "text_en": "Beyond the window, glowing buildings and stars create a quiet contrast with the warm bedroom.",
          "text_ja": "窓の向こうでは、光る建物と星が暖かな寝室と静かな対比を作っています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "wall decorations",
      "label_ja": "壁の装飾",
      "category": "decoration",
      "importance": "secondary",
      "description": "The walls are decorated with small photographs, a framed bedtime message, string lights, and a to-do list.",
      "bounding_box_conceptual": [
        6,
        37,
        37,
        63
      ],
      "color": [
        "brown",
        "cream",
        "pink",
        "golden"
      ],
      "attributes": [
        "personal",
        "decorative",
        "motivational",
        "organized",
        "warm"
      ],
      "action": [
        "displaying messages",
        "holding photographs",
        "decorating the room"
      ],
      "synonyms_and_related_words": [
        "wall decorations",
        "photographs",
        "framed poster",
        "string lights",
        "fairy lights",
        "to-do list",
        "notes"
      ],
      "accepted_words": [
        "wall decorations",
        "photographs",
        "framed poster",
        "string lights",
        "fairy lights",
        "to-do list",
        "notes"
      ],
      "common_typos": [
        "wall decoratons",
        "photografs",
        "framed postor",
        "string ligths",
        "to do list"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "photos and notes",
            "ja": "写真とメモ"
          }
        ],
        "A2": [
          {
            "en": "wall decorations",
            "ja": "壁の装飾"
          }
        ],
        "B1": [
          {
            "en": "motivational display",
            "ja": "励ましの飾り"
          }
        ],
        "B2": [
          {
            "en": "a personalized collection of memories and reminders",
            "ja": "思い出と注意事項を集めた個人的な飾り"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small memories and promises watching over the room",
          "ja": "部屋を見守る小さな思い出と約束"
        },
        {
          "en": "a wall connecting yesterday's photos with tomorrow's plans",
          "ja": "昨日の写真と明日の予定をつなぐ壁"
        },
        {
          "en": "tiny lights framing the personal story of the bedroom",
          "ja": "寝室の個人的な物語を縁取る小さな光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "photo, poster, lights, list",
          "text_en": "photo, poster, lights, list",
          "text_ja": "写真、ポスター、ライト、リスト"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are photos and notes on the wall.",
          "text_en": "There are photos and notes on the wall.",
          "text_ja": "壁には写真とメモがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wall decorated with photographs, messages, and string lights",
          "text_en": "a wall decorated with photographs, messages, and string lights",
          "text_ja": "写真、メッセージ、ストリングライトで飾られた壁"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The personalized wall display connects memories, encouragement, and future goals within one space.",
          "text_en": "The personalized wall display connects memories, encouragement, and future goals within one space.",
          "text_ja": "個人的な壁の飾りが、思い出、励まし、将来の目標を一つの空間でつないでいます。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "wall shelf with books and plants",
      "label_ja": "本と植物のある壁棚",
      "category": "decoration",
      "importance": "secondary",
      "description": "A wooden shelf above the desk holds books, a trailing plant, a framed photograph, a reed diffuser, and a teddy bear.",
      "bounding_box_conceptual": [
        4,
        70,
        26,
        30
      ],
      "color": [
        "brown",
        "green",
        "cream"
      ],
      "attributes": [
        "wooden",
        "organized",
        "decorative",
        "personal",
        "leafy"
      ],
      "action": [
        "holding books",
        "displaying a plant",
        "supporting decorations"
      ],
      "synonyms_and_related_words": [
        "wall shelf",
        "shelf",
        "books",
        "plant",
        "trailing plant",
        "photo frame",
        "reed diffuser",
        "teddy bear"
      ],
      "accepted_words": [
        "wall shelf",
        "shelf",
        "books",
        "plant",
        "trailing plant",
        "photo frame",
        "reed diffuser",
        "teddy bear"
      ],
      "common_typos": [
        "wall shelve",
        "shelff",
        "traling plant",
        "photo fram",
        "reed difuser",
        "teddy bare"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shelf and books",
            "ja": "棚と本"
          }
        ],
        "A2": [
          {
            "en": "wall shelf",
            "ja": "壁棚"
          }
        ],
        "B1": [
          {
            "en": "decorative shelf",
            "ja": "装飾棚"
          }
        ],
        "B2": [
          {
            "en": "a carefully arranged display of books, greenery, and personal objects",
            "ja": "本、緑、個人的な物を丁寧に並べた飾り"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small world of books, leaves, and memories above the desk",
          "ja": "机の上にある本、葉、思い出の小さな世界"
        },
        {
          "en": "green vines softening the edge of the study corner",
          "ja": "学習コーナーの端をやわらげる緑のつる"
        },
        {
          "en": "a shelf carrying the quiet personality of the room",
          "ja": "部屋の静かな個性を載せる棚"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shelf, books, plant, teddy bear",
          "text_en": "shelf, books, plant, teddy bear",
          "text_ja": "棚、本、植物、テディベア"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are books and a plant on the shelf.",
          "text_en": "There are books and a plant on the shelf.",
          "text_ja": "棚には本と植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden shelf decorated with books, greenery, and a teddy bear",
          "text_en": "a wooden shelf decorated with books, greenery, and a teddy bear",
          "text_ja": "本、緑、テディベアで飾られた木製の棚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The shelf adds both practical storage and personal decoration to the study area.",
          "text_en": "The shelf adds both practical storage and personal decoration to the study area.",
          "text_ja": "棚が学習場所に実用的な収納と個人的な装飾の両方を加えています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "cover of the book held by the woman",
      "content": "A Little Book of Happiness",
      "description_ja": "女性が読んでいる本の題名。幸福をテーマにした小さな本であることを示している。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "little, book, happiness, title",
          "text_en": "little, book, happiness, title",
          "text_ja": "小さい、本、幸福、題名"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Happiness means 幸せ。",
          "text_en": "Happiness means 幸せ。",
          "text_ja": "Happiness は「幸せ」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The title of the book is...",
          "text_en": "The title of the book is...",
          "text_ja": "その本の題名は……です。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The title 'A Little Book of Happiness' strengthens the calm and positive mood of the scene.",
          "text_en": "The title 'A Little Book of Happiness' strengthens the calm and positive mood of the scene.",
          "text_ja": "「A Little Book of Happiness」という題名が、場面の穏やかで前向きな雰囲気を強めています。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "framed poster above the bed",
      "content": "Good night, sleep tight.",
      "description_ja": "就寝前の挨拶を表すポスター。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "good night, sleep, night, poster",
          "text_en": "good night, sleep, night, poster",
          "text_ja": "おやすみ、眠る、夜、ポスター"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Good night, sleep tight. means おやすみ、ぐっすり眠ってね。",
          "text_en": "Good night, sleep tight. means おやすみ、ぐっすり眠ってね。",
          "text_ja": "Good night, sleep tight. は「おやすみ、ぐっすり眠ってね」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The framed poster says...",
          "text_en": "The framed poster says...",
          "text_ja": "額入りのポスターには……と書かれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The bedtime message visually confirms that the scene takes place shortly before sleep.",
          "text_en": "The bedtime message visually confirms that the scene takes place shortly before sleep.",
          "text_ja": "就寝前のメッセージが、この場面が眠る直前であることを視覚的に示しています。"
        }
      ]
    },
    {
      "id": "text_003",
      "location": "to-do list pinned above the desk",
      "content": "To do list: Study / Practice / Read / Dream",
      "description_ja": "勉強、練習、読書、夢を見ることを並べた行動リスト。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "study, practice, read, dream",
          "text_en": "study, practice, read, dream",
          "text_ja": "勉強する、練習する、読む、夢を見る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "To-do list means やることリスト。",
          "text_en": "To-do list means やることリスト。",
          "text_ja": "To-do list は「やることリスト」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The list includes the words...",
          "text_en": "The list includes the words...",
          "text_ja": "そのリストには……という言葉が含まれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The to-do list combines practical goals with the imaginative word 'Dream', reflecting both discipline and hope.",
          "text_en": "The to-do list combines practical goals with the imaginative word 'Dream', reflecting both discipline and hope.",
          "text_ja": "やることリストは、実用的な目標と想像力を示す「Dream」を組み合わせ、規律と希望の両方を表しています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Reading a book on the bed",
      "description_ja": "ベッドの上で本を読んでいる",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "read",
        "reading",
        "read a book",
        "reading a book",
        "enjoy a story",
        "look at the pages",
        "be absorbed in a book"
      ],
      "accepted_words": [
        "read",
        "reading",
        "read a book",
        "reading a book",
        "enjoy a story",
        "look at the pages",
        "be absorbed in a book"
      ],
      "common_typos": [
        "readding",
        "readng",
        "reding a book",
        "enjoyng a story",
        "absored in a book"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "read",
            "ja": "読む"
          }
        ],
        "A2": [
          {
            "en": "read a book",
            "ja": "本を読む"
          }
        ],
        "B1": [
          {
            "en": "enjoy a bedtime story",
            "ja": "寝る前の物語を楽しむ"
          }
        ],
        "B2": [
          {
            "en": "become absorbed in a reflective book before sleep",
            "ja": "眠る前に心を落ち着かせる本へ没頭する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "following a quiet path through the final pages of the day",
          "ja": "一日の最後のページを静かな道としてたどる"
        },
        {
          "en": "letting the book slow the rhythm of the evening",
          "ja": "本によって夜の流れをゆっくりさせる"
        },
        {
          "en": "carrying her mind beyond the bedroom while her body rests",
          "ja": "体を休めながら心を寝室の外へ運ぶ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "read, book, bed, story",
          "text_en": "read, book, bed, story",
          "text_ja": "読む、本、ベッド、物語"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is reading a book on the bed.",
          "text_en": "The woman is reading a book on the bed.",
          "text_ja": "女性はベッドの上で本を読んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "read quietly while sitting cross-legged on the bed",
          "text_en": "read quietly while sitting cross-legged on the bed",
          "text_ja": "ベッドの上であぐらをかいて静かに読む"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Sitting comfortably on the bed, she becomes absorbed in a book before going to sleep.",
          "text_en": "Sitting comfortably on the bed, she becomes absorbed in a book before going to sleep.",
          "text_ja": "ベッドに心地よく座り、彼女は眠る前に本へ夢中になっています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Holding the book with both hands",
      "description_ja": "両手で本を持っている",
      "involved_elements": [
        "element_001",
        "element_002"
      ],
      "synonyms": [
        "hold a book",
        "holding a book",
        "hold with both hands",
        "support the open book",
        "keep the book open"
      ],
      "accepted_words": [
        "hold a book",
        "holding a book",
        "hold with both hands",
        "support the open book",
        "keep the book open"
      ],
      "common_typos": [
        "holing a book",
        "hoding a book",
        "both hans",
        "suppot the book"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold",
            "ja": "持つ"
          }
        ],
        "A2": [
          {
            "en": "hold a book",
            "ja": "本を持つ"
          }
        ],
        "B1": [
          {
            "en": "support the open book",
            "ja": "開いた本を支える"
          }
        ],
        "B2": [
          {
            "en": "steady the volume with both hands",
            "ja": "両手で本を安定させる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "holding a small world between both hands",
          "ja": "両手の間に小さな世界を持つ"
        },
        {
          "en": "supporting the pages that carry her into sleep",
          "ja": "彼女を眠りへ運ぶページを支える"
        },
        {
          "en": "keeping the story open as the night grows quieter",
          "ja": "夜が静かになる中で物語を開いたままにする"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is holding the book with both hands.",
          "text_en": "She is holding the book with both hands.",
          "text_ja": "彼女は両手で本を持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "support an open book with both hands",
          "text_en": "support an open book with both hands",
          "text_ja": "両手で開いた本を支える"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the book firmly with both hands, she keeps her attention fixed on the pages.",
          "text_en": "Holding the book firmly with both hands, she keeps her attention fixed on the pages.",
          "text_ja": "両手で本をしっかり持ち、ページへ注意を向け続けています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Sitting cross-legged on the bed",
      "description_ja": "ベッドの上であぐらをかいて座っている",
      "involved_elements": [
        "element_001",
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "sit",
        "sitting",
        "sit on the bed",
        "sit cross-legged",
        "sit comfortably",
        "relax on the bed",
        "rest among the pillows"
      ],
      "accepted_words": [
        "sit",
        "sitting",
        "sit on the bed",
        "sit cross-legged",
        "sit comfortably",
        "relax on the bed",
        "rest among the pillows"
      ],
      "common_typos": [
        "siting",
        "sittting",
        "cross leged",
        "relaxxing",
        "rest amoung"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sit",
            "ja": "座る"
          }
        ],
        "A2": [
          {
            "en": "sit on the bed",
            "ja": "ベッドに座る"
          }
        ],
        "B1": [
          {
            "en": "sit cross-legged",
            "ja": "あぐらをかいて座る"
          }
        ],
        "B2": [
          {
            "en": "settle into a relaxed bedtime posture",
            "ja": "就寝前のくつろいだ姿勢になる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "folding herself into a comfortable corner of the bed",
          "ja": "ベッドの快適な一角に体を収める"
        },
        {
          "en": "resting in the soft space between reading and sleep",
          "ja": "読書と睡眠の間の柔らかな空間で休む"
        },
        {
          "en": "letting the pillows support the quiet end of the day",
          "ja": "枕に一日の静かな終わりを支えてもらう"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is sitting on the bed.",
          "text_en": "She is sitting on the bed.",
          "text_ja": "彼女はベッドの上に座っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "on the bed / among the pillows",
          "text_en": "on the bed / among the pillows",
          "text_ja": "ベッドの上で／枕の間で"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sit cross-legged among soft pillows",
          "text_en": "sit cross-legged among soft pillows",
          "text_ja": "柔らかな枕の間であぐらをかいて座る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Settled among soft bedding, she adopts a comfortable posture for bedtime reading.",
          "text_en": "Settled among soft bedding, she adopts a comfortable posture for bedtime reading.",
          "text_ja": "柔らかな寝具に囲まれ、寝る前の読書に適した快適な姿勢を取っています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Relaxing before sleep",
      "description_ja": "眠る前にくつろいでいる",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "relax before bed",
        "unwind",
        "rest before sleep",
        "enjoy a quiet evening",
        "prepare for sleep",
        "have a peaceful bedtime routine"
      ],
      "accepted_words": [
        "relax before bed",
        "unwind",
        "rest before sleep",
        "enjoy a quiet evening",
        "prepare for sleep",
        "have a peaceful bedtime routine"
      ],
      "common_typos": [
        "relaxx before bed",
        "un wind",
        "rest before sleap",
        "peacefull bedtime"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "relax",
            "ja": "くつろぐ"
          }
        ],
        "A2": [
          {
            "en": "relax before bed",
            "ja": "寝る前にくつろぐ"
          }
        ],
        "B1": [
          {
            "en": "unwind before sleep",
            "ja": "眠る前に気持ちをほぐす"
          }
        ],
        "B2": [
          {
            "en": "create a restorative bedtime routine",
            "ja": "心身を回復させる就寝前の習慣を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "letting the final minutes of the day become gentle and slow",
          "ja": "一日の最後の時間をやさしくゆっくりしたものにする"
        },
        {
          "en": "building a bridge from wakefulness to dreams",
          "ja": "目覚めている時間から夢への橋を作る"
        },
        {
          "en": "ending the day with a small ritual of peace",
          "ja": "小さな穏やかな習慣で一日を終える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is relaxing before bed.",
          "text_en": "She is relaxing before bed.",
          "text_ja": "彼女は寝る前にくつろいでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "enjoy a peaceful bedtime routine with a book",
          "text_en": "enjoy a peaceful bedtime routine with a book",
          "text_ja": "本とともに穏やかな就寝前の習慣を楽しむ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Surrounded by soft light and familiar objects, she appears to be unwinding before sleep.",
          "text_en": "Surrounded by soft light and familiar objects, she appears to be unwinding before sleep.",
          "text_ja": "柔らかな光と身近な物に囲まれ、彼女は眠る前にくつろいでいるようです。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Warm lights illuminating the bedroom",
      "description_ja": "暖かな光が寝室を照らしている",
      "involved_elements": [
        "element_006",
        "element_008",
        "element_010"
      ],
      "synonyms": [
        "warm light fills the room",
        "lamps illuminate the bedroom",
        "string lights glow",
        "soft light spreads",
        "golden light surrounds the bed"
      ],
      "accepted_words": [
        "warm light fills the room",
        "lamps illuminate the bedroom",
        "string lights glow",
        "soft light spreads",
        "golden light surrounds the bed"
      ],
      "common_typos": [
        "warm ligth",
        "iluminate the bedroom",
        "string ligths",
        "soft ligth"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "light shines",
            "ja": "光が照る"
          }
        ],
        "A2": [
          {
            "en": "warm light fills the room",
            "ja": "暖かな光が部屋を満たす"
          }
        ],
        "B1": [
          {
            "en": "soft illumination creates a restful mood",
            "ja": "柔らかな照明が休息感のある雰囲気を作る"
          }
        ],
        "B2": [
          {
            "en": "layered ambient lighting shapes an intimate bedtime environment",
            "ja": "重なった間接光が親密な就寝前の環境を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden light gathering around the bed like a blanket",
          "ja": "毛布のようにベッドの周りへ集まる金色の光"
        },
        {
          "en": "small indoor stars guiding the room toward sleep",
          "ja": "部屋を睡眠へ導く室内の小さな星"
        },
        {
          "en": "warmth moving quietly from lamp to wall to blanket",
          "ja": "ランプから壁、毛布へ静かに移る温かさ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Warm lights are shining in the room.",
          "text_en": "Warm lights are shining in the room.",
          "text_ja": "暖かな光が部屋の中で輝いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "soft bedside light and glowing string lights",
          "text_en": "soft bedside light and glowing string lights",
          "text_ja": "柔らかな枕元の光と光るストリングライト"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Illuminated by several warm light sources, the bedroom feels calm, intimate, and ready for sleep.",
          "text_en": "Illuminated by several warm light sources, the bedroom feels calm, intimate, and ready for sleep.",
          "text_ja": "いくつかの暖かな光源に照らされ、寝室は穏やかで親密で眠る準備の整った空間に感じられます。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "City lights and stars shining outside",
      "description_ja": "街の明かりと星が外で輝いている",
      "involved_elements": [
        "element_009"
      ],
      "synonyms": [
        "city lights shine",
        "stars shine",
        "buildings glow",
        "night sky sparkles",
        "distant lights twinkle",
        "city is visible through the window"
      ],
      "accepted_words": [
        "city lights shine",
        "stars shine",
        "buildings glow",
        "night sky sparkles",
        "distant lights twinkle",
        "city is visible through the window"
      ],
      "common_typos": [
        "city ligths",
        "stares shine",
        "bildings glow",
        "twinkel",
        "night skye"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lights shine",
            "ja": "明かりが輝く"
          }
        ],
        "A2": [
          {
            "en": "city lights are visible",
            "ja": "街の明かりが見える"
          }
        ],
        "B1": [
          {
            "en": "distant buildings glow at night",
            "ja": "遠くの建物が夜に光る"
          }
        ],
        "B2": [
          {
            "en": "scattered urban lights punctuate the dark skyline",
            "ja": "点在する都会の光が暗い空を彩る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the city whispering in points of light beyond the glass",
          "ja": "ガラスの向こうで光の点としてささやく街"
        },
        {
          "en": "the sleeping world still glowing outside",
          "ja": "外でまだ光っている眠る世界"
        },
        {
          "en": "stars and windows sharing the darkness",
          "ja": "暗闇を分け合う星と窓の明かり"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "City lights and stars are shining outside.",
          "text_en": "City lights and stars are shining outside.",
          "text_ja": "街の明かりと星が外で輝いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "distant buildings glowing beneath a starry sky",
          "text_en": "distant buildings glowing beneath a starry sky",
          "text_ja": "星空の下で光る遠くの建物"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Scattered across the dark skyline, the city lights form a peaceful contrast with the warm bedroom.",
          "text_en": "Scattered across the dark skyline, the city lights form a peaceful contrast with the warm bedroom.",
          "text_ja": "暗い空に散らばる街の光が、暖かな寝室と穏やかな対比を作っています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Preparing for a new day",
      "description_ja": "新しい一日に備えている",
      "involved_elements": [
        "element_006",
        "element_007",
        "element_008",
        "element_010"
      ],
      "synonyms": [
        "prepare for tomorrow",
        "get ready for the next day",
        "organize study materials",
        "plan tasks",
        "follow a bedtime routine",
        "finish the day"
      ],
      "accepted_words": [
        "prepare for tomorrow",
        "get ready for the next day",
        "organize study materials",
        "plan tasks",
        "follow a bedtime routine",
        "finish the day"
      ],
      "common_typos": [
        "prepare for tomorow",
        "get redy",
        "organise study materals",
        "planing tasks"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "get ready for tomorrow",
            "ja": "明日の準備をする"
          }
        ],
        "A2": [
          {
            "en": "plan the next day",
            "ja": "次の日を計画する"
          }
        ],
        "B1": [
          {
            "en": "organize tasks and study materials",
            "ja": "課題と学習用品を整理する"
          }
        ],
        "B2": [
          {
            "en": "conclude the day with an organized and reflective routine",
            "ja": "整理され振り返りを含む習慣で一日を終える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "placing tomorrow's plans beside tonight's dreams",
          "ja": "今夜の夢のそばに明日の予定を置く"
        },
        {
          "en": "closing the day with both rest and preparation",
          "ja": "休息と準備の両方で一日を終える"
        },
        {
          "en": "keeping future goals visible while the room grows quiet",
          "ja": "部屋が静かになる中で将来の目標を見える場所に保つ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "It looks like she is getting ready for bed.",
          "text_en": "It looks like she is getting ready for bed.",
          "text_ja": "彼女は寝る準備をしているようです。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "finish the day with reading and preparation for tomorrow",
          "text_en": "finish the day with reading and preparation for tomorrow",
          "text_ja": "読書と明日の準備で一日を終える"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "With her desk organized and a to-do list displayed, she seems to balance rest with preparation for the next day.",
          "text_en": "With her desk organized and a to-do list displayed, she seems to balance rest with preparation for the next day.",
          "text_ja": "机が整理され、やることリストが掲示されていることから、彼女は休息と翌日の準備を両立しているようです。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "young woman",
      "relationship": "on",
      "object": "bed",
      "example_beginner": "The woman is on the bed.",
      "example_intermediate": "The young woman is sitting cross-legged on the bed."
    },
    {
      "subject": "book",
      "relationship": "in",
      "object": "woman's hands",
      "example_beginner": "The book is in her hands.",
      "example_intermediate": "She is holding an open blue book in both hands."
    },
    {
      "subject": "blanket",
      "relationship": "across",
      "object": "bed",
      "example_beginner": "The blanket is across the bed.",
      "example_intermediate": "A purple blanket is spread across the lower part of the bed."
    },
    {
      "subject": "slippers",
      "relationship": "beside",
      "object": "bed",
      "example_beginner": "The slippers are beside the bed.",
      "example_intermediate": "A pair of fluffy slippers lies beside the bed."
    },
    {
      "subject": "nightstand",
      "relationship": "beside",
      "object": "bed",
      "example_beginner": "The nightstand is beside the bed.",
      "example_intermediate": "A wooden nightstand stands beside the right side of the bed."
    },
    {
      "subject": "lamp",
      "relationship": "on",
      "object": "nightstand",
      "example_beginner": "The lamp is on the nightstand.",
      "example_intermediate": "A warm table lamp stands on the bedside table."
    },
    {
      "subject": "desk",
      "relationship": "to the right of",
      "object": "bed",
      "example_beginner": "The desk is to the right of the bed.",
      "example_intermediate": "A wooden study desk stands to the right of the bed."
    },
    {
      "subject": "chair",
      "relationship": "in front of",
      "object": "desk",
      "example_beginner": "The chair is in front of the desk.",
      "example_intermediate": "A wooden chair is positioned in front of the study desk."
    },
    {
      "subject": "window",
      "relationship": "to the left of",
      "object": "bed",
      "example_beginner": "The window is to the left of the bed.",
      "example_intermediate": "A large night window is located to the left of the bed."
    },
    {
      "subject": "city lights",
      "relationship": "through",
      "object": "window",
      "example_beginner": "City lights can be seen through the window.",
      "example_intermediate": "Many city lights are visible through the large window."
    },
    {
      "subject": "poster",
      "relationship": "above",
      "object": "bed",
      "example_beginner": "The poster is above the bed.",
      "example_intermediate": "A framed bedtime message hangs above the bed."
    },
    {
      "subject": "wall shelf",
      "relationship": "above",
      "object": "desk",
      "example_beginner": "The shelf is above the desk.",
      "example_intermediate": "A wooden shelf holding books and plants hangs above the desk."
    },
    {
      "subject": "to-do list",
      "relationship": "above",
      "object": "desk",
      "example_beginner": "The list is above the desk.",
      "example_intermediate": "A to-do list is pinned to the wall above the desk."
    }
  ],
  "adjective_library": {
    "person": [
      "young",
      "relaxed",
      "calm",
      "comfortable",
      "peaceful",
      "focused",
      "sleepy"
    ],
    "bedroom": [
      "cozy",
      "warm",
      "quiet",
      "personal",
      "organized",
      "softly lit",
      "inviting"
    ],
    "bed": [
      "soft",
      "comfortable",
      "floral",
      "warm",
      "large",
      "neatly arranged"
    ],
    "book": [
      "open",
      "blue",
      "small",
      "reflective",
      "positive",
      "hard-covered"
    ],
    "light": [
      "warm",
      "golden",
      "soft",
      "gentle",
      "glowing",
      "ambient",
      "dim"
    ],
    "night_view": [
      "dark",
      "starry",
      "urban",
      "distant",
      "glowing",
      "peaceful"
    ],
    "atmosphere": [
      "restful",
      "dreamy",
      "serene",
      "intimate",
      "sleepy",
      "peaceful",
      "comforting"
    ]
  },
  "preposition_library": [
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The woman is sitting on the bed."
    },
    {
      "preposition": "in",
      "meaning_ja": "〜の中に、〜で",
      "example": "She is relaxing in her bedroom."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The slippers are beside the bed."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The desk is to the right of the bed."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The window is to the left of the bed."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The chair is in front of the desk."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上方に",
      "example": "The poster is above the bed."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "City lights can be seen through the window."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って、〜とともに",
      "example": "She is relaxing with a book."
    },
    {
      "preposition": "before",
      "meaning_ja": "〜の前に",
      "example": "She is reading before going to sleep."
    },
    {
      "preposition": "at night",
      "meaning_ja": "夜に",
      "example": "She is reading at night."
    },
    {
      "preposition": "among",
      "meaning_ja": "〜の間に、〜に囲まれて",
      "example": "She is sitting among soft pillows."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Subject + be + present participle (-ing)",
      "label_ja": "現在進行形",
      "level": "beginner",
      "purpose_ja": "画像の中で今行われている動作を表す。",
      "examples": [
        "The woman is reading a book.",
        "She is sitting on the bed.",
        "The city lights are shining outside."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で今している動作を表します。",
        "Scene 009では woman + is reading + a book が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "寝室にある物を説明する。",
      "examples": [
        "There is a lamp on the nightstand.",
        "There is a desk beside the bed.",
        "There are books and pencils on the desk."
      ],
      "hints": [
        "単数には There is、複数には There are を使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物・場所・雰囲気の特徴を説明する。",
      "examples": [
        "The woman is relaxed.",
        "The bedroom is cozy.",
        "The light is warm."
      ],
      "hints": [
        "relaxed, cozy, warm などをbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The woman is on the bed.",
        "The slippers are beside the bed.",
        "The poster is above the bed."
      ],
      "hints": [
        "on, beside, above, to the right of, through などを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + verb + adverb",
      "label_ja": "副詞を使った動作の説明",
      "level": "intermediate",
      "purpose_ja": "動作がどのように行われているかを表す。",
      "examples": [
        "She reads quietly.",
        "The lights glow softly.",
        "The city shines gently outside."
      ],
      "hints": [
        "quietly, softly, gently などを使うと、就寝前の雰囲気が具体的になります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を加える。",
      "examples": [
        "The woman who is reading looks relaxed.",
        "The book that she is holding is blue.",
        "The window, which shows the city, is beside the bed."
      ],
      "hints": [
        "人には who、物には which または that を使います。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "物が置かれている、飾られている、照らされている状態を表す。",
      "examples": [
        "The bed is covered with floral bedding.",
        "The room is illuminated by warm lamps.",
        "The to-do list is pinned above the desk."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で状態を説明できます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Subject, present participial phrase, + verb",
      "label_ja": "現在分詞による追加説明",
      "level": "intermediate",
      "purpose_ja": "主語の同時動作を一文に加える。",
      "examples": [
        "The woman, holding a book, is sitting on the bed.",
        "The lamps, glowing warmly, light the room.",
        "The city lights, shining outside, create a peaceful background."
      ],
      "hints": [
        "主語の後ろに -ing の表現を挟むと、同時動作を自然に加えられます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の複数の動作を簡潔につなぐ。",
      "examples": [
        "Holding the book with both hands, she reads quietly.",
        "Sitting cross-legged on the bed, she relaxes before sleep.",
        "Glowing softly, the lamps create a warm atmosphere."
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
      "purpose_ja": "受け身の状態や背景を文頭で示す。",
      "examples": [
        "Surrounded by soft bedding, the woman reads peacefully.",
        "Illuminated by warm lamps, the bedroom feels restful.",
        "Decorated with photos and notes, the wall reflects her personality."
      ],
      "hints": [
        "Surrounded, Illuminated, Decorated などから始められます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できることを断定せずに表す。",
      "examples": [
        "It looks like she is reading before bed.",
        "She seems to be enjoying a peaceful story.",
        "The room appears to be prepared for sleep."
      ],
      "hints": [
        "looks like, seems, appears to を使って推測として書きます。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "while / as + clause",
      "label_ja": "while / as を使った同時進行",
      "level": "intermediate",
      "purpose_ja": "人物の動作と背景の変化を同時に説明する。",
      "examples": [
        "She reads while the city lights shine outside.",
        "The room grows quiet as the lamps glow.",
        "She relaxes while the rest of the city remains awake."
      ],
      "hints": [
        "while や as を使うと、同時に起きていることを一文で表せます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There is a ______.",
        "example": "There is a woman."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "She is in / on ______.",
        "example": "She is on the bed."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "She is ______ing.",
        "example": "She is reading."
      },
      {
        "step": 4,
        "question_ja": "何を読んでいますか？",
        "template": "She is reading ______.",
        "example": "She is reading a book."
      },
      {
        "step": 5,
        "question_ja": "周りには何がありますか？",
        "template": "There is / are ______ on / beside / above ______.",
        "example": "There is a lamp beside the bed."
      }
    ],
    "intermediate": [
      {
        "template": "A young woman is ______ing on ______.",
        "example": "A young woman is reading on a comfortable bed."
      },
      {
        "template": "Beside the bed, there is / are ______.",
        "example": "Beside the bed, there are a nightstand, slippers, and a desk."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a window, a shelf, photographs, and city lights."
      },
      {
        "template": "The ______ makes the room feel ______.",
        "example": "The warm lamp light makes the room feel peaceful."
      },
      {
        "template": "It looks like she is ______.",
        "example": "It looks like she is relaxing before going to sleep."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding an open book with both hands, the young woman reads quietly on the bed."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by soft bedding and warm light, she enjoys a peaceful bedtime routine."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "She reads a book while city lights and stars shine beyond the window."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The woman, who is wearing pink pajamas, is reading a book that is titled 'A Little Book of Happiness'."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that she is finishing the day with a relaxing reading habit."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A woman is in her bedroom.",
      "She is sitting on the bed.",
      "She is reading a book.",
      "There is a lamp beside the bed.",
      "City lights can be seen through the window."
    ],
    "intermediate": [
      "A young woman in pink pajamas is reading a book on her bed at night.",
      "She is holding the open book with both hands and sitting cross-legged.",
      "A bedside table with a lamp, an alarm clock, and a plant stands next to the bed.",
      "A wooden desk, a chair, books, a mug, and stationery can be seen on the right.",
      "Warm lights and the city view create a peaceful bedtime atmosphere."
    ],
    "advanced": [
      "Seated comfortably among floral bedding, a young woman in pink pajamas reads an open book before going to sleep.",
      "Illuminated by a bedside lamp and a desk lamp, the bedroom feels warm, personal, and restful.",
      "Beside the bed, fluffy slippers, an alarm clock, a small plant, and neatly organized furniture suggest a calm nighttime routine.",
      "Beyond the window, stars and city lights shine over dark buildings, while encouraging messages and personal photographs decorate the walls."
    ]
  },
  "full_description_support": {
    "beginner_model": "A woman is in a bedroom at night. She is sitting on a bed and reading a book. There is a lamp beside the bed. There is a desk and a chair on the right. City lights and stars can be seen through the window. The room is warm and quiet.",
    "intermediate_model": "A young woman wearing pink pajamas is sitting cross-legged on a wooden bed in a cozy bedroom at night. She is holding an open blue book with both hands and reading quietly. The bed is covered with floral bedding, soft pillows, and a purple blanket. Beside the bed, a wooden nightstand holds a warm lamp, an alarm clock, a plant, and books. On the right, a study desk and chair are arranged with a desk lamp, a mug, pencil holders, and books. Fluffy slippers and a round rug lie on the floor, while city lights and stars can be seen through the large window.",
    "advanced_model": "Seated comfortably among floral bedding, a young woman in pink plaid pajamas ends her day by reading a book titled 'A Little Book of Happiness'. Holding the open volume with both hands, she sits cross-legged on the bed as warm bedside and desk lamps fill the bedroom with soft golden light. A wooden nightstand beside her supports an alarm clock, a plant, and several books, while fluffy slippers and a lavender rug reinforce the room's private and restful character. To the right, a neatly organized desk holds stationery, a mug, and study materials beneath a wall shelf decorated with books, greenery, a framed photograph, and a teddy bear. The framed words 'Good night, sleep tight.' and a to-do list containing 'Study, Practice, Read, Dream' connect rest, responsibility, and hope. Beyond the large window, stars and illuminated buildings shine in the night, creating a peaceful contrast with the warm interior."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A woman is on a bed. She is reading a book.",
        "ja": "女性がベッドの上にいます。彼女は本を読んでいます。",
        "focus": "woman、bed、reading、bookを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "There is a lamp beside the bed. The room is warm and quiet.",
        "ja": "ベッドのそばにランプがあります。部屋は暖かく静かです。",
        "focus": "There is とbe動詞＋形容詞を使い、物と雰囲気を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A young woman is sitting on her bed and reading an open book before sleep.",
        "ja": "若い女性がベッドに座り、眠る前に開いた本を読んでいます。",
        "focus": "andを使ってsittingとreadingをつなぎ、before sleepで時間を加える。"
      },
      {
        "en": "She is relaxing in a cozy bedroom with soft bedding, warm lamps, books, and city lights around her.",
        "ja": "彼女は柔らかな寝具、暖かなランプ、本、街の明かりに囲まれた居心地のよい寝室でくつろいでいます。",
        "focus": "with と around her を使って周囲の要素をまとめて説明する。"
      }
    ],
    "B1": [
      {
        "en": "A relaxed young woman is reading quietly on her bed while city lights shine beyond the window.",
        "ja": "くつろいだ若い女性が、窓の向こうで街の明かりが輝く中、ベッドで静かに本を読んでいます。",
        "focus": "whileを使って人物の動作と外の様子を同時に描写する。"
      },
      {
        "en": "The bedroom is softly illuminated by several lamps and decorated with personal photographs, books, plants, and encouraging messages.",
        "ja": "寝室はいくつかのランプに柔らかく照らされ、個人的な写真、本、植物、励ましの言葉で飾られています。",
        "focus": "受動態 is illuminated / is decorated を使って部屋の状態を説明する。"
      }
    ],
    "B2": [
      {
        "en": "Surrounded by floral bedding and warm ambient light, the young woman quietly immerses herself in a book that offers a final peaceful moment before sleep.",
        "ja": "花柄の寝具と暖かな間接光に囲まれ、若い女性は眠る前の最後の穏やかな時間を与えてくれる本へ静かに没頭しています。",
        "focus": "Surroundedで始める過去分詞句、immerses herself、関係代名詞thatを組み合わせる。"
      },
      {
        "en": "The bedroom, which is organized for both study and rest, seems to provide an ideal environment for the reader, who appears to be balancing tomorrow's responsibilities with tonight's need for relaxation.",
        "ja": "勉強と休息の両方に合わせて整えられた寝室は、明日の責任と今夜のくつろぎの必要性を両立しているように見える読者にとって、理想的な環境を提供しているようです。",
        "focus": "whichとwhoを連続して使う関係代名詞、seems to、appears toによる推量を組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene009Data = scene009Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene009Data;
}
