"use strict";

const scene006Data = {
  "id": "scene_006",
  "image_id": "006.webp",
  "overall_description_ja": "夜の落ち着いたリビングルームで、ピンク色のパーカーを着た若い女性がソファに座り、片手に本、もう片方の手にマグカップを持ちながら読書をしている。部屋はフロアランプやキャンドルの暖かな光に包まれ、窓の外には星空と街の明かりが見える。コーヒーテーブルにはポップコーン、リモコン、キャンドル、本があり、テレビ、観葉植物、クッション、毛布、サイドテーブルなどが居心地のよい雰囲気を作っている。",
  "overall_description_en": "A young woman in a pink hoodie is sitting comfortably on a sofa in a quiet living room at night. She is reading a book while holding a dark mug in her other hand. Warm light from a floor lamp and several candles fills the room, while city lights and a starry sky can be seen through the window. A television, plants, cushions, a blanket, popcorn, a remote control, and books complete the cozy scene.",
  "overall_mood": [
    "cozy",
    "warm",
    "peaceful",
    "quiet",
    "relaxed",
    "comfortable",
    "calm",
    "intimate",
    "nighttime",
    "softly lit",
    "restful",
    "homely",
    "serene",
    "inviting",
    "dreamy"
  ],
  "mission_guides": {
    "gist": "若い女性（woman）が、ソファで何をしているか（reading / drinking）を書こう",
    "setting": "場所（living room）、ソファ（sofa）、窓（window）、夜（at night）に注目しよう",
    "details": "本、マグカップ、テレビ、ポップコーン、キャンドル、クッション、植物などを加えよう",
    "complete": "暖かな照明、街の夜景、落ち着いた気分まで含めて情景全体を描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young woman in a pink hoodie",
        "ja": "ピンクのパーカーを着た若い女性"
      },
      {
        "en": "reading a book on the sofa",
        "ja": "ソファで本を読んでいる"
      },
      {
        "en": "holding a mug in one hand",
        "ja": "片手にマグカップを持っている"
      },
      {
        "en": "relaxing in the living room at night",
        "ja": "夜のリビングでくつろいでいる"
      }
    ],
    "setting": [
      {
        "en": "inside a cozy living room",
        "ja": "居心地のよいリビングの中で"
      },
      {
        "en": "a television and plants on the left",
        "ja": "左側にあるテレビと植物"
      },
      {
        "en": "a coffee table in front of the sofa",
        "ja": "ソファの前にあるコーヒーテーブル"
      },
      {
        "en": "a window showing city lights at night",
        "ja": "夜の街明かりが見える窓"
      }
    ],
    "mood": [
      {
        "en": "warm lamp light",
        "ja": "暖かなランプの光"
      },
      {
        "en": "a calm and peaceful atmosphere",
        "ja": "落ち着いて穏やかな雰囲気"
      },
      {
        "en": "soft candlelight in the room",
        "ja": "部屋の中の柔らかなキャンドルの光"
      },
      {
        "en": "a relaxing evening at home",
        "ja": "自宅で過ごすくつろいだ夜"
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
        "person",
        "reader",
        "she"
      ],
      "hint_msg": "まずは「女性（woman）」や「若い女性（young woman）」など、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は、その女性が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "reading",
        "drinking",
        "holding",
        "sitting",
        "relaxing",
        "resting",
        "enjoying",
        "looking"
      ],
      "hint_msg": "「本を読んでいる（is reading）」や「飲み物を飲んでいる（is drinking）」と書きましょう。",
      "success_msg": "Great! 次に、何を読んでいるか、どこに座っているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "book",
        "mug",
        "drink",
        "sofa",
        "couch",
        "living room",
        "home",
        "window",
        "night"
      ],
      "hint_msg": "「本（book）」「マグカップ（mug）」「ソファ（sofa）」「リビング（living room）」などを加えましょう。",
      "success_msg": "Excellent! 次は照明、窓の外、テーブル上の物、雰囲気も加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "reading at home at night",
    "relaxing on a sofa",
    "enjoying a warm drink",
    "a cozy evening routine",
    "a peaceful living room",
    "warm indoor lighting",
    "city lights outside the window"
  ],
  "scene_structure": {
    "foreground": [
      "wooden coffee table",
      "glass candle",
      "bowl of popcorn",
      "remote control",
      "books under the table",
      "soft rug"
    ],
    "midground": [
      "young woman",
      "gray sofa",
      "open book",
      "dark mug",
      "yellow cushion",
      "green plaid cushion",
      "cream blanket"
    ],
    "background": [
      "television",
      "television stand",
      "floor lamp",
      "large indoor plant",
      "wall shelf",
      "framed botanical picture",
      "window",
      "night city view",
      "windowsill candle",
      "side table",
      "small plant",
      "reed diffuser"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with brown hair tied in a loose bun is sitting on the sofa. She is wearing a pink hoodie, gray sweatpants, and white socks.",
      "bounding_box_conceptual": [
        19,
        39,
        64,
        47
      ],
      "color": [
        "pink",
        "gray",
        "brown",
        "white"
      ],
      "attributes": [
        "young",
        "relaxed",
        "calm",
        "comfortable",
        "focused",
        "peaceful"
      ],
      "action": [
        "sitting",
        "reading",
        "holding a mug",
        "relaxing"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "girl",
        "young lady",
        "person",
        "reader",
        "female reader",
        "she"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "girl",
        "young lady",
        "person",
        "reader",
        "female reader",
        "she"
      ],
      "common_typos": [
        "womon",
        "womann",
        "young women",
        "ladie",
        "persen",
        "readar",
        "femail reader"
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
            "en": "female reader",
            "ja": "女性の読者"
          }
        ],
        "B2": [
          {
            "en": "a relaxed figure absorbed in a book",
            "ja": "本に夢中になってくつろぐ人物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet reader wrapped in evening comfort",
          "ja": "夜の心地よさに包まれた静かな読者"
        },
        {
          "en": "a peaceful figure enjoying her own time",
          "ja": "自分の時間を楽しむ穏やかな人物"
        },
        {
          "en": "a woman lost in the pages of a book",
          "ja": "本のページに没頭する女性"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, girl, reader, pink hoodie",
          "text_en": "woman, girl, reader, pink hoodie",
          "text_ja": "女性、女の子、読者、ピンクのパーカー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A woman is sitting on the sofa.",
          "text_en": "A woman is sitting on the sofa.",
          "text_ja": "女性がソファに座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young woman wearing a pink hoodie",
          "text_en": "a young woman wearing a pink hoodie",
          "text_ja": "ピンクのパーカーを着た若い女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman, dressed in comfortable clothes, is spending a peaceful evening at home.",
          "text_en": "The woman, dressed in comfortable clothes, is spending a peaceful evening at home.",
          "text_ja": "楽な服装をした女性は、自宅で穏やかな夜を過ごしています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "open book",
      "label_ja": "開いた本",
      "category": "object",
      "importance": "primary",
      "description": "An open dark-covered book rests across the woman's lap as she reads it.",
      "bounding_box_conceptual": [
        43,
        46,
        17,
        21
      ],
      "color": [
        "black",
        "dark green",
        "cream"
      ],
      "attributes": [
        "open",
        "hard-covered",
        "thick",
        "printed"
      ],
      "action": [
        "being held",
        "being read",
        "resting on her lap"
      ],
      "synonyms_and_related_words": [
        "book",
        "open book",
        "novel",
        "hardcover book",
        "reading book",
        "story",
        "volume"
      ],
      "accepted_words": [
        "book",
        "open book",
        "novel",
        "hardcover book",
        "reading book",
        "story",
        "volume"
      ],
      "common_typos": [
        "bok",
        "boook",
        "open bok",
        "noval",
        "hard cover book",
        "readng book",
        "volum"
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
            "en": "novel",
            "ja": "小説"
          }
        ],
        "B2": [
          {
            "en": "a volume absorbing her attention",
            "ja": "彼女の注意を引きつける一冊"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "an open doorway into another world",
          "ja": "別の世界へ続く開かれた入口"
        },
        {
          "en": "pages carrying her away from the quiet room",
          "ja": "静かな部屋から彼女を別世界へ運ぶページ"
        },
        {
          "en": "a story resting gently on her lap",
          "ja": "彼女の膝にそっと置かれた物語"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "book, open, read, page",
          "text_en": "book, open, read, page",
          "text_ja": "本、開いている、読む、ページ"
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
          "text": "an open book resting on her lap",
          "text_en": "an open book resting on her lap",
          "text_ja": "彼女の膝に置かれた開いた本"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The open book, which rests across her lap, appears to hold her full attention.",
          "text_en": "The open book, which rests across her lap, appears to hold her full attention.",
          "text_ja": "膝の上に置かれた本が、彼女の注意をすべて引きつけているように見えます。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "mug",
      "label_ja": "マグカップ",
      "category": "object",
      "importance": "primary",
      "description": "The woman is holding a dark ceramic mug close to her face with one hand.",
      "bounding_box_conceptual": [
        33,
        61,
        17,
        9
      ],
      "color": [
        "dark blue",
        "gray",
        "black"
      ],
      "attributes": [
        "ceramic",
        "dark",
        "warm-looking",
        "round",
        "handled"
      ],
      "action": [
        "being held",
        "containing a drink",
        "being raised toward her mouth"
      ],
      "synonyms_and_related_words": [
        "mug",
        "cup",
        "ceramic mug",
        "hot drink",
        "warm drink",
        "tea",
        "coffee",
        "beverage"
      ],
      "accepted_words": [
        "mug",
        "cup",
        "ceramic mug",
        "hot drink",
        "warm drink",
        "tea",
        "coffee",
        "beverage"
      ],
      "common_typos": [
        "mugg",
        "mug cup",
        "ceremic mug",
        "hot drnik",
        "cofee",
        "bevarage"
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
            "en": "warm beverage",
            "ja": "温かい飲み物"
          }
        ],
        "B2": [
          {
            "en": "a comforting drink held close to her face",
            "ja": "顔の近くに持った心を落ち着かせる飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm drink keeping her company",
          "ja": "彼女に寄り添う温かな飲み物"
        },
        {
          "en": "a cup of comfort beside an open story",
          "ja": "開かれた物語のそばにある安らぎの一杯"
        },
        {
          "en": "a small source of warmth in her hand",
          "ja": "手の中にある小さな温もり"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mug, cup, drink, hold",
          "text_en": "mug, cup, drink, hold",
          "text_ja": "マグカップ、カップ、飲み物、持つ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is holding a mug.",
          "text_en": "She is holding a mug.",
          "text_ja": "彼女はマグカップを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a dark mug containing a warm drink",
          "text_en": "a dark mug containing a warm drink",
          "text_ja": "温かい飲み物が入った濃い色のマグカップ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the mug close to her face, she seems to be enjoying its warmth and aroma.",
          "text_en": "Holding the mug close to her face, she seems to be enjoying its warmth and aroma.",
          "text_ja": "マグカップを顔の近くに持ち、彼女はその温かさと香りを楽しんでいるようです。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "sofa",
      "label_ja": "ソファ",
      "category": "furniture",
      "importance": "primary",
      "description": "A large gray sofa supports the woman and is decorated with cushions and a cream blanket.",
      "bounding_box_conceptual": [
        39,
        24,
        48,
        75
      ],
      "color": [
        "gray",
        "beige",
        "cream"
      ],
      "attributes": [
        "large",
        "soft",
        "comfortable",
        "fabric-covered",
        "cozy"
      ],
      "action": [
        "supporting the woman",
        "holding cushions",
        "providing a place to relax"
      ],
      "synonyms_and_related_words": [
        "sofa",
        "couch",
        "gray sofa",
        "living-room sofa",
        "settee",
        "comfortable seat"
      ],
      "accepted_words": [
        "sofa",
        "couch",
        "gray sofa",
        "living-room sofa",
        "settee",
        "comfortable seat"
      ],
      "common_typos": [
        "soffa",
        "sofae",
        "cauch",
        "gray soffa",
        "living room sofa",
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
            "en": "couch",
            "ja": "ソファ、長椅子"
          }
        ],
        "B1": [
          {
            "en": "comfortable seat",
            "ja": "座り心地のよい椅子"
          }
        ],
        "B2": [
          {
            "en": "deeply cushioned living-room sofa",
            "ja": "厚いクッションのあるリビングソファ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a soft island of comfort in the room",
          "ja": "部屋の中にある柔らかな安らぎの島"
        },
        {
          "en": "the center of her quiet evening",
          "ja": "彼女の静かな夜の中心"
        },
        {
          "en": "a place where the day finally slows down",
          "ja": "一日の流れがようやくゆっくりになる場所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sofa, couch, gray, soft",
          "text_en": "sofa, couch, gray, soft",
          "text_ja": "ソファ、長椅子、灰色、柔らかい"
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
          "text": "a large gray sofa with soft cushions",
          "text_en": "a large gray sofa with soft cushions",
          "text_ja": "柔らかなクッションがある大きな灰色のソファ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The spacious sofa, covered with cushions and a blanket, creates a comfortable place for reading.",
          "text_en": "The spacious sofa, covered with cushions and a blanket, creates a comfortable place for reading.",
          "text_ja": "クッションと毛布のある広いソファが、読書に適した快適な場所を作っています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "cushions and blanket",
      "label_ja": "クッションと毛布",
      "category": "object",
      "importance": "secondary",
      "description": "A mustard-yellow cushion, a green plaid cushion, and a cream knitted blanket decorate the sofa.",
      "bounding_box_conceptual": [
        45,
        27,
        43,
        70
      ],
      "color": [
        "mustard yellow",
        "green",
        "cream",
        "gray"
      ],
      "attributes": [
        "soft",
        "patterned",
        "knitted",
        "warm",
        "decorative"
      ],
      "action": [
        "resting on the sofa",
        "supporting the woman",
        "adding warmth"
      ],
      "synonyms_and_related_words": [
        "cushion",
        "pillow",
        "throw pillow",
        "blanket",
        "throw blanket",
        "knitted blanket",
        "soft furnishings"
      ],
      "accepted_words": [
        "cushion",
        "pillow",
        "throw pillow",
        "blanket",
        "throw blanket",
        "knitted blanket",
        "soft furnishings"
      ],
      "common_typos": [
        "cusion",
        "cusshion",
        "pilllow",
        "blankit",
        "throw blankett",
        "knited blanket"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pillow and blanket",
            "ja": "クッションと毛布"
          }
        ],
        "A2": [
          {
            "en": "cushions",
            "ja": "クッション"
          }
        ],
        "B1": [
          {
            "en": "throw blanket",
            "ja": "ソファ用の掛け毛布"
          }
        ],
        "B2": [
          {
            "en": "layered soft furnishings",
            "ja": "重ねられた柔らかな室内用品"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "soft colors gathering around the reader",
          "ja": "読者の周りに集まる柔らかな色"
        },
        {
          "en": "warm fabric protecting the quiet evening",
          "ja": "静かな夜を包む温かな布"
        },
        {
          "en": "small pieces of comfort arranged on the sofa",
          "ja": "ソファに並べられた小さな安らぎ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cushion, pillow, blanket, soft",
          "text_en": "cushion, pillow, blanket, soft",
          "text_ja": "クッション、枕、毛布、柔らかい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are cushions and a blanket on the sofa.",
          "text_en": "There are cushions and a blanket on the sofa.",
          "text_ja": "ソファにはクッションと毛布があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a yellow cushion, a plaid pillow, and a cream blanket",
          "text_en": "a yellow cushion, a plaid pillow, and a cream blanket",
          "text_ja": "黄色のクッション、格子柄の枕、クリーム色の毛布"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The layered cushions and blanket make the sofa look especially warm and inviting.",
          "text_en": "The layered cushions and blanket make the sofa look especially warm and inviting.",
          "text_ja": "重ねられたクッションと毛布によって、ソファは特に温かく居心地よく見えます。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "coffee table",
      "label_ja": "コーヒーテーブル",
      "category": "furniture",
      "importance": "primary",
      "description": "A rectangular wooden coffee table stands in front of the sofa and holds several evening items.",
      "bounding_box_conceptual": [
        69,
        0,
        31,
        52
      ],
      "color": [
        "brown",
        "golden brown",
        "black"
      ],
      "attributes": [
        "wooden",
        "rectangular",
        "low",
        "broad",
        "practical"
      ],
      "action": [
        "holding objects",
        "standing in front of the sofa"
      ],
      "synonyms_and_related_words": [
        "coffee table",
        "low table",
        "wooden table",
        "living-room table",
        "center table"
      ],
      "accepted_words": [
        "coffee table",
        "low table",
        "wooden table",
        "living-room table",
        "center table"
      ],
      "common_typos": [
        "cofee table",
        "coffee tabel",
        "low tabel",
        "wooden tabel",
        "living room table"
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
            "ja": "コーヒーテーブル"
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
            "en": "low wooden centerpiece",
            "ja": "低い木製の中心家具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden stage for the evening's small comforts",
          "ja": "夜の小さな安らぎを載せる木の舞台"
        },
        {
          "en": "the quiet center between the sofa and the television",
          "ja": "ソファとテレビの間にある静かな中心"
        },
        {
          "en": "a table collecting the details of her evening",
          "ja": "彼女の夜の細部を集めるテーブル"
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
          "text_ja": "テーブル、コーヒーテーブル、木、前"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The coffee table is in front of the sofa.",
          "text_en": "The coffee table is in front of the sofa.",
          "text_ja": "コーヒーテーブルはソファの前にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a low wooden table holding popcorn and a candle",
          "text_en": "a low wooden table holding popcorn and a candle",
          "text_ja": "ポップコーンとキャンドルを載せた低い木製テーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The coffee table gathers the objects that support her quiet evening at home.",
          "text_en": "The coffee table gathers the objects that support her quiet evening at home.",
          "text_ja": "コーヒーテーブルには、彼女の静かな夜を支える物が集められています。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "bowl of popcorn",
      "label_ja": "ポップコーンのボウル",
      "category": "food",
      "importance": "secondary",
      "description": "A brown bowl filled with popcorn sits near the middle of the coffee table.",
      "bounding_box_conceptual": [
        68,
        11,
        11,
        15
      ],
      "color": [
        "cream",
        "brown",
        "white"
      ],
      "attributes": [
        "full",
        "light",
        "salty-looking",
        "ready to eat"
      ],
      "action": [
        "sitting on the table",
        "holding popcorn",
        "waiting to be eaten"
      ],
      "synonyms_and_related_words": [
        "popcorn",
        "bowl of popcorn",
        "snack",
        "movie snack",
        "light snack"
      ],
      "accepted_words": [
        "popcorn",
        "bowl of popcorn",
        "snack",
        "movie snack",
        "light snack"
      ],
      "common_typos": [
        "pop corn",
        "popcorne",
        "bowl off popcorn",
        "snak",
        "movie snak"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "popcorn",
            "ja": "ポップコーン"
          }
        ],
        "A2": [
          {
            "en": "bowl of popcorn",
            "ja": "ポップコーンのボウル"
          }
        ],
        "B1": [
          {
            "en": "evening snack",
            "ja": "夜のおやつ"
          }
        ],
        "B2": [
          {
            "en": "light snack prepared for a relaxing evening",
            "ja": "くつろいだ夜のために用意された軽いおやつ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bowl of small white clouds",
          "ja": "小さな白い雲で満たされたボウル"
        },
        {
          "en": "a simple snack waiting beside the candle",
          "ja": "キャンドルのそばで待つ簡単なおやつ"
        },
        {
          "en": "a casual treat completing the evening",
          "ja": "夜を完成させる気軽なおやつ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "popcorn, bowl, snack, table",
          "text_en": "popcorn, bowl, snack, table",
          "text_ja": "ポップコーン、ボウル、おやつ、テーブル"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is popcorn on the table.",
          "text_en": "There is popcorn on the table.",
          "text_ja": "テーブルの上にポップコーンがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a brown bowl filled with popcorn",
          "text_en": "a brown bowl filled with popcorn",
          "text_ja": "ポップコーンで満たされた茶色のボウル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The bowl of popcorn suggests that the woman may also be watching television during her evening.",
          "text_en": "The bowl of popcorn suggests that the woman may also be watching television during her evening.",
          "text_ja": "ポップコーンのボウルから、女性が夜にテレビも楽しんでいる可能性がうかがえます。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "remote control",
      "label_ja": "リモコン",
      "category": "object",
      "importance": "secondary",
      "description": "A black television remote lies near the front edge of the coffee table.",
      "bounding_box_conceptual": [
        76,
        20,
        7,
        12
      ],
      "color": [
        "black",
        "dark gray"
      ],
      "attributes": [
        "small",
        "rectangular",
        "electronic",
        "portable"
      ],
      "action": [
        "lying on the table",
        "controlling the television"
      ],
      "synonyms_and_related_words": [
        "remote control",
        "remote",
        "TV remote",
        "television remote",
        "controller"
      ],
      "accepted_words": [
        "remote control",
        "remote",
        "TV remote",
        "television remote",
        "controller"
      ],
      "common_typos": [
        "remort",
        "remote controle",
        "TV remoute",
        "televison remote",
        "controler"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "remote",
            "ja": "リモコン"
          }
        ],
        "A2": [
          {
            "en": "remote control",
            "ja": "リモコン"
          }
        ],
        "B1": [
          {
            "en": "television remote",
            "ja": "テレビのリモコン"
          }
        ],
        "B2": [
          {
            "en": "handheld electronic controller",
            "ja": "手で持つ電子式の操作装置"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small device connecting the sofa to the screen",
          "ja": "ソファと画面をつなぐ小さな機器"
        },
        {
          "en": "the quiet control center of the television",
          "ja": "テレビの静かな操作装置"
        },
        {
          "en": "a dark object waiting at the edge of the table",
          "ja": "テーブルの端で待つ黒い物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "remote, television, black, table",
          "text_en": "remote, television, black, table",
          "text_ja": "リモコン、テレビ、黒い、テーブル"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A remote control is on the table.",
          "text_en": "A remote control is on the table.",
          "text_ja": "リモコンがテーブルの上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black television remote near the front edge",
          "text_en": "a black television remote near the front edge",
          "text_ja": "手前の端近くにある黒いテレビリモコン"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The remote control lying within easy reach indicates that the television is part of the evening setting.",
          "text_en": "The remote control lying within easy reach indicates that the television is part of the evening setting.",
          "text_ja": "手の届く場所にあるリモコンから、テレビも夜の過ごし方の一部であることが分かります。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "candles",
      "label_ja": "キャンドル",
      "category": "lighting",
      "importance": "secondary",
      "description": "Two candles glow in glass holders, one on the coffee table and one on the windowsill.",
      "bounding_box_conceptual": [
        30,
        4,
        49,
        93
      ],
      "color": [
        "golden",
        "white",
        "transparent"
      ],
      "attributes": [
        "glowing",
        "small",
        "warm",
        "flickering",
        "decorative"
      ],
      "action": [
        "burning",
        "giving off light",
        "creating a warm atmosphere"
      ],
      "synonyms_and_related_words": [
        "candle",
        "candles",
        "candlelight",
        "glass candle",
        "flame",
        "tea light"
      ],
      "accepted_words": [
        "candle",
        "candles",
        "candlelight",
        "glass candle",
        "flame",
        "tea light"
      ],
      "common_typos": [
        "candel",
        "candels",
        "candle ligth",
        "glass candel",
        "flam",
        "tea ligth"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "candle",
            "ja": "ろうそく"
          }
        ],
        "A2": [
          {
            "en": "candlelight",
            "ja": "ろうそくの光"
          }
        ],
        "B1": [
          {
            "en": "flickering flame",
            "ja": "揺らめく炎"
          }
        ],
        "B2": [
          {
            "en": "soft decorative illumination",
            "ja": "柔らかな装飾照明"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small flames holding back the darkness",
          "ja": "暗闇を押し返す小さな炎"
        },
        {
          "en": "pools of golden light in the quiet room",
          "ja": "静かな部屋に浮かぶ金色の光"
        },
        {
          "en": "tiny stars brought indoors",
          "ja": "部屋の中へ運ばれた小さな星"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "candle, flame, light, warm",
          "text_en": "candle, flame, light, warm",
          "text_ja": "キャンドル、炎、光、暖かい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The candles are glowing.",
          "text_en": "The candles are glowing.",
          "text_ja": "キャンドルが光っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "two candles giving off soft golden light",
          "text_en": "two candles giving off soft golden light",
          "text_ja": "柔らかな金色の光を放つ2本のキャンドル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The flickering candlelight adds intimacy and warmth to the otherwise quiet living room.",
          "text_en": "The flickering candlelight adds intimacy and warmth to the otherwise quiet living room.",
          "text_ja": "揺らめくキャンドルの光が、静かなリビングに親密さと温かさを加えています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "television",
      "label_ja": "テレビ",
      "category": "appliance",
      "importance": "secondary",
      "description": "A flat-screen television on the left displays a nighttime cityscape with many lights.",
      "bounding_box_conceptual": [
        28,
        0,
        28,
        20
      ],
      "color": [
        "black",
        "dark blue",
        "orange"
      ],
      "attributes": [
        "flat-screen",
        "large",
        "electronic",
        "lit"
      ],
      "action": [
        "displaying a cityscape",
        "being turned on",
        "showing night lights"
      ],
      "synonyms_and_related_words": [
        "television",
        "TV",
        "screen",
        "flat-screen TV",
        "television set",
        "monitor"
      ],
      "accepted_words": [
        "television",
        "TV",
        "screen",
        "flat-screen TV",
        "television set",
        "monitor"
      ],
      "common_typos": [
        "televison",
        "televsion",
        "TV screene",
        "flat screan TV",
        "moniter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "TV",
            "ja": "テレビ"
          }
        ],
        "A2": [
          {
            "en": "television",
            "ja": "テレビ"
          }
        ],
        "B1": [
          {
            "en": "flat-screen television",
            "ja": "薄型テレビ"
          }
        ],
        "B2": [
          {
            "en": "illuminated screen showing a city at night",
            "ja": "夜の街を映す明るい画面"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a second window opening onto the city",
          "ja": "街へ開くもう一つの窓"
        },
        {
          "en": "a dark screen scattered with city lights",
          "ja": "街明かりが散らばる暗い画面"
        },
        {
          "en": "the glow of the outside world inside the room",
          "ja": "外の世界の光を部屋の中へ運ぶ画面"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "television, TV, screen, city",
          "text_en": "television, TV, screen, city",
          "text_ja": "テレビ、画面、街"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The television is on.",
          "text_en": "The television is on.",
          "text_ja": "テレビがついています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a television showing a city at night",
          "text_en": "a television showing a city at night",
          "text_ja": "夜の街を映しているテレビ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The television displays a cityscape that echoes the real lights visible outside the window.",
          "text_en": "The television displays a cityscape that echoes the real lights visible outside the window.",
          "text_ja": "テレビは、窓の外に見える実際の明かりと呼応する夜景を映しています。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "window and night city",
      "label_ja": "窓と夜の街",
      "category": "setting",
      "importance": "primary",
      "description": "A large window behind the sofa reveals a dark sky, distant buildings, and scattered city lights.",
      "bounding_box_conceptual": [
        0,
        61,
        43,
        34
      ],
      "color": [
        "dark blue",
        "black",
        "orange",
        "white"
      ],
      "attributes": [
        "large",
        "open-looking",
        "dark",
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
        "night sky",
        "cityscape",
        "urban view"
      ],
      "accepted_words": [
        "window",
        "large window",
        "night view",
        "city lights",
        "night sky",
        "cityscape",
        "urban view"
      ],
      "common_typos": [
        "windo",
        "winow",
        "night veiw",
        "city ligths",
        "city scape",
        "urbun view"
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
            "en": "an urban nightscape beyond the glass",
            "ja": "ガラスの向こうに広がる都会の夜景"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark window sprinkled with distant lights",
          "ja": "遠くの光が散りばめられた暗い窓"
        },
        {
          "en": "the sleeping city beyond the warm room",
          "ja": "暖かな部屋の外に広がる眠る街"
        },
        {
          "en": "night stretching quietly behind the sofa",
          "ja": "ソファの後ろに静かに広がる夜"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, night, city, lights",
          "text_en": "window, night, city, lights",
          "text_ja": "窓、夜、街、明かり"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "City lights can be seen through the window.",
          "text_en": "City lights can be seen through the window.",
          "text_ja": "窓の外に街の明かりが見えます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a dark cityscape visible through the large window",
          "text_en": "a dark cityscape visible through the large window",
          "text_ja": "大きな窓から見える暗い街の景色"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Beyond the window, scattered city lights shine beneath a quiet night sky.",
          "text_en": "Beyond the window, scattered city lights shine beneath a quiet night sky.",
          "text_ja": "窓の向こうでは、静かな夜空の下で街の明かりが点々と輝いています。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "floor lamp",
      "label_ja": "フロアランプ",
      "category": "lighting",
      "importance": "primary",
      "description": "A tall tripod floor lamp with a cream shade stands behind the sofa and casts warm light across the room.",
      "bounding_box_conceptual": [
        19,
        24,
        31,
        20
      ],
      "color": [
        "cream",
        "brown",
        "golden"
      ],
      "attributes": [
        "tall",
        "tripod",
        "warm",
        "bright",
        "fabric-shaded"
      ],
      "action": [
        "shining",
        "illuminating the room",
        "standing behind the sofa"
      ],
      "synonyms_and_related_words": [
        "floor lamp",
        "standing lamp",
        "tripod lamp",
        "tall lamp",
        "room lamp"
      ],
      "accepted_words": [
        "floor lamp",
        "standing lamp",
        "tripod lamp",
        "tall lamp",
        "room lamp"
      ],
      "common_typos": [
        "flor lamp",
        "floor lamb",
        "standing lamb",
        "tripod lamb",
        "tall ligth"
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
            "en": "floor lamp",
            "ja": "フロアランプ"
          }
        ],
        "B1": [
          {
            "en": "tripod lamp",
            "ja": "三脚型のランプ"
          }
        ],
        "B2": [
          {
            "en": "primary source of warm ambient light",
            "ja": "暖かな間接照明の主な光源"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a tall lamp pouring warmth onto the room",
          "ja": "部屋へ温かさを注ぐ背の高いランプ"
        },
        {
          "en": "a quiet indoor moon beside the sofa",
          "ja": "ソファのそばにある静かな室内の月"
        },
        {
          "en": "a soft golden umbrella of light",
          "ja": "柔らかな金色の光の傘"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "lamp, light, tall, warm",
          "text_en": "lamp, light, tall, warm",
          "text_ja": "ランプ、光、背が高い、暖かい"
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
          "text": "a tall tripod lamp casting warm light",
          "text_en": "a tall tripod lamp casting warm light",
          "text_ja": "暖かな光を放つ背の高い三脚型ランプ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The floor lamp bathes the sofa area in a soft glow that makes reading comfortable.",
          "text_en": "The floor lamp bathes the sofa area in a soft glow that makes reading comfortable.",
          "text_ja": "フロアランプがソファ周辺を柔らかな光で包み、読書しやすくしています。"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "plants",
      "label_ja": "観葉植物",
      "category": "nature",
      "importance": "secondary",
      "description": "Several green plants decorate the living room, including a large plant behind the sofa and smaller plants near the television and window.",
      "bounding_box_conceptual": [
        7,
        16,
        62,
        79
      ],
      "color": [
        "green",
        "brown",
        "cream"
      ],
      "attributes": [
        "leafy",
        "fresh",
        "indoor",
        "decorative",
        "natural"
      ],
      "action": [
        "decorating the room",
        "growing near the light",
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
        "indor plant",
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
            "en": "houseplant",
            "ja": "観葉植物"
          }
        ],
        "B2": [
          {
            "en": "natural decorative greenery",
            "ja": "自然を感じさせる装飾的な緑"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "green leaves resting in the warm light",
          "ja": "暖かな光の中で静かにたたずむ緑の葉"
        },
        {
          "en": "small pieces of nature surrounding the reader",
          "ja": "読者を囲む小さな自然"
        },
        {
          "en": "living shapes softening the room's corners",
          "ja": "部屋の角をやわらげる生きた形"
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
          "text": "There are many plants in the room.",
          "text_en": "There are many plants in the room.",
          "text_ja": "部屋にはたくさんの植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "several potted plants around the living room",
          "text_en": "several potted plants around the living room",
          "text_ja": "リビングの周りにあるいくつかの鉢植え"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The greenery softens the furniture and brings a natural balance to the indoor setting.",
          "text_en": "The greenery softens the furniture and brings a natural balance to the indoor setting.",
          "text_ja": "緑の植物が家具の印象をやわらげ、室内に自然な調和を与えています。"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "wall shelf and framed picture",
      "label_ja": "壁棚と額入りの絵",
      "category": "decoration",
      "importance": "secondary",
      "description": "A small wooden wall shelf holds books and a plant beneath a framed botanical picture.",
      "bounding_box_conceptual": [
        2,
        0,
        22,
        33
      ],
      "color": [
        "brown",
        "green",
        "cream"
      ],
      "attributes": [
        "wooden",
        "decorative",
        "organized",
        "small"
      ],
      "action": [
        "holding books",
        "displaying a plant",
        "decorating the wall"
      ],
      "synonyms_and_related_words": [
        "wall shelf",
        "shelf",
        "bookshelf",
        "framed picture",
        "botanical print",
        "wall decoration"
      ],
      "accepted_words": [
        "wall shelf",
        "shelf",
        "bookshelf",
        "framed picture",
        "botanical print",
        "wall decoration"
      ],
      "common_typos": [
        "wall shelve",
        "shelff",
        "framed pictur",
        "botanical prent",
        "wall decoraton"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shelf and picture",
            "ja": "棚と絵"
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
            "en": "botanical print",
            "ja": "植物画"
          }
        ],
        "B2": [
          {
            "en": "carefully arranged decorative display",
            "ja": "丁寧に配置された装飾ディスプレイ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small corner of books and leaves",
          "ja": "本と葉でできた小さな一角"
        },
        {
          "en": "a quiet decoration watching over the room",
          "ja": "部屋を見守る静かな装飾"
        },
        {
          "en": "a botanical image echoing the real plants nearby",
          "ja": "近くの本物の植物と呼応する植物画"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shelf, books, picture, wall",
          "text_en": "shelf, books, picture, wall",
          "text_ja": "棚、本、絵、壁"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a shelf on the wall.",
          "text_en": "There is a shelf on the wall.",
          "text_ja": "壁に棚があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden shelf with books and a small plant",
          "text_en": "a wooden shelf with books and a small plant",
          "text_ja": "本と小さな植物がある木製の壁棚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The framed botanical picture and wall shelf add personal detail to the living room.",
          "text_en": "The framed botanical picture and wall shelf add personal detail to the living room.",
          "text_ja": "額入りの植物画と壁棚が、リビングに個人的な細部を加えています。"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "side table with books and diffuser",
      "label_ja": "本とディフューザーのあるサイドテーブル",
      "category": "furniture",
      "importance": "secondary",
      "description": "A round wooden side table on the right holds stacked books, a small plant, and a reed diffuser.",
      "bounding_box_conceptual": [
        77,
        76,
        23,
        24
      ],
      "color": [
        "brown",
        "cream",
        "green",
        "transparent"
      ],
      "attributes": [
        "round",
        "wooden",
        "small",
        "decorative",
        "organized"
      ],
      "action": [
        "holding books",
        "supporting a plant",
        "holding a diffuser"
      ],
      "synonyms_and_related_words": [
        "side table",
        "end table",
        "round table",
        "stacked books",
        "reed diffuser",
        "aroma diffuser",
        "small plant"
      ],
      "accepted_words": [
        "side table",
        "end table",
        "round table",
        "stacked books",
        "reed diffuser",
        "aroma diffuser",
        "small plant"
      ],
      "common_typos": [
        "side tabel",
        "end tabel",
        "round tabel",
        "staked books",
        "reed difuser",
        "aroma difuser"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "small table",
            "ja": "小さなテーブル"
          }
        ],
        "A2": [
          {
            "en": "side table",
            "ja": "サイドテーブル"
          }
        ],
        "B1": [
          {
            "en": "reed diffuser",
            "ja": "リードディフューザー"
          }
        ],
        "B2": [
          {
            "en": "decorative arrangement of books and fragrance",
            "ja": "本と香りを組み合わせた装飾"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small corner where scent, books, and greenery meet",
          "ja": "香り、本、緑が出会う小さな一角"
        },
        {
          "en": "the finishing detail of the cozy room",
          "ja": "居心地のよい部屋を仕上げる細部"
        },
        {
          "en": "a quiet still life beside the sofa",
          "ja": "ソファのそばにある静物画のような一角"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "side table, books, plant, diffuser",
          "text_en": "side table, books, plant, diffuser",
          "text_ja": "サイドテーブル、本、植物、ディフューザー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are books and a plant on the side table.",
          "text_en": "There are books and a plant on the side table.",
          "text_ja": "サイドテーブルに本と植物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a round side table with books and a reed diffuser",
          "text_en": "a round side table with books and a reed diffuser",
          "text_ja": "本とリードディフューザーがある丸いサイドテーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The side table, decorated with books, greenery, and fragrance, completes the carefully styled room.",
          "text_en": "The side table, decorated with books, greenery, and fragrance, completes the carefully styled room.",
          "text_ja": "本、緑、香りで飾られたサイドテーブルが、丁寧に整えられた部屋を完成させています。"
        }
      ]
    }
  ],
  "text_elements": [],
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
        "read",
        "reads",
        "reading",
        "read a book",
        "reading a book",
        "enjoy a book",
        "look at the pages",
        "be absorbed in a book"
      ],
      "accepted_words": [
        "read",
        "reads",
        "reading",
        "read a book",
        "reading a book",
        "enjoy a book",
        "look at the pages",
        "be absorbed in a book"
      ],
      "common_typos": [
        "readding",
        "readng",
        "reding a book",
        "enjoyng a book",
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
            "en": "be absorbed in a book",
            "ja": "本に夢中になる"
          }
        ],
        "B2": [
          {
            "en": "immerse herself in the story",
            "ja": "物語に没頭する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "following a story through the quiet night",
          "ja": "静かな夜の中で物語を追っている"
        },
        {
          "en": "traveling through pages without leaving the sofa",
          "ja": "ソファを離れずにページの中を旅している"
        },
        {
          "en": "letting the book carry her beyond the room",
          "ja": "本に導かれて部屋の外の世界へ向かっている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "read, book, page, story",
          "text_en": "read, book, page, story",
          "text_ja": "読む、本、ページ、物語"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is reading a book.",
          "text_en": "The woman is reading a book.",
          "text_ja": "女性は本を読んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "read quietly while sitting on the sofa",
          "text_en": "read quietly while sitting on the sofa",
          "text_ja": "ソファに座って静かに読む"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Reading an open book on her lap, she appears completely absorbed in the story.",
          "text_en": "Reading an open book on her lap, she appears completely absorbed in the story.",
          "text_ja": "膝の上の開いた本を読みながら、彼女は物語に完全に没頭しているようです。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Holding and drinking from a mug",
      "description_ja": "マグカップを持ち、飲み物を飲んでいる",
      "involved_elements": [
        "element_001",
        "element_003"
      ],
      "synonyms": [
        "hold a mug",
        "holding a mug",
        "drink from a mug",
        "sip a drink",
        "raise the mug",
        "enjoy a warm drink"
      ],
      "accepted_words": [
        "hold a mug",
        "holding a mug",
        "drink from a mug",
        "sip a drink",
        "raise the mug",
        "enjoy a warm drink"
      ],
      "common_typos": [
        "holing a mug",
        "hoding a mug",
        "drnik from a mug",
        "sipp a drink",
        "raiseing the mug"
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
            "en": "hold a mug",
            "ja": "マグカップを持つ"
          }
        ],
        "B1": [
          {
            "en": "sip a warm drink",
            "ja": "温かい飲み物を少しずつ飲む"
          }
        ],
        "B2": [
          {
            "en": "savor a comforting beverage",
            "ja": "心を落ち着かせる飲み物を味わう"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "warming her hands around the mug",
          "ja": "マグカップで手を温めている"
        },
        {
          "en": "taking a quiet sip between pages",
          "ja": "ページをめくる合間に静かに一口飲む"
        },
        {
          "en": "holding a small circle of warmth",
          "ja": "小さな温もりを手に持っている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is holding a mug.",
          "text_en": "She is holding a mug.",
          "text_ja": "彼女はマグカップを持っています。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hold, drink, mug, warm",
          "text_en": "hold, drink, mug, warm",
          "text_ja": "持つ、飲む、マグカップ、暖かい"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sip a warm drink while reading",
          "text_en": "sip a warm drink while reading",
          "text_ja": "読書をしながら温かい飲み物を少しずつ飲む"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the mug near her face, she pauses from reading to enjoy a warm sip.",
          "text_en": "Holding the mug near her face, she pauses from reading to enjoy a warm sip.",
          "text_ja": "マグカップを顔の近くに持ち、読書の手を止めて温かな一口を楽しんでいます。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Sitting comfortably on the sofa",
      "description_ja": "ソファに心地よく座っている",
      "involved_elements": [
        "element_001",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "sit",
        "sitting",
        "sit on the sofa",
        "relax on the couch",
        "recline",
        "rest comfortably",
        "curl up on the sofa"
      ],
      "accepted_words": [
        "sit",
        "sitting",
        "sit on the sofa",
        "relax on the couch",
        "recline",
        "rest comfortably",
        "curl up on the sofa"
      ],
      "common_typos": [
        "siting",
        "sittting",
        "relaxxing",
        "cauch",
        "reclin",
        "curl uped"
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
            "en": "relax comfortably",
            "ja": "心地よくくつろぐ"
          }
        ],
        "B2": [
          {
            "en": "settle into a deeply relaxed posture",
            "ja": "とてもくつろいだ姿勢になる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "curling into a quiet corner of the sofa",
          "ja": "ソファの静かな一角に体を丸めている"
        },
        {
          "en": "letting the day's tension disappear into the cushions",
          "ja": "一日の緊張をクッションの中へ溶かしている"
        },
        {
          "en": "resting in a soft island of comfort",
          "ja": "柔らかな安らぎの島で休んでいる"
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
          "text": "on the sofa / in the living room",
          "text_en": "on the sofa / in the living room",
          "text_ja": "ソファの上で／リビングで"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sit comfortably with her legs drawn up",
          "text_en": "sit comfortably with her legs drawn up",
          "text_ja": "脚を曲げて心地よく座る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Settled among soft cushions, she adopts a relaxed posture suited to a quiet evening.",
          "text_en": "Settled among soft cushions, she adopts a relaxed posture suited to a quiet evening.",
          "text_ja": "柔らかなクッションに囲まれ、静かな夜にふさわしいくつろいだ姿勢を取っています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Holding a book and a mug at the same time",
      "description_ja": "本とマグカップを同時に持っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "hold a book and a mug",
        "holding both items",
        "read with one hand",
        "hold a mug in the other hand",
        "manage both objects"
      ],
      "accepted_words": [
        "hold a book and a mug",
        "holding both items",
        "read with one hand",
        "hold a mug in the other hand",
        "manage both objects"
      ],
      "common_typos": [
        "holing both",
        "holdng a book",
        "mugg",
        "other hans",
        "manadge both objects"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold two things",
            "ja": "2つの物を持つ"
          }
        ],
        "A2": [
          {
            "en": "hold a book and a mug",
            "ja": "本とマグカップを持つ"
          }
        ],
        "B1": [
          {
            "en": "use one hand for each object",
            "ja": "それぞれの手で別の物を持つ"
          }
        ],
        "B2": [
          {
            "en": "balance two activities with ease",
            "ja": "2つの行動を楽に両立する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "balancing a story and a warm drink",
          "ja": "物語と温かい飲み物を両手で支えている"
        },
        {
          "en": "holding comfort in both hands",
          "ja": "両手に安らぎを持っている"
        },
        {
          "en": "keeping one hand in the story and the other in the evening",
          "ja": "片手を物語に、もう片手を夜のひとときに置いている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is holding a book and a mug.",
          "text_en": "She is holding a book and a mug.",
          "text_ja": "彼女は本とマグカップを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold the book in one hand and the mug in the other",
          "text_en": "hold the book in one hand and the mug in the other",
          "text_ja": "片手に本、もう片方の手にマグカップを持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding a mug in one hand and supporting the book with the other, she continues reading comfortably.",
          "text_en": "Holding a mug in one hand and supporting the book with the other, she continues reading comfortably.",
          "text_ja": "片手にマグカップを持ち、もう一方の手で本を支えながら、心地よく読書を続けています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Warm light illuminating the room",
      "description_ja": "暖かな光が部屋を照らしている",
      "involved_elements": [
        "element_009",
        "element_012",
        "element_004"
      ],
      "synonyms": [
        "light fills the room",
        "lamp light illuminates the sofa",
        "candles glow",
        "warm light spreads",
        "soft light shines"
      ],
      "accepted_words": [
        "light fills the room",
        "lamp light illuminates the sofa",
        "candles glow",
        "warm light spreads",
        "soft light shines"
      ],
      "common_typos": [
        "ligth fills",
        "iluminates",
        "candels glow",
        "warm ligth",
        "shines softlyy"
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
            "en": "layered ambient light shapes an intimate atmosphere",
            "ja": "重なった間接光が親密な雰囲気を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden light gathering around the sofa",
          "ja": "ソファの周りに集まる金色の光"
        },
        {
          "en": "warmth spreading quietly from lamp to candle",
          "ja": "ランプからキャンドルへ静かに広がる温かさ"
        },
        {
          "en": "the room glowing like a shelter from the night",
          "ja": "夜から守る避難所のように光る部屋"
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
          "text": "soft lamp light and candlelight around the sofa",
          "text_en": "soft lamp light and candlelight around the sofa",
          "text_ja": "ソファの周りの柔らかなランプとキャンドルの光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Illuminated by the floor lamp and candles, the living room feels calm, intimate, and welcoming.",
          "text_en": "Illuminated by the floor lamp and candles, the living room feels calm, intimate, and welcoming.",
          "text_ja": "フロアランプとキャンドルに照らされ、リビングは穏やかで親密で居心地よく感じられます。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "The television displaying a nighttime cityscape",
      "description_ja": "テレビが夜景を映している",
      "involved_elements": [
        "element_010",
        "element_011"
      ],
      "synonyms": [
        "television shows a city",
        "TV displays city lights",
        "screen is on",
        "show a night view",
        "display a cityscape"
      ],
      "accepted_words": [
        "television shows a city",
        "TV displays city lights",
        "screen is on",
        "show a night view",
        "display a cityscape"
      ],
      "common_typos": [
        "televison shows",
        "TV displaies",
        "screen is one",
        "night veiw",
        "city scape"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "TV is on",
            "ja": "テレビがついている"
          }
        ],
        "A2": [
          {
            "en": "the television shows a city",
            "ja": "テレビが街を映す"
          }
        ],
        "B1": [
          {
            "en": "the screen displays a nighttime cityscape",
            "ja": "画面が夜の街を映す"
          }
        ],
        "B2": [
          {
            "en": "the illuminated screen mirrors the urban view outside",
            "ja": "明るい画面が外の都会の景色を映し返す"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the city glowing twice, on the screen and beyond the glass",
          "ja": "画面と窓の外の両方で光る街"
        },
        {
          "en": "a second night view inside the living room",
          "ja": "リビングの中にあるもう一つの夜景"
        },
        {
          "en": "distant lights moving silently across the screen",
          "ja": "画面の中を静かに流れる遠くの光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The television is showing a city.",
          "text_en": "The television is showing a city.",
          "text_ja": "テレビが街を映しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a screen displaying bright city lights at night",
          "text_en": "a screen displaying bright city lights at night",
          "text_ja": "夜の明るい街の光を映す画面"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The television mirrors the urban night visible outside, visually connecting the room with the city.",
          "text_en": "The television mirrors the urban night visible outside, visually connecting the room with the city.",
          "text_ja": "テレビが外の都会の夜景を映し返し、部屋と街を視覚的につないでいます。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "City lights shining outside the window",
      "description_ja": "窓の外で街の明かりが輝いている",
      "involved_elements": [
        "element_011"
      ],
      "synonyms": [
        "city lights shine",
        "buildings glow",
        "lights twinkle",
        "night city is visible",
        "distant lights sparkle"
      ],
      "accepted_words": [
        "city lights shine",
        "buildings glow",
        "lights twinkle",
        "night city is visible",
        "distant lights sparkle"
      ],
      "common_typos": [
        "city ligths shine",
        "bildings glow",
        "twinkel",
        "night citey",
        "distant ligths"
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
            "en": "scattered urban lights punctuate the darkness",
            "ja": "点在する都会の光が暗闇を彩る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the city breathing in points of light",
          "ja": "光の点で呼吸する街"
        },
        {
          "en": "small windows shining across the sleeping night",
          "ja": "眠る夜の中で光る小さな窓"
        },
        {
          "en": "distant lights keeping watch beyond the balcony",
          "ja": "バルコニーの向こうで見守る遠くの光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "City lights are shining outside.",
          "text_en": "City lights are shining outside.",
          "text_ja": "街の明かりが外で輝いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "distant buildings glowing under the night sky",
          "text_en": "distant buildings glowing under the night sky",
          "text_ja": "夜空の下で光る遠くの建物"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Scattered across the dark skyline, the city lights create a quiet contrast with the warm interior.",
          "text_en": "Scattered across the dark skyline, the city lights create a quiet contrast with the warm interior.",
          "text_ja": "暗い空の輪郭に散らばる街の光が、暖かな室内と静かな対比を作っています。"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "Relaxing during a quiet evening at home",
      "description_ja": "自宅で静かな夜をくつろいで過ごしている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_009",
        "element_012"
      ],
      "synonyms": [
        "relax at home",
        "enjoy a quiet evening",
        "spend time alone",
        "unwind",
        "rest after the day",
        "have a peaceful night"
      ],
      "accepted_words": [
        "relax at home",
        "enjoy a quiet evening",
        "spend time alone",
        "unwind",
        "rest after the day",
        "have a peaceful night"
      ],
      "common_typos": [
        "relaxx at home",
        "quite evening",
        "spend time alon",
        "un wind",
        "peacefull night"
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
            "en": "enjoy a quiet evening",
            "ja": "静かな夜を楽しむ"
          }
        ],
        "B1": [
          {
            "en": "unwind after the day",
            "ja": "一日の後に気持ちをほぐす"
          }
        ],
        "B2": [
          {
            "en": "create a restorative personal routine",
            "ja": "心身を回復させる自分の習慣を作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "letting the night slow down around her",
          "ja": "自分の周りで夜の流れをゆっくりさせている"
        },
        {
          "en": "building a small shelter of warmth, light, and stories",
          "ja": "温かさ、光、物語で小さな安らぎの場を作っている"
        },
        {
          "en": "ending the day in a room that feels safe and still",
          "ja": "安全で静かな部屋で一日を終えている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "She is relaxing at home.",
          "text_en": "She is relaxing at home.",
          "text_ja": "彼女は自宅でくつろいでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "enjoy a quiet evening with a book and a warm drink",
          "text_en": "enjoy a quiet evening with a book and a warm drink",
          "text_ja": "本と温かい飲み物とともに静かな夜を楽しむ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Surrounded by soft light and familiar objects, she appears to be unwinding after a long day.",
          "text_en": "Surrounded by soft light and familiar objects, she appears to be unwinding after a long day.",
          "text_ja": "柔らかな光と身近な物に囲まれ、彼女は長い一日の後にくつろいでいるようです。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "woman",
      "relationship": "on",
      "object": "sofa",
      "example_beginner": "The woman is on the sofa.",
      "example_intermediate": "The young woman is sitting comfortably on the gray sofa."
    },
    {
      "subject": "book",
      "relationship": "on",
      "object": "woman's lap",
      "example_beginner": "The book is on her lap.",
      "example_intermediate": "An open book rests across the woman's lap."
    },
    {
      "subject": "mug",
      "relationship": "in",
      "object": "woman's hand",
      "example_beginner": "The mug is in her hand.",
      "example_intermediate": "She is holding a dark mug in one hand."
    },
    {
      "subject": "coffee table",
      "relationship": "in front of",
      "object": "sofa",
      "example_beginner": "The table is in front of the sofa.",
      "example_intermediate": "A low wooden coffee table stands in front of the sofa."
    },
    {
      "subject": "popcorn",
      "relationship": "on",
      "object": "coffee table",
      "example_beginner": "The popcorn is on the table.",
      "example_intermediate": "A bowl of popcorn sits near the center of the coffee table."
    },
    {
      "subject": "remote control",
      "relationship": "near the edge of",
      "object": "coffee table",
      "example_beginner": "The remote is near the edge.",
      "example_intermediate": "A black remote lies near the front edge of the coffee table."
    },
    {
      "subject": "television",
      "relationship": "to the left of",
      "object": "sofa",
      "example_beginner": "The television is to the left of the sofa.",
      "example_intermediate": "A flat-screen television stands to the left of the sofa."
    },
    {
      "subject": "floor lamp",
      "relationship": "behind",
      "object": "sofa",
      "example_beginner": "The lamp is behind the sofa.",
      "example_intermediate": "A tall tripod floor lamp stands behind the left side of the sofa."
    },
    {
      "subject": "large plant",
      "relationship": "between",
      "object": "floor lamp and sofa",
      "example_beginner": "The plant is between the lamp and the sofa.",
      "example_intermediate": "A large leafy plant stands between the floor lamp and the sofa."
    },
    {
      "subject": "window",
      "relationship": "behind",
      "object": "woman",
      "example_beginner": "The window is behind the woman.",
      "example_intermediate": "A large window showing the city at night is behind the woman."
    },
    {
      "subject": "candle",
      "relationship": "on",
      "object": "windowsill",
      "example_beginner": "A candle is on the windowsill.",
      "example_intermediate": "A glowing glass candle sits on the windowsill beside a small plant."
    },
    {
      "subject": "side table",
      "relationship": "to the right of",
      "object": "sofa",
      "example_beginner": "The side table is to the right of the sofa.",
      "example_intermediate": "A round side table with books and a diffuser stands to the right of the sofa."
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
      "content"
    ],
    "living_room": [
      "cozy",
      "warm",
      "quiet",
      "inviting",
      "comfortable",
      "well-decorated",
      "softly lit"
    ],
    "sofa": [
      "large",
      "gray",
      "soft",
      "spacious",
      "cushioned",
      "comfortable"
    ],
    "light": [
      "warm",
      "golden",
      "soft",
      "gentle",
      "flickering",
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
      "relaxing",
      "serene",
      "intimate",
      "restful",
      "dreamy",
      "homely",
      "peaceful"
    ],
    "objects": [
      "wooden",
      "ceramic",
      "knitted",
      "patterned",
      "decorative",
      "organized"
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
      "meaning_ja": "〜の中に、〜で",
      "example": "She is relaxing in the living room."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The coffee table is in front of the sofa."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The floor lamp is behind the sofa."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The television is to the left of the sofa."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The side table is to the right of the sofa."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The plant is between the lamp and the sofa."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "City lights can be seen through the window."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "A candle is beside the plant on the windowsill."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜と一緒に、〜を使って",
      "example": "She is relaxing with a book and a warm drink."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜の時に、〜で",
      "example": "The city is quiet at night."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周りに",
      "example": "Warm light spreads around the sofa."
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
        "She is holding a mug.",
        "The candles are glowing."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で今している動作を表します。",
        "Scene 006では woman + is reading + a book が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "リビングにある物を説明する。",
      "examples": [
        "There is a television on the left.",
        "There is a candle on the table.",
        "There are several plants in the room."
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
        "The room is cozy.",
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
        "The woman is on the sofa.",
        "The coffee table is in front of the sofa.",
        "The lamp is behind the sofa."
      ],
      "hints": [
        "on, in front of, behind, beside, through などを使います。"
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
        "The candles glow softly.",
        "The city lights shine gently."
      ],
      "hints": [
        "quietly, softly, gently などの副詞を使うと、夜の雰囲気が具体的になります。"
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
        "The book that rests on her lap is open.",
        "The window, which shows the city, is behind her."
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
        "The sofa is covered with cushions.",
        "The room is illuminated by warm light.",
        "The books are stacked on the side table."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で、〜されている状態を表せます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Subject, present participial phrase, + verb",
      "label_ja": "現在分詞による追加説明",
      "level": "intermediate",
      "purpose_ja": "主語の同時動作を一文に加える。",
      "examples": [
        "The woman, holding a mug, is reading a book.",
        "The candles, glowing softly, warm the room.",
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
        "Holding a mug in one hand, she continues reading.",
        "Sitting comfortably on the sofa, she enjoys a quiet evening.",
        "Glowing softly, the candles add warmth to the room."
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
        "Surrounded by cushions and warm light, the woman relaxes.",
        "Illuminated by candles, the room feels intimate.",
        "Framed by the dark window, the city lights appear distant."
      ],
      "hints": [
        "Surrounded, Illuminated, Framed などから始めると背景と主動作をつなげられます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できることを断定せずに表す。",
      "examples": [
        "It looks like the woman is relaxing after a long day.",
        "She seems to be reading a novel.",
        "The room appears to be prepared for a quiet evening."
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
        "She drinks from her mug while reading.",
        "The candles glow as the city lights shine outside.",
        "She relaxes while the television remains on."
      ],
      "hints": [
        "while や as を使うと、同時に起きている二つのことを一文で表せます。"
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
        "example": "She is reading."
      },
      {
        "step": 4,
        "question_ja": "何を持っていますか？",
        "template": "She is holding ______.",
        "example": "She is holding a mug."
      },
      {
        "step": 5,
        "question_ja": "周りには何がありますか？",
        "template": "There is / are ______ in / on / beside ______.",
        "example": "There is a candle on the table."
      }
    ],
    "intermediate": [
      {
        "template": "A young woman is ______ing on ______.",
        "example": "A young woman is reading on a gray sofa."
      },
      {
        "template": "In front of her, there is / are ______.",
        "example": "In front of her, there are popcorn, a candle, and a remote."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a television, a lamp, plants, and a window."
      },
      {
        "template": "The ______ makes the room feel ______.",
        "example": "The warm candlelight makes the room feel peaceful."
      },
      {
        "template": "It looks like she is ______.",
        "example": "It looks like she is enjoying a quiet evening at home."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding a mug in one hand, the woman continues reading her book."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by cushions and warm light, she relaxes on the sofa."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "She reads quietly while the candles glow and city lights shine outside."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The woman, who is sitting on a sofa covered with cushions, is reading a book that rests on her lap."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that she is unwinding after a long and busy day."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A woman is in the living room.",
      "She is sitting on a sofa.",
      "She is reading a book.",
      "She is holding a mug.",
      "The room is warm and quiet."
    ],
    "intermediate": [
      "A young woman in a pink hoodie is sitting comfortably on a gray sofa.",
      "She is reading an open book while holding a dark mug in one hand.",
      "There is a coffee table with popcorn, a candle, and a remote control in front of her.",
      "A television, plants, a floor lamp, and a window can be seen in the background.",
      "Warm light and city lights create a peaceful nighttime atmosphere."
    ],
    "advanced": [
      "Seated comfortably among soft cushions, a young woman in a pink hoodie reads an open book while holding a warm drink near her face.",
      "Illuminated by a floor lamp and flickering candles, the living room feels calm, intimate, and carefully arranged.",
      "In front of the sofa, a wooden coffee table holds popcorn, a remote control, and a glowing candle, suggesting a relaxed evening of reading and television.",
      "Beyond the large window, distant city lights shine beneath the night sky, contrasting gently with the golden warmth of the room."
    ]
  },
  "full_description_support": {
    "beginner_model": "A woman is in a living room. She is sitting on a sofa and reading a book. She is holding a mug. There is a table, a television, and a lamp. The room is warm and quiet.",
    "intermediate_model": "A young woman wearing a pink hoodie is sitting comfortably on a gray sofa in a cozy living room at night. She is reading an open book and holding a dark mug near her face. In front of her, a wooden coffee table holds a bowl of popcorn, a candle, and a remote control. A television, several plants, a tall floor lamp, cushions, and a cream blanket can also be seen. Through the large window, distant city lights shine under the dark sky.",
    "advanced_model": "Seated comfortably on a spacious gray sofa, a young woman in a pink hoodie spends a peaceful evening reading an open book while holding a warm drink close to her face. Soft cushions and a cream blanket surround her, while a tall floor lamp and flickering candles bathe the living room in golden light. On the wooden coffee table, a bowl of popcorn, a remote control, and a glass candle suggest a relaxed mixture of reading and television. To the left, the television displays a nighttime cityscape that mirrors the distant lights visible through the large window behind her. Decorated with leafy plants, books, framed art, and a reed diffuser, the room appears carefully arranged to create a calm, intimate place in which she can unwind after the day."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A woman is on a sofa. She is reading a book.",
        "ja": "女性がソファにいます。彼女は本を読んでいます。",
        "focus": "woman、sofa、reading、bookを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "She has a mug. The room is warm and quiet.",
        "ja": "彼女はマグカップを持っています。部屋は暖かく静かです。",
        "focus": "has と be動詞＋形容詞を使い、持ち物と雰囲気を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A young woman is sitting on a gray sofa and reading an open book.",
        "ja": "若い女性が灰色のソファに座り、開いた本を読んでいます。",
        "focus": "andを使ってsittingとreadingの二つの動作をつなぐ。"
      },
      {
        "en": "She is relaxing in a cozy living room with a mug, cushions, candles, and plants around her.",
        "ja": "彼女はマグカップ、クッション、キャンドル、植物に囲まれた居心地のよいリビングでくつろいでいます。",
        "focus": "with と around her を使って周囲の物をまとめて説明する。"
      }
    ],
    "B1": [
      {
        "en": "A relaxed young woman is reading a book while holding a warm drink near her face.",
        "ja": "くつろいだ若い女性が、温かい飲み物を顔の近くに持ちながら本を読んでいます。",
        "focus": "whileを使って二つの同時動作を表す。"
      },
      {
        "en": "The living room is softly illuminated by a floor lamp and several candles, while city lights are visible through the window.",
        "ja": "リビングはフロアランプといくつかのキャンドルに柔らかく照らされ、窓からは街の明かりが見えます。",
        "focus": "受動態 is illuminated と while を使い、室内と屋外を同時に描写する。"
      }
    ],
    "B2": [
      {
        "en": "Surrounded by soft cushions and warm candlelight, the young woman quietly immerses herself in a book, occasionally lifting a mug toward her face.",
        "ja": "柔らかなクッションと暖かなキャンドルの光に囲まれ、若い女性は静かに本へ没頭し、ときどきマグカップを顔の近くへ持ち上げています。",
        "focus": "Surroundedで始める過去分詞句、immerses herself、occasionallyを使う。"
      },
      {
        "en": "The living room, which overlooks a city glowing beneath the night sky, seems to provide the woman, who is relaxing with a book and a warm drink, with an ideal place to unwind.",
        "ja": "夜空の下で輝く街を見渡せるそのリビングは、本と温かい飲み物でくつろぐ女性にとって、気持ちをほぐす理想的な場所を与えているようです。",
        "focus": "whichとwhoを連続して使う関係代名詞、seems to、provide A with B を組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene006Data = scene006Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene006Data;
}
