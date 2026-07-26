"use strict";

const scene016Data = {
  "id": "scene_016",
  "image_id": "016.webp",
  "overall_description_ja": "明るい昼間の駅のホームで、制服姿の2人の女子高校生が互いに笑顔を向け、手を高く上げて挨拶している。左側の生徒は停車中の銀色と青色の電車の開いたドアのすぐそばに立ち、紺色のブレザー、白いシャツ、青系のリボン、チェック柄のスカートを着ている。彼女は左肩から大きな紺色のボストンバッグを掛け、右手で持ち手を握りながら、左手を上げて友人へ手を振っている。右側の生徒も紺色のブレザー、白いシャツ、赤いリボン、チェック柄のスカート、紺色のハイソックスを身につけ、左肩に黒いスクールバッグを掛けている。彼女は友人を見ながら右手を頭より高く上げ、明るい表情で大きく手を振っている。2人の間には黄色い点字ブロックと灰色のホーム床が伸び、奥では通勤客や乗客が電車沿いを歩いている。右奥には男性と女性の大人2人が立ち、こちらも笑顔で手を振っている。ホーム上部には金属製の屋根、柱、照明、電線設備があり、右上には大きな丸いアナログ時計が設置されている。背景には緑の木々、青空、雲、都市の建物が見え、駅全体には明るく開放的な昼間の雰囲気がある。この場面は、再会の挨拶または出発前後の別れの挨拶のどちらとも解釈でき、親しさ、期待、移動の始まりや終わりを感じさせる。",
  "overall_description_en": "On a bright daytime railway platform, two high school girls in uniforms smile at one another and wave with raised hands. The student on the left stands immediately beside the open door of a stopped silver-and-blue commuter train. She wears a navy blazer, a white shirt, a blue ribbon, and a dark plaid skirt. A large navy duffel bag hangs from her shoulder, and she grips one of its straps while waving with her free hand. The student on the right stands farther along the platform and wears a navy blazer, a white shirt, a dark red ribbon, a plaid skirt, and navy knee-high socks. A black school bag hangs from her shoulder, and she raises her right hand above her head while looking directly at her friend with a cheerful expression. Yellow tactile paving and gray platform tiles extend between the two students, while commuters walk beside the train in the distance. Two adults in the right background also smile and wave. A metal station roof, supporting columns, overhead electrical equipment, fluorescent lights, and a large round analog clock frame the platform. Green trees, blue sky, white clouds, and city buildings appear beyond the station, creating an open and energetic daytime atmosphere. The scene can be interpreted as either a happy greeting or a warm farewell connected with a train journey.",
  "overall_mood": [
    "cheerful",
    "bright",
    "friendly",
    "energetic",
    "hopeful",
    "welcoming",
    "emotional",
    "connected",
    "lively",
    "open",
    "sunny",
    "social"
  ],
  "mission_guides": {
    "gist": "2人の女子高校生が、どこで、誰に向かって、どのような動作をしているかを書こう。",
    "setting": "停車中の電車、開いたドア、ホーム、点字ブロック、駅時計、背景の乗客を説明しよう。",
    "details": "制服、リボン、チェック柄スカート、スクールバッグ、表情、上げた手、背景の大人を加えよう。",
    "complete": "再会または別れの挨拶、昼間の明るさ、移動への期待を含めた情景描写に仕上げよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "two high school girls waving to each other",
        "ja": "互いに手を振る2人の女子高校生"
      },
      {
        "en": "one student standing beside an open train door",
        "ja": "開いた電車のドアのそばに立つ生徒"
      },
      {
        "en": "the other student raising her hand above her head",
        "ja": "頭より高く手を上げるもう1人の生徒"
      },
      {
        "en": "greeting or saying goodbye with cheerful smiles",
        "ja": "明るい笑顔で挨拶または別れを伝えている"
      }
    ],
    "setting": [
      {
        "en": "on a railway platform beside a stopped train",
        "ja": "停車中の電車のそばの駅ホームで"
      },
      {
        "en": "next to yellow tactile paving and gray platform tiles",
        "ja": "黄色い点字ブロックと灰色の床のそばで"
      },
      {
        "en": "under a metal station roof with a large analog clock",
        "ja": "大きなアナログ時計がある金属製の駅屋根の下で"
      },
      {
        "en": "with commuters, trees, buildings, and blue sky in the background",
        "ja": "背景に通勤客、木々、建物、青空がある"
      }
    ],
    "mood": [
      {
        "en": "a bright and emotional station scene",
        "ja": "明るく感情の伝わる駅の場面"
      },
      {
        "en": "friendly smiles and energetic waving",
        "ja": "親しみのある笑顔と元気な手振り"
      },
      {
        "en": "a sense of movement, reunion, or departure",
        "ja": "移動、再会、出発を感じさせる"
      },
      {
        "en": "sunlight creating an open and hopeful atmosphere",
        "ja": "開放的で希望のある雰囲気を作る日差し"
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
        "two girls",
        "two students",
        "two high school girls",
        "two schoolgirls",
        "the students",
        "the friends",
        "they"
      ],
      "hint_msg": "two high school girlsやtwo studentsなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は2人が何をしているかを書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "are waving",
        "are smiling",
        "are greeting",
        "are saying goodbye",
        "are looking",
        "are standing",
        "are carrying",
        "are meeting"
      ],
      "hint_msg": "are wavingやare smilingなど、現在進行形で動作を書きましょう。",
      "success_msg": "Great! 次は誰に向かって、どこで行っているかを加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "相手・場所",
      "targets": [
        "to each other",
        "at a train station",
        "on a platform",
        "beside a train",
        "near an open train door",
        "at the station",
        "on the railway platform",
        "before a train journey"
      ],
      "hint_msg": "to each other / on a platform / beside a trainなどを加えましょう。",
      "success_msg": "Excellent! 制服、荷物、時計、点字ブロック、背景の人々、明るい雰囲気も加えましょう。"
    }
  ],
  "suggested_topics": [
    "two students waving at a station",
    "a cheerful greeting on a platform",
    "a warm farewell beside a train",
    "schoolgirls in matching uniforms",
    "standing beside an open train door",
    "carrying school and travel bags",
    "a commuter train at the platform"
  ],
  "scene_structure": {
    "foreground": [
      "student beside the train door",
      "large navy duffel bag",
      "student waving on the platform",
      "black school bag",
      "yellow tactile paving"
    ],
    "midground": [
      "silver-and-blue commuter train",
      "open train door",
      "train windows",
      "walking commuters",
      "station columns"
    ],
    "background": [
      "two waving adults",
      "additional passengers",
      "railway tracks",
      "overhead electrical lines",
      "large analog clock",
      "green trees",
      "city buildings"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "two high school girls",
      "label_ja": "2人の女子高校生",
      "category": "people",
      "importance": "primary",
      "description": "Two high school girls in navy uniforms stand several meters apart on a railway platform, smile at one another, and wave with raised hands.",
      "bounding_box_conceptual": [
        11,
        6,
        88,
        79
      ],
      "color": [
        "navy",
        "white",
        "dark red",
        "blue",
        "gray"
      ],
      "attributes": [
        "young",
        "cheerful",
        "uniformed",
        "friendly",
        "energetic",
        "connected"
      ],
      "action": [
        "waving",
        "smiling",
        "looking at each other",
        "standing on the platform"
      ],
      "synonyms_and_related_words": [
        "two girls",
        "two students",
        "two high school girls",
        "two schoolgirls",
        "female students",
        "two friends"
      ],
      "accepted_words": [
        "two girls",
        "two students",
        "two high school girls",
        "two schoolgirls",
        "female students",
        "two friends"
      ],
      "common_typos": [
        "two grils",
        "two studants",
        "high shcool girls",
        "school girles"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "girls",
            "ja": "女の子たち"
          }
        ],
        "A2": [
          {
            "en": "students",
            "ja": "生徒たち"
          }
        ],
        "B1": [
          {
            "en": "high school girls",
            "ja": "女子高校生"
          }
        ],
        "B2": [
          {
            "en": "two uniformed students exchanging an expressive station greeting",
            "ja": "駅で感情豊かな挨拶を交わす制服姿の2人の生徒"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two raised hands bridging the space between train and platform",
          "ja": "電車とホームの間の空間をつなぐ2つの上げた手"
        },
        {
          "en": "friendship made visible through distance and movement",
          "ja": "距離と動きによって見える友情"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "two girls, students, friends, uniforms",
          "text_en": "two girls, students, friends, uniforms",
          "text_ja": "2人の女子、生徒、友人、制服"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Two high school girls are waving to each other.",
          "text_en": "Two high school girls are waving to each other.",
          "text_ja": "2人の女子高校生が互いに手を振っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "two uniformed students smiling across the platform",
          "text_en": "two uniformed students smiling across the platform",
          "text_ja": "ホーム越しに笑い合う制服姿の2人の生徒"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Separated by several meters, the students maintain a strong visual connection through direct eye contact and matching gestures.",
          "text_en": "Separated by several meters, the students maintain a strong visual connection through direct eye contact and matching gestures.",
          "text_ja": "数メートル離れていても、2人は直接の視線と同じ身振りによって強いつながりを保っています。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "girl beside the train door",
      "label_ja": "電車のドアのそばの女子生徒",
      "category": "person",
      "importance": "primary",
      "description": "The girl on the left stands immediately beside the open train door, wears a navy blazer with a blue ribbon and plaid skirt, carries a large navy duffel bag, and waves with her left hand.",
      "bounding_box_conceptual": [
        11,
        7,
        88,
        34
      ],
      "color": [
        "navy",
        "white",
        "blue",
        "gray",
        "black"
      ],
      "attributes": [
        "smiling",
        "uniformed",
        "prepared to travel",
        "friendly",
        "standing near the train"
      ],
      "action": [
        "waving",
        "holding a bag strap",
        "looking at her friend",
        "standing beside the open door"
      ],
      "synonyms_and_related_words": [
        "girl on the left",
        "student by the train",
        "schoolgirl beside the door",
        "girl near the train door",
        "female student",
        "student with a duffel bag"
      ],
      "accepted_words": [
        "girl on the left",
        "student by the train",
        "schoolgirl beside the door",
        "girl near the train door",
        "female student",
        "student with a duffel bag"
      ],
      "common_typos": [
        "girl on teh left",
        "studant by the train",
        "school gril",
        "train dor"
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
            "en": "girl on the left",
            "ja": "左側の女の子"
          }
        ],
        "B1": [
          {
            "en": "student standing beside the train door",
            "ja": "電車のドアのそばに立つ生徒"
          }
        ],
        "B2": [
          {
            "en": "a traveler positioned at the boundary between train and platform",
            "ja": "電車とホームの境界に立つ旅行者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a student standing at the threshold of a journey",
          "ja": "旅の境界に立つ生徒"
        },
        {
          "en": "one hand holding luggage and the other holding connection",
          "ja": "片手で荷物を持ち、もう片手でつながりを保つ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "girl, train door, uniform, wave",
          "text_en": "girl, train door, uniform, wave",
          "text_ja": "女子、電車のドア、制服、手を振る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl on the left is waving beside the train.",
          "text_en": "The girl on the left is waving beside the train.",
          "text_ja": "左側の女子生徒は電車のそばで手を振っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "stand beside an open train door while carrying a large bag",
          "text_en": "stand beside an open train door while carrying a large bag",
          "text_ja": "大きなバッグを持ちながら開いた電車のドアのそばに立つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Her position beside the open doorway suggests that she may be about to board, may have just arrived, or may be pausing before departure.",
          "text_en": "Her position beside the open doorway suggests that she may be about to board, may have just arrived, or may be pausing before departure.",
          "text_ja": "開いたドアのそばの位置から、乗車前、到着直後、または出発前に立ち止まっている可能性があります。"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "girl waving on the platform",
      "label_ja": "ホームで手を振る女子生徒",
      "category": "person",
      "importance": "primary",
      "description": "The girl on the right stands on the open platform, wears a navy blazer with a dark red ribbon and plaid skirt, carries a black school bag, and raises her right hand high above her head.",
      "bounding_box_conceptual": [
        10,
        55,
        88,
        31
      ],
      "color": [
        "navy",
        "white",
        "dark red",
        "gray",
        "black"
      ],
      "attributes": [
        "smiling",
        "energetic",
        "uniformed",
        "welcoming",
        "expressive"
      ],
      "action": [
        "raising her hand",
        "waving",
        "looking at her friend",
        "standing on the platform"
      ],
      "synonyms_and_related_words": [
        "girl on the right",
        "student on the platform",
        "waving schoolgirl",
        "female student",
        "girl with a red ribbon",
        "student with a black bag"
      ],
      "accepted_words": [
        "girl on the right",
        "student on the platform",
        "waving schoolgirl",
        "female student",
        "girl with a red ribbon",
        "student with a black bag"
      ],
      "common_typos": [
        "girl on teh right",
        "studant on platform",
        "waiving schoolgirl",
        "red ribon"
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
            "en": "student on the platform",
            "ja": "ホーム上の生徒"
          }
        ],
        "B1": [
          {
            "en": "schoolgirl raising her hand",
            "ja": "手を高く上げる女子生徒"
          }
        ],
        "B2": [
          {
            "en": "an expressive student using a large gesture across the station",
            "ja": "駅の空間越しに大きな身振りで伝える表情豊かな生徒"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a raised hand reaching above the station crowd",
          "ja": "駅の人混みより高く伸びる手"
        },
        {
          "en": "a greeting written in movement rather than words",
          "ja": "言葉ではなく動きで書かれた挨拶"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "girl, platform, raise, wave",
          "text_en": "girl, platform, raise, wave",
          "text_ja": "女子、ホーム、上げる、手を振る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl on the right is raising her hand and smiling.",
          "text_en": "The girl on the right is raising her hand and smiling.",
          "text_ja": "右側の女子生徒は手を上げて笑っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "raise her right hand high above her head",
          "text_en": "raise her right hand high above her head",
          "text_ja": "右手を頭より高く上げる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Her high wave makes the gesture visible across the platform and communicates enthusiasm more strongly than a small movement would.",
          "text_en": "Her high wave makes the gesture visible across the platform and communicates enthusiasm more strongly than a small movement would.",
          "text_ja": "高い手振りはホーム越しでも見え、小さな動きより強く熱意を伝えています。"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "commuter train",
      "label_ja": "通勤電車",
      "category": "vehicle",
      "importance": "primary",
      "description": "A long silver commuter train with blue horizontal stripes is stopped along the left side of the platform.",
      "bounding_box_conceptual": [
        0,
        0,
        92,
        62
      ],
      "color": [
        "silver",
        "blue",
        "black",
        "white"
      ],
      "attributes": [
        "long",
        "metallic",
        "modern",
        "stopped",
        "reflective"
      ],
      "action": [
        "standing at the platform",
        "waiting with doors open",
        "reflecting sunlight"
      ],
      "synonyms_and_related_words": [
        "train",
        "commuter train",
        "passenger train",
        "railway train",
        "silver train",
        "blue-striped train"
      ],
      "accepted_words": [
        "train",
        "commuter train",
        "passenger train",
        "railway train",
        "silver train",
        "blue-striped train"
      ],
      "common_typos": [
        "trian",
        "comuter train",
        "passanger train",
        "rail way train"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "train",
            "ja": "電車"
          }
        ],
        "A2": [
          {
            "en": "passenger train",
            "ja": "旅客列車"
          }
        ],
        "B1": [
          {
            "en": "commuter train",
            "ja": "通勤電車"
          }
        ],
        "B2": [
          {
            "en": "a stopped electric train forming the main transportation setting",
            "ja": "場面の主要な交通環境を作る停車中の電車"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a silver line carrying journeys through the city",
          "ja": "街を通して旅を運ぶ銀色の線"
        },
        {
          "en": "a reflective wall separating travel from waiting",
          "ja": "移動と待機を分ける反射する壁"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "train, silver, blue stripe, stop",
          "text_en": "train, silver, blue stripe, stop",
          "text_ja": "電車、銀色、青い線、停まる"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A silver-and-blue train is stopped at the platform.",
          "text_en": "A silver-and-blue train is stopped at the platform.",
          "text_ja": "銀色と青色の電車がホームに停車しています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a long commuter train with blue horizontal stripes",
          "text_en": "a long commuter train with blue horizontal stripes",
          "text_ja": "青い横線がある長い通勤電車"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The train links the students' interaction with the idea of travel and transition.",
          "text_en": "The train links the students' interaction with the idea of travel and transition.",
          "text_ja": "電車は2人の交流を旅と移動の考えに結びつけています。"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "open train door",
      "label_ja": "開いた電車のドア",
      "category": "object",
      "importance": "primary",
      "description": "The train door at the far left is fully open, revealing part of the carriage interior, hand straps, seats, and the metal doorway.",
      "bounding_box_conceptual": [
        0,
        0,
        100,
        20
      ],
      "color": [
        "silver",
        "black",
        "blue",
        "cream"
      ],
      "attributes": [
        "open",
        "metallic",
        "wide",
        "functional",
        "transitional"
      ],
      "action": [
        "providing access to the train",
        "revealing the interior",
        "standing beside the student"
      ],
      "synonyms_and_related_words": [
        "open train door",
        "train entrance",
        "open doorway",
        "carriage door",
        "railway door",
        "train opening"
      ],
      "accepted_words": [
        "open train door",
        "train entrance",
        "open doorway",
        "carriage door",
        "railway door",
        "train opening"
      ],
      "common_typos": [
        "open train dor",
        "train entrence",
        "open door way",
        "carage door"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "door",
            "ja": "ドア"
          }
        ],
        "A2": [
          {
            "en": "train door",
            "ja": "電車のドア"
          }
        ],
        "B1": [
          {
            "en": "open carriage entrance",
            "ja": "開いた車両入口"
          }
        ],
        "B2": [
          {
            "en": "an open threshold connecting the stationary train with the platform",
            "ja": "停車中の電車とホームをつなぐ開いた境界"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "an open doorway waiting for the next movement",
          "ja": "次の動きを待つ開いたドア"
        },
        {
          "en": "the narrow boundary between staying and leaving",
          "ja": "残ることと出発することの狭い境界"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "door, open, entrance, inside",
          "text_en": "door, open, entrance, inside",
          "text_ja": "ドア、開いている、入口、内部"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The train door is open beside the girl.",
          "text_en": "The train door is open beside the girl.",
          "text_ja": "女子生徒のそばで電車のドアが開いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "an open carriage door revealing the train interior",
          "text_en": "an open carriage door revealing the train interior",
          "text_ja": "車内を見せる開いた車両ドア"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The open doorway allows several interpretations: arrival, departure, boarding, or a pause between actions.",
          "text_en": "The open doorway allows several interpretations: arrival, departure, boarding, or a pause between actions.",
          "text_ja": "開いたドアは、到着、出発、乗車、または動作の間の停止という複数の解釈を可能にします。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "school uniforms",
      "label_ja": "学校の制服",
      "category": "clothing",
      "importance": "primary",
      "description": "Both students wear navy blazers, white shirts, ribbon ties, dark plaid skirts, and dark socks as coordinated school uniforms.",
      "bounding_box_conceptual": [
        24,
        10,
        74,
        76
      ],
      "color": [
        "navy",
        "white",
        "blue",
        "dark red",
        "gray"
      ],
      "attributes": [
        "formal",
        "coordinated",
        "school-related",
        "neat",
        "similar"
      ],
      "action": [
        "being worn",
        "identifying the girls as students",
        "creating visual similarity"
      ],
      "synonyms_and_related_words": [
        "school uniforms",
        "uniforms",
        "navy blazers",
        "plaid skirts",
        "student uniforms",
        "high school uniforms"
      ],
      "accepted_words": [
        "school uniforms",
        "uniforms",
        "navy blazers",
        "plaid skirts",
        "student uniforms",
        "high school uniforms"
      ],
      "common_typos": [
        "school unifroms",
        "navy blazerss",
        "plad skirts",
        "studant uniforms"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "uniforms",
            "ja": "制服"
          }
        ],
        "A2": [
          {
            "en": "school uniforms",
            "ja": "学校の制服"
          }
        ],
        "B1": [
          {
            "en": "navy blazers and plaid skirts",
            "ja": "紺色のブレザーとチェック柄スカート"
          }
        ],
        "B2": [
          {
            "en": "coordinated formal clothing identifying a school community",
            "ja": "学校共同体の一員であることを示す統一された正式な服装"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "matching dark uniforms linking the friends visually",
          "ja": "2人を視覚的につなぐ似た濃色の制服"
        },
        {
          "en": "school identity carried into a public travel space",
          "ja": "公共の移動空間へ持ち込まれた学校のアイデンティティ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "uniform, blazer, skirt, ribbon",
          "text_en": "uniform, blazer, skirt, ribbon",
          "text_ja": "制服、ブレザー、スカート、リボン"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Both girls are wearing school uniforms.",
          "text_en": "Both girls are wearing school uniforms.",
          "text_ja": "2人とも学校の制服を着ています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "navy blazers, white shirts, ribbon ties, and plaid skirts",
          "text_en": "navy blazers, white shirts, ribbon ties, and plaid skirts",
          "text_ja": "紺色のブレザー、白いシャツ、リボン、チェック柄スカート"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The similar uniforms establish shared identity, while the differently colored ribbons distinguish the two students.",
          "text_en": "The similar uniforms establish shared identity, while the differently colored ribbons distinguish the two students.",
          "text_ja": "似た制服は共通の所属を示し、異なる色のリボンが2人を見分ける助けになります。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "waving hands",
      "label_ja": "手を振る動作",
      "category": "gesture",
      "importance": "primary",
      "description": "Both students hold one open hand high with fingers spread, creating matching waving gestures directed toward one another.",
      "bounding_box_conceptual": [
        10,
        32,
        39,
        50
      ],
      "color": [
        "skin tone"
      ],
      "attributes": [
        "raised",
        "open",
        "expressive",
        "matching",
        "energetic"
      ],
      "action": [
        "waving",
        "greeting",
        "saying goodbye",
        "communicating across distance"
      ],
      "synonyms_and_related_words": [
        "waving hands",
        "raised hands",
        "open hands",
        "wave",
        "hand gestures",
        "greeting gestures"
      ],
      "accepted_words": [
        "waving hands",
        "raised hands",
        "open hands",
        "wave",
        "hand gestures",
        "greeting gestures"
      ],
      "common_typos": [
        "waiving hands",
        "raized hands",
        "open hads",
        "hand gesturs"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hands",
            "ja": "手"
          }
        ],
        "A2": [
          {
            "en": "raised hands",
            "ja": "上げた手"
          }
        ],
        "B1": [
          {
            "en": "waving gestures",
            "ja": "手を振る身振り"
          }
        ],
        "B2": [
          {
            "en": "large mirrored gestures communicating recognition across distance",
            "ja": "距離越しに認識を伝える大きな鏡のような身振り"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "two open palms carrying a message without words",
          "ja": "言葉なしでメッセージを運ぶ2つの手のひら"
        },
        {
          "en": "matching gestures forming an invisible bridge",
          "ja": "見えない橋を作る同じ身振り"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "hand, wave, raise, fingers",
          "text_en": "hand, wave, raise, fingers",
          "text_ja": "手、手を振る、上げる、指"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Both students are waving with one hand.",
          "text_en": "Both students are waving with one hand.",
          "text_ja": "2人とも片手で手を振っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "hold an open hand high with the fingers spread",
          "text_en": "hold an open hand high with the fingers spread",
          "text_ja": "指を広げて開いた手を高く上げる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Because the gestures mirror one another, the wave becomes a reciprocal exchange rather than a one-sided signal.",
          "text_en": "Because the gestures mirror one another, the wave becomes a reciprocal exchange rather than a one-sided signal.",
          "text_ja": "身振りが互いを映しているため、手振りは一方的な合図ではなく相互のやり取りになります。"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "navy duffel bag",
      "label_ja": "紺色のボストンバッグ",
      "category": "object",
      "importance": "primary",
      "description": "A large navy duffel bag with wide gray straps hangs across the left student's body, and she holds one strap near her waist.",
      "bounding_box_conceptual": [
        49,
        4,
        31,
        29
      ],
      "color": [
        "navy",
        "gray",
        "silver"
      ],
      "attributes": [
        "large",
        "soft-sided",
        "zippered",
        "travel-ready",
        "heavy-looking"
      ],
      "action": [
        "hanging from her shoulder",
        "being carried",
        "suggesting travel"
      ],
      "synonyms_and_related_words": [
        "duffel bag",
        "navy duffel bag",
        "large travel bag",
        "sports bag",
        "shoulder bag",
        "overnight bag"
      ],
      "accepted_words": [
        "duffel bag",
        "navy duffel bag",
        "large travel bag",
        "sports bag",
        "shoulder bag",
        "overnight bag"
      ],
      "common_typos": [
        "duffle bag",
        "navy duffle",
        "travle bag",
        "sport bag"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bag",
            "ja": "バッグ"
          }
        ],
        "A2": [
          {
            "en": "large shoulder bag",
            "ja": "大きな肩掛けバッグ"
          }
        ],
        "B1": [
          {
            "en": "navy duffel bag",
            "ja": "紺色のボストンバッグ"
          }
        ],
        "B2": [
          {
            "en": "a substantial travel bag suggesting an extended trip or school activity",
            "ja": "長い旅行または学校活動を示唆する大きな旅行バッグ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bag filled with the next part of the journey",
          "ja": "旅の次の部分が詰まったバッグ"
        },
        {
          "en": "luggage hanging between school life and travel",
          "ja": "学校生活と旅の間に掛かる荷物"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "bag, duffel bag, strap, carry",
          "text_en": "bag, duffel bag, strap, carry",
          "text_ja": "バッグ、ボストンバッグ、ストラップ、運ぶ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The girl on the left is carrying a large navy bag.",
          "text_en": "The girl on the left is carrying a large navy bag.",
          "text_ja": "左側の女子生徒は大きな紺色のバッグを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a large zippered duffel bag with wide gray straps",
          "text_en": "a large zippered duffel bag with wide gray straps",
          "text_ja": "幅広い灰色のストラップがある大きなファスナー付きバッグ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The duffel bag suggests that the student may be traveling for more than a short daily commute.",
          "text_en": "The duffel bag suggests that the student may be traveling for more than a short daily commute.",
          "text_ja": "ボストンバッグは、生徒が日常の短い通学以上の移動をしている可能性を示します。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "black school bag",
      "label_ja": "黒いスクールバッグ",
      "category": "object",
      "importance": "secondary",
      "description": "A structured black school bag hangs from the right student's left shoulder and rests against her side.",
      "bounding_box_conceptual": [
        39,
        64,
        37,
        14
      ],
      "color": [
        "black",
        "dark navy"
      ],
      "attributes": [
        "structured",
        "formal",
        "school-related",
        "compact",
        "shoulder-carried"
      ],
      "action": [
        "hanging from her shoulder",
        "being carried",
        "resting beside her blazer"
      ],
      "synonyms_and_related_words": [
        "school bag",
        "black school bag",
        "shoulder bag",
        "student bag",
        "book bag",
        "black bag"
      ],
      "accepted_words": [
        "school bag",
        "black school bag",
        "shoulder bag",
        "student bag",
        "book bag",
        "black bag"
      ],
      "common_typos": [
        "school beg",
        "black school beg",
        "shoulder beg",
        "studant bag"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "bag",
            "ja": "バッグ"
          }
        ],
        "A2": [
          {
            "en": "school bag",
            "ja": "スクールバッグ"
          }
        ],
        "B1": [
          {
            "en": "structured student shoulder bag",
            "ja": "形のしっかりした生徒用肩掛けバッグ"
          }
        ],
        "B2": [
          {
            "en": "a formal school bag reinforcing everyday academic identity",
            "ja": "日常的な学校の立場を強調する正式なスクールバッグ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a dark school bag resting beneath an energetic wave",
          "ja": "元気な手振りの下で静かに掛かる濃色のバッグ"
        },
        {
          "en": "the practical weight of school beneath a joyful greeting",
          "ja": "楽しい挨拶の下にある学校生活の実用的な重さ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "school bag, black, shoulder, carry",
          "text_en": "school bag, black, shoulder, carry",
          "text_ja": "スクールバッグ、黒、肩、運ぶ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A black school bag is hanging from her shoulder.",
          "text_en": "A black school bag is hanging from her shoulder.",
          "text_ja": "黒いスクールバッグが彼女の肩から掛かっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a structured black bag carried over the left shoulder",
          "text_en": "a structured black bag carried over the left shoulder",
          "text_ja": "左肩に掛けた形のしっかりした黒いバッグ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The contrast between the compact school bag and the larger duffel bag may suggest different travel plans.",
          "text_en": "The contrast between the compact school bag and the larger duffel bag may suggest different travel plans.",
          "text_ja": "小さなスクールバッグと大きなボストンバッグの対比は、移動計画の違いを示唆するかもしれません。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "yellow tactile paving",
      "label_ja": "黄色い点字ブロック",
      "category": "setting",
      "importance": "primary",
      "description": "A long strip of yellow tactile paving with raised dots and directional patterns runs along the platform edge between the train and the walking area.",
      "bounding_box_conceptual": [
        48,
        31,
        52,
        29
      ],
      "color": [
        "yellow",
        "gold"
      ],
      "attributes": [
        "textured",
        "bright",
        "linear",
        "safety-related",
        "raised"
      ],
      "action": [
        "marking the platform edge",
        "guiding passengers",
        "separating safe walking space"
      ],
      "synonyms_and_related_words": [
        "yellow tactile paving",
        "tactile paving",
        "yellow safety line",
        "raised paving",
        "guidance blocks",
        "tactile blocks"
      ],
      "accepted_words": [
        "yellow tactile paving",
        "tactile paving",
        "yellow safety line",
        "raised paving",
        "guidance blocks",
        "tactile blocks"
      ],
      "common_typos": [
        "tactle paving",
        "yellow safty line",
        "raized paving",
        "guidence blocks"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "yellow line",
            "ja": "黄色い線"
          }
        ],
        "A2": [
          {
            "en": "tactile paving",
            "ja": "点字ブロック"
          }
        ],
        "B1": [
          {
            "en": "raised safety guidance tiles",
            "ja": "凹凸のある安全誘導タイル"
          }
        ],
        "B2": [
          {
            "en": "a textured accessibility feature guiding passengers and marking the platform edge",
            "ja": "乗客を誘導しホーム端を示す凹凸のあるバリアフリー設備"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bright yellow path leading the eye into the station",
          "ja": "視線を駅の奥へ導く黄色い道"
        },
        {
          "en": "a safety boundary running through the emotional scene",
          "ja": "感情的な場面を通る安全の境界"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "yellow, tactile paving, safety, platform edge",
          "text_en": "yellow, tactile paving, safety, platform edge",
          "text_ja": "黄色、点字ブロック、安全、ホーム端"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Yellow tactile paving runs along the platform.",
          "text_en": "Yellow tactile paving runs along the platform.",
          "text_ja": "黄色い点字ブロックがホームに沿って伸びています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a long yellow safety strip with raised dots",
          "text_en": "a long yellow safety strip with raised dots",
          "text_ja": "突起のある長い黄色の安全帯"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Its strong color creates both a safety boundary and a visual line toward the distant passengers.",
          "text_en": "Its strong color creates both a safety boundary and a visual line toward the distant passengers.",
          "text_ja": "強い色は安全境界と遠くの乗客へ向かう視覚的な線の両方を作ります。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "railway platform",
      "label_ja": "駅のホーム",
      "category": "setting",
      "importance": "primary",
      "description": "A long covered railway platform with gray tiles extends into the distance beside the stopped train.",
      "bounding_box_conceptual": [
        22,
        18,
        78,
        82
      ],
      "color": [
        "gray",
        "yellow",
        "cream"
      ],
      "attributes": [
        "long",
        "covered",
        "public",
        "busy",
        "open-sided",
        "clean"
      ],
      "action": [
        "supporting passengers",
        "providing access to the train",
        "extending into the distance"
      ],
      "synonyms_and_related_words": [
        "platform",
        "railway platform",
        "train platform",
        "station platform",
        "boarding platform",
        "covered platform"
      ],
      "accepted_words": [
        "platform",
        "railway platform",
        "train platform",
        "station platform",
        "boarding platform",
        "covered platform"
      ],
      "common_typos": [
        "platfrom",
        "rail way platform",
        "trian platform",
        "station platfrom"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "platform",
            "ja": "ホーム"
          }
        ],
        "A2": [
          {
            "en": "station platform",
            "ja": "駅のホーム"
          }
        ],
        "B1": [
          {
            "en": "covered railway platform",
            "ja": "屋根付きの鉄道ホーム"
          }
        ],
        "B2": [
          {
            "en": "a public transportation space organizing boarding, waiting, walking, and greeting",
            "ja": "乗車、待機、歩行、挨拶を整理する公共交通空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a long stage where journeys briefly meet",
          "ja": "旅が一時的に出会う長い舞台"
        },
        {
          "en": "a public corridor carrying private emotions",
          "ja": "私的な感情を運ぶ公共の通路"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "platform, station, tiles, passengers",
          "text_en": "platform, station, tiles, passengers",
          "text_ja": "ホーム、駅、タイル、乗客"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The students are standing on a railway platform.",
          "text_en": "The students are standing on a railway platform.",
          "text_ja": "生徒たちは駅のホームに立っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a long covered platform beside a stopped commuter train",
          "text_en": "a long covered platform beside a stopped commuter train",
          "text_ja": "停車中の通勤電車のそばの長い屋根付きホーム"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The platform functions as both a practical transit space and an emotional setting for the students' exchange.",
          "text_en": "The platform functions as both a practical transit space and an emotional setting for the students' exchange.",
          "text_ja": "ホームは実用的な移動空間と2人の交流の感情的な舞台の両方として機能します。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "station clock",
      "label_ja": "駅のアナログ時計",
      "category": "object",
      "importance": "primary",
      "description": "A large round analog clock with a pale green face, black numbers, and dark hands hangs near the upper-right corner of the platform roof.",
      "bounding_box_conceptual": [
        0,
        82,
        15,
        12
      ],
      "color": [
        "pale green",
        "black",
        "silver"
      ],
      "attributes": [
        "round",
        "large",
        "analog",
        "high-mounted",
        "easy to see"
      ],
      "action": [
        "showing the time",
        "hanging above the platform",
        "supporting travel schedules"
      ],
      "synonyms_and_related_words": [
        "station clock",
        "analog clock",
        "round clock",
        "platform clock",
        "large clock",
        "railway clock"
      ],
      "accepted_words": [
        "station clock",
        "analog clock",
        "round clock",
        "platform clock",
        "large clock",
        "railway clock"
      ],
      "common_typos": [
        "station clok",
        "analoge clock",
        "round clok",
        "platfrom clock"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "clock",
            "ja": "時計"
          }
        ],
        "A2": [
          {
            "en": "analog clock",
            "ja": "アナログ時計"
          }
        ],
        "B1": [
          {
            "en": "large station clock",
            "ja": "大きな駅時計"
          }
        ],
        "B2": [
          {
            "en": "a visible timekeeping device supporting punctual railway movement",
            "ja": "時間通りの鉄道移動を支える見やすい時計"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a round reminder that every farewell has a schedule",
          "ja": "すべての別れに時刻があることを思い出させる丸い時計"
        },
        {
          "en": "time watching silently above the waving students",
          "ja": "手を振る生徒たちの上で静かに見守る時間"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clock, time, round, numbers",
          "text_en": "clock, time, round, numbers",
          "text_ja": "時計、時間、丸い、数字"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A large analog clock is hanging above the platform.",
          "text_en": "A large analog clock is hanging above the platform.",
          "text_ja": "大きなアナログ時計がホームの上に掛かっています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a round station clock with black numbers and hands",
          "text_en": "a round station clock with black numbers and hands",
          "text_ja": "黒い数字と針がある丸い駅時計"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The clock introduces schedules and limited time, adding narrative tension to the cheerful exchange.",
          "text_en": "The clock introduces schedules and limited time, adding narrative tension to the cheerful exchange.",
          "text_ja": "時計は時刻表と限られた時間を加え、明るいやり取りに物語的な緊張を与えます。"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "background commuters",
      "label_ja": "背景の通勤客・乗客",
      "category": "people",
      "importance": "secondary",
      "description": "Several adults and passengers walk away from the camera along the platform, carrying handbags, backpacks, and work bags.",
      "bounding_box_conceptual": [
        29,
        47,
        42,
        28
      ],
      "color": [
        "black",
        "navy",
        "white",
        "beige",
        "gray"
      ],
      "attributes": [
        "distant",
        "busy",
        "moving",
        "varied",
        "traveling"
      ],
      "action": [
        "walking",
        "carrying bags",
        "approaching or leaving the train",
        "commuting"
      ],
      "synonyms_and_related_words": [
        "commuters",
        "passengers",
        "travelers",
        "people in the background",
        "station users",
        "walking passengers"
      ],
      "accepted_words": [
        "commuters",
        "passengers",
        "travelers",
        "people in the background",
        "station users",
        "walking passengers"
      ],
      "common_typos": [
        "comuters",
        "passangers",
        "travelerss",
        "back ground people"
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
            "en": "passengers",
            "ja": "乗客"
          }
        ],
        "B1": [
          {
            "en": "commuters",
            "ja": "通勤客"
          }
        ],
        "B2": [
          {
            "en": "a flow of passengers moving through the station with personal luggage",
            "ja": "個人の荷物を持って駅を移動する乗客の流れ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "many separate journeys continuing behind the friends",
          "ja": "2人の後ろで続く多くの別々の旅"
        },
        {
          "en": "a human current moving down the platform",
          "ja": "ホームを流れる人の流れ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "passengers, commuters, walk, bags",
          "text_en": "passengers, commuters, walk, bags",
          "text_ja": "乗客、通勤客、歩く、バッグ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Several passengers are walking in the background.",
          "text_en": "Several passengers are walking in the background.",
          "text_ja": "背景では複数の乗客が歩いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "commuters carrying work bags and backpacks along the platform",
          "text_en": "commuters carrying work bags and backpacks along the platform",
          "text_ja": "仕事用バッグやリュックを持ってホームを歩く通勤客"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The moving commuters contrast with the students' pause and emphasize the station's continuous movement.",
          "text_en": "The moving commuters contrast with the students' pause and emphasize the station's continuous movement.",
          "text_ja": "動く通勤客は立ち止まる生徒たちと対照を作り、駅の絶えない動きを強調します。"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "two waving adults",
      "label_ja": "手を振る大人2人",
      "category": "people",
      "importance": "secondary",
      "description": "A smiling man in a light blue shirt and a smiling woman in a light cardigan stand near the tracks in the right background and wave toward the students.",
      "bounding_box_conceptual": [
        23,
        84,
        61,
        16
      ],
      "color": [
        "light blue",
        "white",
        "gray",
        "beige"
      ],
      "attributes": [
        "smiling",
        "supportive-looking",
        "distant",
        "friendly",
        "standing together"
      ],
      "action": [
        "waving",
        "smiling",
        "watching the students",
        "standing near the track side"
      ],
      "synonyms_and_related_words": [
        "two adults",
        "a man and a woman",
        "waving adults",
        "people in the background",
        "two older people",
        "adult pair"
      ],
      "accepted_words": [
        "two adults",
        "a man and a woman",
        "waving adults",
        "people in the background",
        "two older people",
        "adult pair"
      ],
      "common_typos": [
        "two adaults",
        "man and women",
        "waiving adults",
        "older peple"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "adults",
            "ja": "大人たち"
          }
        ],
        "A2": [
          {
            "en": "a man and a woman",
            "ja": "男性と女性"
          }
        ],
        "B1": [
          {
            "en": "two adults waving in the background",
            "ja": "背景で手を振る大人2人"
          }
        ],
        "B2": [
          {
            "en": "a supportive-looking adult pair participating in the station greeting or farewell",
            "ja": "駅での挨拶または別れに加わる支援的に見える大人2人"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a second pair of waves echoing the students' gestures",
          "ja": "生徒たちの身振りを反響させるもう一組の手振り"
        },
        {
          "en": "adult smiles extending the network of farewell",
          "ja": "別れのつながりを広げる大人の笑顔"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "adults, man, woman, wave",
          "text_en": "adults, man, woman, wave",
          "text_ja": "大人、男性、女性、手を振る"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Two adults are also waving in the background.",
          "text_en": "Two adults are also waving in the background.",
          "text_ja": "背景では大人2人も手を振っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a smiling man and woman standing near the track side",
          "text_en": "a smiling man and woman standing near the track side",
          "text_ja": "線路側に立つ笑顔の男性と女性"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Their similar gestures broaden the scene from a private interaction to a larger social moment.",
          "text_en": "Their similar gestures broaden the scene from a private interaction to a larger social moment.",
          "text_ja": "似た身振りは、私的な交流をより大きな社会的場面へ広げています。"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "station roof and electrical equipment",
      "label_ja": "駅の屋根と電気設備",
      "category": "setting",
      "importance": "secondary",
      "description": "A metal platform roof, steel beams, fluorescent lights, supporting columns, cables, and overhead railway electrical structures fill the upper half of the station.",
      "bounding_box_conceptual": [
        0,
        22,
        35,
        78
      ],
      "color": [
        "silver",
        "gray",
        "cream",
        "black"
      ],
      "attributes": [
        "industrial",
        "metallic",
        "covered",
        "structural",
        "complex"
      ],
      "action": [
        "covering the platform",
        "supporting lights and equipment",
        "framing the station"
      ],
      "synonyms_and_related_words": [
        "station roof",
        "platform roof",
        "metal roof",
        "steel beams",
        "overhead wires",
        "electrical equipment"
      ],
      "accepted_words": [
        "station roof",
        "platform roof",
        "metal roof",
        "steel beams",
        "overhead wires",
        "electrical equipment"
      ],
      "common_typos": [
        "station roaf",
        "platfrom roof",
        "metel roof",
        "steel beems"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "roof",
            "ja": "屋根"
          }
        ],
        "A2": [
          {
            "en": "station roof",
            "ja": "駅の屋根"
          }
        ],
        "B1": [
          {
            "en": "overhead railway equipment",
            "ja": "頭上の鉄道設備"
          }
        ],
        "B2": [
          {
            "en": "industrial infrastructure supporting weather protection, lighting, and train operation",
            "ja": "雨よけ、照明、電車運行を支える産業的インフラ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a metal framework holding the station above the human scene",
          "ja": "人間の場面の上で駅を支える金属の枠組み"
        },
        {
          "en": "industrial lines crossing the bright sky",
          "ja": "明るい空を横切る産業的な線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "roof, beam, wire, light",
          "text_en": "roof, beam, wire, light",
          "text_ja": "屋根、梁、電線、照明"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A metal roof covers the station platform.",
          "text_en": "A metal roof covers the station platform.",
          "text_ja": "金属製の屋根が駅のホームを覆っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "steel beams, fluorescent lights, and overhead electrical lines",
          "text_en": "steel beams, fluorescent lights, and overhead electrical lines",
          "text_ja": "鉄骨、蛍光灯、頭上の電線"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The industrial framework contrasts with the students' soft expressions, combining infrastructure with human emotion.",
          "text_en": "The industrial framework contrasts with the students' soft expressions, combining infrastructure with human emotion.",
          "text_ja": "産業的な構造は生徒たちの柔らかな表情と対照を作り、インフラと人間の感情を組み合わせています。"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "daylight, trees, and city background",
      "label_ja": "日差し・木々・都市の背景",
      "category": "setting",
      "importance": "secondary",
      "description": "Bright sunlight, blue sky, white clouds, green trees, and pale city buildings are visible beyond the open side of the platform.",
      "bounding_box_conceptual": [
        0,
        65,
        58,
        35
      ],
      "color": [
        "blue",
        "white",
        "green",
        "cream"
      ],
      "attributes": [
        "sunny",
        "bright",
        "open",
        "urban",
        "fresh",
        "daytime"
      ],
      "action": [
        "illuminating the platform",
        "providing an outdoor background",
        "creating an optimistic atmosphere"
      ],
      "synonyms_and_related_words": [
        "blue sky",
        "daylight",
        "sunlight",
        "green trees",
        "city buildings",
        "white clouds"
      ],
      "accepted_words": [
        "blue sky",
        "daylight",
        "sunlight",
        "green trees",
        "city buildings",
        "white clouds"
      ],
      "common_typos": [
        "blue skye",
        "day ligth",
        "sun ligth",
        "green treees"
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
            "en": "sunny day",
            "ja": "晴れた日"
          }
        ],
        "B1": [
          {
            "en": "urban background with trees",
            "ja": "木々のある都市の背景"
          }
        ],
        "B2": [
          {
            "en": "a bright outdoor cityscape creating openness beyond the covered station",
            "ja": "屋根付き駅の向こうに開放感を作る明るい都市景観"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "blue sky opening beyond the metal station roof",
          "ja": "金属製の駅屋根の向こうに開く青空"
        },
        {
          "en": "green trees softening the industrial railway setting",
          "ja": "産業的な鉄道環境を柔らかくする緑の木々"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "sunlight, blue sky, trees, buildings",
          "text_en": "sunlight, blue sky, trees, buildings",
          "text_ja": "日差し、青空、木々、建物"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Bright sunlight fills the station platform.",
          "text_en": "Bright sunlight fills the station platform.",
          "text_ja": "明るい日差しが駅のホームを満たしています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "green trees and city buildings under a blue sky",
          "text_en": "green trees and city buildings under a blue sky",
          "text_ja": "青空の下の緑の木々と都市の建物"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Natural light and greenery prevent the transport setting from feeling cold and give the possible farewell a hopeful tone.",
          "text_en": "Natural light and greenery prevent the transport setting from feeling cold and give the possible farewell a hopeful tone.",
          "text_ja": "自然光と緑は交通空間を冷たく感じさせず、別れの可能性に希望のある調子を与えます。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "round analog station clock in the upper-right area",
      "content": "clock numerals 1–12",
      "description_ja": "駅時計の文字盤に表示された1から12までの数字。",
      "accepted_words": [
        "clock numbers",
        "numbers one to twelve",
        "analog clock numerals"
      ],
      "common_typos": [
        "clock numbars",
        "numbers one too twelve",
        "analoge numerals"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "clock, number, time, hand",
          "text_en": "clock, number, time, hand",
          "text_ja": "時計、数字、時間、針"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The clock has numbers from one to twelve.",
          "text_en": "The clock has numbers from one to twelve.",
          "text_ja": "時計には1から12までの数字があります。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The round clock above the platform shows...",
          "text_en": "The round clock above the platform shows...",
          "text_ja": "ホーム上の丸い時計は……を示しています。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Although the exact minute is not essential, the visible clock reinforces the station's dependence on schedules and punctuality.",
          "text_en": "Although the exact minute is not essential, the visible clock reinforces the station's dependence on schedules and punctuality.",
          "text_ja": "正確な分は必須ではありませんが、見える時計は駅が時刻表と時間厳守に依存することを強調します。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Waving to each other",
      "description_ja": "互いに手を振っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_007"
      ],
      "synonyms": [
        "wave to each other",
        "waving to each other",
        "raise their hands",
        "exchange waves",
        "wave across the platform",
        "greet with raised hands"
      ],
      "accepted_words": [
        "wave to each other",
        "waving to each other",
        "raise their hands",
        "exchange waves",
        "wave across the platform",
        "greet with raised hands"
      ],
      "common_typos": [
        "waive to each other",
        "waving to ech other",
        "raize their hands",
        "exchange waives"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "wave",
            "ja": "手を振る"
          }
        ],
        "A2": [
          {
            "en": "wave to each other",
            "ja": "互いに手を振る"
          }
        ],
        "B1": [
          {
            "en": "exchange enthusiastic waves",
            "ja": "元気な手振りを交わす"
          }
        ],
        "B2": [
          {
            "en": "communicate mutual recognition through large reciprocal gestures",
            "ja": "大きな相互の身振りで互いの認識を伝える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "building a bridge with two open hands",
          "ja": "2つの開いた手で橋を作る"
        },
        {
          "en": "sending friendship across the platform without words",
          "ja": "言葉なしでホーム越しに友情を送る"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "wave, hand, each other, raise",
          "text_en": "wave, hand, each other, raise",
          "text_ja": "手を振る、手、互いに、上げる"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The two girls are waving to each other.",
          "text_en": "The two girls are waving to each other.",
          "text_ja": "2人の女子生徒は互いに手を振っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "raise one hand high and wave across the platform",
          "text_en": "raise one hand high and wave across the platform",
          "text_ja": "片手を高く上げてホーム越しに手を振る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Because both students perform the same action, the gesture clearly represents mutual communication.",
          "text_en": "Because both students perform the same action, the gesture clearly represents mutual communication.",
          "text_ja": "2人が同じ動作をしているため、その身振りは相互のコミュニケーションを明確に表しています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Greeting or saying goodbye",
      "description_ja": "挨拶または別れを伝えている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "greet each other",
        "say goodbye",
        "welcome a friend",
        "see someone off",
        "meet at the station",
        "say farewell"
      ],
      "accepted_words": [
        "greet each other",
        "say goodbye",
        "welcome a friend",
        "see someone off",
        "meet at the station",
        "say farewell"
      ],
      "common_typos": [
        "great each other",
        "say good bye",
        "welcom a friend",
        "see someone of"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "say hello",
            "ja": "こんにちはと言う"
          }
        ],
        "A2": [
          {
            "en": "say goodbye",
            "ja": "別れを言う"
          }
        ],
        "B1": [
          {
            "en": "see a friend off",
            "ja": "友人を見送る"
          }
        ],
        "B2": [
          {
            "en": "participate in an ambiguous greeting or farewell connected with travel",
            "ja": "移動に関係する解釈の幅がある挨拶または別れに参加する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a hello and a goodbye sharing the same gesture",
          "ja": "同じ身振りを共有するこんにちはとさようなら"
        },
        {
          "en": "a moment balanced between arrival and departure",
          "ja": "到着と出発の間で均衡する瞬間"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "greet, goodbye, farewell, welcome",
          "text_en": "greet, goodbye, farewell, welcome",
          "text_ja": "挨拶する、さようなら、別れ、迎える"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "They may be greeting each other or saying goodbye.",
          "text_en": "They may be greeting each other or saying goodbye.",
          "text_ja": "2人は挨拶をしているか、別れを伝えているのかもしれません。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "exchange a cheerful farewell beside a stopped train",
          "text_en": "exchange a cheerful farewell beside a stopped train",
          "text_ja": "停車中の電車のそばで明るい別れの挨拶を交わす"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The open door, luggage, smiles, and reciprocal waves support both arrival and departure interpretations.",
          "text_en": "The open door, luggage, smiles, and reciprocal waves support both arrival and departure interpretations.",
          "text_ja": "開いたドア、荷物、笑顔、相互の手振りは到着と出発の両方の解釈を支えます。"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Standing beside an open train door",
      "description_ja": "開いた電車のドアのそばに立っている",
      "involved_elements": [
        "element_002",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "stand beside the train door",
        "stand near the open door",
        "wait at the train entrance",
        "stand by the train",
        "pause beside the carriage",
        "stand at the doorway"
      ],
      "accepted_words": [
        "stand beside the train door",
        "stand near the open door",
        "wait at the train entrance",
        "stand by the train",
        "pause beside the carriage",
        "stand at the doorway"
      ],
      "common_typos": [
        "stand besid",
        "train dor",
        "wait at entrence",
        "stand buy the train"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "stand by the train",
            "ja": "電車のそばに立つ"
          }
        ],
        "A2": [
          {
            "en": "stand near the open door",
            "ja": "開いたドアの近くに立つ"
          }
        ],
        "B1": [
          {
            "en": "pause beside the carriage entrance",
            "ja": "車両入口のそばで立ち止まる"
          }
        ],
        "B2": [
          {
            "en": "occupy a transitional position between train interior and platform",
            "ja": "車内とホームの間の移行的な位置に立つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "standing where the journey meets the platform",
          "ja": "旅とホームが出会う場所に立つ"
        },
        {
          "en": "pausing at the threshold between leaving and staying",
          "ja": "出発と残ることの間の境界で立ち止まる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "stand, beside, door, train",
          "text_en": "stand, beside, door, train",
          "text_ja": "立つ、そば、ドア、電車"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "One girl is standing beside the open train door.",
          "text_en": "One girl is standing beside the open train door.",
          "text_ja": "1人の女子生徒が開いた電車のドアのそばに立っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "pause immediately next to the carriage entrance",
          "text_en": "pause immediately next to the carriage entrance",
          "text_ja": "車両入口のすぐ隣で立ち止まる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The doorway functions as a narrative boundary, making the student's exact direction of travel uncertain.",
          "text_en": "The doorway functions as a narrative boundary, making the student's exact direction of travel uncertain.",
          "text_ja": "ドアは物語上の境界として機能し、生徒の正確な移動方向を不確かにしています。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Carrying school and travel bags",
      "description_ja": "スクールバッグや旅行バッグを持っている",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_008",
        "element_009"
      ],
      "synonyms": [
        "carry bags",
        "carry school bags",
        "carry a duffel bag",
        "hold luggage",
        "carry travel bags",
        "wear shoulder bags"
      ],
      "accepted_words": [
        "carry bags",
        "carry school bags",
        "carry a duffel bag",
        "hold luggage",
        "carry travel bags",
        "wear shoulder bags"
      ],
      "common_typos": [
        "cary bags",
        "school beg",
        "duffle bag",
        "lugage"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "carry bags",
            "ja": "バッグを持つ"
          }
        ],
        "A2": [
          {
            "en": "carry school bags",
            "ja": "スクールバッグを持つ"
          }
        ],
        "B1": [
          {
            "en": "carry luggage and personal belongings",
            "ja": "荷物と私物を運ぶ"
          }
        ],
        "B2": [
          {
            "en": "transport differently sized bags implying distinct travel plans",
            "ja": "異なる移動計画を示すサイズの違うバッグを運ぶ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "carrying the practical weight of school and travel",
          "ja": "学校と旅の実用的な重さを運ぶ"
        },
        {
          "en": "bags revealing different versions of the same journey",
          "ja": "同じ旅の異なる形を示すバッグ"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "carry, bag, luggage, shoulder",
          "text_en": "carry, bag, luggage, shoulder",
          "text_ja": "運ぶ、バッグ、荷物、肩"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Both students are carrying bags.",
          "text_en": "Both students are carrying bags.",
          "text_ja": "2人の生徒はどちらもバッグを持っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "carry a large duffel bag and a structured school bag",
          "text_en": "carry a large duffel bag and a structured school bag",
          "text_ja": "大きなボストンバッグと形のしっかりしたスクールバッグを持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The contrasting bags suggest that one student may be prepared for a longer trip while the other remains in an everyday school context.",
          "text_en": "The contrasting bags suggest that one student may be prepared for a longer trip while the other remains in an everyday school context.",
          "text_ja": "対照的なバッグは、1人が長い旅行の準備をし、もう1人が日常の学校生活にいる可能性を示します。"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Smiling and making eye contact",
      "description_ja": "笑顔で視線を合わせている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003"
      ],
      "synonyms": [
        "smile at each other",
        "make eye contact",
        "look at one another",
        "exchange smiles",
        "face each other",
        "look across the platform"
      ],
      "accepted_words": [
        "smile at each other",
        "make eye contact",
        "look at one another",
        "exchange smiles",
        "face each other",
        "look across the platform"
      ],
      "common_typos": [
        "smile at ech other",
        "make eyes contact",
        "one anather",
        "exhange smiles"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "smile",
            "ja": "笑う"
          }
        ],
        "A2": [
          {
            "en": "look at each other",
            "ja": "互いを見る"
          }
        ],
        "B1": [
          {
            "en": "exchange cheerful smiles",
            "ja": "明るい笑顔を交わす"
          }
        ],
        "B2": [
          {
            "en": "maintain emotional connection through mutual gaze and responsive expressions",
            "ja": "相互の視線と反応する表情で感情的なつながりを保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "smiles crossing the station faster than the train",
          "ja": "電車より速く駅を横切る笑顔"
        },
        {
          "en": "eye contact holding the two sides together",
          "ja": "2つの場所をつなぎ止める視線"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "smile, look, eye contact, expression",
          "text_en": "smile, look, eye contact, expression",
          "text_ja": "笑顔、見る、視線、表情"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The students are smiling and looking at each other.",
          "text_en": "The students are smiling and looking at each other.",
          "text_ja": "生徒たちは笑顔で互いを見ています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "maintain direct eye contact while waving from a distance",
          "text_en": "maintain direct eye contact while waving from a distance",
          "text_ja": "離れた場所から手を振りながら直接視線を合わせる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Direct gaze prevents physical distance from weakening the emotional intimacy of the moment.",
          "text_en": "Direct gaze prevents physical distance from weakening the emotional intimacy of the moment.",
          "text_ja": "直接の視線は、物理的な距離が瞬間の感情的な親密さを弱めることを防いでいます。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Train standing with its door open",
      "description_ja": "電車がドアを開けて停車している",
      "involved_elements": [
        "element_004",
        "element_005",
        "element_011"
      ],
      "synonyms": [
        "train is stopped",
        "train is waiting",
        "door is open",
        "train stands at the platform",
        "commuter train is stationary",
        "train has stopped"
      ],
      "accepted_words": [
        "train is stopped",
        "train is waiting",
        "door is open",
        "train stands at the platform",
        "commuter train is stationary",
        "train has stopped"
      ],
      "common_typos": [
        "train is stoped",
        "train is waitting",
        "dor is open",
        "stationery train"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "the train is stopped",
            "ja": "電車が停まっている"
          }
        ],
        "A2": [
          {
            "en": "the train door is open",
            "ja": "電車のドアが開いている"
          }
        ],
        "B1": [
          {
            "en": "the commuter train remains stationary",
            "ja": "通勤電車が停車したままである"
          }
        ],
        "B2": [
          {
            "en": "the stationary train permits passenger movement through its open doorway",
            "ja": "停車中の電車が開いたドアを通して乗客の移動を可能にする"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a long machine pausing while human emotions move",
          "ja": "人間の感情が動く間に停止する長い機械"
        },
        {
          "en": "open doors holding the station between motion and stillness",
          "ja": "駅を動きと静止の間に置く開いたドア"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "train, stop, open, wait",
          "text_en": "train, stop, open, wait",
          "text_ja": "電車、停まる、開く、待つ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The train is stopped, and its door is open.",
          "text_en": "The train is stopped, and its door is open.",
          "text_ja": "電車は停車しており、ドアが開いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "remain stationary at the platform with the carriage door open",
          "text_en": "remain stationary at the platform with the carriage door open",
          "text_ja": "車両ドアを開けたままホームに停車している"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The combination of stillness and an open door creates a brief window in which the greeting can continue.",
          "text_en": "The combination of stillness and an open door creates a brief window in which the greeting can continue.",
          "text_ja": "停車と開いたドアの組み合わせは、挨拶を続けられる短い時間を作っています。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Commuters walking along the platform",
      "description_ja": "通勤客がホームを歩いている",
      "involved_elements": [
        "element_011",
        "element_013",
        "element_010"
      ],
      "synonyms": [
        "walk along the platform",
        "commute through the station",
        "carry bags while walking",
        "move toward the train",
        "walk away from the camera",
        "pass along the platform"
      ],
      "accepted_words": [
        "walk along the platform",
        "commute through the station",
        "carry bags while walking",
        "move toward the train",
        "walk away from the camera",
        "pass along the platform"
      ],
      "common_typos": [
        "walk allong",
        "comute",
        "carry baggs",
        "move towrd"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "walk",
            "ja": "歩く"
          }
        ],
        "A2": [
          {
            "en": "walk along the platform",
            "ja": "ホームに沿って歩く"
          }
        ],
        "B1": [
          {
            "en": "commute through the station",
            "ja": "駅を通って通勤する"
          }
        ],
        "B2": [
          {
            "en": "form a continuous flow of passengers moving through the transport environment",
            "ja": "交通環境を移動する乗客の継続的な流れを作る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a stream of commuters moving beyond the paused friendship",
          "ja": "一時停止した友情の向こうを動く通勤客の流れ"
        },
        {
          "en": "ordinary journeys continuing behind an extraordinary moment",
          "ja": "特別な瞬間の後ろで続く日常の旅"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "commuters, walk, platform, distance",
          "text_en": "commuters, walk, platform, distance",
          "text_ja": "通勤客、歩く、ホーム、遠く"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Several commuters are walking along the platform.",
          "text_en": "Several commuters are walking along the platform.",
          "text_ja": "複数の通勤客がホームに沿って歩いています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "carry work bags and backpacks while moving beside the train",
          "text_en": "carry work bags and backpacks while moving beside the train",
          "text_ja": "電車のそばを移動しながら仕事用バッグやリュックを持つ"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Their movement emphasizes that the students' exchange is only a brief pause within the station's routine.",
          "text_en": "Their movement emphasizes that the students' exchange is only a brief pause within the station's routine.",
          "text_ja": "乗客の動きは、2人の交流が駅の日常の中の短い停止であることを強調します。"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "Adults waving in the background",
      "description_ja": "背景の大人が手を振っている",
      "involved_elements": [
        "element_014",
        "element_007"
      ],
      "synonyms": [
        "adults are waving",
        "a man and woman wave",
        "two adults raise their hands",
        "background people wave",
        "the adults smile and wave",
        "station visitors wave"
      ],
      "accepted_words": [
        "adults are waving",
        "a man and woman wave",
        "two adults raise their hands",
        "background people wave",
        "the adults smile and wave",
        "station visitors wave"
      ],
      "common_typos": [
        "adaults are waving",
        "man and women wave",
        "raize their hands",
        "back ground people"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "adults wave",
            "ja": "大人が手を振る"
          }
        ],
        "A2": [
          {
            "en": "a man and woman are waving",
            "ja": "男性と女性が手を振っている"
          }
        ],
        "B1": [
          {
            "en": "two adults exchange supportive waves",
            "ja": "大人2人が支援的な手振りを交わす"
          }
        ],
        "B2": [
          {
            "en": "a secondary pair participates in the broader social greeting or farewell",
            "ja": "二次的な2人がより広い挨拶または別れに参加する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a second echo of farewell in the background",
          "ja": "背景にある別れのもう一つの反響"
        },
        {
          "en": "adult hands repeating the students' message",
          "ja": "生徒たちのメッセージを繰り返す大人の手"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "adults, background, wave, smile",
          "text_en": "adults, background, wave, smile",
          "text_ja": "大人、背景、手を振る、笑顔"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "A man and a woman are also waving in the background.",
          "text_en": "A man and a woman are also waving in the background.",
          "text_ja": "背景では男性と女性も手を振っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "stand near the track side and wave with friendly smiles",
          "text_en": "stand near the track side and wave with friendly smiles",
          "text_ja": "線路側に立ち親しみのある笑顔で手を振る"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Their participation makes waving appear to be a shared social practice rather than an action limited to the students.",
          "text_en": "Their participation makes waving appear to be a shared social practice rather than an action limited to the students.",
          "text_ja": "大人の参加により、手振りは生徒だけに限られない共有の社会的行為に見えます。"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "Waiting under the station clock",
      "description_ja": "駅時計の下で移動の時刻を待っている",
      "involved_elements": [
        "element_011",
        "element_012",
        "element_015"
      ],
      "synonyms": [
        "wait at the station",
        "wait on the platform",
        "check the station time",
        "stand under the clock",
        "follow the train schedule",
        "wait for departure"
      ],
      "accepted_words": [
        "wait at the station",
        "wait on the platform",
        "check the station time",
        "stand under the clock",
        "follow the train schedule",
        "wait for departure"
      ],
      "common_typos": [
        "wait at staton",
        "wait on platfrom",
        "check the tiem",
        "under the clok"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "wait at the station",
            "ja": "駅で待つ"
          }
        ],
        "A2": [
          {
            "en": "wait for the train",
            "ja": "電車を待つ"
          }
        ],
        "B1": [
          {
            "en": "follow the railway schedule",
            "ja": "鉄道の時刻表に従う"
          }
        ],
        "B2": [
          {
            "en": "coordinate personal movement with the station's fixed timetable",
            "ja": "個人の移動を駅の固定された時刻表に合わせる"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "waiting while the clock measures the final moments",
          "ja": "時計が最後の瞬間を測る間に待つ"
        },
        {
          "en": "personal emotion moving inside public time",
          "ja": "公共の時間の中を動く個人的な感情"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "wait, clock, schedule, departure",
          "text_en": "wait, clock, schedule, departure",
          "text_ja": "待つ、時計、時刻表、出発"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "Passengers are waiting on the platform under a large clock.",
          "text_en": "Passengers are waiting on the platform under a large clock.",
          "text_ja": "乗客たちは大きな時計の下のホームで待っています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "remain on the platform while the clock marks the travel schedule",
          "text_en": "remain on the platform while the clock marks the travel schedule",
          "text_ja": "時計が移動時刻を示す間ホームにいる"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The clock places the emotional exchange inside a strict timetable, suggesting that the moment cannot continue indefinitely.",
          "text_en": "The clock places the emotional exchange inside a strict timetable, suggesting that the moment cannot continue indefinitely.",
          "text_ja": "時計は感情的な交流を厳しい時刻表の中に置き、その瞬間が無期限には続かないことを示します。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "girl beside the train door",
      "relationship": "to the left of",
      "object": "girl waving on the platform",
      "example_beginner": "One girl is to the left of the other girl.",
      "example_intermediate": "The student beside the train door stands to the left of her friend."
    },
    {
      "subject": "girl waving on the platform",
      "relationship": "to the right of",
      "object": "girl beside the train door",
      "example_beginner": "The waving girl is on the right.",
      "example_intermediate": "The student with the red ribbon stands to the right of the train-side girl."
    },
    {
      "subject": "girl beside the train door",
      "relationship": "next to",
      "object": "open train door",
      "example_beginner": "The girl is next to the open door.",
      "example_intermediate": "The left student stands immediately next to the open carriage door."
    },
    {
      "subject": "commuter train",
      "relationship": "along",
      "object": "left side of the platform",
      "example_beginner": "The train is along the left side.",
      "example_intermediate": "The stopped commuter train extends along the entire left side of the platform."
    },
    {
      "subject": "yellow tactile paving",
      "relationship": "between",
      "object": "train and walking area",
      "example_beginner": "The yellow paving is between the train and the walkway.",
      "example_intermediate": "The tactile strip runs between the train edge and the main passenger walking area."
    },
    {
      "subject": "station clock",
      "relationship": "above",
      "object": "platform",
      "example_beginner": "The clock is above the platform.",
      "example_intermediate": "A large round analog clock hangs above the right side of the platform."
    },
    {
      "subject": "station roof",
      "relationship": "over",
      "object": "passengers",
      "example_beginner": "The roof is over the passengers.",
      "example_intermediate": "The metal station roof extends over the students and commuters."
    },
    {
      "subject": "background commuters",
      "relationship": "behind",
      "object": "two students",
      "example_beginner": "The commuters are behind the girls.",
      "example_intermediate": "Several passengers walk behind the two students along the platform."
    },
    {
      "subject": "two waving adults",
      "relationship": "behind",
      "object": "girl on the right",
      "example_beginner": "The adults are behind the girl.",
      "example_intermediate": "A smiling man and woman stand behind the right-hand student near the track side."
    },
    {
      "subject": "navy duffel bag",
      "relationship": "across",
      "object": "left student's body",
      "example_beginner": "The bag is across her body.",
      "example_intermediate": "The large duffel bag hangs diagonally across the left student's body."
    },
    {
      "subject": "black school bag",
      "relationship": "over",
      "object": "right student's left shoulder",
      "example_beginner": "The black bag is over her shoulder.",
      "example_intermediate": "The structured black school bag hangs over the right student's left shoulder."
    },
    {
      "subject": "raised hands",
      "relationship": "above",
      "object": "students' shoulders",
      "example_beginner": "Their hands are above their shoulders.",
      "example_intermediate": "Both students hold their open hands well above shoulder height."
    },
    {
      "subject": "train interior",
      "relationship": "inside",
      "object": "open doorway",
      "example_beginner": "The train interior is inside the doorway.",
      "example_intermediate": "Seats and hanging straps are visible inside the open carriage doorway."
    },
    {
      "subject": "blue sky and trees",
      "relationship": "beyond",
      "object": "open side of platform",
      "example_beginner": "The sky and trees are beyond the platform.",
      "example_intermediate": "Blue sky, clouds, and green trees are visible beyond the open side of the station."
    },
    {
      "subject": "railway tracks",
      "relationship": "to the right of",
      "object": "platform",
      "example_beginner": "The tracks are to the right of the platform.",
      "example_intermediate": "Additional railway tracks run to the right of the covered passenger platform."
    },
    {
      "subject": "platform floor",
      "relationship": "below",
      "object": "students and commuters",
      "example_beginner": "The floor is below the people.",
      "example_intermediate": "Gray platform tiles and yellow guidance blocks extend below all of the standing and walking passengers."
    }
  ],
  "adjective_library": {
    "students": [
      "young",
      "cheerful",
      "uniformed",
      "friendly",
      "energetic",
      "smiling",
      "expressive",
      "connected"
    ],
    "train": [
      "silver",
      "blue-striped",
      "long",
      "metallic",
      "modern",
      "stopped",
      "reflective",
      "electric"
    ],
    "platform": [
      "long",
      "covered",
      "busy",
      "public",
      "clean",
      "gray",
      "open-sided",
      "sunlit"
    ],
    "bags": [
      "navy",
      "black",
      "large",
      "structured",
      "soft-sided",
      "zippered",
      "travel-ready",
      "school-related"
    ],
    "station": [
      "bright",
      "industrial",
      "metallic",
      "modern",
      "functional",
      "spacious",
      "daytime",
      "well-organized"
    ],
    "mood": [
      "cheerful",
      "hopeful",
      "emotional",
      "friendly",
      "energetic",
      "anticipatory",
      "positive",
      "open"
    ]
  },
  "preposition_library": [
    {
      "preposition": "on",
      "meaning_ja": "〜の上に・〜で",
      "example": "The students are standing on the platform."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜で",
      "example": "The train is stopped at the station."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "One girl is standing beside the train."
    },
    {
      "preposition": "next to",
      "meaning_ja": "〜のすぐ隣に",
      "example": "She is next to the open train door."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "Two adults are standing near the tracks."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The tactile paving is between the train and the walkway."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The train-side student is to the left of her friend."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The waving student is to the right of the train-side girl."
    },
    {
      "preposition": "above",
      "meaning_ja": "〜の上に",
      "example": "The clock is above the platform."
    },
    {
      "preposition": "below",
      "meaning_ja": "〜の下に",
      "example": "The platform tiles are below the passengers."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "Commuters are walking behind the students."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The two girls are in front of the distant passengers."
    },
    {
      "preposition": "along",
      "meaning_ja": "〜に沿って",
      "example": "The train extends along the platform."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜を横切って・越えて",
      "example": "The students wave across the platform."
    },
    {
      "preposition": "over",
      "meaning_ja": "〜の上に・掛けて",
      "example": "A school bag hangs over her shoulder."
    },
    {
      "preposition": "under",
      "meaning_ja": "〜の下で",
      "example": "Passengers wait under the station roof."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "2人以上の人物が今行っている動作を表す。",
      "examples": [
        "The two girls are waving.",
        "They are smiling at each other.",
        "Several commuters are walking along the platform."
      ],
      "hints": [
        "two girlsやtheyにはareを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "Singular subject + is + present participle (-ing)",
      "label_ja": "単数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "1人または1つの物が今している動作を表す。",
      "examples": [
        "The girl on the left is holding a bag.",
        "The student on the right is raising her hand.",
        "The train is waiting at the platform."
      ],
      "hints": [
        "the girlやthe trainにはisを使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "駅にある物や人の存在を説明する。",
      "examples": [
        "There is a large clock above the platform.",
        "There are several passengers in the background.",
        "There is an open train door beside the girl."
      ],
      "hints": [
        "単数はThere is、複数はThere areです。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Both A and B + plural verb",
      "label_ja": "Both A and B",
      "level": "beginner",
      "purpose_ja": "2人に共通する特徴や動作を表す。",
      "examples": [
        "Both girls are wearing school uniforms.",
        "Both students are smiling.",
        "Both the girls and the adults are waving."
      ],
      "hints": [
        "Both A and Bの後ろでは複数動詞を使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "人物、電車、設備の位置を説明する。",
      "examples": [
        "One girl is beside the train.",
        "The clock is above the platform.",
        "The adults are behind the student."
      ],
      "hints": [
        "beside, above, behind, betweenなどを使います。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "One person ..., while the other ...",
      "label_ja": "2人の動作を対比する構文",
      "level": "intermediate",
      "purpose_ja": "2人の位置、持ち物、動作の違いを一文で表す。",
      "examples": [
        "One girl stands beside the train, while the other stands farther along the platform.",
        "One student carries a large duffel bag, while the other carries a school bag.",
        "One ribbon is blue, while the other is dark red."
      ],
      "hints": [
        "one girlとthe otherを使うと、2人を明確に区別できます。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "while / as + clause",
      "label_ja": "同時進行を表すwhile・as",
      "level": "intermediate",
      "purpose_ja": "手を振る動作と背景の移動を同時に描写する。",
      "examples": [
        "The girls smile while they wave.",
        "Commuters walk past as the students greet each other.",
        "The train waits while passengers move along the platform."
      ],
      "hints": [
        "whileやasは「〜している間に」を表します。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "who / which / that relative clause",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を加える。",
      "examples": [
        "The girl who is standing beside the train carries a large bag.",
        "The clock, which is above the platform, is easy to see.",
        "The train that is stopped on the left has blue stripes."
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
      "purpose_ja": "電車、設備、床が置かれた状態を説明する。",
      "examples": [
        "The train is stopped at the platform.",
        "The station is covered by a metal roof.",
        "The students are surrounded by commuters and railway equipment."
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
      "purpose_ja": "画像だけでは断定できない関係や状況を慎重に表す。",
      "examples": [
        "The girls look happy.",
        "They appear to be close friends.",
        "It seems that one student may be leaving."
      ],
      "hints": [
        "確実でない気持ちや出来事にはlook, seem, appearを使います。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "may / might + base verb",
      "label_ja": "may・mightによる可能性",
      "level": "intermediate",
      "purpose_ja": "到着、出発、再会、別れの複数の可能性を表す。",
      "examples": [
        "The girl may be about to board the train.",
        "The students might be saying goodbye.",
        "The adults may know one of the girls."
      ],
      "hints": [
        "mayやmightの後ろには動詞の原形を置きます。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "because / so that + clause",
      "label_ja": "理由・目的を表す節",
      "level": "intermediate",
      "purpose_ja": "高く手を上げる理由や駅設備の目的を説明する。",
      "examples": [
        "She raises her hand high so that her friend can see it.",
        "The platform has tactile paving so that passengers can move safely.",
        "The station feels bright because sunlight enters from the open side."
      ],
      "hints": [
        "becauseは理由、so thatは目的を表します。"
      ]
    },
    {
      "id": "grammar_013",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ人物の同時動作を簡潔に表す。",
      "examples": [
        "Standing beside the open train door, the girl waves to her friend.",
        "Raising her hand above her head, the student smiles across the platform.",
        "Carrying work bags, commuters walk toward the train."
      ],
      "hints": [
        "文頭を動詞ingで始めます。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "停車、囲まれた状態、設備による背景を文頭で表す。",
      "examples": [
        "Stopped beside the platform, the train waits with its door open.",
        "Surrounded by railway equipment, the students exchange waves.",
        "Covered by a metal roof, the platform remains bright and open."
      ],
      "hints": [
        "Stopped, Surrounded, Coveredなどから始められます。"
      ]
    },
    {
      "id": "grammar_015",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "身振りや視線によるコミュニケーションの方法を説明する。",
      "examples": [
        "By raising their hands, the students make themselves easy to see.",
        "By maintaining eye contact, they preserve a sense of closeness.",
        "By carrying visible luggage, the girl suggests that she is traveling."
      ],
      "hints": [
        "By + 動詞ingで「〜することで」を表します。"
      ]
    },
    {
      "id": "grammar_016",
      "pattern": "not only A but also B",
      "label_ja": "not only A but also B",
      "level": "advanced",
      "purpose_ja": "駅の機能と感情的な意味の両方を強調する。",
      "examples": [
        "The platform is not only a transit space but also a place of reunion and farewell.",
        "The girls communicate not only through smiles but also through large gestures.",
        "The clock represents not only time but also the limits of the moment."
      ],
      "hints": [
        "AとBには同じ種類の語句を置きます。"
      ]
    },
    {
      "id": "grammar_017",
      "pattern": "although / even though + clause",
      "label_ja": "譲歩を表すalthough・even though",
      "level": "advanced",
      "purpose_ja": "距離や駅の忙しさにもかかわらず続くつながりを表す。",
      "examples": [
        "Although the girls are several meters apart, they remain emotionally connected.",
        "Even though the station is busy, their interaction is easy to notice.",
        "Although the train is still stopped, the open door suggests that departure may be near."
      ],
      "hints": [
        "althoughやeven thoughは「〜にもかかわらず」を表します。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are two high school girls."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are on ______.",
        "example": "They are on a railway platform."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are waving to each other."
      },
      {
        "step": 4,
        "question_ja": "左の生徒はどこにいますか？",
        "template": "The girl on the left is beside ______.",
        "example": "The girl on the left is beside an open train door."
      },
      {
        "step": 5,
        "question_ja": "右の生徒は何をしていますか？",
        "template": "The girl on the right is ______ing her hand.",
        "example": "The girl on the right is raising her hand."
      },
      {
        "step": 6,
        "question_ja": "背景には誰がいますか？",
        "template": "In the background, ______.",
        "example": "In the background, commuters are walking and two adults are waving."
      },
      {
        "step": 7,
        "question_ja": "どんな雰囲気ですか？",
        "template": "The scene feels ______.",
        "example": "The scene feels cheerful, bright, and hopeful."
      }
    ],
    "intermediate": [
      {
        "template": "Two high school girls are ______ing to each other on ______.",
        "example": "Two high school girls are waving to each other on a railway platform."
      },
      {
        "template": "One student is ______, while the other is ______.",
        "example": "One student is standing beside the train, while the other is standing farther along the platform."
      },
      {
        "template": "The girl with ______ is carrying ______.",
        "example": "The girl with the blue ribbon is carrying a large navy duffel bag."
      },
      {
        "template": "Behind the students, ______.",
        "example": "Behind the students, several commuters are walking beside the train."
      },
      {
        "template": "Above the platform, ______.",
        "example": "Above the platform, a large analog clock hangs from the station roof."
      },
      {
        "template": "It looks as though the girls are ______.",
        "example": "It looks as though the girls are greeting each other or saying goodbye."
      },
      {
        "template": "The open train door suggests that ______.",
        "example": "The open train door suggests that a journey is about to begin or has just ended."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Standing beside the open carriage door, the student waves warmly to her friend."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Stopped along the platform, the silver train frames the emotional exchange."
      },
      {
        "template": "Relative clause describing a person.",
        "example": "The girl who is carrying the duffel bag appears to be connected with the train journey."
      },
      {
        "template": "Relative clause describing an object.",
        "example": "The clock, which hangs above the platform, introduces the importance of time and schedules."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By raising their hands high, the students maintain contact across the busy station space."
      },
      {
        "template": "Although / even though.",
        "example": "Although several commuters are moving around them, the two students remain focused on one another."
      },
      {
        "template": "Not only A but also B.",
        "example": "The station functions not only as a transportation hub but also as a place of emotional reunion and departure."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "Two high school girls are at a train station.",
      "They are standing on a platform.",
      "They are waving to each other.",
      "The girl on the left is beside an open train door.",
      "She is carrying a large navy bag.",
      "The girl on the right is raising her hand.",
      "She has a black school bag.",
      "A silver-and-blue train is stopped beside them.",
      "Many passengers are walking in the background.",
      "There is a large clock above the platform.",
      "The station is bright and sunny."
    ],
    "intermediate": [
      "Two high school girls in navy uniforms are waving to each other on a railway platform.",
      "The student on the left stands beside the open door of a stopped silver-and-blue train.",
      "She carries a large navy duffel bag and wears a blue ribbon with her school uniform.",
      "The student on the right raises her hand high above her head and smiles across the platform.",
      "She wears a dark red ribbon and carries a structured black school bag.",
      "Yellow tactile paving runs between the train and the main walking area.",
      "Several commuters are walking beside the train in the background.",
      "A smiling man and woman are also waving near the right side of the station.",
      "A large analog clock hangs above the platform under the metal roof.",
      "Blue sky, green trees, and bright sunlight create a hopeful daytime atmosphere."
    ],
    "advanced": [
      "Standing beside the open door of a stopped commuter train, a uniformed student with a large navy duffel bag waves toward her friend.",
      "Several meters away, the second student raises her right hand above her head, allowing the gesture to remain visible across the busy platform.",
      "Although their navy uniforms visually connect them, differently colored ribbon ties and contrasting bags distinguish their individual positions and possible travel roles.",
      "The long yellow tactile strip leads the eye between the two girls and toward the commuters who continue walking in the distance.",
      "Above the platform, a large analog clock and dense railway equipment place the emotional exchange inside a strict public transportation schedule.",
      "Two adults in the background echo the students' gestures, expanding the scene beyond a private interaction between friends.",
      "The open carriage door and visible luggage suggest either arrival or departure, but the image deliberately leaves the exact narrative uncertain.",
      "Illuminated by bright daylight and framed by green trees and blue sky, the possible farewell feels hopeful rather than entirely sad.",
      "The scene presents the station not only as a place of movement but also as a temporary stage for friendship, recognition, and separation."
    ]
  },
  "full_description_support": {
    "beginner_model": "Two high school girls are at a train station. They are standing on a railway platform and waving to each other. The girl on the left is beside an open train door. She is wearing a navy school uniform with a blue ribbon and carrying a large navy bag. The girl on the right is wearing a similar uniform with a dark red ribbon. She is raising her right hand and carrying a black school bag. A silver-and-blue train is stopped beside the platform. Yellow tactile paving runs along the platform edge. Several passengers are walking in the background, and two adults are also waving. A large round clock is above the platform. The sky is blue, the sun is bright, and the scene looks cheerful.",
    "intermediate_model": "Two high school girls in navy uniforms are smiling and waving to each other on a bright railway platform. The student on the left stands immediately beside the open door of a stopped commuter train. She wears a blue ribbon, a white shirt, a navy blazer, and a plaid skirt, and she carries a large navy duffel bag with gray straps. The student on the right wears a dark red ribbon with a similar uniform and raises her right hand high above her head. A black school bag hangs from her left shoulder. The students appear to be greeting each other or saying goodbye before or after a journey. Yellow tactile paving and gray floor tiles extend between them, while several commuters walk along the train in the background. A man and a woman near the right side of the platform are also smiling and waving. A metal roof, columns, fluorescent lights, overhead electrical lines, and a large analog clock create a detailed station setting. Green trees, city buildings, blue sky, and bright daylight make the possible farewell feel energetic and hopeful.",
    "advanced_model": "On a sunlit railway platform, two uniformed high school students exchange enthusiastic waves across several meters of public station space. The student on the left stands at the open doorway of a stopped silver commuter train marked by blue horizontal stripes. Dressed in a navy blazer, white shirt, blue ribbon, and plaid skirt, she grips the strap of a substantial navy duffel bag while lifting her free hand toward her friend. Farther to the right, the second student wears a similar blazer and skirt with a dark red ribbon and navy socks. A structured black school bag hangs from her shoulder as she raises her right arm above her head and smiles directly toward the train-side student. Because both girls mirror one another's open-handed gestures and maintain clear eye contact, the scene communicates mutual recognition and emotional closeness despite the physical distance between them. The narrative remains deliberately ambiguous: the open train door and large luggage may indicate departure, arrival, boarding, or a brief pause before movement. A yellow tactile strip runs diagonally through the scene, separating the train edge from the main walking area and guiding the viewer's eye toward several commuters moving into the distance. Two adults in the right background repeat the waving gesture, suggesting that the wider moment may involve more than the two students alone. Above them, a large pale-green analog clock, metal roof beams, lights, columns, cables, and electric railway structures place the human exchange inside an organized schedule of public transportation. Beyond the covered platform, green trees, pale city buildings, white clouds, and a clear blue sky create a sense of openness. The image therefore presents the station not only as infrastructure for travel but also as a temporary emotional stage where friendship, reunion, and separation become visible through simple gestures."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "Two girls are at a train station. They are waving to each other.",
        "ja": "2人の女子が駅にいます。互いに手を振っています。",
        "focus": "複数主語にareを使い、場所と基本動作を表す。"
      },
      {
        "en": "One girl is beside the train. The other girl is on the platform.",
        "ja": "1人の女子は電車のそばにいます。もう1人はホームにいます。",
        "focus": "one girlとthe other girl、besideとonを使う。"
      },
      {
        "en": "There is a big clock above the platform, and many people are walking.",
        "ja": "ホームの上に大きな時計があり、多くの人が歩いています。",
        "focus": "There isと複数主語の現在進行形を使う。"
      }
    ],
    "A2": [
      {
        "en": "Two high school girls in navy uniforms are smiling and waving across a railway platform.",
        "ja": "紺色の制服を着た2人の女子高校生が、駅のホーム越しに笑顔で手を振っています。",
        "focus": "服装を前置詞句で加え、andで動作をつなぐ。"
      },
      {
        "en": "The girl on the left is standing beside an open train door and carrying a large duffel bag.",
        "ja": "左側の女子生徒は開いた電車のドアのそばに立ち、大きなボストンバッグを持っています。",
        "focus": "andで2つの現在進行形をつなぐ。"
      },
      {
        "en": "While the students wave, commuters are walking along the platform behind them.",
        "ja": "生徒たちが手を振る間、通勤客が後ろのホームを歩いています。",
        "focus": "whileで前景と背景の同時動作を表す。"
      }
    ],
    "B1": [
      {
        "en": "The student who is standing beside the open train door may be preparing to leave, while her friend waves from farther along the platform.",
        "ja": "開いた電車のドアのそばに立つ生徒は出発の準備をしているのかもしれず、友人はホームの少し離れた場所から手を振っています。",
        "focus": "関係代名詞who、may、whileを組み合わせる。"
      },
      {
        "en": "Although the station is busy, the two girls remain focused on each other through direct eye contact and matching gestures.",
        "ja": "駅は混雑していますが、2人は直接の視線と同じ身振りによって互いに集中しています。",
        "focus": "Althoughで対比し、throughで方法を表す。"
      },
      {
        "en": "The large duffel bag and open train door suggest that the scene is connected with either an arrival or a departure.",
        "ja": "大きなボストンバッグと開いた電車のドアから、この場面は到着または出発に関係していると考えられます。",
        "focus": "suggest thatとeither A or Bを使う。"
      }
    ],
    "B2": [
      {
        "en": "Standing at the threshold of the stopped train, the student with the blue ribbon waves toward her friend while supporting a travel bag across her body.",
        "ja": "停車中の電車の入口に立ち、青いリボンの生徒は旅行バッグを身体に掛けながら友人へ手を振っています。",
        "focus": "現在分詞の分詞構文とwhileを使う。"
      },
      {
        "en": "The large analog clock, which hangs above the platform, places their emotional exchange within the strict timing of railway travel.",
        "ja": "ホームの上に掛かる大きなアナログ時計は、2人の感情的な交流を鉄道移動の厳格な時間の中に置いています。",
        "focus": "非制限用法whichと抽象的な表現を使う。"
      },
      {
        "en": "Framed by industrial station structures yet illuminated by bright sunlight and greenery, the possible farewell conveys not only separation but also hope and continuing connection.",
        "ja": "産業的な駅構造に囲まれながら明るい日差しと緑に照らされたこの別れの可能性は、分離だけでなく希望と続くつながりも伝えています。",
        "focus": "過去分詞構文、yet、not only A but also Bを組み合わせる。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene016Data = scene016Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene016Data;
}
