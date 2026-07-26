"use strict";

const scene004Data = {
  "id": "scene_004",
  "image_id": "004.webp",
  "overall_description_ja": "明るい朝の日差しが差し込む自宅の勉強部屋で、青い長袖シャツを着た男子生徒が木製の机に向かい、開いたノートにペンで文字を書いている。机の上にはデスクランプ、筆記用具、ペンケース、消しゴム、飲み物の入ったマグカップ、積み重ねられた本があり、背景には窓、植物、本棚、地球儀、カレンダー、励ましのポスターが見える。",
  "overall_description_en": "A teenage boy in a blue long-sleeved shirt is sitting at a wooden desk in a bright study room and writing in an open notebook. A desk lamp, pencils, a pencil case, an eraser, a mug, and a stack of books are arranged on the desk. Behind him are a sunny window, green plants, a bookshelf, a globe, a calendar, and a motivational poster.",
  "overall_mood": [
    "bright",
    "focused",
    "peaceful",
    "productive",
    "warm",
    "sunlit",
    "organized",
    "studious",
    "calm",
    "motivating",
    "comfortable",
    "hopeful",
    "quiet",
    "concentrated",
    "fresh morning atmosphere"
  ],
  "mission_guides": {
    "gist": "男子生徒（boy / student）が、机で何をしているか（writing / studying）を書こう",
    "setting": "場所（study room / bedroom）、机（desk）、窓（window）に注目しよう",
    "details": "ノート、ペン、ランプ、本、マグカップ、地球儀などの小物を加えよう",
    "complete": "素晴らしい！朝の日差しや集中した雰囲気、励ましのポスターまで描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a teenage boy in a blue shirt",
        "ja": "青いシャツを着た10代の男子"
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
        "en": "concentrating on his schoolwork",
        "ja": "学校の課題に集中している"
      }
    ],
    "setting": [
      {
        "en": "inside a bright study room",
        "ja": "明るい勉強部屋の中で"
      },
      {
        "en": "a sunny window beside the desk",
        "ja": "机のそばにある日差しの差し込む窓"
      },
      {
        "en": "books, stationery, and a mug on the desk",
        "ja": "机の上にある本、文房具、マグカップ"
      },
      {
        "en": "a bookshelf and a globe in the background",
        "ja": "背景にある本棚と地球儀"
      }
    ],
    "mood": [
      {
        "en": "warm morning sunlight",
        "ja": "暖かな朝の日差し"
      },
      {
        "en": "a quiet and focused atmosphere",
        "ja": "静かで集中した雰囲気"
      },
      {
        "en": "a bright and productive study space",
        "ja": "明るく学習がはかどりそうな空間"
      },
      {
        "en": "a hopeful and motivating mood",
        "ja": "希望に満ちた励みになる雰囲気"
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
        "boy",
        "student",
        "teenager",
        "teenage boy",
        "male student",
        "young man",
        "he",
        "learner",
        "pupil"
      ],
      "hint_msg": "まずは描写の中心となる「男子（boy）」や「生徒（student）」など、誰がいるかを書いてみましょう。",
      "success_msg": "Good! 次は、その男子が何をしているか、動作（Action）を書きましょう。"
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
        "learning",
        "working",
        "concentrating",
        "taking notes",
        "doing homework"
      ],
      "hint_msg": "次は「書いている（is writing）」や「勉強している（is studying）」など、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次は、何に書いているか、またはどこで勉強しているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "notebook",
        "desk",
        "study room",
        "room",
        "home",
        "pen",
        "schoolwork",
        "homework",
        "book",
        "window"
      ],
      "hint_msg": "「ノート（notebook）」「机（desk）」「勉強部屋（study room）」などを加えて文を完成させましょう。",
      "success_msg": "Excellent! 基本の描写が完成しました。さらに光、表情、机の上の物を付け足してみましょう。"
    }
  ],
  "suggested_topics": [
    "studying at home",
    "doing homework in the morning",
    "writing notes at a desk",
    "a focused student in a bright room",
    "preparing for school",
    "a productive morning routine",
    "learning in a comfortable study space"
  ],
  "scene_structure": {
    "foreground": [
      "wooden desk",
      "blue pencil case",
      "white eraser",
      "gray-blue mug",
      "stack of books",
      "open notebook"
    ],
    "midground": [
      "teenage boy",
      "pen in his hand",
      "desk lamp",
      "pencil cup",
      "blue chair"
    ],
    "background": [
      "large sunny window",
      "blue curtains",
      "potted plant",
      "wooden bookshelf",
      "globe",
      "calendar",
      "motivational poster",
      "framed family photo",
      "blue storage box"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "boy",
      "label_ja": "男子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A teenage boy with short dark hair is sitting at a desk. He is wearing a blue long-sleeved shirt and looking down at his notebook with a focused expression.",
      "bounding_box_conceptual": [
        14,
        25,
        70,
        50
      ],
      "color": [
        "blue",
        "black",
        "beige"
      ],
      "attributes": [
        "young",
        "focused",
        "serious",
        "calm",
        "attentive",
        "hardworking"
      ],
      "action": [
        "sitting",
        "writing",
        "studying",
        "looking down",
        "concentrating",
        "doing schoolwork"
      ],
      "synonyms_and_related_words": [
        "boy",
        "teenage boy",
        "student",
        "male student",
        "teenager",
        "young man",
        "learner",
        "pupil",
        "schoolboy"
      ],
      "accepted_words": [
        "boy",
        "teenage boy",
        "student",
        "male student",
        "teenager",
        "young man",
        "learner",
        "pupil",
        "schoolboy",
        "he"
      ],
      "common_typos": [
        "boi",
        "boyy",
        "studant",
        "stuent",
        "studentt",
        "teeneger",
        "male studnet",
        "school boy",
        "pupill"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "男の子、男子"
          },
          {
            "en": "student",
            "ja": "生徒、学生"
          }
        ],
        "A2": [
          {
            "en": "teenager",
            "ja": "10代の若者"
          },
          {
            "en": "young man",
            "ja": "若い男性"
          }
        ],
        "B1": [
          {
            "en": "male student",
            "ja": "男子生徒"
          },
          {
            "en": "learner",
            "ja": "学習者"
          }
        ],
        "B2": [
          {
            "en": "studious teenager",
            "ja": "勉強熱心な10代の若者"
          },
          {
            "en": "dedicated student",
            "ja": "熱心に取り組む生徒"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a student absorbed in his work",
          "ja": "課題に没頭している生徒"
        },
        {
          "en": "a young learner building his future one line at a time",
          "ja": "一行ずつ未来を築いている若い学習者"
        },
        {
          "en": "a quiet figure surrounded by the tools of learning",
          "ja": "学びの道具に囲まれた静かな人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, student, teenager, blue shirt",
          "text_en": "boy, student, teenager, blue shirt",
          "text_ja": "男子、生徒、10代の若者、青いシャツ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A boy is studying at a desk.",
          "text_en": "A boy is studying at a desk.",
          "text_ja": "男子が机で勉強しています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The boy is...",
          "text_en": "The boy is...",
          "text_ja": "その男子は……しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a focused student wearing a blue shirt",
          "text_en": "a focused student wearing a blue shirt",
          "text_ja": "青いシャツを着た集中している生徒"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy, dressed in a blue shirt, is deeply focused on his schoolwork.",
          "text_en": "The boy, dressed in a blue shirt, is deeply focused on his schoolwork.",
          "text_ja": "青いシャツを着た男子は、学校の課題に深く集中しています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "open notebook",
      "label_ja": "開いたノート",
      "category": "object",
      "importance": "primary",
      "description": "A large open notebook with handwritten lines is placed in front of the boy on the desk.",
      "bounding_box_conceptual": [
        65,
        19,
        20,
        50
      ],
      "color": [
        "white",
        "cream",
        "gray"
      ],
      "attributes": [
        "open",
        "lined",
        "written",
        "large",
        "used"
      ],
      "action": [
        "lying on the desk",
        "being written in",
        "showing handwritten notes"
      ],
      "synonyms_and_related_words": [
        "notebook",
        "open notebook",
        "exercise book",
        "school notebook",
        "workbook",
        "notes",
        "notepad",
        "writing book"
      ],
      "accepted_words": [
        "notebook",
        "open notebook",
        "exercise book",
        "school notebook",
        "workbook",
        "notes",
        "notepad",
        "writing book"
      ],
      "common_typos": [
        "notbook",
        "note book",
        "notebok",
        "exersise book",
        "workbok",
        "notees",
        "notpad"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "notebook",
            "ja": "ノート"
          },
          {
            "en": "page",
            "ja": "ページ"
          }
        ],
        "A2": [
          {
            "en": "open notebook",
            "ja": "開いたノート"
          },
          {
            "en": "school notebook",
            "ja": "学校用ノート"
          }
        ],
        "B1": [
          {
            "en": "exercise book",
            "ja": "練習帳、学習ノート"
          },
          {
            "en": "handwritten notes",
            "ja": "手書きのノート"
          }
        ],
        "B2": [
          {
            "en": "annotated pages",
            "ja": "書き込みのあるページ"
          },
          {
            "en": "written record of his studies",
            "ja": "学習内容を書き残した記録"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "pages filling with new ideas",
          "ja": "新しい考えで満たされていくページ"
        },
        {
          "en": "an open record of his effort",
          "ja": "彼の努力を記した開かれた記録"
        },
        {
          "en": "a blank space gradually becoming knowledge",
          "ja": "少しずつ知識へ変わっていく空白"
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
          "text": "He is writing in a notebook.",
          "text_en": "He is writing in a notebook.",
          "text_ja": "彼はノートに書いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an open notebook filled with handwritten notes",
          "text_en": "an open notebook filled with handwritten notes",
          "text_ja": "手書きのメモで満たされた開いたノート"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The open notebook, placed directly in front of him, is gradually filling with careful notes.",
          "text_en": "The open notebook, placed directly in front of him, is gradually filling with careful notes.",
          "text_ja": "彼のすぐ前に置かれた開いたノートは、丁寧なメモで少しずつ埋まっています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "pen",
      "label_ja": "ペン",
      "category": "object",
      "importance": "primary",
      "description": "The boy is holding a dark pen in his right hand and using it to write in the notebook.",
      "bounding_box_conceptual": [
        58,
        28,
        18,
        8
      ],
      "color": [
        "dark blue",
        "black",
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
        "writing instrument",
        "ink pen"
      ],
      "accepted_words": [
        "pen",
        "ballpoint pen",
        "writing pen",
        "writing tool",
        "writing instrument",
        "ink pen",
        "blue pen"
      ],
      "common_typos": [
        "pne",
        "penn",
        "pan",
        "ball point pen",
        "balpoint pen",
        "writting tool",
        "writing instument"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pen",
            "ja": "ペン"
          },
          {
            "en": "write",
            "ja": "書く"
          }
        ],
        "A2": [
          {
            "en": "blue pen",
            "ja": "青いペン"
          },
          {
            "en": "writing tool",
            "ja": "筆記用具"
          }
        ],
        "B1": [
          {
            "en": "ballpoint pen",
            "ja": "ボールペン"
          },
          {
            "en": "writing instrument",
            "ja": "筆記具"
          }
        ],
        "B2": [
          {
            "en": "instrument for recording ideas",
            "ja": "考えを書き留める道具"
          },
          {
            "en": "pen moving steadily across the page",
            "ja": "ページの上を着実に動くペン"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pen turning thoughts into words",
          "ja": "考えを言葉に変えるペン"
        },
        {
          "en": "a small tool tracing his progress",
          "ja": "彼の成長をたどる小さな道具"
        },
        {
          "en": "the point where ideas meet the page",
          "ja": "考えとページが出会う先端"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pen, write, hold, hand",
          "text_en": "pen, write, hold, hand",
          "text_ja": "ペン、書く、持つ、手"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is holding a pen in his right hand.",
          "text_en": "He is holding a pen in his right hand.",
          "text_ja": "彼は右手にペンを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "write carefully with a dark blue pen",
          "text_en": "write carefully with a dark blue pen",
          "text_ja": "濃い青色のペンで丁寧に書く"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the pen steadily, he records his ideas in the notebook.",
          "text_en": "Holding the pen steadily, he records his ideas in the notebook.",
          "text_ja": "ペンをしっかり持ちながら、彼はノートに考えを書き留めています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "wooden desk",
      "label_ja": "木製の机",
      "category": "furniture",
      "importance": "primary",
      "description": "A broad wooden desk supports the notebook, stationery, a mug, a lamp, and several books.",
      "bounding_box_conceptual": [
        67,
        0,
        33,
        100
      ],
      "color": [
        "light brown",
        "golden brown"
      ],
      "attributes": [
        "wooden",
        "broad",
        "smooth",
        "sunlit",
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
        "workspace",
        "tabletop"
      ],
      "accepted_words": [
        "desk",
        "wooden desk",
        "study desk",
        "writing desk",
        "work table",
        "workspace",
        "tabletop",
        "wooden table"
      ],
      "common_typos": [
        "desck",
        "dask",
        "wooden desck",
        "woden desk",
        "study tabel",
        "work tabel",
        "table top"
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
            "en": "wooden desk",
            "ja": "木製の机"
          },
          {
            "en": "study desk",
            "ja": "勉強机"
          }
        ],
        "B1": [
          {
            "en": "workspace",
            "ja": "作業・学習スペース"
          },
          {
            "en": "writing desk",
            "ja": "書き物用の机"
          }
        ],
        "B2": [
          {
            "en": "well-organized workstation",
            "ja": "よく整理された作業スペース"
          },
          {
            "en": "sunlit wooden surface",
            "ja": "日差しを受けた木製の表面"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a desk covered with signs of careful study",
          "ja": "丁寧な学習の跡で満たされた机"
        },
        {
          "en": "a small workplace where effort becomes progress",
          "ja": "努力が成長へ変わる小さな作業場所"
        },
        {
          "en": "a sunlit stage for learning",
          "ja": "学びのための日差しを受けた舞台"
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
          "text": "The boy is sitting at a desk.",
          "text_en": "The boy is sitting at a desk.",
          "text_ja": "男子は机に向かって座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "on the broad wooden study desk",
          "text_en": "on the broad wooden study desk",
          "text_ja": "広い木製の勉強机の上に"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sunlit wooden desk is neatly arranged with everything he needs for studying.",
          "text_en": "The sunlit wooden desk is neatly arranged with everything he needs for studying.",
          "text_ja": "日差しの当たる木製の机には、勉強に必要な物がきちんと並べられています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "desk lamp",
      "label_ja": "デスクランプ",
      "category": "lighting",
      "importance": "secondary",
      "description": "A large white adjustable desk lamp stands on the left side of the desk and shines toward the notebook.",
      "bounding_box_conceptual": [
        15,
        3,
        47,
        33
      ],
      "color": [
        "white",
        "cream",
        "silver"
      ],
      "attributes": [
        "adjustable",
        "large",
        "white",
        "bright",
        "metallic"
      ],
      "action": [
        "shining",
        "lighting the notebook",
        "standing beside the boy"
      ],
      "synonyms_and_related_words": [
        "desk lamp",
        "lamp",
        "study lamp",
        "reading lamp",
        "table lamp",
        "adjustable lamp",
        "task light"
      ],
      "accepted_words": [
        "desk lamp",
        "lamp",
        "study lamp",
        "reading lamp",
        "table lamp",
        "adjustable lamp",
        "task light",
        "white lamp"
      ],
      "common_typos": [
        "lamb",
        "lampp",
        "desk lamb",
        "study lamb",
        "reading ligth",
        "adjustible lamp",
        "table lump"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "lamp",
            "ja": "ランプ"
          },
          {
            "en": "light",
            "ja": "明かり"
          }
        ],
        "A2": [
          {
            "en": "desk lamp",
            "ja": "デスクランプ"
          },
          {
            "en": "reading lamp",
            "ja": "読書用ランプ"
          }
        ],
        "B1": [
          {
            "en": "adjustable lamp",
            "ja": "角度を調整できるランプ"
          },
          {
            "en": "task light",
            "ja": "作業用照明"
          }
        ],
        "B2": [
          {
            "en": "focused illumination",
            "ja": "一点に向けられた照明"
          },
          {
            "en": "lamp casting light across the page",
            "ja": "ページの上に光を落とすランプ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a lamp guiding his eyes across the page",
          "ja": "ページを追う彼の目を導くランプ"
        },
        {
          "en": "a white pool of light over his work",
          "ja": "課題の上に広がる白い光"
        },
        {
          "en": "a quiet assistant standing beside the notebook",
          "ja": "ノートのそばに立つ静かな助手"
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
          "text": "There is a lamp on the left side of the desk.",
          "text_en": "There is a lamp on the left side of the desk.",
          "text_ja": "机の左側にランプがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a white adjustable lamp shining on the notebook",
          "text_en": "a white adjustable lamp shining on the notebook",
          "text_ja": "ノートを照らす白い調節可能なランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The adjustable lamp casts a soft circle of light over the boy's work.",
          "text_en": "The adjustable lamp casts a soft circle of light over the boy's work.",
          "text_ja": "調節可能なランプが、男子の課題の上に柔らかな円形の光を落としています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "pencil cup",
      "label_ja": "ペン立て",
      "category": "object",
      "importance": "secondary",
      "description": "A black mesh pencil cup filled with colored pencils and pens stands near the lamp.",
      "bounding_box_conceptual": [
        57,
        2,
        29,
        11
      ],
      "color": [
        "black",
        "orange",
        "green",
        "blue"
      ],
      "attributes": [
        "mesh",
        "full",
        "small",
        "organized",
        "colorful"
      ],
      "action": [
        "holding pencils",
        "standing on the desk"
      ],
      "synonyms_and_related_words": [
        "pencil cup",
        "pen holder",
        "pencil holder",
        "stationery cup",
        "container of pencils",
        "desk organizer"
      ],
      "accepted_words": [
        "pencil cup",
        "pen holder",
        "pencil holder",
        "stationery cup",
        "container of pencils",
        "desk organizer"
      ],
      "common_typos": [
        "pencel cup",
        "pencil cap",
        "pen holdar",
        "pencel holder",
        "stationary cup",
        "desk organisor"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pencils",
            "ja": "鉛筆"
          },
          {
            "en": "cup",
            "ja": "入れ物、カップ"
          }
        ],
        "A2": [
          {
            "en": "pencil holder",
            "ja": "ペン立て"
          },
          {
            "en": "colored pencils",
            "ja": "色鉛筆"
          }
        ],
        "B1": [
          {
            "en": "stationery holder",
            "ja": "文房具入れ"
          },
          {
            "en": "desk organizer",
            "ja": "机上整理用品"
          }
        ],
        "B2": [
          {
            "en": "mesh stationery container",
            "ja": "網状の文房具入れ"
          },
          {
            "en": "collection of writing tools",
            "ja": "筆記用具のまとまり"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a colorful collection waiting to be used",
          "ja": "使われるのを待つ色とりどりの道具"
        },
        {
          "en": "a small tower of pencils beside the lamp",
          "ja": "ランプのそばにある鉛筆の小さな塔"
        },
        {
          "en": "the organized tools of a careful student",
          "ja": "丁寧な生徒が整えた道具"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pencil, pen, holder, colorful",
          "text_en": "pencil, pen, holder, colorful",
          "text_ja": "鉛筆、ペン、入れ物、色とりどりの"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are pencils in the holder.",
          "text_en": "There are pencils in the holder.",
          "text_ja": "ペン立ての中に鉛筆があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black mesh cup filled with colored pencils",
          "text_en": "a black mesh cup filled with colored pencils",
          "text_ja": "色鉛筆で満たされた黒い網状のカップ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The pencil holder keeps a variety of writing tools neatly organized.",
          "text_en": "The pencil holder keeps a variety of writing tools neatly organized.",
          "text_ja": "ペン立てがさまざまな筆記用具をきれいに整理しています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "pencil case",
      "label_ja": "ペンケース",
      "category": "object",
      "importance": "secondary",
      "description": "A dark blue zippered pencil case lies horizontally near the front edge of the desk.",
      "bounding_box_conceptual": [
        82,
        13,
        10,
        25
      ],
      "color": [
        "navy blue",
        "black"
      ],
      "attributes": [
        "zippered",
        "rectangular",
        "dark blue",
        "closed"
      ],
      "action": [
        "lying on the desk",
        "holding stationery"
      ],
      "synonyms_and_related_words": [
        "pencil case",
        "pen case",
        "stationery case",
        "zippered case",
        "school supply pouch",
        "pencil pouch"
      ],
      "accepted_words": [
        "pencil case",
        "pen case",
        "stationery case",
        "zippered case",
        "school supply pouch",
        "pencil pouch"
      ],
      "common_typos": [
        "pencel case",
        "pencil cas",
        "pen cas",
        "stationary case",
        "ziper case",
        "pencil poach"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "case",
            "ja": "ケース"
          },
          {
            "en": "pencil case",
            "ja": "ペンケース"
          }
        ],
        "A2": [
          {
            "en": "pen case",
            "ja": "ペン入れ"
          },
          {
            "en": "pencil pouch",
            "ja": "筆箱、ペンポーチ"
          }
        ],
        "B1": [
          {
            "en": "stationery case",
            "ja": "文房具ケース"
          },
          {
            "en": "zippered case",
            "ja": "ファスナー付きケース"
          }
        ],
        "B2": [
          {
            "en": "compact stationery pouch",
            "ja": "小型の文房具ポーチ"
          },
          {
            "en": "portable school-supply container",
            "ja": "持ち運べる学用品入れ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a blue case holding the tools of study",
          "ja": "学習の道具を収めた青いケース"
        },
        {
          "en": "a quiet companion at the edge of the desk",
          "ja": "机の端にある静かな相棒"
        },
        {
          "en": "a small storehouse of pens and pencils",
          "ja": "ペンや鉛筆を収める小さな倉庫"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pencil case, blue, closed, desk",
          "text_en": "pencil case, blue, closed, desk",
          "text_ja": "ペンケース、青い、閉じている、机"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A blue pencil case is on the desk.",
          "text_en": "A blue pencil case is on the desk.",
          "text_ja": "青いペンケースが机の上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a dark blue pencil case near the front of the desk",
          "text_en": "a dark blue pencil case near the front of the desk",
          "text_ja": "机の手前にある濃い青色のペンケース"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The closed pencil case rests near the edge of the desk, ready to hold his stationery.",
          "text_en": "The closed pencil case rests near the edge of the desk, ready to hold his stationery.",
          "text_ja": "閉じたペンケースが机の端近くに置かれ、文房具を収める準備ができています。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "eraser",
      "label_ja": "消しゴム",
      "category": "object",
      "importance": "secondary",
      "description": "A small white rectangular eraser is placed near the center front of the desk.",
      "bounding_box_conceptual": [
        84,
        47,
        5,
        6
      ],
      "color": [
        "white",
        "light gray"
      ],
      "attributes": [
        "small",
        "rectangular",
        "white",
        "clean"
      ],
      "action": [
        "resting on the desk",
        "being ready for use"
      ],
      "synonyms_and_related_words": [
        "eraser",
        "rubber",
        "white eraser",
        "school eraser",
        "correction tool"
      ],
      "accepted_words": [
        "eraser",
        "rubber",
        "white eraser",
        "school eraser",
        "correction tool"
      ],
      "common_typos": [
        "eracer",
        "erasor",
        "eraserr",
        "rubberr",
        "corection tool"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "eraser",
            "ja": "消しゴム"
          },
          {
            "en": "white",
            "ja": "白い"
          }
        ],
        "A2": [
          {
            "en": "school eraser",
            "ja": "学校用の消しゴム"
          },
          {
            "en": "rubber",
            "ja": "消しゴム（主にイギリス英語）"
          }
        ],
        "B1": [
          {
            "en": "correction tool",
            "ja": "修正するための道具"
          },
          {
            "en": "rectangular eraser",
            "ja": "長方形の消しゴム"
          }
        ],
        "B2": [
          {
            "en": "tool for correcting mistakes",
            "ja": "間違いを修正する道具"
          },
          {
            "en": "small symbol of revision",
            "ja": "見直しを象徴する小さな物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small tool for second chances",
          "ja": "やり直す機会を与える小さな道具"
        },
        {
          "en": "a white block waiting to correct a mistake",
          "ja": "間違いを直すのを待つ白い四角"
        },
        {
          "en": "a reminder that learning includes revision",
          "ja": "学びには修正も含まれると伝える物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "eraser, white, small, desk",
          "text_en": "eraser, white, small, desk",
          "text_ja": "消しゴム、白い、小さい、机"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is an eraser in front of the notebook.",
          "text_en": "There is an eraser in front of the notebook.",
          "text_ja": "ノートの前に消しゴムがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a small white eraser resting on the desk",
          "text_en": "a small white eraser resting on the desk",
          "text_ja": "机の上に置かれた小さな白い消しゴム"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The eraser near the notebook suggests that the boy is carefully checking and revising his work.",
          "text_en": "The eraser near the notebook suggests that the boy is carefully checking and revising his work.",
          "text_ja": "ノートの近くにある消しゴムから、男子が課題を丁寧に確認し修正していることがうかがえます。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "mug",
      "label_ja": "マグカップ",
      "category": "object",
      "importance": "secondary",
      "description": "A gray-blue ceramic mug containing a dark drink sits near the stack of books.",
      "bounding_box_conceptual": [
        82,
        55,
        17,
        14
      ],
      "color": [
        "gray-blue",
        "black",
        "white"
      ],
      "attributes": [
        "ceramic",
        "round",
        "full",
        "warm-looking"
      ],
      "action": [
        "sitting on the desk",
        "holding a drink"
      ],
      "synonyms_and_related_words": [
        "mug",
        "cup",
        "ceramic mug",
        "drink",
        "hot drink",
        "tea",
        "coffee",
        "beverage"
      ],
      "accepted_words": [
        "mug",
        "cup",
        "ceramic mug",
        "drink",
        "hot drink",
        "tea",
        "coffee",
        "beverage"
      ],
      "common_typos": [
        "mugg",
        "mug cup",
        "ceremic mug",
        "drnik",
        "cofee",
        "coffe",
        "bevarage"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cup",
            "ja": "カップ"
          },
          {
            "en": "drink",
            "ja": "飲み物"
          }
        ],
        "A2": [
          {
            "en": "mug",
            "ja": "マグカップ"
          },
          {
            "en": "hot drink",
            "ja": "温かい飲み物"
          }
        ],
        "B1": [
          {
            "en": "ceramic mug",
            "ja": "陶器のマグカップ"
          },
          {
            "en": "beverage",
            "ja": "飲み物"
          }
        ],
        "B2": [
          {
            "en": "a warming drink beside his books",
            "ja": "本のそばにある体を温める飲み物"
          },
          {
            "en": "a quiet source of comfort during study",
            "ja": "勉強中の静かな安らぎとなる物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm drink keeping him company",
          "ja": "彼に寄り添う温かな飲み物"
        },
        {
          "en": "a mug offering a quiet pause between tasks",
          "ja": "課題の合間に静かな休息を与えるマグカップ"
        },
        {
          "en": "a small comfort beside the books",
          "ja": "本のそばにある小さな安らぎ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mug, cup, drink, gray",
          "text_en": "mug, cup, drink, gray",
          "text_ja": "マグカップ、カップ、飲み物、灰色"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a mug on the desk.",
          "text_en": "There is a mug on the desk.",
          "text_ja": "机の上にマグカップがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a gray ceramic mug filled with a dark drink",
          "text_en": "a gray ceramic mug filled with a dark drink",
          "text_ja": "濃い色の飲み物が入った灰色の陶器のマグカップ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The mug beside the books adds a sense of comfort to the focused study scene.",
          "text_en": "The mug beside the books adds a sense of comfort to the focused study scene.",
          "text_ja": "本のそばにあるマグカップが、集中した学習場面に居心地の良さを加えています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "stack of books",
      "label_ja": "積み重ねられた本",
      "category": "object",
      "importance": "secondary",
      "description": "Several thick books with green, orange, white, and blue covers are stacked on the right side of the desk.",
      "bounding_box_conceptual": [
        70,
        68,
        25,
        29
      ],
      "color": [
        "green",
        "orange",
        "white",
        "blue"
      ],
      "attributes": [
        "stacked",
        "thick",
        "colorful",
        "academic",
        "heavy"
      ],
      "action": [
        "resting on the desk",
        "being stacked",
        "supporting study"
      ],
      "synonyms_and_related_words": [
        "books",
        "stack of books",
        "stacked books",
        "pile of books",
        "textbooks",
        "school books",
        "reference books",
        "volumes"
      ],
      "accepted_words": [
        "books",
        "stack of books",
        "stacked books",
        "pile of books",
        "textbooks",
        "school books",
        "reference books",
        "volumes"
      ],
      "common_typos": [
        "boks",
        "bookes",
        "stack books",
        "staked books",
        "pile of boks",
        "textboks",
        "referrence books",
        "volums"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "books",
            "ja": "本（複数）"
          },
          {
            "en": "many books",
            "ja": "たくさんの本"
          }
        ],
        "A2": [
          {
            "en": "stacked books",
            "ja": "積み重ねられた本"
          },
          {
            "en": "textbooks",
            "ja": "教科書"
          }
        ],
        "B1": [
          {
            "en": "pile of books",
            "ja": "本の山"
          },
          {
            "en": "reference books",
            "ja": "参考図書"
          }
        ],
        "B2": [
          {
            "en": "academic volumes",
            "ja": "学術的な書籍"
          },
          {
            "en": "collection of study materials",
            "ja": "学習資料のまとまり"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small tower of knowledge",
          "ja": "知識でできた小さな塔"
        },
        {
          "en": "books waiting to reveal their ideas",
          "ja": "考えを明かすのを待つ本"
        },
        {
          "en": "a colorful foundation for further learning",
          "ja": "さらなる学びを支える色とりどりの土台"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "books, stack, many, textbook",
          "text_en": "books, stack, many, textbook",
          "text_ja": "本、積み重ね、たくさんの、教科書"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are several books on the desk.",
          "text_en": "There are several books on the desk.",
          "text_ja": "机の上に数冊の本があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a stack of thick books beside the mug",
          "text_en": "a stack of thick books beside the mug",
          "text_ja": "マグカップのそばにある厚い本の山"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The neatly stacked books indicate that the boy has prepared several resources for his studies.",
          "text_en": "The neatly stacked books indicate that the boy has prepared several resources for his studies.",
          "text_ja": "きちんと積み重ねられた本から、男子が勉強のために複数の資料を用意していることが分かります。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "window",
      "label_ja": "窓",
      "category": "setting",
      "importance": "primary",
      "description": "A large open-looking window behind the desk lets bright morning sunlight into the room and shows green trees outside.",
      "bounding_box_conceptual": [
        0,
        0,
        58,
        47
      ],
      "color": [
        "white",
        "blue",
        "green",
        "golden"
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
        "showing trees",
        "brightening the room"
      ],
      "synonyms_and_related_words": [
        "window",
        "large window",
        "study-room window",
        "windowpane",
        "glass window",
        "outside view",
        "daylight"
      ],
      "accepted_words": [
        "window",
        "large window",
        "study-room window",
        "windowpane",
        "glass window",
        "outside view",
        "daylight"
      ],
      "common_typos": [
        "windo",
        "winow",
        "windoe",
        "window pain",
        "windowpanee",
        "outside veiw",
        "day ligth"
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
            "en": "daylight",
            "ja": "昼の自然光"
          }
        ],
        "B1": [
          {
            "en": "windowpane",
            "ja": "窓ガラス"
          },
          {
            "en": "outside view",
            "ja": "外の眺め"
          }
        ],
        "B2": [
          {
            "en": "sunlit opening",
            "ja": "日差しを受けた開口部"
          },
          {
            "en": "source of natural illumination",
            "ja": "自然光の源"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a window bringing the green outdoors into the room",
          "ja": "緑豊かな外の景色を部屋へ運ぶ窓"
        },
        {
          "en": "a bright frame around the morning sky",
          "ja": "朝空を囲む明るい額縁"
        },
        {
          "en": "a gateway through which the day enters",
          "ja": "一日が入ってくる入口"
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
          "text": "beside the window / through the window",
          "text_en": "beside the window / through the window",
          "text_ja": "窓のそばに／窓を通って"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "bright sunlight coming through the large window",
          "text_en": "bright sunlight coming through the large window",
          "text_ja": "大きな窓から差し込む明るい日差し"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Natural light streams through the window, illuminating the boy's entire workspace.",
          "text_en": "Natural light streams through the window, illuminating the boy's entire workspace.",
          "text_ja": "自然光が窓から差し込み、男子の学習スペース全体を照らしています。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "blue curtains",
      "label_ja": "青いカーテン",
      "category": "setting",
      "importance": "secondary",
      "description": "Light blue curtains frame both sides of the window and are tied back to let sunlight enter.",
      "bounding_box_conceptual": [
        0,
        0,
        72,
        48
      ],
      "color": [
        "light blue",
        "white"
      ],
      "attributes": [
        "soft",
        "light blue",
        "tied back",
        "flowing"
      ],
      "action": [
        "framing the window",
        "being tied back",
        "letting in light"
      ],
      "synonyms_and_related_words": [
        "curtains",
        "blue curtains",
        "drapes",
        "window curtains",
        "fabric panels"
      ],
      "accepted_words": [
        "curtains",
        "blue curtains",
        "drapes",
        "window curtains",
        "fabric panels"
      ],
      "common_typos": [
        "curtans",
        "curtians",
        "blue curtan",
        "draps",
        "window curtians"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "curtains",
            "ja": "カーテン"
          },
          {
            "en": "blue",
            "ja": "青い"
          }
        ],
        "A2": [
          {
            "en": "blue curtains",
            "ja": "青いカーテン"
          },
          {
            "en": "window curtains",
            "ja": "窓のカーテン"
          }
        ],
        "B1": [
          {
            "en": "tied-back curtains",
            "ja": "脇にまとめられたカーテン"
          },
          {
            "en": "drapes",
            "ja": "厚手のカーテン"
          }
        ],
        "B2": [
          {
            "en": "soft fabric framing the window",
            "ja": "窓を縁取る柔らかな布"
          },
          {
            "en": "light curtains opening the room to daylight",
            "ja": "部屋へ日光を招き入れる明るいカーテン"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "blue curtains holding back the edges of the morning",
          "ja": "朝の端を脇に寄せている青いカーテン"
        },
        {
          "en": "soft fabric framing a bright outdoor world",
          "ja": "明るい外の世界を縁取る柔らかな布"
        },
        {
          "en": "curtains making space for sunlight",
          "ja": "日差しのために空間を開けるカーテン"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "curtains, blue, window, soft",
          "text_en": "curtains, blue, window, soft",
          "text_ja": "カーテン、青い、窓、柔らかい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Blue curtains are beside the window.",
          "text_en": "Blue curtains are beside the window.",
          "text_ja": "青いカーテンが窓の両側にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "light blue curtains tied back beside the window",
          "text_en": "light blue curtains tied back beside the window",
          "text_ja": "窓の脇にまとめられた明るい青色のカーテン"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The tied-back curtains allow the room to be filled with natural morning light.",
          "text_en": "The tied-back curtains allow the room to be filled with natural morning light.",
          "text_ja": "脇にまとめられたカーテンによって、部屋は自然な朝の光で満たされています。"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "potted plant",
      "label_ja": "鉢植え",
      "category": "nature",
      "importance": "secondary",
      "description": "A small green potted plant sits on the windowsill behind the lamp.",
      "bounding_box_conceptual": [
        43,
        14,
        19,
        16
      ],
      "color": [
        "green",
        "cream",
        "brown"
      ],
      "attributes": [
        "small",
        "green",
        "fresh",
        "potted",
        "decorative"
      ],
      "action": [
        "sitting on the windowsill",
        "growing toward the light",
        "decorating the room"
      ],
      "synonyms_and_related_words": [
        "plant",
        "potted plant",
        "green plant",
        "houseplant",
        "indoor plant",
        "leaves",
        "greenery"
      ],
      "accepted_words": [
        "plant",
        "potted plant",
        "green plant",
        "houseplant",
        "indoor plant",
        "leaves",
        "greenery"
      ],
      "common_typos": [
        "palnt",
        "plantt",
        "potted palnt",
        "house palnt",
        "indor plant",
        "leafs",
        "greenary"
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
            "en": "green plant",
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
            "en": "natural decorative element",
            "ja": "自然を感じさせる装飾要素"
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
          "en": "a small piece of nature beside his studies",
          "ja": "学習のそばにある小さな自然"
        },
        {
          "en": "a living detail among books and stationery",
          "ja": "本や文房具の中にある生きた細部"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "plant, green, leaves, pot",
          "text_en": "plant, green, leaves, pot",
          "text_ja": "植物、緑、葉、鉢"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a plant on the windowsill.",
          "text_en": "There is a plant on the windowsill.",
          "text_ja": "窓辺に植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a small potted plant growing near the sunlight",
          "text_en": "a small potted plant growing near the sunlight",
          "text_ja": "日差しの近くで育つ小さな鉢植え"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The green plant adds a fresh, natural touch to the organized study space.",
          "text_en": "The green plant adds a fresh, natural touch to the organized study space.",
          "text_ja": "緑の植物が、整理された学習空間に新鮮で自然な雰囲気を加えています。"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "bookshelf",
      "label_ja": "本棚",
      "category": "furniture",
      "importance": "secondary",
      "description": "A wooden bookshelf behind the boy contains books, a framed photo, a blue storage box, and a globe.",
      "bounding_box_conceptual": [
        30,
        77,
        66,
        23
      ],
      "color": [
        "brown",
        "blue",
        "multicolored"
      ],
      "attributes": [
        "wooden",
        "organized",
        "full",
        "practical"
      ],
      "action": [
        "holding books and objects",
        "standing behind the boy"
      ],
      "synonyms_and_related_words": [
        "bookshelf",
        "bookcase",
        "shelf",
        "wooden shelf",
        "storage shelf",
        "book rack"
      ],
      "accepted_words": [
        "bookshelf",
        "bookcase",
        "shelf",
        "wooden shelf",
        "storage shelf",
        "book rack"
      ],
      "common_typos": [
        "bookshelve",
        "book shelf",
        "bookshelfs",
        "bookcasee",
        "shelfs",
        "wooden shelve"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shelf",
            "ja": "棚"
          },
          {
            "en": "bookshelf",
            "ja": "本棚"
          }
        ],
        "A2": [
          {
            "en": "bookcase",
            "ja": "書棚"
          },
          {
            "en": "wooden shelf",
            "ja": "木製の棚"
          }
        ],
        "B1": [
          {
            "en": "storage shelf",
            "ja": "収納棚"
          },
          {
            "en": "organized bookcase",
            "ja": "整理された本棚"
          }
        ],
        "B2": [
          {
            "en": "multipurpose shelving unit",
            "ja": "多目的の棚"
          },
          {
            "en": "background filled with personal study items",
            "ja": "個人的な学習用品で満たされた背景"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a shelf holding both knowledge and memories",
          "ja": "知識と思い出の両方を収める棚"
        },
        {
          "en": "a quiet background of books and personal objects",
          "ja": "本と私物からなる静かな背景"
        },
        {
          "en": "an organized corner reflecting the student's life",
          "ja": "生徒の生活を映す整理された一角"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bookshelf, books, box, photo",
          "text_en": "bookshelf, books, box, photo",
          "text_ja": "本棚、本、箱、写真"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a bookshelf behind the boy.",
          "text_en": "There is a bookshelf behind the boy.",
          "text_ja": "男子の後ろに本棚があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden bookshelf filled with books and personal items",
          "text_en": "a wooden bookshelf filled with books and personal items",
          "text_ja": "本や私物で満たされた木製の本棚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The organized bookshelf creates a realistic background that reflects both study and daily life.",
          "text_en": "The organized bookshelf creates a realistic background that reflects both study and daily life.",
          "text_ja": "整理された本棚が、学習と日常生活の両方を映す現実的な背景を作っています。"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "globe",
      "label_ja": "地球儀",
      "category": "object",
      "importance": "secondary",
      "description": "A blue globe showing the continents stands on top of the bookshelf.",
      "bounding_box_conceptual": [
        10,
        73,
        25,
        18
      ],
      "color": [
        "blue",
        "green",
        "brown",
        "black"
      ],
      "attributes": [
        "round",
        "blue",
        "educational",
        "decorative"
      ],
      "action": [
        "standing on the shelf",
        "showing a map of the world"
      ],
      "synonyms_and_related_words": [
        "globe",
        "world globe",
        "model of Earth",
        "world map model",
        "geography globe"
      ],
      "accepted_words": [
        "globe",
        "world globe",
        "model of Earth",
        "world map model",
        "geography globe",
        "Earth model"
      ],
      "common_typos": [
        "gloub",
        "globe",
        "world gloub",
        "model of Eath",
        "geography gloub"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "globe",
            "ja": "地球儀"
          },
          {
            "en": "world",
            "ja": "世界"
          }
        ],
        "A2": [
          {
            "en": "world map",
            "ja": "世界地図"
          },
          {
            "en": "model of Earth",
            "ja": "地球の模型"
          }
        ],
        "B1": [
          {
            "en": "geography globe",
            "ja": "地理学習用の地球儀"
          },
          {
            "en": "continents",
            "ja": "大陸"
          }
        ],
        "B2": [
          {
            "en": "three-dimensional representation of Earth",
            "ja": "地球を立体的に表した模型"
          },
          {
            "en": "symbol of global learning",
            "ja": "世界を学ぶことの象徴"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small world resting on the shelf",
          "ja": "棚の上に置かれた小さな世界"
        },
        {
          "en": "a reminder that learning reaches beyond the room",
          "ja": "学びが部屋の外の世界へ広がることを伝える物"
        },
        {
          "en": "the whole planet within arm's reach",
          "ja": "手の届くところにある地球全体"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "globe, world, Earth, blue",
          "text_en": "globe, world, Earth, blue",
          "text_ja": "地球儀、世界、地球、青い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A globe is on the bookshelf.",
          "text_en": "A globe is on the bookshelf.",
          "text_ja": "地球儀が本棚の上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a blue globe showing the continents",
          "text_en": "a blue globe showing the continents",
          "text_ja": "大陸を示す青い地球儀"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The globe on the shelf suggests an interest in geography and the wider world.",
          "text_en": "The globe on the shelf suggests an interest in geography and the wider world.",
          "text_ja": "棚の上の地球儀から、地理や広い世界への関心がうかがえます。"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "motivational poster and calendar",
      "label_ja": "励ましのポスターとカレンダー",
      "category": "sign",
      "importance": "secondary",
      "description": "A wall poster reading 'Believe in yourself!' hangs above a monthly calendar behind the boy.",
      "bounding_box_conceptual": [
        3,
        54,
        39,
        17
      ],
      "color": [
        "white",
        "blue",
        "yellow"
      ],
      "attributes": [
        "motivational",
        "positive",
        "handwritten-style",
        "practical"
      ],
      "action": [
        "displaying a message",
        "showing dates",
        "decorating the wall"
      ],
      "synonyms_and_related_words": [
        "poster",
        "motivational poster",
        "calendar",
        "wall calendar",
        "encouraging message",
        "inspirational sign"
      ],
      "accepted_words": [
        "poster",
        "motivational poster",
        "calendar",
        "wall calendar",
        "encouraging message",
        "inspirational sign"
      ],
      "common_typos": [
        "postar",
        "motivatonal poster",
        "calender",
        "wall calender",
        "encouriging message",
        "inspirational sine"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "poster",
            "ja": "ポスター"
          },
          {
            "en": "calendar",
            "ja": "カレンダー"
          }
        ],
        "A2": [
          {
            "en": "wall calendar",
            "ja": "壁掛けカレンダー"
          },
          {
            "en": "positive message",
            "ja": "前向きなメッセージ"
          }
        ],
        "B1": [
          {
            "en": "motivational poster",
            "ja": "励ましのポスター"
          },
          {
            "en": "encouraging phrase",
            "ja": "励ましの言葉"
          }
        ],
        "B2": [
          {
            "en": "visual reminder of self-confidence",
            "ja": "自信を持つよう促す視覚的なメッセージ"
          },
          {
            "en": "symbol of planning and motivation",
            "ja": "計画性と意欲の象徴"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "words of encouragement watching over his studies",
          "ja": "勉強を見守る励ましの言葉"
        },
        {
          "en": "a message reminding him to trust himself",
          "ja": "自分を信じるよう思い出させるメッセージ"
        },
        {
          "en": "a calendar turning goals into daily steps",
          "ja": "目標を毎日の一歩へ変えるカレンダー"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "poster, calendar, message, wall",
          "text_en": "poster, calendar, message, wall",
          "text_ja": "ポスター、カレンダー、メッセージ、壁"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a poster and a calendar on the wall.",
          "text_en": "There is a poster and a calendar on the wall.",
          "text_ja": "壁にポスターとカレンダーがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a motivational poster above a monthly calendar",
          "text_en": "a motivational poster above a monthly calendar",
          "text_ja": "月間カレンダーの上にある励ましのポスター"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The encouraging poster reinforces the productive and hopeful mood of the room.",
          "text_en": "The encouraging poster reinforces the productive and hopeful mood of the room.",
          "text_ja": "励ましのポスターが、部屋の生産的で希望に満ちた雰囲気をさらに強めています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "poster on the wall behind the boy",
      "content": "Believe in yourself!",
      "description_ja": "自分を信じるよう励ます前向きなメッセージ。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "believe, yourself, message, poster",
          "text_en": "believe, yourself, message, poster",
          "text_ja": "信じる、自分自身、メッセージ、ポスター"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Believe in yourself. means trust yourself.",
          "text_en": "Believe in yourself. means trust yourself.",
          "text_ja": "Believe in yourself. は「自分を信じよう」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The poster says...",
          "text_en": "The poster says...",
          "text_ja": "そのポスターには……と書かれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The phrase 'Believe in yourself!' serves as a motivational reminder while the boy studies.",
          "text_en": "The phrase 'Believe in yourself!' serves as a motivational reminder while the boy studies.",
          "text_ja": "「Believe in yourself!」という言葉は、男子が勉強する間、自信を持つよう促す励ましとなっています。"
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
        "write in a notebook",
        "writing notes",
        "take notes",
        "record information",
        "fill in the notebook",
        "put ideas on paper"
      ],
      "accepted_words": [
        "write",
        "writes",
        "writing",
        "write in a notebook",
        "writing notes",
        "take notes",
        "taking notes",
        "record",
        "recording information",
        "put ideas on paper"
      ],
      "common_typos": [
        "writting",
        "writeing",
        "writng",
        "taking nots",
        "recroding",
        "puting ideas on paper"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "write",
            "ja": "書く"
          },
          {
            "en": "writing",
            "ja": "書いている"
          }
        ],
        "A2": [
          {
            "en": "write in a notebook",
            "ja": "ノートに書く"
          },
          {
            "en": "take notes",
            "ja": "ノートを取る"
          }
        ],
        "B1": [
          {
            "en": "record information",
            "ja": "情報を書き留める"
          },
          {
            "en": "complete written work",
            "ja": "筆記課題を仕上げる"
          }
        ],
        "B2": [
          {
            "en": "translate his thoughts into written form",
            "ja": "考えを書き言葉へ変える"
          },
          {
            "en": "document his learning process",
            "ja": "学習過程を記録する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning thoughts into lines of writing",
          "ja": "考えを文字の行へ変えている"
        },
        {
          "en": "building knowledge one sentence at a time",
          "ja": "一文ずつ知識を積み上げている"
        },
        {
          "en": "leaving a visible record of his effort",
          "ja": "努力の目に見える記録を残している"
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
          "text": "The boy is writing in a notebook.",
          "text_en": "The boy is writing in a notebook.",
          "text_ja": "男子はノートに書いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "write carefully with a pen in an open notebook",
          "text_en": "write carefully with a pen in an open notebook",
          "text_ja": "開いたノートにペンで丁寧に書く"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Writing steadily in his notebook, the boy appears completely absorbed in his schoolwork.",
          "text_en": "Writing steadily in his notebook, the boy appears completely absorbed in his schoolwork.",
          "text_ja": "ノートに着実に書きながら、男子は学校の課題に完全に没頭しているように見えます。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Studying at home",
      "description_ja": "自宅で勉強している",
      "involved_elements": [
        "element_001",
        "element_004",
        "element_010",
        "element_014"
      ],
      "synonyms": [
        "study at home",
        "studying at a desk",
        "do homework",
        "work on school assignments",
        "learn independently",
        "review lessons"
      ],
      "accepted_words": [
        "study",
        "studies",
        "studying",
        "study at home",
        "do homework",
        "doing homework",
        "work on school assignments",
        "learning",
        "reviewing lessons"
      ],
      "common_typos": [
        "studing",
        "studyng",
        "home work",
        "doing homewrok",
        "assigments",
        "revieing lessons"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "study",
            "ja": "勉強する"
          },
          {
            "en": "homework",
            "ja": "宿題"
          }
        ],
        "A2": [
          {
            "en": "study at home",
            "ja": "自宅で勉強する"
          },
          {
            "en": "do homework",
            "ja": "宿題をする"
          }
        ],
        "B1": [
          {
            "en": "work on an assignment",
            "ja": "課題に取り組む"
          },
          {
            "en": "review a lesson",
            "ja": "授業内容を復習する"
          }
        ],
        "B2": [
          {
            "en": "engage in independent study",
            "ja": "自主学習に取り組む"
          },
          {
            "en": "maintain a productive study routine",
            "ja": "生産的な学習習慣を続ける"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "shaping his future through quiet effort",
          "ja": "静かな努力を通して未来を形作っている"
        },
        {
          "en": "turning a sunny morning into progress",
          "ja": "晴れた朝を成長の時間へ変えている"
        },
        {
          "en": "creating his own classroom at home",
          "ja": "自宅に自分だけの教室を作っている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is studying at home.",
          "text_en": "He is studying at home.",
          "text_ja": "彼は自宅で勉強しています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "at home / at the desk",
          "text_en": "at home / at the desk",
          "text_ja": "自宅で／机に向かって"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "work quietly on his homework in a bright room",
          "text_en": "work quietly on his homework in a bright room",
          "text_ja": "明るい部屋で静かに宿題に取り組む"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Surrounded by books and stationery, he is engaged in a productive period of independent study.",
          "text_en": "Surrounded by books and stationery, he is engaged in a productive period of independent study.",
          "text_ja": "本や文房具に囲まれ、彼は生産的な自主学習の時間を過ごしています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Holding a pen in his right hand",
      "description_ja": "右手にペンを持っている",
      "involved_elements": [
        "element_001",
        "element_003"
      ],
      "synonyms": [
        "hold a pen",
        "holding a pen",
        "grip a pen",
        "write with a pen",
        "guide the pen across the page"
      ],
      "accepted_words": [
        "hold",
        "holds",
        "holding",
        "hold a pen",
        "holding a pen",
        "grip",
        "gripping",
        "write with a pen",
        "writing with a pen"
      ],
      "common_typos": [
        "holing",
        "hoding",
        "holdng",
        "griping",
        "right hans",
        "writting with a pen"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold",
            "ja": "持つ"
          },
          {
            "en": "hand",
            "ja": "手"
          }
        ],
        "A2": [
          {
            "en": "right hand",
            "ja": "右手"
          },
          {
            "en": "hold a pen",
            "ja": "ペンを持つ"
          }
        ],
        "B1": [
          {
            "en": "grip the pen",
            "ja": "ペンを握る"
          },
          {
            "en": "guide the pen",
            "ja": "ペンを動かす"
          }
        ],
        "B2": [
          {
            "en": "maintain a steady grip",
            "ja": "安定した持ち方を保つ"
          },
          {
            "en": "move the pen deliberately across the page",
            "ja": "意識的にペンをページ上で動かす"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "guiding the pen with patient concentration",
          "ja": "辛抱強く集中してペンを動かしている"
        },
        {
          "en": "holding the tool that carries his thoughts",
          "ja": "考えを運ぶ道具を持っている"
        },
        {
          "en": "steadying his hand as ideas become words",
          "ja": "考えが言葉になる中で手を安定させている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is holding a pen in his right hand.",
          "text_en": "He is holding a pen in his right hand.",
          "text_ja": "彼は右手にペンを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold the pen steadily while writing",
          "text_en": "hold the pen steadily while writing",
          "text_ja": "書きながらペンをしっかり持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the pen firmly in his right hand, he writes each line with care.",
          "text_en": "Holding the pen firmly in his right hand, he writes each line with care.",
          "text_ja": "右手でペンをしっかり持ちながら、彼は一行ずつ丁寧に書いています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Sitting and leaning toward the notebook",
      "description_ja": "座ってノートの方へ身を乗り出している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_004"
      ],
      "synonyms": [
        "sit at the desk",
        "lean forward",
        "bend over the notebook",
        "sit in a chair",
        "focus closely on the page"
      ],
      "accepted_words": [
        "sit",
        "sits",
        "sitting",
        "sit at the desk",
        "lean forward",
        "leaning forward",
        "bend over",
        "focus on the page",
        "sitting in a chair"
      ],
      "common_typos": [
        "siting",
        "sittting",
        "leaning foward",
        "bendding over",
        "focusig on the page"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sit",
            "ja": "座る"
          },
          {
            "en": "chair",
            "ja": "椅子"
          }
        ],
        "A2": [
          {
            "en": "sit at the desk",
            "ja": "机に向かって座る"
          },
          {
            "en": "lean forward",
            "ja": "前に身を乗り出す"
          }
        ],
        "B1": [
          {
            "en": "bend over the notebook",
            "ja": "ノートの上へ身をかがめる"
          },
          {
            "en": "focus closely on the page",
            "ja": "ページを注意深く見る"
          }
        ],
        "B2": [
          {
            "en": "adopt a concentrated posture",
            "ja": "集中した姿勢を取る"
          },
          {
            "en": "lean toward his work with full attention",
            "ja": "十分な注意を向けて課題の方へ身を傾ける"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "leaning into the work before him",
          "ja": "目の前の課題へ身を乗り出している"
        },
        {
          "en": "forming a quiet circle of concentration around the page",
          "ja": "ページの周りに静かな集中の輪を作っている"
        },
        {
          "en": "bringing his eyes closer to every careful line",
          "ja": "丁寧な一行一行へ目を近づけている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is sitting at the desk.",
          "text_en": "The boy is sitting at the desk.",
          "text_ja": "男子は机に向かって座っています。"
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
          "text": "lean slightly forward over the open notebook",
          "text_en": "lean slightly forward over the open notebook",
          "text_ja": "開いたノートの上へ少し前に身を乗り出す"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Leaning forward with a concentrated expression, he gives his full attention to the notebook.",
          "text_en": "Leaning forward with a concentrated expression, he gives his full attention to the notebook.",
          "text_ja": "集中した表情で前へ身を乗り出し、彼はノートに全神経を向けています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Morning sunlight streaming through the window",
      "description_ja": "朝の日差しが窓から差し込んでいる",
      "involved_elements": [
        "element_011",
        "element_012",
        "element_004"
      ],
      "synonyms": [
        "sunlight streams through the window",
        "morning light fills the room",
        "daylight shines on the desk",
        "sunlight illuminates the workspace",
        "golden light enters the room"
      ],
      "accepted_words": [
        "sunlight streams",
        "light streams",
        "morning light fills",
        "daylight shines",
        "sunlight enters",
        "illuminates",
        "shining through the window",
        "fills the room"
      ],
      "common_typos": [
        "sunligt streams",
        "ligth streams",
        "morning ligth",
        "dayligth shines",
        "illuminats",
        "shining trough"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sunlight",
            "ja": "日差し"
          },
          {
            "en": "bright",
            "ja": "明るい"
          }
        ],
        "A2": [
          {
            "en": "morning light",
            "ja": "朝の光"
          },
          {
            "en": "light comes through the window",
            "ja": "光が窓から入る"
          }
        ],
        "B1": [
          {
            "en": "sunlight streams into the room",
            "ja": "日差しが部屋へ流れ込む"
          },
          {
            "en": "natural light illuminates the desk",
            "ja": "自然光が机を照らす"
          }
        ],
        "B2": [
          {
            "en": "golden illumination spreads across the workspace",
            "ja": "金色の光が作業スペース全体に広がる"
          },
          {
            "en": "radiant daylight creates a productive atmosphere",
            "ja": "輝く自然光が生産的な雰囲気を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight laying golden paths across the desk",
          "ja": "机の上に金色の道を作る日差し"
        },
        {
          "en": "the morning entering quietly through the window",
          "ja": "窓から静かに入ってくる朝"
        },
        {
          "en": "light turning the study room into a hopeful place",
          "ja": "勉強部屋を希望に満ちた場所へ変える光"
        }
      ],
      "hints": [
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
          "text": "warm morning light spreading across the wooden desk",
          "text_en": "warm morning light spreading across the wooden desk",
          "text_ja": "木製の机の上に広がる暖かな朝の光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Streaming through the window, the sunlight brightens both the room and the boy's mood.",
          "text_en": "Streaming through the window, the sunlight brightens both the room and the boy's mood.",
          "text_ja": "窓から差し込む日差しが、部屋と男子の気持ちの両方を明るくしています。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "The lamp illuminating the notebook",
      "description_ja": "ランプがノートを照らしている",
      "involved_elements": [
        "element_005",
        "element_002",
        "element_004"
      ],
      "synonyms": [
        "lamp shines on the notebook",
        "light illuminates the page",
        "desk lamp lights the workspace",
        "lamp casts light",
        "task light brightens the desk"
      ],
      "accepted_words": [
        "lamp shines",
        "shining",
        "illuminates",
        "lighting the notebook",
        "casts light",
        "brightens the desk",
        "lights the workspace"
      ],
      "common_typos": [
        "lamp shins",
        "shinning",
        "iluminates",
        "lighting the notbook",
        "casts ligth",
        "brightenss"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shine",
            "ja": "照らす"
          },
          {
            "en": "lamp",
            "ja": "ランプ"
          }
        ],
        "A2": [
          {
            "en": "light the notebook",
            "ja": "ノートを照らす"
          },
          {
            "en": "shine on the desk",
            "ja": "机を照らす"
          }
        ],
        "B1": [
          {
            "en": "illuminate the page",
            "ja": "ページを照らす"
          },
          {
            "en": "cast light over the desk",
            "ja": "机の上に光を投げかける"
          }
        ],
        "B2": [
          {
            "en": "provide focused task lighting",
            "ja": "作業に集中するための照明を与える"
          },
          {
            "en": "create a concentrated pool of light",
            "ja": "集中した光の範囲を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the lamp watching over every written line",
          "ja": "書かれる一行一行を見守るランプ"
        },
        {
          "en": "a circle of light protecting his concentration",
          "ja": "彼の集中を守る光の輪"
        },
        {
          "en": "soft light guiding the pen across the page",
          "ja": "ページ上のペンを導く柔らかな光"
        }
      ],
      "hints": [
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
          "text": "a desk lamp casting soft light over the page",
          "text_en": "a desk lamp casting soft light over the page",
          "text_ja": "ページの上に柔らかな光を落とすデスクランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Positioned beside the window, the lamp provides additional light for the boy's detailed work.",
          "text_en": "Positioned beside the window, the lamp provides additional light for the boy's detailed work.",
          "text_ja": "窓のそばに置かれたランプが、男子の細かな作業に追加の光を与えています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Study materials arranged on the desk",
      "description_ja": "学習用品が机の上に並べられている",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_006",
        "element_007",
        "element_008",
        "element_009",
        "element_010"
      ],
      "synonyms": [
        "materials are arranged",
        "books are stacked",
        "stationery is placed on the desk",
        "study tools are organized",
        "objects rest on the table"
      ],
      "accepted_words": [
        "arranged",
        "organized",
        "placed",
        "resting",
        "stacked",
        "lying on the desk",
        "spread out",
        "study materials",
        "stationery"
      ],
      "common_typos": [
        "aranged",
        "organisedd",
        "plaiced",
        "restting",
        "staked",
        "lieing",
        "stationary"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "on the desk",
            "ja": "机の上に"
          },
          {
            "en": "books and pencils",
            "ja": "本と鉛筆"
          }
        ],
        "A2": [
          {
            "en": "objects are arranged",
            "ja": "物が並べられている"
          },
          {
            "en": "books are stacked",
            "ja": "本が積み重ねられている"
          }
        ],
        "B1": [
          {
            "en": "study materials are organized",
            "ja": "学習用品が整理されている"
          },
          {
            "en": "stationery is spread across the desk",
            "ja": "文房具が机の上に広げられている"
          }
        ],
        "B2": [
          {
            "en": "the workspace is equipped with essential materials",
            "ja": "作業スペースに必要な教材がそろっている"
          },
          {
            "en": "carefully arranged objects support his learning",
            "ja": "丁寧に並べられた物が彼の学習を支えている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a desk telling the story of focused study",
          "ja": "集中した学習の物語を伝える机"
        },
        {
          "en": "tools of learning gathered around the notebook",
          "ja": "ノートの周りに集められた学びの道具"
        },
        {
          "en": "an organized landscape of books and stationery",
          "ja": "本や文房具からなる整理された風景"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many study materials on the desk.",
          "text_en": "There are many study materials on the desk.",
          "text_ja": "机の上にはたくさんの学習用品があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Around the notebook, there are...",
          "text_en": "Around the notebook, there are...",
          "text_ja": "ノートの周りには……があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Carefully arranged books and stationery make the desk appear organized and ready for productive study.",
          "text_en": "Carefully arranged books and stationery make the desk appear organized and ready for productive study.",
          "text_ja": "丁寧に並べられた本や文房具によって、机は整理され、生産的に勉強できる状態に見えます。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "boy",
      "relationship": "at",
      "object": "desk",
      "example_beginner": "The boy is at the desk.",
      "example_intermediate": "The boy is sitting at a wooden study desk."
    },
    {
      "subject": "notebook",
      "relationship": "in front of",
      "object": "boy",
      "example_beginner": "The notebook is in front of him.",
      "example_intermediate": "An open notebook lies directly in front of the boy."
    },
    {
      "subject": "pen",
      "relationship": "in",
      "object": "boy's right hand",
      "example_beginner": "The pen is in his right hand.",
      "example_intermediate": "He is holding a dark pen in his right hand."
    },
    {
      "subject": "desk lamp",
      "relationship": "to the left of",
      "object": "boy",
      "example_beginner": "The lamp is to the left of the boy.",
      "example_intermediate": "A large white desk lamp stands to the left of the student."
    },
    {
      "subject": "pencil case",
      "relationship": "near the front of",
      "object": "desk",
      "example_beginner": "The pencil case is near the front of the desk.",
      "example_intermediate": "A dark blue pencil case rests near the front edge of the desk."
    },
    {
      "subject": "mug",
      "relationship": "beside",
      "object": "stack of books",
      "example_beginner": "The mug is beside the books.",
      "example_intermediate": "A gray-blue mug sits beside a stack of thick books."
    },
    {
      "subject": "plant",
      "relationship": "on",
      "object": "windowsill",
      "example_beginner": "The plant is on the windowsill.",
      "example_intermediate": "A small potted plant sits on the windowsill behind the lamp."
    },
    {
      "subject": "bookshelf",
      "relationship": "behind",
      "object": "boy",
      "example_beginner": "The bookshelf is behind him.",
      "example_intermediate": "A wooden bookshelf filled with books and personal items stands behind the boy."
    },
    {
      "subject": "globe",
      "relationship": "on top of",
      "object": "bookshelf",
      "example_beginner": "The globe is on the bookshelf.",
      "example_intermediate": "A blue globe stands on top of the wooden bookshelf."
    },
    {
      "subject": "poster",
      "relationship": "above",
      "object": "calendar",
      "example_beginner": "The poster is above the calendar.",
      "example_intermediate": "A motivational poster hangs above a monthly calendar."
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
      "focused",
      "calm",
      "serious",
      "attentive",
      "hardworking",
      "studious",
      "concentrated",
      "productive"
    ],
    "study_room": [
      "bright",
      "quiet",
      "comfortable",
      "organized",
      "sunlit",
      "peaceful",
      "warm",
      "motivating",
      "personal"
    ],
    "desk": [
      "wooden",
      "broad",
      "smooth",
      "organized",
      "sunlit",
      "well-equipped",
      "tidy"
    ],
    "notebook": [
      "open",
      "lined",
      "written",
      "large",
      "handwritten",
      "well-used"
    ],
    "light": [
      "warm",
      "bright",
      "natural",
      "golden",
      "soft",
      "gentle",
      "radiant"
    ],
    "books": [
      "stacked",
      "thick",
      "colorful",
      "academic",
      "useful",
      "heavy"
    ],
    "atmosphere": [
      "focused",
      "productive",
      "hopeful",
      "quiet",
      "peaceful",
      "motivating",
      "studious"
    ]
  },
  "preposition_library": [
    {
      "preposition": "at",
      "meaning_ja": "〜のところで、〜に向かって",
      "example": "The boy is sitting at the desk."
    },
    {
      "preposition": "in",
      "meaning_ja": "〜の中に、〜で",
      "example": "He is studying in a bright room."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "There are several books on the desk."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The open notebook is in front of the boy."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The desk lamp is to the left of the boy."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The mug is beside the stack of books."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The bookshelf is behind the boy."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上方に",
      "example": "The poster is above the calendar."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Sunlight is coming through the window."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って、〜を持って",
      "example": "He is writing with a pen."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The pencil case is near the front of the desk."
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
        "The boy is writing in a notebook.",
        "He is studying at a desk.",
        "Sunlight is coming through the window."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で、その瞬間に行われている動作を表します。",
        "Scene 004では boy + is writing + in a notebook が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "画像の中に何があるかを説明する。",
      "examples": [
        "There is a lamp on the desk.",
        "There is a globe on the bookshelf.",
        "There are several books beside the mug."
      ],
      "hints": [
        "単数の物には There is、複数の物には There are を使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物・場所・雰囲気の特徴を説明する。",
      "examples": [
        "The boy is focused.",
        "The room is bright.",
        "The desk is organized."
      ],
      "hints": [
        "focused, bright, organized などをbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置の表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The boy is at the desk.",
        "The mug is beside the books.",
        "The globe is on the bookshelf."
      ],
      "hints": [
        "at, on, beside, behind, above, near などを使うと、物の位置を詳しく説明できます。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + verb + adverb",
      "label_ja": "副詞を使った動作の説明",
      "level": "intermediate",
      "purpose_ja": "動作がどのように行われているかを説明する。",
      "examples": [
        "The boy writes carefully.",
        "He studies quietly.",
        "Sunlight shines brightly through the window."
      ],
      "hints": [
        "carefully, quietly, brightly などの副詞を使うと、動作の様子が具体的になります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を加える。",
      "examples": [
        "The boy who is writing looks focused.",
        "The lamp that stands beside him is white.",
        "The window, which lets in sunlight, is very large."
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
        "Several books are stacked on the desk.",
        "The workspace is illuminated by sunlight.",
        "The stationery is neatly arranged."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で、〜されている状態を説明できます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Subject, present participial phrase, + verb",
      "label_ja": "現在分詞による追加説明",
      "level": "intermediate",
      "purpose_ja": "主語の同時動作や様子を一文の中に追加する。",
      "examples": [
        "The boy, holding a pen, is writing in his notebook.",
        "The lamp, shining on the page, helps him study.",
        "Sunlight, streaming through the window, brightens the desk."
      ],
      "hints": [
        "主語の後ろに -ing の表現を挟むと、同時に起きていることを自然に追加できます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の複数の動作や状況を簡潔につなぐ。",
      "examples": [
        "Holding a pen in his right hand, the boy writes carefully.",
        "Leaning over the notebook, he concentrates on his work.",
        "Streaming through the window, sunlight fills the room."
      ],
      "hints": [
        "文頭を動詞ingで始めると、高度で自然な画像描写になります。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "受け身の状態や背景を文頭で示す。",
      "examples": [
        "Surrounded by books and stationery, the boy studies quietly.",
        "Illuminated by morning sunlight, the desk looks warm and inviting.",
        "Encouraged by the poster behind him, he continues working."
      ],
      "hints": [
        "Surrounded, Illuminated, Encouraged などから始めると、背景と主動作を一文でつなげられます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できることを、断定せずに表す。",
      "examples": [
        "It looks like the boy is doing his homework.",
        "He seems to be preparing for a test.",
        "The room appears to be designed for focused study."
      ],
      "hints": [
        "画像だけでは確定できない内容は、looks like, seems, appears to を使って推測として書きます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There is a ______.",
        "example": "There is a boy."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "He is at / in ______.",
        "example": "He is at a desk."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "He is ______ing.",
        "example": "He is writing."
      },
      {
        "step": 4,
        "question_ja": "何に書いていますか？",
        "template": "He is writing in ______.",
        "example": "He is writing in a notebook."
      },
      {
        "step": 5,
        "question_ja": "周りには何がありますか？",
        "template": "There is / are ______ on / beside / behind ______.",
        "example": "There are several books on the desk."
      }
    ],
    "intermediate": [
      {
        "template": "A teenage boy is ______ing at ______.",
        "example": "A teenage boy is writing at a wooden desk."
      },
      {
        "template": "On the desk, there is / are ______.",
        "example": "On the desk, there are books, stationery, a mug, and an open notebook."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a bookshelf, a globe, and a motivational poster."
      },
      {
        "template": "The ______ makes the room feel ______.",
        "example": "The morning sunlight makes the room feel bright and hopeful."
      },
      {
        "template": "It looks like the boy is ______.",
        "example": "It looks like the boy is doing his homework."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding a pen in his right hand, the boy writes carefully in an open notebook."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by books and stationery, he remains fully focused on his work."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "The student takes notes while warm sunlight streams through the window."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The boy, who is seated at a wooden desk, is writing in a notebook that lies beneath a large lamp."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that he is preparing for school or completing an important assignment."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A boy is in a study room.",
      "He is sitting at a desk.",
      "He is writing in a notebook.",
      "There are books and pencils on the desk.",
      "Sunlight is coming through the window."
    ],
    "intermediate": [
      "A teenage boy in a blue shirt is sitting at a wooden desk and writing in an open notebook.",
      "He is holding a pen in his right hand and concentrating on his schoolwork.",
      "A desk lamp, a pencil case, an eraser, a mug, and several books are arranged on the desk.",
      "Warm sunlight enters through the large window and creates a calm, productive atmosphere.",
      "A globe and a motivational poster can be seen behind him."
    ],
    "advanced": [
      "Seated at a broad wooden desk, a teenage boy is carefully recording notes in an open notebook.",
      "Holding a dark pen in his right hand, he leans forward with a concentrated expression while sunlight spreads across his workspace.",
      "Surrounded by neatly arranged stationery, stacked books, and a warm drink, he appears to be engaged in productive independent study.",
      "The globe, calendar, and encouraging poster in the background suggest a room designed to support both curiosity and self-confidence."
    ]
  },
  "full_description_support": {
    "beginner_model": "A boy is in a bright room. He is sitting at a desk and writing in a notebook. There are books, pencils, a lamp, and a mug on the desk. A window and a bookshelf are behind him.",
    "intermediate_model": "A teenage boy wearing a blue long-sleeved shirt is sitting at a wooden desk in a bright study room. He is holding a pen in his right hand and writing carefully in an open notebook. A white desk lamp, colored pencils, a pencil case, an eraser, a mug, and several thick books are arranged around him. Warm morning sunlight is coming through the window, while a bookshelf, a globe, a calendar, and a motivational poster can be seen in the background.",
    "advanced_model": "Seated at a broad wooden desk in a sunlit study room, a teenage boy in a blue shirt is deeply absorbed in writing notes in an open notebook. Holding a dark pen steadily in his right hand, he leans forward with a focused expression as warm daylight streams through the large window and spreads across the desk. Carefully arranged stationery, a blue pencil case, a small eraser, a ceramic mug, and a stack of academic books create an organized and productive workspace. Behind him, a wooden bookshelf containing books, a globe, a framed photograph, and a storage box stands beneath a calendar and a poster reading 'Believe in yourself!', which reinforces the hopeful and motivating atmosphere."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A boy is at a desk. He is writing in a notebook.",
        "ja": "男子が机に向かっています。彼はノートに書いています。",
        "focus": "boy、desk、writing、notebookを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "There are books and pencils on the desk. The room is bright.",
        "ja": "机の上に本と鉛筆があります。部屋は明るいです。",
        "focus": "There are とbe動詞＋形容詞を使い、物と雰囲気を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A teenage boy is sitting at a wooden desk and writing notes in an open notebook.",
        "ja": "10代の男子が木製の机に座り、開いたノートにメモを書いています。",
        "focus": "andを使ってsittingとwritingの2つの動作をつなぐ。"
      },
      {
        "en": "He is studying quietly in a bright room with books and stationery around him.",
        "ja": "彼は本や文房具に囲まれた明るい部屋で静かに勉強しています。",
        "focus": "quietly と with を使って、動作の様子と周囲の物を加える。"
      }
    ],
    "B1": [
      {
        "en": "A focused male student is writing carefully in an open notebook while warm sunlight enters through the window.",
        "ja": "集中している男子生徒が、暖かな日差しが窓から入る中、開いたノートに丁寧に書いています。",
        "focus": "whileを使って人物の動作と背景の変化を同時に描写する。"
      },
      {
        "en": "Several study materials are neatly arranged on the wooden desk, including a lamp, a pencil case, a mug, and a stack of books.",
        "ja": "ランプ、ペンケース、マグカップ、本の山など、いくつかの学習用品が木製の机にきれいに並べられています。",
        "focus": "受動態 are arranged と including を使い、複数の物を整理して説明する。"
      }
    ],
    "B2": [
      {
        "en": "Seated at a sunlit wooden desk, the teenage student records his thoughts with steady concentration, surrounded by carefully organized books and stationery.",
        "ja": "日差しの当たる木製の机に座り、10代の生徒は、丁寧に整理された本や文房具に囲まれながら、着実な集中力で考えを書き留めています。",
        "focus": "Seatedで始める過去分詞句と surrounded by を使い、人物・動作・背景を統合する。"
      },
      {
        "en": "The room, which is illuminated by warm morning light, seems to provide an ideal environment for the boy, who appears to be preparing for an important assignment.",
        "ja": "暖かな朝の光に照らされたその部屋は、重要な課題に備えているように見える男子にとって、理想的な環境を提供しているようです。",
        "focus": "whichとwhoを連続して使う関係代名詞、seems to、appears toによる推量を組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene004Data = scene004Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene004Data;
}
