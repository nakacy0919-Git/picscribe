"use strict";

const scene019Data = {
  "id": "scene_019",
  "image_id": "019.webp",
  "overall_description_ja": "夕暮れ時の高い丘または山の展望地点で、若い男女の二人が草の生えた斜面に並んで座り、広大な谷と沈みゆく太陽を眺めている。男性は左側、女性は右側に座り、二人とも画面の奥に広がる景色へ背中を向けているため、表情は見えない。男性は短い黒髪で、濃い色のジャケットまたはシャツを着ている。女性は長い黒髪を背中に垂らし、暖かみのある茶色またはオレンジ系の上着を着ている。二人の肩や身体は近く、静かな親密さや信頼関係を感じさせる。手前には風に揺れる背の低い草、枯れ草、小さな野草、暗い土や岩があり、夕日の光によって輪郭が黄金色に縁取られている。画面中央から右側の地平線近くには白く輝く太陽があり、山並みの向こうへ沈みかけている。太陽の周囲には強いオレンジ、金色、ピンク、赤、紫の光が広がり、雲の縁を明るく照らしている。空には大きな暗い雲と細かな雲が重なり、その間から放射状の光線が伸びている。眼下には広い谷、低い山々、丘陵、都市や町の明かり、道路、川、湖または水田のような水面が複雑に広がっている。水面や建物の一部は夕日の光を反射し、遠くまで金色の点や線として輝いている。左右と奥には幾重にも重なる山の稜線があり、遠くなるほど青紫色に薄れている。二人がいる場所は暗い前景として描かれ、明るい空と谷に対して強いシルエットを作っている。全体として、壮大でロマンチック、穏やか、希望に満ちた雰囲気があり、二人が一日の終わりを共有しているように感じられる。",
  "overall_description_en": "At sunset, a young couple sits side by side on a grassy mountain ridge or high hill and looks out over a vast valley. The man sits on the left and the woman on the right, both seen from behind as they face the glowing horizon. The man has short dark hair and wears a dark jacket or shirt, while the woman has long dark hair and wears a warm brown or orange outer layer. Their shoulders and bodies are close, suggesting quiet intimacy, trust, and companionship. In the foreground, low grasses, dry plants, small wild growth, dark soil, and rocks catch thin lines of golden light. Near the center-right horizon, the sun hangs low above distant mountains and shines in white, yellow, orange, and gold. Large purple and red clouds spread across the sky, their edges illuminated by the sunset, while rays of light appear to extend outward from the sun. Far below, a wide valley contains layered hills, towns, roads, rivers, lakes, and reflective surfaces that glow with scattered points of light. Mountain ridges continue into the distance and become softer and bluer as they recede. The dark silhouettes of the couple and foreground contrast strongly with the brilliant sky and valley. The scene feels panoramic, romantic, peaceful, reflective, and hopeful, as though the two people are sharing the final light of the day.",
  "overall_mood": [
    "romantic",
    "peaceful",
    "panoramic",
    "hopeful",
    "warm",
    "reflective",
    "intimate",
    "majestic",
    "quiet",
    "cinematic",
    "dreamlike",
    "serene",
    "emotional",
    "expansive",
    "golden",
    "inspiring"
  ],
  "mission_guides": {
    "gist": "若い二人がどこに座り、何を見ているかを書こう。",
    "setting": "丘、草、谷、町、水面、山並み、夕日、雲を説明しよう。",
    "details": "二人の位置、髪、服装、距離、シルエット、光の反射を加えよう。",
    "complete": "広大な景色と、二人が夕暮れを共有する静かで親密な雰囲気まで描写しよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "a young couple sitting together on a hill",
        "ja": "丘に並んで座る若い二人"
      },
      {
        "en": "watching the sun set over a wide valley",
        "ja": "広い谷に沈む夕日を見る"
      },
      {
        "en": "seen from behind as dark silhouettes",
        "ja": "暗いシルエットとして後ろから見える"
      },
      {
        "en": "sharing a quiet moment close to each other",
        "ja": "互いに近くで静かな瞬間を共有する"
      }
    ],
    "setting": [
      {
        "en": "on a grassy mountain ridge above a vast landscape",
        "ja": "広大な景色を見下ろす草の丘の上で"
      },
      {
        "en": "with towns, roads, rivers, and lakes in the valley",
        "ja": "谷に町、道路、川、湖がある"
      },
      {
        "en": "beneath red, orange, purple, and golden clouds",
        "ja": "赤、オレンジ、紫、金色の雲の下で"
      },
      {
        "en": "surrounded by layered mountains and glowing water",
        "ja": "重なる山々と輝く水面に囲まれて"
      }
    ],
    "mood": [
      {
        "en": "a romantic and peaceful sunset atmosphere",
        "ja": "ロマンチックで穏やかな夕暮れの雰囲気"
      },
      {
        "en": "warm golden light contrasting with dark silhouettes",
        "ja": "暗いシルエットと対照を作る温かな黄金色の光"
      },
      {
        "en": "a vast view that feels majestic and inspiring",
        "ja": "壮大で心を動かす広い眺め"
      },
      {
        "en": "a quiet shared moment filled with hope and reflection",
        "ja": "希望と内省に満ちた静かな共有の瞬間"
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
        "a couple",
        "two people",
        "a man and a woman",
        "a young couple",
        "they",
        "two young people"
      ],
      "hint_msg": "a coupleやa man and a womanなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は二人が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "are sitting",
        "are watching",
        "are looking",
        "are relaxing",
        "are sharing",
        "are enjoying",
        "are facing",
        "are admiring"
      ],
      "hint_msg": "are sittingやare watchingなど、複数主語の現在進行形を書きましょう。",
      "success_msg": "Great! 次は何を見ていて、どこにいるかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "the sunset",
        "on a hill",
        "on a mountain ridge",
        "over the valley",
        "toward the horizon",
        "above a city",
        "beside each other",
        "at the end of the day"
      ],
      "hint_msg": "the sunset / on a hill / over the valleyなどを加えましょう。",
      "success_msg": "Excellent! 空、雲、山、光、谷、町、水面、二人の距離感まで詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "a couple watching the sunset",
    "sitting side by side on a hill",
    "looking over a vast valley",
    "dark silhouettes against a bright sky",
    "a glowing sun near the horizon",
    "red, purple, orange, and golden clouds",
    "sun rays spreading through the sky",
    "layered mountain ridges",
    "town lights and roads below",
    "rivers, lakes, and reflective water",
    "golden grass in the foreground",
    "a peaceful romantic moment",
    "sharing the end of the day",
    "contrasting foreground darkness and sky brightness",
    "a panoramic mountain view",
    "hope, companionship, and reflection"
  ],
  "scene_structure": {
    "foreground": [
      "young couple",
      "dark silhouettes",
      "grassy ridge",
      "dry grass",
      "small plants",
      "dark soil and rocks"
    ],
    "midground": [
      "nearby hills",
      "valley towns",
      "roads",
      "rivers",
      "lakes or reflective fields",
      "scattered golden lights"
    ],
    "background": [
      "setting sun",
      "layered mountain ranges",
      "red and purple clouds",
      "golden horizon",
      "sun rays",
      "distant blue-purple ridges"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "young couple",
      "label_ja": "若い男女の二人",
      "category": "person",
      "importance": "primary",
      "description": "A young man and woman sit close together on the ridge, seen from behind as they face the sunset.",
      "bounding_box_conceptual": [
        34,
        22,
        38,
        24
      ],
      "color": [
        "black",
        "dark brown",
        "warm brown"
      ],
      "attributes": [
        "young",
        "close",
        "quiet",
        "relaxed",
        "silhouetted",
        "companions"
      ],
      "action": [
        "sitting",
        "watching the sunset",
        "sharing a view",
        "facing the valley"
      ],
      "synonyms_and_related_words": [
        "couple",
        "young couple",
        "two people",
        "a man and a woman"
      ],
      "accepted_words": [
        "couple",
        "young couple",
        "two people",
        "a man and a woman"
      ],
      "common_typos": [
        "cople",
        "yong couple"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "young couple",
            "ja": "若い男女の二人"
          }
        ],
        "A2": [
          {
            "en": "young couple",
            "ja": "若い男女の二人を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "a man and a woman",
            "ja": "若い男女の二人を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "companions",
            "ja": "若い男女の二人を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two figures sharing the final light of the day",
          "ja": "一日の最後の光を共有する二人の人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "couple, young couple, two people, a man and a woman, partners",
          "text_en": "couple, young couple, two people, a man and a woman, partners",
          "text_ja": "若い男女の二人に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible young couple surrounded by warm evening light",
          "text_en": "a clearly visible young couple surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える若い男女の二人"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant young couple contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant young couple contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な若い男女の二人"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "young man",
      "label_ja": "若い男性",
      "category": "person",
      "importance": "primary",
      "description": "The young man sits on the left with short dark hair and a dark jacket, facing the glowing valley.",
      "bounding_box_conceptual": [
        35,
        22,
        34,
        15
      ],
      "color": [
        "black",
        "dark gray",
        "brown"
      ],
      "attributes": [
        "young",
        "short-haired",
        "quiet",
        "seated",
        "silhouetted"
      ],
      "action": [
        "sitting",
        "looking toward the horizon",
        "leaning slightly forward"
      ],
      "synonyms_and_related_words": [
        "man",
        "young man",
        "male figure",
        "boyfriend"
      ],
      "accepted_words": [
        "man",
        "young man",
        "male figure",
        "boyfriend"
      ],
      "common_typos": [
        "mann",
        "yong man"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "young man",
            "ja": "若い男性"
          }
        ],
        "A2": [
          {
            "en": "young man",
            "ja": "若い男性を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "boyfriend",
            "ja": "若い男性を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "person on the left",
            "ja": "若い男性を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark figure seated at the edge of evening",
          "ja": "夕暮れの端に座る濃色の人物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "man, young man, male figure, boyfriend, male companion",
          "text_en": "man, young man, male figure, boyfriend, male companion",
          "text_ja": "若い男性に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible young man surrounded by warm evening light",
          "text_en": "a clearly visible young man surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える若い男性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant young man contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant young man contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な若い男性"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "young woman",
      "label_ja": "若い女性",
      "category": "person",
      "importance": "primary",
      "description": "The young woman sits on the right with long dark hair and a warm brown outer layer, facing the sunset.",
      "bounding_box_conceptual": [
        39,
        34,
        34,
        14
      ],
      "color": [
        "black",
        "dark brown",
        "orange-brown"
      ],
      "attributes": [
        "young",
        "long-haired",
        "quiet",
        "seated",
        "silhouetted"
      ],
      "action": [
        "sitting",
        "looking at the sunset",
        "resting beside the man"
      ],
      "synonyms_and_related_words": [
        "woman",
        "young woman",
        "female figure",
        "girlfriend"
      ],
      "accepted_words": [
        "woman",
        "young woman",
        "female figure",
        "girlfriend"
      ],
      "common_typos": [
        "woan",
        "yong woman"
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
            "en": "girlfriend",
            "ja": "若い女性を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "person on the right",
            "ja": "若い女性を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a long-haired silhouette touched by orange light",
          "ja": "オレンジ色の光に触れる長い髪のシルエット"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "woman, young woman, female figure, girlfriend, female companion",
          "text_en": "woman, young woman, female figure, girlfriend, female companion",
          "text_ja": "若い女性に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible young woman surrounded by warm evening light",
          "text_en": "a clearly visible young woman surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える若い女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant young woman contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant young woman contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な若い女性"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "dark silhouettes",
      "label_ja": "暗いシルエット",
      "category": "mood",
      "importance": "primary",
      "description": "The couple and foreground plants appear as dark silhouettes against the brilliant sunset sky.",
      "bounding_box_conceptual": [
        34,
        20,
        49,
        31
      ],
      "color": [
        "black",
        "dark brown",
        "deep purple"
      ],
      "attributes": [
        "dark",
        "backlit",
        "simple",
        "contrasting",
        "dramatic"
      ],
      "action": [
        "contrasting with the sky",
        "framing the view",
        "emphasizing shape"
      ],
      "synonyms_and_related_words": [
        "silhouette",
        "dark silhouette",
        "backlit figures",
        "shadowed shapes"
      ],
      "accepted_words": [
        "silhouette",
        "dark silhouette",
        "backlit figures",
        "shadowed shapes"
      ],
      "common_typos": [
        "sihouette",
        "dak silhouette"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dark silhouettes",
            "ja": "暗いシルエット"
          }
        ],
        "A2": [
          {
            "en": "dark silhouette",
            "ja": "暗いシルエットを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "shadowed shapes",
            "ja": "暗いシルエットを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "black outlines",
            "ja": "暗いシルエットを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "human shapes reduced to quiet outlines",
          "ja": "静かな輪郭へ単純化された人の形"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "silhouette, dark silhouette, backlit figures, shadowed shapes, dark forms",
          "text_en": "silhouette, dark silhouette, backlit figures, shadowed shapes, dark forms",
          "text_ja": "暗いシルエットに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible dark silhouettes surrounded by warm evening light",
          "text_en": "a clearly visible dark silhouettes surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える暗いシルエット"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant dark silhouettes contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant dark silhouettes contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な暗いシルエット"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "grassy mountain ridge",
      "label_ja": "草の生えた山の稜線",
      "category": "setting",
      "importance": "primary",
      "description": "A high grassy ridge or hill forms the foreground where the couple sits above the valley.",
      "bounding_box_conceptual": [
        57,
        0,
        43,
        100
      ],
      "color": [
        "dark green",
        "brown",
        "gold"
      ],
      "attributes": [
        "high",
        "grassy",
        "uneven",
        "natural",
        "overlooking"
      ],
      "action": [
        "supporting the couple",
        "framing the foreground",
        "overlooking the valley"
      ],
      "synonyms_and_related_words": [
        "mountain ridge",
        "hilltop",
        "grassy hill",
        "high ridge"
      ],
      "accepted_words": [
        "mountain ridge",
        "hilltop",
        "grassy hill",
        "high ridge"
      ],
      "common_typos": [
        "montain ridge",
        "hiltop"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "grassy mountain ridge",
            "ja": "草の生えた山の稜線"
          }
        ],
        "A2": [
          {
            "en": "hilltop",
            "ja": "草の生えた山の稜線を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "high ridge",
            "ja": "草の生えた山の稜線を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "mountain slope",
            "ja": "草の生えた山の稜線を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a narrow edge between people and the enormous view",
          "ja": "人と巨大な眺めの間の細い縁"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mountain ridge, hilltop, grassy hill, high ridge, viewpoint",
          "text_en": "mountain ridge, hilltop, grassy hill, high ridge, viewpoint",
          "text_ja": "草の生えた山の稜線に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible grassy mountain ridge surrounded by warm evening light",
          "text_en": "a clearly visible grassy mountain ridge surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える草の生えた山の稜線"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant grassy mountain ridge contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant grassy mountain ridge contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な草の生えた山の稜線"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "foreground grass and wild plants",
      "label_ja": "手前の草と野草",
      "category": "nature",
      "importance": "primary",
      "description": "Low grass, dry stalks, and small wild plants cover the ridge and catch thin golden highlights.",
      "bounding_box_conceptual": [
        55,
        0,
        45,
        100
      ],
      "color": [
        "dark green",
        "brown",
        "gold",
        "orange"
      ],
      "attributes": [
        "wild",
        "dry",
        "low",
        "wind-touched",
        "backlit"
      ],
      "action": [
        "growing",
        "catching light",
        "framing the couple"
      ],
      "synonyms_and_related_words": [
        "grass",
        "wild grass",
        "dry grass",
        "plants"
      ],
      "accepted_words": [
        "grass",
        "wild grass",
        "dry grass",
        "plants"
      ],
      "common_typos": [
        "grss",
        "wid grass"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "foreground grass and wild plants",
            "ja": "手前の草と野草"
          }
        ],
        "A2": [
          {
            "en": "wild grass",
            "ja": "手前の草と野草を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "plants",
            "ja": "手前の草と野草を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "stalks",
            "ja": "手前の草と野草を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "thin blades holding the last light",
          "ja": "最後の光を保つ細い草"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "grass, wild grass, dry grass, plants, wild plants",
          "text_en": "grass, wild grass, dry grass, plants, wild plants",
          "text_ja": "手前の草と野草に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible foreground grass and wild plants surrounded by warm evening light",
          "text_en": "a clearly visible foreground grass and wild plants surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える手前の草と野草"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant foreground grass and wild plants contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant foreground grass and wild plants contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な手前の草と野草"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "setting sun",
      "label_ja": "沈みかけた太陽",
      "category": "nature",
      "importance": "primary",
      "description": "A bright white-yellow sun hangs low near the center-right horizon above distant mountains.",
      "bounding_box_conceptual": [
        34,
        61,
        11,
        8
      ],
      "color": [
        "white",
        "yellow",
        "gold",
        "orange"
      ],
      "attributes": [
        "bright",
        "low",
        "round",
        "glowing",
        "powerful"
      ],
      "action": [
        "setting",
        "shining",
        "casting rays",
        "lighting the valley"
      ],
      "synonyms_and_related_words": [
        "sun",
        "setting sun",
        "sunset",
        "low sun"
      ],
      "accepted_words": [
        "sun",
        "setting sun",
        "sunset",
        "low sun"
      ],
      "common_typos": [
        "sunn",
        "seting sun"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "setting sun",
            "ja": "沈みかけた太陽"
          }
        ],
        "A2": [
          {
            "en": "setting sun",
            "ja": "沈みかけた太陽を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "low sun",
            "ja": "沈みかけた太陽を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "glowing sun",
            "ja": "沈みかけた太陽を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a white-gold circle resting above the mountains",
          "ja": "山の上に浮かぶ白金色の円"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sun, setting sun, sunset, low sun, evening sun",
          "text_en": "sun, setting sun, sunset, low sun, evening sun",
          "text_ja": "沈みかけた太陽に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible setting sun surrounded by warm evening light",
          "text_en": "a clearly visible setting sun surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える沈みかけた太陽"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant setting sun contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant setting sun contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な沈みかけた太陽"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "sun rays",
      "label_ja": "放射状に伸びる光線",
      "category": "nature",
      "importance": "secondary",
      "description": "Golden rays spread outward and upward from the sun through gaps in the clouds.",
      "bounding_box_conceptual": [
        18,
        54,
        34,
        24
      ],
      "color": [
        "gold",
        "yellow",
        "orange"
      ],
      "attributes": [
        "radiating",
        "soft",
        "dramatic",
        "warm",
        "visible"
      ],
      "action": [
        "spreading",
        "passing through clouds",
        "illuminating the sky"
      ],
      "synonyms_and_related_words": [
        "sun rays",
        "sunbeams",
        "light rays",
        "golden beams"
      ],
      "accepted_words": [
        "sun rays",
        "sunbeams",
        "light rays",
        "golden beams"
      ],
      "common_typos": [
        "su rays",
        "subeams"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sun rays",
            "ja": "放射状に伸びる光線"
          }
        ],
        "A2": [
          {
            "en": "sunbeams",
            "ja": "放射状に伸びる光線を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "golden beams",
            "ja": "放射状に伸びる光線を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "radiating light",
            "ja": "放射状に伸びる光線を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden lines reaching into the upper sky",
          "ja": "上空へ届く黄金色の線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sun rays, sunbeams, light rays, golden beams, rays of sunlight",
          "text_en": "sun rays, sunbeams, light rays, golden beams, rays of sunlight",
          "text_ja": "放射状に伸びる光線に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible sun rays surrounded by warm evening light",
          "text_en": "a clearly visible sun rays surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える放射状に伸びる光線"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant sun rays contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant sun rays contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な放射状に伸びる光線"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "red and purple clouds",
      "label_ja": "赤と紫の雲",
      "category": "nature",
      "importance": "primary",
      "description": "Large dramatic clouds in red, purple, pink, and orange fill most of the sky above the horizon.",
      "bounding_box_conceptual": [
        0,
        0,
        42,
        100
      ],
      "color": [
        "purple",
        "red",
        "pink",
        "orange",
        "gray"
      ],
      "attributes": [
        "dramatic",
        "layered",
        "colorful",
        "large",
        "illuminated"
      ],
      "action": [
        "floating",
        "catching sunset light",
        "framing the sun"
      ],
      "synonyms_and_related_words": [
        "clouds",
        "sunset clouds",
        "red clouds",
        "purple clouds"
      ],
      "accepted_words": [
        "clouds",
        "sunset clouds",
        "red clouds",
        "purple clouds"
      ],
      "common_typos": [
        "cluds",
        "suset clouds"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "red and purple clouds",
            "ja": "赤と紫の雲"
          }
        ],
        "A2": [
          {
            "en": "sunset clouds",
            "ja": "赤と紫の雲を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "purple clouds",
            "ja": "赤と紫の雲を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "colorful clouds",
            "ja": "赤と紫の雲を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "clouds painted in the colors of cooling fire",
          "ja": "冷えゆく炎の色で描かれた雲"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clouds, sunset clouds, red clouds, purple clouds, dramatic sky",
          "text_en": "clouds, sunset clouds, red clouds, purple clouds, dramatic sky",
          "text_ja": "赤と紫の雲に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible red and purple clouds surrounded by warm evening light",
          "text_en": "a clearly visible red and purple clouds surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える赤と紫の雲"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant red and purple clouds contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant red and purple clouds contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な赤と紫の雲"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "golden horizon",
      "label_ja": "金色の地平線",
      "category": "mood",
      "importance": "primary",
      "description": "A wide band of gold, orange, and pink light stretches along the horizon around the sun.",
      "bounding_box_conceptual": [
        25,
        0,
        24,
        100
      ],
      "color": [
        "gold",
        "orange",
        "pink",
        "yellow"
      ],
      "attributes": [
        "wide",
        "bright",
        "warm",
        "glowing",
        "horizontal"
      ],
      "action": [
        "separating sky and land",
        "spreading light",
        "framing the mountains"
      ],
      "synonyms_and_related_words": [
        "horizon",
        "golden horizon",
        "sunset horizon",
        "glowing horizon"
      ],
      "accepted_words": [
        "horizon",
        "golden horizon",
        "sunset horizon",
        "glowing horizon"
      ],
      "common_typos": [
        "hoizon",
        "goden horizon"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "golden horizon",
            "ja": "金色の地平線"
          }
        ],
        "A2": [
          {
            "en": "golden horizon",
            "ja": "金色の地平線を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "glowing horizon",
            "ja": "金色の地平線を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "bright skyline",
            "ja": "金色の地平線を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a ribbon of fire between earth and sky",
          "ja": "大地と空の間の炎の帯"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "horizon, golden horizon, sunset horizon, glowing horizon, orange horizon",
          "text_en": "horizon, golden horizon, sunset horizon, glowing horizon, orange horizon",
          "text_ja": "金色の地平線に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible golden horizon surrounded by warm evening light",
          "text_en": "a clearly visible golden horizon surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える金色の地平線"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant golden horizon contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant golden horizon contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な金色の地平線"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "vast valley",
      "label_ja": "広大な谷",
      "category": "setting",
      "importance": "primary",
      "description": "A wide valley spreads below the ridge and contains towns, fields, water, roads, and low hills.",
      "bounding_box_conceptual": [
        37,
        0,
        43,
        100
      ],
      "color": [
        "dark blue",
        "purple",
        "brown",
        "gold"
      ],
      "attributes": [
        "vast",
        "complex",
        "distant",
        "inhabited",
        "layered"
      ],
      "action": [
        "spreading below",
        "holding towns and water",
        "reflecting light"
      ],
      "synonyms_and_related_words": [
        "valley",
        "wide valley",
        "vast landscape",
        "lowland"
      ],
      "accepted_words": [
        "valley",
        "wide valley",
        "vast landscape",
        "lowland"
      ],
      "common_typos": [
        "valey",
        "wie valley"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "vast valley",
            "ja": "広大な谷"
          }
        ],
        "A2": [
          {
            "en": "wide valley",
            "ja": "広大な谷を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "lowland",
            "ja": "広大な谷を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "broad plain",
            "ja": "広大な谷を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a huge inhabited space unfolding beneath the couple",
          "ja": "二人の下に広がる巨大な生活空間"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "valley, wide valley, vast landscape, lowland, basin",
          "text_en": "valley, wide valley, vast landscape, lowland, basin",
          "text_ja": "広大な谷に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible vast valley surrounded by warm evening light",
          "text_en": "a clearly visible vast valley surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える広大な谷"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant vast valley contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant vast valley contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な広大な谷"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "town lights and roads",
      "label_ja": "町の明かりと道路",
      "category": "setting",
      "importance": "secondary",
      "description": "Scattered lights, roads, and settlement patterns shine across the valley floor.",
      "bounding_box_conceptual": [
        41,
        3,
        32,
        83
      ],
      "color": [
        "gold",
        "white",
        "orange",
        "gray"
      ],
      "attributes": [
        "scattered",
        "distant",
        "small",
        "glowing",
        "human-made"
      ],
      "action": [
        "twinkling",
        "marking roads",
        "revealing settlements"
      ],
      "synonyms_and_related_words": [
        "town lights",
        "city lights",
        "roads",
        "street lights"
      ],
      "accepted_words": [
        "town lights",
        "city lights",
        "roads",
        "street lights"
      ],
      "common_typos": [
        "ton lights",
        "ciy lights"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "town lights and roads",
            "ja": "町の明かりと道路"
          }
        ],
        "A2": [
          {
            "en": "city lights",
            "ja": "町の明かりと道路を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "street lights",
            "ja": "町の明かりと道路を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "distant lights",
            "ja": "町の明かりと道路を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "tiny signs of life scattered across the darkness",
          "ja": "暗闇に散らばる小さな生活の印"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "town lights, city lights, roads, street lights, settlement lights",
          "text_en": "town lights, city lights, roads, street lights, settlement lights",
          "text_ja": "町の明かりと道路に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible town lights and roads surrounded by warm evening light",
          "text_en": "a clearly visible town lights and roads surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える町の明かりと道路"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant town lights and roads contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant town lights and roads contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な町の明かりと道路"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "rivers and reflective water",
      "label_ja": "川と反射する水面",
      "category": "nature",
      "importance": "primary",
      "description": "Rivers, lakes, reservoirs, or flooded fields form bright winding and horizontal reflections across the valley.",
      "bounding_box_conceptual": [
        38,
        43,
        34,
        43
      ],
      "color": [
        "gold",
        "silver",
        "orange",
        "dark blue"
      ],
      "attributes": [
        "reflective",
        "winding",
        "distant",
        "shining",
        "irregular"
      ],
      "action": [
        "reflecting sunlight",
        "flowing through the valley",
        "catching the sunset"
      ],
      "synonyms_and_related_words": [
        "river",
        "rivers",
        "lake",
        "lakes"
      ],
      "accepted_words": [
        "river",
        "rivers",
        "lake",
        "lakes"
      ],
      "common_typos": [
        "rier",
        "riers"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "rivers and reflective water",
            "ja": "川と反射する水面"
          }
        ],
        "A2": [
          {
            "en": "rivers",
            "ja": "川と反射する水面を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "lakes",
            "ja": "川と反射する水面を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "reflective water",
            "ja": "川と反射する水面を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "golden water carrying the sunset into the valley",
          "ja": "夕日を谷へ運ぶ黄金色の水"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "river, rivers, lake, lakes, water",
          "text_en": "river, rivers, lake, lakes, water",
          "text_ja": "川と反射する水面に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible rivers and reflective water surrounded by warm evening light",
          "text_en": "a clearly visible rivers and reflective water surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える川と反射する水面"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant rivers and reflective water contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant rivers and reflective water contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な川と反射する水面"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "layered mountain ranges",
      "label_ja": "幾重にも重なる山並み",
      "category": "setting",
      "importance": "primary",
      "description": "Multiple mountain ridges surround the valley and become softer and bluer toward the horizon.",
      "bounding_box_conceptual": [
        30,
        0,
        38,
        100
      ],
      "color": [
        "dark purple",
        "blue",
        "gray",
        "black"
      ],
      "attributes": [
        "layered",
        "distant",
        "soft",
        "mountainous",
        "receding"
      ],
      "action": [
        "surrounding the valley",
        "creating depth",
        "framing the horizon"
      ],
      "synonyms_and_related_words": [
        "mountains",
        "mountain ranges",
        "ridges",
        "layered mountains"
      ],
      "accepted_words": [
        "mountains",
        "mountain ranges",
        "ridges",
        "layered mountains"
      ],
      "common_typos": [
        "montains",
        "montain ranges"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "layered mountain ranges",
            "ja": "幾重にも重なる山並み"
          }
        ],
        "A2": [
          {
            "en": "mountain ranges",
            "ja": "幾重にも重なる山並みを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "layered mountains",
            "ja": "幾重にも重なる山並みを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "mountain silhouettes",
            "ja": "幾重にも重なる山並みを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "dark waves of land repeating into the distance",
          "ja": "遠くへ繰り返す大地の暗い波"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "mountains, mountain ranges, ridges, layered mountains, distant mountains",
          "text_en": "mountains, mountain ranges, ridges, layered mountains, distant mountains",
          "text_ja": "幾重にも重なる山並みに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible layered mountain ranges surrounded by warm evening light",
          "text_en": "a clearly visible layered mountain ranges surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える幾重にも重なる山並み"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant layered mountain ranges contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant layered mountain ranges contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な幾重にも重なる山並み"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "distant city or town",
      "label_ja": "遠くの都市または町",
      "category": "setting",
      "importance": "secondary",
      "description": "A broad inhabited area with buildings, roads, and lights appears far below in the center of the valley.",
      "bounding_box_conceptual": [
        43,
        19,
        27,
        57
      ],
      "color": [
        "gray",
        "gold",
        "white",
        "purple"
      ],
      "attributes": [
        "distant",
        "dense",
        "inhabited",
        "small-scale",
        "glowing"
      ],
      "action": [
        "spreading across the valley",
        "producing lights",
        "connecting roads"
      ],
      "synonyms_and_related_words": [
        "city",
        "town",
        "settlement",
        "urban area"
      ],
      "accepted_words": [
        "city",
        "town",
        "settlement",
        "urban area"
      ],
      "common_typos": [
        "ciy",
        "ton"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "distant city or town",
            "ja": "遠くの都市または町"
          }
        ],
        "A2": [
          {
            "en": "town",
            "ja": "遠くの都市または町を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "urban area",
            "ja": "遠くの都市または町を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "valley town",
            "ja": "遠くの都市または町を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a distant city reduced to light and pattern",
          "ja": "光と模様へ縮小された遠い都市"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "city, town, settlement, urban area, distant city",
          "text_en": "city, town, settlement, urban area, distant city",
          "text_ja": "遠くの都市または町に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible distant city or town surrounded by warm evening light",
          "text_en": "a clearly visible distant city or town surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える遠くの都市または町"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant distant city or town contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant distant city or town contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な遠くの都市または町"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "dark foreground soil and rocks",
      "label_ja": "暗い前景の土と岩",
      "category": "setting",
      "importance": "secondary",
      "description": "Dark soil, uneven ground, and small rocks form the base of the ridge beneath the grass.",
      "bounding_box_conceptual": [
        66,
        0,
        34,
        100
      ],
      "color": [
        "black",
        "dark brown",
        "deep green"
      ],
      "attributes": [
        "dark",
        "uneven",
        "solid",
        "natural",
        "shadowed"
      ],
      "action": [
        "supporting the grass",
        "anchoring the foreground",
        "contrasting with the sky"
      ],
      "synonyms_and_related_words": [
        "soil",
        "ground",
        "rocks",
        "dark earth"
      ],
      "accepted_words": [
        "soil",
        "ground",
        "rocks",
        "dark earth"
      ],
      "common_typos": [
        "sol",
        "grund"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "dark foreground soil and rocks",
            "ja": "暗い前景の土と岩"
          }
        ],
        "A2": [
          {
            "en": "ground",
            "ja": "暗い前景の土と岩を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "dark earth",
            "ja": "暗い前景の土と岩を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "rocky soil",
            "ja": "暗い前景の土と岩を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "dark earth anchoring the bright sky",
          "ja": "明るい空を支える暗い大地"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "soil, ground, rocks, dark earth, mountain ground",
          "text_en": "soil, ground, rocks, dark earth, mountain ground",
          "text_ja": "暗い前景の土と岩に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible dark foreground soil and rocks surrounded by warm evening light",
          "text_en": "a clearly visible dark foreground soil and rocks surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える暗い前景の土と岩"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant dark foreground soil and rocks contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant dark foreground soil and rocks contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な暗い前景の土と岩"
        }
      ]
    },
    {
      "id": "element_017",
      "label": "evening sky",
      "label_ja": "夕暮れの空",
      "category": "mood",
      "importance": "primary",
      "description": "The evening sky fills most of the image with changing colors from deep purple to orange, pink, gold, and yellow.",
      "bounding_box_conceptual": [
        0,
        0,
        49,
        100
      ],
      "color": [
        "purple",
        "red",
        "pink",
        "orange",
        "gold",
        "yellow"
      ],
      "attributes": [
        "colorful",
        "dramatic",
        "vast",
        "glowing",
        "changing"
      ],
      "action": [
        "darkening",
        "holding clouds",
        "displaying sunset colors"
      ],
      "synonyms_and_related_words": [
        "sky",
        "evening sky",
        "sunset sky",
        "colorful sky"
      ],
      "accepted_words": [
        "sky",
        "evening sky",
        "sunset sky",
        "colorful sky"
      ],
      "common_typos": [
        "skyy",
        "evning sky"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "evening sky",
            "ja": "夕暮れの空"
          }
        ],
        "A2": [
          {
            "en": "evening sky",
            "ja": "夕暮れの空を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "colorful sky",
            "ja": "夕暮れの空を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "dramatic sky",
            "ja": "夕暮れの空を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a vast ceiling changing color before night",
          "ja": "夜の前に色を変える巨大な天井"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sky, evening sky, sunset sky, colorful sky, glowing sky",
          "text_en": "sky, evening sky, sunset sky, colorful sky, glowing sky",
          "text_ja": "夕暮れの空に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible evening sky surrounded by warm evening light",
          "text_en": "a clearly visible evening sky surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える夕暮れの空"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant evening sky contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant evening sky contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な夕暮れの空"
        }
      ]
    },
    {
      "id": "element_018",
      "label": "atmospheric haze",
      "label_ja": "遠景の霞",
      "category": "mood",
      "importance": "secondary",
      "description": "Soft haze reduces contrast in the distant valley and mountains, creating a strong sense of depth.",
      "bounding_box_conceptual": [
        31,
        0,
        38,
        100
      ],
      "color": [
        "blue",
        "purple",
        "gray",
        "pink"
      ],
      "attributes": [
        "soft",
        "distant",
        "transparent",
        "layered",
        "atmospheric"
      ],
      "action": [
        "softening details",
        "creating depth",
        "blending mountains"
      ],
      "synonyms_and_related_words": [
        "haze",
        "mist",
        "atmospheric haze",
        "distance haze"
      ],
      "accepted_words": [
        "haze",
        "mist",
        "atmospheric haze",
        "distance haze"
      ],
      "common_typos": [
        "hae",
        "mit"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "atmospheric haze",
            "ja": "遠景の霞"
          }
        ],
        "A2": [
          {
            "en": "mist",
            "ja": "遠景の霞を表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "distance haze",
            "ja": "遠景の霞を詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "evening mist",
            "ja": "遠景の霞を高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "soft air turning distance into color",
          "ja": "遠さを色へ変える柔らかな空気"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "haze, mist, atmospheric haze, distance haze, soft air",
          "text_en": "haze, mist, atmospheric haze, distance haze, soft air",
          "text_ja": "遠景の霞に関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a clearly visible atmospheric haze surrounded by warm evening light",
          "text_en": "a clearly visible atmospheric haze surrounded by warm evening light",
          "text_ja": "温かな夕方の光に囲まれてはっきり見える遠景の霞"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a visually significant atmospheric haze contributing to the panoramic sunset atmosphere",
          "text_en": "a visually significant atmospheric haze contributing to the panoramic sunset atmosphere",
          "text_ja": "広大な夕景の雰囲気に貢献する視覚的に重要な遠景の霞"
        }
      ]
    }
  ],
  "text_elements": [],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "sitting side by side on the ridge",
      "description_ja": "稜線に並んで座っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_005"
      ],
      "synonyms": [
        "sit side by side",
        "sit together",
        "sit on the ridge",
        "rest on the hill"
      ],
      "accepted_words": [
        "sit side by side",
        "sit together",
        "sit on the ridge",
        "rest on the hill"
      ],
      "common_typos": [
        "si side by side",
        "si together"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sitting side by side on the ridge",
            "ja": "稜線に並んで座っている"
          }
        ],
        "A2": [
          {
            "en": "sit together",
            "ja": "稜線に並んで座っているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "rest on the hill",
            "ja": "稜線に並んで座っているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "share a seat on the ground",
            "ja": "稜線に並んで座っているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "resting together at the edge of a vast landscape",
          "ja": "広大な景色の端で一緒に休む"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sit side by side, sit together, sit on the ridge, rest on the hill, sit close together",
          "text_en": "sit side by side, sit together, sit on the ridge, rest on the hill, sit close together",
          "text_ja": "稜線に並んで座っているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sitting side by side on the ridge while looking over the valley",
          "text_en": "sitting side by side on the ridge while looking over the valley",
          "text_ja": "谷を見渡しながら稜線に並んで座っている"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "watching the sunset",
      "description_ja": "夕日を眺めている",
      "involved_elements": [
        "element_001",
        "element_007",
        "element_010",
        "element_017"
      ],
      "synonyms": [
        "watch the sunset",
        "look at the sun",
        "admire the sunset",
        "observe the evening sky"
      ],
      "accepted_words": [
        "watch the sunset",
        "look at the sun",
        "admire the sunset",
        "observe the evening sky"
      ],
      "common_typos": [
        "wach the sunset",
        "lok at the sun"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "watching the sunset",
            "ja": "夕日を眺めている"
          }
        ],
        "A2": [
          {
            "en": "look at the sun",
            "ja": "夕日を眺めているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "observe the evening sky",
            "ja": "夕日を眺めているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "enjoy the sunset",
            "ja": "夕日を眺めているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "watching daylight slowly leave the valley",
          "ja": "日光がゆっくり谷を離れるのを見る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "watch the sunset, look at the sun, admire the sunset, observe the evening sky, watch the sun go down",
          "text_en": "watch the sunset, look at the sun, admire the sunset, observe the evening sky, watch the sun go down",
          "text_ja": "夕日を眺めているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "watching the sunset while looking over the valley",
          "text_en": "watching the sunset while looking over the valley",
          "text_ja": "谷を見渡しながら夕日を眺めている"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "looking over the valley",
      "description_ja": "谷を見渡している",
      "involved_elements": [
        "element_001",
        "element_011",
        "element_012",
        "element_013",
        "element_015"
      ],
      "synonyms": [
        "look over the valley",
        "look down at the landscape",
        "view the town below",
        "observe the wide valley"
      ],
      "accepted_words": [
        "look over the valley",
        "look down at the landscape",
        "view the town below",
        "observe the wide valley"
      ],
      "common_typos": [
        "lok over the valley",
        "lok down at the landscape"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "looking over the valley",
            "ja": "谷を見渡している"
          }
        ],
        "A2": [
          {
            "en": "look down at the landscape",
            "ja": "谷を見渡しているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "observe the wide valley",
            "ja": "谷を見渡しているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "admire the panorama",
            "ja": "谷を見渡しているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sending their gaze across roads, water, and mountains",
          "ja": "道路、水、山を越えて視線を送る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "look over the valley, look down at the landscape, view the town below, observe the wide valley, look across the plain",
          "text_en": "look over the valley, look down at the landscape, view the town below, observe the wide valley, look across the plain",
          "text_ja": "谷を見渡しているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "looking over the valley while looking over the valley",
          "text_en": "looking over the valley while looking over the valley",
          "text_ja": "谷を見渡しながら谷を見渡している"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "sharing a quiet moment",
      "description_ja": "静かな瞬間を共有している",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004"
      ],
      "synonyms": [
        "share a quiet moment",
        "spend time together",
        "enjoy silence together",
        "sit close to each other"
      ],
      "accepted_words": [
        "share a quiet moment",
        "spend time together",
        "enjoy silence together",
        "sit close to each other"
      ],
      "common_typos": [
        "share a queit moment",
        "spnd time together"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sharing a quiet moment",
            "ja": "静かな瞬間を共有している"
          }
        ],
        "A2": [
          {
            "en": "spend time together",
            "ja": "静かな瞬間を共有しているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "sit close to each other",
            "ja": "静かな瞬間を共有しているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "relax as a couple",
            "ja": "静かな瞬間を共有しているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "allowing silence to become a form of conversation",
          "ja": "沈黙を会話の形にする"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "share a quiet moment, spend time together, enjoy silence together, sit close to each other, share the view",
          "text_en": "share a quiet moment, spend time together, enjoy silence together, sit close to each other, share the view",
          "text_ja": "静かな瞬間を共有しているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sharing a quiet moment while looking over the valley",
          "text_en": "sharing a quiet moment while looking over the valley",
          "text_ja": "谷を見渡しながら静かな瞬間を共有している"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "relaxing after reaching the viewpoint",
      "description_ja": "展望地点に着いた後で休んでいる",
      "involved_elements": [
        "element_001",
        "element_005",
        "element_006",
        "element_016"
      ],
      "synonyms": [
        "relax on the hill",
        "rest at the viewpoint",
        "take a break",
        "sit after climbing"
      ],
      "accepted_words": [
        "relax on the hill",
        "rest at the viewpoint",
        "take a break",
        "sit after climbing"
      ],
      "common_typos": [
        "reax on the hill",
        "rest at the veiwpoint"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "relaxing after reaching the viewpoint",
            "ja": "展望地点に着いた後で休んでいる"
          }
        ],
        "A2": [
          {
            "en": "rest at the viewpoint",
            "ja": "展望地点に着いた後で休んでいるを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "sit after climbing",
            "ja": "展望地点に着いた後で休んでいるを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "recover after hiking",
            "ja": "展望地点に着いた後で休んでいるを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "resting where effort is rewarded by distance",
          "ja": "努力が遠景によって報われる場所で休む"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "relax on the hill, rest at the viewpoint, take a break, sit after climbing, pause on the ridge",
          "text_en": "relax on the hill, rest at the viewpoint, take a break, sit after climbing, pause on the ridge",
          "text_ja": "展望地点に着いた後で休んでいるに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "relaxing after reaching the viewpoint while looking over the valley",
          "text_en": "relaxing after reaching the viewpoint while looking over the valley",
          "text_ja": "谷を見渡しながら展望地点に着いた後で休んでいる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "sun setting behind the mountains",
      "description_ja": "太陽が山の向こうへ沈みかけている",
      "involved_elements": [
        "element_007",
        "element_008",
        "element_010",
        "element_014"
      ],
      "synonyms": [
        "the sun is setting",
        "the sun is going down",
        "the sun is lowering",
        "the sun approaches the horizon"
      ],
      "accepted_words": [
        "the sun is setting",
        "the sun is going down",
        "the sun is lowering",
        "the sun approaches the horizon"
      ],
      "common_typos": [
        "th sun is setting",
        "th sun is going down"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sun setting behind the mountains",
            "ja": "太陽が山の向こうへ沈みかけている"
          }
        ],
        "A2": [
          {
            "en": "the sun is going down",
            "ja": "太陽が山の向こうへ沈みかけているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "the sun approaches the horizon",
            "ja": "太陽が山の向こうへ沈みかけているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "sunset occurs",
            "ja": "太陽が山の向こうへ沈みかけているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the sun lowering toward the dark mountain line",
          "ja": "暗い山の線へ下がる太陽"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "the sun is setting, the sun is going down, the sun is lowering, the sun approaches the horizon, the sun sinks behind the mountains",
          "text_en": "the sun is setting, the sun is going down, the sun is lowering, the sun approaches the horizon, the sun sinks behind the mountains",
          "text_ja": "太陽が山の向こうへ沈みかけているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "sun setting behind the mountains while looking over the valley",
          "text_en": "sun setting behind the mountains while looking over the valley",
          "text_ja": "谷を見渡しながら太陽が山の向こうへ沈みかけている"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "clouds glowing in sunset colors",
      "description_ja": "雲が夕焼けの色に輝いている",
      "involved_elements": [
        "element_009",
        "element_010",
        "element_017"
      ],
      "synonyms": [
        "clouds glow",
        "clouds reflect the sunset",
        "clouds become red and purple",
        "cloud edges shine"
      ],
      "accepted_words": [
        "clouds glow",
        "clouds reflect the sunset",
        "clouds become red and purple",
        "cloud edges shine"
      ],
      "common_typos": [
        "cluds glow",
        "cluds reflect the sunset"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "clouds glowing in sunset colors",
            "ja": "雲が夕焼けの色に輝いている"
          }
        ],
        "A2": [
          {
            "en": "clouds reflect the sunset",
            "ja": "雲が夕焼けの色に輝いているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "cloud edges shine",
            "ja": "雲が夕焼けの色に輝いているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "the sky changes color",
            "ja": "雲が夕焼けの色に輝いているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "clouds holding fire along their edges",
          "ja": "縁に炎を保つ雲"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clouds glow, clouds reflect the sunset, clouds become red and purple, cloud edges shine, sunlight lights the clouds",
          "text_en": "clouds glow, clouds reflect the sunset, clouds become red and purple, cloud edges shine, sunlight lights the clouds",
          "text_ja": "雲が夕焼けの色に輝いているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "clouds glowing in sunset colors while looking over the valley",
          "text_en": "clouds glowing in sunset colors while looking over the valley",
          "text_ja": "谷を見渡しながら雲が夕焼けの色に輝いている"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "water reflecting the sunlight",
      "description_ja": "水面が日光を反射している",
      "involved_elements": [
        "element_011",
        "element_013"
      ],
      "synonyms": [
        "water reflects sunlight",
        "rivers shine",
        "lakes glow",
        "sunlight sparkles on water"
      ],
      "accepted_words": [
        "water reflects sunlight",
        "rivers shine",
        "lakes glow",
        "sunlight sparkles on water"
      ],
      "common_typos": [
        "waer reflects sunlight",
        "riers shine"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "water reflecting the sunlight",
            "ja": "水面が日光を反射している"
          }
        ],
        "A2": [
          {
            "en": "rivers shine",
            "ja": "水面が日光を反射しているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "sunlight sparkles on water",
            "ja": "水面が日光を反射しているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "reflections appear on lakes",
            "ja": "水面が日光を反射しているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the sunset continuing across the valley as water",
          "ja": "水として谷を横切り続ける夕日"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "water reflects sunlight, rivers shine, lakes glow, sunlight sparkles on water, water catches the sunset",
          "text_en": "water reflects sunlight, rivers shine, lakes glow, sunlight sparkles on water, water catches the sunset",
          "text_ja": "水面が日光を反射しているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "water reflecting the sunlight while looking over the valley",
          "text_en": "water reflecting the sunlight while looking over the valley",
          "text_ja": "谷を見渡しながら水面が日光を反射している"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "evening light illuminating the grass",
      "description_ja": "夕方の光が草を照らしている",
      "involved_elements": [
        "element_005",
        "element_006",
        "element_007"
      ],
      "synonyms": [
        "sunlight lights the grass",
        "grass catches golden light",
        "evening light outlines the plants",
        "sunset illuminates the ridge"
      ],
      "accepted_words": [
        "sunlight lights the grass",
        "grass catches golden light",
        "evening light outlines the plants",
        "sunset illuminates the ridge"
      ],
      "common_typos": [
        "sulight lights the grass",
        "grss catches golden light"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "evening light illuminating the grass",
            "ja": "夕方の光が草を照らしている"
          }
        ],
        "A2": [
          {
            "en": "grass catches golden light",
            "ja": "夕方の光が草を照らしているを表す日常的な表現"
          }
        ],
        "B1": [
          {
            "en": "sunset illuminates the ridge",
            "ja": "夕方の光が草を照らしているを詳しく説明する表現"
          }
        ],
        "B2": [
          {
            "en": "plants are backlit",
            "ja": "夕方の光が草を照らしているを高度に描写する表現"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "thin grass edges holding pieces of the sunset",
          "ja": "夕日の断片を保つ細い草の縁"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sunlight lights the grass, grass catches golden light, evening light outlines the plants, sunset illuminates the ridge, grass glows",
          "text_en": "sunlight lights the grass, grass catches golden light, evening light outlines the plants, sunset illuminates the ridge, grass glows",
          "text_ja": "夕方の光が草を照らしているに関する基本語彙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "evening light illuminating the grass while looking over the valley",
          "text_en": "evening light illuminating the grass while looking over the valley",
          "text_ja": "谷を見渡しながら夕方の光が草を照らしている"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an ordinary shared action transformed by distance, light, and silence",
          "text_en": "an ordinary shared action transformed by distance, light, and silence",
          "text_ja": "距離、光、静けさによって特別になる共有動作"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "young man",
      "relationship": "to the left of",
      "object": "young woman",
      "example_beginner": "The man is to the left of the woman.",
      "example_intermediate": "The young man sits immediately to the left of the young woman."
    },
    {
      "subject": "young woman",
      "relationship": "to the right of",
      "object": "young man",
      "example_beginner": "The woman is to the right of the man.",
      "example_intermediate": "The woman sits close to the man on the right side of the pair."
    },
    {
      "subject": "couple",
      "relationship": "on",
      "object": "grassy ridge",
      "example_beginner": "The couple is on the hill.",
      "example_intermediate": "The couple sits on a grassy mountain ridge above the valley."
    },
    {
      "subject": "couple",
      "relationship": "in front of",
      "object": "vast valley",
      "example_beginner": "The couple is in front of the valley.",
      "example_intermediate": "The dark silhouettes of the couple occupy the foreground before the vast valley."
    },
    {
      "subject": "setting sun",
      "relationship": "above",
      "object": "distant mountains",
      "example_beginner": "The sun is above the mountains.",
      "example_intermediate": "The setting sun hangs just above the distant mountain line."
    },
    {
      "subject": "golden horizon",
      "relationship": "behind",
      "object": "sun",
      "example_beginner": "The horizon is behind the sun.",
      "example_intermediate": "A wide golden horizon extends behind and around the low sun."
    },
    {
      "subject": "red and purple clouds",
      "relationship": "above",
      "object": "golden horizon",
      "example_beginner": "The clouds are above the horizon.",
      "example_intermediate": "Large red and purple cloud layers spread above the glowing horizon."
    },
    {
      "subject": "sun rays",
      "relationship": "around",
      "object": "setting sun",
      "example_beginner": "The rays are around the sun.",
      "example_intermediate": "Golden rays spread outward around the setting sun."
    },
    {
      "subject": "vast valley",
      "relationship": "below",
      "object": "couple",
      "example_beginner": "The valley is below the couple.",
      "example_intermediate": "The inhabited valley stretches far below the seated couple."
    },
    {
      "subject": "town lights",
      "relationship": "across",
      "object": "valley",
      "example_beginner": "The lights are across the valley.",
      "example_intermediate": "Small town lights and roads are scattered across the valley floor."
    },
    {
      "subject": "reflective water",
      "relationship": "within",
      "object": "valley",
      "example_beginner": "The water is in the valley.",
      "example_intermediate": "Rivers, lakes, and reflective surfaces appear within the broad valley."
    },
    {
      "subject": "mountain ranges",
      "relationship": "around",
      "object": "valley",
      "example_beginner": "The mountains are around the valley.",
      "example_intermediate": "Layered mountain ranges surround the valley on several sides."
    },
    {
      "subject": "foreground grass",
      "relationship": "around",
      "object": "couple",
      "example_beginner": "The grass is around the couple.",
      "example_intermediate": "Backlit grass and wild plants grow around the seated figures."
    },
    {
      "subject": "dark soil and rocks",
      "relationship": "beneath",
      "object": "foreground grass",
      "example_beginner": "The soil is beneath the grass.",
      "example_intermediate": "Dark soil and small rocks lie beneath the foreground vegetation."
    },
    {
      "subject": "distant city",
      "relationship": "between",
      "object": "mountain ranges",
      "example_beginner": "The city is between the mountains.",
      "example_intermediate": "The distant city or town spreads through the lowland between mountain ridges."
    },
    {
      "subject": "atmospheric haze",
      "relationship": "over",
      "object": "distant mountains",
      "example_beginner": "Haze is over the mountains.",
      "example_intermediate": "Soft atmospheric haze covers the distant mountain layers and reduces their contrast."
    }
  ],
  "adjective_library": {
    "couple": [
      "young",
      "close",
      "quiet",
      "relaxed",
      "silhouetted",
      "romantic",
      "thoughtful",
      "seated",
      "peaceful",
      "connected"
    ],
    "sunset": [
      "golden",
      "orange",
      "red",
      "pink",
      "purple",
      "glowing",
      "dramatic",
      "warm",
      "radiant",
      "low"
    ],
    "landscape": [
      "vast",
      "panoramic",
      "layered",
      "distant",
      "mountainous",
      "inhabited",
      "reflective",
      "expansive",
      "majestic",
      "complex"
    ],
    "foreground": [
      "dark",
      "grassy",
      "rocky",
      "backlit",
      "uneven",
      "natural",
      "shadowed",
      "gold-edged",
      "quiet"
    ],
    "sky": [
      "dramatic",
      "colorful",
      "cloud-filled",
      "glowing",
      "wide",
      "warm",
      "purple",
      "red",
      "golden",
      "cinematic"
    ],
    "mood": [
      "romantic",
      "peaceful",
      "hopeful",
      "reflective",
      "intimate",
      "majestic",
      "serene",
      "inspiring",
      "emotional",
      "dreamlike"
    ]
  },
  "preposition_library": [
    {
      "preposition": "on",
      "meaning_ja": "〜の上に・〜で",
      "example": "The couple is sitting on a grassy ridge."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The woman is sitting beside the man."
    },
    {
      "preposition": "next to",
      "meaning_ja": "〜のすぐ隣に",
      "example": "The two people are sitting next to each other."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "The sun is above the distant mountains."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "The valley is below the couple."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The glowing horizon is behind the mountain ridges."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The couple is in front of the valley view."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って・〜全体に",
      "example": "Town lights are scattered across the valley."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通って",
      "example": "Rivers move through the lowland."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周囲に",
      "example": "Grass grows around the couple."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The town lies between several mountain ridges."
    },
    {
      "preposition": "toward",
      "meaning_ja": "〜の方向へ",
      "example": "They are looking toward the sunset."
    },
    {
      "preposition": "over",
      "meaning_ja": "〜を見渡して・〜の上に",
      "example": "They are looking over the valley."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The sun is near the horizon."
    },
    {
      "preposition": "along",
      "meaning_ja": "〜に沿って",
      "example": "Golden light spreads along the horizon."
    },
    {
      "preposition": "within",
      "meaning_ja": "〜の内部に",
      "example": "Reflective water appears within the valley."
    },
    {
      "preposition": "beneath",
      "meaning_ja": "〜の下に",
      "example": "Dark soil lies beneath the grass."
    },
    {
      "preposition": "against",
      "meaning_ja": "〜を背景に",
      "example": "The couple appears dark against the bright sky."
    },
    {
      "preposition": "beyond",
      "meaning_ja": "〜の向こうに",
      "example": "More mountains rise beyond the valley."
    },
    {
      "preposition": "from",
      "meaning_ja": "〜から",
      "example": "Warm light comes from the setting sun."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "二人が今している動作を表す。",
      "examples": [
        "A couple is sitting on a hill.",
        "Two people are watching the sunset.",
        "They are looking over the valley."
      ],
      "hints": [
        "a coupleは単数扱いでis、two peopleやtheyにはareを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "太陽、雲、山、町、水面などの存在を説明する。",
      "examples": [
        "There is a bright sun near the horizon.",
        "There are many clouds in the sky.",
        "There are lights across the valley."
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
      "purpose_ja": "空、景色、雰囲気の状態を表す。",
      "examples": [
        "The sky is colorful.",
        "The valley is vast.",
        "The scene is peaceful."
      ],
      "hints": [
        "colorful, vast, peacefulなどを使えます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "二人や景色の位置関係を説明する。",
      "examples": [
        "The couple is on the ridge.",
        "The sun is above the mountains.",
        "The valley is below them."
      ],
      "hints": [
        "on, above, below, besideなどを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + have / has + noun",
      "label_ja": "have・hasによる特徴の説明",
      "level": "beginner",
      "purpose_ja": "人物の髪や景色の構成要素を表す。",
      "examples": [
        "The woman has long dark hair.",
        "The sky has many colorful clouds.",
        "The valley has rivers and roads."
      ],
      "hints": [
        "三人称単数にはhas、複数主語にはhaveを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "while + clause",
      "label_ja": "whileによる同時進行",
      "level": "intermediate",
      "purpose_ja": "座る、見る、夕日が沈むなどの同時進行を表す。",
      "examples": [
        "They watch the sunset while they sit on the ridge.",
        "The sky changes color while the sun goes down.",
        "Water shines while evening light spreads across the valley."
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
      "purpose_ja": "人物や景色に追加情報を加える。",
      "examples": [
        "The couple who is sitting on the ridge is watching the sunset.",
        "The valley, which contains rivers and towns, stretches far below.",
        "The clouds that fill the sky are glowing red and purple."
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
      "purpose_ja": "二人の関係や雰囲気を慎重に表す。",
      "examples": [
        "The couple looks peaceful.",
        "They seem to be enjoying the view.",
        "The scene appears romantic and hopeful."
      ],
      "hints": [
        "断定しすぎない描写に使えます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "may / might + base verb",
      "label_ja": "may・mightによる推量",
      "level": "intermediate",
      "purpose_ja": "二人の関係、登山、目的などを推測する。",
      "examples": [
        "They may have climbed the hill together.",
        "They might be a couple.",
        "They may be resting before going home."
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
      "purpose_ja": "丘に来た理由や景色が明るい理由を説明する。",
      "examples": [
        "They came to the ridge because they wanted to see the sunset.",
        "They sit close so that they can share the view.",
        "The water shines because it reflects the sunlight."
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
      "purpose_ja": "暗い前景と明るい空などの対比を表す。",
      "examples": [
        "Although the foreground is dark, the sky is extremely bright.",
        "Even though the couple is small, they are the emotional center of the image.",
        "Although the sun is setting, the scene feels hopeful."
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
        "Sitting side by side, the couple watches the sunset.",
        "Looking over the valley, they share a quiet moment.",
        "Glowing near the horizon, the sun lights the entire landscape."
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
      "purpose_ja": "光に照らされた状態や景色に囲まれた状態を表す。",
      "examples": [
        "Surrounded by grass and mountains, the couple sits quietly.",
        "Illuminated by sunset, the clouds glow red and purple.",
        "Seen from above, the city appears small and distant."
      ],
      "hints": [
        "Surrounded, Illuminated, Seenなどから始めます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "景色を共有することで生まれる効果を説明する。",
      "examples": [
        "By sitting together, the two people create a feeling of closeness.",
        "By facing the same horizon, they appear emotionally connected.",
        "By reflecting the sunlight, the water adds brightness to the valley."
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
      "purpose_ja": "景色の複数の役割や雰囲気を強調する。",
      "examples": [
        "The sunset creates not only color but also emotional warmth.",
        "The couple represents not only romance but also companionship.",
        "The valley contains not only natural features but also human settlements."
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
      "purpose_ja": "二人の関係や行動を画像から推測する。",
      "examples": [
        "It looks as though the couple has reached the viewpoint after a climb.",
        "It seems that they are sharing an important moment.",
        "It looks as though the sun will disappear behind the mountains soon."
      ],
      "hints": [
        "断定できない場面の推測に使います。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "The fact that + clause + suggests that + clause",
      "label_ja": "The fact thatを使った証拠からの推論",
      "level": "advanced",
      "purpose_ja": "画像内の証拠から論理的に推測する。",
      "examples": [
        "The fact that they are sitting close suggests that they have a close relationship.",
        "The fact that the sun is near the horizon suggests that evening is ending.",
        "The fact that the foreground is dark suggests that the light is coming from behind the couple."
      ],
      "hints": [
        "見える事実と推測を一文で論理的につなげられます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are two young people."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are on ______.",
        "example": "They are on a grassy hill."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are watching the sunset."
      },
      {
        "step": 4,
        "question_ja": "どこを見ていますか？",
        "template": "They are looking ______.",
        "example": "They are looking over the valley."
      },
      {
        "step": 5,
        "question_ja": "空はどんな様子ですか？",
        "template": "The sky is ______.",
        "example": "The sky is orange, red, purple, and gold."
      },
      {
        "step": 6,
        "question_ja": "谷には何がありますか？",
        "template": "There is / are ______ in the valley.",
        "example": "There are towns, roads, rivers, and lakes in the valley."
      },
      {
        "step": 7,
        "question_ja": "雰囲気はどうですか？",
        "template": "The scene feels ______.",
        "example": "The scene feels peaceful, romantic, and hopeful."
      }
    ],
    "intermediate": [
      {
        "template": "A young couple is ______ing on ______.",
        "example": "A young couple is sitting on a grassy mountain ridge."
      },
      {
        "template": "They are watching ______ while ______.",
        "example": "They are watching the sunset while sitting close together."
      },
      {
        "template": "Below them, ______.",
        "example": "Below them, a vast valley contains towns, roads, rivers, and lakes."
      },
      {
        "template": "Above the horizon, ______.",
        "example": "Above the horizon, red and purple clouds are glowing in the evening light."
      },
      {
        "template": "Because the sun is low, ______.",
        "example": "Because the sun is low, long golden reflections appear across the valley."
      },
      {
        "template": "Although the foreground is dark, ______.",
        "example": "Although the foreground is dark, the sky is bright and colorful."
      },
      {
        "template": "It looks as though ______.",
        "example": "It looks as though the couple is sharing a meaningful moment."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Sitting side by side on the ridge, the couple watches the last light spread across the valley."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Backlit by the setting sun, the two people appear as dark silhouettes."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The couple, who is seen from behind, appears completely absorbed in the view."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The valley, which contains roads, towns, and reflective water, extends far into the distance."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By facing the same horizon, the two figures create a strong impression of emotional closeness."
      },
      {
        "template": "Although / even though.",
        "example": "Although the couple occupies only a small part of the image, they remain its emotional center."
      },
      {
        "template": "The fact that ... suggests that ...",
        "example": "The fact that they are sitting close together suggests that they trust and care for each other."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "A man and a woman are sitting on a hill.",
      "They are watching the sunset.",
      "They are sitting close together.",
      "The sun is near the horizon.",
      "The sky is orange, red, purple, and gold.",
      "There are many clouds in the sky.",
      "A large valley is below them.",
      "There are towns and roads in the valley.",
      "There are rivers and lakes below.",
      "Many mountains are in the distance.",
      "The scene is peaceful and romantic."
    ],
    "intermediate": [
      "A young couple is sitting side by side on a grassy mountain ridge.",
      "They are seen from behind as they watch the sunset over a vast valley.",
      "The man has short dark hair, and the woman has long dark hair.",
      "Their shoulders are close, which creates a quiet feeling of intimacy.",
      "A bright sun hangs low near the horizon above distant mountain ranges.",
      "Red, purple, orange, and pink clouds fill the evening sky.",
      "Below the couple, towns, roads, rivers, lakes, and small lights spread across the valley.",
      "The water reflects the sunlight and appears golden.",
      "Layered mountain ridges become softer and bluer in the distance.",
      "Dark grass and soil in the foreground contrast with the brilliant sky."
    ],
    "advanced": [
      "Sitting close together on a grassy ridge, a young couple watches the sun descend toward a distant mountain range.",
      "Seen from behind, the man and woman appear as dark silhouettes against a sky filled with red, purple, orange, and golden light.",
      "Their quiet posture and shared direction of gaze suggest companionship, trust, and emotional closeness.",
      "The man, who has short dark hair, sits on the left, while the long-haired woman occupies the right side.",
      "Below them, a vast valley contains towns, roads, fields, rivers, lakes, and scattered lights.",
      "Reflective water carries fragments of the sunset across the darkening landscape.",
      "Large cloud layers glow along their edges, and rays of light spread outward from the low sun.",
      "The repeated mountain ridges gradually fade into blue-purple haze, creating powerful atmospheric depth.",
      "Although the couple is physically small compared with the landscape, the two figures remain the emotional center of the composition.",
      "The scene transforms the end of an ordinary day into a majestic meditation on love, time, distance, and hope."
    ]
  },
  "full_description_support": {
    "beginner_model": "A young man and woman are sitting on a grassy hill. They are sitting side by side and looking at the sunset. The man is on the left, and the woman is on the right. The woman has long dark hair, and the man has short dark hair. The sun is near the horizon. The sky is orange, red, pink, purple, and gold. There are many clouds in the sky. A large valley is below the couple. There are towns, roads, rivers, lakes, and small lights in the valley. Many mountains are in the distance. The grass and the couple are dark because the bright sun is behind them. The scene is peaceful, beautiful, and romantic.",
    "intermediate_model": "A young couple is sitting close together on a grassy mountain ridge at sunset. The man sits on the left with short dark hair and a dark jacket, while the woman sits on the right with long dark hair and a warm brown outer layer. They are seen from behind as they look over a vast valley toward the low sun. Their bodies and shoulders are close, which creates a quiet and intimate atmosphere. The foreground contains dark grass, dry plants, soil, and small rocks whose edges catch golden light. Near the center-right horizon, the sun shines above distant mountains. Red, purple, orange, and pink clouds fill the sky, and light rays spread through gaps between them. Far below, the valley contains towns, roads, rivers, lakes, and reflective surfaces. Some roads and settlements appear as small golden points and lines. Mountain ridges surround the valley and become softer and bluer in the distance. The contrast between the dark silhouettes and the bright sky makes the scene feel dramatic, romantic, peaceful, and hopeful.",
    "advanced_model": "At the end of the day, a young couple sits side by side on a grassy mountain ridge and looks across an immense valley toward the setting sun. Viewed from behind, the man and woman appear as dark silhouettes, their faces hidden but their closeness clearly communicated through posture and distance. The man, positioned on the left, has short dark hair and wears a dark outer layer, while the long-haired woman on the right wears a warmer brown or orange-toned garment. Low grass, dry stalks, small plants, rocks, and dark soil form a textured foreground, with thin golden highlights tracing the edges of the vegetation. Near the center-right horizon, a brilliant white-gold sun rests above distant mountain ridges and sends rays through a dramatic sky. Large cloud layers in red, purple, pink, orange, and gray occupy most of the upper image, their edges glowing where they catch the evening light. Below the ridge, a broad inhabited valley unfolds in complex layers of low hills, towns, roads, fields, rivers, lakes, reservoirs, and other reflective surfaces. Water carries the sunlight into the valley as long golden fragments, while urban areas and road networks appear as scattered points and lines. Repeated mountain ranges gradually lose contrast and shift toward blue-purple tones, creating a deep atmospheric perspective. Although the human figures occupy only a small portion of the composition, they remain its emotional center because they give the panoramic landscape a personal and relational meaning. The image therefore represents not only a sunset over a valley but also a shared pause between two people who seem to be turning the final light of the day into a lasting memory."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "A man and a woman are sitting on a hill. They are watching the sunset.",
        "ja": "男性と女性が丘に座っています。夕日を見ています。",
        "focus": "複数主語の現在進行形で人物・場所・動作を表す。"
      },
      {
        "en": "The sky is orange and purple, and the sun is near the mountains.",
        "ja": "空はオレンジ色と紫色で、太陽は山の近くにあります。",
        "focus": "be動詞とandを使って色と位置を説明する。"
      },
      {
        "en": "There is a large valley below them, and there are many mountains in the distance.",
        "ja": "二人の下には大きな谷があり、遠くには多くの山があります。",
        "focus": "There isとThere areを使い分ける。"
      }
    ],
    "A2": [
      {
        "en": "A young couple is sitting close together while watching the sun set over a wide valley.",
        "ja": "若い二人が広い谷に沈む夕日を見ながら近くに座っています。",
        "focus": "whileで二つの同時動作をつなぐ。"
      },
      {
        "en": "The dark silhouettes stand out because the sky behind them is bright and colorful.",
        "ja": "背後の空が明るく色鮮やかなため、暗いシルエットが目立っています。",
        "focus": "becauseを使って理由を説明する。"
      },
      {
        "en": "Although the sun is going down, the scene feels warm, peaceful, and hopeful.",
        "ja": "太陽は沈みかけていますが、場面は温かく穏やかで希望に満ちて感じられます。",
        "focus": "Althoughで対比を作る。"
      }
    ],
    "B1": [
      {
        "en": "The couple, who is seen from behind, appears to be sharing a quiet and meaningful moment.",
        "ja": "後ろから見える二人は、静かで意味のある瞬間を共有しているようです。",
        "focus": "非制限用法whoとappear toを使う。"
      },
      {
        "en": "The valley below contains towns, roads, rivers, and lakes that reflect the evening sunlight.",
        "ja": "眼下の谷には、夕方の日差しを反射する町、道路、川、湖があります。",
        "focus": "thatを使った関係代名詞節で名詞を詳しくする。"
      },
      {
        "en": "The repeated mountain ridges become lighter and bluer as they extend into the distance.",
        "ja": "繰り返す山の稜線は、遠くへ伸びるにつれて明るく青くなります。",
        "focus": "asを使って変化の進行を表す。"
      }
    ],
    "B2": [
      {
        "en": "Seated side by side on a backlit ridge, the couple becomes a dark human counterpoint to the enormous radiance of the sky.",
        "ja": "逆光の稜線に並んで座り、二人は巨大な空の輝きに対する暗い人間的な対比となっています。",
        "focus": "過去分詞構文と抽象的な対比表現を使う。"
      },
      {
        "en": "The valley, which is threaded with roads, rivers, settlements, and reflective water, appears to hold countless unseen lives beneath the quiet observers.",
        "ja": "道路、川、集落、反射する水面が走る谷は、静かな観察者の下に無数の見えない生活を抱えているように見えます。",
        "focus": "非制限用法whichと比喩的な動詞threadを使う。"
      },
      {
        "en": "Although the image is dominated by natural scale and atmospheric light, the closeness of the two silhouettes gives the landscape an intimate emotional center.",
        "ja": "画像は自然の大きさと大気の光に支配されていますが、二つのシルエットの近さが景観に親密な感情的中心を与えています。",
        "focus": "Althoughと抽象名詞を組み合わせて高度に分析する。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene019Data = scene019Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene019Data;
}
