"use strict";

const scene011Data = {
  "id": "scene_011",
  "image_id": "011.webp",
  "overall_description_ja": "青空と白い雲が広がる明るい公園で、3人の若者が芝生の上でフリスビーをしている。左の男性が右手を伸ばしてフリスビーを投げ、中央の男性が笑顔で走りながら受け取ろうとしている。右の女性も両手を広げてゲームに参加している。背景には多くの人々、木々、高層ビル、塔が見え、手前にはチェック柄のピクニックシート、黒いバッグ、水のボトル、衣類が置かれている。晴天、広い芝生、活発な動きが、明るく健康的で開放感のある雰囲気を作っている。",
  "overall_description_en": "Three young people are playing frisbee on a wide grassy field in a sunny city park. The man on the left has just thrown the frisbee with his right hand, while the man in the center is running forward with a smile and preparing to catch it. The woman on the right is also reaching out with both arms and joining the game. Many other people, trees, tall buildings, and a tower can be seen in the background. In the foreground, a checked picnic blanket holds a black sports bag, a bottle of water, and some clothing. The blue sky, bright sunlight, and energetic movement create a lively, healthy, and open atmosphere.",
  "overall_mood": [
    "energetic",
    "cheerful",
    "sunny",
    "active",
    "healthy",
    "lively",
    "outdoorsy",
    "friendly",
    "playful",
    "bright",
    "open",
    "refreshing",
    "social",
    "dynamic",
    "carefree"
  ],
  "mission_guides": {
    "gist": "3人の若者（three young people）が、何をしているか（playing frisbee / running / reaching）を書こう",
    "setting": "場所（park）、芝生（grass）、天気（sunny）、街の背景（city skyline）に注目しよう",
    "details": "フリスビー、服装、ピクニックシート、バッグ、水のボトル、周囲の人々を加えよう",
    "complete": "青空、白い雲、活発な動き、健康的で開放感のある雰囲気まで含めて描写しよう"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "three young people playing frisbee",
        "ja": "フリスビーをしている3人の若者"
      },
      {
        "en": "one man throwing the disc",
        "ja": "1人の男性がディスクを投げている"
      },
      {
        "en": "another man running to catch it",
        "ja": "別の男性が受け取るために走っている"
      },
      {
        "en": "a woman reaching out with both arms",
        "ja": "女性が両手を伸ばしている"
      }
    ],
    "setting": [
      {
        "en": "on a wide grassy field in a city park",
        "ja": "都市公園の広い芝生の上で"
      },
      {
        "en": "trees and many people in the background",
        "ja": "背景にある木々と多くの人々"
      },
      {
        "en": "tall buildings and a tower beyond the park",
        "ja": "公園の向こうにある高層ビルと塔"
      },
      {
        "en": "a picnic blanket and sports bag in the foreground",
        "ja": "手前にあるピクニックシートとスポーツバッグ"
      }
    ],
    "mood": [
      {
        "en": "a bright and energetic atmosphere",
        "ja": "明るく活気のある雰囲気"
      },
      {
        "en": "a clear blue sky with white clouds",
        "ja": "白い雲が浮かぶ澄んだ青空"
      },
      {
        "en": "a healthy and active outdoor scene",
        "ja": "健康的で活動的な屋外の場面"
      },
      {
        "en": "a carefree summer day in the park",
        "ja": "公園での気楽な夏の日"
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
        "three people",
        "three young people",
        "friends",
        "players",
        "two men and a woman",
        "young adults",
        "they",
        "the group"
      ],
      "hint_msg": "まずは「3人の若者（three young people）」や「友人たち（friends）」など、複数の主語を書きましょう。",
      "success_msg": "Good! 次は、その人たちが何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "playing",
        "throwing",
        "catching",
        "running",
        "reaching",
        "smiling",
        "moving",
        "enjoying"
      ],
      "hint_msg": "「フリスビーをしている（are playing frisbee）」「走っている（are running）」など、are + 動詞ing を使いましょう。",
      "success_msg": "Great! 次に、場所やフリスビー、天気の情報を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "frisbee",
        "disc",
        "park",
        "grass",
        "field",
        "sunny day",
        "city",
        "sky",
        "friends",
        "outdoors"
      ],
      "hint_msg": "「フリスビー（frisbee）」「公園で（in a park）」「芝生の上で（on the grass）」などを加えましょう。",
      "success_msg": "Excellent! 次は人物ごとの動き、背景、持ち物、雰囲気を加えてみましょう。"
    }
  ],
  "suggested_topics": [
    "playing frisbee in the park",
    "running and catching a disc",
    "enjoying outdoor exercise",
    "spending time with friends",
    "a sunny day in a city park",
    "sports and recreation",
    "an active weekend afternoon"
  ],
  "scene_structure": {
    "foreground": [
      "man in a white T-shirt",
      "woman in a white cap",
      "checked picnic blanket",
      "black sports bag",
      "water bottle",
      "light-colored clothing",
      "grass and small flowers"
    ],
    "midground": [
      "man in a black T-shirt",
      "flying frisbee",
      "wide lawn",
      "small groups of people",
      "players and walkers"
    ],
    "background": [
      "large green trees",
      "city skyline",
      "tall buildings",
      "observation tower",
      "blue sky",
      "white clouds",
      "distant park visitors"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "man throwing the frisbee",
      "label_ja": "フリスビーを投げる男性",
      "category": "person",
      "importance": "primary",
      "description": "A young man with short black hair is standing on the left side of the field. He is wearing a white T-shirt, black shorts, white socks, and white sneakers, and his right arm is extended after throwing the frisbee.",
      "bounding_box_conceptual": [
        14,
        0,
        78,
        39
      ],
      "color": [
        "white",
        "black",
        "gray"
      ],
      "attributes": [
        "young",
        "athletic",
        "active",
        "focused",
        "energetic"
      ],
      "action": [
        "throwing",
        "reaching forward",
        "standing",
        "watching the frisbee"
      ],
      "synonyms_and_related_words": [
        "man",
        "young man",
        "player",
        "frisbee player",
        "athlete",
        "friend",
        "male player",
        "he"
      ],
      "accepted_words": [
        "man",
        "young man",
        "player",
        "frisbee player",
        "athlete",
        "friend",
        "male player",
        "he"
      ],
      "common_typos": [
        "men",
        "young men",
        "playar",
        "frisby player",
        "athlet",
        "mail player"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "man",
            "ja": "男性"
          }
        ],
        "A2": [
          {
            "en": "young man",
            "ja": "若い男性"
          }
        ],
        "B1": [
          {
            "en": "frisbee player",
            "ja": "フリスビーをする人"
          }
        ],
        "B2": [
          {
            "en": "an athletic player completing a powerful throw",
            "ja": "力強い投球を終えた運動的なプレーヤー"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a burst of motion released from his outstretched arm",
          "ja": "伸ばした腕から放たれる動きの勢い"
        },
        {
          "en": "a player sending the game across the open field",
          "ja": "広い芝生へゲームを送り出すプレーヤー"
        },
        {
          "en": "the starting point of the flying disc's journey",
          "ja": "飛ぶディスクの旅の出発点"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "man, white T-shirt, shorts, throw",
          "text_en": "man, white T-shirt, shorts, throw",
          "text_ja": "男性、白いTシャツ、短パン、投げる"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The man is throwing a frisbee.",
          "text_en": "The man is throwing a frisbee.",
          "text_ja": "男性はフリスビーを投げています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young man extending his arm after a throw",
          "text_en": "a young man extending his arm after a throw",
          "text_ja": "投げた後に腕を伸ばしている若い男性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The man on the left, dressed in athletic clothes, has just released the frisbee toward his friends.",
          "text_en": "The man on the left, dressed in athletic clothes, has just released the frisbee toward his friends.",
          "text_ja": "左の男性は運動しやすい服を着て、友人たちへフリスビーを放ったところです。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "man running to catch the frisbee",
      "label_ja": "フリスビーを捕るために走る男性",
      "category": "person",
      "importance": "primary",
      "description": "A young man in a black T-shirt and gray shorts is running through the center of the field with a wide smile and his arms open.",
      "bounding_box_conceptual": [
        29,
        55,
        45,
        24
      ],
      "color": [
        "black",
        "gray",
        "white"
      ],
      "attributes": [
        "young",
        "smiling",
        "fast",
        "athletic",
        "excited"
      ],
      "action": [
        "running",
        "preparing to catch",
        "reaching out",
        "smiling"
      ],
      "synonyms_and_related_words": [
        "man",
        "young man",
        "runner",
        "player",
        "receiver",
        "frisbee player",
        "athlete",
        "he"
      ],
      "accepted_words": [
        "man",
        "young man",
        "runner",
        "player",
        "receiver",
        "frisbee player",
        "athlete",
        "he"
      ],
      "common_typos": [
        "runer",
        "playar",
        "reciever",
        "frisby player",
        "athlet"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "man",
            "ja": "男性"
          }
        ],
        "A2": [
          {
            "en": "runner",
            "ja": "走っている人"
          }
        ],
        "B1": [
          {
            "en": "receiver",
            "ja": "受け取る人"
          }
        ],
        "B2": [
          {
            "en": "an excited player sprinting into position",
            "ja": "位置へ全力で走る興奮したプレーヤー"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a smiling runner chasing the path of the disc",
          "ja": "ディスクの軌道を追う笑顔の走者"
        },
        {
          "en": "energy and anticipation moving through the center of the field",
          "ja": "芝生の中央を駆ける活力と期待"
        },
        {
          "en": "a player racing toward the next moment of the game",
          "ja": "ゲームの次の瞬間へ走るプレーヤー"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "man, run, catch, black shirt",
          "text_en": "man, run, catch, black shirt",
          "text_ja": "男性、走る、捕る、黒いシャツ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The man is running to catch the frisbee.",
          "text_en": "The man is running to catch the frisbee.",
          "text_ja": "男性はフリスビーを捕るために走っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a smiling player running across the grass",
          "text_en": "a smiling player running across the grass",
          "text_ja": "芝生を走る笑顔のプレーヤー"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Running toward the flying disc, the player opens his arms and prepares to receive it.",
          "text_en": "Running toward the flying disc, the player opens his arms and prepares to receive it.",
          "text_ja": "飛んでいるディスクへ走りながら、プレーヤーは腕を広げて受け取る準備をしています。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "woman reaching for the frisbee",
      "label_ja": "フリスビーへ手を伸ばす女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman wearing a white cap, white T-shirt, blue jeans, and white sneakers is standing on the right with both arms extended toward the game.",
      "bounding_box_conceptual": [
        31,
        78,
        48,
        22
      ],
      "color": [
        "white",
        "blue",
        "black"
      ],
      "attributes": [
        "young",
        "active",
        "smiling",
        "ready",
        "enthusiastic"
      ],
      "action": [
        "reaching",
        "joining the game",
        "watching the frisbee",
        "moving forward"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "female player",
        "friend",
        "player",
        "woman in a cap",
        "participant",
        "she"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "female player",
        "friend",
        "player",
        "woman in a cap",
        "participant",
        "she"
      ],
      "common_typos": [
        "womon",
        "young women",
        "femail player",
        "partisipant",
        "women in a cap"
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
            "en": "female player",
            "ja": "女性プレーヤー"
          }
        ],
        "B2": [
          {
            "en": "an enthusiastic participant reaching into the game",
            "ja": "ゲームへ手を伸ばす意欲的な参加者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright figure opening her arms to the next pass",
          "ja": "次のパスへ腕を広げる明るい人物"
        },
        {
          "en": "a player ready to join the motion of the disc",
          "ja": "ディスクの動きへ加わる準備のできたプレーヤー"
        },
        {
          "en": "a smile and two open arms waiting at the edge of the game",
          "ja": "ゲームの端で待つ笑顔と広げた両腕"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, cap, jeans, reach",
          "text_en": "woman, cap, jeans, reach",
          "text_ja": "女性、帽子、ジーンズ、手を伸ばす"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is reaching out with both arms.",
          "text_en": "The woman is reaching out with both arms.",
          "text_ja": "女性は両腕を伸ばしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a young woman in a white cap joining the game",
          "text_en": "a young woman in a white cap joining the game",
          "text_ja": "白い帽子をかぶってゲームに参加する若い女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman on the right, wearing casual clothes, appears ready to receive the next pass.",
          "text_en": "The woman on the right, wearing casual clothes, appears ready to receive the next pass.",
          "text_ja": "右の女性はカジュアルな服装で、次のパスを受け取る準備ができているようです。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "frisbee",
      "label_ja": "フリスビー",
      "category": "object",
      "importance": "primary",
      "description": "A white flying disc is suspended in the air above the center of the lawn between the players.",
      "bounding_box_conceptual": [
        26,
        47,
        7,
        10
      ],
      "color": [
        "white",
        "gray"
      ],
      "attributes": [
        "round",
        "lightweight",
        "flying",
        "flat",
        "spinning"
      ],
      "action": [
        "flying",
        "spinning",
        "moving through the air"
      ],
      "synonyms_and_related_words": [
        "frisbee",
        "flying disc",
        "disc",
        "sports disc",
        "plastic disc",
        "throwing disc"
      ],
      "accepted_words": [
        "frisbee",
        "flying disc",
        "disc",
        "sports disc",
        "plastic disc",
        "throwing disc"
      ],
      "common_typos": [
        "frisby",
        "frizbee",
        "flying disk",
        "sport disc",
        "plastic disk"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "frisbee",
            "ja": "フリスビー"
          }
        ],
        "A2": [
          {
            "en": "flying disc",
            "ja": "フライングディスク"
          }
        ],
        "B1": [
          {
            "en": "sports disc",
            "ja": "スポーツ用ディスク"
          }
        ],
        "B2": [
          {
            "en": "a spinning disc traveling between the players",
            "ja": "プレーヤーの間を移動する回転中のディスク"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a white circle cutting across the blue sky",
          "ja": "青空を横切る白い円"
        },
        {
          "en": "the moving center of the game",
          "ja": "ゲームの動く中心"
        },
        {
          "en": "a small flying object connecting three friends",
          "ja": "3人の友人をつなぐ小さな飛行物体"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "frisbee, disc, fly, round",
          "text_en": "frisbee, disc, fly, round",
          "text_ja": "フリスビー、ディスク、飛ぶ、丸い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The frisbee is flying through the air.",
          "text_en": "The frisbee is flying through the air.",
          "text_ja": "フリスビーが空中を飛んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a white disc spinning above the grass",
          "text_en": "a white disc spinning above the grass",
          "text_ja": "芝生の上で回転する白いディスク"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The frisbee, suspended in midair, visually connects the thrower with the two receivers.",
          "text_en": "The frisbee, suspended in midair, visually connects the thrower with the two receivers.",
          "text_ja": "空中に浮かぶフリスビーが、投げ手と2人の受け手を視覚的につないでいます。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "wide grassy field",
      "label_ja": "広い芝生",
      "category": "setting",
      "importance": "primary",
      "description": "A wide green lawn covered with short grass and small white flowers stretches across the park.",
      "bounding_box_conceptual": [
        40,
        0,
        60,
        100
      ],
      "color": [
        "green",
        "white",
        "yellow"
      ],
      "attributes": [
        "wide",
        "green",
        "sunny",
        "open",
        "well-kept"
      ],
      "action": [
        "supporting outdoor activities",
        "providing space for sports",
        "stretching across the park"
      ],
      "synonyms_and_related_words": [
        "grass",
        "lawn",
        "field",
        "grassy field",
        "open field",
        "green space",
        "park lawn"
      ],
      "accepted_words": [
        "grass",
        "lawn",
        "field",
        "grassy field",
        "open field",
        "green space",
        "park lawn"
      ],
      "common_typos": [
        "gras",
        "lawnn",
        "feild",
        "grassy feild",
        "green spase"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "grass",
            "ja": "芝生"
          }
        ],
        "A2": [
          {
            "en": "field",
            "ja": "広場"
          }
        ],
        "B1": [
          {
            "en": "open lawn",
            "ja": "開けた芝生"
          }
        ],
        "B2": [
          {
            "en": "a spacious recreational field",
            "ja": "広々とした運動・レクリエーション用の広場"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a green stage for movement and friendship",
          "ja": "動きと友情のための緑の舞台"
        },
        {
          "en": "a broad carpet of grass beneath the summer sky",
          "ja": "夏空の下に広がる芝生のじゅうたん"
        },
        {
          "en": "open space inviting everyone to run, play, and relax",
          "ja": "走り、遊び、休むよう人々を誘う開けた空間"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "grass, field, green, park",
          "text_en": "grass, field, green, park",
          "text_ja": "芝生、広場、緑、公園"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are playing on the grass.",
          "text_en": "They are playing on the grass.",
          "text_ja": "彼らは芝生の上で遊んでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a wide green field covered with small flowers",
          "text_en": "a wide green field covered with small flowers",
          "text_ja": "小さな花が咲く広い緑の芝生"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The spacious lawn provides enough room for sports, picnics, and many different outdoor activities.",
          "text_en": "The spacious lawn provides enough room for sports, picnics, and many different outdoor activities.",
          "text_ja": "広々とした芝生は、スポーツ、ピクニック、さまざまな屋外活動に十分な場所を提供しています。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "picnic blanket",
      "label_ja": "ピクニックシート",
      "category": "object",
      "importance": "secondary",
      "description": "A blue-and-white checked picnic blanket lies on the grass in the lower-right foreground.",
      "bounding_box_conceptual": [
        85,
        45,
        15,
        50
      ],
      "color": [
        "blue",
        "white",
        "cream"
      ],
      "attributes": [
        "checked",
        "spread out",
        "soft",
        "rectangular",
        "outdoor"
      ],
      "action": [
        "lying on the grass",
        "holding personal belongings"
      ],
      "synonyms_and_related_words": [
        "picnic blanket",
        "blanket",
        "picnic mat",
        "checked cloth",
        "outdoor mat",
        "sheet"
      ],
      "accepted_words": [
        "picnic blanket",
        "blanket",
        "picnic mat",
        "checked cloth",
        "outdoor mat",
        "sheet"
      ],
      "common_typos": [
        "picnic blankit",
        "picnic matt",
        "checkd cloth",
        "outdor mat"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "blanket",
            "ja": "毛布・シート"
          }
        ],
        "A2": [
          {
            "en": "picnic blanket",
            "ja": "ピクニックシート"
          }
        ],
        "B1": [
          {
            "en": "checked picnic mat",
            "ja": "チェック柄のピクニックマット"
          }
        ],
        "B2": [
          {
            "en": "a resting place for the group's belongings",
            "ja": "グループの持ち物を置く休憩場所"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small island of rest beside the active game",
          "ja": "活発なゲームのそばにある小さな休息の島"
        },
        {
          "en": "a blue-and-white base waiting for the players to return",
          "ja": "プレーヤーが戻るのを待つ青と白の場所"
        },
        {
          "en": "the quiet corner of the afternoon beneath the fast-moving disc",
          "ja": "素早く飛ぶディスクの下にある午後の静かな一角"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "blanket, picnic, blue, grass",
          "text_en": "blanket, picnic, blue, grass",
          "text_ja": "シート、ピクニック、青、芝生"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A picnic blanket is on the grass.",
          "text_en": "A picnic blanket is on the grass.",
          "text_ja": "ピクニックシートが芝生の上にあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a blue-and-white checked blanket spread on the lawn",
          "text_en": "a blue-and-white checked blanket spread on the lawn",
          "text_ja": "芝生に広げられた青と白のチェック柄シート"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The picnic blanket suggests that the group may rest, eat, or spend more time in the park after the game.",
          "text_en": "The picnic blanket suggests that the group may rest, eat, or spend more time in the park after the game.",
          "text_ja": "ピクニックシートから、ゲーム後に休憩したり食事をしたり、公園でさらに時間を過ごす可能性が分かります。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "sports bag and water bottle",
      "label_ja": "スポーツバッグと水のボトル",
      "category": "object",
      "importance": "secondary",
      "description": "A large black sports bag, a clear water bottle, and light-colored clothing are placed on the picnic blanket.",
      "bounding_box_conceptual": [
        77,
        57,
        23,
        43
      ],
      "color": [
        "black",
        "clear",
        "blue",
        "beige"
      ],
      "attributes": [
        "large",
        "practical",
        "portable",
        "outdoor",
        "personal"
      ],
      "action": [
        "resting on the blanket",
        "holding equipment",
        "providing water"
      ],
      "synonyms_and_related_words": [
        "sports bag",
        "duffel bag",
        "black bag",
        "water bottle",
        "bottle",
        "clothes",
        "personal belongings",
        "gear"
      ],
      "accepted_words": [
        "sports bag",
        "duffel bag",
        "black bag",
        "water bottle",
        "bottle",
        "clothes",
        "personal belongings",
        "gear"
      ],
      "common_typos": [
        "sport bag",
        "dufel bag",
        "water botle",
        "belongins",
        "geer"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bag and bottle",
            "ja": "バッグとボトル"
          }
        ],
        "A2": [
          {
            "en": "sports bag",
            "ja": "スポーツバッグ"
          }
        ],
        "B1": [
          {
            "en": "personal belongings",
            "ja": "個人の持ち物"
          }
        ],
        "B2": [
          {
            "en": "portable equipment supporting outdoor exercise",
            "ja": "屋外運動を支える携帯用の道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the quiet equipment waiting beside the active players",
          "ja": "活発なプレーヤーのそばで待つ静かな道具"
        },
        {
          "en": "water and gear supporting the afternoon's energy",
          "ja": "午後の活力を支える水と道具"
        },
        {
          "en": "a dark bag anchoring the corner of the picnic space",
          "ja": "ピクニックスペースの一角を支える黒いバッグ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bag, bottle, water, clothes",
          "text_en": "bag, bottle, water, clothes",
          "text_ja": "バッグ、ボトル、水、服"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is a bag and a bottle on the blanket.",
          "text_en": "There is a bag and a bottle on the blanket.",
          "text_ja": "シートの上にバッグとボトルがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a black sports bag beside a clear water bottle",
          "text_en": "a black sports bag beside a clear water bottle",
          "text_ja": "透明な水のボトルのそばにある黒いスポーツバッグ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The bag and water bottle indicate that the group has prepared for an active day outdoors.",
          "text_en": "The bag and water bottle indicate that the group has prepared for an active day outdoors.",
          "text_ja": "バッグと水のボトルから、グループが活動的な屋外の一日に備えていることが分かります。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "park visitors",
      "label_ja": "公園にいる人々",
      "category": "people",
      "importance": "secondary",
      "description": "Many people are scattered across the lawn in the background. Some are standing, walking, playing sports, sitting, or relaxing in groups.",
      "bounding_box_conceptual": [
        44,
        12,
        24,
        82
      ],
      "color": [
        "white",
        "blue",
        "black",
        "green"
      ],
      "attributes": [
        "numerous",
        "social",
        "active",
        "relaxed",
        "distant"
      ],
      "action": [
        "walking",
        "playing",
        "standing",
        "sitting",
        "talking"
      ],
      "synonyms_and_related_words": [
        "people",
        "park visitors",
        "families",
        "friends",
        "groups",
        "players",
        "walkers",
        "crowd"
      ],
      "accepted_words": [
        "people",
        "park visitors",
        "families",
        "friends",
        "groups",
        "players",
        "walkers",
        "crowd"
      ],
      "common_typos": [
        "peoples",
        "park visiters",
        "familys",
        "frends",
        "walkerss"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "people",
            "ja": "人々"
          }
        ],
        "A2": [
          {
            "en": "park visitors",
            "ja": "公園を訪れている人々"
          }
        ],
        "B1": [
          {
            "en": "groups of visitors",
            "ja": "訪問者のグループ"
          }
        ],
        "B2": [
          {
            "en": "a diverse crowd enjoying different recreational activities",
            "ja": "さまざまな余暇活動を楽しむ多様な人々"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "many small stories unfolding across the lawn",
          "ja": "芝生の上で展開する多くの小さな物語"
        },
        {
          "en": "a living background of movement, rest, and conversation",
          "ja": "動き、休息、会話でできた生きた背景"
        },
        {
          "en": "the park filled with different rhythms of a sunny day",
          "ja": "晴れた日の異なるリズムで満たされた公園"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "people, walk, play, sit",
          "text_en": "people, walk, play, sit",
          "text_ja": "人々、歩く、遊ぶ、座る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many people in the park.",
          "text_en": "There are many people in the park.",
          "text_ja": "公園には多くの人がいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "groups of people enjoying different activities",
          "text_en": "groups of people enjoying different activities",
          "text_ja": "さまざまな活動を楽しむ人々のグループ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The many visitors in the background make the park appear lively, popular, and socially active.",
          "text_en": "The many visitors in the background make the park appear lively, popular, and socially active.",
          "text_ja": "背景の多くの訪問者によって、公園が活気があり人気のある交流の場に見えます。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "trees",
      "label_ja": "木々",
      "category": "nature",
      "importance": "primary",
      "description": "Large leafy trees surround the lawn and provide green shade around the park.",
      "bounding_box_conceptual": [
        19,
        0,
        46,
        100
      ],
      "color": [
        "green",
        "brown"
      ],
      "attributes": [
        "large",
        "leafy",
        "healthy",
        "shady",
        "natural"
      ],
      "action": [
        "surrounding the field",
        "providing shade",
        "framing the skyline"
      ],
      "synonyms_and_related_words": [
        "tree",
        "trees",
        "large trees",
        "green trees",
        "leafy trees",
        "shade trees",
        "park trees"
      ],
      "accepted_words": [
        "tree",
        "trees",
        "large trees",
        "green trees",
        "leafy trees",
        "shade trees",
        "park trees"
      ],
      "common_typos": [
        "tre",
        "treees",
        "leefy trees",
        "grean trees",
        "shad trees"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "tree",
            "ja": "木"
          }
        ],
        "A2": [
          {
            "en": "green trees",
            "ja": "緑の木々"
          }
        ],
        "B1": [
          {
            "en": "leafy trees",
            "ja": "葉の茂った木々"
          }
        ],
        "B2": [
          {
            "en": "mature trees forming a natural border around the field",
            "ja": "芝生の周りに自然の境界を作る成長した木々"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "green walls holding the park apart from the city",
          "ja": "公園を街から分ける緑の壁"
        },
        {
          "en": "trees framing the game like a natural stadium",
          "ja": "自然のスタジアムのようにゲームを囲む木々"
        },
        {
          "en": "leaves carrying summer light above the lawn",
          "ja": "芝生の上で夏の光を受け止める葉"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "tree, leaves, green, shade",
          "text_en": "tree, leaves, green, shade",
          "text_ja": "木、葉、緑、木陰"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There are many green trees around the field.",
          "text_en": "There are many green trees around the field.",
          "text_ja": "芝生の周りには多くの緑の木があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "large leafy trees surrounding the open lawn",
          "text_en": "large leafy trees surrounding the open lawn",
          "text_ja": "開けた芝生を囲む葉の茂った大きな木々"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The mature trees create a natural frame that separates the recreational space from the city skyline.",
          "text_en": "The mature trees create a natural frame that separates the recreational space from the city skyline.",
          "text_ja": "成長した木々が自然の枠を作り、運動空間と都会の景色を分けています。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "city skyline and tower",
      "label_ja": "街の高層ビルと塔",
      "category": "setting",
      "importance": "secondary",
      "description": "Tall buildings and a slender observation tower rise beyond the trees in the background.",
      "bounding_box_conceptual": [
        23,
        49,
        30,
        40
      ],
      "color": [
        "gray",
        "white",
        "blue",
        "red"
      ],
      "attributes": [
        "urban",
        "tall",
        "distant",
        "modern",
        "distinctive"
      ],
      "action": [
        "rising above the trees",
        "forming a city skyline",
        "marking the urban location"
      ],
      "synonyms_and_related_words": [
        "city skyline",
        "buildings",
        "high-rise buildings",
        "skyscrapers",
        "tower",
        "observation tower",
        "cityscape"
      ],
      "accepted_words": [
        "city skyline",
        "buildings",
        "high-rise buildings",
        "skyscrapers",
        "tower",
        "observation tower",
        "cityscape"
      ],
      "common_typos": [
        "city skiline",
        "bildings",
        "high rise bildings",
        "skyscrappers",
        "observation towar"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "buildings",
            "ja": "建物"
          }
        ],
        "A2": [
          {
            "en": "city skyline",
            "ja": "都市のスカイライン"
          }
        ],
        "B1": [
          {
            "en": "high-rise buildings",
            "ja": "高層ビル"
          }
        ],
        "B2": [
          {
            "en": "a modern urban skyline rising beyond the park",
            "ja": "公園の向こうに広がる現代的な都市景観"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the city standing quietly behind the open green field",
          "ja": "開けた緑の芝生の後ろに静かに立つ街"
        },
        {
          "en": "steel and glass rising beyond the trees",
          "ja": "木々の向こうにそびえる鉄とガラス"
        },
        {
          "en": "an urban horizon reminding viewers that nature and city can share one scene",
          "ja": "自然と都市が一つの場面を共有できることを示す都会の地平線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "building, tower, city, tall",
          "text_en": "building, tower, city, tall",
          "text_ja": "建物、塔、街、高い"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Tall buildings can be seen behind the trees.",
          "text_en": "Tall buildings can be seen behind the trees.",
          "text_ja": "木々の後ろに高い建物が見えます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a city skyline rising beyond the park",
          "text_en": "a city skyline rising beyond the park",
          "text_ja": "公園の向こうにそびえる都市の景色"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The skyline places the natural recreational space within a modern urban environment.",
          "text_en": "The skyline places the natural recreational space within a modern urban environment.",
          "text_ja": "スカイラインが、この自然豊かな運動空間が現代都市の中にあることを示しています。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "blue sky and clouds",
      "label_ja": "青空と雲",
      "category": "setting",
      "importance": "primary",
      "description": "A vivid blue sky filled with large white clouds covers the upper half of the image.",
      "bounding_box_conceptual": [
        0,
        0,
        40,
        100
      ],
      "color": [
        "blue",
        "white"
      ],
      "attributes": [
        "clear",
        "bright",
        "wide",
        "sunny",
        "dramatic"
      ],
      "action": [
        "stretching above the park",
        "providing sunlight",
        "forming the background"
      ],
      "synonyms_and_related_words": [
        "sky",
        "blue sky",
        "clouds",
        "white clouds",
        "clear sky",
        "sunny sky",
        "summer sky"
      ],
      "accepted_words": [
        "sky",
        "blue sky",
        "clouds",
        "white clouds",
        "clear sky",
        "sunny sky",
        "summer sky"
      ],
      "common_typos": [
        "skye",
        "blue skie",
        "clowds",
        "white clowds",
        "sunny skie"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sky",
            "ja": "空"
          }
        ],
        "A2": [
          {
            "en": "blue sky",
            "ja": "青空"
          }
        ],
        "B1": [
          {
            "en": "white clouds",
            "ja": "白い雲"
          }
        ],
        "B2": [
          {
            "en": "a brilliant summer sky filled with towering clouds",
            "ja": "大きな雲に満ちた鮮やかな夏空"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vast blue ceiling above the moving game",
          "ja": "動きのあるゲームの上に広がる青い天井"
        },
        {
          "en": "white clouds floating like soft mountains",
          "ja": "柔らかな山のように浮かぶ白い雲"
        },
        {
          "en": "the open sky making every movement feel freer",
          "ja": "すべての動きをより自由に感じさせる開けた空"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sky, cloud, blue, sunny",
          "text_en": "sky, cloud, blue, sunny",
          "text_ja": "空、雲、青い、晴れた"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sky is blue, and there are many white clouds.",
          "text_en": "The sky is blue, and there are many white clouds.",
          "text_ja": "空は青く、白い雲がたくさんあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clear blue sky filled with large white clouds",
          "text_en": "a clear blue sky filled with large white clouds",
          "text_ja": "大きな白い雲に満ちた澄んだ青空"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The expansive sky intensifies the sense of freedom, movement, and outdoor energy.",
          "text_en": "The expansive sky intensifies the sense of freedom, movement, and outdoor energy.",
          "text_ja": "広がる空が、自由、動き、屋外の活力を強く感じさせています。"
        }
      ]
    }
  ],
  "text_elements": [],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Playing frisbee together",
      "description_ja": "一緒にフリスビーをしている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "play frisbee",
        "playing frisbee",
        "play with a flying disc",
        "throw and catch",
        "play a disc game",
        "enjoy frisbee together"
      ],
      "accepted_words": [
        "play frisbee",
        "playing frisbee",
        "play with a flying disc",
        "throw and catch",
        "play a disc game",
        "enjoy frisbee together"
      ],
      "common_typos": [
        "play frizbee",
        "playing frisby",
        "throw and cach",
        "disc gaem"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "play frisbee",
            "ja": "フリスビーをする"
          }
        ],
        "A2": [
          {
            "en": "throw and catch a disc",
            "ja": "ディスクを投げたり捕ったりする"
          }
        ],
        "B1": [
          {
            "en": "play an outdoor disc game",
            "ja": "屋外のディスクゲームをする"
          }
        ],
        "B2": [
          {
            "en": "participate in an energetic recreational activity",
            "ja": "活発なレクリエーション活動に参加する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sending a white disc through a circle of friendship",
          "ja": "友情の輪の中で白いディスクを飛ばす"
        },
        {
          "en": "turning the open lawn into a moving game",
          "ja": "開けた芝生を動きのあるゲームへ変える"
        },
        {
          "en": "sharing energy, timing, and laughter through each pass",
          "ja": "一回一回のパスで活力、タイミング、笑いを分かち合う"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "play, frisbee, friends, together",
          "text_en": "play, frisbee, friends, together",
          "text_ja": "遊ぶ、フリスビー、友人、一緒に"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The three friends are playing frisbee.",
          "text_en": "The three friends are playing frisbee.",
          "text_ja": "3人の友人はフリスビーをしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "play frisbee together on a wide grassy field",
          "text_en": "play frisbee together on a wide grassy field",
          "text_ja": "広い芝生で一緒にフリスビーをする"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Spread across the field, the three players coordinate their movements as the disc travels between them.",
          "text_en": "Spread across the field, the three players coordinate their movements as the disc travels between them.",
          "text_ja": "芝生に広がって立つ3人のプレーヤーは、ディスクが行き交う中で動きを合わせています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Throwing the frisbee",
      "description_ja": "フリスビーを投げている",
      "involved_elements": [
        "element_001",
        "element_004"
      ],
      "synonyms": [
        "throw",
        "throwing",
        "throw the frisbee",
        "release the disc",
        "send the disc",
        "make a pass",
        "toss the frisbee"
      ],
      "accepted_words": [
        "throw",
        "throwing",
        "throw the frisbee",
        "release the disc",
        "send the disc",
        "make a pass",
        "toss the frisbee"
      ],
      "common_typos": [
        "throing",
        "throww",
        "relese the disc",
        "tos the frisbee",
        "make a pas"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "throw",
            "ja": "投げる"
          }
        ],
        "A2": [
          {
            "en": "throw the frisbee",
            "ja": "フリスビーを投げる"
          }
        ],
        "B1": [
          {
            "en": "release the disc",
            "ja": "ディスクを放す"
          }
        ],
        "B2": [
          {
            "en": "send the spinning disc toward a teammate",
            "ja": "回転するディスクを仲間へ送る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "releasing a white circle into the blue sky",
          "ja": "白い円を青空へ放つ"
        },
        {
          "en": "sending the game forward with one strong movement",
          "ja": "一つの力強い動きでゲームを前へ進める"
        },
        {
          "en": "turning an outstretched arm into the beginning of a chase",
          "ja": "伸ばした腕を追いかけの始まりへ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The man on the left is throwing the frisbee.",
          "text_en": "The man on the left is throwing the frisbee.",
          "text_ja": "左の男性はフリスビーを投げています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "extend his right arm after releasing the disc",
          "text_en": "extend his right arm after releasing the disc",
          "text_ja": "ディスクを放した後に右腕を伸ばす"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Having released the frisbee, the thrower keeps his arm extended and watches its flight.",
          "text_en": "Having released the frisbee, the thrower keeps his arm extended and watches its flight.",
          "text_ja": "フリスビーを放った後、投げ手は腕を伸ばしたまま軌道を見ています。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Running to catch the frisbee",
      "description_ja": "フリスビーを捕るために走っている",
      "involved_elements": [
        "element_002",
        "element_004"
      ],
      "synonyms": [
        "run to catch",
        "running to catch",
        "chase the frisbee",
        "sprint toward the disc",
        "move into position",
        "prepare to receive"
      ],
      "accepted_words": [
        "run to catch",
        "running to catch",
        "chase the frisbee",
        "sprint toward the disc",
        "move into position",
        "prepare to receive"
      ],
      "common_typos": [
        "run to cach",
        "chase the frizbee",
        "sprint toword",
        "recieve"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "run",
            "ja": "走る"
          }
        ],
        "A2": [
          {
            "en": "run to catch the frisbee",
            "ja": "フリスビーを捕るために走る"
          }
        ],
        "B1": [
          {
            "en": "sprint toward the disc",
            "ja": "ディスクへ全力で走る"
          }
        ],
        "B2": [
          {
            "en": "accelerate into position for the catch",
            "ja": "キャッチする位置へ加速する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "chasing the disc's shadow across the grass",
          "ja": "芝生の上でディスクの影を追う"
        },
        {
          "en": "running toward the exact place where movement becomes a catch",
          "ja": "動きがキャッチへ変わる正確な場所へ走る"
        },
        {
          "en": "carrying excitement through every step",
          "ja": "一歩ごとに興奮を運ぶ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The man in black is running to catch the frisbee.",
          "text_en": "The man in black is running to catch the frisbee.",
          "text_ja": "黒い服の男性はフリスビーを捕るために走っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "run quickly across the grass with his arms open",
          "text_en": "run quickly across the grass with his arms open",
          "text_ja": "両腕を広げて芝生を速く走る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Smiling as he runs, the central player adjusts his position to receive the incoming disc.",
          "text_en": "Smiling as he runs, the central player adjusts his position to receive the incoming disc.",
          "text_ja": "走りながら笑顔を見せ、中央のプレーヤーは飛んでくるディスクを受け取る位置へ調整しています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Reaching out to join the play",
      "description_ja": "ゲームに加わるために手を伸ばしている",
      "involved_elements": [
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "reach out",
        "reaching out",
        "open both arms",
        "join the game",
        "prepare to catch",
        "move toward the disc"
      ],
      "accepted_words": [
        "reach out",
        "reaching out",
        "open both arms",
        "join the game",
        "prepare to catch",
        "move toward the disc"
      ],
      "common_typos": [
        "rech out",
        "open both arm",
        "joinning the game",
        "prepare to cach"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "reach",
            "ja": "手を伸ばす"
          }
        ],
        "A2": [
          {
            "en": "reach out with both arms",
            "ja": "両腕を伸ばす"
          }
        ],
        "B1": [
          {
            "en": "prepare to catch",
            "ja": "捕る準備をする"
          }
        ],
        "B2": [
          {
            "en": "position herself for the next pass",
            "ja": "次のパスを受ける位置につく"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "opening her arms to the movement of the game",
          "ja": "ゲームの動きへ両腕を開く"
        },
        {
          "en": "waiting at the edge of the pass with a smile",
          "ja": "笑顔でパスの先を待つ"
        },
        {
          "en": "joining the shared rhythm of throw, flight, and catch",
          "ja": "投げる、飛ぶ、捕るという共有のリズムへ加わる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is reaching out with both arms.",
          "text_en": "The woman is reaching out with both arms.",
          "text_ja": "女性は両腕を伸ばしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "move forward and prepare for the next pass",
          "text_en": "move forward and prepare for the next pass",
          "text_ja": "前へ動き次のパスに備える"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "With both arms extended, the woman appears ready to participate in the next stage of the play.",
          "text_en": "With both arms extended, the woman appears ready to participate in the next stage of the play.",
          "text_ja": "両腕を伸ばし、女性は次のプレーへ参加する準備ができているようです。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Enjoying outdoor exercise",
      "description_ja": "屋外運動を楽しんでいる",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_005"
      ],
      "synonyms": [
        "exercise outdoors",
        "enjoy outdoor exercise",
        "stay active",
        "play sports",
        "have fun outside",
        "enjoy physical activity"
      ],
      "accepted_words": [
        "exercise outdoors",
        "enjoy outdoor exercise",
        "stay active",
        "play sports",
        "have fun outside",
        "enjoy physical activity"
      ],
      "common_typos": [
        "exersise outdoors",
        "stay activ",
        "play sport",
        "physical activty"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "exercise",
            "ja": "運動する"
          }
        ],
        "A2": [
          {
            "en": "play sports outside",
            "ja": "外でスポーツをする"
          }
        ],
        "B1": [
          {
            "en": "enjoy physical activity",
            "ja": "身体活動を楽しむ"
          }
        ],
        "B2": [
          {
            "en": "take part in healthy outdoor recreation",
            "ja": "健康的な屋外レクリエーションへ参加する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning a sunny afternoon into shared movement",
          "ja": "晴れた午後を共有する運動へ変える"
        },
        {
          "en": "using the open park as a place for health and friendship",
          "ja": "健康と友情の場所として開けた公園を使う"
        },
        {
          "en": "letting exercise feel more like play than work",
          "ja": "運動を努力より遊びのように感じさせる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They are exercising and having fun outside.",
          "text_en": "They are exercising and having fun outside.",
          "text_ja": "彼らは外で運動し、楽しんでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "enjoy an active afternoon with friends in the park",
          "text_en": "enjoy an active afternoon with friends in the park",
          "text_ja": "公園で友人と活動的な午後を楽しむ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Their energetic movements show how social recreation can combine exercise, teamwork, and enjoyment.",
          "text_en": "Their energetic movements show how social recreation can combine exercise, teamwork, and enjoyment.",
          "text_ja": "活発な動きから、仲間との余暇活動が運動、協力、楽しさを組み合わせられることが分かります。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "People enjoying the park",
      "description_ja": "人々が公園を楽しんでいる",
      "involved_elements": [
        "element_005",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "enjoy the park",
        "walk in the park",
        "relax on the grass",
        "play sports",
        "spend time outside",
        "gather in groups"
      ],
      "accepted_words": [
        "enjoy the park",
        "walk in the park",
        "relax on the grass",
        "play sports",
        "spend time outside",
        "gather in groups"
      ],
      "common_typos": [
        "enjoyng the park",
        "walkking",
        "relaxx on the grass",
        "gather in group"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "enjoy the park",
            "ja": "公園を楽しむ"
          }
        ],
        "A2": [
          {
            "en": "spend time outside",
            "ja": "屋外で時間を過ごす"
          }
        ],
        "B1": [
          {
            "en": "take part in recreational activities",
            "ja": "余暇活動に参加する"
          }
        ],
        "B2": [
          {
            "en": "use the public space for varied social and physical activities",
            "ja": "公共空間をさまざまな交流・身体活動に利用する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "many lives sharing the same field in different ways",
          "ja": "同じ芝生を異なる方法で共有する多くの人々"
        },
        {
          "en": "a public park becoming a collection of small communities",
          "ja": "公共公園が小さな共同体の集まりになる"
        },
        {
          "en": "movement, conversation, and rest blending across the lawn",
          "ja": "芝生の上で混ざり合う動き、会話、休息"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Many people are enjoying the park.",
          "text_en": "Many people are enjoying the park.",
          "text_ja": "多くの人が公園を楽しんでいます。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "walk, play, sit, and relax in different groups",
          "text_en": "walk, play, sit, and relax in different groups",
          "text_ja": "さまざまなグループで歩き、遊び、座り、くつろぐ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Scattered across the lawn, visitors participate in a range of activities that make the park feel lively and inclusive.",
          "text_en": "Scattered across the lawn, visitors participate in a range of activities that make the park feel lively and inclusive.",
          "text_ja": "芝生に広がる訪問者たちはさまざまな活動へ参加し、公園を活気があり誰でも楽しめる場所にしています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Sunlight brightening the park",
      "description_ja": "日差しが公園を明るくしている",
      "involved_elements": [
        "element_005",
        "element_009",
        "element_011"
      ],
      "synonyms": [
        "sunlight brightens the park",
        "sun shines",
        "daylight fills the field",
        "light illuminates the grass",
        "sunlight creates shadows"
      ],
      "accepted_words": [
        "sunlight brightens the park",
        "sun shines",
        "daylight fills the field",
        "light illuminates the grass",
        "sunlight creates shadows"
      ],
      "common_typos": [
        "sun ligth",
        "day ligth",
        "iluminates the grass",
        "sunlight create shadow"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "the sun shines",
            "ja": "太陽が照る"
          }
        ],
        "A2": [
          {
            "en": "sunlight fills the park",
            "ja": "日差しが公園を満たす"
          }
        ],
        "B1": [
          {
            "en": "bright daylight illuminates the field",
            "ja": "明るい日差しが芝生を照らす"
          }
        ],
        "B2": [
          {
            "en": "strong natural light intensifies the vivid outdoor colors",
            "ja": "強い自然光が鮮やかな屋外の色を際立たせる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight making every blade of grass and moving figure shine",
          "ja": "芝の一本一本と動く人々を輝かせる日差し"
        },
        {
          "en": "daylight turning the field into a bright stage",
          "ja": "芝生を明るい舞台へ変える日差し"
        },
        {
          "en": "the sun giving energy to both the game and the landscape",
          "ja": "ゲームと景色の両方へ活力を与える太陽"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The sun is shining, and the park is bright.",
          "text_en": "The sun is shining, and the park is bright.",
          "text_ja": "太陽が照り、公園は明るいです。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "strong sunlight falling across the green field",
          "text_en": "strong sunlight falling across the green field",
          "text_ja": "緑の芝生へ降り注ぐ強い日差し"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Bathed in clear daylight, the field appears vivid, energetic, and ideal for outdoor recreation.",
          "text_en": "Bathed in clear daylight, the field appears vivid, energetic, and ideal for outdoor recreation.",
          "text_ja": "澄んだ日差しに照らされ、芝生は鮮やかで活気があり、屋外活動に理想的に見えます。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "man in white",
      "relationship": "to the left of",
      "object": "other players",
      "example_beginner": "The man in white is on the left.",
      "example_intermediate": "The thrower in the white T-shirt is positioned to the left of the other players."
    },
    {
      "subject": "man in black",
      "relationship": "in the center of",
      "object": "field",
      "example_beginner": "The man in black is in the center.",
      "example_intermediate": "The running player is near the center of the field."
    },
    {
      "subject": "woman in cap",
      "relationship": "to the right of",
      "object": "man in black",
      "example_beginner": "The woman is to the right of the man.",
      "example_intermediate": "The woman in the white cap stands to the right of the central player."
    },
    {
      "subject": "frisbee",
      "relationship": "above",
      "object": "grass",
      "example_beginner": "The frisbee is above the grass.",
      "example_intermediate": "The white frisbee is flying above the lawn."
    },
    {
      "subject": "frisbee",
      "relationship": "between",
      "object": "players",
      "example_beginner": "The frisbee is between the players.",
      "example_intermediate": "The disc is suspended in the air between the thrower and the receivers."
    },
    {
      "subject": "picnic blanket",
      "relationship": "in the foreground of",
      "object": "park",
      "example_beginner": "The blanket is in the foreground.",
      "example_intermediate": "A checked picnic blanket lies in the lower-right foreground."
    },
    {
      "subject": "sports bag",
      "relationship": "on",
      "object": "picnic blanket",
      "example_beginner": "The bag is on the blanket.",
      "example_intermediate": "A black sports bag rests on the checked blanket."
    },
    {
      "subject": "water bottle",
      "relationship": "beside",
      "object": "sports bag",
      "example_beginner": "The bottle is beside the bag.",
      "example_intermediate": "A clear water bottle stands beside the sports bag."
    },
    {
      "subject": "park visitors",
      "relationship": "across",
      "object": "field",
      "example_beginner": "Many people are across the field.",
      "example_intermediate": "Groups of visitors are scattered across the lawn."
    },
    {
      "subject": "city skyline",
      "relationship": "behind",
      "object": "trees",
      "example_beginner": "The buildings are behind the trees.",
      "example_intermediate": "The city skyline rises behind the large green trees."
    },
    {
      "subject": "blue sky",
      "relationship": "above",
      "object": "park",
      "example_beginner": "The blue sky is above the park.",
      "example_intermediate": "A vivid blue sky stretches above the entire park."
    }
  ],
  "adjective_library": {
    "people": [
      "young",
      "active",
      "athletic",
      "cheerful",
      "energetic",
      "smiling",
      "friendly",
      "enthusiastic"
    ],
    "park": [
      "wide",
      "green",
      "sunny",
      "open",
      "lively",
      "popular",
      "spacious",
      "well-kept"
    ],
    "movement": [
      "fast",
      "dynamic",
      "powerful",
      "coordinated",
      "playful",
      "energetic",
      "athletic"
    ],
    "sky": [
      "blue",
      "clear",
      "bright",
      "wide",
      "cloudy",
      "sunny",
      "vivid"
    ],
    "city": [
      "modern",
      "urban",
      "distant",
      "tall",
      "busy",
      "developed"
    ],
    "atmosphere": [
      "refreshing",
      "carefree",
      "healthy",
      "social",
      "open",
      "joyful",
      "active",
      "uplifting"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "The three friends are playing in a park."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上で",
      "example": "They are running on the grass."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って、〜全体に",
      "example": "The man is running across the field."
    },
    {
      "preposition": "toward",
      "meaning_ja": "〜の方へ",
      "example": "He is running toward the frisbee."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The frisbee is between the players."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上方に",
      "example": "The frisbee is flying above the grass."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The thrower is to the left of the runner."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The woman is to the right of the man in black."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The buildings are behind the trees."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The water bottle is beside the sports bag."
    },
    {
      "preposition": "in the foreground",
      "meaning_ja": "手前に",
      "example": "A picnic blanket is in the foreground."
    },
    {
      "preposition": "in the background",
      "meaning_ja": "背景に",
      "example": "Many people are in the background."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "複数の人が今行っている動作を表す。",
      "examples": [
        "The three friends are playing frisbee.",
        "They are running on the grass.",
        "Many people are enjoying the park."
      ],
      "hints": [
        "主語が複数なので is ではなく are を使います。",
        "Scene 011では three friends + are playing + frisbee が中心文です。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "公園にある物や人を説明する。",
      "examples": [
        "There is a picnic blanket on the grass.",
        "There is a sports bag in the foreground.",
        "There are many people in the park."
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
      "purpose_ja": "人物、天気、場所の状態を表す。",
      "examples": [
        "The players are energetic.",
        "The park is lively.",
        "The sky is bright and blue."
      ],
      "hints": [
        "energetic, lively, sunny, active などを使いましょう。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "前置詞を使った位置表現",
      "level": "beginner",
      "purpose_ja": "人物や物の位置を説明する。",
      "examples": [
        "The man in black is in the center.",
        "The frisbee is above the grass.",
        "The blanket is in the foreground."
      ],
      "hints": [
        "in, on, above, between, behind, beside などを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + verb + adverb",
      "label_ja": "副詞を使った動作の説明",
      "level": "intermediate",
      "purpose_ja": "走る、投げる、動く様子を詳しく説明する。",
      "examples": [
        "The man is running quickly.",
        "The frisbee is flying smoothly.",
        "The players are moving energetically."
      ],
      "hints": [
        "quickly, smoothly, energetically, happily などを使うと動きが伝わります。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + be + present participle + to-infinitive",
      "label_ja": "目的を表すto不定詞",
      "level": "intermediate",
      "purpose_ja": "走る・動く目的を表す。",
      "examples": [
        "The man is running to catch the frisbee.",
        "The woman is reaching out to join the play.",
        "The players are moving to receive the next pass."
      ],
      "hints": [
        "to + 動詞で「〜するために」を表せます。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "while + clause",
      "label_ja": "whileを使った同時進行",
      "level": "intermediate",
      "purpose_ja": "複数の人物の動作を同時に描写する。",
      "examples": [
        "One man is running while the other is watching the disc.",
        "The woman is reaching out while the frisbee is flying.",
        "They are playing while other visitors relax nearby."
      ],
      "hints": [
        "whileを使うと、同時に起きている動作を一文で表せます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物へ追加情報を加える。",
      "examples": [
        "The man who is wearing black is running.",
        "The frisbee that is flying above the grass is white.",
        "The park, which is surrounded by trees, is crowded."
      ],
      "hints": [
        "人には who、物には which または that を使います。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の動作を簡潔につなぐ。",
      "examples": [
        "Running across the field, the man prepares to catch the frisbee.",
        "Reaching out with both arms, the woman joins the game.",
        "Flying above the grass, the white disc connects the players."
      ],
      "hints": [
        "文頭を動詞ingで始めると、動きのある高度な描写になります。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "背景や状態を文頭で示す。",
      "examples": [
        "Surrounded by trees, the field feels open and peaceful.",
        "Bathed in sunlight, the park looks vivid and energetic.",
        "Spread across the lawn, the visitors enjoy different activities."
      ],
      "hints": [
        "Surrounded, Bathed, Spread などから始めると背景を豊かにできます。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "It looks like / It seems that ...",
      "label_ja": "推量の表現",
      "level": "advanced",
      "purpose_ja": "人物関係や活動の目的を推測して表す。",
      "examples": [
        "It looks like they are close friends.",
        "They seem to be enjoying a weekend afternoon.",
        "The bag and bottle suggest that they plan to stay for a while."
      ],
      "hints": [
        "looks like, seems, suggest that を使って推測を表せます。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "make / create + object + adjective",
      "label_ja": "雰囲気への影響を表す構文",
      "level": "advanced",
      "purpose_ja": "空、日差し、人々の動きが場面へ与える影響を説明する。",
      "examples": [
        "The bright sky makes the park feel open.",
        "The players' movement makes the scene look dynamic.",
        "The trees and grass create a refreshing atmosphere."
      ],
      "hints": [
        "make + 目的語 + 形容詞、create + 名詞を使うと、雰囲気の原因を説明できます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are three young people."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are in / on ______.",
        "example": "They are in a park."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are playing frisbee."
      },
      {
        "step": 4,
        "question_ja": "誰が何をしていますか？",
        "template": "One person is ______ing, and another is ______ing.",
        "example": "One man is throwing, and another is running."
      },
      {
        "step": 5,
        "question_ja": "背景には何がありますか？",
        "template": "There is / are ______ in the background.",
        "example": "There are trees and buildings in the background."
      }
    ],
    "intermediate": [
      {
        "template": "Three young people are ______ing on ______.",
        "example": "Three young people are playing frisbee on a wide grassy field."
      },
      {
        "template": "The person on the left is ______ing, while the person in the center is ______ing.",
        "example": "The man on the left is throwing the frisbee, while the man in the center is running to catch it."
      },
      {
        "template": "In the foreground, there is / are ______.",
        "example": "In the foreground, there are a picnic blanket, a sports bag, and a water bottle."
      },
      {
        "template": "In the background, we can see ______.",
        "example": "In the background, we can see trees, many people, tall buildings, and a tower."
      },
      {
        "template": "The ______ makes the scene feel ______.",
        "example": "The blue sky and bright sunlight make the scene feel energetic and refreshing."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Running toward the flying disc, the man in black prepares to make a catch."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by trees and bathed in sunlight, the wide lawn offers an ideal space for outdoor recreation."
      },
      {
        "template": "Main clause, while + contrasting clause.",
        "example": "The man on the left completes his throw while the central player runs forward and the woman opens her arms."
      },
      {
        "template": "Relative clause + detailed background.",
        "example": "The frisbee, which is flying above the field, is moving toward the player who is running in the center."
      },
      {
        "template": "It seems / appears that + inference.",
        "example": "It seems that the group has come prepared to spend an active afternoon in the park."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "Three people are in a park.",
      "They are playing frisbee.",
      "One man is throwing the frisbee.",
      "Another man is running to catch it.",
      "The sky is blue and bright."
    ],
    "intermediate": [
      "Three young people are playing frisbee on a wide grassy field.",
      "The man on the left has thrown the disc, while the man in the center is running to catch it.",
      "A woman in a white cap is reaching out with both arms.",
      "A picnic blanket, a sports bag, and a water bottle are in the foreground.",
      "Many people, trees, buildings, and a tower can be seen in the background."
    ],
    "advanced": [
      "Bathed in bright sunlight, three young adults play frisbee across a spacious lawn in a busy city park.",
      "Having just released the disc, the man on the left keeps his arm extended, while the central player sprints forward with a smile and prepares to catch it.",
      "On the right, a woman in a white cap opens both arms and appears ready to receive the next pass.",
      "A checked picnic blanket with a sports bag and water bottle lies in the foreground, while groups of visitors, mature trees, high-rise buildings, and a distant tower create a lively urban background."
    ]
  },
  "full_description_support": {
    "beginner_model": "Three young people are in a park. They are playing frisbee on the grass. One man is throwing the frisbee. Another man is running to catch it. A woman is reaching out with both arms. There are many people and trees in the background. The sky is blue and sunny.",
    "intermediate_model": "Three young people are playing frisbee on a wide grassy field in a city park. The man on the left is wearing a white T-shirt and black shorts, and he has just thrown the disc. The man in the center is wearing a black T-shirt and gray shorts, and he is running forward to catch it. On the right, a woman in a white cap, white T-shirt, and blue jeans is reaching out with both arms. In the foreground, a checked picnic blanket holds a black sports bag, a water bottle, and some clothing. Many visitors, green trees, tall buildings, and a tower can be seen behind them under a bright blue sky.",
    "advanced_model": "Under a vivid blue sky filled with towering white clouds, three young adults play frisbee across a spacious green lawn in a lively urban park. On the left, a man in a white T-shirt and black shorts extends his right arm after releasing the spinning disc. In the center, a smiling player dressed in black and gray runs forward, adjusting his position to make the catch, while a woman in a white cap opens both arms on the right and prepares to join the next pass. In the lower foreground, a blue-and-white checked picnic blanket supports a black sports bag, a clear water bottle, and light-colored clothing, suggesting that the group has planned a longer afternoon outdoors. Beyond the players, numerous visitors walk, sit, talk, and play across the field. Mature trees frame a modern skyline of high-rise buildings and a slender tower, creating a strong contrast between open green recreation and the surrounding city."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "Three people are in a park. They are playing frisbee.",
        "ja": "3人の人が公園にいます。彼らはフリスビーをしています。",
        "focus": "three people に合わせて are playing を使い、基本のS+V+場所を作る。"
      },
      {
        "en": "One man is running. The sky is blue and sunny.",
        "ja": "1人の男性が走っています。空は青く晴れています。",
        "focus": "現在進行形とbe動詞＋形容詞を使い、動作と天気を説明する。"
      }
    ],
    "A2": [
      {
        "en": "Three young people are playing frisbee together on a wide green field.",
        "ja": "3人の若者が広い緑の芝生で一緒にフリスビーをしています。",
        "focus": "together、wide、greenを加えて、人物・場所・様子を詳しくする。"
      },
      {
        "en": "One man is throwing the disc, while another is running to catch it.",
        "ja": "1人の男性がディスクを投げ、もう1人がそれを捕るために走っています。",
        "focus": "while と to catch を使い、同時動作と目的を表す。"
      }
    ],
    "B1": [
      {
        "en": "A group of friends is enjoying an active afternoon by playing frisbee in a busy city park.",
        "ja": "友人のグループが、にぎやかな都市公園でフリスビーをしながら活動的な午後を楽しんでいます。",
        "focus": "a group of friends、enjoying an active afternoon、by playingを使う。"
      },
      {
        "en": "The flying disc, energetic movements, and bright weather create a cheerful and healthy outdoor atmosphere.",
        "ja": "飛んでいるディスク、活発な動き、明るい天気が、楽しく健康的な屋外の雰囲気を作っています。",
        "focus": "複数の名詞を主語にし、create + atmosphere を使う。"
      }
    ],
    "B2": [
      {
        "en": "Running toward the disc that has just been released, the central player adjusts his position while the woman on the right prepares for the next pass.",
        "ja": "放たれたばかりのディスクへ走りながら、中央のプレーヤーは位置を調整し、右の女性は次のパスに備えています。",
        "focus": "Runningで始める分詞構文、that節、whileを組み合わせる。"
      },
      {
        "en": "The park, which is surrounded by mature trees and overlooked by a modern skyline, seems to provide an ideal setting for friends who want to combine exercise, recreation, and social interaction.",
        "ja": "成長した木々に囲まれ、現代的な都市景観を望む公園は、運動、余暇、交流を組み合わせたい友人たちに理想的な場所を提供しているようです。",
        "focus": "whichとwhoを使う関係代名詞、受動態、seems toを組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene011Data = scene011Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene011Data;
}
