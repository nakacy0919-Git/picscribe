"use strict";

const scene018Data = {
  "id": "scene_018",
  "image_id": "018.webp",
  "overall_description_ja": "雨が降る夕方または薄暗い昼間の街角で、ベージュ色のトレンチコートを着た若い女性が透明なビニール傘を差し、横断歩道を歩いている。女性は画面左から右へ進み、顔を前方へ向けながら、片手で傘の白い持ち手を胸の近くに握っている。長い黒髪は肩から背中へ流れ、黒いワンピースまたはスカート、黒い靴下、黒い革靴を身につけている。肩からは濃い茶色のショルダーバッグが掛かり、腰の横で揺れている。雨粒が透明な傘の表面に多数付着し、道路、歩道、横断歩道は水で濡れて光を反射している。女性のすぐ前には歩行者用信号があり、赤い人型の停止表示が点灯しているように見える。右側の道路では黒い服とヘルメットを身につけた自転車の人が雨の中を走っている。さらに奥には傘を差した歩行者、白い車、別の車のライトが見える。左側には大きなガラス窓のある明るい店またはカフェがあり、暖色の照明が濡れた路面へ反射している。右奥には古い住宅や店舗、塀、電柱、複雑に交差する電線が並び、道路の奥へ遠近感を作っている。右上には満開に近いピンク色の桜の木があり、冷たい青灰色の雨景色に柔らかな色を加えている。点字ブロック、縁石、ガードレール、横断歩道などの安全設備も見え、日常の都市生活と雨天時の移動を詳しく描いた場面である。全体として、静かで少し物思いに沈む雰囲気がありながら、店の灯りや桜の色によって温かさと希望も感じられる。",
  "overall_description_en": "At a rainy urban street corner in the late afternoon or on a dim overcast day, a young woman in a beige trench coat walks across a wet pedestrian crossing while holding a transparent umbrella. She moves from left to right and looks ahead, gripping the white curved umbrella handle near her chest. Her long dark hair falls over her shoulders and back, and she wears a black dress or skirt, black socks, and polished black shoes. A dark brown shoulder bag hangs at her side. Raindrops cover the clear umbrella, while the road, sidewalk, and white crossing stripes shine with water and reflections. A pedestrian signal near the woman appears to display a red standing figure. On the right side of the street, a cyclist wearing dark clothing and a helmet rides through the rain. Farther away, another pedestrian carries an umbrella, and cars with bright headlights travel along the wet road. A warmly lit shop or cafe with large glass windows occupies the left corner and casts golden reflections onto the pavement. Traditional-looking houses, small shops, walls, utility poles, and tangled overhead wires extend into the distance. A pink cherry blossom tree fills the upper-right area, adding softness and color to the cool blue-gray rainy scene. The image combines ordinary urban movement, road safety, seasonal weather, reflection, and a calm, slightly reflective mood.",
  "overall_mood": [
    "rainy",
    "cool",
    "reflective",
    "quiet",
    "urban",
    "moody",
    "soft",
    "cinematic",
    "calm",
    "slightly melancholic",
    "hopeful",
    "glowing",
    "wet",
    "seasonal",
    "thoughtful",
    "atmospheric"
  ],
  "mission_guides": {
    "gist": "若い女性が、どこで、何を持ち、どちらへ歩いているかを書こう。",
    "setting": "雨、横断歩道、信号、自転車、車、店、住宅街、桜を説明しよう。",
    "details": "トレンチコート、透明な傘、ショルダーバッグ、濡れた道路、光の反射を加えよう。",
    "complete": "冷たい雨景色と暖かな店の灯り、静かな都市の雰囲気まで描写しよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young woman walking with a transparent umbrella",
        "ja": "透明な傘を差して歩く若い女性"
      },
      {
        "en": "crossing a wet street in the rain",
        "ja": "雨の中で濡れた道路を横断する"
      },
      {
        "en": "wearing a beige trench coat and carrying a shoulder bag",
        "ja": "ベージュのトレンチコートを着てショルダーバッグを持つ"
      },
      {
        "en": "looking ahead while moving from left to right",
        "ja": "左から右へ進みながら前を見る"
      }
    ],
    "setting": [
      {
        "en": "at a rainy urban intersection with a crosswalk",
        "ja": "横断歩道のある雨の街角で"
      },
      {
        "en": "beside a red pedestrian signal and tactile paving",
        "ja": "赤い歩行者信号と点字ブロックのそばで"
      },
      {
        "en": "with a cyclist, cars, and another umbrella user in the background",
        "ja": "背景に自転車、車、傘を差す人がいる"
      },
      {
        "en": "near a warmly lit shop, old houses, wires, and cherry blossoms",
        "ja": "明るい店、古い住宅、電線、桜の近くで"
      }
    ],
    "mood": [
      {
        "en": "a cool and reflective rainy atmosphere",
        "ja": "冷たく内省的な雨の雰囲気"
      },
      {
        "en": "wet pavement glowing with reflected lights",
        "ja": "反射した光で輝く濡れた路面"
      },
      {
        "en": "soft pink blossoms contrasting with gray weather",
        "ja": "灰色の天気と対照を作る柔らかなピンクの花"
      },
      {
        "en": "a quiet urban moment that feels cinematic and thoughtful",
        "ja": "映画的で物思いに沈む静かな都市の瞬間"
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
        "a lady",
        "a pedestrian",
        "a young pedestrian",
        "she"
      ],
      "hint_msg": "a young womanやa pedestrianなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は女性が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "is walking",
        "is crossing",
        "is holding",
        "is carrying",
        "is looking",
        "is moving",
        "is using",
        "is stepping"
      ],
      "hint_msg": "is walkingやis holdingなど、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次は何を持ち、どこを歩いているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "a transparent umbrella",
        "across a crosswalk",
        "on a rainy street",
        "at an intersection",
        "through the rain",
        "beside a traffic signal",
        "near a shop",
        "in a residential neighborhood"
      ],
      "hint_msg": "a transparent umbrella / across a crosswalk / in the rainなどを加えましょう。",
      "success_msg": "Excellent! 服装、信号、路面反射、車、自転車、桜、店の灯りも詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "a woman walking in the rain",
    "crossing a wet street",
    "holding a transparent umbrella",
    "wearing a beige trench coat",
    "carrying a dark shoulder bag",
    "a red pedestrian signal",
    "a cyclist on a rainy road",
    "cars with headlights",
    "wet pavement and reflections",
    "a warmly lit corner shop",
    "a quiet residential intersection",
    "utility poles and overhead wires",
    "pink cherry blossoms in the rain",
    "tactile paving and road safety",
    "contrasting warm and cool light",
    "a cinematic urban atmosphere"
  ],
  "scene_structure": {
    "foreground": [
      "woman crossing the street",
      "transparent umbrella",
      "beige trench coat",
      "brown shoulder bag",
      "wet crosswalk",
      "puddles and reflections"
    ],
    "midground": [
      "pedestrian signal",
      "tactile paving",
      "corner shop or cafe",
      "cyclist",
      "wet road",
      "street planters"
    ],
    "background": [
      "umbrella-carrying pedestrian",
      "cars with headlights",
      "old houses and shops",
      "utility poles and wires",
      "cherry blossom tree",
      "rainy sky and distant street"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "young woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with long dark hair walks from left to right across the wet street while looking ahead.",
      "bounding_box_conceptual": [
        16,
        22,
        78,
        28
      ],
      "color": [
        "beige",
        "black",
        "brown"
      ],
      "attributes": [
        "young",
        "calm",
        "focused",
        "elegant",
        "alone",
        "weather-prepared"
      ],
      "action": [
        "walking",
        "crossing",
        "holding an umbrella",
        "looking ahead"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "lady",
        "pedestrian",
        "female pedestrian"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "lady",
        "pedestrian",
        "female pedestrian"
      ],
      "common_typos": [
        "woan",
        "yong woman",
        "lay",
        "peestrian"
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
            "en": "pedestrian",
            "ja": "若い女性を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "young adult",
            "ja": "若い女性を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a solitary pedestrian moving through silver rain",
          "ja": "銀色の雨の中を進む一人の歩行者"
        },
        {
          "en": "a calm figure crossing between reflected lights",
          "ja": "反射する光の間を横切る落ち着いた人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, young woman, lady, pedestrian, female pedestrian",
          "text_en": "woman, young woman, lady, pedestrian, female pedestrian",
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
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the young woman in the rainy street scene",
          "text_en": "the young woman in the rainy street scene",
          "text_ja": "雨の街角にある若い女性"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible young woman surrounded by rain and reflections",
          "text_en": "a clearly visible young woman surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える若い女性"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "transparent umbrella",
      "label_ja": "透明な傘",
      "category": "object",
      "importance": "primary",
      "description": "A large clear plastic umbrella covered with raindrops spreads above the woman and reveals the street through its surface.",
      "bounding_box_conceptual": [
        10,
        16,
        44,
        31
      ],
      "color": [
        "transparent",
        "white",
        "silver"
      ],
      "attributes": [
        "clear",
        "wet",
        "domed",
        "protective",
        "lightweight"
      ],
      "action": [
        "shielding the woman",
        "collecting raindrops",
        "being held"
      ],
      "synonyms_and_related_words": [
        "umbrella",
        "transparent umbrella",
        "clear umbrella",
        "plastic umbrella",
        "rain umbrella"
      ],
      "accepted_words": [
        "umbrella",
        "transparent umbrella",
        "clear umbrella",
        "plastic umbrella",
        "rain umbrella"
      ],
      "common_typos": [
        "umrella",
        "trnsparent umbrella",
        "clar umbrella",
        "plstic umbrella"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "transparent umbrella",
            "ja": "透明な傘"
          }
        ],
        "A2": [
          {
            "en": "transparent umbrella",
            "ja": "透明な傘を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "plastic umbrella",
            "ja": "透明な傘を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "see-through umbrella",
            "ja": "透明な傘を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a clear dome filled with raindrops",
          "ja": "雨粒で満たされた透明なドーム"
        },
        {
          "en": "a portable window between the woman and the rain",
          "ja": "女性と雨の間にある持ち運べる窓"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "umbrella, transparent umbrella, clear umbrella, plastic umbrella, rain umbrella",
          "text_en": "umbrella, transparent umbrella, clear umbrella, plastic umbrella, rain umbrella",
          "text_ja": "透明な傘に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are transparent umbrella in the picture.",
          "text_en": "There is / are transparent umbrella in the picture.",
          "text_ja": "画像には透明な傘があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the transparent umbrella in the rainy street scene",
          "text_en": "the transparent umbrella in the rainy street scene",
          "text_ja": "雨の街角にある透明な傘"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible transparent umbrella surrounded by rain and reflections",
          "text_en": "a clearly visible transparent umbrella surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える透明な傘"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "beige trench coat",
      "label_ja": "ベージュ色のトレンチコート",
      "category": "clothing",
      "importance": "primary",
      "description": "The woman wears a long belted beige trench coat that reaches below her knees and protects her clothing from the rain.",
      "bounding_box_conceptual": [
        31,
        24,
        49,
        22
      ],
      "color": [
        "beige",
        "tan",
        "brown"
      ],
      "attributes": [
        "long",
        "belted",
        "water-resistant",
        "classic",
        "formal"
      ],
      "action": [
        "being worn",
        "covering her body",
        "moving as she walks"
      ],
      "synonyms_and_related_words": [
        "trench coat",
        "beige coat",
        "raincoat",
        "long coat",
        "belted coat"
      ],
      "accepted_words": [
        "trench coat",
        "beige coat",
        "raincoat",
        "long coat",
        "belted coat"
      ],
      "common_typos": [
        "trnch coat",
        "bege coat",
        "rancoat",
        "log coat"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "beige trench coat",
            "ja": "ベージュ色のトレンチコート"
          }
        ],
        "A2": [
          {
            "en": "beige coat",
            "ja": "ベージュ色のトレンチコートを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "long coat",
            "ja": "ベージュ色のトレンチコートを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "water-resistant coat",
            "ja": "ベージュ色のトレンチコートを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pale coat carrying warm color through the gray rain",
          "ja": "灰色の雨の中に温かな色を運ぶ淡色のコート"
        },
        {
          "en": "a long protective layer moving with each step",
          "ja": "一歩ごとに動く長い保護の層"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "trench coat, beige coat, raincoat, long coat, belted coat",
          "text_en": "trench coat, beige coat, raincoat, long coat, belted coat",
          "text_ja": "ベージュ色のトレンチコートに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are beige trench coat in the picture.",
          "text_en": "There is / are beige trench coat in the picture.",
          "text_ja": "画像にはベージュ色のトレンチコートがあります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the beige trench coat in the rainy street scene",
          "text_en": "the beige trench coat in the rainy street scene",
          "text_ja": "雨の街角にあるベージュ色のトレンチコート"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible beige trench coat surrounded by rain and reflections",
          "text_en": "a clearly visible beige trench coat surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見えるベージュ色のトレンチコート"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "dark shoulder bag",
      "label_ja": "濃い茶色のショルダーバッグ",
      "category": "object",
      "importance": "primary",
      "description": "A dark brown leather shoulder bag with a flap hangs diagonally across the woman's body and rests near her hip.",
      "bounding_box_conceptual": [
        45,
        20,
        22,
        17
      ],
      "color": [
        "dark brown",
        "black",
        "bronze"
      ],
      "attributes": [
        "leather",
        "structured",
        "practical",
        "medium-sized",
        "cross-body"
      ],
      "action": [
        "hanging from her shoulder",
        "swinging slightly",
        "being carried"
      ],
      "synonyms_and_related_words": [
        "shoulder bag",
        "brown bag",
        "crossbody bag",
        "leather bag",
        "satchel"
      ],
      "accepted_words": [
        "shoulder bag",
        "brown bag",
        "crossbody bag",
        "leather bag",
        "satchel"
      ],
      "common_typos": [
        "shulder bag",
        "brwn bag",
        "crssbody bag",
        "lether bag"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dark shoulder bag",
            "ja": "濃い茶色のショルダーバッグ"
          }
        ],
        "A2": [
          {
            "en": "brown bag",
            "ja": "濃い茶色のショルダーバッグを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "leather bag",
            "ja": "濃い茶色のショルダーバッグを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "handbag",
            "ja": "濃い茶色のショルダーバッグを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark bag carrying the private contents of the journey",
          "ja": "移動の私的な中身を運ぶ濃色のバッグ"
        },
        {
          "en": "a leather weight resting beside the moving coat",
          "ja": "動くコートの横にある革の重み"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shoulder bag, brown bag, crossbody bag, leather bag, satchel",
          "text_en": "shoulder bag, brown bag, crossbody bag, leather bag, satchel",
          "text_ja": "濃い茶色のショルダーバッグに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are dark shoulder bag in the picture.",
          "text_en": "There is / are dark shoulder bag in the picture.",
          "text_ja": "画像には濃い茶色のショルダーバッグがあります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the dark shoulder bag in the rainy street scene",
          "text_en": "the dark shoulder bag in the rainy street scene",
          "text_ja": "雨の街角にある濃い茶色のショルダーバッグ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible dark shoulder bag surrounded by rain and reflections",
          "text_en": "a clearly visible dark shoulder bag surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える濃い茶色のショルダーバッグ"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "wet pedestrian crossing",
      "label_ja": "濡れた横断歩道",
      "category": "setting",
      "importance": "primary",
      "description": "Wide white crosswalk stripes cover the foreground and shine with rainwater, puddles, and reflected lights.",
      "bounding_box_conceptual": [
        66,
        0,
        34,
        100
      ],
      "color": [
        "white",
        "gray",
        "black",
        "silver"
      ],
      "attributes": [
        "wet",
        "striped",
        "reflective",
        "slippery-looking",
        "wide"
      ],
      "action": [
        "guiding pedestrians",
        "reflecting light",
        "being crossed"
      ],
      "synonyms_and_related_words": [
        "crosswalk",
        "pedestrian crossing",
        "zebra crossing",
        "white stripes",
        "wet crossing"
      ],
      "accepted_words": [
        "crosswalk",
        "pedestrian crossing",
        "zebra crossing",
        "white stripes",
        "wet crossing"
      ],
      "common_typos": [
        "crsswalk",
        "peestrian crossing",
        "zera crossing",
        "whte stripes"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "wet pedestrian crossing",
            "ja": "濡れた横断歩道"
          }
        ],
        "A2": [
          {
            "en": "pedestrian crossing",
            "ja": "濡れた横断歩道を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "white stripes",
            "ja": "濡れた横断歩道を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "road crossing",
            "ja": "濡れた横断歩道を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "white stripes broken by water and reflection",
          "ja": "水と反射で分断された白い縞"
        },
        {
          "en": "a painted bridge across the rain-darkened road",
          "ja": "雨で暗くなった道路を横切る塗られた橋"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "crosswalk, pedestrian crossing, zebra crossing, white stripes, wet crossing",
          "text_en": "crosswalk, pedestrian crossing, zebra crossing, white stripes, wet crossing",
          "text_ja": "濡れた横断歩道に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are wet pedestrian crossing in the picture.",
          "text_en": "There is / are wet pedestrian crossing in the picture.",
          "text_ja": "画像には濡れた横断歩道があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the wet pedestrian crossing in the rainy street scene",
          "text_en": "the wet pedestrian crossing in the rainy street scene",
          "text_ja": "雨の街角にある濡れた横断歩道"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible wet pedestrian crossing surrounded by rain and reflections",
          "text_en": "a clearly visible wet pedestrian crossing surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える濡れた横断歩道"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "red pedestrian signal",
      "label_ja": "赤い歩行者用信号",
      "category": "text_sign",
      "importance": "primary",
      "description": "A pedestrian traffic signal near the center-top displays a red standing human figure, indicating that pedestrians should stop.",
      "bounding_box_conceptual": [
        2,
        46,
        16,
        7
      ],
      "color": [
        "red",
        "black",
        "green"
      ],
      "attributes": [
        "illuminated",
        "vertical",
        "safety-related",
        "high-mounted",
        "symbolic"
      ],
      "action": [
        "displaying stop",
        "controlling crossing",
        "warning pedestrians"
      ],
      "synonyms_and_related_words": [
        "pedestrian signal",
        "red signal",
        "traffic light",
        "walk signal",
        "stop signal"
      ],
      "accepted_words": [
        "pedestrian signal",
        "red signal",
        "traffic light",
        "walk signal",
        "stop signal"
      ],
      "common_typos": [
        "peestrian signal",
        "re signal",
        "trffic light",
        "wak signal"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "red pedestrian signal",
            "ja": "赤い歩行者用信号"
          }
        ],
        "A2": [
          {
            "en": "red signal",
            "ja": "赤い歩行者用信号を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "walk signal",
            "ja": "赤い歩行者用信号を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "red person light",
            "ja": "赤い歩行者用信号を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a red figure holding movement in place",
          "ja": "動きをその場に止める赤い人型"
        },
        {
          "en": "a small illuminated command above the rain",
          "ja": "雨の上にある小さな光る命令"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pedestrian signal, red signal, traffic light, walk signal, stop signal",
          "text_en": "pedestrian signal, red signal, traffic light, walk signal, stop signal",
          "text_ja": "赤い歩行者用信号に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are red pedestrian signal in the picture.",
          "text_en": "There is / are red pedestrian signal in the picture.",
          "text_ja": "画像には赤い歩行者用信号があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the red pedestrian signal in the rainy street scene",
          "text_en": "the red pedestrian signal in the rainy street scene",
          "text_ja": "雨の街角にある赤い歩行者用信号"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible red pedestrian signal surrounded by rain and reflections",
          "text_en": "a clearly visible red pedestrian signal surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える赤い歩行者用信号"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "cyclist",
      "label_ja": "自転車に乗る人",
      "category": "person",
      "importance": "secondary",
      "description": "A cyclist in dark rain clothing and a helmet rides along the right side of the wet road.",
      "bounding_box_conceptual": [
        29,
        70,
        26,
        15
      ],
      "color": [
        "black",
        "gray",
        "dark navy"
      ],
      "attributes": [
        "helmeted",
        "moving",
        "careful",
        "weather-protected",
        "distant"
      ],
      "action": [
        "riding",
        "pedaling",
        "moving through rain",
        "approaching the intersection"
      ],
      "synonyms_and_related_words": [
        "cyclist",
        "bicycle rider",
        "person on a bicycle",
        "bike rider",
        "commuter cyclist"
      ],
      "accepted_words": [
        "cyclist",
        "bicycle rider",
        "person on a bicycle",
        "bike rider",
        "commuter cyclist"
      ],
      "common_typos": [
        "cylist",
        "biycle rider",
        "peson on a bicycle",
        "bie rider"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cyclist",
            "ja": "自転車に乗る人"
          }
        ],
        "A2": [
          {
            "en": "bicycle rider",
            "ja": "自転車に乗る人を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "bike rider",
            "ja": "自転車に乗る人を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "rider",
            "ja": "自転車に乗る人を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark rider cutting through reflected light",
          "ja": "反射光を切り進む濃色の乗り手"
        },
        {
          "en": "a cyclist balancing speed and caution on a wet road",
          "ja": "濡れた道路で速度と注意の均衡を取る自転車利用者"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cyclist, bicycle rider, person on a bicycle, bike rider, commuter cyclist",
          "text_en": "cyclist, bicycle rider, person on a bicycle, bike rider, commuter cyclist",
          "text_ja": "自転車に乗る人に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are cyclist in the picture.",
          "text_en": "There is / are cyclist in the picture.",
          "text_ja": "画像には自転車に乗る人があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the cyclist in the rainy street scene",
          "text_en": "the cyclist in the rainy street scene",
          "text_ja": "雨の街角にある自転車に乗る人"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible cyclist surrounded by rain and reflections",
          "text_en": "a clearly visible cyclist surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える自転車に乗る人"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "cars with headlights",
      "label_ja": "ヘッドライトを点けた車",
      "category": "vehicle",
      "importance": "secondary",
      "description": "Several cars travel along the wet road in the middle distance, and their headlights create bright reflections.",
      "bounding_box_conceptual": [
        29,
        53,
        22,
        17
      ],
      "color": [
        "white",
        "silver",
        "yellow"
      ],
      "attributes": [
        "distant",
        "moving",
        "illuminated",
        "rainy",
        "reflective"
      ],
      "action": [
        "driving",
        "approaching",
        "casting light",
        "moving through the street"
      ],
      "synonyms_and_related_words": [
        "cars",
        "vehicles",
        "cars with headlights",
        "approaching cars",
        "traffic"
      ],
      "accepted_words": [
        "cars",
        "vehicles",
        "cars with headlights",
        "approaching cars",
        "traffic"
      ],
      "common_typos": [
        "cas",
        "veicles",
        "cas with headlights",
        "aproaching cars"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cars with headlights",
            "ja": "ヘッドライトを点けた車"
          }
        ],
        "A2": [
          {
            "en": "vehicles",
            "ja": "ヘッドライトを点けた車を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "approaching cars",
            "ja": "ヘッドライトを点けた車を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "automobiles",
            "ja": "ヘッドライトを点けた車を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small islands of light moving through gray rain",
          "ja": "灰色の雨を進む小さな光の島"
        },
        {
          "en": "headlights stretching across the wet road",
          "ja": "濡れた道路へ伸びるヘッドライト"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cars, vehicles, cars with headlights, approaching cars, traffic",
          "text_en": "cars, vehicles, cars with headlights, approaching cars, traffic",
          "text_ja": "ヘッドライトを点けた車に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are cars with headlights in the picture.",
          "text_en": "There is / are cars with headlights in the picture.",
          "text_ja": "画像にはヘッドライトを点けた車があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the cars with headlights in the rainy street scene",
          "text_en": "the cars with headlights in the rainy street scene",
          "text_ja": "雨の街角にあるヘッドライトを点けた車"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible cars with headlights surrounded by rain and reflections",
          "text_en": "a clearly visible cars with headlights surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見えるヘッドライトを点けた車"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "background pedestrian with umbrella",
      "label_ja": "背景で傘を差す歩行者",
      "category": "person",
      "importance": "secondary",
      "description": "A distant pedestrian holding an umbrella walks along the center of the rainy street.",
      "bounding_box_conceptual": [
        28,
        54,
        20,
        8
      ],
      "color": [
        "gray",
        "black",
        "transparent"
      ],
      "attributes": [
        "distant",
        "small",
        "rain-protected",
        "walking",
        "solitary"
      ],
      "action": [
        "walking",
        "holding an umbrella",
        "moving away or toward the viewer"
      ],
      "synonyms_and_related_words": [
        "pedestrian",
        "person with an umbrella",
        "umbrella user",
        "walker",
        "distant person"
      ],
      "accepted_words": [
        "pedestrian",
        "person with an umbrella",
        "umbrella user",
        "walker",
        "distant person"
      ],
      "common_typos": [
        "peestrian",
        "peson with an umbrella",
        "umrella user",
        "waker"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "background pedestrian with umbrella",
            "ja": "背景で傘を差す歩行者"
          }
        ],
        "A2": [
          {
            "en": "person with an umbrella",
            "ja": "背景で傘を差す歩行者を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "walker",
            "ja": "背景で傘を差す歩行者を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "rainy-day pedestrian",
            "ja": "背景で傘を差す歩行者を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a small umbrella floating in the distance",
          "ja": "遠くに浮かぶ小さな傘"
        },
        {
          "en": "another private journey inside the shared rain",
          "ja": "共有された雨の中のもう一つの個人的な移動"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pedestrian, person with an umbrella, umbrella user, walker, distant person",
          "text_en": "pedestrian, person with an umbrella, umbrella user, walker, distant person",
          "text_ja": "背景で傘を差す歩行者に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are background pedestrian with umbrella in the picture.",
          "text_en": "There is / are background pedestrian with umbrella in the picture.",
          "text_ja": "画像には背景で傘を差す歩行者があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the background pedestrian with umbrella in the rainy street scene",
          "text_en": "the background pedestrian with umbrella in the rainy street scene",
          "text_ja": "雨の街角にある背景で傘を差す歩行者"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible background pedestrian with umbrella surrounded by rain and reflections",
          "text_en": "a clearly visible background pedestrian with umbrella surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える背景で傘を差す歩行者"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "warmly lit corner shop",
      "label_ja": "暖かく照らされた角の店",
      "category": "setting",
      "importance": "primary",
      "description": "A corner shop or cafe with large glass windows glows warmly on the left and reflects golden light onto the wet pavement.",
      "bounding_box_conceptual": [
        8,
        0,
        41,
        30
      ],
      "color": [
        "gold",
        "warm white",
        "brown",
        "green"
      ],
      "attributes": [
        "bright",
        "inviting",
        "glass-fronted",
        "warm",
        "sheltered"
      ],
      "action": [
        "glowing",
        "lighting the sidewalk",
        "reflecting in the rain"
      ],
      "synonyms_and_related_words": [
        "shop",
        "corner shop",
        "cafe",
        "storefront",
        "lit shop"
      ],
      "accepted_words": [
        "shop",
        "corner shop",
        "cafe",
        "storefront",
        "lit shop"
      ],
      "common_typos": [
        "shp",
        "coner shop",
        "cae",
        "strefront"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "warmly lit corner shop",
            "ja": "暖かく照らされた角の店"
          }
        ],
        "A2": [
          {
            "en": "corner shop",
            "ja": "暖かく照らされた角の店を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "storefront",
            "ja": "暖かく照らされた角の店を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "glass-fronted store",
            "ja": "暖かく照らされた角の店を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a warm interior glowing against the cold rain",
          "ja": "冷たい雨に対して輝く温かな室内"
        },
        {
          "en": "a golden refuge at the edge of the intersection",
          "ja": "交差点の端にある黄金色の避難所"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "shop, corner shop, cafe, storefront, lit shop",
          "text_en": "shop, corner shop, cafe, storefront, lit shop",
          "text_ja": "暖かく照らされた角の店に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are warmly lit corner shop in the picture.",
          "text_en": "There is / are warmly lit corner shop in the picture.",
          "text_ja": "画像には暖かく照らされた角の店があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the warmly lit corner shop in the rainy street scene",
          "text_en": "the warmly lit corner shop in the rainy street scene",
          "text_ja": "雨の街角にある暖かく照らされた角の店"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible warmly lit corner shop surrounded by rain and reflections",
          "text_en": "a clearly visible warmly lit corner shop surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える暖かく照らされた角の店"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "wet road and light reflections",
      "label_ja": "濡れた道路と光の反射",
      "category": "setting",
      "importance": "primary",
      "description": "The dark road is covered with rainwater and mirrors red, white, yellow, and warm shop lights across its surface.",
      "bounding_box_conceptual": [
        35,
        0,
        65,
        100
      ],
      "color": [
        "black",
        "silver",
        "red",
        "gold",
        "white"
      ],
      "attributes": [
        "wet",
        "mirror-like",
        "glossy",
        "dark",
        "colorful"
      ],
      "action": [
        "reflecting lights",
        "holding puddles",
        "showing tire paths"
      ],
      "synonyms_and_related_words": [
        "wet road",
        "rain-soaked street",
        "reflective pavement",
        "shiny road",
        "puddled street"
      ],
      "accepted_words": [
        "wet road",
        "rain-soaked street",
        "reflective pavement",
        "shiny road",
        "puddled street"
      ],
      "common_typos": [
        "we road",
        "ransoaked street",
        "relective pavement",
        "shny road"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "wet road and light reflections",
            "ja": "濡れた道路と光の反射"
          }
        ],
        "A2": [
          {
            "en": "rain-soaked street",
            "ja": "濡れた道路と光の反射を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "shiny road",
            "ja": "濡れた道路と光の反射を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "wet asphalt",
            "ja": "濡れた道路と光の反射を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a black mirror carrying the city's colors",
          "ja": "街の色を運ぶ黒い鏡"
        },
        {
          "en": "rainwater turning traffic lights into long brushstrokes",
          "ja": "信号を長い筆跡へ変える雨水"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "wet road, rain-soaked street, reflective pavement, shiny road, puddled street",
          "text_en": "wet road, rain-soaked street, reflective pavement, shiny road, puddled street",
          "text_ja": "濡れた道路と光の反射に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are wet road and light reflections in the picture.",
          "text_en": "There is / are wet road and light reflections in the picture.",
          "text_ja": "画像には濡れた道路と光の反射があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the wet road and light reflections in the rainy street scene",
          "text_en": "the wet road and light reflections in the rainy street scene",
          "text_ja": "雨の街角にある濡れた道路と光の反射"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible wet road and light reflections surrounded by rain and reflections",
          "text_en": "a clearly visible wet road and light reflections surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える濡れた道路と光の反射"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "old houses and small buildings",
      "label_ja": "古い住宅と小さな建物",
      "category": "setting",
      "importance": "secondary",
      "description": "Narrow multi-story houses, small shops, walls, balconies, and entrances line both sides of the street.",
      "bounding_box_conceptual": [
        0,
        0,
        53,
        100
      ],
      "color": [
        "gray",
        "brown",
        "white",
        "black"
      ],
      "attributes": [
        "urban",
        "older",
        "narrow",
        "mixed-use",
        "weathered"
      ],
      "action": [
        "lining the street",
        "framing the road",
        "providing homes and shops"
      ],
      "synonyms_and_related_words": [
        "houses",
        "old houses",
        "small buildings",
        "urban homes",
        "shops"
      ],
      "accepted_words": [
        "houses",
        "old houses",
        "small buildings",
        "urban homes",
        "shops"
      ],
      "common_typos": [
        "hoses",
        "ol houses",
        "smll buildings",
        "uran homes"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "old houses and small buildings",
            "ja": "古い住宅と小さな建物"
          }
        ],
        "A2": [
          {
            "en": "old houses",
            "ja": "古い住宅と小さな建物を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "urban homes",
            "ja": "古い住宅と小さな建物を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "residential buildings",
            "ja": "古い住宅と小さな建物を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "weathered buildings holding years of ordinary life",
          "ja": "長年の日常生活を抱える風雨にさらされた建物"
        },
        {
          "en": "narrow homes closing around the rainy road",
          "ja": "雨の道路を囲む細長い住宅"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "houses, old houses, small buildings, urban homes, shops",
          "text_en": "houses, old houses, small buildings, urban homes, shops",
          "text_ja": "古い住宅と小さな建物に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are old houses and small buildings in the picture.",
          "text_en": "There is / are old houses and small buildings in the picture.",
          "text_ja": "画像には古い住宅と小さな建物があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the old houses and small buildings in the rainy street scene",
          "text_en": "the old houses and small buildings in the rainy street scene",
          "text_ja": "雨の街角にある古い住宅と小さな建物"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible old houses and small buildings surrounded by rain and reflections",
          "text_en": "a clearly visible old houses and small buildings surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える古い住宅と小さな建物"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "utility poles and overhead wires",
      "label_ja": "電柱と頭上の電線",
      "category": "setting",
      "importance": "secondary",
      "description": "Many utility poles and tangled overhead wires extend along the street and converge toward the distance.",
      "bounding_box_conceptual": [
        0,
        38,
        40,
        62
      ],
      "color": [
        "black",
        "gray",
        "brown"
      ],
      "attributes": [
        "dense",
        "linear",
        "industrial",
        "repetitive",
        "complex"
      ],
      "action": [
        "carrying cables",
        "lining the road",
        "creating perspective"
      ],
      "synonyms_and_related_words": [
        "utility poles",
        "power poles",
        "telephone poles",
        "overhead wires",
        "power lines"
      ],
      "accepted_words": [
        "utility poles",
        "power poles",
        "telephone poles",
        "overhead wires",
        "power lines"
      ],
      "common_typos": [
        "utlity poles",
        "poer poles",
        "teephone poles",
        "ovrhead wires"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "utility poles and overhead wires",
            "ja": "電柱と頭上の電線"
          }
        ],
        "A2": [
          {
            "en": "power poles",
            "ja": "電柱と頭上の電線を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "overhead wires",
            "ja": "電柱と頭上の電線を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "cables",
            "ja": "電柱と頭上の電線を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "dark lines stitching the rainy sky together",
          "ja": "雨空を縫い合わせる濃色の線"
        },
        {
          "en": "poles and cables measuring the street's depth",
          "ja": "通りの奥行きを測る電柱とケーブル"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "utility poles, power poles, telephone poles, overhead wires, power lines",
          "text_en": "utility poles, power poles, telephone poles, overhead wires, power lines",
          "text_ja": "電柱と頭上の電線に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are utility poles and overhead wires in the picture.",
          "text_en": "There is / are utility poles and overhead wires in the picture.",
          "text_ja": "画像には電柱と頭上の電線があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the utility poles and overhead wires in the rainy street scene",
          "text_en": "the utility poles and overhead wires in the rainy street scene",
          "text_ja": "雨の街角にある電柱と頭上の電線"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible utility poles and overhead wires surrounded by rain and reflections",
          "text_en": "a clearly visible utility poles and overhead wires surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える電柱と頭上の電線"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "pink cherry blossom tree",
      "label_ja": "ピンク色の桜の木",
      "category": "nature",
      "importance": "primary",
      "description": "A large cherry blossom tree with dense pink flowers fills the upper-right side beside the gray buildings.",
      "bounding_box_conceptual": [
        0,
        78,
        34,
        22
      ],
      "color": [
        "pink",
        "dark brown",
        "green"
      ],
      "attributes": [
        "flowering",
        "seasonal",
        "soft",
        "bright",
        "full"
      ],
      "action": [
        "blooming",
        "framing the street",
        "adding color"
      ],
      "synonyms_and_related_words": [
        "cherry blossom tree",
        "cherry tree",
        "pink blossoms",
        "sakura",
        "flowering tree"
      ],
      "accepted_words": [
        "cherry blossom tree",
        "cherry tree",
        "pink blossoms",
        "sakura",
        "flowering tree"
      ],
      "common_typos": [
        "chrry blossom tree",
        "chrry tree",
        "pik blossoms",
        "saura"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pink cherry blossom tree",
            "ja": "ピンク色の桜の木"
          }
        ],
        "A2": [
          {
            "en": "cherry tree",
            "ja": "ピンク色の桜の木を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "sakura",
            "ja": "ピンク色の桜の木を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "spring blossoms",
            "ja": "ピンク色の桜の木を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "pink blossoms floating above the gray rain",
          "ja": "灰色の雨の上に浮かぶピンクの花"
        },
        {
          "en": "spring softness growing beside hard concrete walls",
          "ja": "硬いコンクリート壁のそばに育つ春の柔らかさ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cherry blossom tree, cherry tree, pink blossoms, sakura, flowering tree",
          "text_en": "cherry blossom tree, cherry tree, pink blossoms, sakura, flowering tree",
          "text_ja": "ピンク色の桜の木に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are pink cherry blossom tree in the picture.",
          "text_en": "There is / are pink cherry blossom tree in the picture.",
          "text_ja": "画像にはピンク色の桜の木があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the pink cherry blossom tree in the rainy street scene",
          "text_en": "the pink cherry blossom tree in the rainy street scene",
          "text_ja": "雨の街角にあるピンク色の桜の木"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible pink cherry blossom tree surrounded by rain and reflections",
          "text_en": "a clearly visible pink cherry blossom tree surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見えるピンク色の桜の木"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "tactile paving and curb",
      "label_ja": "点字ブロックと縁石",
      "category": "setting",
      "importance": "secondary",
      "description": "Yellow tactile paving and a raised curb mark the corner where the sidewalk meets the crosswalk.",
      "bounding_box_conceptual": [
        55,
        40,
        15,
        25
      ],
      "color": [
        "yellow",
        "gray",
        "brown"
      ],
      "attributes": [
        "textured",
        "raised",
        "safety-related",
        "wet",
        "public"
      ],
      "action": [
        "guiding pedestrians",
        "marking the edge",
        "supporting accessibility"
      ],
      "synonyms_and_related_words": [
        "tactile paving",
        "yellow blocks",
        "curb",
        "guidance tiles",
        "warning blocks"
      ],
      "accepted_words": [
        "tactile paving",
        "yellow blocks",
        "curb",
        "guidance tiles",
        "warning blocks"
      ],
      "common_typos": [
        "tatile paving",
        "yelow blocks",
        "cub",
        "gudance tiles"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "tactile paving and curb",
            "ja": "点字ブロックと縁石"
          }
        ],
        "A2": [
          {
            "en": "yellow blocks",
            "ja": "点字ブロックと縁石を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "guidance tiles",
            "ja": "点字ブロックと縁石を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "accessible pavement",
            "ja": "点字ブロックと縁石を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a textured yellow boundary beneath the rain",
          "ja": "雨の下にある凹凸の黄色い境界"
        },
        {
          "en": "safety information built directly into the pavement",
          "ja": "歩道へ直接組み込まれた安全情報"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "tactile paving, yellow blocks, curb, guidance tiles, warning blocks",
          "text_en": "tactile paving, yellow blocks, curb, guidance tiles, warning blocks",
          "text_ja": "点字ブロックと縁石に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are tactile paving and curb in the picture.",
          "text_en": "There is / are tactile paving and curb in the picture.",
          "text_ja": "画像には点字ブロックと縁石があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the tactile paving and curb in the rainy street scene",
          "text_en": "the tactile paving and curb in the rainy street scene",
          "text_ja": "雨の街角にある点字ブロックと縁石"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible tactile paving and curb surrounded by rain and reflections",
          "text_en": "a clearly visible tactile paving and curb surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える点字ブロックと縁石"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "falling rain and raindrops",
      "label_ja": "降る雨と雨粒",
      "category": "weather",
      "importance": "primary",
      "description": "Fine rain falls throughout the scene, forming visible drops on the umbrella and thin streaks against buildings and the street.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        100
      ],
      "color": [
        "transparent",
        "silver",
        "gray"
      ],
      "attributes": [
        "steady",
        "fine",
        "cool",
        "continuous",
        "visible"
      ],
      "action": [
        "falling",
        "collecting",
        "wetting surfaces",
        "creating reflections"
      ],
      "synonyms_and_related_words": [
        "rain",
        "falling rain",
        "raindrops",
        "rainfall",
        "drizzle"
      ],
      "accepted_words": [
        "rain",
        "falling rain",
        "raindrops",
        "rainfall",
        "drizzle"
      ],
      "common_typos": [
        "ran",
        "faling rain",
        "randrops",
        "ranfall"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "falling rain and raindrops",
            "ja": "降る雨と雨粒"
          }
        ],
        "A2": [
          {
            "en": "falling rain",
            "ja": "降る雨と雨粒を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "rainfall",
            "ja": "降る雨と雨粒を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "steady rain",
            "ja": "降る雨と雨粒を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "silver lines quietly filling the air",
          "ja": "空気を静かに満たす銀色の線"
        },
        {
          "en": "water rewriting every hard surface",
          "ja": "すべての硬い表面を書き換える水"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "rain, falling rain, raindrops, rainfall, drizzle",
          "text_en": "rain, falling rain, raindrops, rainfall, drizzle",
          "text_ja": "降る雨と雨粒に関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "There is / are falling rain and raindrops in the picture.",
          "text_en": "There is / are falling rain and raindrops in the picture.",
          "text_ja": "画像には降る雨と雨粒があります。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "the falling rain and raindrops in the rainy street scene",
          "text_en": "the falling rain and raindrops in the rainy street scene",
          "text_ja": "雨の街角にある降る雨と雨粒"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible falling rain and raindrops surrounded by rain and reflections",
          "text_en": "a clearly visible falling rain and raindrops surrounded by rain and reflections",
          "text_ja": "雨と反射に囲まれてはっきり見える降る雨と雨粒"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "pedestrian traffic signal above the intersection",
      "content": "red standing pedestrian pictogram",
      "description_ja": "歩行者用信号に表示された赤い立ち姿の人型記号。歩行者が停止すべきことを示している。",
      "accepted_words": [
        "red pedestrian symbol",
        "red person light",
        "stop signal",
        "pedestrian pictogram"
      ],
      "common_typos": [
        "red pedestrain symbol",
        "red person ligth",
        "stop singal",
        "pedestrian pictgram"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "red, person, stop, signal",
          "text_en": "red, person, stop, signal",
          "text_ja": "赤、人、止まる、信号"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The pedestrian signal is red.",
          "text_en": "The pedestrian signal is red.",
          "text_ja": "歩行者用信号は赤です。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The red human figure indicates that pedestrians should...",
          "text_en": "The red human figure indicates that pedestrians should...",
          "text_ja": "赤い人型は歩行者が……すべきことを示しています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The pictogram communicates a safety command visually, even without written language.",
          "text_en": "The pictogram communicates a safety command visually, even without written language.",
          "text_ja": "絵記号は文章がなくても安全上の命令を視覚的に伝えています。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "walking across the crosswalk",
      "description_ja": "横断歩道を歩いている",
      "involved_elements": [
        "element_001",
        "element_005",
        "element_015"
      ],
      "synonyms": [
        "walk across the crosswalk",
        "cross the street",
        "walk through the rain",
        "step across the road",
        "move from left to right"
      ],
      "accepted_words": [
        "walk across the crosswalk",
        "cross the street",
        "walk through the rain",
        "step across the road",
        "move from left to right"
      ],
      "common_typos": [
        "wak across the crosswalk",
        "crss the street",
        "wak through the rain",
        "stp across the road"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "walking across the crosswalk",
            "ja": "横断歩道を歩いている"
          }
        ],
        "A2": [
          {
            "en": "cross the street",
            "ja": "横断歩道を歩いているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "step across the road",
            "ja": "横断歩道を歩いているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "use the pedestrian crossing",
            "ja": "横断歩道を歩いているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "moving through a city mirror made by rain",
          "ja": "雨でできた都市の鏡を進む"
        },
        {
          "en": "crossing from one wet sidewalk to another",
          "ja": "一つの濡れた歩道から別の歩道へ渡る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "walk across the crosswalk, cross the street, walk through the rain, step across the road, move from left to right",
          "text_en": "walk across the crosswalk, cross the street, walk through the rain, step across the road, move from left to right",
          "text_ja": "横断歩道を歩いているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is walking across the crosswalk.",
          "text_en": "The woman is walking across the crosswalk.",
          "text_ja": "女性は横断歩道を歩いている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "walking across the crosswalk on a rainy street corner",
          "text_en": "walking across the crosswalk on a rainy street corner",
          "text_ja": "雨の街角で横断歩道を歩いている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "walking across the crosswalk while holding a transparent umbrella",
          "text_en": "walking across the crosswalk while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら横断歩道を歩いている"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "holding a transparent umbrella",
      "description_ja": "透明な傘を持っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_016"
      ],
      "synonyms": [
        "hold an umbrella",
        "carry a clear umbrella",
        "grip the umbrella handle",
        "use a transparent umbrella",
        "shelter under an umbrella"
      ],
      "accepted_words": [
        "hold an umbrella",
        "carry a clear umbrella",
        "grip the umbrella handle",
        "use a transparent umbrella",
        "shelter under an umbrella"
      ],
      "common_typos": [
        "hod an umbrella",
        "cary a clear umbrella",
        "grp the umbrella handle",
        "us a transparent umbrella"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "holding a transparent umbrella",
            "ja": "透明な傘を持っている"
          }
        ],
        "A2": [
          {
            "en": "carry a clear umbrella",
            "ja": "透明な傘を持っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "use a transparent umbrella",
            "ja": "透明な傘を持っているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "protect herself from rain",
            "ja": "透明な傘を持っているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "carrying a small transparent roof through the city",
          "ja": "街を通して小さな透明屋根を運ぶ"
        },
        {
          "en": "holding rain above her head while keeping the street visible",
          "ja": "通りを見せたまま頭上に雨を受け止める"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hold an umbrella, carry a clear umbrella, grip the umbrella handle, use a transparent umbrella, shelter under an umbrella",
          "text_en": "hold an umbrella, carry a clear umbrella, grip the umbrella handle, use a transparent umbrella, shelter under an umbrella",
          "text_ja": "透明な傘を持っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is holding a transparent umbrella.",
          "text_en": "The woman is holding a transparent umbrella.",
          "text_ja": "女性は透明な傘を持っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "holding a transparent umbrella on a rainy street corner",
          "text_en": "holding a transparent umbrella on a rainy street corner",
          "text_ja": "雨の街角で透明な傘を持っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "holding a transparent umbrella while holding a transparent umbrella",
          "text_en": "holding a transparent umbrella while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら透明な傘を持っている"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "looking ahead at the intersection",
      "description_ja": "交差点の前方を見ている",
      "involved_elements": [
        "element_001",
        "element_006",
        "element_007"
      ],
      "synonyms": [
        "look ahead",
        "watch the road",
        "look toward the signal",
        "check the intersection",
        "observe the traffic"
      ],
      "accepted_words": [
        "look ahead",
        "watch the road",
        "look toward the signal",
        "check the intersection",
        "observe the traffic"
      ],
      "common_typos": [
        "lok ahead",
        "wach the road",
        "lok toward the signal",
        "chck the intersection"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "looking ahead at the intersection",
            "ja": "交差点の前方を見ている"
          }
        ],
        "A2": [
          {
            "en": "watch the road",
            "ja": "交差点の前方を見ているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "check the intersection",
            "ja": "交差点の前方を見ているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "face forward",
            "ja": "交差点の前方を見ているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sending her attention into the rain before her steps",
          "ja": "足より先に注意を雨の中へ送る"
        },
        {
          "en": "reading the intersection through light, movement, and signal",
          "ja": "光、動き、信号を通して交差点を読む"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "look ahead, watch the road, look toward the signal, check the intersection, observe the traffic",
          "text_en": "look ahead, watch the road, look toward the signal, check the intersection, observe the traffic",
          "text_ja": "交差点の前方を見ているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is looking ahead at the intersection.",
          "text_en": "The woman is looking ahead at the intersection.",
          "text_ja": "女性は交差点の前方を見ている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "looking ahead at the intersection on a rainy street corner",
          "text_en": "looking ahead at the intersection on a rainy street corner",
          "text_ja": "雨の街角で交差点の前方を見ている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "looking ahead at the intersection while holding a transparent umbrella",
          "text_en": "looking ahead at the intersection while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら交差点の前方を見ている"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "carrying a shoulder bag",
      "description_ja": "ショルダーバッグを持っている",
      "involved_elements": [
        "element_001",
        "element_004"
      ],
      "synonyms": [
        "carry a shoulder bag",
        "wear a crossbody bag",
        "carry a leather bag",
        "hold personal belongings",
        "walk with a satchel"
      ],
      "accepted_words": [
        "carry a shoulder bag",
        "wear a crossbody bag",
        "carry a leather bag",
        "hold personal belongings",
        "walk with a satchel"
      ],
      "common_typos": [
        "cary a shoulder bag",
        "wer a crossbody bag",
        "cary a leather bag",
        "hod personal belongings"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "carrying a shoulder bag",
            "ja": "ショルダーバッグを持っている"
          }
        ],
        "A2": [
          {
            "en": "wear a crossbody bag",
            "ja": "ショルダーバッグを持っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "hold personal belongings",
            "ja": "ショルダーバッグを持っているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "carry a handbag",
            "ja": "ショルダーバッグを持っているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "carrying private belongings through public rain",
          "ja": "公共の雨の中で私物を運ぶ"
        },
        {
          "en": "a bag swinging gently beside each careful step",
          "ja": "注意深い一歩ごとに静かに揺れるバッグ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "carry a shoulder bag, wear a crossbody bag, carry a leather bag, hold personal belongings, walk with a satchel",
          "text_en": "carry a shoulder bag, wear a crossbody bag, carry a leather bag, hold personal belongings, walk with a satchel",
          "text_ja": "ショルダーバッグを持っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is carrying a shoulder bag.",
          "text_en": "The woman is carrying a shoulder bag.",
          "text_ja": "女性はショルダーバッグを持っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "carrying a shoulder bag on a rainy street corner",
          "text_en": "carrying a shoulder bag on a rainy street corner",
          "text_ja": "雨の街角でショルダーバッグを持っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "carrying a shoulder bag while holding a transparent umbrella",
          "text_en": "carrying a shoulder bag while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながらショルダーバッグを持っている"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "riding a bicycle through the rain",
      "description_ja": "雨の中を自転車で走っている",
      "involved_elements": [
        "element_007",
        "element_011",
        "element_016"
      ],
      "synonyms": [
        "ride a bicycle",
        "cycle through the rain",
        "pedal along the road",
        "ride carefully",
        "travel by bike"
      ],
      "accepted_words": [
        "ride a bicycle",
        "cycle through the rain",
        "pedal along the road",
        "ride carefully",
        "travel by bike"
      ],
      "common_typos": [
        "rie a bicycle",
        "cyle through the rain",
        "peal along the road",
        "rie carefully"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "riding a bicycle through the rain",
            "ja": "雨の中を自転車で走っている"
          }
        ],
        "A2": [
          {
            "en": "cycle through the rain",
            "ja": "雨の中を自転車で走っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "ride carefully",
            "ja": "雨の中を自転車で走っているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "approach the intersection",
            "ja": "雨の中を自転車で走っているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two wheels drawing a narrow path through reflected light",
          "ja": "反射光の中に細い道を描く2つの車輪"
        },
        {
          "en": "balancing motion on a slippery-looking road",
          "ja": "滑りやすそうな道路で動きの均衡を取る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "ride a bicycle, cycle through the rain, pedal along the road, ride carefully, travel by bike",
          "text_en": "ride a bicycle, cycle through the rain, pedal along the road, ride carefully, travel by bike",
          "text_ja": "雨の中を自転車で走っているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is riding a bicycle through the rain.",
          "text_en": "The woman is riding a bicycle through the rain.",
          "text_ja": "女性は雨の中を自転車で走っている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "riding a bicycle through the rain on a rainy street corner",
          "text_en": "riding a bicycle through the rain on a rainy street corner",
          "text_ja": "雨の街角で雨の中を自転車で走っている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "riding a bicycle through the rain while holding a transparent umbrella",
          "text_en": "riding a bicycle through the rain while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら雨の中を自転車で走っている"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "cars approaching with headlights on",
      "description_ja": "車がヘッドライトを点けて近づいている",
      "involved_elements": [
        "element_008",
        "element_011",
        "element_016"
      ],
      "synonyms": [
        "cars approach",
        "vehicles drive through the rain",
        "headlights shine",
        "traffic moves along the road",
        "cars travel toward the intersection"
      ],
      "accepted_words": [
        "cars approach",
        "vehicles drive through the rain",
        "headlights shine",
        "traffic moves along the road",
        "cars travel toward the intersection"
      ],
      "common_typos": [
        "cas approach",
        "veicles drive through the rain",
        "hedlights shine",
        "trffic moves along the road"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cars approaching with headlights on",
            "ja": "車がヘッドライトを点けて近づいている"
          }
        ],
        "A2": [
          {
            "en": "vehicles drive through the rain",
            "ja": "車がヘッドライトを点けて近づいているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "traffic moves along the road",
            "ja": "車がヘッドライトを点けて近づいているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "lights reflect on the street",
            "ja": "車がヘッドライトを点けて近づいているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "headlights arriving before the vehicles themselves",
          "ja": "車両より先に到着するヘッドライト"
        },
        {
          "en": "bright beams stretching along the wet asphalt",
          "ja": "濡れたアスファルトに伸びる明るい光線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "cars approach, vehicles drive through the rain, headlights shine, traffic moves along the road, cars travel toward the intersection",
          "text_en": "cars approach, vehicles drive through the rain, headlights shine, traffic moves along the road, cars travel toward the intersection",
          "text_ja": "車がヘッドライトを点けて近づいているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is cars approaching with headlights on.",
          "text_en": "The woman is cars approaching with headlights on.",
          "text_ja": "女性は車がヘッドライトを点けて近づいている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "cars approaching with headlights on on a rainy street corner",
          "text_en": "cars approaching with headlights on on a rainy street corner",
          "text_ja": "雨の街角で車がヘッドライトを点けて近づいている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "cars approaching with headlights on while holding a transparent umbrella",
          "text_en": "cars approaching with headlights on while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら車がヘッドライトを点けて近づいている"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "rain falling and collecting on surfaces",
      "description_ja": "雨が降り表面にたまっている",
      "involved_elements": [
        "element_002",
        "element_005",
        "element_011",
        "element_016"
      ],
      "synonyms": [
        "rain falls",
        "raindrops collect",
        "water covers the road",
        "rain hits the umbrella",
        "puddles form"
      ],
      "accepted_words": [
        "rain falls",
        "raindrops collect",
        "water covers the road",
        "rain hits the umbrella",
        "puddles form"
      ],
      "common_typos": [
        "ran falls",
        "randrops collect",
        "waer covers the road",
        "ran hits the umbrella"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "rain falling and collecting on surfaces",
            "ja": "雨が降り表面にたまっている"
          }
        ],
        "A2": [
          {
            "en": "raindrops collect",
            "ja": "雨が降り表面にたまっているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "rain hits the umbrella",
            "ja": "雨が降り表面にたまっているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "surfaces become wet",
            "ja": "雨が降り表面にたまっているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "water connecting every visible surface",
          "ja": "見えるすべての表面をつなぐ水"
        },
        {
          "en": "rain turning hard materials into reflective textures",
          "ja": "硬い素材を反射する質感へ変える雨"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "rain falls, raindrops collect, water covers the road, rain hits the umbrella, puddles form",
          "text_en": "rain falls, raindrops collect, water covers the road, rain hits the umbrella, puddles form",
          "text_ja": "雨が降り表面にたまっているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is rain falling and collecting on surfaces.",
          "text_en": "The woman is rain falling and collecting on surfaces.",
          "text_ja": "女性は雨が降り表面にたまっている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "rain falling and collecting on surfaces on a rainy street corner",
          "text_en": "rain falling and collecting on surfaces on a rainy street corner",
          "text_ja": "雨の街角で雨が降り表面にたまっている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "rain falling and collecting on surfaces while holding a transparent umbrella",
          "text_en": "rain falling and collecting on surfaces while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら雨が降り表面にたまっている"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "reflections shimmering on the wet pavement",
      "description_ja": "濡れた路面で反射が揺らめいている",
      "involved_elements": [
        "element_005",
        "element_006",
        "element_008",
        "element_010",
        "element_011"
      ],
      "synonyms": [
        "lights reflect",
        "reflections shimmer",
        "wet pavement glows",
        "colors mirror on the road",
        "puddles reflect buildings"
      ],
      "accepted_words": [
        "lights reflect",
        "reflections shimmer",
        "wet pavement glows",
        "colors mirror on the road",
        "puddles reflect buildings"
      ],
      "common_typos": [
        "lihts reflect",
        "relections shimmer",
        "we pavement glows",
        "coors mirror on the road"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "reflections shimmering on the wet pavement",
            "ja": "濡れた路面で反射が揺らめいている"
          }
        ],
        "A2": [
          {
            "en": "reflections shimmer",
            "ja": "濡れた路面で反射が揺らめいているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "colors mirror on the road",
            "ja": "濡れた路面で反射が揺らめいているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "headlights stretch across asphalt",
            "ja": "濡れた路面で反射が揺らめいているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a second city appearing upside down in water",
          "ja": "水の中に逆さまに現れるもう一つの街"
        },
        {
          "en": "colors stretching beyond their original sources",
          "ja": "元の光源を越えて伸びる色"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "lights reflect, reflections shimmer, wet pavement glows, colors mirror on the road, puddles reflect buildings",
          "text_en": "lights reflect, reflections shimmer, wet pavement glows, colors mirror on the road, puddles reflect buildings",
          "text_ja": "濡れた路面で反射が揺らめいているに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is reflections shimmering on the wet pavement.",
          "text_en": "The woman is reflections shimmering on the wet pavement.",
          "text_ja": "女性は濡れた路面で反射が揺らめいている。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "reflections shimmering on the wet pavement on a rainy street corner",
          "text_en": "reflections shimmering on the wet pavement on a rainy street corner",
          "text_ja": "雨の街角で濡れた路面で反射が揺らめいている"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "reflections shimmering on the wet pavement while holding a transparent umbrella",
          "text_en": "reflections shimmering on the wet pavement while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら濡れた路面で反射が揺らめいている"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "waiting for a safe moment to cross",
      "description_ja": "安全に横断できる瞬間を待っている可能性がある",
      "involved_elements": [
        "element_001",
        "element_005",
        "element_006",
        "element_007"
      ],
      "synonyms": [
        "wait for the signal",
        "check whether it is safe",
        "watch the pedestrian light",
        "pause near the crossing",
        "follow traffic rules"
      ],
      "accepted_words": [
        "wait for the signal",
        "check whether it is safe",
        "watch the pedestrian light",
        "pause near the crossing",
        "follow traffic rules"
      ],
      "common_typos": [
        "wat for the signal",
        "chck whether it is safe",
        "wach the pedestrian light",
        "pase near the crossing"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "waiting for a safe moment to cross",
            "ja": "安全に横断できる瞬間を待っている可能性がある"
          }
        ],
        "A2": [
          {
            "en": "check whether it is safe",
            "ja": "安全に横断できる瞬間を待っている可能性があるを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "pause near the crossing",
            "ja": "安全に横断できる瞬間を待っている可能性があるを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "look for a safe moment",
            "ja": "安全に横断できる瞬間を待っている可能性があるを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "holding movement between one signal and the next",
          "ja": "一つの信号と次の信号の間で動きを止める"
        },
        {
          "en": "measuring safety through light and traffic",
          "ja": "光と交通を通して安全を測る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "wait for the signal, check whether it is safe, watch the pedestrian light, pause near the crossing, follow traffic rules",
          "text_en": "wait for the signal, check whether it is safe, watch the pedestrian light, pause near the crossing, follow traffic rules",
          "text_ja": "安全に横断できる瞬間を待っている可能性があるに関する基本語彙"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The woman is waiting for a safe moment to cross.",
          "text_en": "The woman is waiting for a safe moment to cross.",
          "text_ja": "女性は安全に横断できる瞬間を待っている可能性がある。"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "waiting for a safe moment to cross on a rainy street corner",
          "text_en": "waiting for a safe moment to cross on a rainy street corner",
          "text_ja": "雨の街角で安全に横断できる瞬間を待っている可能性がある"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "waiting for a safe moment to cross while holding a transparent umbrella",
          "text_en": "waiting for a safe moment to cross while holding a transparent umbrella",
          "text_ja": "透明な傘を持ちながら安全に横断できる瞬間を待っている可能性がある"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "woman",
      "relationship": "under",
      "object": "transparent umbrella",
      "example_beginner": "The woman is under the umbrella.",
      "example_intermediate": "The woman walks beneath a large transparent umbrella covered with raindrops."
    },
    {
      "subject": "woman",
      "relationship": "on",
      "object": "pedestrian crossing",
      "example_beginner": "The woman is on the crosswalk.",
      "example_intermediate": "The young woman is stepping across the wet pedestrian crossing."
    },
    {
      "subject": "woman",
      "relationship": "to the left of",
      "object": "cyclist",
      "example_beginner": "The woman is to the left of the cyclist.",
      "example_intermediate": "The pedestrian occupies the left foreground, while the cyclist rides farther to the right."
    },
    {
      "subject": "shoulder bag",
      "relationship": "beside",
      "object": "woman's hip",
      "example_beginner": "The bag is beside her hip.",
      "example_intermediate": "The dark brown shoulder bag rests beside the woman's left hip."
    },
    {
      "subject": "umbrella handle",
      "relationship": "near",
      "object": "woman's chest",
      "example_beginner": "The handle is near her chest.",
      "example_intermediate": "She grips the curved umbrella handle close to the center of her chest."
    },
    {
      "subject": "pedestrian signal",
      "relationship": "above",
      "object": "street corner",
      "example_beginner": "The signal is above the corner.",
      "example_intermediate": "The red pedestrian signal is mounted high above the rainy intersection."
    },
    {
      "subject": "tactile paving",
      "relationship": "beside",
      "object": "curb",
      "example_beginner": "The yellow blocks are beside the curb.",
      "example_intermediate": "Yellow tactile paving runs beside the raised curb at the corner."
    },
    {
      "subject": "corner shop",
      "relationship": "to the left of",
      "object": "woman",
      "example_beginner": "The shop is to the left of the woman.",
      "example_intermediate": "The warmly lit glass-fronted shop stands behind and to the left of the woman."
    },
    {
      "subject": "cyclist",
      "relationship": "on",
      "object": "right side of road",
      "example_beginner": "The cyclist is on the right side.",
      "example_intermediate": "A helmeted cyclist rides along the right side of the wet road."
    },
    {
      "subject": "cars",
      "relationship": "behind",
      "object": "woman",
      "example_beginner": "The cars are behind the woman.",
      "example_intermediate": "Several cars with headlights appear in the middle distance behind the crossing woman."
    },
    {
      "subject": "background pedestrian",
      "relationship": "between",
      "object": "cars and signal",
      "example_beginner": "The person is between the cars and signal.",
      "example_intermediate": "A distant umbrella user walks near the center of the street between the approaching vehicles and signal pole."
    },
    {
      "subject": "cherry blossom tree",
      "relationship": "above",
      "object": "right-side buildings",
      "example_beginner": "The blossoms are above the buildings.",
      "example_intermediate": "Pink cherry blossoms spread above the walls and buildings in the upper-right area."
    },
    {
      "subject": "utility poles",
      "relationship": "along",
      "object": "street",
      "example_beginner": "The poles are along the street.",
      "example_intermediate": "Utility poles and wires continue along both sides of the road into the distance."
    },
    {
      "subject": "reflections",
      "relationship": "across",
      "object": "wet road",
      "example_beginner": "The reflections are across the road.",
      "example_intermediate": "Red, gold, and white reflections stretch across the rain-soaked pavement."
    },
    {
      "subject": "crosswalk",
      "relationship": "in front of",
      "object": "woman",
      "example_beginner": "The crosswalk is in front of her.",
      "example_intermediate": "The white crossing stripes extend in front of and beneath the woman's steps."
    },
    {
      "subject": "old houses",
      "relationship": "behind",
      "object": "roadside walls",
      "example_beginner": "The houses are behind the walls.",
      "example_intermediate": "Older houses and small shops rise behind walls and narrow sidewalks on both sides of the road."
    }
  ],
  "adjective_library": {
    "woman": [
      "young",
      "calm",
      "focused",
      "elegant",
      "careful",
      "weather-prepared",
      "solitary",
      "thoughtful",
      "composed",
      "urban"
    ],
    "umbrella": [
      "transparent",
      "clear",
      "plastic",
      "wet",
      "domed",
      "protective",
      "see-through",
      "raindrop-covered",
      "lightweight"
    ],
    "street": [
      "wet",
      "reflective",
      "dark",
      "urban",
      "quiet",
      "rain-soaked",
      "shiny",
      "slippery-looking",
      "cinematic"
    ],
    "weather": [
      "rainy",
      "cool",
      "gray",
      "steady",
      "dim",
      "overcast",
      "moody",
      "soft",
      "continuous",
      "damp"
    ],
    "light": [
      "warm",
      "golden",
      "reflected",
      "red",
      "white",
      "diffused",
      "glowing",
      "scattered",
      "mirror-like"
    ],
    "mood": [
      "reflective",
      "quiet",
      "slightly melancholic",
      "hopeful",
      "calm",
      "cinematic",
      "atmospheric",
      "seasonal",
      "thoughtful",
      "soft"
    ]
  },
  "preposition_library": [
    {
      "preposition": "on",
      "meaning_ja": "〜の上に・〜で",
      "example": "The woman is walking on the crosswalk."
    },
    {
      "preposition": "under",
      "meaning_ja": "〜の下に",
      "example": "She is under a transparent umbrella."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って",
      "example": "She is walking across the street."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "The cyclist is riding through the rain."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The tactile paving is beside the curb."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The woman is near the pedestrian signal."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The shop is to the left of the woman."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The cyclist is to the right of the woman."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "Cars are behind the pedestrian."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The crosswalk extends in front of her."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "The signal is above the intersection."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "The wet road is below the traffic lights."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The distant pedestrian is between the cars and signal."
    },
    {
      "preposition": "along",
      "meaning_ja": "〜に沿って",
      "example": "Utility poles run along the street."
    },
    {
      "preposition": "toward",
      "meaning_ja": "〜の方向へ",
      "example": "The woman is looking toward the opposite side."
    },
    {
      "preposition": "from",
      "meaning_ja": "〜から",
      "example": "Warm light comes from the corner shop."
    },
    {
      "preposition": "inside",
      "meaning_ja": "〜の中に",
      "example": "People may be inside the lit shop."
    },
    {
      "preposition": "outside",
      "meaning_ja": "〜の外に",
      "example": "The woman is outside in the rain."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周囲に",
      "example": "Reflections spread around the puddles."
    },
    {
      "preposition": "against",
      "meaning_ja": "〜を背景に・〜に対して",
      "example": "Pink blossoms stand out against the gray sky."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Singular subject + is + present participle (-ing)",
      "label_ja": "単数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "女性が今している動作を表す。",
      "examples": [
        "A woman is walking across the street.",
        "She is holding an umbrella.",
        "She is looking ahead."
      ],
      "hints": [
        "a womanやsheにはisを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "信号、車、自転車、店、桜などの存在を説明する。",
      "examples": [
        "There is a red pedestrian signal.",
        "There is a cyclist on the road.",
        "There are several cars in the background."
      ],
      "hints": [
        "単数にはThere is、複数にはThere areを使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "天気、道路、雰囲気の状態を表す。",
      "examples": [
        "The street is wet.",
        "The weather is rainy.",
        "The shop is bright."
      ],
      "hints": [
        "wet, rainy, bright, quietなどを使えます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The woman is on the crosswalk.",
        "The cyclist is on the right.",
        "The cherry tree is above the wall."
      ],
      "hints": [
        "on, beside, above, behindなどを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + have / has + noun",
      "label_ja": "have・hasによる所有",
      "level": "beginner",
      "purpose_ja": "女性の持ち物や店の特徴を表す。",
      "examples": [
        "The woman has a transparent umbrella.",
        "She has a brown shoulder bag.",
        "The shop has large glass windows."
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
      "purpose_ja": "歩く、傘を持つ、見るなどの同時動作を表す。",
      "examples": [
        "She holds the umbrella while she crosses the street.",
        "The cyclist rides while rain falls.",
        "Cars approach while lights reflect on the road."
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
        "The woman who is holding the umbrella is crossing the street.",
        "The shop, which has large windows, glows warmly.",
        "The road that is covered with water reflects many lights."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "look / seem / appear + adjective or infinitive",
      "label_ja": "look・seem・appearによる印象と推量",
      "level": "intermediate",
      "purpose_ja": "画像から受ける印象を慎重に表す。",
      "examples": [
        "The woman looks calm.",
        "The road seems slippery.",
        "The weather appears to be cool and rainy."
      ],
      "hints": [
        "断定しすぎない描写に使えます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "may / might + base verb",
      "label_ja": "may・mightによる可能性",
      "level": "intermediate",
      "purpose_ja": "女性の目的や信号の状況を推測する。",
      "examples": [
        "She may be going home.",
        "She might be waiting for the signal to change.",
        "The cyclist may be commuting."
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
      "purpose_ja": "傘を持つ理由や信号の目的を説明する。",
      "examples": [
        "She carries an umbrella because it is raining.",
        "The signal is installed so that pedestrians can cross safely.",
        "Cars use headlights because visibility is low."
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
      "purpose_ja": "悪天候でも移動を続けることを表す。",
      "examples": [
        "Although it is raining, the woman continues walking.",
        "Even though the road is wet, the cyclist keeps riding.",
        "Although the scene is gray, the cherry blossoms add color."
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
        "Holding a transparent umbrella, the woman crosses the wet street.",
        "Looking ahead, she steps carefully across the road.",
        "Riding through the rain, the cyclist approaches the intersection."
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
      "purpose_ja": "雨に濡れた状態や光に照らされた状態を文頭で表す。",
      "examples": [
        "Covered with rainwater, the road reflects many colors.",
        "Illuminated by warm shop lights, the pavement glows.",
        "Surrounded by wires and old buildings, the intersection feels urban."
      ],
      "hints": [
        "Covered, Illuminated, Surroundedなどから始めます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "安全に移動する方法を説明する。",
      "examples": [
        "By watching the signal, the woman can cross safely.",
        "By using an umbrella, she protects herself from the rain.",
        "By turning on their headlights, drivers become easier to see."
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
      "purpose_ja": "反射や桜などの複数の役割を強調する。",
      "examples": [
        "The rain creates not only inconvenience but also beautiful reflections.",
        "The shop provides not only light but also warmth.",
        "The cherry blossoms add not only color but also seasonal meaning."
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
      "purpose_ja": "女性の次の行動や天候を推測する。",
      "examples": [
        "It looks as though the woman is watching the signal.",
        "It seems that the rain has been falling for some time.",
        "It looks as though the cyclist is approaching the crossing."
      ],
      "hints": [
        "画像からの推測を慎重に表せます。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "The fact that + clause + suggests that + clause",
      "label_ja": "The fact thatを使った証拠からの推論",
      "level": "advanced",
      "purpose_ja": "画像内の視覚的証拠から論理的に推測する。",
      "examples": [
        "The fact that the road is covered with reflections suggests that the rain has continued for a while.",
        "The fact that the signal is red suggests that pedestrians should wait.",
        "The fact that the woman has an umbrella suggests that she expected rain."
      ],
      "hints": [
        "見える事実と推測を一文でつなげられます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There is ______.",
        "example": "There is a young woman."
      },
      {
        "step": 2,
        "question_ja": "何をしていますか？",
        "template": "She is ______ing.",
        "example": "She is walking across the street."
      },
      {
        "step": 3,
        "question_ja": "何を持っていますか？",
        "template": "She is holding ______.",
        "example": "She is holding a transparent umbrella."
      },
      {
        "step": 4,
        "question_ja": "どんな服装ですか？",
        "template": "She is wearing ______.",
        "example": "She is wearing a beige trench coat."
      },
      {
        "step": 5,
        "question_ja": "天気はどうですか？",
        "template": "It is ______.",
        "example": "It is raining."
      },
      {
        "step": 6,
        "question_ja": "背景には何がありますか？",
        "template": "There is / are ______ in the background.",
        "example": "There is a cyclist, and there are several cars in the background."
      },
      {
        "step": 7,
        "question_ja": "雰囲気はどうですか？",
        "template": "The scene feels ______.",
        "example": "The scene feels quiet, cool, and reflective."
      }
    ],
    "intermediate": [
      {
        "template": "A young woman is ______ing while holding ______.",
        "example": "A young woman is crossing the street while holding a transparent umbrella."
      },
      {
        "template": "She is wearing ______ and carrying ______.",
        "example": "She is wearing a beige trench coat and carrying a dark shoulder bag."
      },
      {
        "template": "On the right, ______.",
        "example": "On the right, a cyclist is riding through the rain."
      },
      {
        "template": "In the background, ______.",
        "example": "In the background, cars with headlights are approaching along the wet road."
      },
      {
        "template": "Because the pavement is wet, ______.",
        "example": "Because the pavement is wet, lights are reflected across the street."
      },
      {
        "template": "Although the weather is gray, ______.",
        "example": "Although the weather is gray, the pink cherry blossoms add warmth."
      },
      {
        "template": "It looks as though ______.",
        "example": "It looks as though the woman is watching the pedestrian signal."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Holding a raindrop-covered umbrella, the woman steps carefully across the reflective road."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Covered with rainwater, the street mirrors traffic lights, headlights, and shop windows."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The cyclist who is riding on the right appears to be approaching the intersection cautiously."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The shop, which glows warmly behind glass windows, contrasts with the cool rainy street."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By watching the pedestrian signal, the woman can coordinate her movement with the traffic."
      },
      {
        "template": "Although / even though.",
        "example": "Although the weather is dark and wet, the cherry blossoms and shop lights prevent the scene from feeling hopeless."
      },
      {
        "template": "The fact that ... suggests that ...",
        "example": "The fact that long reflections cover the road suggests that the rain has been falling steadily."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A young woman is walking in the rain.",
      "She is holding a transparent umbrella.",
      "She is wearing a beige trench coat.",
      "She has a brown shoulder bag.",
      "She is crossing a wet street.",
      "There is a red pedestrian signal.",
      "A cyclist is riding on the right.",
      "Several cars are in the background.",
      "The road is wet and shiny.",
      "There is a bright shop on the left.",
      "Pink cherry blossoms are on the right."
    ],
    "intermediate": [
      "A young woman in a beige trench coat is walking across a wet pedestrian crossing.",
      "She holds a transparent umbrella covered with raindrops and carries a dark shoulder bag.",
      "Her long dark hair falls over her shoulders as she looks ahead.",
      "A red pedestrian signal is visible above the corner near her.",
      "On the right, a cyclist in dark clothing rides along the rain-soaked road.",
      "Farther away, another pedestrian carries an umbrella, and cars approach with their headlights on.",
      "A warmly lit shop with large glass windows stands on the left.",
      "The wet pavement reflects red, white, and golden light.",
      "Old houses, utility poles, and wires continue into the distance.",
      "Pink cherry blossoms add soft seasonal color to the cool gray scene."
    ],
    "advanced": [
      "Holding a transparent umbrella speckled with raindrops, a young woman steps across a rain-soaked pedestrian crossing.",
      "Her beige trench coat, dark skirt, black shoes, and brown shoulder bag create a calm and practical urban appearance.",
      "Although her body moves from left to right, her focused expression suggests that she is carefully observing the intersection ahead.",
      "A red pedestrian symbol glows above the corner, introducing a clear road-safety element into the scene.",
      "To the right, a helmeted cyclist rides cautiously through the wet street while several vehicles approach with headlights on.",
      "The dark pavement acts like a mirror, stretching red, white, and golden reflections across puddles and crossing stripes.",
      "A warm glass-fronted shop on the left contrasts strongly with the cool blue-gray weather outside.",
      "Traditional houses, walls, utility poles, and dense overhead wires create a layered residential city background.",
      "A pink cherry blossom tree softens the upper-right corner and gives the rainy scene a clear sense of season.",
      "The image combines ordinary movement, public safety, weather, reflection, and quiet emotional atmosphere."
    ]
  },
  "full_description_support": {
    "beginner_model": "A young woman is walking across a street in the rain. She is holding a transparent umbrella. She is wearing a beige trench coat, black clothes, black socks, and black shoes. She also has a dark brown shoulder bag. The road and crosswalk are wet and shiny. There is a red pedestrian signal near the woman. A cyclist is riding on the right side of the road. There are cars and another person with an umbrella in the background. A bright shop is on the left. Old houses, poles, and wires are along the street. Pink cherry blossoms are on the right. The scene is rainy, quiet, and beautiful.",
    "intermediate_model": "A young woman is crossing a wet street at a rainy urban intersection. She wears a long beige trench coat over dark clothing and holds a transparent umbrella covered with raindrops. A dark brown shoulder bag hangs beside her hip, and her long black hair falls over her shoulders. She moves from left to right while looking ahead toward the other side of the crossing. A pedestrian signal near her appears to show a red standing figure. On the right, a cyclist in dark rain clothing rides through the wet road. Another umbrella user and several cars with bright headlights appear in the distance. The road, crosswalk, and sidewalks are covered with water and reflect red, white, and golden light. A warmly lit shop with large glass windows stands on the left, while older houses and small buildings line the road. Utility poles and tangled wires lead the eye into the distance. Pink cherry blossoms fill the upper-right corner and add softness to the cool gray atmosphere.",
    "advanced_model": "In a rain-darkened urban neighborhood, a young woman crosses a reflective pedestrian crossing beneath a large transparent umbrella. Dressed in a belted beige trench coat over dark clothing, with black socks and polished shoes, she carries a structured brown shoulder bag diagonally across her body. Raindrops gather across the clear canopy as she grips its white curved handle near her chest and looks toward the next stage of the intersection. The red pedestrian pictogram above the corner introduces a subtle tension between her forward motion and the shared safety rules of the street. A helmeted cyclist rides along the right side of the road, while another umbrella-carrying pedestrian and several cars with bright headlights occupy the middle distance. Covered with rainwater, the asphalt and crossing stripes become a wide mirror that stretches red signal light, white headlights, and warm shop illumination into long fluid reflections. On the left, a glass-fronted corner shop or cafe glows like a small refuge from the cool weather, sending golden light onto the pavement. Older homes, small shops, walls, balconies, utility poles, and dense overhead wires create a deeply layered street perspective. A flowering cherry tree occupies the upper-right area, placing soft pink blossoms against concrete walls and blue-gray rain. Tactile paving, curbs, railings, signals, and marked crossing lines emphasize accessibility and organized public movement. The scene is therefore not only a picture of a woman walking in bad weather but also a study of how rain transforms ordinary urban infrastructure into an emotional landscape of reflection, caution, warmth, and seasonal beauty."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A woman is walking in the rain. She has a clear umbrella.",
        "ja": "女性が雨の中を歩いています。透明な傘を持っています。",
        "focus": "現在進行形とhasを使って基本動作と持ち物を表す。"
      },
      {
        "en": "She is wearing a beige coat and carrying a brown bag.",
        "ja": "彼女はベージュのコートを着て、茶色のバッグを持っています。",
        "focus": "andで2つの動作をつなぐ。"
      },
      {
        "en": "There is a cyclist, and there are cars on the wet road.",
        "ja": "濡れた道路には自転車の人と複数の車がいます。",
        "focus": "There isとThere areを使い分ける。"
      }
    ],
    "A2": [
      {
        "en": "A young woman is crossing a wet street while holding a transparent umbrella.",
        "ja": "若い女性が透明な傘を持ちながら濡れた道路を横断しています。",
        "focus": "whileで同時進行を表す。"
      },
      {
        "en": "The road is shining because the rain is reflecting traffic lights and shop lights.",
        "ja": "雨が信号や店の灯りを反射しているため、道路が輝いています。",
        "focus": "becauseで理由を説明する。"
      },
      {
        "en": "Although the weather is gray, pink cherry blossoms make the scene feel softer.",
        "ja": "天気は灰色ですが、ピンクの桜が場面をより柔らかく感じさせます。",
        "focus": "Althoughで対比を作る。"
      }
    ],
    "B1": [
      {
        "en": "The woman, who is dressed in a beige trench coat, appears to be watching the pedestrian signal as she crosses.",
        "ja": "ベージュのトレンチコートを着た女性は、横断しながら歩行者用信号を見ているようです。",
        "focus": "非制限用法whoとappear toを使う。"
      },
      {
        "en": "The cyclist and approaching cars show that she must pay attention to several kinds of traffic.",
        "ja": "自転車と近づく車から、彼女が複数種類の交通に注意を払う必要があると分かります。",
        "focus": "show thatとmustを使って状況を説明する。"
      },
      {
        "en": "The warm shop lights contrast with the cool rainy weather and create a more hopeful atmosphere.",
        "ja": "温かな店の灯りは冷たい雨の天気と対照を作り、より希望のある雰囲気を生みます。",
        "focus": "contrast withとcreateを使って雰囲気を分析する。"
      }
    ],
    "B2": [
      {
        "en": "Holding a raindrop-covered umbrella, the woman crosses a reflective intersection in which personal movement is carefully coordinated with public traffic signals.",
        "ja": "雨粒に覆われた傘を持ち、女性は個人の移動が公共の交通信号と慎重に調整される反射的な交差点を横断しています。",
        "focus": "現在分詞構文と関係詞in whichを使う。"
      },
      {
        "en": "The rain-soaked pavement, which mirrors headlights, signal colors, and shop windows, transforms the ordinary street into a layered visual landscape.",
        "ja": "ヘッドライト、信号の色、店の窓を映す雨に濡れた路面は、普通の通りを層のある視覚的景観へ変えています。",
        "focus": "非制限用法whichと高度な動詞transformを使う。"
      },
      {
        "en": "Framed by dense utility wires and softened by cherry blossoms, the scene conveys not only urban caution but also seasonal beauty and quiet emotional warmth.",
        "ja": "密集した電線に囲まれ桜で柔らかくされた場面は、都市での注意だけでなく季節の美しさと静かな感情的温かさも伝えています。",
        "focus": "過去分詞構文とnot only A but also Bを組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene018Data = scene018Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene018Data;
}
