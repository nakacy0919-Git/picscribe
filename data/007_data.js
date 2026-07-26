"use strict";

const scene007Data = {
  "id": "scene_007",
  "image_id": "007.webp",
  "overall_description_ja": "月と星が見える静かな夜の寝室で、ピンク色のパジャマを着た若い女性が木製の机に向かい、開いたノートにペンで文字を書いている。デスクランプがノートを明るく照らし、机の上にはマグカップ、ペンケース、本、鉛筆立て、観葉植物が並んでいる。左側には整えられたベッド、ぬいぐるみ、枕、毛布があり、ナイトテーブルにはランプ、目覚まし時計、植物が置かれている。壁の棚、写真付きのストリングライト、コルクボード、窓辺の植物、床のスリッパなどが、暖かく落ち着いた夜の学習空間を作っている。",
  "overall_description_en": "A young woman in pink pajamas is sitting at a wooden desk in a quiet bedroom at night and writing in an open notebook. A desk lamp illuminates her work, while a mug, pencil case, books, a pencil holder, and a small plant are arranged on the desk. To the left, a neatly made bed with pillows, a blanket, and a teddy bear stands beside a nightstand holding a lamp, an alarm clock, and a plant. A crescent moon and stars are visible through the window, while string lights, a shelf, a corkboard, slippers, and warm indoor lighting create a calm and cozy study atmosphere.",
  "overall_mood": [
    "cozy",
    "warm",
    "quiet",
    "focused",
    "peaceful",
    "nighttime",
    "softly lit",
    "calm",
    "studious",
    "comfortable",
    "serene",
    "organized",
    "dreamy",
    "productive"
  ],
  "mission_guides": {
    "gist": "若い女性（girl / young woman）が、机で何をしているか（writing / studying）を書こう",
    "setting": "場所（bedroom）、時間（at night）、机（desk）、窓（window）に注目しよう",
    "details": "ノート、ペン、デスクランプ、ベッド、ぬいぐるみ、月、スリッパなどを加えよう",
    "complete": "暖かな照明、星空、静かな雰囲気、夜の勉強時間まで含めて描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young woman in pink pajamas",
        "ja": "ピンクのパジャマを着た若い女性"
      },
      {
        "en": "writing in an open notebook",
        "ja": "開いたノートに書いている"
      },
      {
        "en": "studying at a wooden desk",
        "ja": "木製の机で勉強している"
      },
      {
        "en": "holding a pen and concentrating",
        "ja": "ペンを持って集中している"
      }
    ],
    "setting": [
      {
        "en": "inside a cozy bedroom at night",
        "ja": "夜の居心地のよい寝室の中で"
      },
      {
        "en": "a bed and nightstand on the left",
        "ja": "左側にあるベッドとナイトテーブル"
      },
      {
        "en": "a desk lamp, books, and a mug on the desk",
        "ja": "机の上のデスクランプ、本、マグカップ"
      },
      {
        "en": "a moonlit window behind the desk",
        "ja": "机の後ろにある月明かりの窓"
      }
    ],
    "mood": [
      {
        "en": "warm lamp light",
        "ja": "暖かなランプの光"
      },
      {
        "en": "a quiet and focused atmosphere",
        "ja": "静かで集中した雰囲気"
      },
      {
        "en": "a peaceful starry night",
        "ja": "穏やかな星空の夜"
      },
      {
        "en": "a cozy late-evening study scene",
        "ja": "居心地のよい夜遅くの学習場面"
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
        "young woman",
        "woman",
        "student",
        "teenage girl",
        "female student",
        "she",
        "learner"
      ],
      "hint_msg": "まずは「女の子（girl）」や「若い女性（young woman）」など、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は、その女性が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "writing",
        "studying",
        "sitting",
        "holding",
        "working",
        "taking notes",
        "concentrating",
        "learning"
      ],
      "hint_msg": "「書いている（is writing）」や「勉強している（is studying）」など、現在進行形で書きましょう。",
      "success_msg": "Great! 次に、何に書いているか、どこで勉強しているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "notebook",
        "desk",
        "bedroom",
        "room",
        "pen",
        "homework",
        "book",
        "night",
        "window",
        "lamp"
      ],
      "hint_msg": "「ノート（notebook）」「机（desk）」「寝室（bedroom）」「夜（at night）」などを加えましょう。",
      "success_msg": "Excellent! 次は月、星、照明、ベッド、机の上の物まで加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "studying in a bedroom at night",
    "writing in a notebook",
    "doing homework before bed",
    "a peaceful nighttime routine",
    "a cozy study space",
    "warm indoor lighting",
    "a moonlit bedroom"
  ],
  "scene_structure": {
    "foreground": [
      "wooden desk",
      "open notebook",
      "pen",
      "pink pencil case",
      "purple mug",
      "pencil holder",
      "books",
      "desk lamp"
    ],
    "midground": [
      "young woman in pink pajamas",
      "wooden chair",
      "nightstand",
      "bed",
      "teddy bear",
      "slippers"
    ],
    "background": [
      "large window",
      "crescent moon",
      "stars",
      "white curtains",
      "potted plant",
      "wall shelf",
      "string lights",
      "small photographs",
      "corkboard",
      "motivational note"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "young woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with dark hair tied in a ponytail is sitting at a desk. She is wearing pink pajamas and looking down at her notebook with a focused expression.",
      "bounding_box_conceptual": [
        25,
        50,
        72,
        40
      ],
      "color": [
        "pink",
        "brown",
        "black"
      ],
      "attributes": [
        "young",
        "focused",
        "calm",
        "hardworking",
        "comfortable"
      ],
      "action": [
        "sitting",
        "writing",
        "studying",
        "holding a pen"
      ],
      "synonyms_and_related_words": [
        "girl",
        "young woman",
        "woman",
        "student",
        "teenage girl",
        "female student",
        "learner",
        "she"
      ],
      "accepted_words": [
        "girl",
        "young woman",
        "woman",
        "student",
        "teenage girl",
        "female student",
        "learner",
        "she"
      ],
      "common_typos": [
        "gril",
        "young women",
        "womon",
        "studant",
        "femail student"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "girl",
            "ja": "女の子"
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
            "en": "a diligent student",
            "ja": "勤勉な生徒"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet student building tomorrow in the stillness of night",
          "ja": "夜の静けさの中で明日を築く生徒"
        },
        {
          "en": "a focused figure surrounded by warm light and stars",
          "ja": "暖かな光と星に囲まれた集中する人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "girl, woman, student, pink pajamas",
          "text_en": "girl, woman, student, pink pajamas",
          "text_ja": "女の子、女性、生徒、ピンクのパジャマ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A girl is studying at a desk.",
          "text_en": "A girl is studying at a desk.",
          "text_ja": "女の子が机で勉強しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young woman wearing pink pajamas",
          "text_en": "a young woman wearing pink pajamas",
          "text_ja": "ピンクのパジャマを着た若い女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The young woman, dressed in pink pajamas, is concentrating on her written work late at night.",
          "text_en": "The young woman, dressed in pink pajamas, is concentrating on her written work late at night.",
          "text_ja": "ピンクのパジャマを着た若い女性は、夜遅くに筆記課題へ集中しています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "open notebook",
      "label_ja": "開いたノート",
      "category": "object",
      "importance": "primary",
      "description": "A large open notebook with handwritten lines lies directly in front of the woman on the desk.",
      "bounding_box_conceptual": [
        61,
        60,
        14,
        26
      ],
      "color": [
        "white",
        "cream",
        "blue"
      ],
      "attributes": [
        "open",
        "lined",
        "written",
        "large"
      ],
      "action": [
        "lying on the desk",
        "being written in",
        "holding notes"
      ],
      "synonyms_and_related_words": [
        "notebook",
        "open notebook",
        "exercise book",
        "school notebook",
        "workbook",
        "notes",
        "notepad"
      ],
      "accepted_words": [
        "notebook",
        "open notebook",
        "exercise book",
        "school notebook",
        "workbook",
        "notes",
        "notepad"
      ],
      "common_typos": [
        "notbook",
        "note book",
        "notebok",
        "exersise book",
        "workbok"
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
            "en": "exercise book",
            "ja": "練習帳"
          }
        ],
        "B2": [
          {
            "en": "a written record of her study",
            "ja": "学習内容の記録"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "pages slowly filling beneath the desk lamp",
          "ja": "デスクランプの下で少しずつ埋まるページ"
        },
        {
          "en": "blank space turning into knowledge line by line",
          "ja": "一行ずつ知識へ変わる空白"
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
          "text": "an open notebook filled with handwritten notes",
          "text_en": "an open notebook filled with handwritten notes",
          "text_ja": "手書きのメモがある開いたノート"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The notebook beneath the lamp is gradually filling with careful writing.",
          "text_en": "The notebook beneath the lamp is gradually filling with careful writing.",
          "text_ja": "ランプの下のノートは丁寧な文字で少しずつ埋まっています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "pen",
      "label_ja": "ペン",
      "category": "object",
      "importance": "primary",
      "description": "The woman is holding a dark pen in her right hand and using it to write in the notebook.",
      "bounding_box_conceptual": [
        55,
        69,
        15,
        6
      ],
      "color": [
        "black",
        "dark blue",
        "silver"
      ],
      "attributes": [
        "thin",
        "dark",
        "small",
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
        "writing instrument"
      ],
      "accepted_words": [
        "pen",
        "ballpoint pen",
        "writing pen",
        "writing tool",
        "writing instrument"
      ],
      "common_typos": [
        "pne",
        "penn",
        "ball point pen",
        "writting tool"
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
            "en": "an instrument turning thought into words",
            "ja": "考えを言葉へ変える道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pen tracing the final thoughts of the day",
          "ja": "一日の最後の考えをたどるペン"
        },
        {
          "en": "the point where concentration meets the page",
          "ja": "集中力とページが出会う先端"
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
          "text": "Holding the pen steadily, she records each idea with care.",
          "text_en": "Holding the pen steadily, she records each idea with care.",
          "text_ja": "ペンを安定して持ち、彼女は考えを丁寧に書き留めています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "wooden desk",
      "label_ja": "木製の机",
      "category": "furniture",
      "importance": "primary",
      "description": "A broad wooden desk supports the notebook, lamp, mug, pencil case, books, and stationery.",
      "bounding_box_conceptual": [
        61,
        54,
        38,
        46
      ],
      "color": [
        "brown",
        "golden brown"
      ],
      "attributes": [
        "wooden",
        "broad",
        "smooth",
        "organized"
      ],
      "action": [
        "supporting study materials",
        "serving as a workspace"
      ],
      "synonyms_and_related_words": [
        "desk",
        "wooden desk",
        "study desk",
        "writing desk",
        "work table",
        "workspace"
      ],
      "accepted_words": [
        "desk",
        "wooden desk",
        "study desk",
        "writing desk",
        "work table",
        "workspace"
      ],
      "common_typos": [
        "desck",
        "dask",
        "woden desk",
        "study tabel"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "desk",
            "ja": "机"
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
            "ja": "学習スペース"
          }
        ],
        "B2": [
          {
            "en": "well-organized nighttime workstation",
            "ja": "整理された夜の作業スペース"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden island of concentration",
          "ja": "集中力を支える木の島"
        },
        {
          "en": "the quiet center of her nighttime routine",
          "ja": "夜の習慣の静かな中心"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "desk, table, wood, study",
          "text_en": "desk, table, wood, study",
          "text_ja": "机、テーブル、木、勉強"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl is sitting at a desk.",
          "text_en": "The girl is sitting at a desk.",
          "text_ja": "女の子は机に向かって座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a broad wooden study desk",
          "text_en": "a broad wooden study desk",
          "text_ja": "広い木製の勉強机"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The desk is neatly equipped with everything she needs for studying before bed.",
          "text_en": "The desk is neatly equipped with everything she needs for studying before bed.",
          "text_ja": "机には就寝前の勉強に必要な物がそろっています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "desk lamp",
      "label_ja": "デスクランプ",
      "category": "lighting",
      "importance": "primary",
      "description": "A large white adjustable desk lamp stands on the right side of the desk and shines directly onto the notebook.",
      "bounding_box_conceptual": [
        33,
        82,
        31,
        18
      ],
      "color": [
        "white",
        "cream",
        "golden"
      ],
      "attributes": [
        "adjustable",
        "large",
        "bright",
        "focused"
      ],
      "action": [
        "shining",
        "lighting the notebook",
        "illuminating the workspace"
      ],
      "synonyms_and_related_words": [
        "desk lamp",
        "lamp",
        "study lamp",
        "reading lamp",
        "adjustable lamp",
        "task light"
      ],
      "accepted_words": [
        "desk lamp",
        "lamp",
        "study lamp",
        "reading lamp",
        "adjustable lamp",
        "task light"
      ],
      "common_typos": [
        "lamb",
        "desk lamb",
        "reading ligth",
        "adjustible lamp"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lamp",
            "ja": "ランプ"
          }
        ],
        "A2": [
          {
            "en": "desk lamp",
            "ja": "デスクランプ"
          }
        ],
        "B1": [
          {
            "en": "adjustable study lamp",
            "ja": "調節可能な学習用ランプ"
          }
        ],
        "B2": [
          {
            "en": "focused task illumination",
            "ja": "集中作業用の照明"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a white moon shining over the notebook",
          "ja": "ノートの上で光る白い月"
        },
        {
          "en": "a pool of light protecting her concentration",
          "ja": "集中を守る光の輪"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "lamp, light, white, bright",
          "text_en": "lamp, light, white, bright",
          "text_ja": "ランプ、光、白い、明るい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lamp is shining on the notebook.",
          "text_en": "The lamp is shining on the notebook.",
          "text_ja": "ランプがノートを照らしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a white desk lamp casting light over the page",
          "text_en": "a white desk lamp casting light over the page",
          "text_ja": "ページに光を落とす白いデスクランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lamp creates a concentrated circle of light over her work.",
          "text_en": "The lamp creates a concentrated circle of light over her work.",
          "text_ja": "ランプが作業の上に集中した光の輪を作っています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "mug and stationery",
      "label_ja": "マグカップと文房具",
      "category": "object",
      "importance": "secondary",
      "description": "A purple mug, a pink pencil case, a pencil holder, books, and a small plant are arranged on the desk.",
      "bounding_box_conceptual": [
        53,
        82,
        28,
        18
      ],
      "color": [
        "purple",
        "pink",
        "brown",
        "green"
      ],
      "attributes": [
        "organized",
        "personal",
        "colorful",
        "practical"
      ],
      "action": [
        "resting on the desk",
        "supporting study"
      ],
      "synonyms_and_related_words": [
        "mug",
        "cup",
        "pencil case",
        "pencil holder",
        "books",
        "stationery",
        "plant"
      ],
      "accepted_words": [
        "mug",
        "cup",
        "pencil case",
        "pencil holder",
        "books",
        "stationery",
        "plant"
      ],
      "common_typos": [
        "mugg",
        "pencel case",
        "pencel holder",
        "stationary"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cup and pencils",
            "ja": "カップと鉛筆"
          }
        ],
        "A2": [
          {
            "en": "mug and pencil case",
            "ja": "マグカップとペンケース"
          }
        ],
        "B1": [
          {
            "en": "study materials",
            "ja": "学習用品"
          }
        ],
        "B2": [
          {
            "en": "carefully arranged personal study tools",
            "ja": "丁寧に並べられた個人的な学習道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small companions gathered around the notebook",
          "ja": "ノートの周りに集まる小さな相棒"
        },
        {
          "en": "an organized collection supporting her late study",
          "ja": "夜の勉強を支える整理された道具"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mug, pencil case, books, plant",
          "text_en": "mug, pencil case, books, plant",
          "text_ja": "マグカップ、ペンケース、本、植物"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many things on the desk.",
          "text_en": "There are many things on the desk.",
          "text_ja": "机の上にはたくさんの物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a mug, books, and stationery arranged beside the notebook",
          "text_en": "a mug, books, and stationery arranged beside the notebook",
          "text_ja": "ノートのそばに並ぶマグカップ、本、文房具"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The carefully arranged objects make the study space feel personal and prepared.",
          "text_en": "The carefully arranged objects make the study space feel personal and prepared.",
          "text_ja": "丁寧に並べられた物が学習空間を個人的で準備の整った場所にしています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "bed with teddy bear",
      "label_ja": "テディベアのあるベッド",
      "category": "furniture",
      "importance": "primary",
      "description": "A wooden bed with pink and white bedding stands on the left side of the room, and a small brown teddy bear sits among the pillows.",
      "bounding_box_conceptual": [
        42,
        0,
        44,
        45
      ],
      "color": [
        "pink",
        "white",
        "brown",
        "cream"
      ],
      "attributes": [
        "soft",
        "neatly arranged",
        "comfortable",
        "warm"
      ],
      "action": [
        "standing beside the nightstand",
        "holding pillows and a teddy bear"
      ],
      "synonyms_and_related_words": [
        "bed",
        "single bed",
        "wooden bed",
        "pillows",
        "blanket",
        "teddy bear",
        "stuffed bear"
      ],
      "accepted_words": [
        "bed",
        "single bed",
        "wooden bed",
        "pillows",
        "blanket",
        "teddy bear",
        "stuffed bear"
      ],
      "common_typos": [
        "bedd",
        "single bad",
        "pilllows",
        "blankit",
        "teddy bare"
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
            "en": "teddy bear",
            "ja": "テディベア"
          }
        ],
        "B1": [
          {
            "en": "soft bedding",
            "ja": "柔らかな寝具"
          }
        ],
        "B2": [
          {
            "en": "a restful sleeping area with a comforting toy",
            "ja": "ぬいぐるみのある休息用スペース"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet place waiting for the study session to end",
          "ja": "勉強が終わるのを待つ静かな場所"
        },
        {
          "en": "a soft nighttime companion among the pillows",
          "ja": "枕の間にいる柔らかな夜の相棒"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bed, pillow, blanket, teddy bear",
          "text_en": "bed, pillow, blanket, teddy bear",
          "text_ja": "ベッド、枕、毛布、テディベア"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a teddy bear on the bed.",
          "text_en": "There is a teddy bear on the bed.",
          "text_ja": "ベッドの上にテディベアがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden bed covered with pink bedding",
          "text_en": "a wooden bed covered with pink bedding",
          "text_ja": "ピンクの寝具で覆われた木製のベッド"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The prepared bed suggests that she may soon finish studying and go to sleep.",
          "text_en": "The prepared bed suggests that she may soon finish studying and go to sleep.",
          "text_ja": "整えられたベッドから、彼女がまもなく勉強を終えて眠ることが想像できます。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "nightstand",
      "label_ja": "ナイトテーブル",
      "category": "furniture",
      "importance": "secondary",
      "description": "A small wooden nightstand between the bed and desk holds a warm lamp, an alarm clock, and a potted plant.",
      "bounding_box_conceptual": [
        45,
        36,
        38,
        17
      ],
      "color": [
        "brown",
        "cream",
        "pink",
        "green"
      ],
      "attributes": [
        "small",
        "organized",
        "warmly lit",
        "practical"
      ],
      "action": [
        "holding a lamp",
        "supporting an alarm clock",
        "standing beside the bed"
      ],
      "synonyms_and_related_words": [
        "nightstand",
        "bedside table",
        "table lamp",
        "alarm clock",
        "small plant"
      ],
      "accepted_words": [
        "nightstand",
        "bedside table",
        "table lamp",
        "alarm clock",
        "small plant"
      ],
      "common_typos": [
        "night stand",
        "bed side table",
        "table lamb",
        "alarm clok"
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
            "en": "alarm clock and lamp",
            "ja": "目覚まし時計とランプ"
          }
        ],
        "B2": [
          {
            "en": "an organized bedside arrangement",
            "ja": "整理されたベッド脇の一式"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small station between study and sleep",
          "ja": "勉強と睡眠の間にある小さな場所"
        },
        {
          "en": "the quiet keeper of time beside the bed",
          "ja": "ベッドのそばで時間を見守る場所"
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
          "text": "a bedside table with a lamp and an alarm clock",
          "text_en": "a bedside table with a lamp and an alarm clock",
          "text_ja": "ランプと目覚まし時計があるベッド脇のテーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The nightstand combines practical objects for sleep with warm decorative light.",
          "text_en": "The nightstand combines practical objects for sleep with warm decorative light.",
          "text_ja": "ナイトテーブルには睡眠用の実用品と暖かな光がまとめられています。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "slippers and rug",
      "label_ja": "スリッパとラグ",
      "category": "object",
      "importance": "secondary",
      "description": "A pair of pink slippers lies on a soft cream rug between the bed and the desk.",
      "bounding_box_conceptual": [
        86,
        24,
        13,
        35
      ],
      "color": [
        "pink",
        "cream",
        "brown"
      ],
      "attributes": [
        "soft",
        "fluffy",
        "matching",
        "comfortable"
      ],
      "action": [
        "lying on the floor",
        "resting on the rug",
        "waiting to be worn"
      ],
      "synonyms_and_related_words": [
        "slippers",
        "house slippers",
        "indoor shoes",
        "rug",
        "carpet",
        "soft mat"
      ],
      "accepted_words": [
        "slippers",
        "house slippers",
        "indoor shoes",
        "rug",
        "carpet",
        "soft mat"
      ],
      "common_typos": [
        "sliper",
        "house sliper",
        "indor shoes",
        "rugg"
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
            "en": "house slippers",
            "ja": "室内用スリッパ"
          }
        ],
        "B1": [
          {
            "en": "soft rug",
            "ja": "柔らかなラグ"
          }
        ],
        "B2": [
          {
            "en": "comfortable floor furnishings",
            "ja": "快適な床まわりの用品"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet path between study and sleep",
          "ja": "勉強と睡眠をつなぐ静かな道"
        },
        {
          "en": "pink slippers resting in the lamplight",
          "ja": "ランプの光で休むピンクのスリッパ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "slippers, rug, pink, floor",
          "text_en": "slippers, rug, pink, floor",
          "text_ja": "スリッパ、ラグ、ピンク、床"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The slippers are on the rug.",
          "text_en": "The slippers are on the rug.",
          "text_ja": "スリッパはラグの上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a pair of pink slippers beside the bed",
          "text_en": "a pair of pink slippers beside the bed",
          "text_ja": "ベッドのそばのピンクのスリッパ一足"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The slippers reinforce the private and comfortable atmosphere of the bedroom.",
          "text_en": "The slippers reinforce the private and comfortable atmosphere of the bedroom.",
          "text_ja": "スリッパが寝室の私的で快適な雰囲気を強めています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "window with moon and stars",
      "label_ja": "月と星が見える窓",
      "category": "setting",
      "importance": "primary",
      "description": "A large window behind the desk shows a crescent moon, stars, dark rooftops, and a few distant lights.",
      "bounding_box_conceptual": [
        0,
        48,
        46,
        37
      ],
      "color": [
        "dark blue",
        "black",
        "white",
        "golden"
      ],
      "attributes": [
        "large",
        "clear",
        "moonlit",
        "starry",
        "nighttime"
      ],
      "action": [
        "showing the night sky",
        "revealing the moon",
        "connecting the room to the outside"
      ],
      "synonyms_and_related_words": [
        "window",
        "night window",
        "crescent moon",
        "moon",
        "stars",
        "night sky",
        "rooftops",
        "night view"
      ],
      "accepted_words": [
        "window",
        "night window",
        "crescent moon",
        "moon",
        "stars",
        "night sky",
        "rooftops",
        "night view"
      ],
      "common_typos": [
        "windo",
        "cresant moon",
        "mooon",
        "stares",
        "night skye"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "moon and stars",
            "ja": "月と星"
          }
        ],
        "A2": [
          {
            "en": "night sky",
            "ja": "夜空"
          }
        ],
        "B1": [
          {
            "en": "crescent moon",
            "ja": "三日月"
          }
        ],
        "B2": [
          {
            "en": "a tranquil moonlit view",
            "ja": "穏やかな月夜の景色"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the crescent moon watching over her study",
          "ja": "彼女の勉強を見守る三日月"
        },
        {
          "en": "a dark sky scattered with quiet stars",
          "ja": "静かな星が散らばる暗い空"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, moon, stars, night",
          "text_en": "window, moon, stars, night",
          "text_ja": "窓、月、星、夜"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The moon can be seen through the window.",
          "text_en": "The moon can be seen through the window.",
          "text_ja": "窓から月が見えます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a crescent moon shining in the starry sky",
          "text_en": "a crescent moon shining in the starry sky",
          "text_ja": "星空で輝く三日月"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Beyond the window, the crescent moon hangs above dark rooftops while stars dot the sky.",
          "text_en": "Beyond the window, the crescent moon hangs above dark rooftops while stars dot the sky.",
          "text_ja": "窓の向こうでは三日月が暗い屋根の上に浮かび、星が夜空に点在しています。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "wall shelf and string lights",
      "label_ja": "壁棚とストリングライト",
      "category": "decoration",
      "importance": "secondary",
      "description": "A wooden wall shelf holds books, a framed moon picture, a small plant, and a rabbit toy, while warm string lights and small photographs hang below it.",
      "bounding_box_conceptual": [
        4,
        0,
        37,
        40
      ],
      "color": [
        "brown",
        "green",
        "golden",
        "cream"
      ],
      "attributes": [
        "decorative",
        "warm",
        "organized",
        "personal",
        "glowing"
      ],
      "action": [
        "holding books",
        "displaying decorations",
        "giving off light"
      ],
      "synonyms_and_related_words": [
        "wall shelf",
        "shelf",
        "books",
        "string lights",
        "fairy lights",
        "photographs",
        "framed picture"
      ],
      "accepted_words": [
        "wall shelf",
        "shelf",
        "books",
        "string lights",
        "fairy lights",
        "photographs",
        "framed picture"
      ],
      "common_typos": [
        "wall shelve",
        "string ligths",
        "fairy ligths",
        "photografs"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shelf and lights",
            "ja": "棚と照明"
          }
        ],
        "A2": [
          {
            "en": "string lights",
            "ja": "ストリングライト"
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
            "en": "a personalized wall display",
            "ja": "個人的な壁の飾り"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small lights turning the wall into warm stars",
          "ja": "壁を暖かな星空へ変える小さな光"
        },
        {
          "en": "a personal constellation hanging on the wall",
          "ja": "壁に掛けられた個人的な星座"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shelf, books, lights, photos",
          "text_en": "shelf, books, lights, photos",
          "text_ja": "棚、本、照明、写真"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are books and lights on the wall.",
          "text_en": "There are books and lights on the wall.",
          "text_ja": "壁には本とライトがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden shelf decorated with books and warm lights",
          "text_en": "a wooden shelf decorated with books and warm lights",
          "text_ja": "本と暖かなライトで飾られた木製の棚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The glowing lights and personal photographs make the bedroom feel warm and individual.",
          "text_en": "The glowing lights and personal photographs make the bedroom feel warm and individual.",
          "text_ja": "光るライトと写真が寝室を温かくその人らしい空間にしています。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "corkboard and message",
      "label_ja": "コルクボードとメッセージ",
      "category": "sign",
      "importance": "secondary",
      "description": "A corkboard above the desk displays a white note reading 'Believe in yourself!' together with colorful papers and decorations.",
      "bounding_box_conceptual": [
        8,
        88,
        35,
        12
      ],
      "color": [
        "brown",
        "white",
        "pink",
        "yellow"
      ],
      "attributes": [
        "motivational",
        "decorative",
        "organized",
        "personal"
      ],
      "action": [
        "displaying a message",
        "holding notes",
        "decorating the wall"
      ],
      "synonyms_and_related_words": [
        "corkboard",
        "bulletin board",
        "notice board",
        "motivational note",
        "message",
        "paper notes"
      ],
      "accepted_words": [
        "corkboard",
        "bulletin board",
        "notice board",
        "motivational note",
        "message",
        "paper notes"
      ],
      "common_typos": [
        "cork bord",
        "bulletin bord",
        "motivatonal note",
        "messsage"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "board and note",
            "ja": "ボードとメモ"
          }
        ],
        "A2": [
          {
            "en": "corkboard",
            "ja": "コルクボード"
          }
        ],
        "B1": [
          {
            "en": "motivational message",
            "ja": "励ましのメッセージ"
          }
        ],
        "B2": [
          {
            "en": "a visual reminder of self-confidence",
            "ja": "自信を促す視覚的なメッセージ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "words of encouragement watching over the desk",
          "ja": "机を見守る励ましの言葉"
        },
        {
          "en": "a small promise pinned above her work",
          "ja": "作業の上に留められた小さな約束"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "board, note, message, wall",
          "text_en": "board, note, message, wall",
          "text_ja": "ボード、メモ、メッセージ、壁"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a note on the board.",
          "text_en": "There is a note on the board.",
          "text_ja": "ボードにメモがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a motivational note pinned to a corkboard",
          "text_en": "a motivational note pinned to a corkboard",
          "text_ja": "コルクボードに留められた励ましのメモ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The encouraging message reinforces the focused and hopeful atmosphere.",
          "text_en": "The encouraging message reinforces the focused and hopeful atmosphere.",
          "text_ja": "励ましの言葉が集中した希望に満ちた雰囲気を強めています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "white note pinned to the corkboard above the desk",
      "content": "Believe in yourself!",
      "description_ja": "自分を信じるよう励ます前向きなメッセージ。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "believe, yourself, message, board",
          "text_en": "believe, yourself, message, board",
          "text_ja": "信じる、自分自身、メッセージ、ボード"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Believe in yourself. means 自分を信じて。",
          "text_en": "Believe in yourself. means 自分を信じて。",
          "text_ja": "Believe in yourself. は「自分を信じて」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The note on the board says...",
          "text_en": "The note on the board says...",
          "text_ja": "ボードのメモには……と書かれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The words 'Believe in yourself!' serve as a motivational reminder while she studies.",
          "text_en": "The words 'Believe in yourself!' serve as a motivational reminder while she studies.",
          "text_ja": "「Believe in yourself!」という言葉が勉強中の励ましになっています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Writing in a notebook",
      "description_ja": "ノートに文字を書いている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "write",
        "writing",
        "write in a notebook",
        "take notes",
        "record information",
        "complete written work"
      ],
      "accepted_words": [
        "write",
        "writing",
        "write in a notebook",
        "take notes",
        "record information",
        "complete written work"
      ],
      "common_typos": [
        "writting",
        "writeing",
        "writng",
        "taking nots"
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
            "en": "write in a notebook",
            "ja": "ノートに書く"
          }
        ],
        "B1": [
          {
            "en": "take notes",
            "ja": "ノートを取る"
          }
        ],
        "B2": [
          {
            "en": "document her thoughts carefully",
            "ja": "考えを丁寧に記録する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning the last thoughts of the day into written lines",
          "ja": "一日の最後の考えを文字へ変える"
        },
        {
          "en": "building knowledge in the quiet hours of night",
          "ja": "夜の静かな時間に知識を積み上げる"
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
          "text": "The girl is writing in a notebook.",
          "text_en": "The girl is writing in a notebook.",
          "text_ja": "女の子はノートに書いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "write carefully in an open notebook",
          "text_en": "write carefully in an open notebook",
          "text_ja": "開いたノートに丁寧に書く"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Writing steadily beneath the lamp, she records her thoughts with concentration.",
          "text_en": "Writing steadily beneath the lamp, she records her thoughts with concentration.",
          "text_ja": "ランプの下で着実に書きながら、彼女は集中して考えを記録しています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Studying in her bedroom at night",
      "description_ja": "夜に寝室で勉強している",
      "involved_elements": [
        "element_001",
        "element_004",
        "element_010"
      ],
      "synonyms": [
        "study at night",
        "study in her bedroom",
        "do homework",
        "work late",
        "review lessons",
        "study before bed"
      ],
      "accepted_words": [
        "study at night",
        "study in her bedroom",
        "do homework",
        "work late",
        "review lessons",
        "study before bed"
      ],
      "common_typos": [
        "studing at night",
        "bed room",
        "home work",
        "revie lessons"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "study",
            "ja": "勉強する"
          }
        ],
        "A2": [
          {
            "en": "study at night",
            "ja": "夜に勉強する"
          }
        ],
        "B1": [
          {
            "en": "review lessons before bed",
            "ja": "寝る前に復習する"
          }
        ],
        "B2": [
          {
            "en": "engage in focused late-evening study",
            "ja": "夜遅くの集中した学習に取り組む"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "using the quiet night to move closer to her goals",
          "ja": "静かな夜を使って目標へ近づく"
        },
        {
          "en": "turning her bedroom into a private classroom",
          "ja": "寝室を自分だけの教室へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is studying in her bedroom at night.",
          "text_en": "She is studying in her bedroom at night.",
          "text_ja": "彼女は夜に寝室で勉強しています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "in her bedroom / at night / at the desk",
          "text_en": "in her bedroom / at night / at the desk",
          "text_ja": "寝室で／夜に／机に向かって"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "study quietly before going to bed",
          "text_en": "study quietly before going to bed",
          "text_ja": "寝る前に静かに勉強する"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Surrounded by warm light and a peaceful night sky, she remains focused on her studies.",
          "text_en": "Surrounded by warm light and a peaceful night sky, she remains focused on her studies.",
          "text_ja": "暖かな光と穏やかな夜空に囲まれ、彼女は勉強に集中しています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Sitting at the desk",
      "description_ja": "机に向かって座っている",
      "involved_elements": [
        "element_001",
        "element_004"
      ],
      "synonyms": [
        "sit",
        "sitting",
        "sit at the desk",
        "sit in a chair",
        "face the desk",
        "lean toward the notebook"
      ],
      "accepted_words": [
        "sit",
        "sitting",
        "sit at the desk",
        "sit in a chair",
        "face the desk",
        "lean toward the notebook"
      ],
      "common_typos": [
        "siting",
        "sittting",
        "sit at desck",
        "chear"
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
            "en": "sit at the desk",
            "ja": "机に向かって座る"
          }
        ],
        "B1": [
          {
            "en": "lean toward the notebook",
            "ja": "ノートの方へ身を傾ける"
          }
        ],
        "B2": [
          {
            "en": "adopt a focused working posture",
            "ja": "集中した作業姿勢を取る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "settling into the small pool of light at the desk",
          "ja": "机の小さな光の輪の中に座る"
        },
        {
          "en": "leaning toward the work before sleep",
          "ja": "眠る前の課題へ身を傾ける"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl is sitting at the desk.",
          "text_en": "The girl is sitting at the desk.",
          "text_ja": "女の子は机に向かって座っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "at the desk / in the chair",
          "text_en": "at the desk / in the chair",
          "text_ja": "机に向かって／椅子に座って"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sit upright and lean toward the notebook",
          "text_en": "sit upright and lean toward the notebook",
          "text_ja": "姿勢よく座りノートへ身を傾ける"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Seated at the wooden desk, she leans toward the notebook with a concentrated expression.",
          "text_en": "Seated at the wooden desk, she leans toward the notebook with a concentrated expression.",
          "text_ja": "木製の机に座り、集中した表情でノートへ身を傾けています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "The desk lamp illuminating the notebook",
      "description_ja": "デスクランプがノートを照らしている",
      "involved_elements": [
        "element_005",
        "element_002",
        "element_004"
      ],
      "synonyms": [
        "lamp shines",
        "lamp illuminates the notebook",
        "desk lamp lights the page",
        "cast light over the desk",
        "brighten the workspace"
      ],
      "accepted_words": [
        "lamp shines",
        "lamp illuminates the notebook",
        "desk lamp lights the page",
        "cast light over the desk",
        "brighten the workspace"
      ],
      "common_typos": [
        "lamp shins",
        "iluminates",
        "ligths the page",
        "casts ligth"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lamp shines",
            "ja": "ランプが照る"
          }
        ],
        "A2": [
          {
            "en": "lamp lights the notebook",
            "ja": "ランプがノートを照らす"
          }
        ],
        "B1": [
          {
            "en": "illuminate the page",
            "ja": "ページを照らす"
          }
        ],
        "B2": [
          {
            "en": "provide focused task lighting",
            "ja": "集中作業用の照明を与える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright circle protecting the page from the night",
          "ja": "夜からページを守る明るい光の輪"
        },
        {
          "en": "a private sunrise above the desk",
          "ja": "机の上にある自分だけの日の出"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The desk lamp is shining on the notebook.",
          "text_en": "The desk lamp is shining on the notebook.",
          "text_ja": "デスクランプがノートを照らしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a bright lamp casting light across the page",
          "text_en": "a bright lamp casting light across the page",
          "text_ja": "ページ全体に光を落とす明るいランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lamp creates a focused pool of light that separates her workspace from the darker room.",
          "text_en": "The lamp creates a focused pool of light that separates her workspace from the darker room.",
          "text_ja": "ランプが集中した光を作り、作業スペースを暗い部屋から際立たせています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Warm lights glowing around the room",
      "description_ja": "暖かな照明が部屋の中で光っている",
      "involved_elements": [
        "element_005",
        "element_008",
        "element_011"
      ],
      "synonyms": [
        "lights glow",
        "warm light fills the room",
        "lamps illuminate the bedroom",
        "string lights shine",
        "soft light spreads"
      ],
      "accepted_words": [
        "lights glow",
        "warm light fills the room",
        "lamps illuminate the bedroom",
        "string lights shine",
        "soft light spreads"
      ],
      "common_typos": [
        "ligths glow",
        "warm ligth",
        "iluminate the bedroom",
        "string ligths"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lights glow",
            "ja": "明かりが光る"
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
            "en": "layered ambient lighting shapes a restful atmosphere",
            "ja": "重なった間接照明が休息感のある雰囲気を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden light gathering around the bed and desk",
          "ja": "ベッドと机の周りに集まる金色の光"
        },
        {
          "en": "small indoor stars glowing beneath the moon",
          "ja": "月の下で光る室内の小さな星"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Warm lights are glowing in the room.",
          "text_en": "Warm lights are glowing in the room.",
          "text_ja": "暖かな照明が部屋で光っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "soft lamp light and string lights around the bedroom",
          "text_en": "soft lamp light and string lights around the bedroom",
          "text_ja": "寝室の柔らかなランプとストリングライト"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Illuminated by several warm light sources, the bedroom feels peaceful and safe.",
          "text_en": "Illuminated by several warm light sources, the bedroom feels peaceful and safe.",
          "text_ja": "暖かな光源に照らされ、寝室は穏やかで安心できる空間に感じられます。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "The moon and stars shining outside",
      "description_ja": "月と星が外で輝いている",
      "involved_elements": [
        "element_010"
      ],
      "synonyms": [
        "moon shines",
        "stars shine",
        "crescent moon is visible",
        "night sky glows",
        "stars twinkle"
      ],
      "accepted_words": [
        "moon shines",
        "stars shine",
        "crescent moon is visible",
        "night sky glows",
        "stars twinkle"
      ],
      "common_typos": [
        "mooon shines",
        "stares shine",
        "cresant moon",
        "night skye"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "moon and stars shine",
            "ja": "月と星が輝く"
          }
        ],
        "A2": [
          {
            "en": "a crescent moon is visible",
            "ja": "三日月が見える"
          }
        ],
        "B1": [
          {
            "en": "stars twinkle in the night sky",
            "ja": "星が夜空で瞬く"
          }
        ],
        "B2": [
          {
            "en": "a tranquil celestial scene overlooks the room",
            "ja": "穏やかな夜空が部屋を見下ろす"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the crescent moon keeping watch over her work",
          "ja": "彼女の作業を見守る三日月"
        },
        {
          "en": "stars waiting quietly beyond the glass",
          "ja": "ガラスの向こうで静かに待つ星"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The moon and stars are shining outside.",
          "text_en": "The moon and stars are shining outside.",
          "text_ja": "月と星が外で輝いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a crescent moon above dark rooftops",
          "text_en": "a crescent moon above dark rooftops",
          "text_ja": "暗い屋根の上にある三日月"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Hanging above the rooftops, the crescent moon creates a peaceful background for her study.",
          "text_en": "Hanging above the rooftops, the crescent moon creates a peaceful background for her study.",
          "text_ja": "屋根の上に浮かぶ三日月が勉強に穏やかな背景を作っています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Preparing to finish the day",
      "description_ja": "一日を終える準備をしている",
      "involved_elements": [
        "element_001",
        "element_007",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "prepare for bed",
        "finish the day",
        "study before sleeping",
        "complete homework before bed",
        "get ready to sleep"
      ],
      "accepted_words": [
        "prepare for bed",
        "finish the day",
        "study before sleeping",
        "complete homework before bed",
        "get ready to sleep"
      ],
      "common_typos": [
        "prepareing for bed",
        "finish the dey",
        "before sleping",
        "complete home work"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "go to bed soon",
            "ja": "もうすぐ寝る"
          }
        ],
        "A2": [
          {
            "en": "study before bed",
            "ja": "寝る前に勉強する"
          }
        ],
        "B1": [
          {
            "en": "finish homework before sleeping",
            "ja": "寝る前に宿題を終える"
          }
        ],
        "B2": [
          {
            "en": "conclude the day with a productive routine",
            "ja": "生産的な習慣で一日を締めくくる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "placing one final effort between the day and sleep",
          "ja": "一日と睡眠の間に最後の努力を置く"
        },
        {
          "en": "ending the night with a page of progress",
          "ja": "成長の一ページで夜を終える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "It looks like she is studying before bed.",
          "text_en": "It looks like she is studying before bed.",
          "text_ja": "彼女は寝る前に勉強しているようです。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "finish her homework before going to sleep",
          "text_en": "finish her homework before going to sleep",
          "text_ja": "眠る前に宿題を終える"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "With the bed prepared beside her, she appears to be completing one final task before sleeping.",
          "text_en": "With the bed prepared beside her, she appears to be completing one final task before sleeping.",
          "text_ja": "ベッドが整えられていることから、眠る前に最後の課題を終えているようです。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "young woman",
      "relationship": "at",
      "object": "wooden desk",
      "example_beginner": "The girl is at the desk.",
      "example_intermediate": "The young woman is sitting at a wooden desk."
    },
    {
      "subject": "notebook",
      "relationship": "in front of",
      "object": "young woman",
      "example_beginner": "The notebook is in front of her.",
      "example_intermediate": "An open notebook lies directly in front of the young woman."
    },
    {
      "subject": "desk lamp",
      "relationship": "to the right of",
      "object": "notebook",
      "example_beginner": "The lamp is to the right of the notebook.",
      "example_intermediate": "A white desk lamp stands to the right of the notebook."
    },
    {
      "subject": "bed",
      "relationship": "to the left of",
      "object": "desk",
      "example_beginner": "The bed is to the left of the desk.",
      "example_intermediate": "A wooden bed stands to the left of the study desk."
    },
    {
      "subject": "nightstand",
      "relationship": "between",
      "object": "bed and desk",
      "example_beginner": "The nightstand is between the bed and desk.",
      "example_intermediate": "A small nightstand stands between the bed and the desk."
    },
    {
      "subject": "teddy bear",
      "relationship": "on",
      "object": "bed",
      "example_beginner": "The teddy bear is on the bed.",
      "example_intermediate": "A small teddy bear sits among the pillows on the bed."
    },
    {
      "subject": "slippers",
      "relationship": "on",
      "object": "rug",
      "example_beginner": "The slippers are on the rug.",
      "example_intermediate": "A pair of pink slippers lies on the cream rug."
    },
    {
      "subject": "window",
      "relationship": "behind",
      "object": "young woman",
      "example_beginner": "The window is behind her.",
      "example_intermediate": "A large moonlit window is behind the young woman."
    },
    {
      "subject": "moon",
      "relationship": "through",
      "object": "window",
      "example_beginner": "The moon can be seen through the window.",
      "example_intermediate": "A crescent moon is visible through the large window."
    },
    {
      "subject": "corkboard",
      "relationship": "above",
      "object": "desk",
      "example_beginner": "The corkboard is above the desk.",
      "example_intermediate": "A corkboard with notes hangs above the desk."
    },
    {
      "subject": "wall shelf",
      "relationship": "above",
      "object": "bed",
      "example_beginner": "The shelf is above the bed.",
      "example_intermediate": "A shelf decorated with books and lights hangs above the bed."
    }
  ],
  "adjective_library": {
    "person": [
      "young",
      "focused",
      "calm",
      "hardworking",
      "comfortable",
      "attentive",
      "diligent"
    ],
    "bedroom": [
      "cozy",
      "warm",
      "quiet",
      "organized",
      "personal",
      "peaceful",
      "softly lit"
    ],
    "desk": [
      "wooden",
      "broad",
      "organized",
      "well-equipped",
      "warm-toned"
    ],
    "bed": [
      "soft",
      "comfortable",
      "pink",
      "neatly made",
      "warm",
      "inviting"
    ],
    "light": [
      "warm",
      "golden",
      "soft",
      "focused",
      "gentle",
      "ambient"
    ],
    "night_sky": [
      "dark",
      "starry",
      "moonlit",
      "clear",
      "quiet",
      "deep blue"
    ],
    "atmosphere": [
      "focused",
      "peaceful",
      "dreamy",
      "restful",
      "studious",
      "serene",
      "productive"
    ]
  },
  "preposition_library": [
    {
      "preposition": "at",
      "meaning_ja": "〜のところで",
      "example": "The girl is sitting at the desk."
    },
    {
      "preposition": "in",
      "meaning_ja": "〜の中に、〜で",
      "example": "She is studying in her bedroom."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The notebook is on the desk."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The notebook is in front of her."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The bed is to the left of the desk."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The lamp is to the right of the notebook."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The nightstand is between the bed and the desk."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The window is behind the girl."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "The moon can be seen through the window."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上方に",
      "example": "The corkboard is above the desk."
    },
    {
      "preposition": "before",
      "meaning_ja": "〜の前に",
      "example": "She is studying before going to bed."
    },
    {
      "preposition": "at night",
      "meaning_ja": "夜に",
      "example": "She is writing at night."
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
        "The girl is writing in a notebook.",
        "She is studying at her desk.",
        "The lamp is shining on the page."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で今している動作を表します。",
        "Scene 007では girl + is writing + in a notebook が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "寝室にある物を説明する。",
      "examples": [
        "There is a bed beside the desk.",
        "There is a teddy bear on the bed.",
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
        "The girl is focused.",
        "The bedroom is cozy.",
        "The night sky is clear."
      ],
      "hints": [
        "focused, cozy, clear などをbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The girl is at the desk.",
        "The teddy bear is on the bed.",
        "The window is behind her."
      ],
      "hints": [
        "at, on, behind, above, between, beside などを使います。"
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
        "The string lights glow softly."
      ],
      "hints": [
        "carefully, quietly, softly などを使うと夜の様子が具体的になります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を加える。",
      "examples": [
        "The girl who is writing looks focused.",
        "The lamp that stands on the desk is bright.",
        "The window, which shows the moon, is behind her."
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
      "purpose_ja": "物が置かれている、照らされている状態を表す。",
      "examples": [
        "The notebook is illuminated by the desk lamp.",
        "The bed is covered with pink bedding.",
        "The message is pinned to the corkboard."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で状態を表せます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の複数の動作を簡潔につなぐ。",
      "examples": [
        "Holding a pen in her right hand, she writes carefully.",
        "Sitting at the desk, she studies before bed.",
        "Glowing softly, the string lights warm the room."
      ],
      "hints": [
        "文頭を動詞ingで始めると高度で自然な描写になります。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "受け身の状態や背景を文頭で示す。",
      "examples": [
        "Surrounded by warm light, the girl continues studying.",
        "Illuminated by the desk lamp, the notebook stands out.",
        "Prepared for sleep, the bed waits beside the desk."
      ],
      "hints": [
        "Surrounded, Illuminated, Prepared などから始められます。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できることを断定せずに表す。",
      "examples": [
        "It looks like she is doing her homework.",
        "She seems to be studying before bed.",
        "The room appears designed for study and rest."
      ],
      "hints": [
        "looks like, seems, appears to を使って推測として書きます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "while / as + clause",
      "label_ja": "while / as を使った同時進行",
      "level": "intermediate",
      "purpose_ja": "人物の動作と背景を同時に説明する。",
      "examples": [
        "She writes while the moon shines outside.",
        "The room stays quiet as the string lights glow.",
        "She studies while the neighborhood sleeps."
      ],
      "hints": [
        "while や as を使うと同時に起きていることを一文で表せます。"
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
        "template": "She is in / at ______.",
        "example": "She is at a desk."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "She is ______ing.",
        "example": "She is writing."
      },
      {
        "step": 4,
        "question_ja": "何に書いていますか？",
        "template": "She is writing in ______.",
        "example": "She is writing in a notebook."
      },
      {
        "step": 5,
        "question_ja": "周りには何がありますか？",
        "template": "There is / are ______ on / beside / behind ______.",
        "example": "There is a bed beside the desk."
      }
    ],
    "intermediate": [
      {
        "template": "A young woman is ______ing at ______.",
        "example": "A young woman is writing at a wooden desk."
      },
      {
        "template": "On the desk, there is / are ______.",
        "example": "On the desk, there are a notebook, a lamp, a mug, and stationery."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a bed, a window, a shelf, and a corkboard."
      },
      {
        "template": "The ______ makes the room feel ______.",
        "example": "The warm light makes the room feel peaceful."
      },
      {
        "template": "It looks like she is ______.",
        "example": "It looks like she is finishing her homework before bed."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding a pen in her right hand, the young woman writes carefully."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by warm light and personal belongings, she studies quietly."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "She continues writing while the crescent moon shines beyond the window."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The girl, who is seated at a wooden desk, is writing in a notebook that is illuminated by a large lamp."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that she is completing one final assignment before going to sleep."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A girl is in her bedroom.",
      "She is sitting at a desk.",
      "She is writing in a notebook.",
      "There is a bed beside her.",
      "The moon is visible through the window."
    ],
    "intermediate": [
      "A young woman in pink pajamas is studying at a wooden desk at night.",
      "She is holding a pen and writing in an open notebook.",
      "A desk lamp, a mug, a pencil case, books, and stationery are arranged on the desk.",
      "A bed, a teddy bear, slippers, and a nightstand can be seen to the left.",
      "Warm lights and a crescent moon create a quiet atmosphere."
    ],
    "advanced": [
      "Seated at a wooden desk in her softly lit bedroom, a young woman in pink pajamas writes carefully in an open notebook.",
      "Illuminated by a large desk lamp, her workspace is neatly arranged with books, stationery, a mug, and a pencil case.",
      "To her left, a prepared bed, a teddy bear, a nightstand, and pink slippers suggest that she is completing one final task before sleeping.",
      "Beyond the window, a crescent moon and scattered stars shine above dark rooftops, while warm string lights make the room feel calm and intimate."
    ]
  },
  "full_description_support": {
    "beginner_model": "A girl is in a bedroom at night. She is sitting at a desk and writing in a notebook. There is a bed beside her. A lamp is shining on the desk. The moon and stars are outside the window.",
    "intermediate_model": "A young woman wearing pink pajamas is sitting at a wooden desk in a cozy bedroom at night. She is holding a pen in her right hand and writing carefully in an open notebook. A white desk lamp, a mug, a pencil case, books, and a pencil holder are arranged on the desk. To the left, there is a wooden bed with pillows, a blanket, and a teddy bear. A nightstand with a lamp and an alarm clock stands between the bed and the desk, while a pair of pink slippers rests on the rug. Through the large window, a crescent moon and stars can be seen.",
    "advanced_model": "Seated at a wooden desk in a softly illuminated bedroom, a young woman in pink pajamas quietly completes her written work late at night. Holding a dark pen in her right hand, she leans toward an open notebook that is brightly illuminated by an adjustable desk lamp. Around her, a purple mug, a pink pencil case, books, stationery, and a small plant create an organized and personal workspace. To the left, a neatly prepared bed with layered pink bedding, a teddy bear, and a bedside table suggests that sleep is near, while slippers rest on the cream rug below. Above the bed, warm string lights, small photographs, books, and plants decorate the wall, and a corkboard above the desk displays the encouraging message 'Believe in yourself!'. Beyond the white curtains, a crescent moon and scattered stars shine above dark rooftops, forming a peaceful contrast with the golden warmth of the room."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A girl is at a desk. She is writing in a notebook.",
        "ja": "女の子が机に向かっています。彼女はノートに書いています。",
        "focus": "girl、desk、writing、notebookを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "There is a bed beside her. The room is warm and quiet.",
        "ja": "彼女のそばにベッドがあります。部屋は暖かく静かです。",
        "focus": "There is とbe動詞＋形容詞を使い、物と雰囲気を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A young woman is sitting at a wooden desk and writing in an open notebook.",
        "ja": "若い女性が木製の机に座り、開いたノートに書いています。",
        "focus": "andを使ってsittingとwritingの二つの動作をつなぐ。"
      },
      {
        "en": "She is studying in a cozy bedroom with a bed, a lamp, books, and a mug around her.",
        "ja": "彼女はベッド、ランプ、本、マグカップに囲まれた居心地のよい寝室で勉強しています。",
        "focus": "with と around her を使って周囲の物をまとめて説明する。"
      }
    ],
    "B1": [
      {
        "en": "A focused female student is writing carefully in her notebook while warm light fills the bedroom.",
        "ja": "集中している女子生徒が、暖かな光が寝室を満たす中、ノートに丁寧に書いています。",
        "focus": "whileを使って人物の動作と背景を同時に描写する。"
      },
      {
        "en": "The desk is neatly arranged with study materials, while a crescent moon and stars are visible through the window.",
        "ja": "机には学習用品がきれいに並べられ、窓からは三日月と星が見えます。",
        "focus": "受動態 is arranged と while を使い、室内と屋外をつなぐ。"
      }
    ],
    "B2": [
      {
        "en": "Illuminated by a bright desk lamp, the young woman writes steadily in her notebook, surrounded by carefully organized books and stationery.",
        "ja": "明るいデスクランプに照らされ、若い女性は丁寧に整理された本や文房具に囲まれながら、ノートに着実に書いています。",
        "focus": "Illuminatedで始める過去分詞句と surrounded by を使う。"
      },
      {
        "en": "The bedroom, which is decorated with warm lights and personal objects, seems to provide an ideal space for the student, who appears to be finishing her work before going to sleep.",
        "ja": "暖かな照明と個人的な物で飾られた寝室は、眠る前に課題を終えようとしているように見える生徒にとって理想的な空間のようです。",
        "focus": "whichとwhoを連続して使い、seems toとappears toで推量を表す。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene007Data = scene007Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene007Data;
}
