"use strict";

const libraryBoyData = {
  "image_id": "library_boy.webp",
  "overall_description_ja": "暖かな光が差し込む静かな図書館で、男子高校生が木製の机に座り、両手で本を持って読んでいる。机の上には開いたノート、ペン、積み重ねられた本があり、背景には本棚、窓、デスクランプ、観葉植物、静かにするよう促す掲示が見える。",
  "overall_description_en": "A teenage boy is sitting at a wooden desk in a quiet library and reading a book with both hands. An open notebook, a pen, and several books are on the desk, while bookshelves, a window, a desk lamp, a plant, and a quiet sign can be seen in the background.",
  "overall_mood": [
    "quiet",
    "focused",
    "peaceful",
    "calm",
    "studious",
    "warm",
    "comfortable",
    "sunlit",
    "organized",
    "academic",
    "serene",
    "concentrated",
    "inviting",
    "softly lit"
  ],

  // ...(上部の省略)...
  "overall_mood": [
    "quiet",
    "focused",
    "peaceful",
    "calm",
    "studious",
    "warm",
    "comfortable",
    "sunlit",
    "organized",
    "academic",
    "serene",
    "concentrated",
    "inviting",
    "softly lit"
  ],

  // 🌟🌟🌟 ここから追加 🌟🌟🌟
  "focus_hints": {
    "gist": [
      {"en": "A teenage boy is ~", "ja": "男子生徒が〜している"},
      {"en": "He is reading ~", "ja": "彼は〜を読んでいる"},
      {"en": "sitting at a desk", "ja": "机に座っている"},
      {"en": "studying hard", "ja": "一生懸命勉強している"}
    ],
    "setting": [
      {"en": "in the library", "ja": "図書館で"},
      {"en": "on the desk", "ja": "机の上に"},
      {"en": "in the background", "ja": "背景に"},
      {"en": "There are some books.", "ja": "何冊か本があります。"}
    ],
    "mood": [
      {"en": "looks focused", "ja": "集中しているように見える"},
      {"en": "quiet atmosphere", "ja": "静かな雰囲気"},
      {"en": "brightly lit", "ja": "明るく照らされた"},
      {"en": "peaceful", "ja": "穏やかな"}
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
        "young man",
        "male student",
        "he",
        "reader",
        "learner"
      ],
      "hint_msg": "まずは描写の中心となる「男子（boy）」や「生徒（student）」など、誰がいるかを書いてみましょう。",
      "success_msg": "Good! 次は、その男子が何をしているか、動作（Action）を書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "reading",
        "studying",
        "holding",
        "sitting",
        "learning",
        "looking",
        "concentrating",
        "reviewing"
      ],
      "hint_msg": "主語が書けました。次は「本を読んでいる（is reading）」や「勉強している（is studying）」を使いましょう。",
      "success_msg": "Great! 次は、何を読んでいるか、またはどこにいるかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object",
      "name": "目的語・場所",
      "targets": [
        "book",
        "library",
        "desk",
        "table",
        "notebook",
        "bookshelf",
        "books",
        "lamp",
        "window"
      ],
      "hint_msg": "最後に「本（book）」や「図書館（library）」「机（desk）」などの情報を加えましょう。",
      "success_msg": "Excellent! 基本の描写が完成しました。さらに光、表情、机の上の物などを付け足してみましょう。"
    }
  ],
  "mission_guides": {
    "gist": "図書館にいる男子（boy / student）と、していること（reading / studying）を書こう",
    "setting": "場所（library）、机（desk）、本棚（bookshelves）に注目しよう",
    "details": "本（book）、ノート（notebook）、ペン（pen）、ランプ（lamp）を付け足そう",
    "complete": "素晴らしい！光（warm light）や集中した様子（focused）まで描写しよう"
  },
  "suggested_topics": [
    "studying in a quiet library",
    "a student reading alone",
    "preparing for a test",
    "a peaceful afternoon of study",
    "learning through books",
    "a focused high school student"
  ],
  "scene_structure": {
    "foreground": [
      "wooden desk",
      "stacked books",
      "open notebook",
      "black pen",
      "blue grammar book",
      "dictionary"
    ],
    "midground": [
      "teenage boy",
      "open book",
      "wooden chair",
      "desk lamp",
      "small potted plant"
    ],
    "background": [
      "tall bookshelves",
      "library books",
      "large window",
      "quiet sign",
      "reading poster",
      "warm daylight"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "boy",
      "label_ja": "男子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A teenage boy with brown hair is sitting at a wooden desk in the library. He is wearing a dark navy hoodie and reading a book with a focused expression.",
      "bounding_box_conceptual": [
        8,
        28,
        78,
        58
      ],
      "color": [
        "navy blue",
        "brown",
        "beige"
      ],
      "attributes": [
        "young",
        "focused",
        "calm",
        "serious",
        "attentive",
        "relaxed"
      ],
      "action": [
        "sitting",
        "reading",
        "studying",
        "holding a book",
        "looking down",
        "concentrating"
      ],
      "synonyms_and_related_words": [
        "boy",
        "teenage boy",
        "student",
        "male student",
        "teenager",
        "young man",
        "reader",
        "learner",
        "high school student"
      ],
      "accepted_words": [
        "boy",
        "teenage boy",
        "student",
        "male student",
        "teenager",
        "young man",
        "reader",
        "learner",
        "high school student",
        "pupil",
        "he"
      ],
      "common_typos": [
        "boi",
        "boyy",
        "studant",
        "stuent",
        "studentt",
        "teeneger",
        "teen ager",
        "male studnet",
        "young men",
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
            "en": "reader",
            "ja": "読書をしている人、読者"
          }
        ],
        "B2": [
          {
            "en": "dedicated learner",
            "ja": "熱心に学ぶ人"
          },
          {
            "en": "studious teenager",
            "ja": "勉強熱心な10代の若者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a young reader lost in a book",
          "ja": "本の世界に没頭している若い読者"
        },
        {
          "en": "a student absorbed in his studies",
          "ja": "勉強に没頭している生徒"
        },
        {
          "en": "a quiet learner surrounded by knowledge",
          "ja": "知識に囲まれて静かに学ぶ人"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, student, teenager, reader",
          "text_en": "boy, student, teenager, reader",
          "text_ja": "男子、生徒、10代の若者、読書をする人"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A boy is reading a book.",
          "text_en": "A boy is reading a book.",
          "text_ja": "男子が本を読んでいます。"
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
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "male student, focused expression, navy hoodie",
          "text_en": "male student, focused expression, navy hoodie",
          "text_ja": "男子生徒、集中した表情、紺色のパーカー"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a student studying quietly",
          "text_en": "a student studying quietly",
          "text_ja": "静かに勉強している生徒"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy, dressed in a navy hoodie, is deeply focused on his book.",
          "text_en": "The boy, dressed in a navy hoodie, is deeply focused on his book.",
          "text_ja": "紺色のパーカーを着た男子は、本に深く集中しています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "book",
      "label_ja": "読んでいる本",
      "category": "object",
      "importance": "primary",
      "description": "The boy is holding an open hardcover book with both hands and looking carefully at its pages.",
      "bounding_box_conceptual": [
        47,
        25,
        31,
        34
      ],
      "color": [
        "dark blue",
        "cream",
        "gold"
      ],
      "attributes": [
        "open",
        "hardcover",
        "thick",
        "printed",
        "academic"
      ],
      "action": [
        "being held",
        "being read",
        "being studied",
        "opened to the middle"
      ],
      "synonyms_and_related_words": [
        "book",
        "open book",
        "hardcover book",
        "textbook",
        "literature book",
        "reading material",
        "volume"
      ],
      "accepted_words": [
        "book",
        "open book",
        "hardcover book",
        "textbook",
        "literature book",
        "reading material",
        "volume",
        "novel",
        "school book"
      ],
      "common_typos": [
        "bok",
        "boook",
        "bokk",
        "opne book",
        "hard cover book",
        "textbok",
        "text bookk",
        "litereture book",
        "novle"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "book",
            "ja": "本"
          },
          {
            "en": "page",
            "ja": "ページ"
          }
        ],
        "A2": [
          {
            "en": "open book",
            "ja": "開いた本"
          },
          {
            "en": "textbook",
            "ja": "教科書"
          }
        ],
        "B1": [
          {
            "en": "hardcover book",
            "ja": "ハードカバーの本"
          },
          {
            "en": "reading material",
            "ja": "読み物、読書教材"
          }
        ],
        "B2": [
          {
            "en": "literary volume",
            "ja": "文学作品の一冊"
          },
          {
            "en": "academic text",
            "ja": "学術的な文章、教材"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "an open doorway to new ideas",
          "ja": "新しい考えへ続く開かれた扉"
        },
        {
          "en": "a book holding a world of knowledge",
          "ja": "知識の世界を収めた本"
        },
        {
          "en": "pages drawing the student into another world",
          "ja": "生徒を別世界へ引き込むページ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "book, page, open, read",
          "text_en": "book, page, open, read",
          "text_ja": "本、ページ、開いている、読む"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is reading a book.",
          "text_en": "He is reading a book.",
          "text_ja": "彼は本を読んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold an open book with both hands",
          "text_en": "hold an open book with both hands",
          "text_ja": "開いた本を両手で持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The open book, held firmly in both hands, has captured his full attention.",
          "text_en": "The open book, held firmly in both hands, has captured his full attention.",
          "text_ja": "両手でしっかり持たれた開いた本が、彼の注意を完全に引きつけています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "library",
      "label_ja": "図書館",
      "category": "place",
      "importance": "primary",
      "description": "The scene takes place in a quiet and warmly lit library filled with tall wooden bookshelves and many books.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "brown",
        "golden",
        "cream",
        "green"
      ],
      "attributes": [
        "quiet",
        "warm",
        "organized",
        "peaceful",
        "academic",
        "comfortable",
        "sunlit"
      ],
      "action": [
        "surrounding the student",
        "providing a study space",
        "holding many books"
      ],
      "synonyms_and_related_words": [
        "library",
        "school library",
        "public library",
        "reading room",
        "study area",
        "book-filled room",
        "learning space"
      ],
      "accepted_words": [
        "library",
        "school library",
        "public library",
        "reading room",
        "study area",
        "book-filled room",
        "learning space",
        "study room"
      ],
      "common_typos": [
        "libary",
        "librery",
        "libarary",
        "librarry",
        "school libary",
        "reading rom",
        "study aria",
        "lernig space"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "library",
            "ja": "図書館"
          },
          {
            "en": "room",
            "ja": "部屋"
          }
        ],
        "A2": [
          {
            "en": "school library",
            "ja": "学校の図書館"
          },
          {
            "en": "reading room",
            "ja": "閲覧室、読書室"
          }
        ],
        "B1": [
          {
            "en": "study area",
            "ja": "学習スペース"
          },
          {
            "en": "learning space",
            "ja": "学ぶための空間"
          }
        ],
        "B2": [
          {
            "en": "academic environment",
            "ja": "学習・研究のための環境"
          },
          {
            "en": "quiet sanctuary for learning",
            "ja": "学びのための静かな安らぎの場"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet haven filled with books",
          "ja": "本で満たされた静かな安らぎの場"
        },
        {
          "en": "a room where knowledge waits on every shelf",
          "ja": "すべての棚で知識が待っている部屋"
        },
        {
          "en": "a peaceful sanctuary for study",
          "ja": "勉強のための穏やかな聖域"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "library, room, books, quiet",
          "text_en": "library, room, books, quiet",
          "text_ja": "図書館、部屋、本、静かな"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "in the library",
          "text_en": "in the library",
          "text_ja": "図書館で／図書館の中に"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is in the library.",
          "text_en": "The boy is in the library.",
          "text_ja": "男子は図書館にいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "inside a quiet, book-filled library",
          "text_en": "inside a quiet, book-filled library",
          "text_ja": "静かで本に囲まれた図書館の中で"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Surrounded by shelves of books, the student studies in a peaceful academic environment.",
          "text_en": "Surrounded by shelves of books, the student studies in a peaceful academic environment.",
          "text_ja": "本棚に囲まれ、生徒は穏やかな学習環境で勉強しています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "wooden desk",
      "label_ja": "木製の机",
      "category": "furniture",
      "importance": "primary",
      "description": "A large wooden study desk is in front of the boy and supports books, a notebook, a pen, and a lamp.",
      "bounding_box_conceptual": [
        67,
        0,
        33,
        100
      ],
      "color": [
        "brown",
        "golden brown"
      ],
      "attributes": [
        "wooden",
        "large",
        "smooth",
        "polished",
        "sturdy"
      ],
      "action": [
        "supporting study materials",
        "standing in front of the boy"
      ],
      "synonyms_and_related_words": [
        "desk",
        "wooden desk",
        "table",
        "study desk",
        "library table",
        "work surface",
        "tabletop"
      ],
      "accepted_words": [
        "desk",
        "wooden desk",
        "table",
        "study desk",
        "library table",
        "work surface",
        "tabletop",
        "wooden table"
      ],
      "common_typos": [
        "desck",
        "dask",
        "wooden desck",
        "woden desk",
        "study tabel",
        "libary table",
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
            "en": "library table",
            "ja": "図書館の机"
          },
          {
            "en": "tabletop",
            "ja": "机の天板"
          }
        ],
        "B2": [
          {
            "en": "polished wooden surface",
            "ja": "磨かれた木製の表面"
          },
          {
            "en": "study workstation",
            "ja": "学習用の作業スペース"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden desk covered with signs of study",
          "ja": "学習の跡で満たされた木製の机"
        },
        {
          "en": "a quiet workspace beneath the warm lamp",
          "ja": "暖かなランプの下にある静かな作業場所"
        },
        {
          "en": "a sturdy surface supporting his learning",
          "ja": "彼の学びを支える丈夫な机"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "desk, table, wood, brown",
          "text_en": "desk, table, wood, brown",
          "text_ja": "机、テーブル、木、茶色"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a desk in front of him.",
          "text_en": "There is a desk in front of him.",
          "text_ja": "彼の前に机があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "on the wooden study desk",
          "text_en": "on the wooden study desk",
          "text_ja": "木製の勉強机の上に"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The polished wooden desk is covered with books and study materials.",
          "text_en": "The polished wooden desk is covered with books and study materials.",
          "text_ja": "磨かれた木製の机には、本や学習用品が置かれています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "notebook",
      "label_ja": "開いたノート",
      "category": "object",
      "importance": "secondary",
      "description": "An open spiral notebook with handwritten notes lies on the desk in front of the student.",
      "bounding_box_conceptual": [
        78,
        31,
        17,
        37
      ],
      "color": [
        "cream",
        "white",
        "black"
      ],
      "attributes": [
        "open",
        "spiral-bound",
        "written",
        "lined",
        "used"
      ],
      "action": [
        "lying on the desk",
        "showing notes",
        "being used for study"
      ],
      "synonyms_and_related_words": [
        "notebook",
        "open notebook",
        "spiral notebook",
        "notes",
        "notepad",
        "exercise book",
        "study notes"
      ],
      "accepted_words": [
        "notebook",
        "open notebook",
        "spiral notebook",
        "notes",
        "notepad",
        "exercise book",
        "study notes",
        "school notebook"
      ],
      "common_typos": [
        "notbook",
        "note book",
        "notebok",
        "spiral notbook",
        "notees",
        "notpad",
        "excercise book",
        "study nots"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "notebook",
            "ja": "ノート"
          },
          {
            "en": "notes",
            "ja": "メモ、ノート"
          }
        ],
        "A2": [
          {
            "en": "open notebook",
            "ja": "開いたノート"
          },
          {
            "en": "notepad",
            "ja": "メモ帳"
          }
        ],
        "B1": [
          {
            "en": "spiral notebook",
            "ja": "リング式ノート"
          },
          {
            "en": "study notes",
            "ja": "学習ノート"
          }
        ],
        "B2": [
          {
            "en": "handwritten notes",
            "ja": "手書きのノート"
          },
          {
            "en": "annotated pages",
            "ja": "書き込みのあるページ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "pages filled with the traces of learning",
          "ja": "学びの跡で満たされたページ"
        },
        {
          "en": "an open notebook waiting for the next idea",
          "ja": "次の考えを待っている開いたノート"
        },
        {
          "en": "a record of his careful study",
          "ja": "彼の丁寧な学習の記録"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "notebook, notes, page, open",
          "text_en": "notebook, notes, page, open",
          "text_ja": "ノート、メモ、ページ、開いている"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is an open notebook on the desk.",
          "text_en": "There is an open notebook on the desk.",
          "text_ja": "机の上に開いたノートがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an open spiral notebook with handwritten notes",
          "text_en": "an open spiral notebook with handwritten notes",
          "text_ja": "手書きのメモがある開いたリング式ノート"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Lying in front of the student is a notebook filled with handwritten notes.",
          "text_en": "Lying in front of the student is a notebook filled with handwritten notes.",
          "text_ja": "生徒の前には、手書きのメモで満たされたノートが置かれています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "pen",
      "label_ja": "ペン",
      "category": "object",
      "importance": "secondary",
      "description": "A black pen rests diagonally across the open notebook on the desk.",
      "bounding_box_conceptual": [
        83,
        47,
        6,
        16
      ],
      "color": [
        "black",
        "silver"
      ],
      "attributes": [
        "black",
        "small",
        "thin",
        "metallic"
      ],
      "action": [
        "resting on the notebook",
        "lying diagonally"
      ],
      "synonyms_and_related_words": [
        "pen",
        "black pen",
        "ballpoint pen",
        "writing tool",
        "writing instrument",
        "stationery"
      ],
      "accepted_words": [
        "pen",
        "black pen",
        "ballpoint pen",
        "writing tool",
        "writing instrument",
        "stationery",
        "ink pen"
      ],
      "common_typos": [
        "pne",
        "penn",
        "pan",
        "ball point pen",
        "balpoint pen",
        "writting tool",
        "stationary"
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
            "en": "black pen",
            "ja": "黒いペン"
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
            "en": "stationery",
            "ja": "文房具"
          }
        ],
        "B2": [
          {
            "en": "writing instrument",
            "ja": "筆記具"
          },
          {
            "en": "ink pen",
            "ja": "インクを使うペン"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pen paused between two ideas",
          "ja": "二つの考えの間で止まっているペン"
        },
        {
          "en": "a small tool ready to capture his thoughts",
          "ja": "彼の考えを書き留める準備ができた小さな道具"
        },
        {
          "en": "a silent partner in his studies",
          "ja": "学習を支える静かな相棒"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pen, black, write",
          "text_en": "pen, black, write",
          "text_ja": "ペン、黒い、書く"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A pen is on the notebook.",
          "text_en": "A pen is on the notebook.",
          "text_ja": "ノートの上にペンがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black pen resting on the open notebook",
          "text_en": "a black pen resting on the open notebook",
          "text_ja": "開いたノートの上に置かれた黒いペン"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A black pen lies diagonally across the handwritten notes.",
          "text_en": "A black pen lies diagonally across the handwritten notes.",
          "text_ja": "黒いペンが手書きのノートの上に斜めに置かれています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "stacked books",
      "label_ja": "積み重ねられた本",
      "category": "object",
      "importance": "secondary",
      "description": "Several thick books are stacked on both sides of the desk, including books about literature, history, grammar, and dictionaries.",
      "bounding_box_conceptual": [
        69,
        0,
        31,
        100
      ],
      "color": [
        "green",
        "red",
        "blue",
        "black",
        "cream"
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
        "surrounding the notebook"
      ],
      "synonyms_and_related_words": [
        "books",
        "stacked books",
        "pile of books",
        "textbooks",
        "school books",
        "reference books",
        "volumes"
      ],
      "accepted_words": [
        "books",
        "stacked books",
        "pile of books",
        "textbooks",
        "school books",
        "reference books",
        "volumes",
        "book stack",
        "several books"
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
            "en": "collection of reference materials",
            "ja": "参考資料のまとまり"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small towers of knowledge",
          "ja": "知識でできた小さな塔"
        },
        {
          "en": "books rising like walls around his workspace",
          "ja": "作業場所の周りに壁のように積まれた本"
        },
        {
          "en": "a colorful collection waiting to be explored",
          "ja": "読まれるのを待つ色とりどりの本の集まり"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "books, many, stack, textbook",
          "text_en": "books, many, stack, textbook",
          "text_ja": "本、たくさんの、積み重ね、教科書"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many books on the desk.",
          "text_en": "There are many books on the desk.",
          "text_ja": "机の上にたくさんの本があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "several thick books stacked on the desk",
          "text_en": "several thick books stacked on the desk",
          "text_ja": "机の上に積み重ねられた数冊の厚い本"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Stacks of academic books surround the student's workspace.",
          "text_en": "Stacks of academic books surround the student's workspace.",
          "text_ja": "学術的な本の山が、生徒の学習スペースを囲んでいます。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "desk lamp",
      "label_ja": "デスクランプ",
      "category": "lighting",
      "importance": "secondary",
      "description": "A black adjustable desk lamp shines warm light onto the boy's books and study area.",
      "bounding_box_conceptual": [
        17,
        0,
        54,
        29
      ],
      "color": [
        "black",
        "warm white"
      ],
      "attributes": [
        "black",
        "adjustable",
        "bright",
        "warm",
        "metallic"
      ],
      "action": [
        "shining",
        "lighting the desk",
        "illuminating the books"
      ],
      "synonyms_and_related_words": [
        "desk lamp",
        "lamp",
        "study lamp",
        "reading lamp",
        "light",
        "adjustable lamp",
        "table lamp"
      ],
      "accepted_words": [
        "desk lamp",
        "lamp",
        "study lamp",
        "reading lamp",
        "light",
        "adjustable lamp",
        "table lamp",
        "black lamp"
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
            "en": "warm light",
            "ja": "暖かな光"
          }
        ],
        "B2": [
          {
            "en": "focused illumination",
            "ja": "一点を照らす光"
          },
          {
            "en": "task lighting",
            "ja": "作業用照明"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pool of warm light over the books",
          "ja": "本の上に広がる暖かな光"
        },
        {
          "en": "a lamp guiding his eyes across the pages",
          "ja": "ページを追う彼の目を導くランプ"
        },
        {
          "en": "a small sun above the study desk",
          "ja": "勉強机の上にある小さな太陽"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "lamp, light, black, bright",
          "text_en": "lamp, light, black, bright",
          "text_ja": "ランプ、明かり、黒い、明るい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lamp is shining on the desk.",
          "text_en": "The lamp is shining on the desk.",
          "text_ja": "ランプが机を照らしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black desk lamp giving off warm light",
          "text_en": "a black desk lamp giving off warm light",
          "text_ja": "暖かな光を放つ黒いデスクランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The adjustable lamp casts a warm pool of light across the books.",
          "text_en": "The adjustable lamp casts a warm pool of light across the books.",
          "text_ja": "調節可能なランプが、本の上に暖かな光を落としています。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "bookshelves",
      "label_ja": "本棚",
      "category": "setting",
      "importance": "primary",
      "description": "Tall wooden bookshelves filled with many books cover most of the background.",
      "bounding_box_conceptual": [
        0,
        20,
        70,
        80
      ],
      "color": [
        "brown",
        "multicolored"
      ],
      "attributes": [
        "tall",
        "wooden",
        "full",
        "organized",
        "large"
      ],
      "action": [
        "holding books",
        "filling the background",
        "surrounding the student"
      ],
      "synonyms_and_related_words": [
        "bookshelf",
        "bookshelves",
        "bookcase",
        "bookcases",
        "shelves",
        "library shelves",
        "wooden shelves"
      ],
      "accepted_words": [
        "bookshelf",
        "bookshelves",
        "bookcase",
        "bookcases",
        "shelves",
        "library shelves",
        "wooden shelves",
        "book racks"
      ],
      "common_typos": [
        "bookshelve",
        "book shelf",
        "bookshelfs",
        "bookcasee",
        "shelfs",
        "libary shelves",
        "wooden shelfs"
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
            "en": "bookshelves",
            "ja": "本棚（複数）"
          },
          {
            "en": "bookcase",
            "ja": "本棚、書棚"
          }
        ],
        "B1": [
          {
            "en": "library shelves",
            "ja": "図書館の本棚"
          },
          {
            "en": "wooden shelving",
            "ja": "木製の棚"
          }
        ],
        "B2": [
          {
            "en": "floor-to-ceiling bookcases",
            "ja": "床から天井まである本棚"
          },
          {
            "en": "shelves lined with books",
            "ja": "本がずらりと並ぶ棚"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "walls of books surrounding the student",
          "ja": "生徒を囲む本の壁"
        },
        {
          "en": "shelves stretching into a world of knowledge",
          "ja": "知識の世界へ広がる本棚"
        },
        {
          "en": "rows of stories waiting in silence",
          "ja": "静かに待つ物語の列"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bookshelf, bookshelves, shelf, books",
          "text_en": "bookshelf, bookshelves, shelf, books",
          "text_ja": "本棚、本棚（複数）、棚、本"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are bookshelves behind the boy.",
          "text_en": "There are bookshelves behind the boy.",
          "text_ja": "男子の後ろに本棚があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "tall wooden bookshelves filled with books",
          "text_en": "tall wooden bookshelves filled with books",
          "text_ja": "本で満たされた背の高い木製の本棚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Floor-to-ceiling bookshelves form a rich academic background.",
          "text_en": "Floor-to-ceiling bookshelves form a rich academic background.",
          "text_ja": "床から天井までの本棚が、学術的で豊かな背景を作っています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "window",
      "label_ja": "窓",
      "category": "setting",
      "importance": "secondary",
      "description": "A large window on the left lets soft daylight into the library and shows green trees outside.",
      "bounding_box_conceptual": [
        0,
        0,
        40,
        26
      ],
      "color": [
        "white",
        "green",
        "golden"
      ],
      "attributes": [
        "large",
        "bright",
        "sunlit",
        "clear",
        "multi-paned"
      ],
      "action": [
        "letting in daylight",
        "showing trees",
        "brightening the room"
      ],
      "synonyms_and_related_words": [
        "window",
        "large window",
        "library window",
        "windowpane",
        "glass window",
        "daylight",
        "outside view"
      ],
      "accepted_words": [
        "window",
        "large window",
        "library window",
        "windowpane",
        "glass window",
        "daylight",
        "outside view",
        "pane"
      ],
      "common_typos": [
        "windo",
        "winow",
        "windoe",
        "window pain",
        "windowpanee",
        "day ligth",
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
            "en": "sunlit window",
            "ja": "日差しを受けた窓"
          },
          {
            "en": "soft natural illumination",
            "ja": "柔らかな自然光"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a window bringing the green outdoors into the library",
          "ja": "緑豊かな外の景色を図書館へ運ぶ窓"
        },
        {
          "en": "a frame of daylight beside the books",
          "ja": "本のそばにある日光の額縁"
        },
        {
          "en": "a quiet connection between study and nature",
          "ja": "学びと自然を静かにつなぐ窓"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, outside, trees, light",
          "text_en": "window, outside, trees, light",
          "text_ja": "窓、外、木々、光"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "near the window",
          "text_en": "near the window",
          "text_ja": "窓の近くに"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "soft daylight coming through the window",
          "text_en": "soft daylight coming through the window",
          "text_ja": "窓から差し込む柔らかな日光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Natural daylight streams through the window, brightening the reading area.",
          "text_en": "Natural daylight streams through the window, brightening the reading area.",
          "text_ja": "自然光が窓から差し込み、読書スペースを明るくしています。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "plant",
      "label_ja": "観葉植物",
      "category": "nature",
      "importance": "secondary",
      "description": "A small green potted plant sits beside the desk lamp and adds a natural touch to the study area.",
      "bounding_box_conceptual": [
        47,
        2,
        20,
        16
      ],
      "color": [
        "green",
        "white"
      ],
      "attributes": [
        "small",
        "green",
        "potted",
        "fresh",
        "decorative"
      ],
      "action": [
        "sitting near the lamp",
        "decorating the desk",
        "adding greenery"
      ],
      "synonyms_and_related_words": [
        "plant",
        "potted plant",
        "green plant",
        "indoor plant",
        "houseplant",
        "leaves",
        "greenery"
      ],
      "accepted_words": [
        "plant",
        "potted plant",
        "green plant",
        "indoor plant",
        "houseplant",
        "leaves",
        "greenery",
        "small plant"
      ],
      "common_typos": [
        "palnt",
        "plantt",
        "potted palnt",
        "indor plant",
        "house plantt",
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
            "en": "green plant",
            "ja": "緑の植物"
          },
          {
            "en": "potted plant",
            "ja": "鉢植え"
          }
        ],
        "B1": [
          {
            "en": "indoor plant",
            "ja": "観葉植物"
          },
          {
            "en": "greenery",
            "ja": "緑の植物全体"
          }
        ],
        "B2": [
          {
            "en": "natural accent",
            "ja": "自然を感じさせる装飾"
          },
          {
            "en": "touch of greenery",
            "ja": "緑の彩り"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small touch of nature beside the lamp",
          "ja": "ランプのそばにある小さな自然の彩り"
        },
        {
          "en": "green leaves softening the academic setting",
          "ja": "学習空間をやわらかく見せる緑の葉"
        },
        {
          "en": "a living detail among silent books",
          "ja": "静かな本の中にある生きた細部"
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
          "text_ja": "植物、緑の、葉、鉢"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a small plant near the lamp.",
          "text_en": "There is a small plant near the lamp.",
          "text_ja": "ランプの近くに小さな植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a small potted plant beside the desk lamp",
          "text_en": "a small potted plant beside the desk lamp",
          "text_ja": "デスクランプのそばにある小さな鉢植え"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The green plant adds a fresh, natural touch to the study area.",
          "text_en": "The green plant adds a fresh, natural touch to the study area.",
          "text_ja": "緑の植物が学習スペースに新鮮で自然な雰囲気を加えています。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "chair",
      "label_ja": "木製の椅子",
      "category": "furniture",
      "importance": "secondary",
      "description": "The boy is seated on a simple wooden chair positioned behind the study desk.",
      "bounding_box_conceptual": [
        58,
        80,
        39,
        20
      ],
      "color": [
        "brown"
      ],
      "attributes": [
        "wooden",
        "simple",
        "sturdy",
        "brown"
      ],
      "action": [
        "supporting the boy",
        "standing behind the desk"
      ],
      "synonyms_and_related_words": [
        "chair",
        "wooden chair",
        "seat",
        "library chair",
        "study chair"
      ],
      "accepted_words": [
        "chair",
        "wooden chair",
        "seat",
        "library chair",
        "study chair",
        "brown chair"
      ],
      "common_typos": [
        "chiar",
        "chaire",
        "wooden chiar",
        "seet",
        "libary chair",
        "study chiar"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "chair",
            "ja": "椅子"
          },
          {
            "en": "sit",
            "ja": "座る"
          }
        ],
        "A2": [
          {
            "en": "wooden chair",
            "ja": "木製の椅子"
          },
          {
            "en": "seat",
            "ja": "座席"
          }
        ],
        "B1": [
          {
            "en": "study chair",
            "ja": "勉強用の椅子"
          },
          {
            "en": "library chair",
            "ja": "図書館の椅子"
          }
        ],
        "B2": [
          {
            "en": "wooden seating",
            "ja": "木製の座席"
          },
          {
            "en": "sturdy chair",
            "ja": "丈夫な椅子"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a simple chair supporting a long afternoon of study",
          "ja": "長い午後の勉強を支える素朴な椅子"
        },
        {
          "en": "a quiet seat among the books",
          "ja": "本の中にある静かな席"
        },
        {
          "en": "the student's small place of concentration",
          "ja": "生徒が集中するための小さな居場所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "chair, seat, sit, wooden",
          "text_en": "chair, seat, sit, wooden",
          "text_ja": "椅子、座席、座る、木製の"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is sitting on a chair.",
          "text_en": "The boy is sitting on a chair.",
          "text_ja": "男子は椅子に座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a simple wooden chair behind the desk",
          "text_en": "a simple wooden chair behind the desk",
          "text_ja": "机の後ろにある素朴な木製の椅子"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Seated on a sturdy wooden chair, the boy leans slightly toward his book.",
          "text_en": "Seated on a sturdy wooden chair, the boy leans slightly toward his book.",
          "text_ja": "丈夫な木製の椅子に座り、男子は本の方へ少し身を乗り出しています。"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "quiet sign",
      "label_ja": "静かにするよう促す掲示",
      "category": "sign",
      "importance": "secondary",
      "description": "A blue sign on the bookshelf asks visitors to keep the library quiet.",
      "bounding_box_conceptual": [
        3,
        81,
        25,
        12
      ],
      "color": [
        "blue",
        "white"
      ],
      "attributes": [
        "blue",
        "rectangular",
        "clear",
        "polite"
      ],
      "action": [
        "displaying a message",
        "reminding visitors to be quiet",
        "hanging on the shelf"
      ],
      "synonyms_and_related_words": [
        "quiet sign",
        "library sign",
        "notice",
        "sign",
        "silence sign",
        "information board"
      ],
      "accepted_words": [
        "quiet sign",
        "library sign",
        "notice",
        "sign",
        "silence sign",
        "information board",
        "quiet notice"
      ],
      "common_typos": [
        "quite sign",
        "quiete sign",
        "libary sign",
        "notise",
        "silence sine",
        "information bord"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sign",
            "ja": "掲示、標識"
          },
          {
            "en": "quiet",
            "ja": "静かな"
          }
        ],
        "A2": [
          {
            "en": "notice",
            "ja": "掲示、注意書き"
          },
          {
            "en": "library sign",
            "ja": "図書館の掲示"
          }
        ],
        "B1": [
          {
            "en": "quiet notice",
            "ja": "静かにするよう促す掲示"
          },
          {
            "en": "reminder",
            "ja": "注意喚起、念押し"
          }
        ],
        "B2": [
          {
            "en": "polite instruction",
            "ja": "丁寧な指示"
          },
          {
            "en": "silence notice",
            "ja": "静粛を求める掲示"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a silent reminder watching over the library",
          "ja": "図書館を見守る静かな注意書き"
        },
        {
          "en": "a small sign protecting the peaceful atmosphere",
          "ja": "穏やかな雰囲気を守る小さな掲示"
        },
        {
          "en": "a message asking every visitor to respect the silence",
          "ja": "すべての利用者に静けさを尊重するよう求めるメッセージ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sign, quiet, notice, library",
          "text_en": "sign, quiet, notice, library",
          "text_ja": "掲示、静かな、注意書き、図書館"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a quiet sign on the shelf.",
          "text_en": "There is a quiet sign on the shelf.",
          "text_ja": "棚に静かにするよう促す掲示があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a blue sign asking visitors to be quiet",
          "text_en": "a blue sign asking visitors to be quiet",
          "text_ja": "利用者に静かにするよう求める青い掲示"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The notice reinforces the calm and respectful atmosphere of the library.",
          "text_en": "The notice reinforces the calm and respectful atmosphere of the library.",
          "text_ja": "その掲示が、図書館の静かで秩序ある雰囲気をさらに強めています。"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "warm light",
      "label_ja": "暖かな光",
      "category": "environment",
      "importance": "secondary",
      "description": "Warm daylight and lamp light illuminate the student, his book, and the wooden desk.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "golden",
        "warm white",
        "yellow"
      ],
      "attributes": [
        "warm",
        "soft",
        "natural",
        "gentle",
        "bright"
      ],
      "action": [
        "illuminating the student",
        "shining on the desk",
        "creating a calm atmosphere"
      ],
      "synonyms_and_related_words": [
        "warm light",
        "daylight",
        "natural light",
        "lamp light",
        "soft light",
        "golden light",
        "illumination"
      ],
      "accepted_words": [
        "warm light",
        "daylight",
        "natural light",
        "lamp light",
        "soft light",
        "golden light",
        "illumination",
        "sunlight"
      ],
      "common_typos": [
        "warm ligth",
        "day ligth",
        "naturul light",
        "lamp ligth",
        "soft lite",
        "goldan light",
        "illumanation"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "light",
            "ja": "光、明かり"
          },
          {
            "en": "bright",
            "ja": "明るい"
          }
        ],
        "A2": [
          {
            "en": "warm light",
            "ja": "暖かな光"
          },
          {
            "en": "daylight",
            "ja": "昼の自然光"
          }
        ],
        "B1": [
          {
            "en": "natural light",
            "ja": "自然光"
          },
          {
            "en": "soft lighting",
            "ja": "柔らかな照明"
          }
        ],
        "B2": [
          {
            "en": "golden illumination",
            "ja": "金色の照明"
          },
          {
            "en": "warm ambient light",
            "ja": "暖かな周囲光"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden light wrapping the student in calm",
          "ja": "生徒を穏やかに包む金色の光"
        },
        {
          "en": "soft light resting across the open pages",
          "ja": "開いたページの上に静かに広がる柔らかな光"
        },
        {
          "en": "a warm glow turning study into a peaceful moment",
          "ja": "勉強の時間を穏やかなひとときに変える暖かな光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "light, bright, warm, sunlight",
          "text_en": "light, bright, warm, sunlight",
          "text_ja": "光、明るい、暖かな、日差し"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Warm light fills the library.",
          "text_en": "Warm light fills the library.",
          "text_ja": "暖かな光が図書館を満たしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "soft natural light illuminating the desk",
          "text_en": "soft natural light illuminating the desk",
          "text_ja": "机を照らす柔らかな自然光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Bathed in warm light, the reading area feels calm and inviting.",
          "text_en": "Bathed in warm light, the reading area feels calm and inviting.",
          "text_ja": "暖かな光に包まれ、読書スペースは穏やかで居心地よく感じられます。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "blue sign in the upper-right background",
      "content": "QUIET PLEASE THANK YOU",
      "description_ja": "図書館の利用者に静かにするよう丁寧に求める掲示。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "quiet, please, thank you",
          "text_en": "quiet, please, thank you",
          "text_ja": "静かに、お願いします、ありがとう"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a quiet sign",
          "text_en": "a quiet sign",
          "text_ja": "静かにするよう促す掲示"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The blue sign asks visitors to...",
          "text_en": "The blue sign asks visitors to...",
          "text_ja": "青い掲示は利用者に……するよう求めています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sign politely reminds visitors to maintain silence in the library.",
          "text_en": "The sign politely reminds visitors to maintain silence in the library.",
          "text_ja": "その掲示は、図書館で静かにするよう利用者に丁寧に促しています。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "poster near the window",
      "content": "Read. Learn. Grow.",
      "description_ja": "読書と学習を通じた成長を表す短い励ましのメッセージ。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "read, learn, grow",
          "text_en": "read, learn, grow",
          "text_ja": "読む、学ぶ、成長する"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Read, learn, and grow.",
          "text_en": "Read, learn, and grow.",
          "text_ja": "読み、学び、成長しよう。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an inspiring message about learning",
          "text_en": "an inspiring message about learning",
          "text_ja": "学ぶことについての励みになるメッセージ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The poster presents reading as the first step toward learning and personal growth.",
          "text_en": "The poster presents reading as the first step toward learning and personal growth.",
          "text_ja": "そのポスターは、読書を学びと自己成長への第一歩として示しています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Reading a book",
      "description_ja": "本を読んでいる",
      "involved_elements": [
        "element_001",
        "element_002"
      ],
      "synonyms": [
        "read a book",
        "reading a book",
        "study a book",
        "look through a book",
        "focus on the pages"
      ],
      "accepted_words": [
        "read",
        "reads",
        "reading",
        "read a book",
        "reading a book",
        "study",
        "studying",
        "look through",
        "looking through",
        "focus on",
        "focusing on"
      ],
      "common_typos": [
        "readding",
        "reding",
        "readng",
        "studing",
        "studdying",
        "lookig through",
        "focussing onn"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "read",
            "ja": "読む"
          },
          {
            "en": "reading",
            "ja": "読んでいる"
          }
        ],
        "A2": [
          {
            "en": "read a book",
            "ja": "本を読む"
          },
          {
            "en": "study",
            "ja": "勉強する"
          }
        ],
        "B1": [
          {
            "en": "focus on the pages",
            "ja": "ページに集中する"
          },
          {
            "en": "look through a book",
            "ja": "本に目を通す"
          }
        ],
        "B2": [
          {
            "en": "be absorbed in a book",
            "ja": "本に没頭する"
          },
          {
            "en": "immerse oneself in reading",
            "ja": "読書に深く没頭する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "losing himself in the pages",
          "ja": "ページの世界に我を忘れている"
        },
        {
          "en": "following each line with quiet concentration",
          "ja": "静かな集中力で一行一行を追っている"
        },
        {
          "en": "opening a door to new ideas through reading",
          "ja": "読書を通して新しい考えへの扉を開いている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "read, book, page",
          "text_en": "read, book, page",
          "text_ja": "読む、本、ページ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is reading a book.",
          "text_en": "The boy is reading a book.",
          "text_ja": "男子は本を読んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "read a book carefully in the library",
          "text_en": "read a book carefully in the library",
          "text_ja": "図書館で本を注意深く読む"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Deeply absorbed in the book, the student seems unaware of his surroundings.",
          "text_en": "Deeply absorbed in the book, the student seems unaware of his surroundings.",
          "text_ja": "本に深く没頭し、生徒は周囲に気づいていないように見えます。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Studying at a desk",
      "description_ja": "机で勉強している",
      "involved_elements": [
        "element_001",
        "element_004",
        "element_005",
        "element_006"
      ],
      "synonyms": [
        "study",
        "studying",
        "do schoolwork",
        "review notes",
        "work at a desk",
        "prepare for a test"
      ],
      "accepted_words": [
        "study",
        "studies",
        "studying",
        "do schoolwork",
        "doing schoolwork",
        "review",
        "reviewing notes",
        "work at a desk",
        "prepare for a test",
        "learning"
      ],
      "common_typos": [
        "studing",
        "studyng",
        "school work",
        "revue notes",
        "reviewng",
        "prepair for a test",
        "lernning"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "study",
            "ja": "勉強する"
          },
          {
            "en": "learn",
            "ja": "学ぶ"
          }
        ],
        "A2": [
          {
            "en": "do schoolwork",
            "ja": "学校の課題をする"
          },
          {
            "en": "review notes",
            "ja": "ノートを復習する"
          }
        ],
        "B1": [
          {
            "en": "prepare for a test",
            "ja": "テストに備える"
          },
          {
            "en": "concentrate on his studies",
            "ja": "勉強に集中する"
          }
        ],
        "B2": [
          {
            "en": "engage in focused study",
            "ja": "集中した学習に取り組む"
          },
          {
            "en": "work diligently",
            "ja": "熱心に取り組む"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "building knowledge one page at a time",
          "ja": "一ページずつ知識を積み上げている"
        },
        {
          "en": "turning a quiet afternoon into progress",
          "ja": "静かな午後を成長の時間に変えている"
        },
        {
          "en": "shaping his future through careful study",
          "ja": "丁寧な学習を通して未来を形作っている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is studying at a desk.",
          "text_en": "He is studying at a desk.",
          "text_ja": "彼は机で勉強しています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "at the desk",
          "text_en": "at the desk",
          "text_ja": "机で／机のところで"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "study quietly in the library",
          "text_en": "study quietly in the library",
          "text_ja": "図書館で静かに勉強する"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Working diligently at the desk, the student reviews both his book and handwritten notes.",
          "text_en": "Working diligently at the desk, the student reviews both his book and handwritten notes.",
          "text_ja": "机で熱心に取り組みながら、生徒は本と手書きのノートの両方を復習しています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Holding an open book with both hands",
      "description_ja": "開いた本を両手で持っている",
      "involved_elements": [
        "element_001",
        "element_002"
      ],
      "synonyms": [
        "hold a book",
        "holding a book",
        "grip the book",
        "support the book",
        "keep the book open"
      ],
      "accepted_words": [
        "hold",
        "holds",
        "holding",
        "hold a book",
        "holding a book",
        "grip",
        "gripping",
        "support",
        "supporting",
        "keep open"
      ],
      "common_typos": [
        "holing",
        "hoding",
        "holdng",
        "griping",
        "supportng",
        "both hand"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold",
            "ja": "持つ"
          },
          {
            "en": "hands",
            "ja": "手（複数）"
          }
        ],
        "A2": [
          {
            "en": "with both hands",
            "ja": "両手で"
          },
          {
            "en": "hold an open book",
            "ja": "開いた本を持つ"
          }
        ],
        "B1": [
          {
            "en": "grip the book",
            "ja": "本をしっかり持つ"
          },
          {
            "en": "support the book",
            "ja": "本を支える"
          }
        ],
        "B2": [
          {
            "en": "cradle the open volume",
            "ja": "開いた本を大切そうに支える"
          },
          {
            "en": "keep the pages steady",
            "ja": "ページが動かないように保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "holding the book as if it contains an important secret",
          "ja": "大切な秘密が書かれているかのように本を持っている"
        },
        {
          "en": "steadying the pages with careful hands",
          "ja": "丁寧な手つきでページを支えている"
        },
        {
          "en": "cradling a world of ideas between his hands",
          "ja": "両手の間に考えの世界を抱えている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is holding a book with both hands.",
          "text_en": "He is holding a book with both hands.",
          "text_ja": "彼は両手で本を持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold the open book firmly with both hands",
          "text_en": "hold the open book firmly with both hands",
          "text_ja": "開いた本を両手でしっかり持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the book securely in both hands, he reads with complete concentration.",
          "text_en": "Holding the book securely in both hands, he reads with complete concentration.",
          "text_ja": "両手で本をしっかり持ちながら、彼は完全に集中して読んでいます。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Sitting at a wooden desk",
      "description_ja": "木製の机に座っている",
      "involved_elements": [
        "element_001",
        "element_004",
        "element_012"
      ],
      "synonyms": [
        "sit at a desk",
        "sitting at a desk",
        "be seated",
        "sit on a chair",
        "lean toward the book"
      ],
      "accepted_words": [
        "sit",
        "sits",
        "sitting",
        "sit at a desk",
        "sitting at a desk",
        "be seated",
        "seated",
        "sit on a chair",
        "lean forward",
        "leaning forward"
      ],
      "common_typos": [
        "siting",
        "sittting",
        "seeted",
        "seatted",
        "at the desck",
        "leaning foward"
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
            "en": "sit at a desk",
            "ja": "机に向かって座る"
          },
          {
            "en": "be seated",
            "ja": "座っている"
          }
        ],
        "B1": [
          {
            "en": "lean forward",
            "ja": "前に身を乗り出す"
          },
          {
            "en": "sit upright",
            "ja": "背筋を伸ばして座る"
          }
        ],
        "B2": [
          {
            "en": "be positioned at the study desk",
            "ja": "勉強机のところに位置している"
          },
          {
            "en": "adopt a focused posture",
            "ja": "集中した姿勢を取る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "leaning into the quiet work before him",
          "ja": "目の前の静かな学習へ身を乗り出している"
        },
        {
          "en": "seated at the center of his own study world",
          "ja": "自分だけの学習世界の中心に座っている"
        },
        {
          "en": "settling into a posture of concentration",
          "ja": "集中する姿勢に落ち着いている"
        }
      ],
      "hints": [
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
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "at the desk / on the chair",
          "text_en": "at the desk / on the chair",
          "text_ja": "机に向かって／椅子に座って"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sit comfortably at a wooden study desk",
          "text_en": "sit comfortably at a wooden study desk",
          "text_ja": "木製の勉強机に心地よく座る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Seated at the wooden desk, the student leans slightly forward as he reads.",
          "text_en": "Seated at the wooden desk, the student leans slightly forward as he reads.",
          "text_ja": "木製の机に座り、生徒は読みながら少し前へ身を乗り出しています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Warm light shining on the study area",
      "description_ja": "暖かな光が学習スペースを照らしている",
      "involved_elements": [
        "element_008",
        "element_010",
        "element_014"
      ],
      "synonyms": [
        "light shines",
        "lamp shines",
        "daylight enters",
        "warm light fills the room",
        "light illuminates the desk"
      ],
      "accepted_words": [
        "shine",
        "shines",
        "shining",
        "light shines",
        "lamp shines",
        "daylight enters",
        "warm light fills",
        "illuminate",
        "illuminates",
        "illuminating",
        "cast light"
      ],
      "common_typos": [
        "shinning",
        "shinig",
        "dayligth enters",
        "illuminateing",
        "iluminates",
        "cast ligth"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shine",
            "ja": "光る、照らす"
          },
          {
            "en": "light",
            "ja": "光"
          }
        ],
        "A2": [
          {
            "en": "light the desk",
            "ja": "机を照らす"
          },
          {
            "en": "daylight enters",
            "ja": "日光が入る"
          }
        ],
        "B1": [
          {
            "en": "illuminate the study area",
            "ja": "学習スペースを照らす"
          },
          {
            "en": "cast warm light",
            "ja": "暖かな光を投げかける"
          }
        ],
        "B2": [
          {
            "en": "bathe the desk in light",
            "ja": "机を光で包む"
          },
          {
            "en": "create soft illumination",
            "ja": "柔らかな明かりを生み出す"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "warm light gathering around the open pages",
          "ja": "開いたページの周りに集まる暖かな光"
        },
        {
          "en": "daylight and lamplight meeting over the desk",
          "ja": "机の上で出会う日光とランプの光"
        },
        {
          "en": "a gentle glow protecting the quiet moment of study",
          "ja": "静かな学習の時間を守る柔らかな輝き"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The lamp is shining on the desk.",
          "text_en": "The lamp is shining on the desk.",
          "text_ja": "ランプが机を照らしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "warm light filling the reading area",
          "text_en": "warm light filling the reading area",
          "text_ja": "読書スペースを満たす暖かな光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Natural daylight and lamplight blend together, softly illuminating the student's workspace.",
          "text_en": "Natural daylight and lamplight blend together, softly illuminating the student's workspace.",
          "text_ja": "自然光とランプの光が混ざり合い、生徒の学習スペースを柔らかく照らしています。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Books resting on the desk and shelves",
      "description_ja": "本が机や本棚に置かれている",
      "involved_elements": [
        "element_002",
        "element_007",
        "element_009"
      ],
      "synonyms": [
        "books are on the desk",
        "books rest on the table",
        "books fill the shelves",
        "books are stacked",
        "books are arranged"
      ],
      "accepted_words": [
        "rest",
        "resting",
        "lie",
        "lying",
        "be placed",
        "placed",
        "stack",
        "stacked",
        "arranged",
        "fill the shelves",
        "on the desk",
        "on the shelves"
      ],
      "common_typos": [
        "restting",
        "lieing",
        "plaiced",
        "staked",
        "aranged",
        "on the shelfs"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "on the desk",
            "ja": "机の上に"
          },
          {
            "en": "on the shelf",
            "ja": "棚の上に"
          }
        ],
        "A2": [
          {
            "en": "books are stacked",
            "ja": "本が積み重ねられている"
          },
          {
            "en": "books are arranged",
            "ja": "本が並べられている"
          }
        ],
        "B1": [
          {
            "en": "books line the shelves",
            "ja": "本が棚にずらりと並ぶ"
          },
          {
            "en": "study materials are spread out",
            "ja": "学習用品が広げられている"
          }
        ],
        "B2": [
          {
            "en": "volumes are neatly organized",
            "ja": "書籍がきちんと整理されている"
          },
          {
            "en": "academic materials occupy the desk",
            "ja": "学習資料が机を占めている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "books forming quiet towers on the desk",
          "ja": "机の上に静かな塔を作る本"
        },
        {
          "en": "rows of knowledge resting patiently on the shelves",
          "ja": "棚の上で静かに待つ知識の列"
        },
        {
          "en": "study materials spreading outward from the reader",
          "ja": "読書をする生徒の周囲へ広がる学習資料"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many books on the desk and shelves.",
          "text_en": "There are many books on the desk and shelves.",
          "text_ja": "机と本棚にはたくさんの本があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Around the student, there are...",
          "text_en": "Around the student, there are...",
          "text_ja": "生徒の周りには……があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Neatly arranged books fill the shelves, while several study materials are spread across the desk.",
          "text_en": "Neatly arranged books fill the shelves, while several study materials are spread across the desk.",
          "text_ja": "きちんと並べられた本が棚を満たし、机の上にはいくつかの学習資料が広げられています。"
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
      "subject": "book",
      "relationship": "in",
      "object": "boy's hands",
      "example_beginner": "The book is in his hands.",
      "example_intermediate": "He is holding an open book in both hands."
    },
    {
      "subject": "notebook",
      "relationship": "on",
      "object": "desk",
      "example_beginner": "The notebook is on the desk.",
      "example_intermediate": "An open spiral notebook lies on the wooden desk."
    },
    {
      "subject": "pen",
      "relationship": "on",
      "object": "notebook",
      "example_beginner": "The pen is on the notebook.",
      "example_intermediate": "A black pen rests diagonally on the open notebook."
    },
    {
      "subject": "bookshelves",
      "relationship": "behind",
      "object": "boy",
      "example_beginner": "The bookshelves are behind him.",
      "example_intermediate": "Tall wooden bookshelves filled with books stand behind the student."
    },
    {
      "subject": "lamp",
      "relationship": "to the left of",
      "object": "boy",
      "example_beginner": "The lamp is to the left of the boy.",
      "example_intermediate": "A black desk lamp stands to the left of the student."
    },
    {
      "subject": "plant",
      "relationship": "beside",
      "object": "lamp",
      "example_beginner": "The plant is beside the lamp.",
      "example_intermediate": "A small potted plant sits beside the desk lamp."
    },
    {
      "subject": "window",
      "relationship": "on the left side of",
      "object": "library",
      "example_beginner": "The window is on the left.",
      "example_intermediate": "A large window on the left lets daylight into the library."
    }
  ],
  "adjective_library": {
    "person": [
      "young",
      "focused",
      "calm",
      "serious",
      "attentive",
      "studious",
      "concentrated",
      "absorbed"
    ],
    "library": [
      "quiet",
      "peaceful",
      "organized",
      "warm",
      "academic",
      "comfortable",
      "inviting",
      "book-filled"
    ],
    "book": [
      "open",
      "thick",
      "hardcover",
      "academic",
      "interesting",
      "heavy"
    ],
    "light": [
      "warm",
      "soft",
      "natural",
      "golden",
      "gentle",
      "bright"
    ],
    "desk": [
      "wooden",
      "large",
      "smooth",
      "polished",
      "sturdy"
    ],
    "bookshelves": [
      "tall",
      "wooden",
      "full",
      "organized",
      "floor-to-ceiling"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中に、〜で",
      "example": "The boy is studying in the library."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜のところで、〜に向かって",
      "example": "He is sitting at a wooden desk."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "There is a notebook on the desk."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "Bookshelves are behind the boy."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "A plant is beside the lamp."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The lamp is to the left of the student."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って、〜と一緒に",
      "example": "He is holding the book with both hands."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Daylight is coming through the window."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って、〜の上に渡って",
      "example": "A pen lies across the notebook."
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
        "The boy is reading a book.",
        "He is sitting at a desk.",
        "The lamp is shining on the books."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で、今している動作を表します。",
        "Level 2では boy + is reading + book/library の組み合わせが基本です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "画像の中に何があるかを説明する。",
      "examples": [
        "There is a notebook on the desk.",
        "There is a lamp beside the boy.",
        "There are many books on the shelves."
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
      "purpose_ja": "人物や場所の状態・特徴を説明する。",
      "examples": [
        "The boy is focused.",
        "The library is quiet.",
        "The light is warm."
      ],
      "hints": [
        "focused, quiet, warm などをbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った場所の表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The boy is in the library.",
        "The notebook is on the desk.",
        "The bookshelves are behind him."
      ],
      "hints": [
        "in, at, on, behind, beside などを使うと位置を詳しく説明できます。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を加える。",
      "examples": [
        "The boy who is reading the book looks focused.",
        "The book that he is holding is open.",
        "The window, which lets in daylight, is on the left."
      ],
      "hints": [
        "人には who、物には which または that を使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "物が置かれている、照らされている状態を表す。",
      "examples": [
        "Several books are stacked on the desk.",
        "The reading area is illuminated by a lamp.",
        "The shelves are filled with books."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で、〜されている状態を表します。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "Subject, holding / reading / sitting..., + verb",
      "label_ja": "分詞による追加説明",
      "level": "intermediate",
      "purpose_ja": "主語について複数の情報を自然に加える。",
      "examples": [
        "The boy, holding an open book, looks focused.",
        "The student, sitting at a wooden desk, is studying quietly.",
        "A lamp shining on the desk creates a warm atmosphere."
      ],
      "hints": [
        "主語の後ろに -ing の表現を挟むと、詳しい描写になります。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の動作や状況をつなげる。",
      "examples": [
        "Holding the book with both hands, the boy reads carefully.",
        "Sitting at the wooden desk, he studies in silence.",
        "Shining over the desk, the lamp illuminates the open pages."
      ],
      "hints": [
        "文頭を動詞ingで始めると、高度で自然な描写になります。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "受け身の状態を文頭で示す。",
      "examples": [
        "Surrounded by books, the student remains deeply focused.",
        "Illuminated by the desk lamp, the open pages appear warm and clear.",
        "Seated at the desk, the boy reads quietly."
      ],
      "hints": [
        "Surrounded, Illuminated, Seated などから始めると、背景と人物を一文でつなげられます。"
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
        "template": "He is in / at ______.",
        "example": "He is in the library."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "He is ______ing.",
        "example": "He is reading."
      },
      {
        "step": 4,
        "question_ja": "何を読んでいますか？",
        "template": "He is reading ______.",
        "example": "He is reading a book."
      },
      {
        "step": 5,
        "question_ja": "ほかに何がありますか？",
        "template": "There is / are ______ on / behind / beside ______.",
        "example": "There are many books behind him."
      }
    ],
    "intermediate": [
      {
        "template": "A teenage boy is ______ing at ______.",
        "example": "A teenage boy is reading at a wooden desk."
      },
      {
        "template": "On the desk, there is / are ______.",
        "example": "On the desk, there are several books, a notebook, and a pen."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see tall bookshelves filled with books."
      },
      {
        "template": "The ______ makes the scene feel ______.",
        "example": "The warm light makes the scene feel calm and comfortable."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding an open book with both hands, the student reads with complete concentration."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by shelves of books, the boy appears fully absorbed in his studies."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "The student quietly reads as warm daylight enters through the window."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The boy, who is seated at a wooden desk, is reading a book beneath a warm desk lamp."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A boy is in the library.",
      "He is reading a book.",
      "He is sitting at a desk.",
      "There are many books behind him."
    ],
    "intermediate": [
      "A teenage boy is sitting at a wooden desk and reading a book in a quiet library.",
      "He is wearing a navy hoodie and holding the open book with both hands.",
      "An open notebook, a pen, and several thick books are arranged on the desk.",
      "Warm light from the window and desk lamp creates a calm atmosphere."
    ],
    "advanced": [
      "Seated at a wooden desk in a warmly lit library, a teenage boy is deeply absorbed in an open book.",
      "Holding the book firmly in both hands, he reads with a focused expression while study materials surround him.",
      "Illuminated by both natural daylight and a desk lamp, the quiet reading area feels peaceful, organized, and inviting."
    ]
  },
  "full_description_support": {
    "beginner_model": "A boy is in the library. He is sitting at a desk and reading a book. There are many books behind him. A notebook and a pen are on the desk.",
    "intermediate_model": "A teenage boy is sitting at a wooden desk in a quiet library. He is holding an open book with both hands and reading carefully. On the desk, there are several books, an open notebook, and a black pen. A desk lamp and soft daylight make the study area feel warm and peaceful.",
    "advanced_model": "Seated at a polished wooden desk in a quiet, book-filled library, a teenage student is deeply absorbed in an open volume held firmly in both hands. An open spiral notebook, a black pen, and several academic books are arranged across the desk, while tall wooden bookshelves create a rich background. Illuminated by the combined glow of a desk lamp and soft daylight streaming through the window, the reading area feels calm, focused, and inviting."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A boy is in the library. He is reading a book.",
        "ja": "男子が図書館にいます。彼は本を読んでいます。",
        "focus": "boy、library、read、bookを使い、短いS+V+場所の文を作る。"
      },
      {
        "en": "There is a student. He is sitting at a desk.",
        "ja": "生徒がいます。彼は机に向かって座っています。",
        "focus": "There is と現在進行形を使って人物と動作を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A teenage boy is sitting at a wooden desk and reading a book in the library.",
        "ja": "10代の男子が木製の机に座り、図書館で本を読んでいます。",
        "focus": "andを使ってsittingとreadingの2つの動作をつなぐ。"
      },
      {
        "en": "The student is studying quietly with an open book in his hands.",
        "ja": "生徒は開いた本を手に持ち、静かに勉強しています。",
        "focus": "quietlyとwithを使って動作の様子と持ち物を加える。"
      }
    ],
    "B1": [
      {
        "en": "A focused male student is reading a hardcover book at a wooden desk in a quiet library.",
        "ja": "集中した男子生徒が、静かな図書館の木製の机でハードカバーの本を読んでいます。",
        "focus": "focused、hardcover、quietなどの形容詞で人物・物・場所を詳しくする。"
      },
      {
        "en": "Warm light shines on the desk while the boy reviews his book and handwritten notes.",
        "ja": "男子が本と手書きのノートを見直している間、暖かな光が机を照らしています。",
        "focus": "whileを使って人物の動作と背景の変化を同時に描写する。"
      }
    ],
    "B2": [
      {
        "en": "Seated at a polished wooden desk, the teenage student is deeply absorbed in a book, surrounded by shelves filled with academic volumes.",
        "ja": "磨かれた木製の机に座り、10代の生徒は本に深く没頭しており、学術書で満たされた本棚に囲まれています。",
        "focus": "Seatedで始める過去分詞句とsurrounded byを使い、人物と背景を一文に統合する。"
      },
      {
        "en": "Illuminated by a desk lamp and soft daylight, the focused reader studies in peaceful solitude while rows of books form a rich academic backdrop.",
        "ja": "デスクランプと柔らかな日光に照らされ、集中した読者は穏やかな一人の時間の中で学び、本の列が豊かな学術的背景を作っています。",
        "focus": "Illuminated by、peaceful solitude、academic backdropなどを使い、光・雰囲気・背景を高度に描写する。"
      }
    ]
  }
};

// ブラウザでは window.libraryBoyData / globalThis.libraryBoyData として利用できます。
if (typeof globalThis !== "undefined") {
  globalThis.libraryBoyData = libraryBoyData;
}

// Node.js / CommonJSからの読み込みにも対応します。
if (typeof module !== "undefined" && module.exports) {
  module.exports = libraryBoyData;
}
