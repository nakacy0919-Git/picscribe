"use strict";

const scene023Data = {
  "id": "scene_023",
  "image_id": "023.webp",
  "overall_description_ja": "強い風が吹く曇天の海辺で、若い女性が大型の茶色い犬をリードにつなぎ、波打ち際に沿って右方向へ歩いている。女性は横向きの姿で前方を見ながら進み、長い黒髪、チェック柄のマフラー、ベージュ系の長いトレンチコートが強風で大きく後方へなびいている。両手で張ったリードを握り、濃いワイドパンツと白いスニーカーを着用している。犬はゴールデンレトリバーのような大型犬で、黒いハーネスを着け、口を開けながら元気に前へ歩いている。犬の耳、長い毛、尾も後方へ流れている。砂浜には足跡、犬の足跡、濡れた砂と乾いた砂、風で飛ぶ砂粒が見える。海は灰緑色で荒れており、複数の波が白い泡と高い水しぶきを上げている。空には厚い灰色の嵐雲が広がるが、右上の雲の切れ間から冷たい白い光が差し込んでいる。左奥には岬と小さな海辺の建物、沖には低い岩礁が見える。全体として、寒さ、力強さ、孤独、爽快感、自然の激しさ、女性と犬の信頼関係が感じられる映画的な場面である。",
  "overall_description_en": "On a cold and extremely windy beach beneath a stormy sky, a young woman walks a large golden-brown dog along the shoreline toward the right. Her long dark hair, checked scarf, and beige-gray trench coat stream backward in the wind. She grips a taut leash with both hands and leans slightly forward. The dog wears a dark harness and walks energetically ahead with its ears, fur, and tail blown backward. Footprints, paw prints, wet sand, dry sand, and airborne grains cover the beach. Rough gray-green waves break repeatedly and create white foam and spray. Heavy storm clouds fill the sky, while a bright opening on the upper right introduces cold silver light. A distant headland, small coastal buildings, and offshore rocks provide depth. The scene feels powerful, cold, windswept, cinematic, solitary, refreshing, and emotionally connected.",
  "overall_mood": [
    "windswept",
    "stormy",
    "cold",
    "dramatic",
    "cinematic",
    "powerful",
    "solitary",
    "refreshing",
    "tense",
    "coastal",
    "dynamic",
    "gray",
    "resilient",
    "atmospheric",
    "connected"
  ],
  "mission_guides": {
    "gist": "女性と犬がどこを、どのように歩いているかを書こう。",
    "setting": "荒れた海、波、砂浜、厚い雲、岬、遠くの建物を説明しよう。",
    "details": "髪、マフラー、コート、リード、ハーネス、犬の毛、足跡、飛ぶ砂を加えよう。",
    "complete": "強風、寒さ、自然の力、前進する動き、女性と犬の信頼関係まで描写しよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young woman walking a large dog along the beach",
        "ja": "海岸に沿って大型犬を散歩させる若い女性"
      },
      {
        "en": "moving toward the right against a strong coastal wind",
        "ja": "強い海風に逆らいながら右へ進む"
      },
      {
        "en": "holding a tense leash with both hands",
        "ja": "張ったリードを両手で握る"
      },
      {
        "en": "a golden-brown dog walking energetically ahead of her",
        "ja": "女性の前を元気に歩く金茶色の犬"
      }
    ],
    "setting": [
      {
        "en": "on a wide sandy beach beside rough gray-green waves",
        "ja": "荒れた灰緑色の波のそばの広い砂浜で"
      },
      {
        "en": "beneath thick dark storm clouds",
        "ja": "厚く暗い嵐雲の下で"
      },
      {
        "en": "with sea spray, foam, sand, and wind moving through the scene",
        "ja": "水しぶき、泡、砂、風が場面を動いている"
      },
      {
        "en": "with a distant headland and coastal buildings on the left",
        "ja": "左奥に岬と海辺の建物がある"
      }
    ],
    "mood": [
      {
        "en": "a cold, dramatic, and windswept coastal atmosphere",
        "ja": "寒く劇的で風にさらされた海辺の雰囲気"
      },
      {
        "en": "strong natural forces creating continuous movement",
        "ja": "絶え間ない動きを作る強い自然の力"
      },
      {
        "en": "a solitary walk that still feels emotionally connected",
        "ja": "孤独に見えながら心のつながりを感じる散歩"
      },
      {
        "en": "a cinematic contrast between human resilience and rough weather",
        "ja": "人のたくましさと荒天の映画的な対比"
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
        "a woman",
        "a young woman",
        "a dog walker",
        "a woman and her dog",
        "the woman",
        "she",
        "they"
      ],
      "hint_msg": "a young womanやa woman and her dogなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は女性と犬が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "is walking",
        "is holding",
        "is leading",
        "is moving",
        "is struggling",
        "is leaning",
        "is gripping",
        "is walking her dog"
      ],
      "hint_msg": "is walkingやis holdingなど、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次はどこを歩き、どんな天候かを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "her dog",
        "along the beach",
        "beside the rough sea",
        "against the wind",
        "on the sand",
        "near the waves",
        "under storm clouds",
        "toward the right"
      ],
      "hint_msg": "along the beach / against the wind / beside the rough seaなどを加えましょう。",
      "success_msg": "Excellent! 髪、衣服、犬の毛、リード、波、雲、砂、遠景まで詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "a woman walking a dog",
    "a strong coastal wind",
    "long hair blowing backward",
    "a checked scarf streaming in the wind",
    "a long trench coat billowing",
    "a tense leash",
    "a golden retriever wearing a harness",
    "the dog fur and tail blowing backward",
    "rough gray-green waves",
    "white foam and sea spray",
    "storm clouds",
    "bright light through a break in the clouds",
    "footprints and paw prints",
    "windblown sand",
    "a distant headland and coastal settlement",
    "resilience and companionship"
  ],
  "scene_structure": {
    "foreground": [
      "woman",
      "large dog",
      "tense leash",
      "footprints",
      "paw prints",
      "windblown sand"
    ],
    "midground": [
      "breaking waves",
      "white foam",
      "wet shoreline",
      "sea spray",
      "moving coat and scarf"
    ],
    "background": [
      "storm clouds",
      "bright opening in the sky",
      "distant headland",
      "coastal buildings",
      "offshore rocks",
      "dark horizon"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "young woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman walks in profile across the windy beach while holding a dog leash with both hands.",
      "bounding_box_conceptual": [
        19,
        20,
        63,
        30
      ],
      "color": [
        "beige",
        "black",
        "gray",
        "white"
      ],
      "attributes": [
        "young",
        "long-haired",
        "walking",
        "windswept",
        "focused"
      ],
      "action": [
        "walking",
        "holding the leash",
        "leaning forward"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "dog walker"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "dog walker"
      ],
      "common_typos": [
        "woan"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "young woman",
            "ja": "若い女性"
          }
        ],
        "A2": [
          {
            "en": "young woman",
            "ja": "若い女性を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "female walker",
            "ja": "若い女性を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "coastal walker",
            "ja": "若い女性を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a solitary figure moving steadily through hostile weather",
          "ja": "厳しい天候の中を着実に進む一人の人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, young woman, dog walker, female walker, person",
          "text_en": "woman, young woman, dog walker, female walker, person",
          "text_ja": "若い女性に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are young woman in the picture.",
          "text_en": "There is / are young woman in the picture.",
          "text_ja": "画像には若い女性があります。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "golden-brown dog",
      "label_ja": "金茶色の大型犬",
      "category": "animal",
      "importance": "primary",
      "description": "A large golden-brown dog walks ahead on the right with its mouth open and fur blowing backward.",
      "bounding_box_conceptual": [
        58,
        46,
        36,
        25
      ],
      "color": [
        "golden brown",
        "tan",
        "dark brown"
      ],
      "attributes": [
        "large",
        "energetic",
        "long-haired",
        "harnessed",
        "forward-moving"
      ],
      "action": [
        "walking",
        "pulling slightly",
        "looking ahead"
      ],
      "synonyms_and_related_words": [
        "dog",
        "large dog",
        "golden retriever"
      ],
      "accepted_words": [
        "dog",
        "large dog",
        "golden retriever"
      ],
      "common_typos": [
        "dogg"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "golden-brown dog",
            "ja": "金茶色の大型犬"
          }
        ],
        "A2": [
          {
            "en": "large dog",
            "ja": "金茶色の大型犬を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "brown dog",
            "ja": "金茶色の大型犬を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "canine",
            "ja": "金茶色の大型犬を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm-colored animal moving through a cold gray landscape",
          "ja": "冷たい灰色の景色を進む暖色の動物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "dog, large dog, golden retriever, brown dog, pet",
          "text_en": "dog, large dog, golden retriever, brown dog, pet",
          "text_ja": "金茶色の大型犬に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are golden-brown dog in the picture.",
          "text_en": "There is / are golden-brown dog in the picture.",
          "text_ja": "画像には金茶色の大型犬があります。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "long dark hair",
      "label_ja": "長い黒髪",
      "category": "body",
      "importance": "primary",
      "description": "The woman long dark hair streams strongly to the left and behind her.",
      "bounding_box_conceptual": [
        15,
        21,
        25,
        25
      ],
      "color": [
        "black",
        "dark brown"
      ],
      "attributes": [
        "long",
        "windblown",
        "flowing",
        "dark",
        "untied"
      ],
      "action": [
        "streaming backward",
        "moving in the wind",
        "framing the face"
      ],
      "synonyms_and_related_words": [
        "long hair",
        "dark hair",
        "black hair"
      ],
      "accepted_words": [
        "long hair",
        "dark hair",
        "black hair"
      ],
      "common_typos": [
        "log hair"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "long dark hair",
            "ja": "長い黒髪"
          }
        ],
        "A2": [
          {
            "en": "dark hair",
            "ja": "長い黒髪を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "windblown hair",
            "ja": "長い黒髪を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "loose hair",
            "ja": "長い黒髪を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "dark strands making the invisible wind visible",
          "ja": "見えない風を見えるものにする濃色の髪"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "long hair, dark hair, black hair, windblown hair, flowing hair",
          "text_en": "long hair, dark hair, black hair, windblown hair, flowing hair",
          "text_ja": "長い黒髪に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are long dark hair in the picture.",
          "text_en": "There is / are long dark hair in the picture.",
          "text_ja": "画像には長い黒髪があります。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "checked scarf",
      "label_ja": "チェック柄のマフラー",
      "category": "clothing",
      "importance": "primary",
      "description": "A thick black-and-gray checked scarf is wrapped around the woman neck and blown backward.",
      "bounding_box_conceptual": [
        21,
        17,
        23,
        24
      ],
      "color": [
        "black",
        "gray",
        "white"
      ],
      "attributes": [
        "checked",
        "thick",
        "warm",
        "windblown",
        "long"
      ],
      "action": [
        "wrapping the neck",
        "streaming backward",
        "protecting from cold"
      ],
      "synonyms_and_related_words": [
        "scarf",
        "checked scarf",
        "winter scarf"
      ],
      "accepted_words": [
        "scarf",
        "checked scarf",
        "winter scarf"
      ],
      "common_typos": [
        "scrf"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "checked scarf",
            "ja": "チェック柄のマフラー"
          }
        ],
        "A2": [
          {
            "en": "checked scarf",
            "ja": "チェック柄のマフラーを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "plaid scarf",
            "ja": "チェック柄のマフラーを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "thick scarf",
            "ja": "チェック柄のマフラーを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a fabric arrow showing the direction of the wind",
          "ja": "風の方向を示す布の矢印"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "scarf, checked scarf, winter scarf, plaid scarf, neck scarf",
          "text_en": "scarf, checked scarf, winter scarf, plaid scarf, neck scarf",
          "text_ja": "チェック柄のマフラーに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are checked scarf in the picture.",
          "text_en": "There is / are checked scarf in the picture.",
          "text_ja": "画像にはチェック柄のマフラーがあります。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "long trench coat",
      "label_ja": "長いトレンチコート",
      "category": "clothing",
      "importance": "primary",
      "description": "A beige-gray trench coat billows and flares behind the woman as she walks.",
      "bounding_box_conceptual": [
        24,
        19,
        50,
        30
      ],
      "color": [
        "beige",
        "taupe",
        "gray"
      ],
      "attributes": [
        "long",
        "windblown",
        "loose",
        "protective",
        "billowing"
      ],
      "action": [
        "flaring",
        "moving with the wind",
        "covering the body"
      ],
      "synonyms_and_related_words": [
        "trench coat",
        "long coat",
        "beige coat"
      ],
      "accepted_words": [
        "trench coat",
        "long coat",
        "beige coat"
      ],
      "common_typos": [
        "trnch coat"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "long trench coat",
            "ja": "長いトレンチコート"
          }
        ],
        "A2": [
          {
            "en": "long coat",
            "ja": "長いトレンチコートを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "windproof coat",
            "ja": "長いトレンチコートを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "overcoat",
            "ja": "長いトレンチコートを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a protective layer becoming a sail in the wind",
          "ja": "風の中で帆になる防護服"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "trench coat, long coat, beige coat, windproof coat, outer coat",
          "text_en": "trench coat, long coat, beige coat, windproof coat, outer coat",
          "text_ja": "長いトレンチコートに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are long trench coat in the picture.",
          "text_en": "There is / are long trench coat in the picture.",
          "text_ja": "画像には長いトレンチコートがあります。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "dark wide-leg trousers",
      "label_ja": "濃い色のワイドパンツ",
      "category": "clothing",
      "importance": "secondary",
      "description": "The woman wears dark wide-leg trousers that move slightly with each step.",
      "bounding_box_conceptual": [
        46,
        25,
        34,
        18
      ],
      "color": [
        "black",
        "charcoal",
        "dark gray"
      ],
      "attributes": [
        "wide",
        "dark",
        "loose",
        "practical",
        "moving"
      ],
      "action": [
        "being worn",
        "swinging with the stride"
      ],
      "synonyms_and_related_words": [
        "trousers",
        "wide-leg trousers",
        "dark pants"
      ],
      "accepted_words": [
        "trousers",
        "wide-leg trousers",
        "dark pants"
      ],
      "common_typos": [
        "trusers"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dark wide-leg trousers",
            "ja": "濃い色のワイドパンツ"
          }
        ],
        "A2": [
          {
            "en": "wide-leg trousers",
            "ja": "濃い色のワイドパンツを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "black pants",
            "ja": "濃い色のワイドパンツを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "wide pants",
            "ja": "濃い色のワイドパンツを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "dark fabric grounding the figure against pale sand",
          "ja": "明るい砂に対して人物を安定させる濃色の布"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "trousers, wide-leg trousers, dark pants, black pants, loose trousers",
          "text_en": "trousers, wide-leg trousers, dark pants, black pants, loose trousers",
          "text_ja": "濃い色のワイドパンツに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are dark wide-leg trousers in the picture.",
          "text_en": "There is / are dark wide-leg trousers in the picture.",
          "text_ja": "画像には濃い色のワイドパンツがあります。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "white sneakers",
      "label_ja": "白いスニーカー",
      "category": "clothing",
      "importance": "secondary",
      "description": "White sneakers step across the damp and dry sand.",
      "bounding_box_conceptual": [
        76,
        25,
        16,
        18
      ],
      "color": [
        "white",
        "light gray"
      ],
      "attributes": [
        "white",
        "casual",
        "practical",
        "sand-marked",
        "walking"
      ],
      "action": [
        "stepping",
        "pressing into sand",
        "leaving footprints"
      ],
      "synonyms_and_related_words": [
        "sneakers",
        "white shoes",
        "trainers"
      ],
      "accepted_words": [
        "sneakers",
        "white shoes",
        "trainers"
      ],
      "common_typos": [
        "snakers"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "white sneakers",
            "ja": "白いスニーカー"
          }
        ],
        "A2": [
          {
            "en": "white shoes",
            "ja": "白いスニーカーを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "walking shoes",
            "ja": "白いスニーカーを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "sports shoes",
            "ja": "白いスニーカーを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "light shoes marking each step in darkened sand",
          "ja": "暗い砂に一歩ごとの跡を残す明るい靴"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sneakers, white shoes, trainers, walking shoes, casual shoes",
          "text_en": "sneakers, white shoes, trainers, walking shoes, casual shoes",
          "text_ja": "白いスニーカーに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are white sneakers in the picture.",
          "text_en": "There is / are white sneakers in the picture.",
          "text_ja": "画像には白いスニーカーがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible white sneakers shaped by strong coastal wind",
          "text_en": "a clearly visible white sneakers shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える白いスニーカー"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "dog leash",
      "label_ja": "犬のリード",
      "category": "object",
      "importance": "primary",
      "description": "A dark leash stretches diagonally and tightly between the woman hands and the dog harness.",
      "bounding_box_conceptual": [
        37,
        42,
        28,
        26
      ],
      "color": [
        "black",
        "dark brown"
      ],
      "attributes": [
        "taut",
        "diagonal",
        "dark",
        "functional",
        "tensioned"
      ],
      "action": [
        "connecting woman and dog",
        "pulling",
        "guiding movement"
      ],
      "synonyms_and_related_words": [
        "leash",
        "dog leash",
        "lead"
      ],
      "accepted_words": [
        "leash",
        "dog leash",
        "lead"
      ],
      "common_typos": [
        "lesh"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dog leash",
            "ja": "犬のリード"
          }
        ],
        "A2": [
          {
            "en": "dog leash",
            "ja": "犬のリードを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "dog lead",
            "ja": "犬のリードを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "walking leash",
            "ja": "犬のリードを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a tense line physically linking two moving bodies",
          "ja": "二つの動く身体を物理的につなぐ張った線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "leash, dog leash, lead, dog lead, rope",
          "text_en": "leash, dog leash, lead, dog lead, rope",
          "text_ja": "犬のリードに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are dog leash in the picture.",
          "text_en": "There is / are dog leash in the picture.",
          "text_ja": "画像には犬のリードがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible dog leash shaped by strong coastal wind",
          "text_en": "a clearly visible dog leash shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える犬のリード"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "dog harness",
      "label_ja": "犬のハーネス",
      "category": "object",
      "importance": "primary",
      "description": "A dark harness is fitted around the dog chest and back.",
      "bounding_box_conceptual": [
        51,
        58,
        22,
        19
      ],
      "color": [
        "black",
        "dark brown"
      ],
      "attributes": [
        "secure",
        "dark",
        "practical",
        "fitted",
        "supportive"
      ],
      "action": [
        "holding the leash",
        "supporting control",
        "being worn"
      ],
      "synonyms_and_related_words": [
        "harness",
        "dog harness",
        "pet harness"
      ],
      "accepted_words": [
        "harness",
        "dog harness",
        "pet harness"
      ],
      "common_typos": [
        "haness"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dog harness",
            "ja": "犬のハーネス"
          }
        ],
        "A2": [
          {
            "en": "dog harness",
            "ja": "犬のハーネスを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "walking harness",
            "ja": "犬のハーネスを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "strap harness",
            "ja": "犬のハーネスを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "practical straps distributing the force of the leash",
          "ja": "リードの力を分散する実用的な帯"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "harness, dog harness, pet harness, walking harness, chest harness",
          "text_en": "harness, dog harness, pet harness, walking harness, chest harness",
          "text_ja": "犬のハーネスに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are dog harness in the picture.",
          "text_en": "There is / are dog harness in the picture.",
          "text_ja": "画像には犬のハーネスがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible dog harness shaped by strong coastal wind",
          "text_en": "a clearly visible dog harness shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える犬のハーネス"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "windblown dog fur and tail",
      "label_ja": "風になびく犬の毛と尾",
      "category": "body",
      "importance": "primary",
      "description": "The dog long fur ears and feathered tail stream backward in the wind.",
      "bounding_box_conceptual": [
        48,
        48,
        30,
        32
      ],
      "color": [
        "golden brown",
        "tan"
      ],
      "attributes": [
        "long",
        "windblown",
        "feathered",
        "moving",
        "soft"
      ],
      "action": [
        "streaming backward",
        "showing wind direction",
        "moving with the dog"
      ],
      "synonyms_and_related_words": [
        "dog fur",
        "windblown fur",
        "tail"
      ],
      "accepted_words": [
        "dog fur",
        "windblown fur",
        "tail"
      ],
      "common_typos": [
        "do fur"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "windblown dog fur and tail",
            "ja": "風になびく犬の毛と尾"
          }
        ],
        "A2": [
          {
            "en": "windblown fur",
            "ja": "風になびく犬の毛と尾を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "feathered tail",
            "ja": "風になびく犬の毛と尾を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "dog hair",
            "ja": "風になびく犬の毛と尾を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "soft animal fur recording the force of the coastal wind",
          "ja": "海風の力を記録する柔らかな動物の毛"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "dog fur, windblown fur, tail, feathered tail, long fur",
          "text_en": "dog fur, windblown fur, tail, feathered tail, long fur",
          "text_ja": "風になびく犬の毛と尾に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are windblown dog fur and tail in the picture.",
          "text_en": "There is / are windblown dog fur and tail in the picture.",
          "text_ja": "画像には風になびく犬の毛と尾があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible windblown dog fur and tail shaped by strong coastal wind",
          "text_en": "a clearly visible windblown dog fur and tail shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える風になびく犬の毛と尾"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "sandy beach",
      "label_ja": "砂浜",
      "category": "setting",
      "importance": "primary",
      "description": "A wide gray-beige beach stretches from the foreground into the left distance.",
      "bounding_box_conceptual": [
        43,
        0,
        57,
        100
      ],
      "color": [
        "gray",
        "beige",
        "brown"
      ],
      "attributes": [
        "wide",
        "open",
        "wind-swept",
        "damp",
        "uneven"
      ],
      "action": [
        "supporting footprints",
        "meeting the sea",
        "carrying blown sand"
      ],
      "synonyms_and_related_words": [
        "beach",
        "sandy beach",
        "shore"
      ],
      "accepted_words": [
        "beach",
        "sandy beach",
        "shore"
      ],
      "common_typos": [
        "bech"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sandy beach",
            "ja": "砂浜"
          }
        ],
        "A2": [
          {
            "en": "sandy beach",
            "ja": "砂浜を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "coast",
            "ja": "砂浜を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "sand",
            "ja": "砂浜を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "an open surface exposed to sea sky and wind",
          "ja": "海、空、風にさらされた開けた表面"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "beach, sandy beach, shore, coast, seashore",
          "text_en": "beach, sandy beach, shore, coast, seashore",
          "text_ja": "砂浜に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are sandy beach in the picture.",
          "text_en": "There is / are sandy beach in the picture.",
          "text_ja": "画像には砂浜があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible sandy beach shaped by strong coastal wind",
          "text_en": "a clearly visible sandy beach shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える砂浜"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "footprints and paw prints",
      "label_ja": "足跡と犬の足跡",
      "category": "setting",
      "importance": "secondary",
      "description": "Human footprints and paw prints mark the sand behind and around the figures.",
      "bounding_box_conceptual": [
        65,
        0,
        35,
        100
      ],
      "color": [
        "dark gray",
        "brown",
        "beige"
      ],
      "attributes": [
        "temporary",
        "irregular",
        "visible",
        "repeated",
        "compressed"
      ],
      "action": [
        "recording movement",
        "leading across the beach",
        "showing direction"
      ],
      "synonyms_and_related_words": [
        "footprints",
        "paw prints",
        "tracks"
      ],
      "accepted_words": [
        "footprints",
        "paw prints",
        "tracks"
      ],
      "common_typos": [
        "fotprints"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "footprints and paw prints",
            "ja": "足跡と犬の足跡"
          }
        ],
        "A2": [
          {
            "en": "paw prints",
            "ja": "足跡と犬の足跡を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "shoe prints",
            "ja": "足跡と犬の足跡を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "marks in the sand",
            "ja": "足跡と犬の足跡を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "temporary records of two travelers moving together",
          "ja": "一緒に進む二人の移動者の一時的な記録"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "footprints, paw prints, tracks, shoe prints, dog tracks",
          "text_en": "footprints, paw prints, tracks, shoe prints, dog tracks",
          "text_ja": "足跡と犬の足跡に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are footprints and paw prints in the picture.",
          "text_en": "There is / are footprints and paw prints in the picture.",
          "text_ja": "画像には足跡と犬の足跡があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible footprints and paw prints shaped by strong coastal wind",
          "text_en": "a clearly visible footprints and paw prints shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える足跡と犬の足跡"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "windblown sand",
      "label_ja": "風で飛ばされる砂",
      "category": "weather",
      "importance": "primary",
      "description": "Fine sand and small particles blow diagonally close to the ground.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "beige",
        "gray",
        "white"
      ],
      "attributes": [
        "fine",
        "fast",
        "diagonal",
        "airborne",
        "abrasive"
      ],
      "action": [
        "blowing",
        "streaming",
        "crossing the beach"
      ],
      "synonyms_and_related_words": [
        "blowing sand",
        "windblown sand",
        "sand particles"
      ],
      "accepted_words": [
        "blowing sand",
        "windblown sand",
        "sand particles"
      ],
      "common_typos": [
        "blwing sand"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "windblown sand",
            "ja": "風で飛ばされる砂"
          }
        ],
        "A2": [
          {
            "en": "windblown sand",
            "ja": "風で飛ばされる砂を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "flying sand",
            "ja": "風で飛ばされる砂を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "airborne sand",
            "ja": "風で飛ばされる砂を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the beach itself becoming airborne",
          "ja": "砂浜そのものが空中へ上がる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "blowing sand, windblown sand, sand particles, flying sand, sand spray",
          "text_en": "blowing sand, windblown sand, sand particles, flying sand, sand spray",
          "text_ja": "風で飛ばされる砂に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are windblown sand in the picture.",
          "text_en": "There is / are windblown sand in the picture.",
          "text_ja": "画像には風で飛ばされる砂があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible windblown sand shaped by strong coastal wind",
          "text_en": "a clearly visible windblown sand shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える風で飛ばされる砂"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "rough sea",
      "label_ja": "荒れた海",
      "category": "setting",
      "importance": "primary",
      "description": "A dark gray-green sea fills the right half with irregular wind-driven waves.",
      "bounding_box_conceptual": [
        31,
        42,
        36,
        27
      ],
      "color": [
        "gray-green",
        "dark blue",
        "white"
      ],
      "attributes": [
        "rough",
        "dark",
        "wind-driven",
        "cold",
        "restless"
      ],
      "action": [
        "surging",
        "rolling",
        "breaking"
      ],
      "synonyms_and_related_words": [
        "rough sea",
        "ocean",
        "stormy sea"
      ],
      "accepted_words": [
        "rough sea",
        "ocean",
        "stormy sea"
      ],
      "common_typos": [
        "rogh sea"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "rough sea",
            "ja": "荒れた海"
          }
        ],
        "A2": [
          {
            "en": "ocean",
            "ja": "荒れた海を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "choppy water",
            "ja": "荒れた海を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "coastal water",
            "ja": "荒れた海を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a restless surface responding violently to the wind",
          "ja": "風に激しく反応する落ち着かない表面"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "rough sea, ocean, stormy sea, choppy water, gray-green sea",
          "text_en": "rough sea, ocean, stormy sea, choppy water, gray-green sea",
          "text_ja": "荒れた海に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are rough sea in the picture.",
          "text_en": "There is / are rough sea in the picture.",
          "text_ja": "画像には荒れた海があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible rough sea shaped by strong coastal wind",
          "text_en": "a clearly visible rough sea shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える荒れた海"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "breaking waves",
      "label_ja": "砕ける波",
      "category": "nature",
      "importance": "primary",
      "description": "Multiple waves break at different distances and form white foam and spray.",
      "bounding_box_conceptual": [
        33,
        41,
        30,
        59
      ],
      "color": [
        "white",
        "gray",
        "blue-green"
      ],
      "attributes": [
        "breaking",
        "foamy",
        "layered",
        "powerful",
        "repeated"
      ],
      "action": [
        "crashing",
        "curling",
        "throwing spray"
      ],
      "synonyms_and_related_words": [
        "waves",
        "breaking waves",
        "crashing waves"
      ],
      "accepted_words": [
        "waves",
        "breaking waves",
        "crashing waves"
      ],
      "common_typos": [
        "waes"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "breaking waves",
            "ja": "砕ける波"
          }
        ],
        "A2": [
          {
            "en": "breaking waves",
            "ja": "砕ける波を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "whitecaps",
            "ja": "砕ける波を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "wave crests",
            "ja": "砕ける波を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "repeated walls of water collapsing into white foam",
          "ja": "白い泡へ崩れる繰り返す水の壁"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "waves, breaking waves, crashing waves, whitecaps, surf",
          "text_en": "waves, breaking waves, crashing waves, whitecaps, surf",
          "text_ja": "砕ける波に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are breaking waves in the picture.",
          "text_en": "There is / are breaking waves in the picture.",
          "text_ja": "画像には砕ける波があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible breaking waves shaped by strong coastal wind",
          "text_en": "a clearly visible breaking waves shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える砕ける波"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "white foam and sea spray",
      "label_ja": "白い泡と水しぶき",
      "category": "nature",
      "importance": "primary",
      "description": "White foam covers the shore while high spray rises from wave crests offshore.",
      "bounding_box_conceptual": [
        37,
        38,
        30,
        62
      ],
      "color": [
        "white",
        "light gray"
      ],
      "attributes": [
        "white",
        "foamy",
        "airborne",
        "scattered",
        "bright"
      ],
      "action": [
        "spreading",
        "rising",
        "being blown by wind"
      ],
      "synonyms_and_related_words": [
        "sea foam",
        "white foam",
        "sea spray"
      ],
      "accepted_words": [
        "sea foam",
        "white foam",
        "sea spray"
      ],
      "common_typos": [
        "se foam"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "white foam and sea spray",
            "ja": "白い泡と水しぶき"
          }
        ],
        "A2": [
          {
            "en": "white foam",
            "ja": "白い泡と水しぶきを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "water spray",
            "ja": "白い泡と水しぶきを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "splash",
            "ja": "白い泡と水しぶきを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "bright water fragments thrown into dark air",
          "ja": "暗い空気へ投げられる明るい水の断片"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sea foam, white foam, sea spray, water spray, surf foam",
          "text_en": "sea foam, white foam, sea spray, water spray, surf foam",
          "text_ja": "白い泡と水しぶきに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are white foam and sea spray in the picture.",
          "text_en": "There is / are white foam and sea spray in the picture.",
          "text_ja": "画像には白い泡と水しぶきがあります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible white foam and sea spray shaped by strong coastal wind",
          "text_en": "a clearly visible white foam and sea spray shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える白い泡と水しぶき"
        }
      ]
    },
    {
      "id": "element_017",
      "label": "storm clouds",
      "label_ja": "嵐雲",
      "category": "weather",
      "importance": "primary",
      "description": "Thick layered gray and blue-gray storm clouds fill most of the sky.",
      "bounding_box_conceptual": [
        0,
        0,
        30,
        100
      ],
      "color": [
        "dark gray",
        "blue-gray",
        "white"
      ],
      "attributes": [
        "thick",
        "layered",
        "dramatic",
        "heavy",
        "stormy"
      ],
      "action": [
        "moving",
        "covering the sky",
        "blocking sunlight"
      ],
      "synonyms_and_related_words": [
        "storm clouds",
        "dark clouds",
        "gray clouds"
      ],
      "accepted_words": [
        "storm clouds",
        "dark clouds",
        "gray clouds"
      ],
      "common_typos": [
        "strm clouds"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "storm clouds",
            "ja": "嵐雲"
          }
        ],
        "A2": [
          {
            "en": "dark clouds",
            "ja": "嵐雲を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "heavy clouds",
            "ja": "嵐雲を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "rain clouds",
            "ja": "嵐雲を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a heavy ceiling pressing down on the beach",
          "ja": "海岸を押し下げる重い天井"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "storm clouds, dark clouds, gray clouds, heavy clouds, cloudy sky",
          "text_en": "storm clouds, dark clouds, gray clouds, heavy clouds, cloudy sky",
          "text_ja": "嵐雲に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are storm clouds in the picture.",
          "text_en": "There is / are storm clouds in the picture.",
          "text_ja": "画像には嵐雲があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible storm clouds shaped by strong coastal wind",
          "text_en": "a clearly visible storm clouds shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える嵐雲"
        }
      ]
    },
    {
      "id": "element_018",
      "label": "bright opening in the clouds",
      "label_ja": "雲の切れ間の明るい部分",
      "category": "mood",
      "importance": "primary",
      "description": "A bright white opening in the upper-right clouds allows cold light to enter.",
      "bounding_box_conceptual": [
        0,
        62,
        24,
        36
      ],
      "color": [
        "white",
        "silver",
        "light gray"
      ],
      "attributes": [
        "bright",
        "cold",
        "irregular",
        "high",
        "contrasting"
      ],
      "action": [
        "letting light through",
        "illuminating sea and clouds",
        "creating hope"
      ],
      "synonyms_and_related_words": [
        "bright opening",
        "break in the clouds",
        "patch of light"
      ],
      "accepted_words": [
        "bright opening",
        "break in the clouds",
        "patch of light"
      ],
      "common_typos": [
        "brght opening"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bright opening in the clouds",
            "ja": "雲の切れ間の明るい部分"
          }
        ],
        "A2": [
          {
            "en": "break in the clouds",
            "ja": "雲の切れ間の明るい部分を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "cloud opening",
            "ja": "雲の切れ間の明るい部分を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "bright sky",
            "ja": "雲の切れ間の明るい部分を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a cold window of light inside a dark sky",
          "ja": "暗い空の中にある冷たい光の窓"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bright opening, break in the clouds, patch of light, cloud opening, silver light",
          "text_en": "bright opening, break in the clouds, patch of light, cloud opening, silver light",
          "text_ja": "雲の切れ間の明るい部分に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are bright opening in the clouds in the picture.",
          "text_en": "There is / are bright opening in the clouds in the picture.",
          "text_ja": "画像には雲の切れ間の明るい部分があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible bright opening in the clouds shaped by strong coastal wind",
          "text_en": "a clearly visible bright opening in the clouds shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える雲の切れ間の明るい部分"
        }
      ]
    },
    {
      "id": "element_019",
      "label": "distant headland",
      "label_ja": "遠くの岬",
      "category": "setting",
      "importance": "secondary",
      "description": "A dark low mountain or headland extends from the far-left coastline.",
      "bounding_box_conceptual": [
        29,
        0,
        18,
        28
      ],
      "color": [
        "dark gray",
        "brown",
        "green"
      ],
      "attributes": [
        "distant",
        "low",
        "dark",
        "coastal",
        "sloping"
      ],
      "action": [
        "extending into the sea",
        "framing the coast"
      ],
      "synonyms_and_related_words": [
        "headland",
        "cape",
        "coastal hill"
      ],
      "accepted_words": [
        "headland",
        "cape",
        "coastal hill"
      ],
      "common_typos": [
        "hedland"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "distant headland",
            "ja": "遠くの岬"
          }
        ],
        "A2": [
          {
            "en": "cape",
            "ja": "遠くの岬を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "distant mountain",
            "ja": "遠くの岬を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "cliff area",
            "ja": "遠くの岬を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark landform anchoring the far side of the coast",
          "ja": "海岸の遠い側を固定する濃色の地形"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "headland, cape, coastal hill, distant mountain, promontory",
          "text_en": "headland, cape, coastal hill, distant mountain, promontory",
          "text_ja": "遠くの岬に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are distant headland in the picture.",
          "text_en": "There is / are distant headland in the picture.",
          "text_ja": "画像には遠くの岬があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible distant headland shaped by strong coastal wind",
          "text_en": "a clearly visible distant headland shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える遠くの岬"
        }
      ]
    },
    {
      "id": "element_020",
      "label": "coastal buildings",
      "label_ja": "海辺の建物",
      "category": "setting",
      "importance": "secondary",
      "description": "Small white and gray buildings stand at the base of the distant headland.",
      "bounding_box_conceptual": [
        37,
        0,
        14,
        25
      ],
      "color": [
        "white",
        "gray",
        "brown"
      ],
      "attributes": [
        "small",
        "distant",
        "coastal",
        "low",
        "clustered"
      ],
      "action": [
        "lining the shore",
        "creating human scale",
        "sitting below the hill"
      ],
      "synonyms_and_related_words": [
        "buildings",
        "coastal buildings",
        "houses"
      ],
      "accepted_words": [
        "buildings",
        "coastal buildings",
        "houses"
      ],
      "common_typos": [
        "buldings"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "coastal buildings",
            "ja": "海辺の建物"
          }
        ],
        "A2": [
          {
            "en": "coastal buildings",
            "ja": "海辺の建物を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "seaside houses",
            "ja": "海辺の建物を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "shore buildings",
            "ja": "海辺の建物を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "tiny signs of human shelter beneath severe weather",
          "ja": "厳しい天候の下にある小さな人の住まいの印"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "buildings, coastal buildings, houses, seaside houses, small town",
          "text_en": "buildings, coastal buildings, houses, seaside houses, small town",
          "text_ja": "海辺の建物に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are coastal buildings in the picture.",
          "text_en": "There is / are coastal buildings in the picture.",
          "text_ja": "画像には海辺の建物があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible coastal buildings shaped by strong coastal wind",
          "text_en": "a clearly visible coastal buildings shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える海辺の建物"
        }
      ]
    },
    {
      "id": "element_021",
      "label": "offshore rocks",
      "label_ja": "沖の岩礁",
      "category": "setting",
      "importance": "secondary",
      "description": "Dark low rocks or islets appear near the horizon beyond the waves.",
      "bounding_box_conceptual": [
        39,
        45,
        14,
        41
      ],
      "color": [
        "dark gray",
        "black",
        "blue-gray"
      ],
      "attributes": [
        "dark",
        "low",
        "distant",
        "rocky",
        "partly hidden"
      ],
      "action": [
        "breaking the horizon",
        "resisting waves",
        "marking distance"
      ],
      "synonyms_and_related_words": [
        "rocks",
        "offshore rocks",
        "islets"
      ],
      "accepted_words": [
        "rocks",
        "offshore rocks",
        "islets"
      ],
      "common_typos": [
        "roks"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "offshore rocks",
            "ja": "沖の岩礁"
          }
        ],
        "A2": [
          {
            "en": "offshore rocks",
            "ja": "沖の岩礁を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "rocky islands",
            "ja": "沖の岩礁を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "sea rocks",
            "ja": "沖の岩礁を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "dark fixed points inside moving water",
          "ja": "動く水の中にある濃色の固定点"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "rocks, offshore rocks, islets, rocky islands, reefs",
          "text_en": "rocks, offshore rocks, islets, rocky islands, reefs",
          "text_ja": "沖の岩礁に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are offshore rocks in the picture.",
          "text_en": "There is / are offshore rocks in the picture.",
          "text_ja": "画像には沖の岩礁があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible offshore rocks shaped by strong coastal wind",
          "text_en": "a clearly visible offshore rocks shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える沖の岩礁"
        }
      ]
    },
    {
      "id": "element_022",
      "label": "cold coastal light",
      "label_ja": "冷たい海辺の光",
      "category": "mood",
      "importance": "primary",
      "description": "Cool gray-white light from the cloud opening illuminates the woman dog sea and sand.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "cool white",
        "silver",
        "gray"
      ],
      "attributes": [
        "cold",
        "diffused",
        "dramatic",
        "soft",
        "high-contrast"
      ],
      "action": [
        "illuminating forms",
        "revealing texture",
        "creating atmosphere"
      ],
      "synonyms_and_related_words": [
        "cold light",
        "coastal light",
        "gray light"
      ],
      "accepted_words": [
        "cold light",
        "coastal light",
        "gray light"
      ],
      "common_typos": [
        "cod light"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cold coastal light",
            "ja": "冷たい海辺の光"
          }
        ],
        "A2": [
          {
            "en": "coastal light",
            "ja": "冷たい海辺の光を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "diffused light",
            "ja": "冷たい海辺の光を詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "storm light",
            "ja": "冷たい海辺の光を高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "silver light revealing every moving surface",
          "ja": "すべての動く表面を明らかにする銀色の光"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cold light, coastal light, gray light, diffused light, silver light",
          "text_en": "cold light, coastal light, gray light, diffused light, silver light",
          "text_ja": "冷たい海辺の光に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are cold coastal light in the picture.",
          "text_en": "There is / are cold coastal light in the picture.",
          "text_ja": "画像には冷たい海辺の光があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible cold coastal light shaped by strong coastal wind",
          "text_en": "a clearly visible cold coastal light shaped by strong coastal wind",
          "text_ja": "強い海風の影響を受けてはっきり見える冷たい海辺の光"
        }
      ]
    }
  ],
  "text_elements": [],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "walking the dog along the beach",
      "description_ja": "海岸に沿って犬を散歩させている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_008",
        "element_011"
      ],
      "synonyms": [
        "walk the dog",
        "walk along the beach",
        "take the dog for a walk"
      ],
      "accepted_words": [
        "walk the dog",
        "walk along the beach",
        "take the dog for a walk"
      ],
      "common_typos": [
        "wak the dog"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "walking the dog along the beach",
            "ja": "海岸に沿って犬を散歩させている"
          }
        ],
        "A2": [
          {
            "en": "walk along the beach",
            "ja": "海岸に沿って犬を散歩させているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "move along the shore",
            "ja": "海岸に沿って犬を散歩させているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "lead the dog",
            "ja": "海岸に沿って犬を散歩させているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sharing forward movement across an exposed shoreline",
          "ja": "風にさらされた海岸で前進を共有する"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "walk the dog, walk along the beach, take the dog for a walk, move along the shore, walk beside the sea",
          "text_en": "walk the dog, walk along the beach, take the dog for a walk, move along the shore, walk beside the sea",
          "text_ja": "海岸に沿って犬を散歩させているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are walking the dog along the beach.",
          "text_en": "The woman and dog are walking the dog along the beach.",
          "text_ja": "女性と犬は海岸に沿って犬を散歩させている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "walking the dog along the beach while strong wind blows across the beach",
          "text_en": "walking the dog along the beach while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で海岸に沿って犬を散歩させている"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "moving against strong wind",
      "description_ja": "強い風に逆らって進んでいる",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_005",
        "element_010",
        "element_013"
      ],
      "synonyms": [
        "move against the wind",
        "walk into the wind",
        "resist the wind"
      ],
      "accepted_words": [
        "move against the wind",
        "walk into the wind",
        "resist the wind"
      ],
      "common_typos": [
        "moe against the wind"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "moving against strong wind",
            "ja": "強い風に逆らって進んでいる"
          }
        ],
        "A2": [
          {
            "en": "walk into the wind",
            "ja": "強い風に逆らって進んでいるを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "struggle forward",
            "ja": "強い風に逆らって進んでいるを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "continue despite gusts",
            "ja": "強い風に逆らって進んでいるを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "advancing while the entire environment pushes backward",
          "ja": "環境全体が後ろへ押す中で前進する"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "move against the wind, walk into the wind, resist the wind, struggle forward, lean into the wind",
          "text_en": "move against the wind, walk into the wind, resist the wind, struggle forward, lean into the wind",
          "text_ja": "強い風に逆らって進んでいるに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are moving against strong wind.",
          "text_en": "The woman and dog are moving against strong wind.",
          "text_ja": "女性と犬は強い風に逆らって進んでいる。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "moving against strong wind while strong wind blows across the beach",
          "text_en": "moving against strong wind while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で強い風に逆らって進んでいる"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "holding the leash with both hands",
      "description_ja": "両手でリードを握っている",
      "involved_elements": [
        "element_001",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "hold the leash",
        "grip the lead",
        "use both hands"
      ],
      "accepted_words": [
        "hold the leash",
        "grip the lead",
        "use both hands"
      ],
      "common_typos": [
        "hod the leash"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "holding the leash with both hands",
            "ja": "両手でリードを握っている"
          }
        ],
        "A2": [
          {
            "en": "grip the lead",
            "ja": "両手でリードを握っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "control the dog",
            "ja": "両手でリードを握っているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "guide the dog",
            "ja": "両手でリードを握っているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "using both hands to manage movement under pressure",
          "ja": "圧力の中で動きを管理するために両手を使う"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hold the leash, grip the lead, use both hands, control the dog, keep the leash tight",
          "text_en": "hold the leash, grip the lead, use both hands, control the dog, keep the leash tight",
          "text_ja": "両手でリードを握っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are holding the leash with both hands.",
          "text_en": "The woman and dog are holding the leash with both hands.",
          "text_ja": "女性と犬は両手でリードを握っている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "holding the leash with both hands while strong wind blows across the beach",
          "text_en": "holding the leash with both hands while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で両手でリードを握っている"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "dog walking energetically ahead",
      "description_ja": "犬が元気に前を歩いている",
      "involved_elements": [
        "element_002",
        "element_009",
        "element_010"
      ],
      "synonyms": [
        "dog walks ahead",
        "dog moves forward",
        "dog pulls slightly"
      ],
      "accepted_words": [
        "dog walks ahead",
        "dog moves forward",
        "dog pulls slightly"
      ],
      "common_typos": [
        "do walks ahead"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dog walking energetically ahead",
            "ja": "犬が元気に前を歩いている"
          }
        ],
        "A2": [
          {
            "en": "dog moves forward",
            "ja": "犬が元気に前を歩いているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "dog trots",
            "ja": "犬が元気に前を歩いているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "dog walks energetically",
            "ja": "犬が元気に前を歩いているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "animal energy pulling the shared journey forward",
          "ja": "共有の移動を前へ引く動物の活力"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "dog walks ahead, dog moves forward, dog pulls slightly, dog trots, dog leads the way",
          "text_en": "dog walks ahead, dog moves forward, dog pulls slightly, dog trots, dog leads the way",
          "text_ja": "犬が元気に前を歩いているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are dog walking energetically ahead.",
          "text_en": "The woman and dog are dog walking energetically ahead.",
          "text_ja": "女性と犬は犬が元気に前を歩いている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "dog walking energetically ahead while strong wind blows across the beach",
          "text_en": "dog walking energetically ahead while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で犬が元気に前を歩いている"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "hair scarf and coat blowing backward",
      "description_ja": "髪・マフラー・コートが後方へなびいている",
      "involved_elements": [
        "element_003",
        "element_004",
        "element_005",
        "element_013"
      ],
      "synonyms": [
        "hair blows backward",
        "scarf streams in the wind",
        "coat billows"
      ],
      "accepted_words": [
        "hair blows backward",
        "scarf streams in the wind",
        "coat billows"
      ],
      "common_typos": [
        "har blows backward"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hair scarf and coat blowing backward",
            "ja": "髪・マフラー・コートが後方へなびいている"
          }
        ],
        "A2": [
          {
            "en": "scarf streams in the wind",
            "ja": "髪・マフラー・コートが後方へなびいているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "fabric flaps",
            "ja": "髪・マフラー・コートが後方へなびいているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "wind catches the coat",
            "ja": "髪・マフラー・コートが後方へなびいているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "three separate materials drawing the same wind direction",
          "ja": "三つの異なる素材が同じ風向きを描く"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hair blows backward, scarf streams in the wind, coat billows, fabric flaps, clothes move in the wind",
          "text_en": "hair blows backward, scarf streams in the wind, coat billows, fabric flaps, clothes move in the wind",
          "text_ja": "髪・マフラー・コートが後方へなびいているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are hair scarf and coat blowing backward.",
          "text_en": "The woman and dog are hair scarf and coat blowing backward.",
          "text_ja": "女性と犬は髪・マフラー・コートが後方へなびいている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hair scarf and coat blowing backward while strong wind blows across the beach",
          "text_en": "hair scarf and coat blowing backward while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で髪・マフラー・コートが後方へなびいている"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "waves crashing onto the shore",
      "description_ja": "波が岸へ激しく打ち寄せている",
      "involved_elements": [
        "element_014",
        "element_015",
        "element_016"
      ],
      "synonyms": [
        "waves crash",
        "waves break",
        "surf reaches the shore"
      ],
      "accepted_words": [
        "waves crash",
        "waves break",
        "surf reaches the shore"
      ],
      "common_typos": [
        "waes crash"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "waves crashing onto the shore",
            "ja": "波が岸へ激しく打ち寄せている"
          }
        ],
        "A2": [
          {
            "en": "waves break",
            "ja": "波が岸へ激しく打ち寄せているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "water rolls in",
            "ja": "波が岸へ激しく打ち寄せているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "waves hit the beach",
            "ja": "波が岸へ激しく打ち寄せているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "repeated water impacts matching the force of the wind",
          "ja": "風の力に対応する繰り返す水の衝撃"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "waves crash, waves break, surf reaches the shore, water rolls in, whitecaps collapse",
          "text_en": "waves crash, waves break, surf reaches the shore, water rolls in, whitecaps collapse",
          "text_ja": "波が岸へ激しく打ち寄せているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are waves crashing onto the shore.",
          "text_en": "The woman and dog are waves crashing onto the shore.",
          "text_ja": "女性と犬は波が岸へ激しく打ち寄せている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "waves crashing onto the shore while strong wind blows across the beach",
          "text_en": "waves crashing onto the shore while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で波が岸へ激しく打ち寄せている"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "sea spray rising into the air",
      "description_ja": "水しぶきが空中へ舞い上がっている",
      "involved_elements": [
        "element_015",
        "element_016",
        "element_017"
      ],
      "synonyms": [
        "spray rises",
        "water splashes",
        "foam blows into the air"
      ],
      "accepted_words": [
        "spray rises",
        "water splashes",
        "foam blows into the air"
      ],
      "common_typos": [
        "spay rises"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sea spray rising into the air",
            "ja": "水しぶきが空中へ舞い上がっている"
          }
        ],
        "A2": [
          {
            "en": "water splashes",
            "ja": "水しぶきが空中へ舞い上がっているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "wave crests throw spray",
            "ja": "水しぶきが空中へ舞い上がっているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "sea spray drifts",
            "ja": "水しぶきが空中へ舞い上がっているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "water becoming airborne at the edge of each wave",
          "ja": "各波の縁で水が空中へ変わる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "spray rises, water splashes, foam blows into the air, wave crests throw spray, mist forms",
          "text_en": "spray rises, water splashes, foam blows into the air, wave crests throw spray, mist forms",
          "text_ja": "水しぶきが空中へ舞い上がっているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are sea spray rising into the air.",
          "text_en": "The woman and dog are sea spray rising into the air.",
          "text_ja": "女性と犬は水しぶきが空中へ舞い上がっている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sea spray rising into the air while strong wind blows across the beach",
          "text_en": "sea spray rising into the air while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で水しぶきが空中へ舞い上がっている"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "sand and particles blowing diagonally",
      "description_ja": "砂と細かな粒が斜めに飛んでいる",
      "involved_elements": [
        "element_011",
        "element_013",
        "element_017"
      ],
      "synonyms": [
        "sand blows",
        "particles fly",
        "wind moves the sand"
      ],
      "accepted_words": [
        "sand blows",
        "particles fly",
        "wind moves the sand"
      ],
      "common_typos": [
        "sad blows"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sand and particles blowing diagonally",
            "ja": "砂と細かな粒が斜めに飛んでいる"
          }
        ],
        "A2": [
          {
            "en": "particles fly",
            "ja": "砂と細かな粒が斜めに飛んでいるを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "sand streams across the beach",
            "ja": "砂と細かな粒が斜めに飛んでいるを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "sand is carried sideways",
            "ja": "砂と細かな粒が斜めに飛んでいるを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the beach surface breaking into moving particles",
          "ja": "砂浜の表面が動く粒へ分かれる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sand blows, particles fly, wind moves the sand, sand streams across the beach, small particles drift",
          "text_en": "sand blows, particles fly, wind moves the sand, sand streams across the beach, small particles drift",
          "text_ja": "砂と細かな粒が斜めに飛んでいるに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are sand and particles blowing diagonally.",
          "text_en": "The woman and dog are sand and particles blowing diagonally.",
          "text_ja": "女性と犬は砂と細かな粒が斜めに飛んでいる。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sand and particles blowing diagonally while strong wind blows across the beach",
          "text_en": "sand and particles blowing diagonally while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で砂と細かな粒が斜めに飛んでいる"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "continuing forward together",
      "description_ja": "女性と犬が一緒に前進し続けている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "continue forward",
        "move together",
        "walk in the same direction"
      ],
      "accepted_words": [
        "continue forward",
        "move together",
        "walk in the same direction"
      ],
      "common_typos": [
        "cotinue forward"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "continuing forward together",
            "ja": "女性と犬が一緒に前進し続けている"
          }
        ],
        "A2": [
          {
            "en": "move together",
            "ja": "女性と犬が一緒に前進し続けているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "share the path",
            "ja": "女性と犬が一緒に前進し続けているを詳しく表す表現"
          }
        ],
        "B2": [
          {
            "en": "advance as a pair",
            "ja": "女性と犬が一緒に前進し続けているを高度に分析・描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "maintaining shared direction despite unequal strength and pace",
          "ja": "異なる力と速度でも共有方向を保つ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "continue forward, move together, walk in the same direction, share the path, keep going",
          "text_en": "continue forward, move together, walk in the same direction, share the path, keep going",
          "text_ja": "女性と犬が一緒に前進し続けているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman and dog are continuing forward together.",
          "text_en": "The woman and dog are continuing forward together.",
          "text_ja": "女性と犬は女性と犬が一緒に前進し続けている。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "continuing forward together while strong wind blows across the beach",
          "text_en": "continuing forward together while strong wind blows across the beach",
          "text_ja": "強い風が海岸を吹き抜ける中で女性と犬が一緒に前進し続けている"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "young woman",
      "relationship": "to the left of",
      "object": "golden-brown dog",
      "example_beginner": "The woman is to the left of the dog.",
      "example_intermediate": "The woman walks slightly behind and to the left of the large dog."
    },
    {
      "subject": "dog",
      "relationship": "ahead of",
      "object": "woman",
      "example_beginner": "The dog is ahead of the woman.",
      "example_intermediate": "The dog moves ahead of the woman and pulls the leash diagonally forward."
    },
    {
      "subject": "leash",
      "relationship": "between",
      "object": "woman and dog",
      "example_beginner": "The leash is between them.",
      "example_intermediate": "A taut leash forms a diagonal connection between the woman hands and the dog harness."
    },
    {
      "subject": "checked scarf",
      "relationship": "behind",
      "object": "woman neck",
      "example_beginner": "The scarf is behind her.",
      "example_intermediate": "The scarf streams far behind the woman neck in the strong wind."
    },
    {
      "subject": "long hair",
      "relationship": "behind",
      "object": "woman head",
      "example_beginner": "Her hair is behind her.",
      "example_intermediate": "The woman long dark hair blows backward behind her head and shoulders."
    },
    {
      "subject": "trench coat",
      "relationship": "around",
      "object": "woman body",
      "example_beginner": "The coat is around her body.",
      "example_intermediate": "The long coat surrounds her body and flares outward behind her."
    },
    {
      "subject": "dog harness",
      "relationship": "around",
      "object": "dog chest",
      "example_beginner": "The harness is around the dog.",
      "example_intermediate": "The dark harness is secured around the dog chest and upper body."
    },
    {
      "subject": "waves",
      "relationship": "to the right of",
      "object": "figures",
      "example_beginner": "The waves are to their right.",
      "example_intermediate": "The rough sea and breaking waves occupy the right side beside the walkers."
    },
    {
      "subject": "foam",
      "relationship": "along",
      "object": "shoreline",
      "example_beginner": "Foam is along the shore.",
      "example_intermediate": "White foam spreads along the curved shoreline beside the beach."
    },
    {
      "subject": "footprints",
      "relationship": "behind",
      "object": "woman",
      "example_beginner": "Footprints are behind her.",
      "example_intermediate": "Human footprints and paw prints trail behind the woman and dog."
    },
    {
      "subject": "storm clouds",
      "relationship": "above",
      "object": "beach and sea",
      "example_beginner": "The clouds are above them.",
      "example_intermediate": "Heavy storm clouds cover almost the entire sky above the beach and sea."
    },
    {
      "subject": "bright cloud opening",
      "relationship": "above",
      "object": "rough sea",
      "example_beginner": "The bright area is above the sea.",
      "example_intermediate": "A bright opening appears in the upper-right sky above the rough water."
    },
    {
      "subject": "headland",
      "relationship": "in the distance to the left of",
      "object": "woman",
      "example_beginner": "The headland is far left.",
      "example_intermediate": "A dark coastal headland rises in the far-left background behind the woman."
    },
    {
      "subject": "coastal buildings",
      "relationship": "below",
      "object": "headland",
      "example_beginner": "The buildings are below the hill.",
      "example_intermediate": "Small white and gray buildings sit below the distant headland."
    },
    {
      "subject": "offshore rocks",
      "relationship": "near",
      "object": "horizon",
      "example_beginner": "The rocks are near the horizon.",
      "example_intermediate": "Dark low rocks or islets appear near the horizon beyond the waves."
    },
    {
      "subject": "windblown sand",
      "relationship": "across",
      "object": "beach",
      "example_beginner": "Sand moves across the beach.",
      "example_intermediate": "Fine particles of sand stream diagonally across the open beach."
    }
  ],
  "adjective_library": {
    "woman": [
      "young",
      "focused",
      "windswept",
      "determined",
      "solitary",
      "resilient",
      "long-haired",
      "coat-wearing",
      "forward-moving",
      "calm"
    ],
    "dog": [
      "large",
      "golden-brown",
      "energetic",
      "long-haired",
      "harnessed",
      "friendly",
      "forward-moving",
      "alert",
      "windswept",
      "strong"
    ],
    "weather": [
      "windy",
      "stormy",
      "cold",
      "harsh",
      "unsettled",
      "gray",
      "dramatic",
      "powerful",
      "coastal",
      "rough"
    ],
    "sea": [
      "rough",
      "choppy",
      "gray-green",
      "foamy",
      "restless",
      "cold",
      "wind-driven",
      "powerful",
      "dark",
      "spray-filled"
    ],
    "beach": [
      "wide",
      "open",
      "sandy",
      "wind-swept",
      "damp",
      "gray",
      "uneven",
      "empty",
      "cold",
      "exposed"
    ],
    "mood": [
      "cinematic",
      "dramatic",
      "solitary",
      "refreshing",
      "tense",
      "resilient",
      "atmospheric",
      "powerful",
      "connected",
      "windswept"
    ]
  },
  "preposition_library": [
    {
      "preposition": "along",
      "meaning_ja": "〜に沿って",
      "example": "The woman is walking her dog along the beach."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "They are walking beside the rough sea."
    },
    {
      "preposition": "against",
      "meaning_ja": "〜に逆らって",
      "example": "The woman is moving against the strong wind."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "Her hair and scarf are blowing behind her."
    },
    {
      "preposition": "ahead of",
      "meaning_ja": "〜の前方に",
      "example": "The dog is walking ahead of the woman."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The leash stretches between the woman and the dog."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周囲に",
      "example": "The harness is fitted around the dog chest."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "Dark storm clouds are above the beach."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "Small coastal buildings are below the headland."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The rough sea is to the right of the walkers."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The woman is to the left of the dog."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "Offshore rocks are near the horizon."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って",
      "example": "Windblown sand moves across the beach."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Cold light passes through a break in the clouds."
    },
    {
      "preposition": "toward",
      "meaning_ja": "〜の方向へ",
      "example": "The woman and dog are moving toward the right."
    },
    {
      "preposition": "away from",
      "meaning_ja": "〜から離れて",
      "example": "The scarf is blown away from her body."
    },
    {
      "preposition": "over",
      "meaning_ja": "〜の上に・〜全体に",
      "example": "Heavy clouds spread over the sea."
    },
    {
      "preposition": "under",
      "meaning_ja": "〜の下で",
      "example": "They are walking under a stormy sky."
    },
    {
      "preposition": "from",
      "meaning_ja": "〜から",
      "example": "The leash extends from her hands to the harness."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に・〜で",
      "example": "Footprints and paw prints appear on the sand."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Singular subject + is + present participle (-ing)",
      "label_ja": "単数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "女性または犬が今している動作を表す。",
      "examples": [
        "A woman is walking her dog.",
        "The dog is moving ahead.",
        "She is holding the leash."
      ],
      "hints": [
        "a womanやthe dogにはisを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "波、雲、足跡、建物などの存在を説明する。",
      "examples": [
        "There is a woman on the beach.",
        "There are large waves in the sea.",
        "There are dark clouds in the sky."
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
      "purpose_ja": "海、天気、犬、雰囲気の状態を表す。",
      "examples": [
        "The sea is rough.",
        "The wind is strong.",
        "The dog is energetic."
      ],
      "hints": [
        "rough, strong, energeticなどを使えます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "人物、犬、海、雲の位置関係を説明する。",
      "examples": [
        "The woman is on the beach.",
        "The dog is ahead of her.",
        "The clouds are above the sea."
      ],
      "hints": [
        "on, ahead of, aboveなどを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + have / has + noun",
      "label_ja": "have・hasによる所有・特徴",
      "level": "beginner",
      "purpose_ja": "犬のハーネスや女性の衣服を説明する。",
      "examples": [
        "The dog has a dark harness.",
        "The woman has long dark hair.",
        "She has a checked scarf."
      ],
      "hints": [
        "単数主語にはhasを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "while + clause",
      "label_ja": "whileによる同時進行",
      "level": "intermediate",
      "purpose_ja": "歩くこと、風が吹くこと、波が砕けることを同時に表す。",
      "examples": [
        "She holds the leash while the dog walks ahead.",
        "Her coat billows while strong wind crosses the beach.",
        "They continue walking while waves crash nearby."
      ],
      "hints": [
        "whileは「〜している間に」を表します。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "who / which / that relative clause",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を加える。",
      "examples": [
        "The woman who is wearing a long coat is walking a dog.",
        "The sea, which is extremely rough, fills the right side.",
        "The waves that are breaking near the shore produce white foam."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "look / seem / appear + adjective or infinitive",
      "label_ja": "look・seem・appearによる印象",
      "level": "intermediate",
      "purpose_ja": "寒さ、風の強さ、女性と犬の状態を推測する。",
      "examples": [
        "The weather looks severe.",
        "The woman seems to be resisting the wind.",
        "The dog appears to be enjoying the walk."
      ],
      "hints": [
        "断定しすぎない画像描写に使えます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "may / might + base verb",
      "label_ja": "may・mightによる推量",
      "level": "intermediate",
      "purpose_ja": "天候や人物の目的を推測する。",
      "examples": [
        "It may rain soon.",
        "The woman might be taking her dog for exercise.",
        "The dog may be pulling slightly on the leash."
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
      "purpose_ja": "衣服やリードの使い方の理由を説明する。",
      "examples": [
        "She wears a long coat because the weather is cold.",
        "She holds the leash with both hands so that she can control the dog.",
        "The sea is covered with foam because the waves are breaking strongly."
      ],
      "hints": [
        "becauseは理由、so thatは目的を表します。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "although / even though + clause",
      "label_ja": "譲歩を表すalthough・even though",
      "level": "intermediate",
      "purpose_ja": "荒天と散歩を続ける行動を対比する。",
      "examples": [
        "Although the wind is strong, the woman continues walking.",
        "Even though the sea is rough, the dog moves energetically.",
        "Although the sky is dark, a bright opening appears in the clouds."
      ],
      "hints": [
        "althoughは「〜にもかかわらず」を表します。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の同時動作を簡潔に表す。",
      "examples": [
        "Holding the leash with both hands, the woman leans into the wind.",
        "Walking ahead, the dog pulls the line diagonally forward.",
        "Breaking near the shore, the waves throw white spray into the air."
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
      "purpose_ja": "風にさらされた状態や雲に覆われた状態を表す。",
      "examples": [
        "Blown backward by the wind, her hair and scarf reveal the weather force.",
        "Covered by storm clouds, the coastline appears cold and severe.",
        "Connected by a taut leash, the woman and dog move in the same direction."
      ],
      "hints": [
        "Blown, Covered, Connectedなどから始めます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "動作や構図上の効果を説明する。",
      "examples": [
        "By leaning forward, the woman stabilizes herself against the wind.",
        "By stretching diagonally, the leash connects the two moving figures.",
        "By breaking repeatedly, the waves create continuous motion."
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
      "purpose_ja": "天候や関係性の複数の意味を強調する。",
      "examples": [
        "The wind moves not only her hair but also her scarf and coat.",
        "The scene shows not only harsh weather but also companionship.",
        "The waves create not only foam but also high sea spray."
      ],
      "hints": [
        "AとBには同じ種類の語句を置きます。"
      ]
    },
    {
      "id": "grammar_016",
      "pattern": "It looks as though / It seems that",
      "label_ja": "It looks as though・It seems that",
      "level": "advanced",
      "purpose_ja": "風の強さや女性と犬の関係を慎重に推測する。",
      "examples": [
        "It looks as though the wind is making it difficult to walk.",
        "It seems that the dog is leading the way.",
        "It looks as though the woman and dog are used to walking together."
      ],
      "hints": [
        "断定できない内容の推測に使います。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "The fact that + clause + suggests that + clause",
      "label_ja": "The fact thatを使った証拠からの推論",
      "level": "advanced",
      "purpose_ja": "画像内の視覚的証拠から論理的に推測する。",
      "examples": [
        "The fact that her hair and coat are blown backward suggests that the wind is extremely strong.",
        "The fact that the leash is taut suggests that the dog is pulling ahead.",
        "The fact that several waves are breaking at once suggests that the sea is rough."
      ],
      "hints": [
        "見える事実と推測を一文で論理的につなげます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There is ______.",
        "example": "There is a young woman and a large dog."
      },
      {
        "step": 2,
        "question_ja": "何をしていますか？",
        "template": "She is ______ing.",
        "example": "She is walking her dog."
      },
      {
        "step": 3,
        "question_ja": "どこを歩いていますか？",
        "template": "They are walking along ______.",
        "example": "They are walking along the beach."
      },
      {
        "step": 4,
        "question_ja": "天気はどうですか？",
        "template": "The weather is ______.",
        "example": "The weather is windy and stormy."
      },
      {
        "step": 5,
        "question_ja": "女性の服や髪はどう動いていますか？",
        "template": "Her ______ is / are blowing backward.",
        "example": "Her hair, scarf, and coat are blowing backward."
      },
      {
        "step": 6,
        "question_ja": "海はどんな様子ですか？",
        "template": "The sea is ______.",
        "example": "The sea is rough and full of white foam."
      },
      {
        "step": 7,
        "question_ja": "雰囲気はどうですか？",
        "template": "The scene feels ______.",
        "example": "The scene feels cold, dramatic, and powerful."
      }
    ],
    "intermediate": [
      {
        "template": "A young woman is ______ing with ______.",
        "example": "A young woman is walking along a beach with a large golden-brown dog."
      },
      {
        "template": "Because the wind is strong, ______.",
        "example": "Because the wind is strong, her hair, scarf, and coat stream behind her."
      },
      {
        "template": "The dog is ______ while ______.",
        "example": "The dog is walking energetically while pulling slightly on the leash."
      },
      {
        "template": "To the right, ______.",
        "example": "To the right, rough gray-green waves are crashing onto the shore."
      },
      {
        "template": "Above them, ______.",
        "example": "Above them, thick storm clouds fill almost the entire sky."
      },
      {
        "template": "Although the weather is severe, ______.",
        "example": "Although the weather is severe, the woman and dog continue moving forward."
      },
      {
        "template": "It looks as though ______.",
        "example": "It looks as though they are familiar with walking together in difficult weather."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Gripping the leash with both hands, the woman leans into the coastal wind."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Blown backward by powerful gusts, her hair, scarf, and coat create strong visual movement."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The woman, who is dressed in a long beige coat, appears determined to continue the walk."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The leash, which forms a taut diagonal line, physically and visually connects the two figures."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By moving in the same direction, the woman and dog create a clear sense of companionship."
      },
      {
        "template": "Although / even though.",
        "example": "Although the sea and sky appear threatening, the shared walk feels purposeful rather than fearful."
      },
      {
        "template": "The fact that ... suggests that ...",
        "example": "The fact that every loose material streams backward suggests that the wind is both strong and consistent."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A young woman is walking a dog on the beach.",
      "The dog is large and brown.",
      "The woman is holding the leash.",
      "She is wearing a long beige coat.",
      "Her hair is blowing backward.",
      "Her scarf is moving in the wind.",
      "The dog has a dark harness.",
      "The sea is rough.",
      "There are large waves and white foam.",
      "There are dark clouds in the sky.",
      "The scene is cold, windy, and dramatic."
    ],
    "intermediate": [
      "A young woman is walking a large golden-brown dog along a windy beach.",
      "She wears a long beige-gray trench coat, dark trousers, white sneakers, and a checked scarf.",
      "Her long dark hair, scarf, and coat are blown strongly backward.",
      "She holds the leash with both hands and leans slightly forward against the wind.",
      "The dog walks energetically ahead while wearing a dark harness.",
      "The leash is tight and forms a diagonal line between them.",
      "Rough gray-green waves crash near the shore and create white foam and spray.",
      "Footprints, paw prints, and windblown sand cover the beach.",
      "Heavy storm clouds fill the sky, but a bright opening appears on the right.",
      "A distant headland and small coastal buildings can be seen on the left."
    ],
    "advanced": [
      "A young woman and a large golden-brown dog move steadily along an exposed beach under severe coastal weather.",
      "The woman, positioned slightly left of center, grips a taut leash with both hands and leans into the wind.",
      "Her long dark hair, checked scarf, and loose trench coat stream backward, clearly revealing the wind direction and force.",
      "The dog walks ahead with its mouth open, while its ears, long fur, and feathered tail are blown in the same direction.",
      "The diagonal leash connects the figures physically and becomes a strong compositional line.",
      "The beach records their movement through footprints, paw prints, disturbed sand, and wind-drawn surface patterns.",
      "To the right, several layers of gray-green waves collapse into white foam and airborne spray.",
      "Above the sea, thick blue-gray clouds create a heavy atmosphere, although a bright opening introduces cold silver light.",
      "A distant headland, coastal settlement, and offshore rocks provide scale and location.",
      "The image combines harsh weather, physical effort, natural power, solitude, resilience, and trust between a person and an animal."
    ]
  },
  "full_description_support": {
    "beginner_model": "A young woman is walking a large brown dog on a beach. They are moving to the right. The woman is wearing a long beige coat, dark pants, white shoes, and a checked scarf. She has long dark hair. Her hair, scarf, and coat are blowing backward. She is holding the leash with both hands. The dog has a dark harness and is walking ahead of her. The sea is rough, and there are many large waves. White foam is near the shore. There are dark storm clouds in the sky. There are footprints and paw prints on the sand. The scene is cold, windy, dramatic, and powerful.",
    "intermediate_model": "A young woman is walking a large golden-brown dog along a wide beach during extremely windy weather. She walks in profile toward the right while wearing a long beige-gray trench coat, dark wide-leg trousers, white sneakers, and a black-and-gray checked scarf. Her long dark hair, scarf, and coat stream backward because of the strong wind. She grips a dark leash with both hands and leans slightly forward. The dog walks energetically ahead of her and wears a black harness. Its ears, fur, and long tail are also blown backward. The leash is taut and forms a clear diagonal line between them. The beach contains footprints, paw prints, damp sand, dry sand, and fine particles blowing close to the ground. Rough gray-green waves break repeatedly and create white foam and high spray. Heavy storm clouds fill the sky, while a bright opening in the upper-right allows cold light to reach the sea and beach. A distant headland and small coastal buildings appear on the left.",
    "advanced_model": "On an exposed coastline beneath a turbulent storm sky, a young woman and a large golden-brown dog continue walking toward the right despite powerful coastal wind. Shown in profile, the woman grips the leash with both hands and leans slightly forward, using her posture to resist the force pressing against her movement. Her long dark hair, checked scarf, and loose beige-gray trench coat all stream backward, forming parallel visual indicators of wind direction and speed. The dog, which wears a fitted dark harness, moves energetically ahead with its mouth open, while its ears, body fur, and feathered tail are blown in the same direction. A taut diagonal leash physically connects the two figures and communicates both control and trust. The broad beach is textured with shoe prints, paw prints, damp and dry sand, scattered stones, and fine grains that move diagonally near the surface. To the right, multiple gray-green waves break at different distances, producing white foam, high spray, and a repeated rhythm of impact. The sea motion is visually reinforced by the movement of airborne sand, hair, cloth, fur, and cloud layers. Above the coastline, thick blue-gray storm clouds occupy most of the sky, yet a bright opening in the upper-right introduces cold silver illumination. A dark headland, small coastal settlement, and low offshore rocks establish depth and geographic context. Although the scene is physically harsh and visually solitary, the woman and dog maintain a shared direction, making companionship and resilience the emotional center of the image."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A young woman is walking a large dog on the beach.",
        "ja": "若い女性が海岸で大型犬を散歩させています。",
        "focus": "現在進行形で人物・動作・場所を表す。"
      },
      {
        "en": "Her hair and scarf are blowing in the wind.",
        "ja": "彼女の髪とマフラーが風になびいています。",
        "focus": "複数主語と現在進行形を使う。"
      },
      {
        "en": "There are large waves and dark clouds.",
        "ja": "大きな波と暗い雲があります。",
        "focus": "There areで複数の自然要素を説明する。"
      }
    ],
    "A2": [
      {
        "en": "The woman is holding the leash with both hands because the wind is very strong.",
        "ja": "風が非常に強いので、女性は両手でリードを握っています。",
        "focus": "becauseで理由を説明する。"
      },
      {
        "en": "The dog is walking ahead while rough waves are crashing beside them.",
        "ja": "荒い波がそばで砕ける中、犬は前を歩いています。",
        "focus": "whileで同時に起きる状況をつなぐ。"
      },
      {
        "en": "Although the weather is cold and stormy, they continue walking together.",
        "ja": "天気は寒く荒れていますが、二人は一緒に歩き続けています。",
        "focus": "Althoughを使って対比を作る。"
      }
    ],
    "B1": [
      {
        "en": "The woman, who is wearing a long trench coat, appears to be leaning into the wind.",
        "ja": "長いトレンチコートを着た女性は、風に向かって身体を傾けているようです。",
        "focus": "非制限用法whoとappear toを使う。"
      },
      {
        "en": "The leash, which is stretched tightly between them, shows that the dog is moving ahead.",
        "ja": "二人の間で強く張られたリードから、犬が前へ進んでいることが分かります。",
        "focus": "非制限用法whichとshow thatを使う。"
      },
      {
        "en": "The rough sea produces white foam and spray that are blown across the shore.",
        "ja": "荒れた海は、岸へ吹き流される白い泡と水しぶきを生み出しています。",
        "focus": "関係代名詞thatと受動態を使う。"
      }
    ],
    "B2": [
      {
        "en": "Blown backward by powerful coastal gusts, the woman hair, scarf, and coat become visual evidence of the weather force.",
        "ja": "強い海風に後方へ吹かれ、女性の髪、マフラー、コートは天候の力を示す視覚的証拠になります。",
        "focus": "過去分詞構文と抽象名詞visual evidenceを使う。"
      },
      {
        "en": "The dog, which moves ahead in a fitted harness, creates a warm and energetic counterpoint to the gray sea and sky.",
        "ja": "ハーネスを着けて前を進む犬は、灰色の海と空に対する温かく活動的な対比を作っています。",
        "focus": "非制限用法whichとcounterpointを使った分析表現。"
      },
      {
        "en": "Although nearly every element is being driven backward by the wind, the woman and dog maintain a shared forward direction that symbolizes resilience and trust.",
        "ja": "ほぼすべての要素が風で後方へ押されていますが、女性と犬はたくましさと信頼を象徴する共通の前進方向を保っています。",
        "focus": "Although、受動進行形、関係代名詞thatを組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene023Data = scene023Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene023Data;
}
