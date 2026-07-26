"use strict";

const scene008Data = {
  "id": "scene_008",
  "image_id": "008.webp",
  "overall_description_ja": "月と街の明かりが見える夜のリビングルームで、若い女性がソファに座り、ローテーブルの上に開いたノートへペンで文字を書きながら、隣に置かれたノートパソコンを見て勉強している。女性は白いスウェットと灰色のパンツを着ており、机の上には英語学習用の本、マグカップ、キャンドル、小さな観葉植物が並んでいる。背後にはフロアランプ、棚、本、額入りの絵、植物、ストリングライトがあり、暖かな照明と夜景が落ち着いた学習空間を作っている。",
  "overall_description_en": "A young woman is sitting on a sofa in a cozy living room at night, writing in an open notebook while looking at a laptop on the coffee table. She is wearing a white sweatshirt and gray pants. Several English study books, a pink mug, a candle, and a small potted plant are arranged on the table. Behind her are cushions, a floor lamp, shelves, books, framed pictures, plants, and string lights. A crescent moon and city lights can be seen through the large window, creating a warm and peaceful nighttime study scene.",
  "overall_mood": [
    "cozy",
    "warm",
    "focused",
    "quiet",
    "peaceful",
    "studious",
    "nighttime",
    "softly lit",
    "comfortable",
    "productive",
    "serene",
    "organized",
    "inviting",
    "calm",
    "dreamy"
  ],
  "mission_guides": {
    "gist": "若い女性（woman / student）が、何をしているか（writing / studying / using a laptop）を書こう",
    "setting": "場所（living room）、ソファ（sofa）、ローテーブル（coffee table）、夜（at night）に注目しよう",
    "details": "ノートパソコン、ノート、英語の本、マグカップ、キャンドル、植物などを加えよう",
    "complete": "窓の外の月と街の明かり、暖かな照明、落ち着いた学習の雰囲気まで描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young woman studying on the sofa",
        "ja": "ソファで勉強する若い女性"
      },
      {
        "en": "writing in an open notebook",
        "ja": "開いたノートに書いている"
      },
      {
        "en": "looking at a laptop screen",
        "ja": "ノートパソコンの画面を見ている"
      },
      {
        "en": "learning English at night",
        "ja": "夜に英語を学んでいる"
      }
    ],
    "setting": [
      {
        "en": "inside a cozy living room",
        "ja": "居心地のよいリビングの中で"
      },
      {
        "en": "a low wooden table in front of the sofa",
        "ja": "ソファの前にある低い木製テーブル"
      },
      {
        "en": "English books, a mug, and a candle on the table",
        "ja": "テーブルの上の英語の本、マグカップ、キャンドル"
      },
      {
        "en": "a city view and crescent moon outside the window",
        "ja": "窓の外の街の景色と三日月"
      }
    ],
    "mood": [
      {
        "en": "warm golden lamp light",
        "ja": "暖かな金色のランプの光"
      },
      {
        "en": "a calm and focused atmosphere",
        "ja": "落ち着いて集中した雰囲気"
      },
      {
        "en": "a peaceful nighttime study session",
        "ja": "穏やかな夜の学習時間"
      },
      {
        "en": "a comfortable and productive evening",
        "ja": "快適で充実した夜"
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
        "student",
        "girl",
        "female student",
        "learner",
        "she",
        "English learner"
      ],
      "hint_msg": "まずは「女性（woman）」や「生徒（student）」など、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は、その女性が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "studying",
        "writing",
        "using",
        "looking",
        "learning",
        "taking notes",
        "sitting",
        "working"
      ],
      "hint_msg": "「勉強している（is studying）」「書いている（is writing）」「パソコンを使っている（is using a laptop）」と書きましょう。",
      "success_msg": "Great! 次に、何を使っているか、どこで勉強しているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "notebook",
        "laptop",
        "computer",
        "English",
        "living room",
        "sofa",
        "coffee table",
        "book",
        "home",
        "night"
      ],
      "hint_msg": "「ノート（notebook）」「ノートパソコン（laptop）」「英語（English）」「リビング（living room）」などを加えましょう。",
      "success_msg": "Excellent! 次は本、飲み物、照明、夜景、雰囲気を加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "studying English at home",
    "using a laptop while taking notes",
    "learning in a cozy living room",
    "a nighttime study routine",
    "independent language learning",
    "a productive evening",
    "warm indoor lighting and a city view"
  ],
  "scene_structure": {
    "foreground": [
      "wooden coffee table",
      "English study books",
      "pink mug",
      "open notebook",
      "pen",
      "laptop",
      "glass candle",
      "small potted plant",
      "basket under the table"
    ],
    "midground": [
      "young woman",
      "gray sofa",
      "pink cushion",
      "knitted cushion",
      "pink blanket",
      "gray cushion"
    ],
    "background": [
      "large window",
      "crescent moon",
      "city lights",
      "white curtains",
      "floor lamp",
      "large plant",
      "bookshelf",
      "books",
      "framed pictures",
      "small plant",
      "candle",
      "string lights"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "young woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with dark hair tied in a loose bun is sitting on the sofa and leaning toward the coffee table. She is wearing a loose white sweatshirt, gray pants, and light socks.",
      "bounding_box_conceptual": [
        14,
        24,
        75,
        49
      ],
      "color": [
        "white",
        "gray",
        "brown"
      ],
      "attributes": [
        "young",
        "focused",
        "calm",
        "comfortable",
        "hardworking",
        "attentive"
      ],
      "action": [
        "sitting",
        "writing",
        "studying",
        "using a laptop",
        "looking down"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "girl",
        "student",
        "female student",
        "learner",
        "English learner",
        "she"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "girl",
        "student",
        "female student",
        "learner",
        "English learner",
        "she"
      ],
      "common_typos": [
        "womon",
        "young women",
        "gril",
        "studant",
        "femail student",
        "leaner",
        "English leaner"
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
            "en": "female student",
            "ja": "女子生徒"
          }
        ],
        "B2": [
          {
            "en": "an independent learner studying late at night",
            "ja": "夜遅くに学ぶ自立した学習者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet learner building her future in the warm night",
          "ja": "暖かな夜の中で未来を築く静かな学習者"
        },
        {
          "en": "a focused figure connecting handwritten notes with digital information",
          "ja": "手書きのメモとデジタル情報を結びつける集中した人物"
        },
        {
          "en": "a student turning her living room into a personal classroom",
          "ja": "リビングを自分だけの教室へ変える生徒"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, student, girl, white sweatshirt",
          "text_en": "woman, student, girl, white sweatshirt",
          "text_ja": "女性、生徒、女の子、白いスウェット"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A woman is studying in the living room.",
          "text_en": "A woman is studying in the living room.",
          "text_ja": "女性がリビングで勉強しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young woman wearing a loose white sweatshirt",
          "text_en": "a young woman wearing a loose white sweatshirt",
          "text_ja": "ゆったりした白いスウェットを着た若い女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The young woman, dressed in comfortable clothes, is concentrating on her English studies at night.",
          "text_en": "The young woman, dressed in comfortable clothes, is concentrating on her English studies at night.",
          "text_ja": "楽な服装をした若い女性は、夜に英語学習へ集中しています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "laptop",
      "label_ja": "ノートパソコン",
      "category": "technology",
      "importance": "primary",
      "description": "An open black laptop is placed on the right side of the coffee table, directly in front of the woman.",
      "bounding_box_conceptual": [
        49,
        58,
        22,
        25
      ],
      "color": [
        "black",
        "dark gray"
      ],
      "attributes": [
        "open",
        "portable",
        "electronic",
        "modern",
        "active"
      ],
      "action": [
        "displaying information",
        "being used for study",
        "resting on the table"
      ],
      "synonyms_and_related_words": [
        "laptop",
        "computer",
        "notebook computer",
        "PC",
        "portable computer",
        "screen",
        "device"
      ],
      "accepted_words": [
        "laptop",
        "computer",
        "notebook computer",
        "PC",
        "portable computer",
        "screen",
        "device"
      ],
      "common_typos": [
        "lap top",
        "labtop",
        "laptob",
        "computor",
        "notebook computor",
        "portable computar"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "computer",
            "ja": "コンピューター"
          }
        ],
        "A2": [
          {
            "en": "laptop",
            "ja": "ノートパソコン"
          }
        ],
        "B1": [
          {
            "en": "portable computer",
            "ja": "携帯型コンピューター"
          }
        ],
        "B2": [
          {
            "en": "digital learning device",
            "ja": "デジタル学習機器"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark window opening onto digital knowledge",
          "ja": "デジタル知識へ開く暗い窓"
        },
        {
          "en": "a second study partner glowing on the table",
          "ja": "テーブルの上で光るもう一人の学習相手"
        },
        {
          "en": "a bridge between her notebook and the wider world",
          "ja": "ノートと広い世界をつなぐ橋"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "laptop, computer, screen, black",
          "text_en": "laptop, computer, screen, black",
          "text_ja": "ノートパソコン、コンピューター、画面、黒い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The laptop is open on the table.",
          "text_en": "The laptop is open on the table.",
          "text_ja": "ノートパソコンがテーブルの上で開いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an open laptop used for studying English",
          "text_en": "an open laptop used for studying English",
          "text_ja": "英語学習に使われている開いたノートパソコン"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The laptop, which is positioned beside the notebook, appears to provide information for her study.",
          "text_en": "The laptop, which is positioned beside the notebook, appears to provide information for her study.",
          "text_ja": "ノートのそばに置かれたパソコンは、学習用の情報を提供しているようです。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "open notebook",
      "label_ja": "開いたノート",
      "category": "object",
      "importance": "primary",
      "description": "A spiral-bound notebook lies open in front of the woman, and several lines have been written across its pages.",
      "bounding_box_conceptual": [
        57,
        38,
        13,
        26
      ],
      "color": [
        "white",
        "cream",
        "black"
      ],
      "attributes": [
        "open",
        "spiral-bound",
        "lined",
        "written",
        "large"
      ],
      "action": [
        "lying on the table",
        "being written in",
        "holding notes"
      ],
      "synonyms_and_related_words": [
        "notebook",
        "open notebook",
        "spiral notebook",
        "exercise book",
        "workbook",
        "notes",
        "notepad"
      ],
      "accepted_words": [
        "notebook",
        "open notebook",
        "spiral notebook",
        "exercise book",
        "workbook",
        "notes",
        "notepad"
      ],
      "common_typos": [
        "notbook",
        "note book",
        "spiral notbook",
        "exersise book",
        "workbok",
        "notees"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "notebook",
            "ja": "ノート"
          }
        ],
        "A2": [
          {
            "en": "open notebook",
            "ja": "開いたノート"
          }
        ],
        "B1": [
          {
            "en": "spiral notebook",
            "ja": "リング式ノート"
          }
        ],
        "B2": [
          {
            "en": "a handwritten record of her learning",
            "ja": "学習内容を手書きで残した記録"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "pages turning digital information into personal knowledge",
          "ja": "デジタル情報を自分の知識へ変えるページ"
        },
        {
          "en": "a paper map of her English learning",
          "ja": "英語学習の紙の地図"
        },
        {
          "en": "lines of effort growing beside the laptop",
          "ja": "パソコンのそばで増えていく努力の行"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "notebook, page, notes, open",
          "text_en": "notebook, page, notes, open",
          "text_ja": "ノート、ページ、メモ、開いている"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is writing in a notebook.",
          "text_en": "She is writing in a notebook.",
          "text_ja": "彼女はノートに書いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an open spiral notebook filled with notes",
          "text_en": "an open spiral notebook filled with notes",
          "text_ja": "メモが書かれた開いたリング式ノート"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The notebook, placed between the books and the laptop, records the information she is learning.",
          "text_en": "The notebook, placed between the books and the laptop, records the information she is learning.",
          "text_ja": "本とパソコンの間に置かれたノートには、彼女が学んでいる情報が記録されています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "pen",
      "label_ja": "ペン",
      "category": "object",
      "importance": "primary",
      "description": "The woman is holding a dark pen in her right hand and writing in the notebook.",
      "bounding_box_conceptual": [
        52,
        38,
        15,
        8
      ],
      "color": [
        "black",
        "dark blue",
        "silver"
      ],
      "attributes": [
        "thin",
        "small",
        "dark",
        "practical"
      ],
      "action": [
        "being held",
        "writing",
        "moving across the page"
      ],
      "synonyms_and_related_words": [
        "pen",
        "ballpoint pen",
        "writing pen",
        "writing tool",
        "writing instrument",
        "ink pen"
      ],
      "accepted_words": [
        "pen",
        "ballpoint pen",
        "writing pen",
        "writing tool",
        "writing instrument",
        "ink pen"
      ],
      "common_typos": [
        "pne",
        "penn",
        "ball point pen",
        "writting tool",
        "writing instument"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pen",
            "ja": "ペン"
          }
        ],
        "A2": [
          {
            "en": "writing tool",
            "ja": "筆記用具"
          }
        ],
        "B1": [
          {
            "en": "ballpoint pen",
            "ja": "ボールペン"
          }
        ],
        "B2": [
          {
            "en": "an instrument for recording ideas",
            "ja": "考えを記録する道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pen carrying ideas from the screen to the page",
          "ja": "画面の考えをページへ運ぶペン"
        },
        {
          "en": "the point where digital learning becomes handwriting",
          "ja": "デジタル学習が手書きへ変わる先端"
        },
        {
          "en": "a small tool tracing her progress line by line",
          "ja": "一行ずつ成長をたどる小さな道具"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pen, write, hand, hold",
          "text_en": "pen, write, hand, hold",
          "text_ja": "ペン、書く、手、持つ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is holding a pen.",
          "text_en": "She is holding a pen.",
          "text_ja": "彼女はペンを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "write carefully with a dark pen",
          "text_en": "write carefully with a dark pen",
          "text_ja": "濃い色のペンで丁寧に書く"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the pen steadily, she transfers key information from the laptop into her notebook.",
          "text_en": "Holding the pen steadily, she transfers key information from the laptop into her notebook.",
          "text_ja": "ペンを安定して持ち、パソコンの重要な情報をノートへ書き写しています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "English study books",
      "label_ja": "英語学習の本",
      "category": "object",
      "importance": "primary",
      "description": "Three English-learning books are stacked on the left side of the coffee table. Their visible titles include 'English Grammar', 'Vocabulary Builder', and 'Communication in English'.",
      "bounding_box_conceptual": [
        65,
        17,
        14,
        25
      ],
      "color": [
        "blue",
        "red",
        "green",
        "cream"
      ],
      "attributes": [
        "stacked",
        "educational",
        "colorful",
        "thick",
        "used"
      ],
      "action": [
        "resting on the table",
        "supporting English study"
      ],
      "synonyms_and_related_words": [
        "English books",
        "study books",
        "textbooks",
        "English textbook",
        "grammar book",
        "vocabulary book",
        "language-learning books"
      ],
      "accepted_words": [
        "English books",
        "study books",
        "textbooks",
        "English textbook",
        "grammar book",
        "vocabulary book",
        "language-learning books"
      ],
      "common_typos": [
        "English bokks",
        "study bok",
        "text books",
        "grammer book",
        "vocaburary book",
        "langauge books"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "books",
            "ja": "本"
          }
        ],
        "A2": [
          {
            "en": "English books",
            "ja": "英語の本"
          }
        ],
        "B1": [
          {
            "en": "grammar and vocabulary books",
            "ja": "文法と語彙の本"
          }
        ],
        "B2": [
          {
            "en": "a collection of language-learning resources",
            "ja": "語学学習教材の一式"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a colorful staircase of English knowledge",
          "ja": "英語知識へ続く色鮮やかな階段"
        },
        {
          "en": "three books marking different paths into language",
          "ja": "言語へ入る異なる道を示す3冊の本"
        },
        {
          "en": "printed guides supporting her digital study",
          "ja": "デジタル学習を支える紙の案内役"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "book, English, grammar, vocabulary",
          "text_en": "book, English, grammar, vocabulary",
          "text_ja": "本、英語、文法、語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are English books on the table.",
          "text_en": "There are English books on the table.",
          "text_ja": "テーブルの上に英語の本があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "three English study books stacked beside the mug",
          "text_en": "three English study books stacked beside the mug",
          "text_ja": "マグカップのそばに積まれた3冊の英語学習本"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The grammar, vocabulary, and communication books show that she is studying several aspects of English.",
          "text_en": "The grammar, vocabulary, and communication books show that she is studying several aspects of English.",
          "text_ja": "文法、語彙、コミュニケーションの本から、彼女が英語の複数の側面を学んでいることが分かります。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "coffee table",
      "label_ja": "ローテーブル",
      "category": "furniture",
      "importance": "primary",
      "description": "A large rectangular wooden coffee table stands in front of the sofa and serves as the woman's study desk.",
      "bounding_box_conceptual": [
        63,
        13,
        37,
        78
      ],
      "color": [
        "brown",
        "golden brown",
        "black"
      ],
      "attributes": [
        "wooden",
        "large",
        "rectangular",
        "low",
        "broad"
      ],
      "action": [
        "supporting study materials",
        "serving as a workspace"
      ],
      "synonyms_and_related_words": [
        "coffee table",
        "low table",
        "wooden table",
        "living-room table",
        "center table",
        "study surface"
      ],
      "accepted_words": [
        "coffee table",
        "low table",
        "wooden table",
        "living-room table",
        "center table",
        "study surface"
      ],
      "common_typos": [
        "cofee table",
        "coffee tabel",
        "low tabel",
        "wooden tabel",
        "living room tabel"
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
            "en": "coffee table",
            "ja": "ローテーブル"
          }
        ],
        "B1": [
          {
            "en": "living-room table",
            "ja": "リビングのテーブル"
          }
        ],
        "B2": [
          {
            "en": "a low wooden workspace",
            "ja": "低い木製の作業スペース"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden classroom at the center of the living room",
          "ja": "リビングの中心にある木製の教室"
        },
        {
          "en": "a low stage where books, screen, and handwriting meet",
          "ja": "本、画面、手書きが出会う低い舞台"
        },
        {
          "en": "the practical center of her evening study",
          "ja": "夜の勉強の実用的な中心"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "table, coffee table, wood, front",
          "text_en": "table, coffee table, wood, front",
          "text_ja": "テーブル、ローテーブル、木、前"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The coffee table is in front of the sofa.",
          "text_en": "The coffee table is in front of the sofa.",
          "text_ja": "ローテーブルはソファの前にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large wooden coffee table used as a study desk",
          "text_en": "a large wooden coffee table used as a study desk",
          "text_ja": "勉強机として使われる大きな木製ローテーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The coffee table has been transformed into a practical workspace filled with learning materials.",
          "text_en": "The coffee table has been transformed into a practical workspace filled with learning materials.",
          "text_ja": "ローテーブルは学習用品で満たされた実用的な作業場所へ変えられています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "pink mug",
      "label_ja": "ピンクのマグカップ",
      "category": "object",
      "importance": "secondary",
      "description": "A pink mug with white dots sits beside the English books on the coffee table.",
      "bounding_box_conceptual": [
        60,
        27,
        12,
        8
      ],
      "color": [
        "pink",
        "white",
        "cream"
      ],
      "attributes": [
        "ceramic",
        "decorated",
        "round",
        "warm-looking"
      ],
      "action": [
        "sitting on the table",
        "holding a drink"
      ],
      "synonyms_and_related_words": [
        "mug",
        "pink mug",
        "cup",
        "ceramic mug",
        "hot drink",
        "warm drink",
        "tea",
        "coffee"
      ],
      "accepted_words": [
        "mug",
        "pink mug",
        "cup",
        "ceramic mug",
        "hot drink",
        "warm drink",
        "tea",
        "coffee"
      ],
      "common_typos": [
        "mugg",
        "pink mugg",
        "ceremic mug",
        "hot drnik",
        "cofee"
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
            "en": "mug",
            "ja": "マグカップ"
          }
        ],
        "B1": [
          {
            "en": "warm drink",
            "ja": "温かい飲み物"
          }
        ],
        "B2": [
          {
            "en": "a comforting beverage beside the study books",
            "ja": "学習本のそばにある心を落ち着かせる飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small cup of comfort beside the grammar books",
          "ja": "文法書のそばにある小さな安らぎ"
        },
        {
          "en": "a warm pause waiting between study tasks",
          "ja": "学習課題の間に待つ温かな休憩"
        },
        {
          "en": "a cheerful pink detail among serious study materials",
          "ja": "真面目な学習用品の中にある明るいピンクの細部"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mug, cup, drink, pink",
          "text_en": "mug, cup, drink, pink",
          "text_ja": "マグカップ、カップ、飲み物、ピンク"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a pink mug on the table.",
          "text_en": "There is a pink mug on the table.",
          "text_ja": "テーブルの上にピンクのマグカップがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a pink mug with white dots beside the books",
          "text_en": "a pink mug with white dots beside the books",
          "text_ja": "本のそばにある白い水玉のピンクのマグカップ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The cheerful mug adds warmth and personality to the otherwise academic workspace.",
          "text_en": "The cheerful mug adds warmth and personality to the otherwise academic workspace.",
          "text_ja": "明るいマグカップが、学習中心の作業空間に温かさと個性を加えています。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "candle and plant",
      "label_ja": "キャンドルと植物",
      "category": "object",
      "importance": "secondary",
      "description": "A glowing candle in a glass holder and a small potted plant stand on the right side of the coffee table.",
      "bounding_box_conceptual": [
        63,
        75,
        15,
        18
      ],
      "color": [
        "golden",
        "green",
        "white",
        "transparent"
      ],
      "attributes": [
        "glowing",
        "small",
        "decorative",
        "natural",
        "warm"
      ],
      "action": [
        "giving off light",
        "decorating the table",
        "adding freshness"
      ],
      "synonyms_and_related_words": [
        "candle",
        "glass candle",
        "candlelight",
        "flame",
        "plant",
        "potted plant",
        "small plant",
        "greenery"
      ],
      "accepted_words": [
        "candle",
        "glass candle",
        "candlelight",
        "flame",
        "plant",
        "potted plant",
        "small plant",
        "greenery"
      ],
      "common_typos": [
        "candel",
        "glass candel",
        "candle ligth",
        "palnt",
        "potted palnt",
        "greenary"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "candle and plant",
            "ja": "キャンドルと植物"
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
            "en": "soft candlelight",
            "ja": "柔らかなキャンドルの光"
          }
        ],
        "B2": [
          {
            "en": "natural decoration illuminated by a small flame",
            "ja": "小さな炎に照らされた自然の装飾"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a tiny flame and living leaves sharing the table",
          "ja": "小さな炎と生きた葉が並ぶテーブル"
        },
        {
          "en": "warm light and greenery balancing the technology",
          "ja": "テクノロジーと調和する暖かな光と緑"
        },
        {
          "en": "a small island of nature beside the laptop",
          "ja": "パソコンのそばにある小さな自然の島"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "candle, plant, light, green",
          "text_en": "candle, plant, light, green",
          "text_ja": "キャンドル、植物、光、緑"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A candle and a plant are on the table.",
          "text_en": "A candle and a plant are on the table.",
          "text_ja": "キャンドルと植物がテーブルの上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a glowing glass candle beside a small potted plant",
          "text_en": "a glowing glass candle beside a small potted plant",
          "text_ja": "小さな鉢植えのそばで光るガラス製キャンドル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The candle and plant soften the technological study setup and create a calm atmosphere.",
          "text_en": "The candle and plant soften the technological study setup and create a calm atmosphere.",
          "text_ja": "キャンドルと植物がデジタル中心の学習環境をやわらげ、落ち着いた雰囲気を作っています。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "sofa and cushions",
      "label_ja": "ソファとクッション",
      "category": "furniture",
      "importance": "primary",
      "description": "A large gray sofa supports the woman and is decorated with pink, cream, and gray cushions and a knitted pink blanket.",
      "bounding_box_conceptual": [
        34,
        0,
        54,
        83
      ],
      "color": [
        "gray",
        "pink",
        "cream",
        "brown"
      ],
      "attributes": [
        "large",
        "soft",
        "comfortable",
        "cushioned",
        "cozy"
      ],
      "action": [
        "supporting the woman",
        "holding cushions",
        "providing a study seat"
      ],
      "synonyms_and_related_words": [
        "sofa",
        "couch",
        "gray sofa",
        "cushions",
        "pillows",
        "blanket",
        "throw blanket",
        "comfortable seat"
      ],
      "accepted_words": [
        "sofa",
        "couch",
        "gray sofa",
        "cushions",
        "pillows",
        "blanket",
        "throw blanket",
        "comfortable seat"
      ],
      "common_typos": [
        "soffa",
        "cauch",
        "cushons",
        "pilllows",
        "blankit",
        "comfortible seat"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sofa",
            "ja": "ソファ"
          }
        ],
        "A2": [
          {
            "en": "cushions and blanket",
            "ja": "クッションと毛布"
          }
        ],
        "B1": [
          {
            "en": "comfortable couch",
            "ja": "座り心地のよいソファ"
          }
        ],
        "B2": [
          {
            "en": "a softly layered study seat",
            "ja": "柔らかな物を重ねた学習用の座席"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a soft classroom made from cushions and a blanket",
          "ja": "クッションと毛布でできた柔らかな教室"
        },
        {
          "en": "a comfortable base for serious study",
          "ja": "真剣な勉強を支える快適な場所"
        },
        {
          "en": "the place where rest and learning meet",
          "ja": "休息と学習が出会う場所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sofa, cushion, blanket, soft",
          "text_en": "sofa, cushion, blanket, soft",
          "text_ja": "ソファ、クッション、毛布、柔らかい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is sitting on the sofa.",
          "text_en": "The woman is sitting on the sofa.",
          "text_ja": "女性はソファに座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a gray sofa covered with soft cushions and a pink blanket",
          "text_en": "a gray sofa covered with soft cushions and a pink blanket",
          "text_ja": "柔らかなクッションとピンクの毛布がある灰色のソファ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sofa, layered with cushions and a blanket, provides a comfortable place for independent study.",
          "text_en": "The sofa, layered with cushions and a blanket, provides a comfortable place for independent study.",
          "text_ja": "クッションと毛布が重ねられたソファが、自主学習に快適な場所を与えています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "window and night city",
      "label_ja": "窓と夜の街",
      "category": "setting",
      "importance": "primary",
      "description": "A large window behind the sofa reveals a crescent moon, a starry sky, dark buildings, and many city lights.",
      "bounding_box_conceptual": [
        0,
        0,
        37,
        52
      ],
      "color": [
        "dark blue",
        "black",
        "white",
        "orange"
      ],
      "attributes": [
        "large",
        "clear",
        "moonlit",
        "starry",
        "urban"
      ],
      "action": [
        "showing the night sky",
        "revealing city lights",
        "connecting the room to the outside"
      ],
      "synonyms_and_related_words": [
        "window",
        "large window",
        "night view",
        "city lights",
        "crescent moon",
        "night sky",
        "cityscape",
        "urban view"
      ],
      "accepted_words": [
        "window",
        "large window",
        "night view",
        "city lights",
        "crescent moon",
        "night sky",
        "cityscape",
        "urban view"
      ],
      "common_typos": [
        "windo",
        "winow",
        "night veiw",
        "city ligths",
        "cresant moon",
        "city scape"
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
            "en": "an urban nightscape under a crescent moon",
            "ja": "三日月の下に広がる都会の夜景"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the crescent moon watching over her lesson",
          "ja": "彼女の学習を見守る三日月"
        },
        {
          "en": "a city of lights beyond the quiet room",
          "ja": "静かな部屋の向こうに広がる光の街"
        },
        {
          "en": "the sleeping city forming a dark classroom wall",
          "ja": "暗い教室の壁のように広がる眠る街"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, moon, city, lights",
          "text_en": "window, moon, city, lights",
          "text_ja": "窓、月、街、明かり"
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
          "text": "a crescent moon above a brightly lit city",
          "text_en": "a crescent moon above a brightly lit city",
          "text_ja": "明るく光る街の上にある三日月"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Beyond the window, the crescent moon and scattered city lights form a peaceful nighttime background.",
          "text_en": "Beyond the window, the crescent moon and scattered city lights form a peaceful nighttime background.",
          "text_ja": "窓の向こうでは、三日月と点在する街の光が穏やかな夜の背景を作っています。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "floor lamp and plants",
      "label_ja": "フロアランプと植物",
      "category": "lighting",
      "importance": "primary",
      "description": "A tall tripod floor lamp with a cream shade stands behind the sofa near several leafy plants and casts warm golden light across the room.",
      "bounding_box_conceptual": [
        9,
        50,
        39,
        35
      ],
      "color": [
        "cream",
        "brown",
        "green",
        "golden"
      ],
      "attributes": [
        "tall",
        "tripod",
        "warm",
        "bright",
        "leafy"
      ],
      "action": [
        "shining",
        "illuminating the room",
        "decorating the space"
      ],
      "synonyms_and_related_words": [
        "floor lamp",
        "standing lamp",
        "tripod lamp",
        "plant",
        "large plant",
        "houseplant",
        "greenery"
      ],
      "accepted_words": [
        "floor lamp",
        "standing lamp",
        "tripod lamp",
        "plant",
        "large plant",
        "houseplant",
        "greenery"
      ],
      "common_typos": [
        "flor lamp",
        "floor lamb",
        "standing lamb",
        "tripod lamb",
        "palnt",
        "greenary"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lamp and plant",
            "ja": "ランプと植物"
          }
        ],
        "A2": [
          {
            "en": "floor lamp",
            "ja": "フロアランプ"
          }
        ],
        "B1": [
          {
            "en": "warm ambient light",
            "ja": "暖かな間接光"
          }
        ],
        "B2": [
          {
            "en": "a primary source of golden illumination framed by greenery",
            "ja": "緑に囲まれた金色の主照明"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a tall indoor sun rising behind the sofa",
          "ja": "ソファの後ろに昇る室内の太陽"
        },
        {
          "en": "golden light filtering through green leaves",
          "ja": "緑の葉を通る金色の光"
        },
        {
          "en": "a warm beacon beside the nighttime study space",
          "ja": "夜の学習空間のそばにある暖かな光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "lamp, plant, light, warm",
          "text_en": "lamp, plant, light, warm",
          "text_ja": "ランプ、植物、光、暖かい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A floor lamp is behind the sofa.",
          "text_en": "A floor lamp is behind the sofa.",
          "text_ja": "フロアランプがソファの後ろにあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a tall floor lamp casting warm light over the room",
          "text_en": "a tall floor lamp casting warm light over the room",
          "text_ja": "部屋全体に暖かな光を放つ背の高いフロアランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lamp and surrounding greenery create a warm visual frame around the woman's study area.",
          "text_en": "The lamp and surrounding greenery create a warm visual frame around the woman's study area.",
          "text_ja": "ランプと周囲の緑が、女性の学習場所を暖かく縁取っています。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "bookshelf and decorations",
      "label_ja": "本棚と装飾",
      "category": "decoration",
      "importance": "secondary",
      "description": "A wooden bookshelf on the right contains books, framed pictures, a candle, and small plants, while string lights glow along the wall above it.",
      "bounding_box_conceptual": [
        4,
        73,
        60,
        27
      ],
      "color": [
        "brown",
        "green",
        "golden",
        "cream"
      ],
      "attributes": [
        "wooden",
        "organized",
        "decorative",
        "personal",
        "glowing"
      ],
      "action": [
        "holding books",
        "displaying pictures",
        "supporting candles and plants"
      ],
      "synonyms_and_related_words": [
        "bookshelf",
        "bookcase",
        "shelf",
        "books",
        "framed picture",
        "candle",
        "plant",
        "string lights",
        "fairy lights"
      ],
      "accepted_words": [
        "bookshelf",
        "bookcase",
        "shelf",
        "books",
        "framed picture",
        "candle",
        "plant",
        "string lights",
        "fairy lights"
      ],
      "common_typos": [
        "book shelf",
        "book case",
        "shelff",
        "framed pictur",
        "candel",
        "string ligths"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bookshelf",
            "ja": "本棚"
          }
        ],
        "A2": [
          {
            "en": "bookcase and pictures",
            "ja": "本棚と写真"
          }
        ],
        "B1": [
          {
            "en": "decorative storage",
            "ja": "装飾を兼ねた収納"
          }
        ],
        "B2": [
          {
            "en": "a personalized background of books, art, and warm light",
            "ja": "本、絵、暖かな光で構成された個人的な背景"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wall of books and memories glowing behind her",
          "ja": "彼女の後ろで光る本と思い出の壁"
        },
        {
          "en": "a quiet library built into the living room",
          "ja": "リビングの中に作られた静かな図書館"
        },
        {
          "en": "warm lights connecting every personal object on the shelf",
          "ja": "棚の個人的な物をつなぐ暖かな光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bookshelf, books, picture, lights",
          "text_en": "bookshelf, books, picture, lights",
          "text_ja": "本棚、本、絵、ライト"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many books on the shelf.",
          "text_en": "There are many books on the shelf.",
          "text_ja": "棚にはたくさんの本があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden bookshelf decorated with plants, pictures, and lights",
          "text_en": "a wooden bookshelf decorated with plants, pictures, and lights",
          "text_ja": "植物、絵、ライトで飾られた木製の本棚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The decorated bookshelf makes the living room feel both intellectual and personal.",
          "text_en": "The decorated bookshelf makes the living room feel both intellectual and personal.",
          "text_ja": "飾られた本棚が、リビングを知的で個人的な空間にしています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "blue book on the left side of the coffee table",
      "content": "ENGLISH GRAMMAR",
      "description_ja": "英語文法の学習書を示すタイトル。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "English, grammar, book, study",
          "text_en": "English, grammar, book, study",
          "text_ja": "英語、文法、本、勉強"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "English grammar means 英文法。",
          "text_en": "English grammar means 英文法。",
          "text_ja": "English grammar は「英文法」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "One of the books is titled...",
          "text_en": "One of the books is titled...",
          "text_ja": "本の1冊には……という題名があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The book titled 'English Grammar' indicates that she is studying language structure and rules.",
          "text_en": "The book titled 'English Grammar' indicates that she is studying language structure and rules.",
          "text_ja": "「English Grammar」という本から、彼女が英語の構造や規則を学んでいることが分かります。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "red book in the stack",
      "content": "VOCABULARY BUILDER",
      "description_ja": "英単語力を高めるための学習書を示すタイトル。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "vocabulary, word, book, learn",
          "text_en": "vocabulary, word, book, learn",
          "text_ja": "語彙、単語、本、学ぶ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Vocabulary means 語彙。",
          "text_en": "Vocabulary means 語彙。",
          "text_ja": "Vocabulary は「語彙」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Another book focuses on...",
          "text_en": "Another book focuses on...",
          "text_ja": "別の本は……を扱っています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The vocabulary book suggests that she is expanding the range of words she can understand and use.",
          "text_en": "The vocabulary book suggests that she is expanding the range of words she can understand and use.",
          "text_ja": "語彙の本から、彼女が理解し使用できる単語の幅を広げていることが分かります。"
        }
      ]
    },
    {
      "id": "text_003",
      "location": "green book at the bottom of the stack",
      "content": "Communication in English",
      "description_ja": "英語でのコミュニケーションを学ぶための教材タイトル。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "communication, English, speak, book",
          "text_en": "communication, English, speak, book",
          "text_ja": "コミュニケーション、英語、話す、本"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Communication in English means 英語でのコミュニケーション。",
          "text_en": "Communication in English means 英語でのコミュニケーション。",
          "text_ja": "Communication in English は「英語でのコミュニケーション」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The green book is about...",
          "text_en": "The green book is about...",
          "text_ja": "緑の本は……についての本です。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The communication textbook shows that her study includes practical language use as well as grammar and vocabulary.",
          "text_en": "The communication textbook shows that her study includes practical language use as well as grammar and vocabulary.",
          "text_ja": "コミュニケーションの教科書から、彼女の学習が文法や語彙だけでなく実際の言語使用も含むことが分かります。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Writing notes in a notebook",
      "description_ja": "ノートにメモを書いている",
      "involved_elements": [
        "element_001",
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "write",
        "writing",
        "write notes",
        "take notes",
        "taking notes",
        "write in a notebook",
        "record information"
      ],
      "accepted_words": [
        "write",
        "writing",
        "write notes",
        "take notes",
        "taking notes",
        "write in a notebook",
        "record information"
      ],
      "common_typos": [
        "writting",
        "writeing",
        "taking nots",
        "write in a notbook",
        "recrod information"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "write",
            "ja": "書く"
          }
        ],
        "A2": [
          {
            "en": "take notes",
            "ja": "ノートを取る"
          }
        ],
        "B1": [
          {
            "en": "record information",
            "ja": "情報を書き留める"
          }
        ],
        "B2": [
          {
            "en": "summarize digital information in handwritten form",
            "ja": "デジタル情報を手書きで要約する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning information from the screen into her own words",
          "ja": "画面の情報を自分の言葉へ変えている"
        },
        {
          "en": "building a bridge from technology to memory",
          "ja": "テクノロジーから記憶への橋を作っている"
        },
        {
          "en": "leaving visible tracks of her learning on the page",
          "ja": "ページに学びの跡を残している"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "write, notebook, pen, notes",
          "text_en": "write, notebook, pen, notes",
          "text_ja": "書く、ノート、ペン、メモ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is writing in a notebook.",
          "text_en": "The woman is writing in a notebook.",
          "text_ja": "女性はノートに書いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "take notes while looking at the laptop",
          "text_en": "take notes while looking at the laptop",
          "text_ja": "パソコンを見ながらノートを取る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Writing steadily in her notebook, she records information gathered from the laptop.",
          "text_en": "Writing steadily in her notebook, she records information gathered from the laptop.",
          "text_ja": "ノートに着実に書きながら、パソコンから得た情報を記録しています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Using a laptop for study",
      "description_ja": "学習のためにノートパソコンを使っている",
      "involved_elements": [
        "element_001",
        "element_002"
      ],
      "synonyms": [
        "use a laptop",
        "using a laptop",
        "study online",
        "look at the screen",
        "research information",
        "learn with a computer",
        "work on a laptop"
      ],
      "accepted_words": [
        "use a laptop",
        "using a laptop",
        "study online",
        "look at the screen",
        "research information",
        "learn with a computer",
        "work on a laptop"
      ],
      "common_typos": [
        "useing a laptop",
        "using a labtop",
        "study on line",
        "look at the screan",
        "reserch information"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "use a computer",
            "ja": "コンピューターを使う"
          }
        ],
        "A2": [
          {
            "en": "use a laptop",
            "ja": "ノートパソコンを使う"
          }
        ],
        "B1": [
          {
            "en": "study online",
            "ja": "オンラインで学習する"
          }
        ],
        "B2": [
          {
            "en": "access digital learning resources",
            "ja": "デジタル学習教材へアクセスする"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "opening a digital classroom on the coffee table",
          "ja": "ローテーブルの上にデジタル教室を開いている"
        },
        {
          "en": "using technology as a window into English",
          "ja": "英語への窓としてテクノロジーを使っている"
        },
        {
          "en": "connecting her quiet room with a world of information",
          "ja": "静かな部屋を情報の世界へつないでいる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is using a laptop.",
          "text_en": "She is using a laptop.",
          "text_ja": "彼女はノートパソコンを使っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "laptop, screen, computer, study",
          "text_en": "laptop, screen, computer, study",
          "text_ja": "ノートパソコン、画面、コンピューター、勉強"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "use an open laptop to study English",
          "text_en": "use an open laptop to study English",
          "text_ja": "開いたノートパソコンを使って英語を学ぶ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Using the laptop as a digital resource, she supports her handwritten study with online information.",
          "text_en": "Using the laptop as a digital resource, she supports her handwritten study with online information.",
          "text_ja": "パソコンをデジタル教材として使い、オンライン情報で手書き学習を補っています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Studying English at home",
      "description_ja": "自宅で英語を勉強している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_005"
      ],
      "synonyms": [
        "study English",
        "learn English",
        "practice English",
        "review grammar",
        "build vocabulary",
        "study communication",
        "do English homework"
      ],
      "accepted_words": [
        "study English",
        "learn English",
        "practice English",
        "review grammar",
        "build vocabulary",
        "study communication",
        "do English homework"
      ],
      "common_typos": [
        "study Engrish",
        "lern English",
        "practice Engish",
        "review grammer",
        "build vocaburary",
        "do English home work"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "study English",
            "ja": "英語を勉強する"
          }
        ],
        "A2": [
          {
            "en": "practice English",
            "ja": "英語を練習する"
          }
        ],
        "B1": [
          {
            "en": "review grammar and vocabulary",
            "ja": "文法と語彙を復習する"
          }
        ],
        "B2": [
          {
            "en": "develop several areas of language proficiency",
            "ja": "言語能力の複数の分野を伸ばす"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "building English one word, rule, and sentence at a time",
          "ja": "単語、規則、文を一つずつ積み上げて英語を学ぶ"
        },
        {
          "en": "turning the living room into a language laboratory",
          "ja": "リビングを言語研究室へ変える"
        },
        {
          "en": "studying the structures that connect people across the world",
          "ja": "世界の人々をつなぐ言語の構造を学ぶ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is studying English at home.",
          "text_en": "She is studying English at home.",
          "text_ja": "彼女は自宅で英語を勉強しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "study grammar, vocabulary, and communication skills",
          "text_en": "study grammar, vocabulary, and communication skills",
          "text_ja": "文法、語彙、コミュニケーション技能を学ぶ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Surrounded by English textbooks and digital materials, she is developing several aspects of her language ability.",
          "text_en": "Surrounded by English textbooks and digital materials, she is developing several aspects of her language ability.",
          "text_ja": "英語の教科書とデジタル教材に囲まれ、言語能力の複数の側面を伸ばしています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Sitting on the sofa and leaning forward",
      "description_ja": "ソファに座って前かがみになっている",
      "involved_elements": [
        "element_001",
        "element_009",
        "element_006"
      ],
      "synonyms": [
        "sit on the sofa",
        "sitting on the couch",
        "lean forward",
        "bend toward the table",
        "work from the sofa",
        "sit comfortably"
      ],
      "accepted_words": [
        "sit on the sofa",
        "sitting on the couch",
        "lean forward",
        "bend toward the table",
        "work from the sofa",
        "sit comfortably"
      ],
      "common_typos": [
        "siting on the sofa",
        "sitting on the cauch",
        "lean foward",
        "bend toword",
        "sit comfortibly"
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
            "en": "sit on the sofa",
            "ja": "ソファに座る"
          }
        ],
        "B1": [
          {
            "en": "lean forward",
            "ja": "前かがみになる"
          }
        ],
        "B2": [
          {
            "en": "adopt a concentrated working posture",
            "ja": "集中した作業姿勢を取る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "leaning from comfort toward concentration",
          "ja": "くつろぎから集中へ身を傾ける"
        },
        {
          "en": "turning a relaxed seat into an active study position",
          "ja": "くつろぐ座席を積極的な学習姿勢へ変える"
        },
        {
          "en": "bringing her attention closer to the page and screen",
          "ja": "注意をページと画面へ近づける"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is sitting on the sofa.",
          "text_en": "She is sitting on the sofa.",
          "text_ja": "彼女はソファに座っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "on the sofa / in front of the table",
          "text_en": "on the sofa / in front of the table",
          "text_ja": "ソファの上で／テーブルの前で"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sit on the sofa and lean toward the coffee table",
          "text_en": "sit on the sofa and lean toward the coffee table",
          "text_ja": "ソファに座りローテーブルへ身を傾ける"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Leaning forward from the sofa, she adopts a focused posture that keeps the notebook and laptop within easy reach.",
          "text_en": "Leaning forward from the sofa, she adopts a focused posture that keeps the notebook and laptop within easy reach.",
          "text_ja": "ソファから前へ身を傾け、ノートとパソコンに手が届きやすい集中した姿勢を取っています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Warm light illuminating the room",
      "description_ja": "暖かな光が部屋を照らしている",
      "involved_elements": [
        "element_008",
        "element_011",
        "element_012"
      ],
      "synonyms": [
        "warm light fills the room",
        "lamp illuminates the room",
        "candle glows",
        "string lights shine",
        "soft light spreads",
        "golden light surrounds her"
      ],
      "accepted_words": [
        "warm light fills the room",
        "lamp illuminates the room",
        "candle glows",
        "string lights shine",
        "soft light spreads",
        "golden light surrounds her"
      ],
      "common_typos": [
        "warm ligth",
        "iluminates",
        "candel glows",
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
            "en": "soft illumination creates a calm mood",
            "ja": "柔らかな照明が落ち着いた雰囲気を作る"
          }
        ],
        "B2": [
          {
            "en": "layered ambient lighting produces an intimate study environment",
            "ja": "重なった間接光が親密な学習環境を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden light gathering around the books and screen",
          "ja": "本と画面の周りに集まる金色の光"
        },
        {
          "en": "several small suns warming the nighttime room",
          "ja": "夜の部屋を温めるいくつかの小さな太陽"
        },
        {
          "en": "light turning an ordinary living room into a safe study space",
          "ja": "普通のリビングを安心できる学習空間へ変える光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Warm light is filling the room.",
          "text_en": "Warm light is filling the room.",
          "text_ja": "暖かな光が部屋を満たしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "soft lamp light, candlelight, and string lights",
          "text_en": "soft lamp light, candlelight, and string lights",
          "text_ja": "柔らかなランプ、キャンドル、ストリングライトの光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Illuminated by several warm light sources, the living room feels calm, personal, and suitable for focused study.",
          "text_en": "Illuminated by several warm light sources, the living room feels calm, personal, and suitable for focused study.",
          "text_ja": "いくつかの暖かな光源に照らされ、リビングは落ち着いて個人的で集中学習に適した空間に感じられます。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "The moon and city lights shining outside",
      "description_ja": "月と街の明かりが外で輝いている",
      "involved_elements": [
        "element_010"
      ],
      "synonyms": [
        "moon shines",
        "crescent moon is visible",
        "city lights shine",
        "buildings glow",
        "stars twinkle",
        "night city is visible"
      ],
      "accepted_words": [
        "moon shines",
        "crescent moon is visible",
        "city lights shine",
        "buildings glow",
        "stars twinkle",
        "night city is visible"
      ],
      "common_typos": [
        "mooon shines",
        "cresant moon",
        "city ligths",
        "bildings glow",
        "stars twinkel"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "moon and lights shine",
            "ja": "月と明かりが輝く"
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
            "en": "buildings glow beneath the moon",
            "ja": "建物が月の下で光る"
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
          "en": "the crescent moon watching over the late lesson",
          "ja": "夜遅くの学習を見守る三日月"
        },
        {
          "en": "a city of small lights beyond her private classroom",
          "ja": "自分だけの教室の向こうに広がる小さな光の街"
        },
        {
          "en": "the outside world glowing quietly while she studies",
          "ja": "彼女が勉強する間、静かに光る外の世界"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The moon and city lights are shining outside.",
          "text_en": "The moon and city lights are shining outside.",
          "text_ja": "月と街の明かりが外で輝いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a crescent moon above buildings full of lights",
          "text_en": "a crescent moon above buildings full of lights",
          "text_ja": "明かりのついた建物の上にある三日月"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Beyond the window, the crescent moon and illuminated buildings form a calm contrast with the warm interior.",
          "text_en": "Beyond the window, the crescent moon and illuminated buildings form a calm contrast with the warm interior.",
          "text_ja": "窓の向こうでは、三日月と明るい建物が暖かな室内と穏やかな対比を作っています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Combining digital and traditional study methods",
      "description_ja": "デジタルと紙の学習方法を組み合わせている",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "use a laptop and notebook",
        "combine digital and paper study",
        "study with books and technology",
        "take notes from the screen",
        "use multiple learning resources"
      ],
      "accepted_words": [
        "use a laptop and notebook",
        "combine digital and paper study",
        "study with books and technology",
        "take notes from the screen",
        "use multiple learning resources"
      ],
      "common_typos": [
        "use a labtop and notebook",
        "combind digital",
        "paper studdy",
        "take nots from the screan",
        "learning resorces"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "use a laptop and notebook",
            "ja": "パソコンとノートを使う"
          }
        ],
        "A2": [
          {
            "en": "study with books and technology",
            "ja": "本とテクノロジーで学ぶ"
          }
        ],
        "B1": [
          {
            "en": "combine digital and handwritten learning",
            "ja": "デジタル学習と手書き学習を組み合わせる"
          }
        ],
        "B2": [
          {
            "en": "integrate multiple learning resources into one study process",
            "ja": "複数の学習教材を一つの学習過程へ統合する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "joining screen, paper, and printed books in one lesson",
          "ja": "画面、紙、本を一つの学習へ結びつける"
        },
        {
          "en": "moving ideas from digital space into handwritten memory",
          "ja": "デジタル空間の考えを手書きの記憶へ移す"
        },
        {
          "en": "building a personal learning system across several tools",
          "ja": "複数の道具を使って自分の学習システムを作る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is using a laptop, a notebook, and books.",
          "text_en": "She is using a laptop, a notebook, and books.",
          "text_ja": "彼女はパソコン、ノート、本を使っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "combine online information with handwritten notes",
          "text_en": "combine online information with handwritten notes",
          "text_ja": "オンライン情報と手書きのメモを組み合わせる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "By combining digital information, printed textbooks, and handwritten notes, she creates a balanced and flexible study method.",
          "text_en": "By combining digital information, printed textbooks, and handwritten notes, she creates a balanced and flexible study method.",
          "text_ja": "デジタル情報、紙の教科書、手書きのメモを組み合わせ、バランスがよく柔軟な学習方法を作っています。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "young woman",
      "relationship": "on",
      "object": "sofa",
      "example_beginner": "The woman is on the sofa.",
      "example_intermediate": "The young woman is sitting on the gray sofa."
    },
    {
      "subject": "coffee table",
      "relationship": "in front of",
      "object": "sofa",
      "example_beginner": "The table is in front of the sofa.",
      "example_intermediate": "A large wooden coffee table stands in front of the sofa."
    },
    {
      "subject": "notebook",
      "relationship": "in front of",
      "object": "young woman",
      "example_beginner": "The notebook is in front of her.",
      "example_intermediate": "An open notebook lies directly in front of the young woman."
    },
    {
      "subject": "laptop",
      "relationship": "to the right of",
      "object": "notebook",
      "example_beginner": "The laptop is to the right of the notebook.",
      "example_intermediate": "An open black laptop is positioned to the right of the notebook."
    },
    {
      "subject": "English books",
      "relationship": "to the left of",
      "object": "notebook",
      "example_beginner": "The books are to the left of the notebook.",
      "example_intermediate": "Three English study books are stacked to the left of the notebook."
    },
    {
      "subject": "mug",
      "relationship": "beside",
      "object": "English books",
      "example_beginner": "The mug is beside the books.",
      "example_intermediate": "A pink mug sits beside the stack of English books."
    },
    {
      "subject": "candle",
      "relationship": "beside",
      "object": "plant",
      "example_beginner": "The candle is beside the plant.",
      "example_intermediate": "A glowing glass candle stands beside a small potted plant."
    },
    {
      "subject": "floor lamp",
      "relationship": "behind",
      "object": "sofa",
      "example_beginner": "The lamp is behind the sofa.",
      "example_intermediate": "A tall floor lamp stands behind the right side of the sofa."
    },
    {
      "subject": "large window",
      "relationship": "behind",
      "object": "sofa",
      "example_beginner": "The window is behind the sofa.",
      "example_intermediate": "A large window showing the city at night is behind the sofa."
    },
    {
      "subject": "moon",
      "relationship": "through",
      "object": "window",
      "example_beginner": "The moon can be seen through the window.",
      "example_intermediate": "A crescent moon is visible through the large window."
    },
    {
      "subject": "bookshelf",
      "relationship": "to the right of",
      "object": "sofa",
      "example_beginner": "The bookshelf is to the right of the sofa.",
      "example_intermediate": "A wooden bookshelf stands to the right of the sofa."
    },
    {
      "subject": "basket",
      "relationship": "under",
      "object": "coffee table",
      "example_beginner": "The basket is under the table.",
      "example_intermediate": "A woven storage basket rests on the lower shelf under the coffee table."
    }
  ],
  "adjective_library": {
    "person": [
      "young",
      "focused",
      "calm",
      "comfortable",
      "hardworking",
      "independent",
      "attentive"
    ],
    "living_room": [
      "cozy",
      "warm",
      "quiet",
      "organized",
      "inviting",
      "personal",
      "softly lit"
    ],
    "study_materials": [
      "educational",
      "organized",
      "open",
      "stacked",
      "digital",
      "printed",
      "handwritten"
    ],
    "sofa": [
      "large",
      "gray",
      "soft",
      "comfortable",
      "cushioned",
      "cozy"
    ],
    "light": [
      "warm",
      "golden",
      "soft",
      "gentle",
      "glowing",
      "ambient",
      "flickering"
    ],
    "night_view": [
      "dark",
      "starry",
      "urban",
      "moonlit",
      "distant",
      "illuminated"
    ],
    "atmosphere": [
      "focused",
      "peaceful",
      "productive",
      "serene",
      "comfortable",
      "dreamy",
      "studious"
    ]
  },
  "preposition_library": [
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The woman is sitting on the sofa."
    },
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "She is studying in the living room."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The coffee table is in front of the sofa."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The laptop is to the right of the notebook."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The English books are to the left of the notebook."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The mug is beside the books."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The floor lamp is behind the sofa."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "The moon can be seen through the window."
    },
    {
      "preposition": "under",
      "meaning_ja": "〜の下に",
      "example": "A basket is under the coffee table."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って、〜とともに",
      "example": "She is studying with a laptop, books, and a notebook."
    },
    {
      "preposition": "at night",
      "meaning_ja": "夜に",
      "example": "She is studying at night."
    },
    {
      "preposition": "while",
      "meaning_ja": "〜している間に",
      "example": "She writes while looking at the laptop."
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
        "The woman is studying English.",
        "She is writing in a notebook.",
        "She is using a laptop."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で今している動作を表します。",
        "Scene 008では woman + is studying + English が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "テーブルやリビングにある物を説明する。",
      "examples": [
        "There is a laptop on the table.",
        "There is a candle beside the plant.",
        "There are several English books on the table."
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
        "The woman is focused.",
        "The living room is cozy.",
        "The light is warm."
      ],
      "hints": [
        "focused, cozy, warm などをbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The woman is on the sofa.",
        "The table is in front of the sofa.",
        "The laptop is beside the notebook."
      ],
      "hints": [
        "on, in front of, beside, behind, through などを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + verb + adverb",
      "label_ja": "副詞を使った動作の説明",
      "level": "intermediate",
      "purpose_ja": "動作がどのように行われているかを表す。",
      "examples": [
        "She writes carefully.",
        "She studies quietly.",
        "The candle glows softly."
      ],
      "hints": [
        "carefully, quietly, softly などを使うと、動作や雰囲気が具体的になります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を加える。",
      "examples": [
        "The woman who is studying looks focused.",
        "The laptop that is on the table is open.",
        "The window, which shows the city, is behind the sofa."
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
      "purpose_ja": "物が置かれている、並べられている、照らされている状態を表す。",
      "examples": [
        "The books are stacked on the table.",
        "The room is illuminated by warm light.",
        "The notebook is placed beside the laptop."
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
        "The woman, holding a pen, is looking at the laptop.",
        "The candle, glowing softly, warms the scene.",
        "The city lights, shining outside, create a calm background."
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
        "Holding a pen, she writes notes while looking at the laptop.",
        "Leaning forward from the sofa, she concentrates on her work.",
        "Glowing softly, the candle adds warmth to the table."
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
        "Surrounded by books and warm light, the woman studies quietly.",
        "Illuminated by a floor lamp and candles, the room feels peaceful.",
        "Placed beside the laptop, the notebook records her ideas."
      ],
      "hints": [
        "Surrounded, Illuminated, Placed などから始められます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できることを断定せずに表す。",
      "examples": [
        "It looks like she is studying English.",
        "She seems to be taking notes from an online lesson.",
        "The room appears to be arranged for comfortable study."
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
      "purpose_ja": "人物の動作と別の動作・背景を同時に説明する。",
      "examples": [
        "She writes while looking at the laptop.",
        "The candle glows as the city lights shine outside.",
        "She studies while the room remains quiet."
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
        "example": "She is on the sofa."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "She is ______ing.",
        "example": "She is studying."
      },
      {
        "step": 4,
        "question_ja": "何を使っていますか？",
        "template": "She is using ______.",
        "example": "She is using a laptop."
      },
      {
        "step": 5,
        "question_ja": "周りには何がありますか？",
        "template": "There is / are ______ on / beside / behind ______.",
        "example": "There are English books on the table."
      }
    ],
    "intermediate": [
      {
        "template": "A young woman is ______ing on ______.",
        "example": "A young woman is studying on a gray sofa."
      },
      {
        "template": "On the table, there is / are ______.",
        "example": "On the table, there are a laptop, a notebook, books, a mug, and a candle."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a floor lamp, plants, a bookshelf, and a city view."
      },
      {
        "template": "The ______ makes the room feel ______.",
        "example": "The warm light makes the room feel calm and comfortable."
      },
      {
        "template": "It looks like she is ______.",
        "example": "It looks like she is studying English with online materials."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding a pen in her right hand, the young woman writes notes while looking at the laptop."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by books, technology, and warm light, she studies quietly in the living room."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "She records information in her notebook while the laptop provides digital learning material."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The woman, who is sitting on a sofa, is using a laptop that is positioned beside an open notebook."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that she is combining online learning with traditional note-taking."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A woman is in the living room.",
      "She is sitting on a sofa.",
      "She is writing in a notebook.",
      "She is using a laptop.",
      "There are English books on the table."
    ],
    "intermediate": [
      "A young woman is studying English on a gray sofa at night.",
      "She is writing notes while looking at an open laptop.",
      "A notebook, English books, a pink mug, a candle, and a plant are arranged on the coffee table.",
      "A warm floor lamp, plants, and a bookshelf can be seen behind her.",
      "A crescent moon and city lights create a peaceful nighttime atmosphere."
    ],
    "advanced": [
      "Seated on a gray sofa, a young woman in comfortable clothes takes notes while consulting an open laptop on the coffee table.",
      "Surrounded by grammar books, vocabulary materials, a warm drink, and softly glowing candles, she appears deeply engaged in independent English study.",
      "The floor lamp, greenery, framed pictures, and string lights create a calm and personalized learning environment.",
      "Beyond the large window, a crescent moon and illuminated buildings contrast gently with the golden warmth of the room."
    ]
  },
  "full_description_support": {
    "beginner_model": "A woman is in a living room at night. She is sitting on a sofa and studying English. She is writing in a notebook and using a laptop. There are books, a mug, a candle, and a plant on the table. The room is warm and quiet.",
    "intermediate_model": "A young woman wearing a white sweatshirt is sitting on a gray sofa in a cozy living room at night. She is holding a pen and writing in an open notebook while looking at a laptop. Three English study books, a pink mug, a candle, and a small plant are arranged on the wooden coffee table. Behind her, a floor lamp, several plants, a bookshelf, framed pictures, and string lights decorate the room. Through the large window, a crescent moon and many city lights can be seen.",
    "advanced_model": "Seated on a softly cushioned gray sofa, a young woman in a loose white sweatshirt studies English in the warm quiet of the night. Leaning toward a wooden coffee table, she holds a dark pen in her right hand and writes carefully in a spiral notebook while consulting an open laptop. Beside her work are books on English grammar, vocabulary, and communication, together with a pink mug, a glowing candle, and a small potted plant. Behind her, a tall floor lamp casts golden light across the living room, where leafy plants, framed artwork, books, and string lights create a personal and intellectually inviting environment. Beyond the large window, a crescent moon hangs over a city filled with scattered lights, providing a calm contrast to the bright concentration of her indoor study space."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A woman is on a sofa. She is studying English.",
        "ja": "女性がソファにいます。彼女は英語を勉強しています。",
        "focus": "woman、sofa、studying、Englishを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "She has a laptop and a notebook. There are books on the table.",
        "ja": "彼女はノートパソコンとノートを持っています。テーブルの上には本があります。",
        "focus": "has と There are を使い、学習道具の存在を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A young woman is sitting on a sofa and writing notes while using a laptop.",
        "ja": "若い女性がソファに座り、ノートパソコンを使いながらメモを書いています。",
        "focus": "and と while を使って複数の動作をつなぐ。"
      },
      {
        "en": "She is studying English in a cozy living room with books, a mug, a candle, and plants around her.",
        "ja": "彼女は本、マグカップ、キャンドル、植物に囲まれた居心地のよいリビングで英語を勉強しています。",
        "focus": "with と around her を使って周囲の物をまとめて説明する。"
      }
    ],
    "B1": [
      {
        "en": "A focused English learner is taking notes from her laptop while sitting comfortably on the sofa.",
        "ja": "集中している英語学習者が、ソファに心地よく座りながらノートパソコンの内容をメモしています。",
        "focus": "whileを使い、同時に行われている二つの動作を表す。"
      },
      {
        "en": "The coffee table is neatly arranged with study materials, while warm light and city views create a peaceful atmosphere.",
        "ja": "ローテーブルには学習用品がきれいに並べられ、暖かな光と街の景色が穏やかな雰囲気を作っています。",
        "focus": "受動態 is arranged と while を使って物と雰囲気をつなぐ。"
      }
    ],
    "B2": [
      {
        "en": "Combining digital resources with handwritten notes, the young woman studies English independently in a living room illuminated by warm lamps and candles.",
        "ja": "デジタル教材と手書きのメモを組み合わせながら、若い女性は暖かなランプとキャンドルに照らされたリビングで自主的に英語を学んでいます。",
        "focus": "Combiningで始める現在分詞句と illuminated by を組み合わせる。"
      },
      {
        "en": "The living room, which overlooks a city glowing beneath a crescent moon, seems to provide an ideal environment for the learner, who appears to be using several resources to develop her English skills.",
        "ja": "三日月の下で光る街を見渡せるリビングは、複数の教材を使って英語力を伸ばしているように見える学習者にとって、理想的な環境を提供しているようです。",
        "focus": "whichとwhoを連続して使う関係代名詞、seems to、appears toによる推量を組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene008Data = scene008Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene008Data;
}
