"use strict";

const scene017Data = {
  "id": "scene_017",
  "image_id": "017.webp",
  "overall_description_ja": "朝の柔らかな日差しが差し込む住宅街のバス停で、制服姿の男子高校生が一人でバスを待っている。男子生徒は紺色のブレザー、白いシャツ、灰色のセーターベスト、赤と紺の斜め縞のネクタイ、灰色のスラックス、黒い革靴を身につけている。濃紺のリュックを片方の肩に掛け、片手で肩ひもを握り、もう片方の手はズボンのポケットに入れている。顔は道路の奥へ向けられ、近づいてくるバスを探しているように見える。左には黒い金属枠と透明なガラス壁のバス待合所があり、木製ベンチと大きな時刻表が設置されている。生徒の右には青い円形のバス標識と縦長の時刻表が立っている。歩道の端には黄色い点字ブロックがあり、右手前には白い横断歩道が見える。静かな道路は戸建て住宅、塀、庭木、電柱、電線の間を遠くまで伸びている。朝の低い日差しが木々や建物を黄金色に照らし、歩道に長い影を落としている。バスや自動車は見えず、通学前の穏やかな待機と期待を感じさせる場面である。",
  "overall_description_en": "On a quiet residential street in warm morning light, a male high school student stands alone at a bus stop and waits for a bus. He wears a navy blazer, a white shirt, a gray sweater vest, a red-and-navy striped tie, gray trousers, and black leather shoes. A dark navy backpack hangs from one shoulder, and he grips its strap while keeping his other hand in his pocket. He turns his face toward the road and appears to be watching for an approaching bus. A glass bus shelter with a curved roof, wooden bench, and large timetable stands on the left. Beside him, a blue circular bus sign rises above a narrow timetable panel. Yellow tactile paving marks the boarding area, and a white pedestrian crossing fills the right foreground. Detached houses, garden walls, trees, utility poles, and overhead wires line the almost empty road. Low-angle sunlight casts long shadows and creates a calm, hopeful atmosphere before school.",
  "overall_mood": [
    "quiet",
    "calm",
    "sunny",
    "hopeful",
    "peaceful",
    "early-morning",
    "residential",
    "orderly",
    "fresh",
    "warm",
    "patient",
    "reflective",
    "safe",
    "still",
    "anticipatory",
    "everyday"
  ],
  "mission_guides": {
    "gist": "男子高校生がどこで、何を待ち、どちらを見ているかを書こう。",
    "setting": "待合所、ベンチ、標識、時刻表、道路、横断歩道、住宅街を説明しよう。",
    "details": "制服、リュック、手の位置、点字ブロック、朝の日差し、長い影を加えよう。",
    "complete": "通学前の静かな待機と、バスの到着を期待する雰囲気まで描写しよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a male student waiting for a bus",
        "ja": "バスを待つ男子生徒"
      },
      {
        "en": "standing beside a blue bus-stop sign",
        "ja": "青いバス停標識のそばに立つ"
      },
      {
        "en": "looking down the road for the bus",
        "ja": "バスを探して道路の奥を見る"
      },
      {
        "en": "carrying a backpack before school",
        "ja": "通学前にリュックを持っている"
      }
    ],
    "setting": [
      {
        "en": "at a glass bus shelter in a residential area",
        "ja": "住宅街のガラス張りバス待合所で"
      },
      {
        "en": "beside a wooden bench and timetable",
        "ja": "木製ベンチと時刻表のそばで"
      },
      {
        "en": "near tactile paving and a pedestrian crossing",
        "ja": "点字ブロックと横断歩道の近くで"
      },
      {
        "en": "with houses, trees, poles, and wires in the background",
        "ja": "背景に住宅、木々、電柱、電線がある"
      }
    ],
    "mood": [
      {
        "en": "a peaceful and patient morning scene",
        "ja": "穏やかで辛抱強い朝の場面"
      },
      {
        "en": "warm sunlight creating long shadows",
        "ja": "長い影を作る温かな日差し"
      },
      {
        "en": "a quiet road with almost no traffic",
        "ja": "交通量がほとんどない静かな道路"
      },
      {
        "en": "a calm sense of expectation before school",
        "ja": "通学前の落ち着いた期待感"
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
        "a boy",
        "a student",
        "a male student",
        "a high school student",
        "a schoolboy",
        "a teenager",
        "he"
      ],
      "hint_msg": "a male studentやa high school studentなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "is waiting",
        "is standing",
        "is looking",
        "is carrying",
        "is checking",
        "is holding",
        "is watching",
        "is commuting"
      ],
      "hint_msg": "is waitingやis lookingなど、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次は何を待ち、どこにいるかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "for a bus",
        "at a bus stop",
        "beside a bus shelter",
        "near the road",
        "on the sidewalk",
        "in a residential area",
        "by a timetable",
        "before school"
      ],
      "hint_msg": "for a bus / at a bus stop / beside a shelterなどを加えましょう。",
      "success_msg": "Excellent! 制服、リュック、標識、道路、朝の光まで詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "a student waiting for a bus",
    "a morning commute to school",
    "standing beside a bus-stop sign",
    "checking the road for an approaching bus",
    "wearing a formal school uniform",
    "carrying a navy backpack",
    "a glass bus shelter",
    "a wooden bench",
    "a timetable display",
    "yellow tactile paving",
    "a pedestrian crossing",
    "a quiet residential street",
    "warm early morning sunlight",
    "long shadows on the sidewalk",
    "public transportation in daily life",
    "patience and anticipation before school"
  ],
  "scene_structure": {
    "foreground": [
      "wooden bench",
      "black shoes",
      "tactile paving",
      "curb",
      "pedestrian crossing"
    ],
    "midground": [
      "male student",
      "navy backpack",
      "blue bus sign",
      "vertical timetable",
      "glass shelter"
    ],
    "background": [
      "quiet road",
      "houses",
      "walls",
      "trees",
      "utility poles",
      "wires",
      "blue sky",
      "sunlit clouds"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "male high school student",
      "label_ja": "男子高校生",
      "category": "person",
      "importance": "primary",
      "description": "A teenage male student stands alone at the bus stop in a formal uniform and looks toward the road.",
      "bounding_box_conceptual": [
        10,
        28,
        83,
        22
      ],
      "color": [
        "navy",
        "gray",
        "white",
        "black"
      ],
      "attributes": [
        "young",
        "uniformed",
        "patient",
        "calm",
        "attentive",
        "alone"
      ],
      "action": [
        "waiting",
        "standing",
        "looking down the road",
        "holding a strap"
      ],
      "synonyms_and_related_words": [
        "boy",
        "student",
        "male student",
        "high school student"
      ],
      "accepted_words": [
        "boy",
        "student",
        "male student",
        "high school student"
      ],
      "common_typos": [
        "boyy",
        "stdent",
        "mae student"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "male high school student",
            "ja": "男子高校生"
          }
        ],
        "A2": [
          {
            "en": "student",
            "ja": "男子高校生を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "high school student",
            "ja": "男子高校生を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "teenager",
            "ja": "男子高校生を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet male high school student touched by morning light",
          "ja": "朝の光に触れる静かな男子高校生"
        },
        {
          "en": "the male high school student forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る男子高校生"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, student, male student, high school student, schoolboy",
          "text_en": "boy, student, male student, high school student, schoolboy",
          "text_ja": "男子高校生に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are male high school student in the picture.",
          "text_en": "There is / are male high school student in the picture.",
          "text_ja": "画像には男子高校生があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the male high school student at the bus stop",
          "text_en": "the male high school student at the bus stop",
          "text_ja": "バス停にある男子高校生"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible male high school student in the morning scene",
          "text_en": "a clearly visible male high school student in the morning scene",
          "text_ja": "朝の場面ではっきり見える男子高校生"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "school uniform",
      "label_ja": "学校の制服",
      "category": "clothing",
      "importance": "primary",
      "description": "The student wears a navy blazer, gray sweater vest, white shirt, striped tie, gray trousers, and black shoes.",
      "bounding_box_conceptual": [
        18,
        29,
        74,
        19
      ],
      "color": [
        "navy",
        "gray",
        "white",
        "red",
        "black"
      ],
      "attributes": [
        "formal",
        "neat",
        "layered",
        "school-related",
        "traditional"
      ],
      "action": [
        "being worn",
        "identifying the student"
      ],
      "synonyms_and_related_words": [
        "uniform",
        "school uniform",
        "navy blazer",
        "gray sweater vest"
      ],
      "accepted_words": [
        "uniform",
        "school uniform",
        "navy blazer",
        "gray sweater vest"
      ],
      "common_typos": [
        "unform",
        "scool uniform",
        "nay blazer"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "school uniform",
            "ja": "学校の制服"
          }
        ],
        "A2": [
          {
            "en": "school uniform",
            "ja": "学校の制服を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "gray sweater vest",
            "ja": "学校の制服を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "gray trousers",
            "ja": "学校の制服を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet school uniform touched by morning light",
          "ja": "朝の光に触れる静かな学校の制服"
        },
        {
          "en": "the school uniform forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る学校の制服"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "uniform, school uniform, navy blazer, gray sweater vest, striped tie",
          "text_en": "uniform, school uniform, navy blazer, gray sweater vest, striped tie",
          "text_ja": "学校の制服に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are school uniform in the picture.",
          "text_en": "There is / are school uniform in the picture.",
          "text_ja": "画像には学校の制服があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the school uniform at the bus stop",
          "text_en": "the school uniform at the bus stop",
          "text_ja": "バス停にある学校の制服"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible school uniform in the morning scene",
          "text_en": "a clearly visible school uniform in the morning scene",
          "text_ja": "朝の場面ではっきり見える学校の制服"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "navy backpack",
      "label_ja": "濃紺のリュックサック",
      "category": "object",
      "importance": "primary",
      "description": "A dark navy backpack hangs from one shoulder, and the student grips its strap near his chest.",
      "bounding_box_conceptual": [
        24,
        27,
        31,
        13
      ],
      "color": [
        "navy",
        "black"
      ],
      "attributes": [
        "practical",
        "school-related",
        "soft-sided",
        "medium-sized"
      ],
      "action": [
        "hanging",
        "being carried",
        "being held"
      ],
      "synonyms_and_related_words": [
        "backpack",
        "navy backpack",
        "school backpack",
        "rucksack"
      ],
      "accepted_words": [
        "backpack",
        "navy backpack",
        "school backpack",
        "rucksack"
      ],
      "common_typos": [
        "bakpack",
        "nay backpack",
        "scool backpack"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "navy backpack",
            "ja": "濃紺のリュックサック"
          }
        ],
        "A2": [
          {
            "en": "navy backpack",
            "ja": "濃紺のリュックサックを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "rucksack",
            "ja": "濃紺のリュックサックを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "book bag",
            "ja": "濃紺のリュックサックを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet navy backpack touched by morning light",
          "ja": "朝の光に触れる静かな濃紺のリュックサック"
        },
        {
          "en": "the navy backpack forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る濃紺のリュックサック"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "backpack, navy backpack, school backpack, rucksack, school bag",
          "text_en": "backpack, navy backpack, school backpack, rucksack, school bag",
          "text_ja": "濃紺のリュックサックに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are navy backpack in the picture.",
          "text_en": "There is / are navy backpack in the picture.",
          "text_ja": "画像には濃紺のリュックサックがあります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the navy backpack at the bus stop",
          "text_en": "the navy backpack at the bus stop",
          "text_ja": "バス停にある濃紺のリュックサック"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible navy backpack in the morning scene",
          "text_en": "a clearly visible navy backpack in the morning scene",
          "text_ja": "朝の場面ではっきり見える濃紺のリュックサック"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "bus shelter",
      "label_ja": "バス停の待合所",
      "category": "setting",
      "importance": "primary",
      "description": "A covered shelter with a dark metal frame, curved roof, and transparent glass panels fills the left side.",
      "bounding_box_conceptual": [
        0,
        0,
        79,
        32
      ],
      "color": [
        "black",
        "dark gray",
        "transparent",
        "brown"
      ],
      "attributes": [
        "covered",
        "glass-walled",
        "metal-framed",
        "protective",
        "public"
      ],
      "action": [
        "sheltering passengers",
        "holding a bench",
        "holding a timetable"
      ],
      "synonyms_and_related_words": [
        "bus shelter",
        "bus-stop shelter",
        "waiting shelter",
        "covered bus stop"
      ],
      "accepted_words": [
        "bus shelter",
        "bus-stop shelter",
        "waiting shelter",
        "covered bus stop"
      ],
      "common_typos": [
        "bu shelter",
        "bustop shelter",
        "wating shelter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bus shelter",
            "ja": "バス停の待合所"
          }
        ],
        "A2": [
          {
            "en": "bus-stop shelter",
            "ja": "バス停の待合所を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "covered bus stop",
            "ja": "バス停の待合所を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "passenger shelter",
            "ja": "バス停の待合所を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet bus shelter touched by morning light",
          "ja": "朝の光に触れる静かなバス停の待合所"
        },
        {
          "en": "the bus shelter forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作るバス停の待合所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bus shelter, bus-stop shelter, waiting shelter, covered bus stop, glass shelter",
          "text_en": "bus shelter, bus-stop shelter, waiting shelter, covered bus stop, glass shelter",
          "text_ja": "バス停の待合所に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are bus shelter in the picture.",
          "text_en": "There is / are bus shelter in the picture.",
          "text_ja": "画像にはバス停の待合所があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the bus shelter at the bus stop",
          "text_en": "the bus shelter at the bus stop",
          "text_ja": "バス停にあるバス停の待合所"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible bus shelter in the morning scene",
          "text_en": "a clearly visible bus shelter in the morning scene",
          "text_ja": "朝の場面ではっきり見えるバス停の待合所"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "wooden bench",
      "label_ja": "木製ベンチ",
      "category": "furniture",
      "importance": "secondary",
      "description": "A long empty wooden bench with dark metal supports sits inside the shelter.",
      "bounding_box_conceptual": [
        45,
        0,
        33,
        25
      ],
      "color": [
        "brown",
        "black"
      ],
      "attributes": [
        "wooden",
        "empty",
        "long",
        "slatted",
        "public"
      ],
      "action": [
        "providing seating",
        "remaining unused"
      ],
      "synonyms_and_related_words": [
        "bench",
        "wooden bench",
        "bus-stop bench",
        "public bench"
      ],
      "accepted_words": [
        "bench",
        "wooden bench",
        "bus-stop bench",
        "public bench"
      ],
      "common_typos": [
        "bech",
        "woden bench",
        "bustop bench"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "wooden bench",
            "ja": "木製ベンチ"
          }
        ],
        "A2": [
          {
            "en": "wooden bench",
            "ja": "木製ベンチを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "public bench",
            "ja": "木製ベンチを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "long seat",
            "ja": "木製ベンチを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet wooden bench touched by morning light",
          "ja": "朝の光に触れる静かな木製ベンチ"
        },
        {
          "en": "the wooden bench forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る木製ベンチ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bench, wooden bench, bus-stop bench, public bench, waiting bench",
          "text_en": "bench, wooden bench, bus-stop bench, public bench, waiting bench",
          "text_ja": "木製ベンチに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are wooden bench in the picture.",
          "text_en": "There is / are wooden bench in the picture.",
          "text_ja": "画像には木製ベンチがあります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the wooden bench at the bus stop",
          "text_en": "the wooden bench at the bus stop",
          "text_ja": "バス停にある木製ベンチ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible wooden bench in the morning scene",
          "text_en": "a clearly visible wooden bench in the morning scene",
          "text_ja": "朝の場面ではっきり見える木製ベンチ"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "large shelter timetable",
      "label_ja": "待合所内の大きな時刻表",
      "category": "text_sign",
      "importance": "primary",
      "description": "A rectangular timetable with a blue header and a dense grid of route and time information is mounted inside the shelter.",
      "bounding_box_conceptual": [
        17,
        15,
        28,
        10
      ],
      "color": [
        "white",
        "blue",
        "black"
      ],
      "attributes": [
        "rectangular",
        "information-dense",
        "mounted",
        "organized"
      ],
      "action": [
        "displaying routes",
        "showing departure times"
      ],
      "synonyms_and_related_words": [
        "timetable",
        "bus timetable",
        "schedule board",
        "route schedule"
      ],
      "accepted_words": [
        "timetable",
        "bus timetable",
        "schedule board",
        "route schedule"
      ],
      "common_typos": [
        "tietable",
        "bu timetable",
        "scedule board"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "large shelter timetable",
            "ja": "待合所内の大きな時刻表"
          }
        ],
        "A2": [
          {
            "en": "bus timetable",
            "ja": "待合所内の大きな時刻表を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "route schedule",
            "ja": "待合所内の大きな時刻表を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "departure times",
            "ja": "待合所内の大きな時刻表を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet large shelter timetable touched by morning light",
          "ja": "朝の光に触れる静かな待合所内の大きな時刻表"
        },
        {
          "en": "the large shelter timetable forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る待合所内の大きな時刻表"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "timetable, bus timetable, schedule board, route schedule, information board",
          "text_en": "timetable, bus timetable, schedule board, route schedule, information board",
          "text_ja": "待合所内の大きな時刻表に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are large shelter timetable in the picture.",
          "text_en": "There is / are large shelter timetable in the picture.",
          "text_ja": "画像には待合所内の大きな時刻表があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the large shelter timetable at the bus stop",
          "text_en": "the large shelter timetable at the bus stop",
          "text_ja": "バス停にある待合所内の大きな時刻表"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible large shelter timetable in the morning scene",
          "text_en": "a clearly visible large shelter timetable in the morning scene",
          "text_ja": "朝の場面ではっきり見える待合所内の大きな時刻表"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "blue bus-stop sign",
      "label_ja": "青いバス停標識",
      "category": "text_sign",
      "importance": "primary",
      "description": "A blue circular sign with a white bus pictogram stands above the timetable pole beside the road.",
      "bounding_box_conceptual": [
        2,
        49,
        17,
        12
      ],
      "color": [
        "blue",
        "white",
        "gray"
      ],
      "attributes": [
        "round",
        "high-mounted",
        "recognizable",
        "public"
      ],
      "action": [
        "marking the stop",
        "identifying the location"
      ],
      "synonyms_and_related_words": [
        "bus-stop sign",
        "bus sign",
        "blue bus sign",
        "round bus sign"
      ],
      "accepted_words": [
        "bus-stop sign",
        "bus sign",
        "blue bus sign",
        "round bus sign"
      ],
      "common_typos": [
        "bustop sign",
        "bu sign",
        "ble bus sign"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "blue bus-stop sign",
            "ja": "青いバス停標識"
          }
        ],
        "A2": [
          {
            "en": "bus sign",
            "ja": "青いバス停標識を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "round bus sign",
            "ja": "青いバス停標識を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "public transport sign",
            "ja": "青いバス停標識を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet blue bus-stop sign touched by morning light",
          "ja": "朝の光に触れる静かな青いバス停標識"
        },
        {
          "en": "the blue bus-stop sign forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る青いバス停標識"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bus-stop sign, bus sign, blue bus sign, round bus sign, bus symbol",
          "text_en": "bus-stop sign, bus sign, blue bus sign, round bus sign, bus symbol",
          "text_ja": "青いバス停標識に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are blue bus-stop sign in the picture.",
          "text_en": "There is / are blue bus-stop sign in the picture.",
          "text_ja": "画像には青いバス停標識があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the blue bus-stop sign at the bus stop",
          "text_en": "the blue bus-stop sign at the bus stop",
          "text_ja": "バス停にある青いバス停標識"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible blue bus-stop sign in the morning scene",
          "text_en": "a clearly visible blue bus-stop sign in the morning scene",
          "text_ja": "朝の場面ではっきり見える青いバス停標識"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "vertical bus timetable",
      "label_ja": "支柱に付いた縦長の時刻表",
      "category": "text_sign",
      "importance": "primary",
      "description": "A narrow blue-bordered timetable is attached to the pole below the bus-stop sign.",
      "bounding_box_conceptual": [
        18,
        50,
        27,
        7
      ],
      "color": [
        "white",
        "blue",
        "gray",
        "black"
      ],
      "attributes": [
        "narrow",
        "vertical",
        "mounted",
        "informative"
      ],
      "action": [
        "showing times",
        "providing route information"
      ],
      "synonyms_and_related_words": [
        "vertical timetable",
        "bus schedule",
        "timetable display",
        "route timetable"
      ],
      "accepted_words": [
        "vertical timetable",
        "bus schedule",
        "timetable display",
        "route timetable"
      ],
      "common_typos": [
        "vetical timetable",
        "bu schedule",
        "tietable display"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "vertical bus timetable",
            "ja": "支柱に付いた縦長の時刻表"
          }
        ],
        "A2": [
          {
            "en": "bus schedule",
            "ja": "支柱に付いた縦長の時刻表を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "route timetable",
            "ja": "支柱に付いた縦長の時刻表を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "information panel",
            "ja": "支柱に付いた縦長の時刻表を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet vertical bus timetable touched by morning light",
          "ja": "朝の光に触れる静かな支柱に付いた縦長の時刻表"
        },
        {
          "en": "the vertical bus timetable forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る支柱に付いた縦長の時刻表"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "vertical timetable, bus schedule, timetable display, route timetable, schedule panel",
          "text_en": "vertical timetable, bus schedule, timetable display, route timetable, schedule panel",
          "text_ja": "支柱に付いた縦長の時刻表に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are vertical bus timetable in the picture.",
          "text_en": "There is / are vertical bus timetable in the picture.",
          "text_ja": "画像には支柱に付いた縦長の時刻表があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the vertical bus timetable at the bus stop",
          "text_en": "the vertical bus timetable at the bus stop",
          "text_ja": "バス停にある支柱に付いた縦長の時刻表"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible vertical bus timetable in the morning scene",
          "text_en": "a clearly visible vertical bus timetable in the morning scene",
          "text_ja": "朝の場面ではっきり見える支柱に付いた縦長の時刻表"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "yellow tactile paving",
      "label_ja": "黄色い点字ブロック",
      "category": "setting",
      "importance": "primary",
      "description": "A strip of yellow tactile paving with raised dots runs along the sidewalk near the curb.",
      "bounding_box_conceptual": [
        76,
        42,
        17,
        23
      ],
      "color": [
        "yellow",
        "gold"
      ],
      "attributes": [
        "textured",
        "raised",
        "bright",
        "safety-related"
      ],
      "action": [
        "guiding pedestrians",
        "marking the boarding area"
      ],
      "synonyms_and_related_words": [
        "tactile paving",
        "yellow tactile paving",
        "guidance blocks",
        "raised blocks"
      ],
      "accepted_words": [
        "tactile paving",
        "yellow tactile paving",
        "guidance blocks",
        "raised blocks"
      ],
      "common_typos": [
        "tatile paving",
        "yelow tactile paving",
        "gudance blocks"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "yellow tactile paving",
            "ja": "黄色い点字ブロック"
          }
        ],
        "A2": [
          {
            "en": "yellow tactile paving",
            "ja": "黄色い点字ブロックを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "raised blocks",
            "ja": "黄色い点字ブロックを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "tactile blocks",
            "ja": "黄色い点字ブロックを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet yellow tactile paving touched by morning light",
          "ja": "朝の光に触れる静かな黄色い点字ブロック"
        },
        {
          "en": "the yellow tactile paving forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る黄色い点字ブロック"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "tactile paving, yellow tactile paving, guidance blocks, raised blocks, safety tiles",
          "text_en": "tactile paving, yellow tactile paving, guidance blocks, raised blocks, safety tiles",
          "text_ja": "黄色い点字ブロックに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are yellow tactile paving in the picture.",
          "text_en": "There is / are yellow tactile paving in the picture.",
          "text_ja": "画像には黄色い点字ブロックがあります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the yellow tactile paving at the bus stop",
          "text_en": "the yellow tactile paving at the bus stop",
          "text_ja": "バス停にある黄色い点字ブロック"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible yellow tactile paving in the morning scene",
          "text_en": "a clearly visible yellow tactile paving in the morning scene",
          "text_ja": "朝の場面ではっきり見える黄色い点字ブロック"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "pedestrian crossing",
      "label_ja": "横断歩道",
      "category": "setting",
      "importance": "primary",
      "description": "Wide white stripes of a pedestrian crossing extend across the road in the right foreground.",
      "bounding_box_conceptual": [
        68,
        67,
        32,
        33
      ],
      "color": [
        "white",
        "gray"
      ],
      "attributes": [
        "striped",
        "wide",
        "painted",
        "safety-related"
      ],
      "action": [
        "allowing pedestrians to cross",
        "marking a safe route"
      ],
      "synonyms_and_related_words": [
        "crosswalk",
        "pedestrian crossing",
        "zebra crossing",
        "white road stripes"
      ],
      "accepted_words": [
        "crosswalk",
        "pedestrian crossing",
        "zebra crossing",
        "white road stripes"
      ],
      "common_typos": [
        "crsswalk",
        "peestrian crossing",
        "zera crossing"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pedestrian crossing",
            "ja": "横断歩道"
          }
        ],
        "A2": [
          {
            "en": "pedestrian crossing",
            "ja": "横断歩道を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "white road stripes",
            "ja": "横断歩道を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "road crossing",
            "ja": "横断歩道を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet pedestrian crossing touched by morning light",
          "ja": "朝の光に触れる静かな横断歩道"
        },
        {
          "en": "the pedestrian crossing forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る横断歩道"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "crosswalk, pedestrian crossing, zebra crossing, white road stripes, crossing lines",
          "text_en": "crosswalk, pedestrian crossing, zebra crossing, white road stripes, crossing lines",
          "text_ja": "横断歩道に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are pedestrian crossing in the picture.",
          "text_en": "There is / are pedestrian crossing in the picture.",
          "text_ja": "画像には横断歩道があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the pedestrian crossing at the bus stop",
          "text_en": "the pedestrian crossing at the bus stop",
          "text_ja": "バス停にある横断歩道"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible pedestrian crossing in the morning scene",
          "text_en": "a clearly visible pedestrian crossing in the morning scene",
          "text_ja": "朝の場面ではっきり見える横断歩道"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "quiet residential road",
      "label_ja": "静かな住宅道路",
      "category": "setting",
      "importance": "primary",
      "description": "A mostly empty residential road with yellow lane markings stretches into the distant neighborhood.",
      "bounding_box_conceptual": [
        34,
        55,
        66,
        45
      ],
      "color": [
        "gray",
        "yellow",
        "white"
      ],
      "attributes": [
        "quiet",
        "empty",
        "long",
        "residential",
        "sunlit"
      ],
      "action": [
        "extending into the distance",
        "carrying traffic"
      ],
      "synonyms_and_related_words": [
        "road",
        "street",
        "residential road",
        "quiet street"
      ],
      "accepted_words": [
        "road",
        "street",
        "residential road",
        "quiet street"
      ],
      "common_typos": [
        "rod",
        "steet",
        "reidential road"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "quiet residential road",
            "ja": "静かな住宅道路"
          }
        ],
        "A2": [
          {
            "en": "street",
            "ja": "静かな住宅道路を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "quiet street",
            "ja": "静かな住宅道路を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "two-lane road",
            "ja": "静かな住宅道路を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet quiet residential road touched by morning light",
          "ja": "朝の光に触れる静かな静かな住宅道路"
        },
        {
          "en": "the quiet residential road forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る静かな住宅道路"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "road, street, residential road, quiet street, empty road",
          "text_en": "road, street, residential road, quiet street, empty road",
          "text_ja": "静かな住宅道路に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are quiet residential road in the picture.",
          "text_en": "There is / are quiet residential road in the picture.",
          "text_ja": "画像には静かな住宅道路があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the quiet residential road at the bus stop",
          "text_en": "the quiet residential road at the bus stop",
          "text_ja": "バス停にある静かな住宅道路"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible quiet residential road in the morning scene",
          "text_en": "a clearly visible quiet residential road in the morning scene",
          "text_ja": "朝の場面ではっきり見える静かな住宅道路"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "sidewalk and curb",
      "label_ja": "歩道と縁石",
      "category": "setting",
      "importance": "primary",
      "description": "A paved sidewalk with rectangular tiles runs beside the road and ends at a raised curb.",
      "bounding_box_conceptual": [
        45,
        20,
        55,
        51
      ],
      "color": [
        "beige",
        "gray",
        "brown"
      ],
      "attributes": [
        "paved",
        "orderly",
        "raised",
        "sunlit"
      ],
      "action": [
        "supporting pedestrians",
        "separating people from traffic"
      ],
      "synonyms_and_related_words": [
        "sidewalk",
        "pavement",
        "footpath",
        "curb"
      ],
      "accepted_words": [
        "sidewalk",
        "pavement",
        "footpath",
        "curb"
      ],
      "common_typos": [
        "siewalk",
        "paement",
        "fotpath"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sidewalk and curb",
            "ja": "歩道と縁石"
          }
        ],
        "A2": [
          {
            "en": "pavement",
            "ja": "歩道と縁石を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "curb",
            "ja": "歩道と縁石を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "paved path",
            "ja": "歩道と縁石を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet sidewalk and curb touched by morning light",
          "ja": "朝の光に触れる静かな歩道と縁石"
        },
        {
          "en": "the sidewalk and curb forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る歩道と縁石"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sidewalk, pavement, footpath, curb, roadside walkway",
          "text_en": "sidewalk, pavement, footpath, curb, roadside walkway",
          "text_ja": "歩道と縁石に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are sidewalk and curb in the picture.",
          "text_en": "There is / are sidewalk and curb in the picture.",
          "text_ja": "画像には歩道と縁石があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the sidewalk and curb at the bus stop",
          "text_en": "the sidewalk and curb at the bus stop",
          "text_ja": "バス停にある歩道と縁石"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible sidewalk and curb in the morning scene",
          "text_en": "a clearly visible sidewalk and curb in the morning scene",
          "text_ja": "朝の場面ではっきり見える歩道と縁石"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "houses and neighborhood walls",
      "label_ja": "住宅と塀",
      "category": "setting",
      "importance": "secondary",
      "description": "Detached houses, light walls, fences, gates, and small gardens line the residential road.",
      "bounding_box_conceptual": [
        20,
        49,
        55,
        51
      ],
      "color": [
        "cream",
        "white",
        "brown",
        "gray"
      ],
      "attributes": [
        "residential",
        "low-rise",
        "orderly",
        "quiet"
      ],
      "action": [
        "lining the street",
        "framing the neighborhood"
      ],
      "synonyms_and_related_words": [
        "houses",
        "homes",
        "residential buildings",
        "detached houses"
      ],
      "accepted_words": [
        "houses",
        "homes",
        "residential buildings",
        "detached houses"
      ],
      "common_typos": [
        "hoses",
        "hoes",
        "reidential buildings"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "houses and neighborhood walls",
            "ja": "住宅と塀"
          }
        ],
        "A2": [
          {
            "en": "homes",
            "ja": "住宅と塀を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "detached houses",
            "ja": "住宅と塀を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "walls and fences",
            "ja": "住宅と塀を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet houses and neighborhood walls touched by morning light",
          "ja": "朝の光に触れる静かな住宅と塀"
        },
        {
          "en": "the houses and neighborhood walls forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る住宅と塀"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "houses, homes, residential buildings, detached houses, neighborhood homes",
          "text_en": "houses, homes, residential buildings, detached houses, neighborhood homes",
          "text_ja": "住宅と塀に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are houses and neighborhood walls in the picture.",
          "text_en": "There is / are houses and neighborhood walls in the picture.",
          "text_ja": "画像には住宅と塀があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the houses and neighborhood walls at the bus stop",
          "text_en": "the houses and neighborhood walls at the bus stop",
          "text_ja": "バス停にある住宅と塀"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible houses and neighborhood walls in the morning scene",
          "text_en": "a clearly visible houses and neighborhood walls in the morning scene",
          "text_ja": "朝の場面ではっきり見える住宅と塀"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "trees, shrubs, and flowers",
      "label_ja": "木々・低木・花",
      "category": "nature",
      "importance": "secondary",
      "description": "Green trees, leafy shrubs, and clusters of pink flowers surround the shelter and houses.",
      "bounding_box_conceptual": [
        0,
        10,
        64,
        61
      ],
      "color": [
        "green",
        "pink",
        "yellow"
      ],
      "attributes": [
        "leafy",
        "healthy",
        "sunlit",
        "soft"
      ],
      "action": [
        "filtering sunlight",
        "softening the environment"
      ],
      "synonyms_and_related_words": [
        "trees",
        "shrubs",
        "bushes",
        "green plants"
      ],
      "accepted_words": [
        "trees",
        "shrubs",
        "bushes",
        "green plants"
      ],
      "common_typos": [
        "tres",
        "shubs",
        "buhes"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "trees, shrubs, and flowers",
            "ja": "木々・低木・花"
          }
        ],
        "A2": [
          {
            "en": "shrubs",
            "ja": "木々・低木・花を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "green plants",
            "ja": "木々・低木・花を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "pink flowers",
            "ja": "木々・低木・花を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet trees, shrubs, and flowers touched by morning light",
          "ja": "朝の光に触れる静かな木々・低木・花"
        },
        {
          "en": "the trees, shrubs, and flowers forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る木々・低木・花"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "trees, shrubs, bushes, green plants, flowers",
          "text_en": "trees, shrubs, bushes, green plants, flowers",
          "text_ja": "木々・低木・花に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are trees, shrubs, and flowers in the picture.",
          "text_en": "There is / are trees, shrubs, and flowers in the picture.",
          "text_ja": "画像には木々・低木・花があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the trees, shrubs, and flowers at the bus stop",
          "text_en": "the trees, shrubs, and flowers at the bus stop",
          "text_ja": "バス停にある木々・低木・花"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible trees, shrubs, and flowers in the morning scene",
          "text_en": "a clearly visible trees, shrubs, and flowers in the morning scene",
          "text_ja": "朝の場面ではっきり見える木々・低木・花"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "utility poles and overhead wires",
      "label_ja": "電柱と電線",
      "category": "setting",
      "importance": "secondary",
      "description": "Tall utility poles and multiple overhead wires follow the road into the distance.",
      "bounding_box_conceptual": [
        0,
        71,
        59,
        29
      ],
      "color": [
        "gray",
        "black",
        "brown"
      ],
      "attributes": [
        "tall",
        "linear",
        "repetitive",
        "distant"
      ],
      "action": [
        "carrying cables",
        "creating perspective"
      ],
      "synonyms_and_related_words": [
        "utility poles",
        "telephone poles",
        "power poles",
        "overhead wires"
      ],
      "accepted_words": [
        "utility poles",
        "telephone poles",
        "power poles",
        "overhead wires"
      ],
      "common_typos": [
        "utlity poles",
        "teephone poles",
        "poer poles"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "utility poles and overhead wires",
            "ja": "電柱と電線"
          }
        ],
        "A2": [
          {
            "en": "telephone poles",
            "ja": "電柱と電線を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "overhead wires",
            "ja": "電柱と電線を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "electrical cables",
            "ja": "電柱と電線を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet utility poles and overhead wires touched by morning light",
          "ja": "朝の光に触れる静かな電柱と電線"
        },
        {
          "en": "the utility poles and overhead wires forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る電柱と電線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "utility poles, telephone poles, power poles, overhead wires, power lines",
          "text_en": "utility poles, telephone poles, power poles, overhead wires, power lines",
          "text_ja": "電柱と電線に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are utility poles and overhead wires in the picture.",
          "text_en": "There is / are utility poles and overhead wires in the picture.",
          "text_ja": "画像には電柱と電線があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the utility poles and overhead wires at the bus stop",
          "text_en": "the utility poles and overhead wires at the bus stop",
          "text_ja": "バス停にある電柱と電線"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible utility poles and overhead wires in the morning scene",
          "text_en": "a clearly visible utility poles and overhead wires in the morning scene",
          "text_ja": "朝の場面ではっきり見える電柱と電線"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "morning sunlight and long shadows",
      "label_ja": "朝の日差しと長い影",
      "category": "mood",
      "importance": "primary",
      "description": "Warm low-angle sunlight illuminates the student and neighborhood while casting long shadows across the sidewalk.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "gold",
        "warm white",
        "amber"
      ],
      "attributes": [
        "warm",
        "low-angle",
        "soft",
        "bright",
        "morning"
      ],
      "action": [
        "illuminating",
        "casting shadows",
        "creating a peaceful mood"
      ],
      "synonyms_and_related_words": [
        "morning sunlight",
        "warm sunlight",
        "golden light",
        "early sunlight"
      ],
      "accepted_words": [
        "morning sunlight",
        "warm sunlight",
        "golden light",
        "early sunlight"
      ],
      "common_typos": [
        "moning sunlight",
        "wam sunlight",
        "goden light"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "morning sunlight and long shadows",
            "ja": "朝の日差しと長い影"
          }
        ],
        "A2": [
          {
            "en": "warm sunlight",
            "ja": "朝の日差しと長い影を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "early sunlight",
            "ja": "朝の日差しと長い影を詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "morning light",
            "ja": "朝の日差しと長い影を客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet morning sunlight and long shadows touched by morning light",
          "ja": "朝の光に触れる静かな朝の日差しと長い影"
        },
        {
          "en": "the morning sunlight and long shadows forming part of an ordinary school commute",
          "ja": "日常の通学の一部を作る朝の日差しと長い影"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "morning sunlight, warm sunlight, golden light, early sunlight, long shadows",
          "text_en": "morning sunlight, warm sunlight, golden light, early sunlight, long shadows",
          "text_ja": "朝の日差しと長い影に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are morning sunlight and long shadows in the picture.",
          "text_en": "There is / are morning sunlight and long shadows in the picture.",
          "text_ja": "画像には朝の日差しと長い影があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the morning sunlight and long shadows at the bus stop",
          "text_en": "the morning sunlight and long shadows at the bus stop",
          "text_ja": "バス停にある朝の日差しと長い影"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible morning sunlight and long shadows in the morning scene",
          "text_en": "a clearly visible morning sunlight and long shadows in the morning scene",
          "text_ja": "朝の場面ではっきり見える朝の日差しと長い影"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "large timetable board inside the shelter",
      "content": "small route names and departure times, mostly unreadable",
      "description_ja": "待合所内の路線名と出発時刻が並ぶ大きな時刻表。細かな文字は判読困難。",
      "accepted_words": [
        "bus timetable",
        "route schedule",
        "departure times"
      ],
      "common_typos": [
        "bus time table",
        "rout schedule"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "time, bus, schedule, route",
          "text_en": "time, bus, schedule, route",
          "text_ja": "時間、バス、時刻表、路線"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The board shows bus times.",
          "text_en": "The board shows bus times.",
          "text_ja": "案内板はバスの時刻を示しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Although the small words cannot be read clearly, the board appears to show...",
          "text_en": "Although the small words cannot be read clearly, the board appears to show...",
          "text_ja": "小さな文字は明確に読めませんが、案内板は……を示しているようです。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "blue circular sign",
      "content": "white bus pictogram",
      "description_ja": "青い円形標識に描かれた白いバスの絵記号。",
      "accepted_words": [
        "bus symbol",
        "bus icon",
        "white bus pictogram"
      ],
      "common_typos": [
        "bus symble",
        "bus iccon"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bus, symbol, blue, white",
          "text_en": "bus, symbol, blue, white",
          "text_ja": "バス、記号、青、白"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The blue sign has a white bus symbol.",
          "text_en": "The blue sign has a white bus symbol.",
          "text_ja": "青い標識には白いバスの記号があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The pictogram makes it easy to understand that...",
          "text_en": "The pictogram makes it easy to understand that...",
          "text_ja": "絵記号によって……であることが分かりやすくなっています。"
        }
      ]
    },
    {
      "id": "text_003",
      "location": "vertical timetable below the sign",
      "content": "small route and service information, mostly unreadable",
      "description_ja": "標識下の縦長の路線・運行案内。細かな文字はほとんど判読できない。",
      "accepted_words": [
        "vertical timetable",
        "bus schedule panel",
        "route information"
      ],
      "common_typos": [
        "verticle timetable",
        "bus shedule pannel"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "schedule, time, route, information",
          "text_en": "schedule, time, route, information",
          "text_ja": "運行表、時間、路線、情報"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A timetable is attached to the pole.",
          "text_en": "A timetable is attached to the pole.",
          "text_ja": "時刻表が支柱に取り付けられています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Below the bus symbol, the narrow panel provides...",
          "text_en": "Below the bus symbol, the narrow panel provides...",
          "text_ja": "バス記号の下では細長いパネルが……を提供しています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "waiting for a bus",
      "description_ja": "バスを待っている",
      "involved_elements": [
        "element_001",
        "element_007",
        "element_008",
        "element_011"
      ],
      "synonyms": [
        "wait for a bus",
        "waiting for the bus",
        "stand at a bus stop",
        "wait for transportation"
      ],
      "accepted_words": [
        "wait for a bus",
        "waiting for the bus",
        "stand at a bus stop",
        "wait for transportation"
      ],
      "common_typos": [
        "wat for a bus",
        "wating for the bus",
        "stnd at a bus stop"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "waiting for a bus",
            "ja": "バスを待っている"
          }
        ],
        "A2": [
          {
            "en": "waiting for the bus",
            "ja": "バスを待っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "wait for transportation",
            "ja": "バスを待っているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "expect the bus",
            "ja": "バスを待っているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "waiting for a bus in the stillness of the morning",
          "ja": "朝の静けさの中でバスを待っている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "wait for a bus, waiting for the bus, stand at a bus stop, wait for transportation, wait beside the road",
          "text_en": "wait for a bus, waiting for the bus, stand at a bus stop, wait for transportation, wait beside the road",
          "text_ja": "バスを待っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is waiting for a bus.",
          "text_en": "The student is waiting for a bus.",
          "text_ja": "生徒はバスを待っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "waiting for a bus at a quiet bus stop",
          "text_en": "waiting for a bus at a quiet bus stop",
          "text_ja": "静かなバス停でバスを待っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "waiting for a bus while preparing for the school commute",
          "text_en": "waiting for a bus while preparing for the school commute",
          "text_ja": "通学の準備をしながらバスを待っている"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "looking down the road",
      "description_ja": "道路の奥を見ている",
      "involved_elements": [
        "element_001",
        "element_011",
        "element_015"
      ],
      "synonyms": [
        "look down the road",
        "watch the street",
        "look toward the distance",
        "check for the bus"
      ],
      "accepted_words": [
        "look down the road",
        "watch the street",
        "look toward the distance",
        "check for the bus"
      ],
      "common_typos": [
        "lok down the road",
        "wach the street",
        "lok toward the distance"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "looking down the road",
            "ja": "道路の奥を見ている"
          }
        ],
        "A2": [
          {
            "en": "watch the street",
            "ja": "道路の奥を見ているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "check for the bus",
            "ja": "道路の奥を見ているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "look for an approaching vehicle",
            "ja": "道路の奥を見ているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "looking down the road in the stillness of the morning",
          "ja": "朝の静けさの中で道路の奥を見ている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "look down the road, watch the street, look toward the distance, check for the bus, scan the road",
          "text_en": "look down the road, watch the street, look toward the distance, check for the bus, scan the road",
          "text_ja": "道路の奥を見ているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is looking down the road.",
          "text_en": "The student is looking down the road.",
          "text_ja": "生徒は道路の奥を見ている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "looking down the road at a quiet bus stop",
          "text_en": "looking down the road at a quiet bus stop",
          "text_ja": "静かなバス停で道路の奥を見ている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "looking down the road while preparing for the school commute",
          "text_en": "looking down the road while preparing for the school commute",
          "text_ja": "通学の準備をしながら道路の奥を見ている"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "standing beside the bus-stop sign",
      "description_ja": "バス停標識のそばに立っている",
      "involved_elements": [
        "element_001",
        "element_007",
        "element_008"
      ],
      "synonyms": [
        "stand beside the bus sign",
        "stand next to the timetable",
        "wait by the pole",
        "stand near the sign"
      ],
      "accepted_words": [
        "stand beside the bus sign",
        "stand next to the timetable",
        "wait by the pole",
        "stand near the sign"
      ],
      "common_typos": [
        "stnd beside the bus sign",
        "stnd next to the timetable",
        "wat by the pole"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "standing beside the bus-stop sign",
            "ja": "バス停標識のそばに立っている"
          }
        ],
        "A2": [
          {
            "en": "stand next to the timetable",
            "ja": "バス停標識のそばに立っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "stand near the sign",
            "ja": "バス停標識のそばに立っているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "stand at the boarding point",
            "ja": "バス停標識のそばに立っているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "standing beside the bus-stop sign in the stillness of the morning",
          "ja": "朝の静けさの中でバス停標識のそばに立っている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "stand beside the bus sign, stand next to the timetable, wait by the pole, stand near the sign, remain beside the schedule",
          "text_en": "stand beside the bus sign, stand next to the timetable, wait by the pole, stand near the sign, remain beside the schedule",
          "text_ja": "バス停標識のそばに立っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is standing beside the bus-stop sign.",
          "text_en": "The student is standing beside the bus-stop sign.",
          "text_ja": "生徒はバス停標識のそばに立っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "standing beside the bus-stop sign at a quiet bus stop",
          "text_en": "standing beside the bus-stop sign at a quiet bus stop",
          "text_ja": "静かなバス停でバス停標識のそばに立っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "standing beside the bus-stop sign while preparing for the school commute",
          "text_en": "standing beside the bus-stop sign while preparing for the school commute",
          "text_ja": "通学の準備をしながらバス停標識のそばに立っている"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "holding the backpack strap",
      "description_ja": "リュックの肩ひもを握っている",
      "involved_elements": [
        "element_001",
        "element_003"
      ],
      "synonyms": [
        "hold the backpack strap",
        "grip the shoulder strap",
        "carry a backpack",
        "hold his bag"
      ],
      "accepted_words": [
        "hold the backpack strap",
        "grip the shoulder strap",
        "carry a backpack",
        "hold his bag"
      ],
      "common_typos": [
        "hod the backpack strap",
        "grp the shoulder strap",
        "cary a backpack"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "holding the backpack strap",
            "ja": "リュックの肩ひもを握っている"
          }
        ],
        "A2": [
          {
            "en": "grip the shoulder strap",
            "ja": "リュックの肩ひもを握っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "hold his bag",
            "ja": "リュックの肩ひもを握っているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "keep one hand on the strap",
            "ja": "リュックの肩ひもを握っているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "holding the backpack strap in the stillness of the morning",
          "ja": "朝の静けさの中でリュックの肩ひもを握っている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hold the backpack strap, grip the shoulder strap, carry a backpack, hold his bag, support the backpack",
          "text_en": "hold the backpack strap, grip the shoulder strap, carry a backpack, hold his bag, support the backpack",
          "text_ja": "リュックの肩ひもを握っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is holding the backpack strap.",
          "text_en": "The student is holding the backpack strap.",
          "text_ja": "生徒はリュックの肩ひもを握っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "holding the backpack strap at a quiet bus stop",
          "text_en": "holding the backpack strap at a quiet bus stop",
          "text_ja": "静かなバス停でリュックの肩ひもを握っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "holding the backpack strap while preparing for the school commute",
          "text_en": "holding the backpack strap while preparing for the school commute",
          "text_ja": "通学の準備をしながらリュックの肩ひもを握っている"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "keeping one hand in his pocket",
      "description_ja": "片手をポケットに入れている",
      "involved_elements": [
        "element_001",
        "element_002"
      ],
      "synonyms": [
        "keep one hand in his pocket",
        "put his hand in his pocket",
        "stand with a hand in his pocket",
        "rest one hand in a trouser pocket"
      ],
      "accepted_words": [
        "keep one hand in his pocket",
        "put his hand in his pocket",
        "stand with a hand in his pocket",
        "rest one hand in a trouser pocket"
      ],
      "common_typos": [
        "kep one hand in his pocket",
        "pu his hand in his pocket",
        "stnd with a hand in his pocket"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "keeping one hand in his pocket",
            "ja": "片手をポケットに入れている"
          }
        ],
        "A2": [
          {
            "en": "put his hand in his pocket",
            "ja": "片手をポケットに入れているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "rest one hand in a trouser pocket",
            "ja": "片手をポケットに入れているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "relax one arm",
            "ja": "片手をポケットに入れているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "keeping one hand in his pocket in the stillness of the morning",
          "ja": "朝の静けさの中で片手をポケットに入れている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "keep one hand in his pocket, put his hand in his pocket, stand with a hand in his pocket, rest one hand in a trouser pocket, keep his hand inside",
          "text_en": "keep one hand in his pocket, put his hand in his pocket, stand with a hand in his pocket, rest one hand in a trouser pocket, keep his hand inside",
          "text_ja": "片手をポケットに入れているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is keeping one hand in his pocket.",
          "text_en": "The student is keeping one hand in his pocket.",
          "text_ja": "生徒は片手をポケットに入れている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "keeping one hand in his pocket at a quiet bus stop",
          "text_en": "keeping one hand in his pocket at a quiet bus stop",
          "text_ja": "静かなバス停で片手をポケットに入れている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "keeping one hand in his pocket while preparing for the school commute",
          "text_en": "keeping one hand in his pocket while preparing for the school commute",
          "text_ja": "通学の準備をしながら片手をポケットに入れている"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "checking the timetable",
      "description_ja": "時刻表を確認している可能性がある",
      "involved_elements": [
        "element_006",
        "element_008",
        "element_001"
      ],
      "synonyms": [
        "check the timetable",
        "read the bus schedule",
        "look at departure times",
        "confirm the bus time"
      ],
      "accepted_words": [
        "check the timetable",
        "read the bus schedule",
        "look at departure times",
        "confirm the bus time"
      ],
      "common_typos": [
        "chck the timetable",
        "red the bus schedule",
        "lok at departure times"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "checking the timetable",
            "ja": "時刻表を確認している可能性がある"
          }
        ],
        "A2": [
          {
            "en": "read the bus schedule",
            "ja": "時刻表を確認している可能性があるを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "confirm the bus time",
            "ja": "時刻表を確認している可能性があるを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "check when the bus arrives",
            "ja": "時刻表を確認している可能性があるを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "checking the timetable in the stillness of the morning",
          "ja": "朝の静けさの中で時刻表を確認している可能性がある"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "check the timetable, read the bus schedule, look at departure times, confirm the bus time, use route information",
          "text_en": "check the timetable, read the bus schedule, look at departure times, confirm the bus time, use route information",
          "text_ja": "時刻表を確認している可能性があるに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is checking the timetable.",
          "text_en": "The student is checking the timetable.",
          "text_ja": "生徒は時刻表を確認している可能性がある。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "checking the timetable at a quiet bus stop",
          "text_en": "checking the timetable at a quiet bus stop",
          "text_ja": "静かなバス停で時刻表を確認している可能性がある"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "checking the timetable while preparing for the school commute",
          "text_en": "checking the timetable while preparing for the school commute",
          "text_ja": "通学の準備をしながら時刻表を確認している可能性がある"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "standing instead of sitting",
      "description_ja": "座らずに立って待っている",
      "involved_elements": [
        "element_001",
        "element_005"
      ],
      "synonyms": [
        "stand instead of sit",
        "wait while standing",
        "remain on his feet",
        "stand near the bench"
      ],
      "accepted_words": [
        "stand instead of sit",
        "wait while standing",
        "remain on his feet",
        "stand near the bench"
      ],
      "common_typos": [
        "stnd instead of sit",
        "wat while standing",
        "reain on his feet"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "standing instead of sitting",
            "ja": "座らずに立って待っている"
          }
        ],
        "A2": [
          {
            "en": "wait while standing",
            "ja": "座らずに立って待っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "stand near the bench",
            "ja": "座らずに立って待っているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "wait beside an empty bench",
            "ja": "座らずに立って待っているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "standing instead of sitting in the stillness of the morning",
          "ja": "朝の静けさの中で座らずに立って待っている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "stand instead of sit, wait while standing, remain on his feet, stand near the bench, choose not to sit",
          "text_en": "stand instead of sit, wait while standing, remain on his feet, stand near the bench, choose not to sit",
          "text_ja": "座らずに立って待っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is standing instead of sitting.",
          "text_en": "The student is standing instead of sitting.",
          "text_ja": "生徒は座らずに立って待っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "standing instead of sitting at a quiet bus stop",
          "text_en": "standing instead of sitting at a quiet bus stop",
          "text_ja": "静かなバス停で座らずに立って待っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "standing instead of sitting while preparing for the school commute",
          "text_en": "standing instead of sitting while preparing for the school commute",
          "text_ja": "通学の準備をしながら座らずに立って待っている"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "morning light casting long shadows",
      "description_ja": "朝の光が長い影を落としている",
      "involved_elements": [
        "element_016",
        "element_001",
        "element_012",
        "element_014"
      ],
      "synonyms": [
        "sunlight casts long shadows",
        "morning light fills the street",
        "golden light illuminates the scene",
        "shadows stretch across the sidewalk"
      ],
      "accepted_words": [
        "sunlight casts long shadows",
        "morning light fills the street",
        "golden light illuminates the scene",
        "shadows stretch across the sidewalk"
      ],
      "common_typos": [
        "sulight casts long shadows",
        "moning light fills the street",
        "goden light illuminates the scene"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "morning light casting long shadows",
            "ja": "朝の光が長い影を落としている"
          }
        ],
        "A2": [
          {
            "en": "morning light fills the street",
            "ja": "朝の光が長い影を落としているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "shadows stretch across the sidewalk",
            "ja": "朝の光が長い影を落としているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "warm light covers the road",
            "ja": "朝の光が長い影を落としているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "morning light casting long shadows in the stillness of the morning",
          "ja": "朝の静けさの中で朝の光が長い影を落としている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sunlight casts long shadows, morning light fills the street, golden light illuminates the scene, shadows stretch across the sidewalk, the sun shines from a low angle",
          "text_en": "sunlight casts long shadows, morning light fills the street, golden light illuminates the scene, shadows stretch across the sidewalk, the sun shines from a low angle",
          "text_ja": "朝の光が長い影を落としているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is morning light casting long shadows.",
          "text_en": "The student is morning light casting long shadows.",
          "text_ja": "生徒は朝の光が長い影を落としている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "morning light casting long shadows at a quiet bus stop",
          "text_en": "morning light casting long shadows at a quiet bus stop",
          "text_ja": "静かなバス停で朝の光が長い影を落としている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "morning light casting long shadows while preparing for the school commute",
          "text_en": "morning light casting long shadows while preparing for the school commute",
          "text_ja": "通学の準備をしながら朝の光が長い影を落としている"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "commuting to school by bus",
      "description_ja": "バスで通学しようとしている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_007",
        "element_011"
      ],
      "synonyms": [
        "commute to school",
        "go to school by bus",
        "travel to school",
        "use public transportation"
      ],
      "accepted_words": [
        "commute to school",
        "go to school by bus",
        "travel to school",
        "use public transportation"
      ],
      "common_typos": [
        "comute to school",
        "goto school by bus",
        "trvel to school"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "commuting to school by bus",
            "ja": "バスで通学しようとしている"
          }
        ],
        "A2": [
          {
            "en": "go to school by bus",
            "ja": "バスで通学しようとしているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "use public transportation",
            "ja": "バスで通学しようとしているを詳しく描写する表現"
          }
        ],
        "B2": [
          {
            "en": "begin his school commute",
            "ja": "バスで通学しようとしているを客観的・高度に表す表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "commuting to school by bus in the stillness of the morning",
          "ja": "朝の静けさの中でバスで通学しようとしている"
        },
        {
          "en": "turning an ordinary commute into a moment of quiet expectation",
          "ja": "普通の通学を静かな期待の瞬間へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "commute to school, go to school by bus, travel to school, use public transportation, take the bus to school",
          "text_en": "commute to school, go to school by bus, travel to school, use public transportation, take the bus to school",
          "text_ja": "バスで通学しようとしているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The student is commuting to school by bus.",
          "text_en": "The student is commuting to school by bus.",
          "text_ja": "生徒はバスで通学しようとしている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "commuting to school by bus at a quiet bus stop",
          "text_en": "commuting to school by bus at a quiet bus stop",
          "text_ja": "静かなバス停でバスで通学しようとしている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "commuting to school by bus while preparing for the school commute",
          "text_en": "commuting to school by bus while preparing for the school commute",
          "text_ja": "通学の準備をしながらバスで通学しようとしている"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "student",
      "relationship": "to the right of",
      "object": "bus shelter",
      "example_beginner": "The student is to the right of the shelter.",
      "example_intermediate": "The student stands immediately to the right of the glass shelter."
    },
    {
      "subject": "student",
      "relationship": "to the left of",
      "object": "bus-stop pole",
      "example_beginner": "The student is to the left of the pole.",
      "example_intermediate": "The student stands slightly to the left of the blue bus-stop sign."
    },
    {
      "subject": "wooden bench",
      "relationship": "inside",
      "object": "bus shelter",
      "example_beginner": "The bench is inside the shelter.",
      "example_intermediate": "The wooden bench is positioned inside the covered glass shelter."
    },
    {
      "subject": "large timetable",
      "relationship": "on",
      "object": "shelter wall",
      "example_beginner": "The timetable is on the wall.",
      "example_intermediate": "A large timetable is mounted on the inner wall of the shelter."
    },
    {
      "subject": "blue bus sign",
      "relationship": "above",
      "object": "vertical timetable",
      "example_beginner": "The sign is above the timetable.",
      "example_intermediate": "The circular bus symbol is mounted above the narrow timetable panel."
    },
    {
      "subject": "tactile paving",
      "relationship": "beside",
      "object": "curb",
      "example_beginner": "The yellow blocks are beside the curb.",
      "example_intermediate": "The tactile paving runs beside the raised curb near the boarding point."
    },
    {
      "subject": "pedestrian crossing",
      "relationship": "in front of",
      "object": "road",
      "example_beginner": "The crosswalk is in the foreground.",
      "example_intermediate": "The pedestrian crossing fills the right foreground before the road continues."
    },
    {
      "subject": "student",
      "relationship": "on",
      "object": "sidewalk",
      "example_beginner": "The student is on the sidewalk.",
      "example_intermediate": "The student stands on the paved sidewalk between the shelter and curb."
    },
    {
      "subject": "road",
      "relationship": "to the right of",
      "object": "student",
      "example_beginner": "The road is to the right.",
      "example_intermediate": "The residential road extends to the right of the waiting student."
    },
    {
      "subject": "houses",
      "relationship": "along",
      "object": "road",
      "example_beginner": "The houses are along the road.",
      "example_intermediate": "Detached houses, walls, and gates line both sides of the street."
    },
    {
      "subject": "utility poles",
      "relationship": "along",
      "object": "right side of road",
      "example_beginner": "The poles are along the road.",
      "example_intermediate": "Utility poles and wires repeat along the right side of the street."
    },
    {
      "subject": "plants",
      "relationship": "around",
      "object": "shelter and houses",
      "example_beginner": "Plants are around the bus stop.",
      "example_intermediate": "Trees, shrubs, and flowers surround the shelter and homes."
    },
    {
      "subject": "backpack",
      "relationship": "behind",
      "object": "student's shoulder",
      "example_beginner": "The backpack is behind his shoulder.",
      "example_intermediate": "The navy backpack rests behind the student's upper body."
    },
    {
      "subject": "student's hand",
      "relationship": "on",
      "object": "backpack strap",
      "example_beginner": "His hand is on the strap.",
      "example_intermediate": "One hand grips the backpack strap near his chest."
    },
    {
      "subject": "other hand",
      "relationship": "inside",
      "object": "trouser pocket",
      "example_beginner": "His other hand is in his pocket.",
      "example_intermediate": "The other hand rests inside his gray trouser pocket."
    },
    {
      "subject": "long shadow",
      "relationship": "across",
      "object": "sidewalk",
      "example_beginner": "The shadow is across the sidewalk.",
      "example_intermediate": "A long morning shadow stretches across the tiled sidewalk."
    }
  ],
  "adjective_library": {
    "student": [
      "young",
      "uniformed",
      "patient",
      "calm",
      "attentive",
      "alone",
      "prepared",
      "formal",
      "quiet",
      "responsible"
    ],
    "uniform": [
      "navy",
      "gray",
      "formal",
      "layered",
      "neat",
      "traditional",
      "school-related",
      "well-fitted"
    ],
    "bus_stop": [
      "covered",
      "glass-walled",
      "metal-framed",
      "organized",
      "quiet",
      "public",
      "roadside",
      "well-marked",
      "accessible"
    ],
    "road": [
      "quiet",
      "empty",
      "residential",
      "sunlit",
      "long",
      "paved",
      "orderly",
      "two-lane",
      "peaceful"
    ],
    "morning": [
      "warm",
      "golden",
      "fresh",
      "early",
      "soft",
      "sunny",
      "still",
      "hopeful",
      "calm"
    ],
    "mood": [
      "peaceful",
      "patient",
      "anticipatory",
      "reflective",
      "everyday",
      "safe",
      "quiet",
      "warm",
      "orderly",
      "gentle"
    ]
  },
  "preposition_library": [
    {
      "preposition": "at",
      "meaning_ja": "〜で",
      "example": "The student is waiting at a bus stop."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に・〜で",
      "example": "He is standing on the sidewalk."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "He is standing beside the bus-stop sign."
    },
    {
      "preposition": "next to",
      "meaning_ja": "〜のすぐ隣に",
      "example": "The timetable is next to the student."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The tactile paving is near the curb."
    },
    {
      "preposition": "inside",
      "meaning_ja": "〜の中に",
      "example": "A bench is inside the shelter."
    },
    {
      "preposition": "outside",
      "meaning_ja": "〜の外に",
      "example": "The student is outside the shelter."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The shelter is to the left of the student."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The road is to the right of the student."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The crosswalk is in front of the bus stop."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The backpack is behind his shoulder."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "The bus sign is above the timetable."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "The timetable is below the symbol."
    },
    {
      "preposition": "along",
      "meaning_ja": "〜に沿って",
      "example": "Utility poles run along the street."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って",
      "example": "The crossing extends across the road."
    },
    {
      "preposition": "toward",
      "meaning_ja": "〜の方向へ",
      "example": "He is looking toward the road."
    },
    {
      "preposition": "from",
      "meaning_ja": "〜から",
      "example": "The bus may arrive from the distance."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "He stands between the shelter and sign."
    },
    {
      "preposition": "under",
      "meaning_ja": "〜の下で",
      "example": "The bench is under the shelter roof."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周囲に",
      "example": "Plants grow around the bus stop."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Singular subject + is + present participle",
      "label_ja": "単数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "1人の人物が今している動作を表す。",
      "examples": [
        "A student is waiting for a bus.",
        "He is looking down the road.",
        "He is holding his backpack strap."
      ],
      "hints": [
        "a studentやheにはisを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "バス停や道路にある物を説明する。",
      "examples": [
        "There is a bus shelter on the left.",
        "There is a blue bus sign beside him.",
        "There are many houses along the road."
      ],
      "hints": [
        "単数はThere is、複数はThere areです。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物や雰囲気の状態を表す。",
      "examples": [
        "The student is calm.",
        "The road is quiet.",
        "The morning light is warm."
      ],
      "hints": [
        "calm, quiet, warmなどを使えます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "人物や設備の位置を説明する。",
      "examples": [
        "The student is beside the sign.",
        "The bench is inside the shelter.",
        "The crosswalk is in the foreground."
      ],
      "hints": [
        "beside, inside, in front ofなどを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + have / has + noun",
      "label_ja": "have・hasによる所有",
      "level": "beginner",
      "purpose_ja": "持ち物や設備を表す。",
      "examples": [
        "The student has a navy backpack.",
        "The shelter has a bench.",
        "The stop has two timetables."
      ],
      "hints": [
        "三人称単数にはhasを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "while + clause",
      "label_ja": "whileによる同時進行",
      "level": "intermediate",
      "purpose_ja": "待つ動作と見る動作をつなぐ。",
      "examples": [
        "He looks down the road while he waits.",
        "He holds the strap while standing beside the sign.",
        "Shadows stretch while the sun shines."
      ],
      "hints": [
        "whileは「〜している間に」です。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "who / which / that relative clause",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物へ追加情報を加える。",
      "examples": [
        "The student who is wearing a blazer is waiting.",
        "The shelter, which has glass walls, contains a bench.",
        "The road that extends into the distance is empty."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "look / seem + adjective",
      "label_ja": "look・seemで印象を表す",
      "level": "intermediate",
      "purpose_ja": "画像から受ける印象を表す。",
      "examples": [
        "The student looks calm.",
        "The street seems peaceful.",
        "The morning appears warm."
      ],
      "hints": [
        "look + 形容詞、seem + 形容詞を使います。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "may / might + base verb",
      "label_ja": "may・mightによる推量",
      "level": "intermediate",
      "purpose_ja": "見えないバスや次の行動を推測する。",
      "examples": [
        "The bus may arrive soon.",
        "He might be going to school.",
        "He may have checked the timetable."
      ],
      "hints": [
        "mayやmightの後ろには動詞の原形を置きます。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "because / so that + clause",
      "label_ja": "理由・目的を表す節",
      "level": "intermediate",
      "purpose_ja": "見る理由や設備の目的を説明する。",
      "examples": [
        "He looks down the road because he is waiting.",
        "The timetable is displayed so that passengers can check it.",
        "Tactile paving is installed so that people can move safely."
      ],
      "hints": [
        "becauseは理由、so thatは目的です。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "although / even though + clause",
      "label_ja": "譲歩表現",
      "level": "intermediate",
      "purpose_ja": "ベンチが空でも立つことを対比する。",
      "examples": [
        "Although the bench is empty, he remains standing.",
        "Even though the road is quiet, he keeps watching it.",
        "Although the bus is not visible, he is ready."
      ],
      "hints": [
        "althoughは「〜だけれども」です。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の同時動作を簡潔に表す。",
      "examples": [
        "Holding his backpack strap, he looks down the road.",
        "Standing beside the sign, he waits quietly.",
        "Wearing a uniform, he prepares for school."
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
      "purpose_ja": "背景や状態を文頭で表す。",
      "examples": [
        "Surrounded by houses and trees, the stop feels peaceful.",
        "Illuminated by sunlight, the road appears warm.",
        "Mounted below the sign, the timetable is easy to find."
      ],
      "hints": [
        "Surrounded, Illuminated, Mountedなどから始めます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "方法を説明する。",
      "examples": [
        "By checking the timetable, he can estimate arrival.",
        "By standing near the sign, he is easy to see.",
        "By watching the road, he can notice the bus early."
      ],
      "hints": [
        "By + 動詞ingで「〜することで」です。"
      ]
    },
    {
      "id": "grammar_015",
      "pattern": "not only A but also B",
      "label_ja": "not only A but also B",
      "level": "advanced",
      "purpose_ja": "複数の役割を強調する。",
      "examples": [
        "The shelter provides not only a roof but also seating.",
        "The light shows not only time but also mood.",
        "The backpack indicates not only school but also destination."
      ],
      "hints": [
        "AとBには同じ種類の語句を置きます。"
      ]
    },
    {
      "id": "grammar_016",
      "pattern": "It looks as though / It seems that",
      "label_ja": "推量表現",
      "level": "advanced",
      "purpose_ja": "画像から推測する。",
      "examples": [
        "It looks as though he expects the bus soon.",
        "It seems that he is commuting to school.",
        "It looks as though the road has little traffic."
      ],
      "hints": [
        "断定できない場面に使います。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "The fact that ... suggests that ...",
      "label_ja": "証拠からの推論",
      "level": "advanced",
      "purpose_ja": "見える事実から推測を組み立てる。",
      "examples": [
        "The fact that he wears a uniform suggests that he is going to school.",
        "The fact that he stands suggests that the bus may arrive soon.",
        "The fact that shadows are long suggests that it is early."
      ],
      "hints": [
        "見える事実と推測を論理的につなげます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There is ______.",
        "example": "There is a male high school student."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "He is at ______.",
        "example": "He is at a bus stop."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "He is ______ing.",
        "example": "He is waiting for a bus."
      },
      {
        "step": 4,
        "question_ja": "どこを見ていますか？",
        "template": "He is looking ______.",
        "example": "He is looking down the road."
      },
      {
        "step": 5,
        "question_ja": "何を持っていますか？",
        "template": "He has ______.",
        "example": "He has a navy backpack."
      },
      {
        "step": 6,
        "question_ja": "周りには何がありますか？",
        "template": "There is / are ______ nearby.",
        "example": "There is a shelter, a bench, and a timetable nearby."
      },
      {
        "step": 7,
        "question_ja": "雰囲気は？",
        "template": "The scene is ______.",
        "example": "The scene is quiet, warm, and peaceful."
      }
    ],
    "intermediate": [
      {
        "template": "A male student is ______ing at ______.",
        "example": "A male student is waiting for a bus at a neighborhood bus stop."
      },
      {
        "template": "He is wearing ______ and carrying ______.",
        "example": "He is wearing a uniform and carrying a navy backpack."
      },
      {
        "template": "While he waits, he ______.",
        "example": "While he waits, he looks down the road."
      },
      {
        "template": "On the left, there is ______.",
        "example": "On the left, there is a glass shelter with a bench."
      },
      {
        "template": "Beside him, ______.",
        "example": "Beside him, a blue bus sign stands above a timetable."
      },
      {
        "template": "In the foreground, ______.",
        "example": "In the foreground, tactile paving and a crosswalk are visible."
      },
      {
        "template": "It looks as though ______.",
        "example": "It looks as though he expects the bus soon."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding his backpack strap, the student watches the road."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by houses and trees, the bus stop feels peaceful."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The student who is wearing a blazer appears to be commuting to school."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The timetable, which is mounted below the sign, provides service information."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By watching the road, he can notice the bus early."
      },
      {
        "template": "Although / even though.",
        "example": "Although the bench is empty, he remains standing."
      },
      {
        "template": "The fact that ... suggests that ...",
        "example": "The fact that the shadows are long suggests that it is early morning."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A boy is at a bus stop.",
      "He is waiting for a bus.",
      "He is wearing a school uniform.",
      "He has a navy backpack.",
      "He is looking down the road.",
      "There is a glass bus shelter on the left.",
      "There is a wooden bench inside.",
      "A blue bus sign is beside him.",
      "There is a timetable under the sign.",
      "A crosswalk is in the foreground.",
      "The morning is sunny and quiet."
    ],
    "intermediate": [
      "A male high school student is waiting for a bus in a quiet residential neighborhood.",
      "He wears a navy blazer, a gray sweater vest, a striped tie, gray trousers, and black shoes.",
      "A navy backpack hangs from one shoulder, and he holds the strap near his chest.",
      "His other hand is in his pocket while he looks down the road.",
      "A glass shelter with an empty wooden bench and timetable stands on the left.",
      "Beside him, a blue bus sign stands above a narrow route schedule.",
      "Yellow tactile paving marks the edge of the sidewalk.",
      "A white crosswalk and quiet road fill the right side.",
      "Houses, trees, utility poles, and wires extend into the distance.",
      "Warm morning sunlight creates long shadows and a peaceful atmosphere."
    ],
    "advanced": [
      "Standing beside a blue bus-stop sign, a uniformed student waits alone on a sunlit residential sidewalk.",
      "He wears a navy blazer over a gray sweater vest and white shirt, while a striped tie and gray trousers complete his formal school outfit.",
      "Holding the strap of a dark navy backpack with one hand and resting the other inside his pocket, he turns toward the empty road.",
      "His gaze suggests that he is checking whether the scheduled bus is approaching.",
      "To his left, a glass-walled shelter contains an empty wooden bench and a large timetable board.",
      "A second narrow schedule panel is mounted below the round blue bus symbol.",
      "Yellow tactile paving and a raised curb define the boarding area, while a white pedestrian crossing cuts across the road.",
      "Detached houses, trees, flowers, utility poles, and wires establish the quiet residential setting.",
      "Because the bus is absent, waiting becomes the principal action.",
      "Warm low-angle sunlight casts long shadows that indicate an early morning commute."
    ]
  },
  "full_description_support": {
    "beginner_model": "A male high school student is at a bus stop. He is waiting for a bus. He is wearing a navy school uniform with a gray sweater vest and striped tie. He has gray trousers, black shoes, and a navy backpack. He is holding the backpack strap and looking down the road. There is a glass shelter on the left. An empty wooden bench and a timetable are inside. A blue bus sign and another timetable are beside the student. Yellow tactile paving is near the curb, and a white crosswalk is in the foreground. There are houses, trees, poles, and wires along the quiet road. The morning sunlight is warm, and the scene is calm.",
    "intermediate_model": "A male high school student is waiting alone at a bus stop in a quiet residential area on a sunny morning. He wears a navy blazer over a gray sweater vest and white shirt, together with a striped tie, gray trousers, and black shoes. A dark navy backpack hangs from one shoulder, and he holds its strap while keeping his other hand in his pocket. He turns his head and looks down the road, probably checking whether the bus is coming. On the left, a glass shelter with a dark metal frame and curved roof contains an empty wooden bench and a large timetable. Beside him, a blue circular bus sign stands above a narrow timetable panel. Yellow tactile paving runs beside the curb, and a pedestrian crossing appears in the foreground. The almost empty road continues past detached houses, trees, walls, utility poles, and wires. Warm low-angle sunlight creates long shadows and a hopeful atmosphere.",
    "advanced_model": "In the warm light of an early morning, a male high school student stands alone at a marked bus stop in a quiet residential neighborhood. Dressed in a navy blazer, gray sweater vest, white shirt, striped tie, gray trousers, and black shoes, he appears prepared for a formal school day. A dark navy backpack hangs from one shoulder, and he grips the strap near his chest while leaving his other hand inside his pocket. Although his body faces forward, his head turns toward the road, transforming the empty street into narrative space from which the unseen bus may arrive. To his left, a covered shelter combines dark metal framing, transparent glass walls, a curved roof, an empty wooden bench, and a timetable containing rows of small entries. Beside him, a tall pole supports a standardized blue bus symbol and a second narrow schedule panel, identifying the boarding point. Yellow tactile paving marks the accessible waiting area near the curb, while a broad pedestrian crossing cuts across the road. The road remains almost empty and extends toward houses, walls, trees, utility poles, and converging wires. Because the bus is absent, waiting becomes the central action, expressed through the student's still posture, attentive gaze, and readiness to move. The unused bench may suggest that he expects only a short delay, while his uniform and backpack support the inference that he is beginning his daily school commute. Low-angle sunlight casts long shadows that identify the time as early morning and make the ordinary transition between home and school feel calm and reflective."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A boy is at a bus stop. He is waiting for a bus.",
        "ja": "男の子がバス停にいます。バスを待っています。",
        "focus": "be動詞と現在進行形で人物・場所・動作を表す。"
      },
      {
        "en": "He is wearing a school uniform and carrying a backpack.",
        "ja": "彼は学校の制服を着てリュックを持っています。",
        "focus": "andで2つの動作をつなぐ。"
      },
      {
        "en": "There is a shelter, a bench, a bus sign, and a timetable.",
        "ja": "待合所、ベンチ、バス標識、時刻表があります。",
        "focus": "There isで設備を列挙する。"
      }
    ],
    "A2": [
      {
        "en": "A male student is standing beside a bus-stop sign and looking down the quiet road.",
        "ja": "男子生徒がバス停標識のそばに立ち、静かな道路の奥を見ています。",
        "focus": "besideとandを使う。"
      },
      {
        "en": "He is holding his backpack strap while he waits for the bus.",
        "ja": "彼はバスを待ちながらリュックの肩ひもを握っています。",
        "focus": "whileで同時進行を表す。"
      },
      {
        "en": "Warm morning sunlight is creating long shadows across the sidewalk.",
        "ja": "温かな朝の日差しが歩道に長い影を作っています。",
        "focus": "現在進行形で光を描写する。"
      }
    ],
    "B1": [
      {
        "en": "The student, who is wearing a formal school uniform, appears to be checking whether the bus is approaching.",
        "ja": "正式な制服を着た生徒は、バスが近づいているか確認しているようです。",
        "focus": "who、appear to、whetherを使う。"
      },
      {
        "en": "Although the wooden bench is empty, he remains standing beside the timetable and looks ready to board.",
        "ja": "木製ベンチは空いていますが、彼は時刻表のそばに立ち、乗車準備ができているようです。",
        "focus": "Althoughで対比する。"
      },
      {
        "en": "The uniform, backpack, and early light suggest that he is beginning his daily commute to school.",
        "ja": "制服、リュック、早朝の光から、毎日の通学を始めるところだと考えられます。",
        "focus": "suggest thatで推論する。"
      }
    ],
    "B2": [
      {
        "en": "Holding the shoulder strap of his navy backpack, the student watches the empty road from a clearly marked boarding point.",
        "ja": "濃紺のリュックの肩ひもを握り、生徒は明確に示された乗車地点から空いた道路を見ています。",
        "focus": "分詞構文と高度な場所表現を使う。"
      },
      {
        "en": "The absence of the bus, which has not yet entered the frame, makes anticipation rather than movement the scene's central action.",
        "ja": "まだ画面内にないバスの不在により、移動ではなく期待が場面の中心動作になっています。",
        "focus": "非制限用法whichと抽象名詞を使う。"
      },
      {
        "en": "Illuminated by low-angle sunlight and surrounded by quiet homes and greenery, the ordinary commute acquires a reflective and hopeful quality.",
        "ja": "低い日差しに照らされ、静かな住宅と緑に囲まれ、普通の通学が内省的で希望のある性質を帯びています。",
        "focus": "過去分詞構文と雰囲気描写を使う。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene017Data = scene017Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene017Data;
}
