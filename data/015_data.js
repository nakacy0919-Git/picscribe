"use strict";

const scene015Data = {
  "id": "scene_015",
  "image_id": "015.webp",
  "overall_description_ja": "夜の落ち着いたレストランで、父、母、息子、娘の4人家族が木製テーブルを囲み、夕食を楽しみながら笑い合っている。左側の父親は水色のシャツを白いTシャツの上に羽織り、フォークを持ちながら息子へ笑顔を向けている。中央左の息子は白地に濃い横縞の長袖シャツを着て、大きく笑いながらスパゲッティを食べている。中央右の娘は白いブラウスを着て、フォークを持ち、家族との会話を楽しんでいる。右側の母親はクリーム色のブラウスを着て、フォークを手にしながら家族を見て笑っている。父親の前には肉料理と付け合わせ、息子の前にはスパゲッティ、娘の前にはピザ、母親の前にはサラダがある。テーブル中央には大きな共有サラダ、手前にはパンかご、水のグラス、小さなオイル皿が置かれている。背景にはほかの食事客、木製の家具、レンガ調の柱、額入りの絵、暖色のペンダントライト、大きな窓があり、窓の外は夜である。全体として、温かく親密で、家族の絆と食事の楽しさが伝わる情景である。",
  "overall_description_en": "In a warm restaurant at night, a family of four—a father, a mother, a son, and a daughter—sits around a wooden table and enjoys dinner together while laughing. The father on the left wears a light blue shirt over a white T-shirt and smiles toward his son while holding a fork. The son in the center-left wears a striped long-sleeved shirt and laughs openly above a plate of spaghetti. The daughter in the center-right wears a white blouse, holds a fork, and smiles as she joins the conversation. The mother on the right wears a cream blouse and looks toward the others with a warm smile. A meat dish is in front of the father, spaghetti in front of the son, pizza in front of the daughter, and salad in front of the mother. A large shared salad bowl, a bread basket, several glasses of water, and a small dish of yellow oil are arranged on the table. Other diners, wooden furniture, brick columns, framed pictures, pendant lights, and large windows showing the dark night outside create a cozy restaurant atmosphere.",
  "overall_mood": [
    "warm",
    "joyful",
    "family-oriented",
    "cozy",
    "friendly",
    "relaxed",
    "lively",
    "intimate",
    "welcoming",
    "comfortable",
    "cheerful",
    "social",
    "well-lit",
    "peaceful",
    "pleasant",
    "connected"
  ],
  "mission_guides": {
    "gist": "4人家族がどこで、何をしながら、どのような表情をしているかを書こう。",
    "setting": "レストラン、木製テーブル、料理、背景の客、窓、照明の位置を説明しよう。",
    "details": "父・母・息子・娘の服装、フォーク、料理の種類、パン、サラダ、水のグラスを加えよう。",
    "complete": "家族が笑いながら会話し、夕食を共有している温かい雰囲気まで描写しよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a family of four enjoying dinner together",
        "ja": "一緒に夕食を楽しむ4人家族"
      },
      {
        "en": "parents and children laughing around a table",
        "ja": "テーブルを囲んで笑う両親と子どもたち"
      },
      {
        "en": "each family member holding a fork",
        "ja": "それぞれがフォークを持っている"
      },
      {
        "en": "sharing food and conversation in a restaurant",
        "ja": "レストランで食事と会話を共有している"
      }
    ],
    "setting": [
      {
        "en": "around a wooden table in a warm restaurant",
        "ja": "温かいレストランの木製テーブルを囲んで"
      },
      {
        "en": "with pasta, pizza, salad, meat, and bread on the table",
        "ja": "テーブルにパスタ、ピザ、サラダ、肉料理、パンがある"
      },
      {
        "en": "with other diners and wooden furniture in the background",
        "ja": "背景にほかの客と木製家具がある"
      },
      {
        "en": "beside large windows showing the night outside",
        "ja": "夜が見える大きな窓のそばで"
      }
    ],
    "mood": [
      {
        "en": "a warm and joyful family atmosphere",
        "ja": "温かく楽しい家族の雰囲気"
      },
      {
        "en": "friendly laughter and close eye contact",
        "ja": "親しみのある笑いと視線"
      },
      {
        "en": "soft pendant lights creating a cozy mood",
        "ja": "居心地の良い雰囲気を作る柔らかな照明"
      },
      {
        "en": "a relaxed evening meal filled with connection",
        "ja": "つながりに満ちたリラックスした夕食"
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
        "a family",
        "a family of four",
        "four family members",
        "the parents and children",
        "the family",
        "they"
      ],
      "hint_msg": "a family of fourやthe parents and childrenなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は家族が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "are eating",
        "are having dinner",
        "are enjoying dinner",
        "are laughing",
        "are talking",
        "are sharing food",
        "are sitting",
        "are smiling"
      ],
      "hint_msg": "are having dinnerやare laughingなど、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次は場所や料理を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "dinner",
        "a meal",
        "a restaurant",
        "a wooden table",
        "pizza",
        "spaghetti",
        "salad",
        "bread",
        "food"
      ],
      "hint_msg": "at a restaurant / around a wooden table / eating dinnerなどを加えましょう。",
      "success_msg": "Excellent! 家族の表情、料理、背景、照明、夜の雰囲気も詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "a family enjoying dinner",
    "parents and children laughing together",
    "sharing a meal at a restaurant",
    "different dishes on the table",
    "family conversation",
    "using forks during dinner",
    "a warm evening restaurant",
    "a shared salad and bread basket",
    "family bonding over food",
    "other diners in the background",
    "soft pendant lighting",
    "nighttime outside the restaurant window",
    "a joyful family gathering"
  ],
  "scene_structure": {
    "foreground": [
      "wooden table",
      "bread basket",
      "water glasses",
      "small oil dish",
      "large salad bowl"
    ],
    "midground": [
      "father",
      "son",
      "daughter",
      "mother",
      "individual plates",
      "forks"
    ],
    "background": [
      "other diners",
      "wooden tables and chairs",
      "brick columns",
      "framed pictures",
      "pendant lights",
      "large windows",
      "night city lights"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "family of four",
      "label_ja": "4人家族",
      "category": "people",
      "importance": "primary",
      "description": "A father, mother, son, and daughter sit close together around the same wooden table and share an evening meal.",
      "bounding_box_conceptual": [
        15,
        0,
        73,
        100
      ],
      "color": [
        "light blue",
        "white",
        "cream",
        "brown"
      ],
      "attributes": [
        "close",
        "joyful",
        "connected",
        "relaxed",
        "friendly",
        "engaged"
      ],
      "action": [
        "eating dinner",
        "laughing",
        "talking",
        "making eye contact",
        "sharing a meal"
      ],
      "synonyms_and_related_words": [
        "family",
        "family of four",
        "four family members",
        "parents and children",
        "father mother son and daughter"
      ],
      "accepted_words": [
        "family",
        "family of four",
        "four family members",
        "parents and children",
        "father mother son and daughter"
      ],
      "common_typos": [
        "famly",
        "familly",
        "family of fore",
        "parants and children",
        "familiy members",
        "diner group"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "family",
            "ja": "家族"
          }
        ],
        "A2": [
          {
            "en": "family of four",
            "ja": "4人家族"
          }
        ],
        "B1": [
          {
            "en": "parents and children",
            "ja": "両親と子どもたち"
          }
        ],
        "B2": [
          {
            "en": "a closely connected family sharing an evening meal",
            "ja": "夕食を共有するつながりの強い家族"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "four voices gathered around one table",
          "ja": "一つのテーブルに集まる4つの声"
        },
        {
          "en": "a circle of family warmth built around food",
          "ja": "食事を中心に作られた家族の温かさの輪"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "family, parents, children, dinner",
          "text_en": "family, parents, children, dinner",
          "text_ja": "家族、両親、子どもたち、夕食"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A family of four is having dinner together.",
          "text_en": "A family of four is having dinner together.",
          "text_ja": "4人家族が一緒に夕食を食べています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "parents and children sharing food and conversation",
          "text_en": "parents and children sharing food and conversation",
          "text_ja": "食事と会話を共有する両親と子どもたち"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The family appears to be enjoying...",
          "text_en": "The family appears to be enjoying...",
          "text_ja": "家族は……を楽しんでいるようです。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "father",
      "label_ja": "父親",
      "category": "person",
      "importance": "primary",
      "description": "The father sits on the far left, wears a light blue shirt over a white T-shirt, holds a fork, and smiles toward his son.",
      "bounding_box_conceptual": [
        16,
        0,
        66,
        30
      ],
      "color": [
        "light blue",
        "white",
        "black"
      ],
      "attributes": [
        "smiling",
        "middle-aged",
        "friendly",
        "relaxed",
        "attentive"
      ],
      "action": [
        "holding a fork",
        "looking at his son",
        "laughing",
        "eating"
      ],
      "synonyms_and_related_words": [
        "father",
        "dad",
        "man",
        "parent",
        "male parent"
      ],
      "accepted_words": [
        "father",
        "dad",
        "man",
        "parent",
        "male parent"
      ],
      "common_typos": [
        "fater",
        "farther",
        "dadd",
        "parant",
        "mail parent",
        "blue shurt"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "father",
            "ja": "父親"
          }
        ],
        "A2": [
          {
            "en": "dad",
            "ja": "お父さん"
          }
        ],
        "B1": [
          {
            "en": "male parent",
            "ja": "男性の親"
          }
        ],
        "B2": [
          {
            "en": "a relaxed father engaging warmly with his children",
            "ja": "子どもたちと温かく関わるリラックスした父親"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a father whose smile opens the family conversation",
          "ja": "笑顔で家族の会話を開く父親"
        },
        {
          "en": "the left side of the table filled with paternal warmth",
          "ja": "父親の温かさで満ちたテーブルの左側"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "father, dad, blue shirt, fork",
          "text_en": "father, dad, blue shirt, fork",
          "text_ja": "父親、お父さん、水色のシャツ、フォーク"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The father is holding a fork and smiling.",
          "text_en": "The father is holding a fork and smiling.",
          "text_ja": "父親はフォークを持って笑っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "look toward his son with a broad smile",
          "text_en": "look toward his son with a broad smile",
          "text_ja": "満面の笑顔で息子を見る"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "On the far left, the father...",
          "text_en": "On the far left, the father...",
          "text_ja": "一番左では父親が……"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "son",
      "label_ja": "息子",
      "category": "person",
      "importance": "primary",
      "description": "The son sits between his father and sister, wears a striped long-sleeved shirt, holds a fork, and laughs with his mouth open.",
      "bounding_box_conceptual": [
        32,
        24,
        48,
        30
      ],
      "color": [
        "white",
        "navy",
        "black"
      ],
      "attributes": [
        "young",
        "laughing",
        "energetic",
        "happy",
        "engaged"
      ],
      "action": [
        "laughing",
        "holding a fork",
        "looking at his sister",
        "eating spaghetti"
      ],
      "synonyms_and_related_words": [
        "son",
        "boy",
        "young boy",
        "child",
        "male child"
      ],
      "accepted_words": [
        "son",
        "boy",
        "young boy",
        "child",
        "male child"
      ],
      "common_typos": [
        "sun",
        "boyy",
        "young bou",
        "striped shurt",
        "mail child",
        "broter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "男の子"
          }
        ],
        "A2": [
          {
            "en": "son",
            "ja": "息子"
          }
        ],
        "B1": [
          {
            "en": "boy in a striped shirt",
            "ja": "横縞のシャツを着た男の子"
          }
        ],
        "B2": [
          {
            "en": "an energetic child responding openly to the family conversation",
            "ja": "家族の会話へ率直に反応する活発な子ども"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the loudest laugh at the center of the table",
          "ja": "テーブル中央の最も大きな笑い声"
        },
        {
          "en": "a striped shirt carrying the energy of the meal",
          "ja": "食事の活気を運ぶ横縞のシャツ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "son, boy, striped shirt, laugh",
          "text_en": "son, boy, striped shirt, laugh",
          "text_ja": "息子、男の子、横縞のシャツ、笑う"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is laughing and holding a fork.",
          "text_en": "The boy is laughing and holding a fork.",
          "text_ja": "男の子は笑いながらフォークを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "laugh openly while looking at his sister",
          "text_en": "laugh openly while looking at his sister",
          "text_ja": "姉妹を見ながら大きく笑う"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Between his father and sister, the boy...",
          "text_en": "Between his father and sister, the boy...",
          "text_ja": "父親と姉妹の間で、男の子は……"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "daughter",
      "label_ja": "娘",
      "category": "person",
      "importance": "primary",
      "description": "The daughter sits between her brother and mother, wears a white blouse, holds a fork, and laughs while looking toward her family.",
      "bounding_box_conceptual": [
        33,
        51,
        45,
        27
      ],
      "color": [
        "white",
        "cream",
        "black"
      ],
      "attributes": [
        "young",
        "smiling",
        "cheerful",
        "attentive",
        "comfortable"
      ],
      "action": [
        "laughing",
        "holding a fork",
        "looking at her brother",
        "eating pizza"
      ],
      "synonyms_and_related_words": [
        "daughter",
        "girl",
        "young girl",
        "child",
        "female child"
      ],
      "accepted_words": [
        "daughter",
        "girl",
        "young girl",
        "child",
        "female child"
      ],
      "common_typos": [
        "daugter",
        "dauter",
        "gril",
        "femail child",
        "white blous",
        "sistar"
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
            "en": "daughter",
            "ja": "娘"
          }
        ],
        "B1": [
          {
            "en": "girl in a white blouse",
            "ja": "白いブラウスの女の子"
          }
        ],
        "B2": [
          {
            "en": "a cheerful daughter participating actively in the family conversation",
            "ja": "家族の会話へ積極的に参加する明るい娘"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright laugh answering her brother across the table",
          "ja": "テーブル越しに兄弟へ返す明るい笑い"
        },
        {
          "en": "a white blouse glowing in the warm restaurant light",
          "ja": "レストランの温かな光に照らされる白いブラウス"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "daughter, girl, white blouse, fork",
          "text_en": "daughter, girl, white blouse, fork",
          "text_ja": "娘、女の子、白いブラウス、フォーク"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl is holding a fork and laughing.",
          "text_en": "The girl is holding a fork and laughing.",
          "text_ja": "女の子はフォークを持って笑っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "smile toward her brother while sitting beside her mother",
          "text_en": "smile toward her brother while sitting beside her mother",
          "text_ja": "母親の隣に座り兄弟へ笑顔を向ける"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the center-right, the daughter...",
          "text_en": "In the center-right, the daughter...",
          "text_ja": "中央右では娘が……"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "mother",
      "label_ja": "母親",
      "category": "person",
      "importance": "primary",
      "description": "The mother sits on the far right, wears a cream blouse, holds a fork, and smiles warmly toward the rest of the family.",
      "bounding_box_conceptual": [
        18,
        73,
        66,
        27
      ],
      "color": [
        "cream",
        "white",
        "brown"
      ],
      "attributes": [
        "smiling",
        "middle-aged",
        "warm",
        "relaxed",
        "attentive"
      ],
      "action": [
        "holding a fork",
        "looking at the family",
        "laughing",
        "eating salad"
      ],
      "synonyms_and_related_words": [
        "mother",
        "mom",
        "woman",
        "parent",
        "female parent"
      ],
      "accepted_words": [
        "mother",
        "mom",
        "woman",
        "parent",
        "female parent"
      ],
      "common_typos": [
        "moter",
        "mather",
        "momm",
        "femail parent",
        "cream blous",
        "women on the right"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "mother",
            "ja": "母親"
          }
        ],
        "A2": [
          {
            "en": "mom",
            "ja": "お母さん"
          }
        ],
        "B1": [
          {
            "en": "female parent",
            "ja": "女性の親"
          }
        ],
        "B2": [
          {
            "en": "a warm mother responding to her family with laughter",
            "ja": "笑顔で家族へ応じる温かな母親"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a mother's smile completing the circle around the table",
          "ja": "テーブルの輪を完成させる母親の笑顔"
        },
        {
          "en": "the right side of the meal softened by her expression",
          "ja": "彼女の表情で柔らかくなる食卓の右側"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mother, mom, cream blouse, smile",
          "text_en": "mother, mom, cream blouse, smile",
          "text_ja": "母親、お母さん、クリーム色のブラウス、笑顔"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The mother is smiling and holding a fork.",
          "text_en": "The mother is smiling and holding a fork.",
          "text_ja": "母親は笑いながらフォークを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "look toward her family with a warm expression",
          "text_en": "look toward her family with a warm expression",
          "text_ja": "温かな表情で家族を見る"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "On the far right, the mother...",
          "text_en": "On the far right, the mother...",
          "text_ja": "一番右では母親が……"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "wooden dining table",
      "label_ja": "木製の食卓",
      "category": "furniture",
      "importance": "primary",
      "description": "A large warm-brown wooden table fills the lower half of the image and supports all dishes, glasses, bread, and utensils.",
      "bounding_box_conceptual": [
        55,
        0,
        45,
        100
      ],
      "color": [
        "warm brown",
        "dark brown"
      ],
      "attributes": [
        "large",
        "wooden",
        "shared",
        "rectangular",
        "warm-toned"
      ],
      "action": [
        "supporting dishes",
        "bringing the family together",
        "serving as a shared dining space"
      ],
      "synonyms_and_related_words": [
        "table",
        "dining table",
        "wooden table",
        "restaurant table",
        "family table"
      ],
      "accepted_words": [
        "table",
        "dining table",
        "wooden table",
        "restaurant table",
        "family table"
      ],
      "common_typos": [
        "tabel",
        "dinning table",
        "wooden tabel",
        "resturant table",
        "famly table",
        "share table"
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
            "en": "dining table",
            "ja": "食卓"
          }
        ],
        "B1": [
          {
            "en": "shared restaurant table",
            "ja": "共有のレストランテーブル"
          }
        ],
        "B2": [
          {
            "en": "a central wooden surface organizing food and family interaction",
            "ja": "料理と家族の交流をまとめる中心的な木製面"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wooden island holding four different meals",
          "ja": "4つの異なる料理を支える木の島"
        },
        {
          "en": "the common ground beneath the family's laughter",
          "ja": "家族の笑いの下にある共通の場所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "table, wood, dinner, restaurant",
          "text_en": "table, wood, dinner, restaurant",
          "text_ja": "テーブル、木、夕食、レストラン"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family is sitting around a wooden table.",
          "text_en": "The family is sitting around a wooden table.",
          "text_ja": "家族は木製テーブルを囲んで座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large shared table covered with different dishes",
          "text_en": "a large shared table covered with different dishes",
          "text_ja": "さまざまな料理でいっぱいの大きな共有テーブル"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "At the center of the scene, the wooden table...",
          "text_en": "At the center of the scene, the wooden table...",
          "text_ja": "場面の中心で木製テーブルは……"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "father's meat dish",
      "label_ja": "父親の肉料理",
      "category": "food",
      "importance": "primary",
      "description": "A browned hamburger steak or meat patty with vegetables and sauce is served on a white plate in front of the father.",
      "bounding_box_conceptual": [
        63,
        16,
        18,
        22
      ],
      "color": [
        "brown",
        "green",
        "white"
      ],
      "attributes": [
        "cooked",
        "savory",
        "plated",
        "hot-looking",
        "substantial"
      ],
      "action": [
        "being eaten",
        "resting on a plate",
        "being cut with a fork"
      ],
      "synonyms_and_related_words": [
        "meat dish",
        "hamburger steak",
        "steak",
        "meat patty",
        "hamburger patty"
      ],
      "accepted_words": [
        "meat dish",
        "hamburger steak",
        "steak",
        "meat patty",
        "hamburger patty"
      ],
      "common_typos": [
        "meet dish",
        "hamberger steak",
        "stake",
        "meat paty",
        "main disch",
        "vegatables"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "meat",
            "ja": "肉"
          }
        ],
        "A2": [
          {
            "en": "meat dish",
            "ja": "肉料理"
          }
        ],
        "B1": [
          {
            "en": "hamburger steak with vegetables",
            "ja": "野菜付きハンバーグ"
          }
        ],
        "B2": [
          {
            "en": "a savory plated meat course accompanied by vegetables and sauce",
            "ja": "野菜とソースを添えた風味豊かな肉料理"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark savory center surrounded by green vegetables",
          "ja": "緑の野菜に囲まれた濃い色の風味豊かな中心"
        },
        {
          "en": "the father's substantial main course",
          "ja": "父親の食べ応えのある主菜"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "meat, steak, vegetables, plate",
          "text_en": "meat, steak, vegetables, plate",
          "text_ja": "肉、ステーキ、野菜、皿"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a meat dish in front of the father.",
          "text_en": "There is a meat dish in front of the father.",
          "text_ja": "父親の前に肉料理があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a browned meat patty served with vegetables",
          "text_en": "a browned meat patty served with vegetables",
          "text_ja": "野菜と一緒に出された焼き色の付いた肉料理"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The father appears to be eating...",
          "text_en": "The father appears to be eating...",
          "text_ja": "父親は……を食べているようです。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "spaghetti plate",
      "label_ja": "スパゲッティの皿",
      "category": "food",
      "importance": "primary",
      "description": "A white plate filled with orange-red spaghetti and green garnish sits directly in front of the son.",
      "bounding_box_conceptual": [
        60,
        34,
        15,
        20
      ],
      "color": [
        "orange-red",
        "green",
        "white"
      ],
      "attributes": [
        "twirled",
        "sauced",
        "warm",
        "plated",
        "colorful"
      ],
      "action": [
        "being eaten with a fork",
        "resting in front of the son"
      ],
      "synonyms_and_related_words": [
        "spaghetti",
        "pasta",
        "spaghetti plate",
        "noodles",
        "tomato pasta"
      ],
      "accepted_words": [
        "spaghetti",
        "pasta",
        "spaghetti plate",
        "noodles",
        "tomato pasta"
      ],
      "common_typos": [
        "spagetti",
        "spagheti",
        "pasta dishh",
        "tomatoe pasta",
        "noodels",
        "plate of spagetti"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pasta",
            "ja": "パスタ"
          }
        ],
        "A2": [
          {
            "en": "spaghetti",
            "ja": "スパゲッティ"
          }
        ],
        "B1": [
          {
            "en": "tomato-based pasta dish",
            "ja": "トマト系のパスタ料理"
          }
        ],
        "B2": [
          {
            "en": "a brightly sauced pasta course served as the son's main dish",
            "ja": "息子の主菜として出された鮮やかなソースのパスタ料理"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small orange-red mountain of pasta",
          "ja": "オレンジ色の小さなパスタの山"
        },
        {
          "en": "the son's plate of tangled noodles and laughter",
          "ja": "絡まる麺と笑いがある息子の皿"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "spaghetti, pasta, noodles, plate",
          "text_en": "spaghetti, pasta, noodles, plate",
          "text_ja": "スパゲッティ、パスタ、麺、皿"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy has a plate of spaghetti.",
          "text_en": "The boy has a plate of spaghetti.",
          "text_ja": "男の子の前にはスパゲッティの皿があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "orange-red spaghetti with a small green garnish",
          "text_en": "orange-red spaghetti with a small green garnish",
          "text_ja": "小さな緑の飾りがあるオレンジ色のスパゲッティ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In front of the son, there is...",
          "text_en": "In front of the son, there is...",
          "text_ja": "息子の前には……があります。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "pizza",
      "label_ja": "ピザ",
      "category": "food",
      "importance": "primary",
      "description": "A small round pizza topped with cheese, tomato, green leaves, and dark pieces is served on a white plate in front of the daughter.",
      "bounding_box_conceptual": [
        58,
        53,
        16,
        19
      ],
      "color": [
        "golden brown",
        "red",
        "green",
        "white"
      ],
      "attributes": [
        "round",
        "topped",
        "baked",
        "colorful",
        "individual-sized"
      ],
      "action": [
        "being eaten",
        "resting on a plate",
        "being cut with a fork"
      ],
      "synonyms_and_related_words": [
        "pizza",
        "small pizza",
        "personal pizza",
        "round pizza",
        "cheese pizza"
      ],
      "accepted_words": [
        "pizza",
        "small pizza",
        "personal pizza",
        "round pizza",
        "cheese pizza"
      ],
      "common_typos": [
        "piza",
        "pizzah",
        "personal piza",
        "chees pizza",
        "round piza",
        "dauter's meal"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pizza",
            "ja": "ピザ"
          }
        ],
        "A2": [
          {
            "en": "small pizza",
            "ja": "小さなピザ"
          }
        ],
        "B1": [
          {
            "en": "individual-sized pizza",
            "ja": "一人分サイズのピザ"
          }
        ],
        "B2": [
          {
            "en": "a freshly baked personal pizza topped with colorful ingredients",
            "ja": "色鮮やかな具材が載った焼きたての一人用ピザ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small round meal covered with color",
          "ja": "色で覆われた小さな丸い食事"
        },
        {
          "en": "the daughter's golden pizza framed by a white plate",
          "ja": "白い皿に囲まれた娘の黄金色のピザ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pizza, cheese, tomato, round",
          "text_en": "pizza, cheese, tomato, round",
          "text_ja": "ピザ、チーズ、トマト、丸い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a small pizza in front of the girl.",
          "text_en": "There is a small pizza in front of the girl.",
          "text_ja": "女の子の前に小さなピザがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a small round pizza topped with cheese and vegetables",
          "text_en": "a small round pizza topped with cheese and vegetables",
          "text_ja": "チーズと野菜が載った小さな丸いピザ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The daughter's plate contains...",
          "text_en": "The daughter's plate contains...",
          "text_ja": "娘の皿には……があります。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "mother's salad",
      "label_ja": "母親のサラダ",
      "category": "food",
      "importance": "primary",
      "description": "A white bowl filled with green lettuce, red tomato pieces, and other vegetables is placed in front of the mother.",
      "bounding_box_conceptual": [
        65,
        70,
        17,
        22
      ],
      "color": [
        "green",
        "red",
        "white"
      ],
      "attributes": [
        "fresh",
        "colorful",
        "light",
        "healthy-looking",
        "mixed"
      ],
      "action": [
        "being eaten with a fork",
        "resting in front of the mother"
      ],
      "synonyms_and_related_words": [
        "salad",
        "green salad",
        "mixed salad",
        "vegetable salad",
        "salad bowl"
      ],
      "accepted_words": [
        "salad",
        "green salad",
        "mixed salad",
        "vegetable salad",
        "salad bowl"
      ],
      "common_typos": [
        "salat",
        "green saled",
        "mix salad",
        "vegitable salad",
        "fresh vegatables",
        "salad boul"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "salad",
            "ja": "サラダ"
          }
        ],
        "A2": [
          {
            "en": "green salad",
            "ja": "グリーンサラダ"
          }
        ],
        "B1": [
          {
            "en": "mixed vegetable salad",
            "ja": "ミックス野菜サラダ"
          }
        ],
        "B2": [
          {
            "en": "a fresh individual salad containing lettuce and colorful vegetables",
            "ja": "レタスと色鮮やかな野菜が入った新鮮な一人分のサラダ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bowl of green freshness beside the mother's smile",
          "ja": "母親の笑顔のそばにある緑の新鮮さ"
        },
        {
          "en": "a light garden-like dish at the right side of the table",
          "ja": "食卓右側の庭のような軽い料理"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "salad, lettuce, tomato, bowl",
          "text_en": "salad, lettuce, tomato, bowl",
          "text_ja": "サラダ、レタス、トマト、ボウル"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The mother has a bowl of salad.",
          "text_en": "The mother has a bowl of salad.",
          "text_ja": "母親の前にはサラダのボウルがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a fresh green salad with tomatoes and vegetables",
          "text_en": "a fresh green salad with tomatoes and vegetables",
          "text_ja": "トマトと野菜が入った新鮮なグリーンサラダ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In front of the mother, a bowl of...",
          "text_en": "In front of the mother, a bowl of...",
          "text_ja": "母親の前には……のボウルがあります。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "shared salad bowl",
      "label_ja": "共有の大きなサラダボウル",
      "category": "food",
      "importance": "primary",
      "description": "A large transparent bowl of mixed salad with lettuce, tomatoes, pale cheese-like pieces, and other vegetables sits in the center of the table.",
      "bounding_box_conceptual": [
        69,
        37,
        20,
        29
      ],
      "color": [
        "green",
        "red",
        "yellow",
        "transparent"
      ],
      "attributes": [
        "large",
        "shared",
        "fresh",
        "colorful",
        "central"
      ],
      "action": [
        "being shared",
        "sitting in the center",
        "serving the whole family"
      ],
      "synonyms_and_related_words": [
        "large salad bowl",
        "shared salad",
        "mixed salad",
        "family salad",
        "central salad bowl"
      ],
      "accepted_words": [
        "large salad bowl",
        "shared salad",
        "mixed salad",
        "family salad",
        "central salad bowl"
      ],
      "common_typos": [
        "large saled bowl",
        "share salad",
        "mixxed salad",
        "famly salad",
        "central salat bowl",
        "vegitable bowl"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "salad bowl",
            "ja": "サラダボウル"
          }
        ],
        "A2": [
          {
            "en": "large salad bowl",
            "ja": "大きなサラダボウル"
          }
        ],
        "B1": [
          {
            "en": "shared mixed salad",
            "ja": "共有のミックスサラダ"
          }
        ],
        "B2": [
          {
            "en": "a central serving bowl designed to be shared by the entire family",
            "ja": "家族全員で共有するための中央の取り分け用ボウル"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a colorful garden at the center of the table",
          "ja": "食卓中央の色鮮やかな庭"
        },
        {
          "en": "the shared green heart of the family meal",
          "ja": "家族の食事の共有された緑の心臓部"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "large bowl, salad, shared, center",
          "text_en": "large bowl, salad, shared, center",
          "text_ja": "大きなボウル、サラダ、共有、中央"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A large salad bowl is in the center of the table.",
          "text_en": "A large salad bowl is in the center of the table.",
          "text_ja": "大きなサラダボウルがテーブルの中央にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a colorful mixed salad shared by the whole family",
          "text_en": "a colorful mixed salad shared by the whole family",
          "text_ja": "家族全員で共有する色鮮やかなミックスサラダ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "At the center of the table, the shared salad...",
          "text_en": "At the center of the table, the shared salad...",
          "text_ja": "テーブル中央で共有のサラダは……"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "bread basket",
      "label_ja": "パンかご",
      "category": "food",
      "importance": "primary",
      "description": "A woven basket filled with several slices and pieces of white bread rests in the front-center of the table.",
      "bounding_box_conceptual": [
        78,
        22,
        20,
        32
      ],
      "color": [
        "light brown",
        "cream",
        "golden brown"
      ],
      "attributes": [
        "woven",
        "full",
        "shared",
        "rustic",
        "central"
      ],
      "action": [
        "holding bread",
        "resting in the foreground",
        "being shared"
      ],
      "synonyms_and_related_words": [
        "bread basket",
        "basket of bread",
        "bread",
        "sliced bread",
        "woven basket"
      ],
      "accepted_words": [
        "bread basket",
        "basket of bread",
        "bread",
        "sliced bread",
        "woven basket"
      ],
      "common_typos": [
        "bred basket",
        "basket of bred",
        "slice bread",
        "woven baskit",
        "share bread",
        "resturant bread"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bread",
            "ja": "パン"
          }
        ],
        "A2": [
          {
            "en": "bread basket",
            "ja": "パンかご"
          }
        ],
        "B1": [
          {
            "en": "woven basket of sliced bread",
            "ja": "スライスパンの入った編みかご"
          }
        ],
        "B2": [
          {
            "en": "a shared basket containing several pieces of bread for the family",
            "ja": "家族で共有する複数のパンが入ったかご"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a woven basket of soft golden pieces",
          "ja": "柔らかな黄金色のパンが入った編みかご"
        },
        {
          "en": "bread waiting quietly in the foreground",
          "ja": "手前で静かに待つパン"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bread, basket, slice, share",
          "text_en": "bread, basket, slice, share",
          "text_ja": "パン、かご、スライス、共有する"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a basket of bread on the table.",
          "text_en": "There is a basket of bread on the table.",
          "text_ja": "テーブルの上にパンかごがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a woven basket filled with slices of bread",
          "text_en": "a woven basket filled with slices of bread",
          "text_ja": "スライスパンでいっぱいの編みかご"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the foreground, the bread basket...",
          "text_en": "In the foreground, the bread basket...",
          "text_ja": "手前ではパンかごが……"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "water glasses",
      "label_ja": "水のグラス",
      "category": "object",
      "importance": "secondary",
      "description": "Several clear drinking glasses containing water are placed around the table near each family member.",
      "bounding_box_conceptual": [
        67,
        13,
        32,
        72
      ],
      "color": [
        "transparent",
        "silver",
        "light blue"
      ],
      "attributes": [
        "clear",
        "cylindrical",
        "simple",
        "reflective",
        "partly filled"
      ],
      "action": [
        "holding water",
        "reflecting warm light",
        "standing near the plates"
      ],
      "synonyms_and_related_words": [
        "water glasses",
        "glasses of water",
        "drinking glasses",
        "clear glasses",
        "water cups"
      ],
      "accepted_words": [
        "water glasses",
        "glasses of water",
        "drinking glasses",
        "clear glasses",
        "water cups"
      ],
      "common_typos": [
        "watar glasses",
        "glases of water",
        "drinking glases",
        "clear glases",
        "glass wear",
        "resturant glasses"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "water",
            "ja": "水"
          }
        ],
        "A2": [
          {
            "en": "glass of water",
            "ja": "水のグラス"
          }
        ],
        "B1": [
          {
            "en": "clear drinking glasses",
            "ja": "透明な飲料用グラス"
          }
        ],
        "B2": [
          {
            "en": "several reflective water glasses arranged around the shared meal",
            "ja": "共有の食事の周囲に並ぶ複数の光を反射する水のグラス"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small transparent columns catching the restaurant light",
          "ja": "レストランの光を受ける小さな透明の柱"
        },
        {
          "en": "quiet reflections between plates and laughter",
          "ja": "皿と笑いの間の静かな反射"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "glass, water, clear, drink",
          "text_en": "glass, water, clear, drink",
          "text_ja": "グラス、水、透明、飲む"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are several glasses of water on the table.",
          "text_en": "There are several glasses of water on the table.",
          "text_ja": "テーブルにはいくつかの水のグラスがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "clear water glasses reflecting the warm restaurant lights",
          "text_en": "clear water glasses reflecting the warm restaurant lights",
          "text_ja": "温かな照明を反射する透明な水のグラス"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Around the plates, several glasses...",
          "text_en": "Around the plates, several glasses...",
          "text_ja": "皿の周囲にはいくつかのグラスが……"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "forks and tableware",
      "label_ja": "フォークと食器",
      "category": "object",
      "importance": "primary",
      "description": "Each family member holds or uses a metal fork, and additional plates, utensils, and small dishes are arranged across the table.",
      "bounding_box_conceptual": [
        50,
        10,
        38,
        82
      ],
      "color": [
        "silver",
        "white"
      ],
      "attributes": [
        "metallic",
        "functional",
        "reflective",
        "individual",
        "restaurant-style"
      ],
      "action": [
        "being held",
        "being used to eat",
        "resting beside plates"
      ],
      "synonyms_and_related_words": [
        "forks",
        "fork",
        "utensils",
        "cutlery",
        "tableware"
      ],
      "accepted_words": [
        "forks",
        "fork",
        "utensils",
        "cutlery",
        "tableware"
      ],
      "common_typos": [
        "foks",
        "forcks",
        "utensiles",
        "cutelery",
        "table wear",
        "silver ware"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "fork",
            "ja": "フォーク"
          }
        ],
        "A2": [
          {
            "en": "utensils",
            "ja": "食器・調理器具"
          }
        ],
        "B1": [
          {
            "en": "cutlery",
            "ja": "ナイフやフォークなどの食器"
          }
        ],
        "B2": [
          {
            "en": "metal tableware used individually during the shared dinner",
            "ja": "共有の夕食で各自が使う金属製の食器"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "silver lines connecting hands with food",
          "ja": "手と料理をつなぐ銀色の線"
        },
        {
          "en": "small tools moving between laughter and plates",
          "ja": "笑いと皿の間を動く小さな道具"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "fork, plate, utensil, eat",
          "text_en": "fork, plate, utensil, eat",
          "text_ja": "フォーク、皿、食器、食べる"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Each family member is holding a fork.",
          "text_en": "Each family member is holding a fork.",
          "text_ja": "家族それぞれがフォークを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "metal forks held above individual plates",
          "text_en": "metal forks held above individual plates",
          "text_ja": "それぞれの皿の上で持たれた金属製フォーク"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Using forks, the family members...",
          "text_en": "Using forks, the family members...",
          "text_ja": "フォークを使って、家族は……"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "restaurant interior and pendant lights",
      "label_ja": "レストランの店内とペンダントライト",
      "category": "setting",
      "importance": "primary",
      "description": "A warm restaurant interior with brick columns, wooden furniture, framed pictures, and several glowing pendant lights surrounds the family.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "warm brown",
        "amber",
        "cream",
        "black"
      ],
      "attributes": [
        "warm",
        "cozy",
        "wooden",
        "well-lit",
        "inviting",
        "evening"
      ],
      "action": [
        "surrounding the diners",
        "providing warm light",
        "creating a cozy atmosphere"
      ],
      "synonyms_and_related_words": [
        "restaurant interior",
        "restaurant",
        "dining area",
        "warm interior",
        "pendant lights"
      ],
      "accepted_words": [
        "restaurant interior",
        "restaurant",
        "dining area",
        "warm interior",
        "pendant lights"
      ],
      "common_typos": [
        "resturant interior",
        "restaraunt",
        "dinning area",
        "pendant ligths",
        "brick colums",
        "wooden furnature"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "restaurant",
            "ja": "レストラン"
          }
        ],
        "A2": [
          {
            "en": "dining area",
            "ja": "食事スペース"
          }
        ],
        "B1": [
          {
            "en": "cozy restaurant interior",
            "ja": "居心地の良いレストラン内装"
          }
        ],
        "B2": [
          {
            "en": "a warmly illuminated dining environment combining wood, brick, and soft light",
            "ja": "木、レンガ、柔らかな光を組み合わせた温かく照らされた食事空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "an amber room built from wood, brick, and conversation",
          "ja": "木、レンガ、会話でできた琥珀色の部屋"
        },
        {
          "en": "pendant lights hanging like small moons above dinner",
          "ja": "夕食の上に小さな月のように下がる照明"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "restaurant, light, brick, wooden",
          "text_en": "restaurant, light, brick, wooden",
          "text_ja": "レストラン、照明、レンガ、木製"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family is eating in a warm restaurant.",
          "text_en": "The family is eating in a warm restaurant.",
          "text_ja": "家族は温かい雰囲気のレストランで食事をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a cozy dining room with wooden furniture and pendant lights",
          "text_en": "a cozy dining room with wooden furniture and pendant lights",
          "text_ja": "木製家具とペンダントライトがある居心地の良い食事空間"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The restaurant interior makes the scene feel...",
          "text_en": "The restaurant interior makes the scene feel...",
          "text_ja": "レストランの内装によって、場面は……に感じられます。"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "background diners and night window",
      "label_ja": "背景の食事客と夜の窓",
      "category": "setting",
      "importance": "secondary",
      "description": "Other diners sit at tables behind the family, and large dark windows reveal trees, scattered building lights, and the nighttime sky outside.",
      "bounding_box_conceptual": [
        10,
        27,
        50,
        73
      ],
      "color": [
        "dark blue",
        "black",
        "green",
        "amber"
      ],
      "attributes": [
        "distant",
        "nighttime",
        "social",
        "dim",
        "layered"
      ],
      "action": [
        "eating",
        "talking",
        "sitting",
        "showing the night outside"
      ],
      "synonyms_and_related_words": [
        "background diners",
        "other customers",
        "restaurant guests",
        "people in the background",
        "night window"
      ],
      "accepted_words": [
        "background diners",
        "other customers",
        "restaurant guests",
        "people in the background",
        "night window"
      ],
      "common_typos": [
        "back ground diners",
        "costumers",
        "resturant guests",
        "night windo",
        "city ligths",
        "nite outside"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "other people",
            "ja": "ほかの人々"
          }
        ],
        "A2": [
          {
            "en": "background diners",
            "ja": "背景の食事客"
          }
        ],
        "B1": [
          {
            "en": "restaurant guests near the windows",
            "ja": "窓の近くのレストラン客"
          }
        ],
        "B2": [
          {
            "en": "distant diners and nighttime windows extending the social setting beyond the family",
            "ja": "家族の外へ社会的な場面を広げる遠くの食事客と夜の窓"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "other conversations glowing softly behind the family",
          "ja": "家族の後ろで柔らかく光る別の会話"
        },
        {
          "en": "night pressed against the restaurant windows",
          "ja": "レストランの窓に寄り添う夜"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "people, background, window, night",
          "text_en": "people, background, window, night",
          "text_ja": "人々、背景、窓、夜"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Other people are eating in the background.",
          "text_en": "Other people are eating in the background.",
          "text_ja": "背景ではほかの人々が食事をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "distant diners beside large windows showing the dark night",
          "text_en": "distant diners beside large windows showing the dark night",
          "text_ja": "暗い夜が見える大きな窓のそばの遠くの食事客"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Behind the family, other restaurant guests...",
          "text_en": "Behind the family, other restaurant guests...",
          "text_ja": "家族の後ろでは、ほかのレストラン客が……"
        }
      ]
    }
  ],
  "text_elements": [],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Having dinner together",
      "description_ja": "一緒に夕食を食べている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_005",
        "element_006"
      ],
      "synonyms": [
        "have dinner together",
        "having dinner together",
        "eat dinner together",
        "share a meal",
        "enjoy a family meal"
      ],
      "accepted_words": [
        "have dinner together",
        "having dinner together",
        "eat dinner together",
        "share a meal",
        "enjoy a family meal"
      ],
      "common_typos": [
        "have diner together",
        "eating diner",
        "share a meel",
        "famly meal",
        "dinning together",
        "resturant"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "eat dinner",
            "ja": "夕食を食べる"
          }
        ],
        "A2": [
          {
            "en": "have dinner together",
            "ja": "一緒に夕食を食べる"
          }
        ],
        "B1": [
          {
            "en": "share a family meal",
            "ja": "家族の食事を共有する"
          }
        ],
        "B2": [
          {
            "en": "participate in a shared evening meal that combines food and conversation",
            "ja": "食事と会話を組み合わせた夕食を共有する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning four separate plates into one family experience",
          "ja": "4つの別々の皿を一つの家族経験へ変える"
        },
        {
          "en": "sharing the evening one bite and one story at a time",
          "ja": "一口と一つの話ごとに夜を共有する"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "dinner, eat, family, together",
          "text_en": "dinner, eat, family, together",
          "text_ja": "夕食、食べる、家族、一緒に"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family is having dinner together.",
          "text_en": "The family is having dinner together.",
          "text_ja": "家族は一緒に夕食を食べています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "share an evening meal around a wooden table",
          "text_en": "share an evening meal around a wooden table",
          "text_ja": "木製テーブルを囲んで夕食を共有する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The family appears to be enjoying...",
          "text_en": "The family appears to be enjoying...",
          "text_ja": "家族は……を楽しんでいるようです。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Laughing and talking",
      "description_ja": "笑いながら会話している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "laugh together",
        "laughing together",
        "talk and laugh",
        "have a conversation",
        "share a joke"
      ],
      "accepted_words": [
        "laugh together",
        "laughing together",
        "talk and laugh",
        "have a conversation",
        "share a joke"
      ],
      "common_typos": [
        "lagh together",
        "talking and laghing",
        "conversasion",
        "share a jok",
        "chat during diner",
        "one anather"
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
            "en": "talk and laugh",
            "ja": "話して笑う"
          }
        ],
        "B1": [
          {
            "en": "share a lively conversation",
            "ja": "活気のある会話を共有する"
          }
        ],
        "B2": [
          {
            "en": "exchange humor and attention through an animated family conversation",
            "ja": "活発な家族の会話を通してユーモアと注意を交換する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "laughter traveling from one side of the table to the other",
          "ja": "笑いが食卓の一方から他方へ伝わる"
        },
        {
          "en": "a conversation brighter than the pendant lights",
          "ja": "ペンダントライトより明るい会話"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "laugh, talk, smile, conversation",
          "text_en": "laugh, talk, smile, conversation",
          "text_ja": "笑う、話す、笑顔、会話"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family members are laughing and talking.",
          "text_en": "The family members are laughing and talking.",
          "text_ja": "家族は笑いながら話しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "share a cheerful conversation while eating dinner",
          "text_en": "share a cheerful conversation while eating dinner",
          "text_ja": "夕食を食べながら明るい会話を共有する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Their expressions show that...",
          "text_en": "Their expressions show that...",
          "text_ja": "表情から……と分かります。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Holding and using forks",
      "description_ja": "フォークを持ち使っている",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_004",
        "element_005",
        "element_014"
      ],
      "synonyms": [
        "hold forks",
        "use forks",
        "eat with forks",
        "hold a fork",
        "pick up food"
      ],
      "accepted_words": [
        "hold forks",
        "use forks",
        "eat with forks",
        "hold a fork",
        "pick up food"
      ],
      "common_typos": [
        "hold foks",
        "use forcks",
        "eat with forkes",
        "cutelery",
        "utensiles",
        "take a bit"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold a fork",
            "ja": "フォークを持つ"
          }
        ],
        "A2": [
          {
            "en": "eat with a fork",
            "ja": "フォークで食べる"
          }
        ],
        "B1": [
          {
            "en": "use cutlery during the meal",
            "ja": "食事中に食器を使う"
          }
        ],
        "B2": [
          {
            "en": "coordinate conversation and eating while holding individual pieces of cutlery",
            "ja": "各自の食器を持ちながら会話と食事を両立する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "silver forks paused between food and laughter",
          "ja": "料理と笑いの間で止まる銀色のフォーク"
        },
        {
          "en": "small tools marking the rhythm of dinner",
          "ja": "夕食のリズムを刻む小さな道具"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "fork, hold, eat, utensil",
          "text_en": "fork, hold, eat, utensil",
          "text_ja": "フォーク、持つ、食べる、食器"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Each person is holding a fork.",
          "text_en": "Each person is holding a fork.",
          "text_ja": "それぞれがフォークを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "pause with a fork in hand while listening and laughing",
          "text_en": "pause with a fork in hand while listening and laughing",
          "text_ja": "話を聞き笑いながらフォークを手にしたまま止まる"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Although they are eating, the family members also...",
          "text_en": "Although they are eating, the family members also...",
          "text_ja": "食事中ですが、家族は……もしています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Making eye contact across the table",
      "description_ja": "テーブル越しに視線を合わせている",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "make eye contact",
        "look at one another",
        "look across the table",
        "watch each other",
        "face one another"
      ],
      "accepted_words": [
        "make eye contact",
        "look at one another",
        "look across the table",
        "watch each other",
        "face one another"
      ],
      "common_typos": [
        "make eyes contact",
        "one anather",
        "look acros the table",
        "watch ech other",
        "turn towrd",
        "share atention"
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
            "en": "look across the table while speaking",
            "ja": "話しながらテーブル越しに見る"
          }
        ],
        "B2": [
          {
            "en": "sustain family engagement through mutual eye contact and responsive expressions",
            "ja": "相互の視線と反応する表情で家族の関わりを保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "eyes carrying the conversation across plates and glasses",
          "ja": "皿とグラスを越えて会話を運ぶ視線"
        },
        {
          "en": "a network of attention connecting all four seats",
          "ja": "4つの席をつなぐ注意のネットワーク"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "eye contact, look, face, attention",
          "text_en": "eye contact, look, face, attention",
          "text_ja": "視線、見る、向き合う、注意"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family members are looking at one another.",
          "text_en": "The family members are looking at one another.",
          "text_ja": "家族は互いを見ています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "make eye contact across the table while talking",
          "text_en": "make eye contact across the table while talking",
          "text_ja": "話しながらテーブル越しに視線を合わせる"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Their eye contact suggests that...",
          "text_en": "Their eye contact suggests that...",
          "text_ja": "視線から……と分かります。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Eating different individual dishes",
      "description_ja": "それぞれ異なる料理を食べている",
      "involved_elements": [
        "element_007",
        "element_008",
        "element_009",
        "element_010"
      ],
      "synonyms": [
        "eat different dishes",
        "have different meals",
        "choose different foods",
        "eat individual dishes",
        "enjoy separate main courses"
      ],
      "accepted_words": [
        "eat different dishes",
        "have different meals",
        "choose different foods",
        "eat individual dishes",
        "enjoy separate main courses"
      ],
      "common_typos": [
        "diffrent dishes",
        "different meels",
        "chose different foods",
        "seperate main courses",
        "diferent plates",
        "persnal meals"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "eat different food",
            "ja": "異なる食べ物を食べる"
          }
        ],
        "A2": [
          {
            "en": "have different dishes",
            "ja": "異なる料理を食べる"
          }
        ],
        "B1": [
          {
            "en": "choose separate main courses",
            "ja": "別々の主菜を選ぶ"
          }
        ],
        "B2": [
          {
            "en": "express individual preferences through a varied selection of main dishes",
            "ja": "さまざまな主菜の選択を通して個人の好みを表す"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "four plates showing four different tastes",
          "ja": "4つの異なる好みを示す4枚の皿"
        },
        {
          "en": "individual choices gathered within one family meal",
          "ja": "一つの家族の食事に集まる個人の選択"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "different, dish, meal, choose",
          "text_en": "different, dish, meal, choose",
          "text_ja": "異なる、料理、食事、選ぶ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Each person has a different dish.",
          "text_en": "Each person has a different dish.",
          "text_ja": "それぞれが異なる料理を食べています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "eat meat, pasta, pizza, and salad at the same table",
          "text_en": "eat meat, pasta, pizza, and salad at the same table",
          "text_ja": "同じ食卓で肉、パスタ、ピザ、サラダを食べる"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Although the family is sharing dinner, each person...",
          "text_en": "Although the family is sharing dinner, each person...",
          "text_ja": "家族は夕食を共有していますが、それぞれは……"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Sharing salad and bread",
      "description_ja": "サラダとパンを共有している",
      "involved_elements": [
        "element_011",
        "element_012",
        "element_001"
      ],
      "synonyms": [
        "share salad",
        "share bread",
        "share food",
        "eat from a shared bowl",
        "pass the bread"
      ],
      "accepted_words": [
        "share salad",
        "share bread",
        "share food",
        "eat from a shared bowl",
        "pass the bread"
      ],
      "common_typos": [
        "share saled",
        "share bred",
        "share foood",
        "share boul",
        "pas the bread",
        "comunal dishes"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "share food",
            "ja": "食べ物を共有する"
          }
        ],
        "A2": [
          {
            "en": "share salad and bread",
            "ja": "サラダとパンを共有する"
          }
        ],
        "B1": [
          {
            "en": "eat shared side dishes",
            "ja": "共有の付け合わせを食べる"
          }
        ],
        "B2": [
          {
            "en": "use central serving dishes to reinforce the communal nature of the meal",
            "ja": "中央の取り分け料理を使い食事の共同性を強める"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "reaching toward the same green bowl and bread basket",
          "ja": "同じ緑のボウルとパンかごへ手を伸ばす"
        },
        {
          "en": "shared side dishes forming the meal's common center",
          "ja": "食事の共通の中心を作る共有料理"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "share, salad, bread, bowl",
          "text_en": "share, salad, bread, bowl",
          "text_ja": "共有する、サラダ、パン、ボウル"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family can share the salad and bread.",
          "text_en": "The family can share the salad and bread.",
          "text_ja": "家族はサラダとパンを共有できます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "share side dishes placed in the center of the table",
          "text_en": "share side dishes placed in the center of the table",
          "text_ja": "テーブル中央に置かれた付け合わせを共有する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Unlike the individual main dishes, the salad and bread...",
          "text_en": "Unlike the individual main dishes, the salad and bread...",
          "text_ja": "個別の主菜と異なり、サラダとパンは……"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Sitting around the table",
      "description_ja": "テーブルを囲んで座っている",
      "involved_elements": [
        "element_001",
        "element_006"
      ],
      "synonyms": [
        "sit around the table",
        "sit together",
        "be seated around a table",
        "gather at the table",
        "sit close together"
      ],
      "accepted_words": [
        "sit around the table",
        "sit together",
        "be seated around a table",
        "gather at the table",
        "sit close together"
      ],
      "common_typos": [
        "sit arround",
        "sit togather",
        "be seeted",
        "gather at tabel",
        "sit close togther",
        "face one anather"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sit together",
            "ja": "一緒に座る"
          }
        ],
        "A2": [
          {
            "en": "sit around the table",
            "ja": "テーブルを囲んで座る"
          }
        ],
        "B1": [
          {
            "en": "gather around a shared table",
            "ja": "共有のテーブルを囲んで集まる"
          }
        ],
        "B2": [
          {
            "en": "arrange themselves in a close conversational formation around the meal",
            "ja": "食事を囲む近い会話の配置に座る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "four chairs completing a circle of attention",
          "ja": "注意の輪を完成させる4つの椅子"
        },
        {
          "en": "a seating arrangement designed for conversation",
          "ja": "会話のために作られた座席配置"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sit, around, table, together",
          "text_en": "sit, around, table, together",
          "text_ja": "座る、囲んで、テーブル、一緒に"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family is sitting around the table.",
          "text_en": "The family is sitting around the table.",
          "text_ja": "家族はテーブルを囲んで座っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sit close together and face one another",
          "text_en": "sit close together and face one another",
          "text_ja": "近くに座り互いに向き合う"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Because they are seated close together...",
          "text_en": "Because they are seated close together...",
          "text_ja": "近くに座っているため……"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "Dining in a warm nighttime restaurant",
      "description_ja": "夜の温かいレストランで食事している",
      "involved_elements": [
        "element_015",
        "element_016",
        "element_001"
      ],
      "synonyms": [
        "dine at night",
        "eat in a warm restaurant",
        "have dinner in the evening",
        "eat under pendant lights",
        "dine beside night windows"
      ],
      "accepted_words": [
        "dine at night",
        "eat in a warm restaurant",
        "have dinner in the evening",
        "eat under pendant lights",
        "dine beside night windows"
      ],
      "common_typos": [
        "dine at nite",
        "warm resturant",
        "in the evenning",
        "pendant ligths",
        "night windos",
        "after drak"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "eat at night",
            "ja": "夜に食べる"
          }
        ],
        "A2": [
          {
            "en": "have dinner in a restaurant",
            "ja": "レストランで夕食を食べる"
          }
        ],
        "B1": [
          {
            "en": "enjoy an evening meal in a cozy setting",
            "ja": "居心地の良い場所で夕食を楽しむ"
          }
        ],
        "B2": [
          {
            "en": "experience a warmly illuminated nighttime dining environment",
            "ja": "温かく照らされた夜の食事空間を経験する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sharing dinner while night waits beyond the glass",
          "ja": "ガラスの向こうで夜が待つ中で夕食を共有する"
        },
        {
          "en": "an amber island of family warmth in the dark evening",
          "ja": "暗い夜の中の家族の温かさの琥珀色の島"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "night, restaurant, warm, light",
          "text_en": "night, restaurant, warm, light",
          "text_ja": "夜、レストラン、温かい、光"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The family is eating in a restaurant at night.",
          "text_en": "The family is eating in a restaurant at night.",
          "text_ja": "家族は夜にレストランで食事をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "enjoy dinner under warm pendant lights beside dark windows",
          "text_en": "enjoy dinner under warm pendant lights beside dark windows",
          "text_ja": "暗い窓のそばで温かな照明の下夕食を楽しむ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The dark windows and warm lights show that...",
          "text_en": "The dark windows and warm lights show that...",
          "text_ja": "暗い窓と温かな光から……と分かります。"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "Other diners eating and talking in the background",
      "description_ja": "背景の客が食事や会話をしている",
      "involved_elements": [
        "element_016",
        "element_015"
      ],
      "synonyms": [
        "other diners are eating",
        "customers are talking",
        "people are dining",
        "guests are sitting at tables",
        "background diners are chatting"
      ],
      "accepted_words": [
        "other diners are eating",
        "customers are talking",
        "people are dining",
        "guests are sitting at tables",
        "background diners are chatting"
      ],
      "common_typos": [
        "other dinners are eating",
        "costumers are talking",
        "people are dinning",
        "guests are siting",
        "back ground diners",
        "socialising"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "people are eating",
            "ja": "人々が食事している"
          }
        ],
        "A2": [
          {
            "en": "other diners are talking",
            "ja": "ほかの食事客が話している"
          }
        ],
        "B1": [
          {
            "en": "restaurant guests are dining in the background",
            "ja": "背景でレストラン客が食事している"
          }
        ],
        "B2": [
          {
            "en": "a background community of diners maintains the restaurant's public atmosphere",
            "ja": "背景の食事客の集まりがレストランの公共的な雰囲気を保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "other conversations glowing softly behind the family",
          "ja": "家族の後ろで柔らかく光る別の会話"
        },
        {
          "en": "many tables carrying separate evening stories",
          "ja": "別々の夜の物語を運ぶ多くのテーブル"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "diners, guests, background, talk",
          "text_en": "diners, guests, background, talk",
          "text_ja": "食事客、客、背景、話す"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Other diners are eating in the background.",
          "text_en": "Other diners are eating in the background.",
          "text_ja": "背景ではほかの食事客が食事をしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "restaurant guests talking quietly at tables behind the family",
          "text_en": "restaurant guests talking quietly at tables behind the family",
          "text_ja": "家族の後ろのテーブルで静かに話すレストラン客"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "While the family laughs in the foreground, other diners...",
          "text_en": "While the family laughs in the foreground, other diners...",
          "text_ja": "手前で家族が笑っている間、ほかの食事客は……"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "father",
      "relationship": "to the left of",
      "object": "son",
      "example_beginner": "The father is to the left of the boy.",
      "example_intermediate": "The father sits to the left of his son."
    },
    {
      "subject": "son",
      "relationship": "between",
      "object": "father and daughter",
      "example_beginner": "The boy is between two family members.",
      "example_intermediate": "The son sits between his father and sister."
    },
    {
      "subject": "daughter",
      "relationship": "between",
      "object": "son and mother",
      "example_beginner": "The girl is between the boy and the mother.",
      "example_intermediate": "The daughter sits between her brother and mother."
    },
    {
      "subject": "mother",
      "relationship": "to the right of",
      "object": "daughter",
      "example_beginner": "The mother is on the right.",
      "example_intermediate": "The mother sits to the right of her daughter."
    },
    {
      "subject": "family",
      "relationship": "around",
      "object": "wooden table",
      "example_beginner": "The family is around the table.",
      "example_intermediate": "All four family members are seated around the same wooden table."
    },
    {
      "subject": "father's meat dish",
      "relationship": "in front of",
      "object": "father",
      "example_beginner": "The meat dish is in front of the father.",
      "example_intermediate": "A meat dish with vegetables is placed directly in front of the father."
    },
    {
      "subject": "spaghetti plate",
      "relationship": "in front of",
      "object": "son",
      "example_beginner": "The spaghetti is in front of the boy.",
      "example_intermediate": "The son's spaghetti plate sits directly in front of him."
    },
    {
      "subject": "pizza",
      "relationship": "in front of",
      "object": "daughter",
      "example_beginner": "The pizza is in front of the girl.",
      "example_intermediate": "A small pizza is placed in front of the daughter."
    },
    {
      "subject": "mother's salad",
      "relationship": "in front of",
      "object": "mother",
      "example_beginner": "The salad is in front of the mother.",
      "example_intermediate": "The mother's individual salad sits in front of her."
    },
    {
      "subject": "shared salad bowl",
      "relationship": "in the center of",
      "object": "table",
      "example_beginner": "The large salad is in the center.",
      "example_intermediate": "The shared salad bowl occupies the center of the table."
    },
    {
      "subject": "bread basket",
      "relationship": "in front of",
      "object": "shared salad bowl",
      "example_beginner": "The bread is in front of the salad.",
      "example_intermediate": "The bread basket rests in the foreground in front of the large salad bowl."
    },
    {
      "subject": "water glasses",
      "relationship": "around",
      "object": "individual plates",
      "example_beginner": "The glasses are around the plates.",
      "example_intermediate": "Clear water glasses are arranged around the individual plates."
    },
    {
      "subject": "forks",
      "relationship": "in",
      "object": "family members' hands",
      "example_beginner": "The forks are in their hands.",
      "example_intermediate": "Each family member holds a metal fork above or beside a plate."
    },
    {
      "subject": "pendant lights",
      "relationship": "above",
      "object": "restaurant tables",
      "example_beginner": "The lights are above the tables.",
      "example_intermediate": "Warm pendant lights hang above the dining area."
    },
    {
      "subject": "background diners",
      "relationship": "behind",
      "object": "family",
      "example_beginner": "Other diners are behind the family.",
      "example_intermediate": "Several restaurant guests sit at tables behind the family."
    },
    {
      "subject": "night window",
      "relationship": "behind",
      "object": "mother and daughter",
      "example_beginner": "The dark window is behind them.",
      "example_intermediate": "Large nighttime windows appear behind the mother and daughter."
    }
  ],
  "adjective_library": {
    "family": [
      "joyful",
      "close",
      "connected",
      "cheerful",
      "relaxed",
      "friendly",
      "engaged",
      "warm",
      "happy",
      "talkative"
    ],
    "restaurant": [
      "warm",
      "cozy",
      "wooden",
      "well-lit",
      "welcoming",
      "lively",
      "comfortable",
      "evening",
      "intimate",
      "busy"
    ],
    "food": [
      "fresh",
      "colorful",
      "savory",
      "warm",
      "plated",
      "shared",
      "varied",
      "healthy-looking",
      "baked",
      "delicious-looking"
    ],
    "table": [
      "wooden",
      "large",
      "shared",
      "warm-brown",
      "full",
      "organized",
      "central",
      "family-sized"
    ],
    "lighting": [
      "soft",
      "warm",
      "amber",
      "gentle",
      "glowing",
      "inviting",
      "reflective",
      "dim",
      "cozy"
    ],
    "mood": [
      "joyful",
      "intimate",
      "social",
      "relaxed",
      "connected",
      "pleasant",
      "family-oriented",
      "lively",
      "peaceful",
      "welcoming"
    ]
  },
  "preposition_library": [
    {
      "preposition": "at",
      "meaning_ja": "〜で",
      "example": "The family is eating at a restaurant."
    },
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "They are sitting in a warm dining room."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周りに",
      "example": "The family is sitting around a wooden table."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The son is between his father and sister."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The father is to the left of the son."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The mother is to the right of the daughter."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The pizza is in front of the girl."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "Other diners are behind the family."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "Pendant lights are above the tables."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "The wooden table is below the dishes and hands."
    },
    {
      "preposition": "in the center of",
      "meaning_ja": "〜の中央に",
      "example": "The shared salad is in the center of the table."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The water glasses are near the plates."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The daughter is sitting beside her mother."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を持って・〜と一緒に",
      "example": "The father is smiling with a fork in his hand."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を越えて",
      "example": "The children look at each other across the table."
    },
    {
      "preposition": "under",
      "meaning_ja": "〜の下で",
      "example": "The family is eating under warm pendant lights."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "City lights can be seen through the windows."
    },
    {
      "preposition": "outside",
      "meaning_ja": "〜の外に",
      "example": "It is dark outside the restaurant."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "A family of four + is + present participle",
      "label_ja": "集合としての家族を主語にする現在進行形",
      "level": "beginner",
      "purpose_ja": "familyを一つのまとまりとして扱う。",
      "examples": [
        "A family of four is having dinner.",
        "The family is sitting around a table.",
        "The family is enjoying the meal."
      ],
      "hints": [
        "familyを一つの集団として扱う場合、isを使えます。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "Plural subject + are + present participle",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "家族の複数の人を主語にして現在の動作を表す。",
      "examples": [
        "The parents and children are laughing.",
        "They are eating different dishes.",
        "The family members are holding forks."
      ],
      "hints": [
        "parents and childrenやfamily membersにはareを使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "食卓や背景にある物を説明する。",
      "examples": [
        "There is a large salad bowl in the center.",
        "There are several glasses of water.",
        "There are other diners in the background."
      ],
      "hints": [
        "単数はThere is、複数はThere areです。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物、料理、雰囲気の状態を表す。",
      "examples": [
        "The family is cheerful.",
        "The restaurant is warm and cozy.",
        "The salad is fresh and colorful."
      ],
      "hints": [
        "cheerful, warm, cozy, freshなどを使えます。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "家族や料理の位置関係を説明する。",
      "examples": [
        "The son is between his father and sister.",
        "The salad bowl is in the center of the table.",
        "Other diners are behind the family."
      ],
      "hints": [
        "between, in front of, behind, besideなどを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "One person ..., while another ...",
      "label_ja": "人物の動作を対比する構文",
      "level": "intermediate",
      "purpose_ja": "4人の異なる動作や料理を対比する。",
      "examples": [
        "The father looks at his son while the mother smiles at the children.",
        "The son eats spaghetti while the daughter has pizza.",
        "One parent eats meat while the other has salad."
      ],
      "hints": [
        "whileを使うと同時に起きている異なる動作をつなげられます。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "while / as + clause",
      "label_ja": "同時進行を表すwhile・as",
      "level": "intermediate",
      "purpose_ja": "食事と会話が同時に行われる様子を表す。",
      "examples": [
        "They laugh while they eat.",
        "The children smile as they look at each other.",
        "The parents listen while holding their forks."
      ],
      "hints": [
        "whileやasは「〜している間に」という意味です。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "who / which / that relative clause",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や料理に追加情報を加える。",
      "examples": [
        "The boy who is wearing a striped shirt is eating spaghetti.",
        "The pizza, which is in front of the girl, has colorful toppings.",
        "The salad that sits in the center is shared by the family."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "料理や食器が置かれた状態を説明する。",
      "examples": [
        "The dishes are arranged across the table.",
        "The bread is placed in a woven basket.",
        "The restaurant is illuminated by warm lights."
      ],
      "hints": [
        "be動詞 + 過去分詞で「〜されている」を表します。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "look / seem / appear + adjective or infinitive",
      "label_ja": "look・seem・appearによる推量",
      "level": "intermediate",
      "purpose_ja": "画像から分かる印象や推測を述べる。",
      "examples": [
        "The family looks happy.",
        "The restaurant seems comfortable.",
        "The children appear to be sharing a joke."
      ],
      "hints": [
        "断定できない気持ちや状況にはlook, seem, appearを使います。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "because / so that + clause",
      "label_ja": "理由・目的を表す節",
      "level": "intermediate",
      "purpose_ja": "雰囲気や配置の理由を説明する。",
      "examples": [
        "The scene feels warm because the lighting is soft.",
        "The family sits close together so that they can talk easily.",
        "The shared salad is central so that everyone can reach it."
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
      "purpose_ja": "同じ主語の同時動作を簡潔に表す。",
      "examples": [
        "Holding a fork, the father laughs with his son.",
        "Looking across the table, the daughter smiles at her brother.",
        "Sharing food and conversation, the family enjoys the evening."
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
      "purpose_ja": "背景や置かれた状態を文頭で示す。",
      "examples": [
        "Surrounded by warm light, the family shares dinner.",
        "Placed in the center of the table, the salad bowl is easy to reach.",
        "Illuminated by pendant lights, the restaurant feels welcoming."
      ],
      "hints": [
        "Surrounded, Placed, Illuminatedなどから始められます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "方法や結果を説明する。",
      "examples": [
        "By sitting close together, the family can communicate easily.",
        "By sharing side dishes, they create a communal meal.",
        "By making eye contact, they keep everyone involved."
      ],
      "hints": [
        "By + 動詞ingで「〜することで」を表します。"
      ]
    },
    {
      "id": "grammar_015",
      "pattern": "not only A but also B",
      "label_ja": "not only A but also B",
      "level": "advanced",
      "purpose_ja": "食事と家族交流の両方を強調する。",
      "examples": [
        "The scene shows not only dinner but also family connection.",
        "The table contains not only individual dishes but also shared food.",
        "The restaurant is not only warm but also lively."
      ],
      "hints": [
        "AとBに同じ種類の語句を置きます。"
      ]
    },
    {
      "id": "grammar_016",
      "pattern": "although / even though + clause",
      "label_ja": "譲歩を表すalthough・even though",
      "level": "advanced",
      "purpose_ja": "異なる料理でも一緒に食事を共有することを表す。",
      "examples": [
        "Although each person has a different dish, they share the same meal.",
        "Even though the restaurant is busy, the family appears relaxed.",
        "Although it is dark outside, the dining room is bright and warm."
      ],
      "hints": [
        "althoughやeven thoughは「〜だけれども」を表します。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "make + object + adjective",
      "label_ja": "make + 目的語 + 形容詞",
      "level": "advanced",
      "purpose_ja": "照明や笑顔が場面へ与える効果を説明する。",
      "examples": [
        "The pendant lights make the restaurant feel cozy.",
        "Their laughter makes the meal feel lively.",
        "The shared dishes make the dinner more communal."
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
        "template": "There is / are ______.",
        "example": "There is a family of four."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are at ______.",
        "example": "They are at a restaurant."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are having dinner."
      },
      {
        "step": 4,
        "question_ja": "どんな表情ですか？",
        "template": "They are ______.",
        "example": "They are smiling and laughing."
      },
      {
        "step": 5,
        "question_ja": "どんな料理がありますか？",
        "template": "There is / are ______ on the table.",
        "example": "There is pizza, pasta, meat, salad, and bread."
      },
      {
        "step": 6,
        "question_ja": "背景はどうなっていますか？",
        "template": "In the background, ______.",
        "example": "In the background, other diners are eating."
      },
      {
        "step": 7,
        "question_ja": "どんな雰囲気ですか？",
        "template": "The atmosphere is ______.",
        "example": "The atmosphere is warm and joyful."
      }
    ],
    "intermediate": [
      {
        "template": "A family of four is ______ing together at ______.",
        "example": "A family of four is enjoying dinner together at a warm restaurant."
      },
      {
        "template": "The father is ______ing, while the mother is ______ing.",
        "example": "The father is looking at his son, while the mother is smiling at the children."
      },
      {
        "template": "In front of the ______, there is ______.",
        "example": "In front of the daughter, there is a small pizza."
      },
      {
        "template": "At the center of the table, ______.",
        "example": "At the center of the table, a large shared salad bowl is placed."
      },
      {
        "template": "Although each person has ______, they all ______.",
        "example": "Although each person has a different dish, they all share the same dinner."
      },
      {
        "template": "The warm lights make the restaurant feel ______.",
        "example": "The warm lights make the restaurant feel cozy and welcoming."
      },
      {
        "template": "It looks like the family is ______.",
        "example": "It looks like the family is sharing a funny story."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding forks above their plates, the family members laugh together."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by warm light and other diners, the family enjoys a relaxed evening meal."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The boy who is wearing a striped shirt appears to be sharing a joke with his sister."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The salad bowl, which is placed in the center, is shared by everyone."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By sitting close together and making eye contact, the family maintains an inclusive conversation."
      },
      {
        "template": "Although / even though.",
        "example": "Although each person has chosen a different main course, the shared salad and bread unite the meal."
      },
      {
        "template": "Not only A but also B.",
        "example": "The dinner provides not only food but also an opportunity for family connection."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A family of four is in a restaurant.",
      "They are having dinner together.",
      "The father is holding a fork.",
      "The son and daughter are laughing.",
      "The mother is smiling.",
      "There are many dishes on the table.",
      "The boy has spaghetti.",
      "The girl has pizza.",
      "There is a large salad bowl and a bread basket.",
      "The restaurant is warm and bright."
    ],
    "intermediate": [
      "A family of four is enjoying dinner together at a warm restaurant.",
      "The father in a light blue shirt smiles at his son while holding a fork.",
      "The son in the striped shirt is laughing and eating spaghetti.",
      "The daughter in the white blouse has a small pizza in front of her.",
      "The mother is smiling while holding a fork above her salad.",
      "A large bowl of mixed salad is placed in the center of the wooden table.",
      "A basket of bread and several glasses of water are arranged in the foreground.",
      "Other diners are sitting at tables in the background.",
      "Warm pendant lights and dark windows create a cozy nighttime atmosphere."
    ],
    "advanced": [
      "Seated around a warm wooden table, a family of four shares a lively evening meal in a cozy restaurant.",
      "The father in the light blue shirt turns toward his son with a broad smile, while the boy in the striped top laughs openly above a plate of spaghetti.",
      "Beside him, the daughter holds a fork near her personal pizza and responds cheerfully, as her mother leans toward the family with an equally warm expression.",
      "Although each person has selected a different main course, a large mixed salad and a woven basket of bread occupy the center and foreground as shared dishes.",
      "Clear glasses of water and reflective metal forks create repeated visual details across the wooden table.",
      "Behind the family, other diners talk quietly beneath amber pendant lights, while dark windows reveal scattered city lights outside.",
      "The scene presents dinner not only as a meal but also as a social ritual through which family members exchange attention, humor, and emotional support."
    ]
  },
  "full_description_support": {
    "beginner_model": "A family of four is in a restaurant. They are sitting around a wooden table and having dinner together. The father is on the left. He is holding a fork and smiling. The son is wearing a striped shirt and laughing. He has spaghetti. The daughter is wearing a white blouse. She has a small pizza. The mother is on the right. She is smiling and has a salad. There is a large salad bowl in the center of the table. There is also a basket of bread and several glasses of water. Other people are eating in the background. The restaurant is warm, bright, and cozy.",
    "intermediate_model": "A family of four is enjoying dinner together in a warm restaurant at night. The father on the left wears a light blue shirt over a white T-shirt and smiles toward his son while holding a fork. The son, who is wearing a striped long-sleeved shirt, laughs with his mouth open and has a plate of spaghetti in front of him. The daughter sits beside him in a white blouse and holds a fork near a small pizza. On the far right, the mother wears a cream blouse and smiles at the rest of the family while eating salad. A large mixed salad bowl is placed in the center of the wooden table, and a woven basket of sliced bread sits in the foreground. Several glasses of water and pieces of cutlery are arranged around the individual plates. Other diners, wooden furniture, brick columns, framed pictures, and pendant lights fill the background. The dark windows show that it is nighttime, while the warm interior lighting creates a cheerful and comfortable atmosphere.",
    "advanced_model": "In a warmly illuminated restaurant at night, a father, mother, son, and daughter sit close together around a large wooden table and share a lively family dinner. The father, dressed in a light blue shirt over a white T-shirt, turns toward his son with a broad smile while holding a fork above a plate containing a browned meat dish and vegetables. Next to him, the son in a striped long-sleeved shirt laughs openly, his fork paused above a plate of orange-red spaghetti. The daughter, who sits between her brother and mother, holds a fork near a small round pizza topped with cheese, tomato, and green leaves. On the far right, the mother leans slightly toward the family and smiles warmly above an individual bowl of fresh salad. Although each person has chosen a different main course, a large transparent bowl of mixed salad occupies the center of the table, and a woven basket of sliced bread rests in the foreground as another shared dish. Several clear water glasses and reflective metal forks repeat across the table, helping to organize each person's place. In the background, other restaurant guests eat and talk at wooden tables beneath soft amber pendant lights. Brick columns, framed pictures, and dark windows revealing trees and scattered city lights establish a cozy public setting at night. The strong eye contact, open laughter, and close seating arrangement present dinner not only as an act of eating but also as a social ritual through which the family maintains connection, shares humor, and creates a sense of belonging."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A family of four is in a restaurant. They are having dinner together.",
        "ja": "4人家族がレストランにいます。一緒に夕食を食べています。",
        "focus": "familyを主語にしてisを使い、場所と基本動作を表す。"
      },
      {
        "en": "The father, mother, son, and daughter are smiling and holding forks.",
        "ja": "父、母、息子、娘が笑顔でフォークを持っています。",
        "focus": "複数主語にareを使う。"
      },
      {
        "en": "There is pizza, spaghetti, salad, meat, and bread on the table.",
        "ja": "テーブルにはピザ、スパゲッティ、サラダ、肉料理、パンがあります。",
        "focus": "There isで食卓の料理を列挙する。"
      }
    ],
    "A2": [
      {
        "en": "A family of four is sitting around a wooden table and enjoying dinner in a warm restaurant.",
        "ja": "4人家族が木製テーブルを囲み、温かいレストランで夕食を楽しんでいます。",
        "focus": "andで2つの動作をつなぎ、aroundとinで位置を表す。"
      },
      {
        "en": "The son is laughing while the daughter smiles at him with a fork in her hand.",
        "ja": "息子が笑い、娘はフォークを手に持って彼へ笑顔を向けています。",
        "focus": "whileで同時動作をつなぐ。"
      },
      {
        "en": "A large salad bowl is in the center of the table, and a bread basket is in the foreground.",
        "ja": "大きなサラダボウルがテーブル中央にあり、パンかごが手前にあります。",
        "focus": "位置を表す前置詞句を使う。"
      }
    ],
    "B1": [
      {
        "en": "Although each family member has chosen a different dish, they are sharing the same dinner and enjoying a lively conversation.",
        "ja": "家族それぞれが異なる料理を選んでいますが、同じ夕食を共有し活気のある会話を楽しんでいます。",
        "focus": "Althoughで対比し、現在進行形を使う。"
      },
      {
        "en": "The children, who are seated between their parents, appear to be sharing a joke while holding their forks.",
        "ja": "両親の間に座る子どもたちは、フォークを持ちながら冗談を共有しているようです。",
        "focus": "関係代名詞who、appear to、whileを組み合わせる。"
      },
      {
        "en": "The shared salad and bread create a communal feeling that connects the family's separate plates.",
        "ja": "共有のサラダとパンは、それぞれの皿を結びつける共同的な感覚を作っています。",
        "focus": "createと関係代名詞thatを使う。"
      }
    ],
    "B2": [
      {
        "en": "Seated close together beneath warm pendant lights, the family members exchange laughter and eye contact while enjoying four different main courses.",
        "ja": "温かなペンダントライトの下で近くに座り、家族は4つの異なる主菜を楽しみながら笑いと視線を交わしています。",
        "focus": "過去分詞で始まる分詞構文とwhileを使う。"
      },
      {
        "en": "The large salad bowl, which occupies the center of the table, symbolically balances individual choice with the communal nature of the meal.",
        "ja": "テーブル中央を占める大きなサラダボウルは、個人の選択と食事の共同性を象徴的に調和させています。",
        "focus": "非制限用法whichと抽象語彙symbolically・communalを使う。"
      },
      {
        "en": "Set against dark windows and a softly illuminated restaurant interior, the scene presents dinner not only as nourishment but also as a ritual of family connection.",
        "ja": "暗い窓と柔らかく照らされたレストランを背景に、この場面は夕食を栄養補給だけでなく家族のつながりの儀式として示しています。",
        "focus": "過去分詞構文とnot only A but also Bを使う。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene015Data = scene015Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene015Data;
}
