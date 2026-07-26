"use strict";

const scene005Data = {
  "id": "scene_005",
  "image_id": "005.webp",
  "overall_description_ja": "明るい朝の日差しが差し込む家庭的なキッチンで、紺色のパーカーを着た男子生徒がガスコンロの前に立ち、フライパンで目玉焼きを焼いている。彼は片手でフライパンの取っ手を持ち、もう一方の手でフライ返しを使っている。調理台にはトースト、オレンジジュース、マグカップ、サラダ、オリーブオイル、塩が並び、背景には冷蔵庫、トースター、ケトル、調理器具、窓、ダイニングテーブルが見える。",
  "overall_description_en": "A teenage boy in a navy hoodie is standing at a gas stove in a bright home kitchen and frying an egg in a pan. He holds the pan handle with one hand and uses a spatula with the other. Toast, orange juice, a mug, salad, olive oil, and salt are arranged on the counter. A refrigerator, toaster oven, kettle, utensils, sunny window, and dining table can be seen in the background.",
  "overall_mood": [
    "bright",
    "warm",
    "fresh",
    "cheerful",
    "peaceful",
    "productive",
    "sunlit",
    "healthy",
    "cozy",
    "inviting",
    "organized",
    "comfortable",
    "morning atmosphere"
  ],
  "mission_guides": {
    "gist": "男子生徒（boy / student）がキッチンで何をしているか（cooking / frying an egg）を書こう",
    "setting": "場所（kitchen）、コンロ（stove）、フライパン（frying pan）に注目しよう",
    "details": "トースト、ジュース、サラダ、マグカップ、調理器具などを加えよう",
    "complete": "朝の日差し、湯気、健康的な朝食、明るい雰囲気まで描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a teenage boy in a navy hoodie",
        "ja": "紺色のパーカーを着た10代の男子"
      },
      {
        "en": "frying an egg in a pan",
        "ja": "フライパンで卵を焼いている"
      },
      {
        "en": "holding a pan and a spatula",
        "ja": "フライパンとフライ返しを持っている"
      },
      {
        "en": "preparing breakfast in the morning",
        "ja": "朝に朝食を準備している"
      }
    ],
    "setting": [
      {
        "en": "inside a bright home kitchen",
        "ja": "明るい家庭のキッチンの中で"
      },
      {
        "en": "at a gas stove beside the counter",
        "ja": "調理台のそばのガスコンロで"
      },
      {
        "en": "toast, juice, salad, and a mug on the counter",
        "ja": "調理台にあるトースト、ジュース、サラダ、マグカップ"
      },
      {
        "en": "a refrigerator and appliances in the background",
        "ja": "背景にある冷蔵庫とキッチン家電"
      }
    ],
    "mood": [
      {
        "en": "warm morning sunlight",
        "ja": "暖かな朝の日差し"
      },
      {
        "en": "a fresh and cheerful atmosphere",
        "ja": "さわやかで明るい雰囲気"
      },
      {
        "en": "a cozy and inviting kitchen",
        "ja": "居心地のよいキッチン"
      },
      {
        "en": "a healthy start to the day",
        "ja": "健康的な一日の始まり"
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
        "teenage boy",
        "young man",
        "teenager",
        "male student",
        "cook",
        "he"
      ],
      "hint_msg": "まずは「男子（boy）」や「生徒（student）」など、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は、その男子が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "cooking",
        "frying",
        "preparing",
        "holding",
        "using",
        "standing",
        "making",
        "heating"
      ],
      "hint_msg": "「料理している（is cooking）」や「卵を焼いている（is frying an egg）」と書きましょう。",
      "success_msg": "Great! 次に、何を料理しているか、どこで料理しているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "egg",
        "breakfast",
        "frying pan",
        "pan",
        "kitchen",
        "stove",
        "gas stove",
        "spatula",
        "counter"
      ],
      "hint_msg": "「卵（egg）」「朝食（breakfast）」「キッチン（kitchen）」などを加えましょう。",
      "success_msg": "Excellent! 食べ物、光、湯気、気分も加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "cooking breakfast at home",
    "frying an egg",
    "preparing a healthy meal",
    "a student helping in the kitchen",
    "starting the day with breakfast",
    "using kitchen tools safely"
  ],
  "scene_structure": {
    "foreground": [
      "gas stove",
      "frying pan",
      "fried egg",
      "spatula",
      "toast",
      "olive oil",
      "salt shaker",
      "mug",
      "orange juice",
      "salad bowl"
    ],
    "midground": [
      "teenage boy",
      "navy hoodie",
      "kitchen counter",
      "steam"
    ],
    "background": [
      "refrigerator",
      "toaster oven",
      "electric kettle",
      "hanging utensils",
      "window",
      "white curtains",
      "dining table",
      "plants",
      "wall posters"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "boy",
      "label_ja": "男子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A teenage boy with short black hair is standing at the stove. He is wearing a navy hoodie and concentrating on cooking.",
      "bounding_box_conceptual": [
        2,
        28,
        82,
        49
      ],
      "color": [
        "navy blue",
        "black"
      ],
      "attributes": [
        "young",
        "focused",
        "calm",
        "careful"
      ],
      "action": [
        "standing",
        "cooking",
        "frying an egg",
        "holding a pan"
      ],
      "synonyms_and_related_words": [
        "boy",
        "teenage boy",
        "student",
        "male student",
        "teenager",
        "young man",
        "young cook",
        "he"
      ],
      "accepted_words": [
        "boy",
        "teenage boy",
        "student",
        "male student",
        "teenager",
        "young man",
        "young cook",
        "he"
      ],
      "common_typos": [
        "boi",
        "studant",
        "teeneger",
        "male studnet"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "男子"
          }
        ],
        "A2": [
          {
            "en": "teenager",
            "ja": "10代の若者"
          }
        ],
        "B1": [
          {
            "en": "young cook",
            "ja": "若い料理人"
          }
        ],
        "B2": [
          {
            "en": "independent home cook",
            "ja": "自立して家庭料理をする人"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a young cook beginning the day with care",
          "ja": "丁寧に一日を始める若い料理人"
        },
        {
          "en": "a student turning ingredients into breakfast",
          "ja": "材料を朝食へ変える生徒"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, student, cook, navy hoodie",
          "text_en": "boy, student, cook, navy hoodie",
          "text_ja": "男子、生徒、料理する人、紺色のパーカー"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A boy is cooking in the kitchen.",
          "text_en": "A boy is cooking in the kitchen.",
          "text_ja": "男子がキッチンで料理しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a teenage boy wearing a navy hoodie",
          "text_en": "a teenage boy wearing a navy hoodie",
          "text_ja": "紺色のパーカーを着た10代の男子"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy, dressed in a navy hoodie, is carefully preparing breakfast.",
          "text_en": "The boy, dressed in a navy hoodie, is carefully preparing breakfast.",
          "text_ja": "紺色のパーカーを着た男子は、丁寧に朝食を準備しています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "frying pan",
      "label_ja": "フライパン",
      "category": "object",
      "importance": "primary",
      "description": "A black frying pan is positioned over a blue gas flame while the boy holds its handle.",
      "bounding_box_conceptual": [
        67,
        26,
        19,
        35
      ],
      "color": [
        "black",
        "silver"
      ],
      "attributes": [
        "round",
        "hot",
        "metal",
        "large"
      ],
      "action": [
        "heating",
        "holding an egg",
        "being held"
      ],
      "synonyms_and_related_words": [
        "frying pan",
        "pan",
        "skillet",
        "cooking pan",
        "nonstick pan"
      ],
      "accepted_words": [
        "frying pan",
        "pan",
        "skillet",
        "cooking pan",
        "nonstick pan"
      ],
      "common_typos": [
        "fry pan",
        "frying pann",
        "skilet",
        "non stick pan"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pan",
            "ja": "フライパン"
          }
        ],
        "A2": [
          {
            "en": "frying pan",
            "ja": "フライパン"
          }
        ],
        "B1": [
          {
            "en": "skillet",
            "ja": "厚手のフライパン"
          }
        ],
        "B2": [
          {
            "en": "heated cooking vessel",
            "ja": "加熱された調理器具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a black pan holding the center of breakfast",
          "ja": "朝食の中心を受け止める黒いフライパン"
        },
        {
          "en": "a small cooking stage above the blue flame",
          "ja": "青い炎の上にある小さな料理の舞台"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pan, frying pan, hot, black",
          "text_en": "pan, frying pan, hot, black",
          "text_ja": "フライパン、熱い、黒い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The egg is in the frying pan.",
          "text_en": "The egg is in the frying pan.",
          "text_ja": "卵はフライパンの中にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black frying pan over a blue flame",
          "text_en": "a black frying pan over a blue flame",
          "text_ja": "青い炎の上にある黒いフライパン"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The pan, held firmly by the boy, is positioned directly above the flame.",
          "text_en": "The pan, held firmly by the boy, is positioned directly above the flame.",
          "text_ja": "男子にしっかり持たれたフライパンは炎の真上にあります。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "fried egg",
      "label_ja": "目玉焼き",
      "category": "food",
      "importance": "primary",
      "description": "A sunny-side-up egg with a bright yellow yolk is cooking in the center of the pan.",
      "bounding_box_conceptual": [
        73,
        35,
        7,
        14
      ],
      "color": [
        "white",
        "yellow"
      ],
      "attributes": [
        "fresh",
        "hot",
        "round",
        "sunny-side-up"
      ],
      "action": [
        "frying",
        "cooking",
        "sizzling",
        "giving off steam"
      ],
      "synonyms_and_related_words": [
        "fried egg",
        "egg",
        "sunny-side-up egg",
        "cooked egg",
        "breakfast egg"
      ],
      "accepted_words": [
        "fried egg",
        "egg",
        "sunny-side-up egg",
        "cooked egg",
        "breakfast egg"
      ],
      "common_typos": [
        "fryed egg",
        "fried eg",
        "sunny side up",
        "coked egg"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "egg",
            "ja": "卵"
          }
        ],
        "A2": [
          {
            "en": "fried egg",
            "ja": "目玉焼き"
          }
        ],
        "B1": [
          {
            "en": "sunny-side-up egg",
            "ja": "片面焼きの目玉焼き"
          }
        ],
        "B2": [
          {
            "en": "gently sizzling egg",
            "ja": "静かに焼ける卵"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a golden yolk glowing like a small sun",
          "ja": "小さな太陽のように輝く金色の黄身"
        },
        {
          "en": "breakfast taking shape in the pan",
          "ja": "フライパンの中で形になる朝食"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "egg, fried egg, yolk, breakfast",
          "text_en": "egg, fried egg, yolk, breakfast",
          "text_ja": "卵、目玉焼き、黄身、朝食"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The egg is cooking in the pan.",
          "text_en": "The egg is cooking in the pan.",
          "text_ja": "卵がフライパンの中で焼けています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a sunny-side-up egg with a golden yolk",
          "text_en": "a sunny-side-up egg with a golden yolk",
          "text_ja": "金色の黄身がある目玉焼き"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The egg, which is gently sizzling, appears nearly ready to serve.",
          "text_en": "The egg, which is gently sizzling, appears nearly ready to serve.",
          "text_ja": "静かに焼けている卵は、もうすぐ盛り付けられそうです。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "spatula",
      "label_ja": "フライ返し",
      "category": "object",
      "importance": "primary",
      "description": "The boy is holding a black slotted spatula above the frying egg.",
      "bounding_box_conceptual": [
        51,
        27,
        28,
        10
      ],
      "color": [
        "black"
      ],
      "attributes": [
        "slotted",
        "long-handled",
        "heat-resistant"
      ],
      "action": [
        "being held",
        "checking the egg",
        "turning food"
      ],
      "synonyms_and_related_words": [
        "spatula",
        "turner",
        "slotted spatula",
        "cooking utensil",
        "flipper"
      ],
      "accepted_words": [
        "spatula",
        "turner",
        "slotted spatula",
        "cooking utensil",
        "flipper"
      ],
      "common_typos": [
        "spachula",
        "spatulla",
        "sloted spatula",
        "fliper"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "spatula",
            "ja": "フライ返し"
          }
        ],
        "A2": [
          {
            "en": "cooking tool",
            "ja": "調理道具"
          }
        ],
        "B1": [
          {
            "en": "slotted spatula",
            "ja": "穴の開いたフライ返し"
          }
        ],
        "B2": [
          {
            "en": "heat-resistant utensil",
            "ja": "耐熱性の調理器具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a simple tool guiding the breakfast",
          "ja": "朝食を仕上げる調理道具"
        },
        {
          "en": "a black utensil controlling the egg",
          "ja": "卵を上手に扱う黒い道具"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "spatula, tool, hold, black",
          "text_en": "spatula, tool, hold, black",
          "text_ja": "フライ返し、道具、持つ、黒い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is holding a spatula.",
          "text_en": "He is holding a spatula.",
          "text_ja": "彼はフライ返しを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "use a spatula to check the egg",
          "text_en": "use a spatula to check the egg",
          "text_ja": "フライ返しで卵を確認する"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Using the spatula carefully, he checks whether the egg is cooked.",
          "text_en": "Using the spatula carefully, he checks whether the egg is cooked.",
          "text_ja": "フライ返しを丁寧に使い、卵が焼けたか確認しています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "gas stove",
      "label_ja": "ガスコンロ",
      "category": "appliance",
      "importance": "primary",
      "description": "A black gas stove with several burners is built into the counter, and one burner has a blue flame.",
      "bounding_box_conceptual": [
        70,
        7,
        27,
        55
      ],
      "color": [
        "black",
        "silver",
        "blue"
      ],
      "attributes": [
        "built-in",
        "metallic",
        "lit",
        "hot"
      ],
      "action": [
        "burning",
        "heating the pan"
      ],
      "synonyms_and_related_words": [
        "stove",
        "gas stove",
        "cooktop",
        "gas burner",
        "hob",
        "range"
      ],
      "accepted_words": [
        "stove",
        "gas stove",
        "cooktop",
        "gas burner",
        "hob",
        "range"
      ],
      "common_typos": [
        "stov",
        "gas stov",
        "cook top",
        "burnar"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "stove",
            "ja": "コンロ"
          }
        ],
        "A2": [
          {
            "en": "gas stove",
            "ja": "ガスコンロ"
          }
        ],
        "B1": [
          {
            "en": "cooktop",
            "ja": "調理用コンロ台"
          }
        ],
        "B2": [
          {
            "en": "controlled blue flame",
            "ja": "調整された青い炎"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a blue flame powering the morning meal",
          "ja": "朝食を作る力となる青い炎"
        },
        {
          "en": "the warm center of the kitchen",
          "ja": "キッチンの温かな中心"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "stove, gas, flame, hot",
          "text_en": "stove, gas, flame, hot",
          "text_ja": "コンロ、ガス、炎、熱い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The pan is on the stove.",
          "text_en": "The pan is on the stove.",
          "text_ja": "フライパンはコンロの上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a gas stove with a steady blue flame",
          "text_en": "a gas stove with a steady blue flame",
          "text_ja": "安定した青い炎のガスコンロ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The burner produces a steady flame that heats the pan evenly.",
          "text_en": "The burner produces a steady flame that heats the pan evenly.",
          "text_ja": "バーナーは安定した炎でフライパンを均等に熱しています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "toast",
      "label_ja": "トースト",
      "category": "food",
      "importance": "secondary",
      "description": "Two slices of golden-brown toast are stacked on a white plate.",
      "bounding_box_conceptual": [
        86,
        4,
        12,
        24
      ],
      "color": [
        "golden brown",
        "white"
      ],
      "attributes": [
        "toasted",
        "crispy",
        "stacked",
        "warm"
      ],
      "action": [
        "resting on a plate",
        "ready to eat"
      ],
      "synonyms_and_related_words": [
        "toast",
        "bread",
        "toasted bread",
        "slices of toast",
        "breakfast bread"
      ],
      "accepted_words": [
        "toast",
        "bread",
        "toasted bread",
        "slices of toast",
        "breakfast bread"
      ],
      "common_typos": [
        "tost",
        "toaste",
        "toast bread",
        "breakfest bread"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "toast",
            "ja": "トースト"
          }
        ],
        "A2": [
          {
            "en": "two slices of toast",
            "ja": "トースト2枚"
          }
        ],
        "B1": [
          {
            "en": "golden-brown toast",
            "ja": "きつね色のトースト"
          }
        ],
        "B2": [
          {
            "en": "freshly toasted slices",
            "ja": "焼きたてのトースト"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden slices waiting beside the stove",
          "ja": "コンロのそばで待つ金色のパン"
        },
        {
          "en": "a crisp beginning to breakfast",
          "ja": "朝食のカリッとした始まり"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "toast, bread, plate, two slices",
          "text_en": "toast, bread, plate, two slices",
          "text_ja": "トースト、パン、皿、2枚"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is toast on the plate.",
          "text_en": "There is toast on the plate.",
          "text_ja": "皿の上にトーストがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "two slices of golden-brown toast",
          "text_en": "two slices of golden-brown toast",
          "text_ja": "きつね色のトースト2枚"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The prepared toast suggests that breakfast is almost complete.",
          "text_en": "The prepared toast suggests that breakfast is almost complete.",
          "text_ja": "用意されたトーストから、朝食がほぼ完成していると分かります。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "orange juice",
      "label_ja": "オレンジジュース",
      "category": "food",
      "importance": "secondary",
      "description": "A clear glass filled with bright orange juice is placed near the salad bowl.",
      "bounding_box_conceptual": [
        82,
        70,
        16,
        8
      ],
      "color": [
        "orange",
        "transparent"
      ],
      "attributes": [
        "bright",
        "fresh",
        "full"
      ],
      "action": [
        "standing on the counter",
        "ready to drink"
      ],
      "synonyms_and_related_words": [
        "orange juice",
        "juice",
        "fruit juice",
        "glass of juice",
        "fresh juice"
      ],
      "accepted_words": [
        "orange juice",
        "juice",
        "fruit juice",
        "glass of juice",
        "fresh juice"
      ],
      "common_typos": [
        "orenge juice",
        "orange juse",
        "juce",
        "fresh jucie"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "juice",
            "ja": "ジュース"
          }
        ],
        "A2": [
          {
            "en": "orange juice",
            "ja": "オレンジジュース"
          }
        ],
        "B1": [
          {
            "en": "refreshing drink",
            "ja": "さわやかな飲み物"
          }
        ],
        "B2": [
          {
            "en": "vivid citrus drink",
            "ja": "鮮やかな柑橘系の飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a glass of morning sunshine",
          "ja": "朝の太陽のような一杯"
        },
        {
          "en": "a colorful drink completing breakfast",
          "ja": "朝食を完成させる色鮮やかな飲み物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "orange juice, glass, drink, orange",
          "text_en": "orange juice, glass, drink, orange",
          "text_ja": "オレンジジュース、グラス、飲み物、オレンジ色"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a glass of orange juice.",
          "text_en": "There is a glass of orange juice.",
          "text_ja": "オレンジジュースの入ったグラスがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clear glass filled with orange juice",
          "text_en": "a clear glass filled with orange juice",
          "text_ja": "オレンジジュースで満たされた透明なグラス"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The juice adds a fresh, colorful element to the breakfast.",
          "text_en": "The juice adds a fresh, colorful element to the breakfast.",
          "text_ja": "ジュースが朝食に新鮮で色鮮やかな要素を加えています。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "salad bowl",
      "label_ja": "サラダボウル",
      "category": "food",
      "importance": "secondary",
      "description": "A large white bowl contains lettuce, tomatoes, and other fresh vegetables.",
      "bounding_box_conceptual": [
        81,
        78,
        18,
        22
      ],
      "color": [
        "green",
        "red",
        "white"
      ],
      "attributes": [
        "fresh",
        "healthy",
        "colorful",
        "large"
      ],
      "action": [
        "sitting on the counter",
        "holding vegetables"
      ],
      "synonyms_and_related_words": [
        "salad",
        "salad bowl",
        "vegetable salad",
        "green salad",
        "fresh vegetables"
      ],
      "accepted_words": [
        "salad",
        "salad bowl",
        "vegetable salad",
        "green salad",
        "fresh vegetables"
      ],
      "common_typos": [
        "salat",
        "salad bawl",
        "vegetabel salad",
        "fresh vegitables"
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
            "en": "salad bowl",
            "ja": "サラダボウル"
          }
        ],
        "B1": [
          {
            "en": "fresh vegetables",
            "ja": "新鮮な野菜"
          }
        ],
        "B2": [
          {
            "en": "nutritious addition",
            "ja": "栄養を加える一品"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bowl filled with the colors of a garden",
          "ja": "庭の色で満たされたボウル"
        },
        {
          "en": "a healthy rainbow beside the stove",
          "ja": "コンロのそばにある健康的な虹"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "salad, vegetables, bowl, green",
          "text_en": "salad, vegetables, bowl, green",
          "text_ja": "サラダ、野菜、ボウル、緑"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a bowl of salad on the counter.",
          "text_en": "There is a bowl of salad on the counter.",
          "text_ja": "調理台にサラダのボウルがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large bowl filled with fresh vegetables",
          "text_en": "a large bowl filled with fresh vegetables",
          "text_ja": "新鮮な野菜で満たされた大きなボウル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The colorful salad makes the meal appear healthy and balanced.",
          "text_en": "The colorful salad makes the meal appear healthy and balanced.",
          "text_ja": "色鮮やかなサラダによって食事は健康的でバランスよく見えます。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "mug",
      "label_ja": "マグカップ",
      "category": "object",
      "importance": "secondary",
      "description": "A plain white mug containing a warm drink is placed beside the orange juice.",
      "bounding_box_conceptual": [
        78,
        64,
        17,
        8
      ],
      "color": [
        "white",
        "brown"
      ],
      "attributes": [
        "ceramic",
        "warm-looking",
        "round"
      ],
      "action": [
        "sitting on the counter",
        "holding a drink"
      ],
      "synonyms_and_related_words": [
        "mug",
        "cup",
        "ceramic mug",
        "hot drink",
        "tea cup",
        "coffee cup"
      ],
      "accepted_words": [
        "mug",
        "cup",
        "ceramic mug",
        "hot drink",
        "tea cup",
        "coffee cup"
      ],
      "common_typos": [
        "mugg",
        "ceremic mug",
        "hot drnik",
        "cofee cup"
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
            "en": "comforting morning drink",
            "ja": "朝に安らぎを与える飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm cup waiting beside breakfast",
          "ja": "朝食のそばで待つ温かなカップ"
        },
        {
          "en": "a simple source of comfort",
          "ja": "シンプルな安らぎ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mug, cup, drink, white",
          "text_en": "mug, cup, drink, white",
          "text_ja": "マグカップ、カップ、飲み物、白い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A white mug is on the counter.",
          "text_en": "A white mug is on the counter.",
          "text_ja": "白いマグカップが調理台にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a white mug containing a warm drink",
          "text_en": "a white mug containing a warm drink",
          "text_ja": "温かい飲み物が入った白いマグカップ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The mug adds an everyday feeling of comfort to the scene.",
          "text_en": "The mug adds an everyday feeling of comfort to the scene.",
          "text_ja": "マグカップが日常的な居心地のよさを加えています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "olive oil and salt",
      "label_ja": "オリーブオイルと塩",
      "category": "object",
      "importance": "secondary",
      "description": "A green bottle of olive oil and a small white salt shaker stand beside the stove.",
      "bounding_box_conceptual": [
        67,
        2,
        24,
        12
      ],
      "color": [
        "green",
        "white",
        "gold"
      ],
      "attributes": [
        "small",
        "practical",
        "ready for use"
      ],
      "action": [
        "standing on the counter",
        "seasoning food"
      ],
      "synonyms_and_related_words": [
        "olive oil",
        "oil bottle",
        "cooking oil",
        "salt shaker",
        "salt",
        "seasoning"
      ],
      "accepted_words": [
        "olive oil",
        "oil bottle",
        "cooking oil",
        "salt shaker",
        "salt",
        "seasoning"
      ],
      "common_typos": [
        "oliv oil",
        "oil botle",
        "salt shakar",
        "seasoning contaner"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "oil and salt",
            "ja": "油と塩"
          }
        ],
        "A2": [
          {
            "en": "olive oil",
            "ja": "オリーブオイル"
          }
        ],
        "B1": [
          {
            "en": "seasoning",
            "ja": "調味料"
          }
        ],
        "B2": [
          {
            "en": "essential cooking ingredients",
            "ja": "基本的な調理材料"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two small helpers beside the flame",
          "ja": "炎のそばにある2つの小さな助っ人"
        },
        {
          "en": "ingredients adding flavor to breakfast",
          "ja": "朝食に味を加える材料"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "oil, salt, bottle, seasoning",
          "text_en": "oil, salt, bottle, seasoning",
          "text_ja": "油、塩、瓶、調味料"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Oil and salt are beside the stove.",
          "text_en": "Oil and salt are beside the stove.",
          "text_ja": "油と塩がコンロのそばにあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "olive oil and a small salt shaker",
          "text_en": "olive oil and a small salt shaker",
          "text_ja": "オリーブオイルと小さな塩入れ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The oil and salt are positioned within easy reach for cooking.",
          "text_en": "The oil and salt are positioned within easy reach for cooking.",
          "text_ja": "油と塩は料理中に手が届きやすい位置に置かれています。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "refrigerator",
      "label_ja": "冷蔵庫",
      "category": "appliance",
      "importance": "secondary",
      "description": "A large silver refrigerator stands behind the boy with two small notes attached to its door.",
      "bounding_box_conceptual": [
        11,
        23,
        60,
        28
      ],
      "color": [
        "silver",
        "gray"
      ],
      "attributes": [
        "large",
        "metallic",
        "tall",
        "modern"
      ],
      "action": [
        "storing food",
        "displaying notes"
      ],
      "synonyms_and_related_words": [
        "refrigerator",
        "fridge",
        "kitchen appliance",
        "food refrigerator"
      ],
      "accepted_words": [
        "refrigerator",
        "fridge",
        "kitchen appliance",
        "food refrigerator"
      ],
      "common_typos": [
        "refridgerator",
        "refrigirator",
        "frige",
        "kitchen applience"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "fridge",
            "ja": "冷蔵庫"
          }
        ],
        "A2": [
          {
            "en": "refrigerator",
            "ja": "冷蔵庫"
          }
        ],
        "B1": [
          {
            "en": "food storage appliance",
            "ja": "食品保存用家電"
          }
        ],
        "B2": [
          {
            "en": "essential household appliance",
            "ja": "家庭に欠かせない家電"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a tall silver keeper of ingredients",
          "ja": "材料を守る背の高い銀色の収納"
        },
        {
          "en": "the quiet storage center of the kitchen",
          "ja": "キッチンの静かな保存の中心"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "fridge, refrigerator, silver, large",
          "text_en": "fridge, refrigerator, silver, large",
          "text_ja": "冷蔵庫、銀色、大きい"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a refrigerator behind the boy.",
          "text_en": "There is a refrigerator behind the boy.",
          "text_ja": "男子の後ろに冷蔵庫があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large refrigerator with notes on the door",
          "text_en": "a large refrigerator with notes on the door",
          "text_ja": "扉にメモが付いた大きな冷蔵庫"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The refrigerator helps establish the setting as a family kitchen.",
          "text_en": "The refrigerator helps establish the setting as a family kitchen.",
          "text_ja": "冷蔵庫によって家庭のキッチンであることが分かります。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "toaster oven and kettle",
      "label_ja": "トースターとケトル",
      "category": "appliance",
      "importance": "secondary",
      "description": "A silver toaster oven and a black electric kettle sit on the counter behind the stove.",
      "bounding_box_conceptual": [
        40,
        7,
        24,
        30
      ],
      "color": [
        "silver",
        "black"
      ],
      "attributes": [
        "compact",
        "electric",
        "practical"
      ],
      "action": [
        "heating food",
        "heating water"
      ],
      "synonyms_and_related_words": [
        "toaster oven",
        "toaster",
        "electric kettle",
        "kettle",
        "small appliances"
      ],
      "accepted_words": [
        "toaster oven",
        "toaster",
        "electric kettle",
        "kettle",
        "small appliances"
      ],
      "common_typos": [
        "toaster owen",
        "toester",
        "electric ketle",
        "kettel"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "toaster and kettle",
            "ja": "トースターとケトル"
          }
        ],
        "A2": [
          {
            "en": "electric kettle",
            "ja": "電気ケトル"
          }
        ],
        "B1": [
          {
            "en": "countertop appliances",
            "ja": "調理台に置く家電"
          }
        ],
        "B2": [
          {
            "en": "breakfast preparation equipment",
            "ja": "朝食準備を支える機器"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two quiet machines supporting the morning routine",
          "ja": "朝の習慣を支える2つの静かな機械"
        },
        {
          "en": "compact helpers waiting on the counter",
          "ja": "調理台で待つ小さな助っ人"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "toaster, kettle, counter, appliance",
          "text_en": "toaster, kettle, counter, appliance",
          "text_ja": "トースター、ケトル、調理台、家電"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A toaster and a kettle are on the counter.",
          "text_en": "A toaster and a kettle are on the counter.",
          "text_ja": "調理台にトースターとケトルがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a toaster oven beside an electric kettle",
          "text_en": "a toaster oven beside an electric kettle",
          "text_ja": "電気ケトルのそばにあるトースター"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The appliances suggest that several parts of breakfast are being prepared.",
          "text_en": "The appliances suggest that several parts of breakfast are being prepared.",
          "text_ja": "家電から朝食の複数の品が準備されていると分かります。"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "window and curtains",
      "label_ja": "窓とカーテン",
      "category": "setting",
      "importance": "primary",
      "description": "A large window with white curtains lets warm morning sunlight enter the kitchen and shows green trees outside.",
      "bounding_box_conceptual": [
        2,
        56,
        52,
        27
      ],
      "color": [
        "white",
        "green",
        "golden"
      ],
      "attributes": [
        "large",
        "bright",
        "sunny",
        "clear"
      ],
      "action": [
        "letting in sunlight",
        "showing greenery",
        "brightening the room"
      ],
      "synonyms_and_related_words": [
        "window",
        "large window",
        "sunny window",
        "white curtains",
        "outside view",
        "morning light"
      ],
      "accepted_words": [
        "window",
        "large window",
        "sunny window",
        "white curtains",
        "outside view",
        "morning light"
      ],
      "common_typos": [
        "windo",
        "winow",
        "white curtians",
        "outside veiw",
        "morning ligth"
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
            "en": "morning light",
            "ja": "朝の光"
          }
        ],
        "B1": [
          {
            "en": "sunny window",
            "ja": "日差しの差し込む窓"
          }
        ],
        "B2": [
          {
            "en": "source of natural illumination",
            "ja": "自然光の源"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a window pouring morning light into the kitchen",
          "ja": "キッチンへ朝の光を注ぐ窓"
        },
        {
          "en": "a bright connection to the green outdoors",
          "ja": "緑豊かな外とつながる明るい窓"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, curtains, sunlight, trees",
          "text_en": "window, curtains, sunlight, trees",
          "text_ja": "窓、カーテン、日差し、木々"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "preposition",
          "type_ja": "前置詞",
          "text": "through the window / beside the window",
          "text_en": "through the window / beside the window",
          "text_ja": "窓を通って／窓のそばに"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "warm sunlight entering through the window",
          "text_en": "warm sunlight entering through the window",
          "text_ja": "窓から入る暖かな日差し"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Natural light streams through the window and illuminates the breakfast.",
          "text_en": "Natural light streams through the window and illuminates the breakfast.",
          "text_ja": "自然光が窓から差し込み朝食を照らしています。"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "dining area and plants",
      "label_ja": "ダイニングスペースと植物",
      "category": "setting",
      "importance": "secondary",
      "description": "A wooden dining table and chairs stand near a vase of flowers, while several green plants decorate the kitchen.",
      "bounding_box_conceptual": [
        54,
        70,
        35,
        30
      ],
      "color": [
        "brown",
        "green",
        "white"
      ],
      "attributes": [
        "wooden",
        "sunlit",
        "tidy",
        "natural"
      ],
      "action": [
        "waiting for the meal",
        "decorating the room"
      ],
      "synonyms_and_related_words": [
        "dining table",
        "chairs",
        "dining area",
        "plants",
        "flowers",
        "greenery"
      ],
      "accepted_words": [
        "dining table",
        "chairs",
        "dining area",
        "plants",
        "flowers",
        "greenery"
      ],
      "common_typos": [
        "dinning table",
        "chears",
        "dining are",
        "palnts",
        "flwers"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "table and plants",
            "ja": "テーブルと植物"
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
            "en": "family dining space",
            "ja": "家族の食事場所"
          }
        ],
        "B2": [
          {
            "en": "sunlit communal area",
            "ja": "日差しの当たる共有空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a table waiting for the morning meal",
          "ja": "朝食を待つテーブル"
        },
        {
          "en": "green leaves bringing nature into the kitchen",
          "ja": "キッチンへ自然を運ぶ緑の葉"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "table, chairs, plants, flowers",
          "text_en": "table, chairs, plants, flowers",
          "text_ja": "テーブル、椅子、植物、花"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a dining table behind the boy.",
          "text_en": "There is a dining table behind the boy.",
          "text_ja": "男子の後ろにダイニングテーブルがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wooden table surrounded by plants and flowers",
          "text_en": "a wooden table surrounded by plants and flowers",
          "text_ja": "植物と花に囲まれた木製のテーブル"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The dining area and greenery create a fresh, welcoming background.",
          "text_en": "The dining area and greenery create a fresh, welcoming background.",
          "text_ja": "食事スペースと緑が新鮮で居心地のよい背景を作っています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "framed poster on the right wall",
      "content": "Good Morning!",
      "description_ja": "朝の明るい雰囲気を作る挨拶のメッセージ。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "good, morning, greeting, poster",
          "text_en": "good, morning, greeting, poster",
          "text_ja": "よい、朝、挨拶、ポスター"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Good morning! means おはようございます。",
          "text_en": "Good morning! means おはようございます。",
          "text_ja": "Good morning! は「おはようございます」という意味です。"
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
          "text": "The words 'Good Morning!' emphasize the cheerful beginning of the day.",
          "text_en": "The words 'Good Morning!' emphasize the cheerful beginning of the day.",
          "text_ja": "「Good Morning!」という言葉が明るい一日の始まりを強調しています。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "small note on the refrigerator",
      "content": "Have a nice day! :)",
      "description_ja": "よい一日を願う親しみやすいメッセージ。",
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "have, nice, day, smile",
          "text_en": "have, nice, day, smile",
          "text_ja": "過ごす、よい、一日、笑顔"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "Have a nice day! means よい一日を。",
          "text_en": "Have a nice day! means よい一日を。",
          "text_ja": "Have a nice day! は「よい一日を」という意味です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "A note on the refrigerator says...",
          "text_en": "A note on the refrigerator says...",
          "text_ja": "冷蔵庫のメモには……と書かれています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The friendly note contributes to the warm atmosphere of the home.",
          "text_en": "The friendly note contributes to the warm atmosphere of the home.",
          "text_ja": "親しみやすいメモが家庭の温かな雰囲気を作っています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Frying an egg",
      "description_ja": "卵を焼いている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_005"
      ],
      "synonyms": [
        "fry",
        "frying",
        "fry an egg",
        "cook an egg",
        "make a fried egg",
        "heat an egg in a pan"
      ],
      "accepted_words": [
        "fry",
        "frying",
        "fry an egg",
        "cook an egg",
        "make a fried egg",
        "heat an egg in a pan"
      ],
      "common_typos": [
        "fryng",
        "fring an egg",
        "cookking an egg",
        "fryed egg"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cook",
            "ja": "料理する"
          }
        ],
        "A2": [
          {
            "en": "fry an egg",
            "ja": "卵を焼く"
          }
        ],
        "B1": [
          {
            "en": "prepare a fried egg",
            "ja": "目玉焼きを準備する"
          }
        ],
        "B2": [
          {
            "en": "control the heat while frying",
            "ja": "焼きながら火加減を調整する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning a simple egg into the heart of breakfast",
          "ja": "ただの卵を朝食の中心へ変えている"
        },
        {
          "en": "creating a golden beginning to the day",
          "ja": "一日の金色の始まりを作っている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "fry, egg, pan, cook",
          "text_en": "fry, egg, pan, cook",
          "text_ja": "焼く、卵、フライパン、料理する"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is frying an egg.",
          "text_en": "The boy is frying an egg.",
          "text_ja": "男子は卵を焼いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "fry a sunny-side-up egg in a pan",
          "text_en": "fry a sunny-side-up egg in a pan",
          "text_ja": "フライパンで目玉焼きを作る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Frying the egg over a steady flame, he watches it carefully.",
          "text_en": "Frying the egg over a steady flame, he watches it carefully.",
          "text_ja": "安定した炎で卵を焼きながら、彼は注意深く見ています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Holding the pan and spatula",
      "description_ja": "フライパンとフライ返しを持っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_004"
      ],
      "synonyms": [
        "hold",
        "holding",
        "hold the pan",
        "hold a spatula",
        "grip the handle",
        "use both hands"
      ],
      "accepted_words": [
        "hold",
        "holding",
        "hold the pan",
        "hold a spatula",
        "grip the handle",
        "use both hands"
      ],
      "common_typos": [
        "holing",
        "hoding",
        "griping",
        "both hans"
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
            "en": "hold the pan",
            "ja": "フライパンを持つ"
          }
        ],
        "B1": [
          {
            "en": "grip the handle",
            "ja": "取っ手を握る"
          }
        ],
        "B2": [
          {
            "en": "coordinate both hands",
            "ja": "両手を連動させる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "balancing the tools of breakfast in both hands",
          "ja": "両手で朝食作りの道具を扱っている"
        },
        {
          "en": "holding the pan steady while guiding the egg",
          "ja": "卵を扱いながらフライパンを安定させている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is holding a pan and a spatula.",
          "text_en": "He is holding a pan and a spatula.",
          "text_ja": "彼はフライパンとフライ返しを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold the pan with one hand and the spatula with the other",
          "text_en": "hold the pan with one hand and the spatula with the other",
          "text_ja": "片手でフライパンを持ち、もう一方の手でフライ返しを持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Holding the pan steady, he uses the spatula to control the egg.",
          "text_en": "Holding the pan steady, he uses the spatula to control the egg.",
          "text_ja": "フライパンを安定させ、フライ返しで卵を扱っています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Preparing breakfast",
      "description_ja": "朝食を準備している",
      "involved_elements": [
        "element_001",
        "element_003",
        "element_006",
        "element_007",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "prepare breakfast",
        "make breakfast",
        "cook a morning meal",
        "get breakfast ready",
        "prepare a healthy meal"
      ],
      "accepted_words": [
        "prepare breakfast",
        "make breakfast",
        "cook a morning meal",
        "get breakfast ready",
        "prepare a healthy meal"
      ],
      "common_typos": [
        "prepareing",
        "makeing breakfast",
        "breakfest",
        "geting breakfast ready"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "breakfast",
            "ja": "朝食"
          }
        ],
        "A2": [
          {
            "en": "prepare breakfast",
            "ja": "朝食を準備する"
          }
        ],
        "B1": [
          {
            "en": "prepare a balanced meal",
            "ja": "バランスのよい食事を用意する"
          }
        ],
        "B2": [
          {
            "en": "assemble a nutritious breakfast",
            "ja": "栄養のある朝食を組み立てる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "building the morning meal one dish at a time",
          "ja": "一品ずつ朝の食事を作り上げている"
        },
        {
          "en": "bringing color and energy to the breakfast table",
          "ja": "朝食に色と活力を運んでいる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "He is making breakfast.",
          "text_en": "He is making breakfast.",
          "text_ja": "彼は朝食を作っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "prepare breakfast with eggs, toast, salad, and juice",
          "text_en": "prepare breakfast with eggs, toast, salad, and juice",
          "text_ja": "卵、トースト、サラダ、ジュースで朝食を準備する"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "By preparing several foods at once, he creates a balanced meal.",
          "text_en": "By preparing several foods at once, he creates a balanced meal.",
          "text_ja": "複数の食べ物を同時に準備し、バランスのよい食事を作っています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Standing at the stove",
      "description_ja": "コンロの前に立っている",
      "involved_elements": [
        "element_001",
        "element_005"
      ],
      "synonyms": [
        "stand",
        "standing",
        "stand at the stove",
        "stand in front of the stove",
        "face the cooktop"
      ],
      "accepted_words": [
        "stand",
        "standing",
        "stand at the stove",
        "stand in front of the stove",
        "face the cooktop"
      ],
      "common_typos": [
        "standng",
        "stannding",
        "infront of the stove",
        "cook top"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "stand",
            "ja": "立つ"
          }
        ],
        "A2": [
          {
            "en": "stand at the stove",
            "ja": "コンロの前に立つ"
          }
        ],
        "B1": [
          {
            "en": "face the cooktop",
            "ja": "コンロ台の方を向く"
          }
        ],
        "B2": [
          {
            "en": "maintain an attentive posture",
            "ja": "注意深い姿勢を保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "standing at the warm center of the kitchen",
          "ja": "キッチンの温かな中心に立っている"
        },
        {
          "en": "facing the flame with calm concentration",
          "ja": "落ち着いて炎に向き合っている"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The boy is standing at the stove.",
          "text_en": "The boy is standing at the stove.",
          "text_ja": "男子はコンロの前に立っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "stand calmly in front of the gas stove",
          "text_en": "stand calmly in front of the gas stove",
          "text_ja": "ガスコンロの前に落ち着いて立つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Standing close to the stove, he keeps his attention on the pan.",
          "text_en": "Standing close to the stove, he keeps his attention on the pan.",
          "text_ja": "コンロの近くに立ち、彼はフライパンに注意を向けています。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Steam rising from the pan",
      "description_ja": "フライパンから湯気が立っている",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_005"
      ],
      "synonyms": [
        "steam rises",
        "steam is rising",
        "rising steam",
        "gives off steam",
        "sizzling",
        "steaming"
      ],
      "accepted_words": [
        "steam rises",
        "steam is rising",
        "rising steam",
        "gives off steam",
        "sizzling",
        "steaming"
      ],
      "common_typos": [
        "steem rises",
        "steam rizes",
        "riseing steam",
        "sizzeling"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "steam",
            "ja": "湯気"
          }
        ],
        "A2": [
          {
            "en": "steam is rising",
            "ja": "湯気が立っている"
          }
        ],
        "B1": [
          {
            "en": "the egg is sizzling",
            "ja": "卵がジュージュー焼けている"
          }
        ],
        "B2": [
          {
            "en": "wisps of steam drift upward",
            "ja": "細い湯気が上へ漂う"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "steam curling into the morning light",
          "ja": "朝の光の中へ渦を巻く湯気"
        },
        {
          "en": "the visible warmth of breakfast",
          "ja": "目に見える朝食の温かさ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Steam is rising from the pan.",
          "text_en": "Steam is rising from the pan.",
          "text_ja": "フライパンから湯気が立っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "thin steam drifting above the egg",
          "text_en": "thin steam drifting above the egg",
          "text_ja": "卵の上を漂う細い湯気"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Rising from the pan, the steam makes the food look warm and inviting.",
          "text_en": "Rising from the pan, the steam makes the food look warm and inviting.",
          "text_ja": "フライパンから立つ湯気が食べ物を温かくおいしそうに見せています。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Morning sunlight filling the kitchen",
      "description_ja": "朝の日差しがキッチンを満たしている",
      "involved_elements": [
        "element_013",
        "element_014"
      ],
      "synonyms": [
        "sunlight fills the kitchen",
        "morning light streams",
        "daylight shines",
        "illuminates",
        "brightens the kitchen"
      ],
      "accepted_words": [
        "sunlight fills the kitchen",
        "morning light streams",
        "daylight shines",
        "illuminates",
        "brightens the kitchen"
      ],
      "common_typos": [
        "sunligt fills",
        "morning ligth",
        "streems",
        "iluminates"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sunlight",
            "ja": "日差し"
          }
        ],
        "A2": [
          {
            "en": "morning light",
            "ja": "朝の光"
          }
        ],
        "B1": [
          {
            "en": "sunlight streams through the window",
            "ja": "日差しが窓から流れ込む"
          }
        ],
        "B2": [
          {
            "en": "golden illumination spreads across the counter",
            "ja": "金色の光が調理台に広がる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "morning light pouring over breakfast",
          "ja": "朝食の上に注ぐ朝の光"
        },
        {
          "en": "sunshine warming every corner of the kitchen",
          "ja": "キッチンの隅々を温める日差し"
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
          "text": "warm morning light spreading across the kitchen",
          "text_en": "warm morning light spreading across the kitchen",
          "text_ja": "キッチンに広がる暖かな朝の光"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Streaming through the window, the sunlight gives the meal a fresh appearance.",
          "text_en": "Streaming through the window, the sunlight gives the meal a fresh appearance.",
          "text_ja": "窓から差し込む日差しが食事を新鮮に見せています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Breakfast items arranged on the counter",
      "description_ja": "朝食の品が調理台に並べられている",
      "involved_elements": [
        "element_006",
        "element_007",
        "element_008",
        "element_009",
        "element_010"
      ],
      "synonyms": [
        "arranged",
        "organized",
        "placed",
        "laid out",
        "breakfast items",
        "meal is ready"
      ],
      "accepted_words": [
        "arranged",
        "organized",
        "placed",
        "laid out",
        "breakfast items",
        "meal is ready"
      ],
      "common_typos": [
        "aranged",
        "organisedd",
        "plaiced",
        "layed out",
        "breakfest items"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "food on the counter",
            "ja": "調理台の食べ物"
          }
        ],
        "A2": [
          {
            "en": "breakfast items are arranged",
            "ja": "朝食の品が並べられている"
          }
        ],
        "B1": [
          {
            "en": "the meal is nearly complete",
            "ja": "食事がほぼ完成している"
          }
        ],
        "B2": [
          {
            "en": "a balanced selection is displayed",
            "ja": "バランスのよい品が並べられている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a colorful breakfast landscape across the counter",
          "ja": "調理台に広がる色鮮やかな朝食の風景"
        },
        {
          "en": "the quiet evidence of careful preparation",
          "ja": "丁寧な準備を示す静かな証拠"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many breakfast foods on the counter.",
          "text_en": "There are many breakfast foods on the counter.",
          "text_ja": "調理台にはたくさんの朝食の品があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "On the counter, there are...",
          "text_en": "On the counter, there are...",
          "text_ja": "調理台の上には……があります。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Carefully arranged food makes the breakfast look complete and nutritious.",
          "text_en": "Carefully arranged food makes the breakfast look complete and nutritious.",
          "text_ja": "丁寧に並べられた食べ物が朝食を完成して栄養があるように見せています。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "boy",
      "relationship": "in front of",
      "object": "gas stove",
      "example_beginner": "The boy is in front of the stove.",
      "example_intermediate": "The boy is standing in front of the gas stove."
    },
    {
      "subject": "egg",
      "relationship": "in",
      "object": "frying pan",
      "example_beginner": "The egg is in the pan.",
      "example_intermediate": "A fried egg is cooking in the center of the pan."
    },
    {
      "subject": "frying pan",
      "relationship": "on",
      "object": "gas stove",
      "example_beginner": "The pan is on the stove.",
      "example_intermediate": "The frying pan is positioned over a blue flame."
    },
    {
      "subject": "spatula",
      "relationship": "in",
      "object": "boy's hand",
      "example_beginner": "The spatula is in his hand.",
      "example_intermediate": "He is holding a black spatula in one hand."
    },
    {
      "subject": "toast",
      "relationship": "on",
      "object": "plate",
      "example_beginner": "The toast is on a plate.",
      "example_intermediate": "Two slices of toast are stacked on a white plate."
    },
    {
      "subject": "orange juice",
      "relationship": "beside",
      "object": "mug",
      "example_beginner": "The juice is beside the mug.",
      "example_intermediate": "A glass of orange juice stands beside the white mug."
    },
    {
      "subject": "salad bowl",
      "relationship": "to the right of",
      "object": "orange juice",
      "example_beginner": "The salad is to the right of the juice.",
      "example_intermediate": "The salad bowl is placed to the right of the juice."
    },
    {
      "subject": "refrigerator",
      "relationship": "behind",
      "object": "boy",
      "example_beginner": "The refrigerator is behind him.",
      "example_intermediate": "A large refrigerator stands behind the boy."
    },
    {
      "subject": "dining table",
      "relationship": "behind and to the right of",
      "object": "boy",
      "example_beginner": "The table is behind the boy.",
      "example_intermediate": "A dining table stands behind and to the right of the boy."
    },
    {
      "subject": "sunlight",
      "relationship": "through",
      "object": "window",
      "example_beginner": "Sunlight comes through the window.",
      "example_intermediate": "Warm sunlight streams through the kitchen window."
    }
  ],
  "adjective_library": {
    "person": [
      "young",
      "focused",
      "calm",
      "careful",
      "independent",
      "cheerful",
      "attentive"
    ],
    "kitchen": [
      "bright",
      "sunlit",
      "cozy",
      "clean",
      "organized",
      "modern",
      "comfortable",
      "inviting"
    ],
    "food": [
      "fresh",
      "healthy",
      "colorful",
      "warm",
      "crispy",
      "nutritious",
      "balanced"
    ],
    "pan_and_stove": [
      "hot",
      "black",
      "metallic",
      "steady",
      "lit",
      "built-in"
    ],
    "light": [
      "warm",
      "golden",
      "natural",
      "bright",
      "soft",
      "radiant"
    ],
    "atmosphere": [
      "fresh",
      "cheerful",
      "peaceful",
      "productive",
      "optimistic",
      "welcoming"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中に、〜で",
      "example": "The boy is cooking in the kitchen."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜のところで",
      "example": "He is standing at the stove."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The boy is in front of the gas stove."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The pan is on the stove."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The juice is beside the mug."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The refrigerator is behind the boy."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Sunlight comes through the window."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って",
      "example": "He is cooking with a spatula."
    },
    {
      "preposition": "over",
      "meaning_ja": "〜の上方に",
      "example": "The pan is over the blue flame."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The oil is near the stove."
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
        "The boy is cooking breakfast.",
        "He is frying an egg.",
        "Steam is rising from the pan."
      ],
      "hints": [
        "「主語 + am/is/are + 動詞ing」で今している動作を表します。",
        "Scene 005では boy + is frying + an egg が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "キッチンにある物や食べ物を説明する。",
      "examples": [
        "There is a frying pan on the stove.",
        "There is a glass of juice.",
        "There are several utensils on the wall."
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
      "purpose_ja": "人・場所・食べ物の特徴を説明する。",
      "examples": [
        "The boy is focused.",
        "The kitchen is bright.",
        "The salad is fresh."
      ],
      "hints": [
        "focused, bright, fresh などをbe動詞の後ろに置きます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置の表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The boy is in front of the stove.",
        "The egg is in the pan.",
        "The juice is beside the mug."
      ],
      "hints": [
        "in front of, in, on, beside, behind などを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + verb + adverb",
      "label_ja": "副詞を使った動作の説明",
      "level": "intermediate",
      "purpose_ja": "料理がどのように行われているかを説明する。",
      "examples": [
        "The boy cooks carefully.",
        "He holds the pan steadily.",
        "Steam rises gently."
      ],
      "hints": [
        "carefully, steadily, gently などを使うと動作が具体的になります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を加える。",
      "examples": [
        "The boy who is cooking looks calm.",
        "The pan that is over the flame contains an egg.",
        "The window, which lets in sunlight, is large."
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
      "purpose_ja": "物が並べられている、準備されている状態を表す。",
      "examples": [
        "The toast is placed on a plate.",
        "The vegetables are arranged in a bowl.",
        "The tools are hung on the wall."
      ],
      "hints": [
        "「be動詞 + 過去分詞」で状態を説明できます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の複数の動作を簡潔につなぐ。",
      "examples": [
        "Holding the pan steadily, the boy checks the egg.",
        "Using a spatula, he cooks carefully.",
        "Streaming through the window, sunlight fills the kitchen."
      ],
      "hints": [
        "文頭を動詞ingで始めると高度な描写になります。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "受け身の状態や背景を文頭で示す。",
      "examples": [
        "Surrounded by fresh food, the boy prepares breakfast.",
        "Illuminated by sunlight, the kitchen looks warm.",
        "Arranged on the counter, the food appears ready."
      ],
      "hints": [
        "Surrounded, Illuminated, Arranged などから始められます。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "画像から推測できることを断定せずに表す。",
      "examples": [
        "It looks like the boy is preparing breakfast.",
        "He seems comfortable in the kitchen.",
        "The meal appears healthy and balanced."
      ],
      "hints": [
        "looks like, seems, appears to を使って推測として書きます。"
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
        "example": "He is in the kitchen."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "He is ______ing.",
        "example": "He is cooking."
      },
      {
        "step": 4,
        "question_ja": "何を料理していますか？",
        "template": "He is frying ______.",
        "example": "He is frying an egg."
      },
      {
        "step": 5,
        "question_ja": "ほかに何がありますか？",
        "template": "There is / are ______ on / beside ______.",
        "example": "There is salad on the counter."
      }
    ],
    "intermediate": [
      {
        "template": "A teenage boy is ______ing in ______.",
        "example": "A teenage boy is cooking breakfast in a bright kitchen."
      },
      {
        "template": "On the counter, there is / are ______.",
        "example": "On the counter, there are toast, juice, salad, and a mug."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see a refrigerator, appliances, and a dining table."
      },
      {
        "template": "The ______ makes the kitchen feel ______.",
        "example": "The sunlight makes the kitchen feel warm and cheerful."
      },
      {
        "template": "It looks like the boy is ______.",
        "example": "It looks like the boy is preparing a healthy breakfast."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding the pan with one hand, the boy uses a spatula with the other."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by fresh food, he prepares the morning meal."
      },
      {
        "template": "Main clause, while / as + subordinate clause.",
        "example": "The boy fries an egg while steam rises from the pan."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The boy, who is standing at the stove, is cooking an egg that is sizzling in a pan."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that he is preparing a balanced breakfast."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A boy is in the kitchen.",
      "He is standing at the stove.",
      "He is frying an egg.",
      "There is toast and salad on the counter.",
      "Sunlight is coming through the window."
    ],
    "intermediate": [
      "A teenage boy in a navy hoodie is cooking breakfast in a bright kitchen.",
      "He is holding a pan with one hand and using a spatula with the other.",
      "A fried egg is cooking over a blue gas flame.",
      "Toast, juice, salad, and a mug are arranged on the counter.",
      "Warm morning sunlight fills the room."
    ],
    "advanced": [
      "Standing in front of the gas stove, a teenage boy carefully fries an egg while holding the pan steady.",
      "Using a black spatula, he checks the egg as thin steam rises into the morning light.",
      "Surrounded by toast, salad, orange juice, and a warm drink, he appears to be preparing a balanced breakfast.",
      "The refrigerator, appliances, window, and dining table create a realistic family kitchen."
    ]
  },
  "full_description_support": {
    "beginner_model": "A boy is in a kitchen. He is standing at the stove and frying an egg. There is toast, juice, salad, and a mug on the counter. The kitchen is bright.",
    "intermediate_model": "A teenage boy wearing a navy hoodie is standing at a gas stove in a bright home kitchen. He is holding a frying pan with one hand and using a spatula with the other while an egg cooks over a blue flame. Toast, orange juice, a white mug, salad, olive oil, and salt are arranged on the counter. A refrigerator, toaster oven, kettle, window, and dining table can be seen in the background.",
    "advanced_model": "Standing at the center of a sunlit family kitchen, a teenage boy in a navy hoodie carefully prepares breakfast over a steady blue gas flame. Holding the frying pan firmly with one hand, he uses a slotted spatula with the other as a golden-yolked egg sizzles and steam rises into the warm morning light. Around him, neatly arranged toast, fresh salad, orange juice, a ceramic mug, olive oil, and seasoning create the impression of a balanced meal that is nearly complete. Behind him, a refrigerator with a friendly note, compact appliances, green plants, and a dining table contribute to the cozy atmosphere, while the words 'Good Morning!' reinforce the optimistic beginning of the day."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A boy is in the kitchen. He is frying an egg.",
        "ja": "男子がキッチンにいます。彼は卵を焼いています。",
        "focus": "boy、kitchen、frying、eggを使い、基本のS+V+場所を作る。"
      },
      {
        "en": "There is toast and salad on the counter. The kitchen is bright.",
        "ja": "調理台にトーストとサラダがあります。キッチンは明るいです。",
        "focus": "There is とbe動詞＋形容詞で食べ物と雰囲気を説明する。"
      }
    ],
    "A2": [
      {
        "en": "A teenage boy is standing at the stove and cooking a fried egg in a pan.",
        "ja": "10代の男子がコンロの前に立ち、フライパンで目玉焼きを作っています。",
        "focus": "andを使ってstandingとcookingをつなぐ。"
      },
      {
        "en": "He is preparing breakfast with toast, salad, orange juice, and a hot drink.",
        "ja": "彼はトースト、サラダ、オレンジジュース、温かい飲み物で朝食を準備しています。",
        "focus": "withを使って食事に含まれる品をまとめて示す。"
      }
    ],
    "B1": [
      {
        "en": "A focused male student is frying an egg over a blue gas flame while steam rises gently from the pan.",
        "ja": "集中している男子生徒が青いガスの炎で卵を焼く間、フライパンから湯気が立っています。",
        "focus": "whileを使って人物の動作と背景の変化を同時に描写する。"
      },
      {
        "en": "Several breakfast items are neatly arranged on the counter, including toast, salad, orange juice, and a mug.",
        "ja": "トースト、サラダ、オレンジジュース、マグカップなどの朝食の品が調理台に並べられています。",
        "focus": "受動態 are arranged と including を使う。"
      }
    ],
    "B2": [
      {
        "en": "Holding the pan steady with one hand and guiding a spatula with the other, the teenage boy carefully prepares a balanced breakfast in the sunlit kitchen.",
        "ja": "片手でフライパンを安定させ、もう一方の手でフライ返しを動かしながら、10代の男子は日差しの差し込むキッチンでバランスのよい朝食を準備しています。",
        "focus": "Holding と guiding の分詞表現を使い、複数の同時動作を統合する。"
      },
      {
        "en": "The kitchen, which is filled with warm morning light, seems to provide an inviting space for the boy, who appears to be starting his day with a nutritious homemade meal.",
        "ja": "暖かな朝の光に満たされたキッチンは、栄養のある手作りの食事で一日を始めようとしている男子にとって居心地のよい空間のようです。",
        "focus": "whichとwhoを連続して使い、seems toとappears toで推量を表す。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene005Data = scene005Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene005Data;
}
